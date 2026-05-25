require('dotenv').config();

process.on('uncaughtException', (err) => { console.error('[CRASH] uncaughtException:', err.message, err.stack); process.exit(1); });
process.on('unhandledRejection', (reason) => { console.error('[CRASH] unhandledRejection:', reason); process.exit(1); });

const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const Anthropic = require('@anthropic-ai/sdk');
const path = require('path');
const fs = require('fs');
const crypto = require('crypto');

const { buildSystemPrompt } = require('./prompts');
const { UNITS, getExercises, getExercisesByUnit, getExerciseById } = require('./exercises-data');
const { PARCIALES } = require('./parciales-data');
const auth = require('./auth');
const ADMIN_HTML = require('./admin-html');

const app = express();

if (!process.env.ANTHROPIC_API_KEY) { console.error('ERROR: Falta ANTHROPIC_API_KEY'); process.exit(1); }
const anthropic = new Anthropic.default({ apiKey: process.env.ANTHROPIC_API_KEY });

console.log('[ADMIN] versión:', (ADMIN_HTML.match(/<title>(.*?)<\/title>/) || [])[1]);

// ─── DB ejercicios dinámicos (admin puede agregar/borrar) ──────
const DATA_DIR = process.env.DATA_DIR || path.join(__dirname, '../data');
const EX_DB_PATH = path.join(DATA_DIR, 'exercises_extra.json');

// ─── Limpiar archivos stale de QuímicaCBC del volumen ─────────
// Si el volumen tiene un /data/public/ con archivos del proyecto anterior,
// los eliminamos para que el servidor siempre sirva desde el repo (/app/public/).
(function cleanStaleVolumePublic() {
  const dataPublicDir = path.join(DATA_DIR, 'public');
  if (!fs.existsSync(dataPublicDir)) return;
  const testFile = path.join(dataPublicDir, 'landing.html');
  try {
    if (fs.existsSync(testFile)) {
      const content = fs.readFileSync(testFile, 'utf8');
      if (content.includes('QuímicaCBC') || content.includes('QuimicaCBC') || content.includes('quimicacbc')) {
        fs.rmSync(dataPublicDir, { recursive: true, force: true });
        console.log('[BOOT] Eliminado DATA_DIR/public con archivos stale de QuímicaCBC');
        return;
      }
    }
    // El directorio existe pero no tiene landing.html reconocible — lo eliminamos igual
    // para que no interfiera con el public/ del repo.
    fs.rmSync(dataPublicDir, { recursive: true, force: true });
    console.log('[BOOT] Eliminado DATA_DIR/public (directorio inesperado en volumen)');
  } catch (e) {
    console.error('[BOOT] No se pudo limpiar DATA_DIR/public:', e.message);
  }
}());

function initExDB() {
  if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });
  if (!fs.existsSync(EX_DB_PATH))
    fs.writeFileSync(EX_DB_PATH, JSON.stringify({ exercises: {}, nextId: 9000 }, null, 2));
}
function readExDB() { initExDB(); return JSON.parse(fs.readFileSync(EX_DB_PATH, 'utf8')); }
function writeExDB(data) { fs.writeFileSync(EX_DB_PATH, JSON.stringify(data, null, 2)); }

function getAllExercises() {
  const md = getExercises();
  const extra = readExDB().exercises;
  return { ...md, ...extra };
}

function getUnitExercises(unitNum) {
  const fromMd = getExercisesByUnit(unitNum);
  const extra = Object.values(readExDB().exercises).filter(e => e.unidad === parseInt(unitNum));
  return [...fromMd, ...extra];
}

// ─── Express ──────────────────────────────────────────────────
app.set('trust proxy', 1);
app.use(helmet({ contentSecurityPolicy: false }));
app.use(cors({
  origin: (origin, cb) => {
    const ok = [process.env.ALLOWED_ORIGIN, 'http://localhost:3000', 'http://localhost:3001'].filter(Boolean);
    if (!origin || ok.includes(origin)) cb(null, true);
    else cb(new Error('Origen no permitido'));
  },
  methods: ['GET', 'POST', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization', 'x-admin-key'],
}));
app.use(express.json({ limit: '2mb' }));

// Rate limiters
const lim       = rateLimit({ windowMs: 3600000, max: parseInt(process.env.RATE_LIMIT_MAX) || 60, message: { error: 'Demasiadas consultas. Intentá en una hora.' } });
const authLim   = rateLimit({ windowMs: 15 * 60 * 1000, max: 10, message: { error: 'Demasiados intentos. Esperá 15 minutos.' }, standardHeaders: true, legacyHeaders: false });
const adminLim  = rateLimit({ windowMs: 60 * 1000, max: 30, message: { error: 'Demasiadas peticiones admin' } });

// ─── Mantenimiento ────────────────────────────────────────────
app.use((req, res, next) => {
  if (req.path.startsWith('/api/admin') || req.path.startsWith('/api/health')) return next();
  const maint = auth.getMaintenance();
  if (!maint.active) return next();
  if (req.path.startsWith('/api/')) return res.status(503).json({ error: maint.mensaje });
  next();
});

// ─── HTML con variables inyectadas ────────────────────────────
function serveHtml(res, filename) {
  const filePath = path.join(__dirname, '../public', filename);
  let html = fs.readFileSync(filePath, 'utf8');
  const gaId  = process.env.GA_MEASUREMENT_ID || '';
  const waNum = (process.env.WHATSAPP_NUMBER || '').replace(/\D/g, '');
  const gaTag = gaId ? `<script async src="https://www.googletagmanager.com/gtag/js?id=${gaId}"></script><script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${gaId}');</script>` : '';
  html = html.replace('<!-- GA4_TAG -->', gaTag);
  const waBtn = waNum ? `<a href="https://wa.me/${waNum}?text=Hola,%20tengo%20una%20consulta%20sobre%20Matem%C3%A1ticaCBC" target="_blank" rel="noopener" aria-label="WhatsApp" style="position:fixed;bottom:264px;right:24px;z-index:9999;width:56px;height:56px;background:#25D366;border-radius:50%;display:flex;align-items:center;justify-content:center;box-shadow:0 4px 20px rgba(37,211,102,0.45);text-decoration:none;"><svg viewBox="0 0 24 24" width="28" height="28" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg></a>` : '';
  html = html.replace('<!-- WA_BUTTON -->', waBtn);
  html = html.replace('<!-- CONTACT_EMAIL_BTN -->', '');
  res.type('html').send(html);
}

app.get('/', (req, res) => serveHtml(res, 'landing.html'));
app.use(express.static(path.join(__dirname, '../public'), { index: false }));

// ─── Auth middleware ───────────────────────────────────────────
function requireAuth(req, res, next) {
  const token = req.headers.authorization?.replace('Bearer ', '');
  const user = auth.getSession(token);
  if (!user) return res.status(401).json({ error: 'Sesión expirada. Iniciá sesión nuevamente.' });
  req.user = user;
  next();
}

const ADMIN_KEY = process.env.ADMIN_KEY || 'cambiar-esto';
function requireAdmin(req, res, next) {
  const key = req.headers['x-admin-key'];
  if (!key || key !== ADMIN_KEY || key === 'cambiar-esto') return res.status(403).json({ error: 'No autorizado' });
  next();
}

// ─── Email helpers ─────────────────────────────────────────────
function sendEmail({ to, subject, html }) {
  const KEY = process.env.RESEND_API_KEY;
  if (!KEY) return Promise.resolve(false);
  const from = process.env.FROM_EMAIL || 'MatemáticaCBC <noreply@matematicacbc.com>';
  return fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { 'Authorization': 'Bearer ' + KEY, 'Content-Type': 'application/json' },
    body: JSON.stringify({ from, to, subject, html }),
  }).then(r => r.ok).catch(e => { console.error('Resend error:', e.message); return false; });
}

function sendRenewalReminders() {
  const expiring = auth.getUsersExpiringIn(3);
  if (!expiring.length) return;
  const appUrl = process.env.ALLOWED_ORIGIN || 'https://matematicacbc.com';
  expiring.forEach(user => {
    const planNombre = user.plan === 'completo' ? 'Completo' : 'Estándar';
    const expDate = new Date(user.planExpiresAt).toLocaleDateString('es-AR', { day: '2-digit', month: 'long', year: 'numeric' });
    sendEmail({
      to: user.email,
      subject: `Tu plan ${planNombre} vence en 3 días — MatemáticaCBC`,
      html: `<div style="font-family:sans-serif;max-width:480px;margin:auto;padding:32px;background:#0d1117;color:#e6edf3;border-radius:12px;">
        <h2 style="color:#ff8c00;">∑ MatemáticaCBC</h2>
        <p>Hola ${user.nombre},</p>
        <p>Tu plan <strong>${planNombre}</strong> vence el <strong>${expDate}</strong>.</p>
        <a href="${appUrl}/app?renovar=1" style="display:inline-block;padding:14px 32px;background:#ff8c00;color:#000;border-radius:8px;text-decoration:none;font-weight:700;">Renovar mi plan →</a>
      </div>`,
    }).catch(() => {});
  });
  console.log(`[renewal] ${expiring.length} recordatorio(s) enviados.`);
}

setTimeout(() => { sendRenewalReminders(); setInterval(sendRenewalReminders, 24 * 60 * 60 * 1000); }, 5000);

// ─── AUTH ROUTES ───────────────────────────────────────────────
app.post('/api/register', authLim, async (req, res) => {
  const { nombre, email, pass } = req.body;
  if (!nombre || !email || !pass) return res.status(400).json({ error: 'Completá todos los campos' });
  if (pass.length < 6) return res.status(400).json({ error: 'Contraseña mínimo 6 caracteres' });
  if (pass.length > 128) return res.status(400).json({ error: 'Contraseña inválida' });
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 254) return res.status(400).json({ error: 'Email inválido' });
  const result = await auth.createUser({ nombre, email, pass });
  if (!result.ok) return res.status(400).json({ error: result.error });
  sendEmail({
    to: email,
    subject: 'Verificá tu email — MatemáticaCBC',
    html: `<div style="font-family:sans-serif;max-width:480px;margin:auto;padding:32px;background:#0d1117;color:#e6edf3;border-radius:12px;">
      <h2 style="color:#ff8c00;">∑ MatemáticaCBC</h2>
      <p>Hola ${result.nombre},</p>
      <p>Tu código de verificación es:</p>
      <div style="font-size:40px;font-weight:bold;letter-spacing:10px;text-align:center;padding:24px;background:#1c2128;border-radius:8px;color:#ff8c00;font-family:monospace;">${result.verificationCode}</div>
      <p style="color:#8b949e;font-size:13px;">Expira en 30 minutos. Si no te registraste, ignorá este email.</p>
    </div>`,
  });
  res.json({ requiresVerification: true, email });
});

app.post('/api/verify-email', authLim, (req, res) => {
  const { email, code } = req.body;
  if (!email || !code) return res.status(400).json({ error: 'Faltan datos' });
  const result = auth.verifyEmailCode(email, code);
  if (!result.ok) return res.status(400).json({ error: result.error });
  if (!result.alreadyVerified) {
    sendEmail({
      to: email,
      subject: '¡Bienvenido/a a MatemáticaCBC!',
      html: `<div style="font-family:sans-serif;max-width:480px;margin:auto;padding:32px;background:#0d1117;color:#e6edf3;border-radius:12px;">
        <h2 style="color:#ff8c00;">∑ MatemáticaCBC</h2>
        <p>Hola ${result.user?.nombre || ''},</p>
        <p>Tu cuenta está activa. Tenés <strong style="color:#ff8c00;">7 días de acceso gratuito</strong> para empezar.</p>
        <p>Accedé desde: <a href="${process.env.ALLOWED_ORIGIN || 'https://matematicacbc.com'}/app" style="color:#ff8c00;">matematicacbc.com/app</a></p>
      </div>`,
    });
  }
  res.json({ token: result.token, user: result.user });
});

app.post('/api/resend-verification', authLim, (req, res) => {
  const { email } = req.body;
  if (!email) return res.status(400).json({ error: 'Ingresá tu email' });
  const result = auth.resendVerificationCode(email);
  if (!result.ok) return res.status(400).json({ error: result.error });
  sendEmail({
    to: email,
    subject: 'Nuevo código de verificación — MatemáticaCBC',
    html: `<div style="font-family:sans-serif;max-width:480px;margin:auto;padding:32px;background:#0d1117;color:#e6edf3;border-radius:12px;">
      <h2 style="color:#ff8c00;">∑ MatemáticaCBC</h2>
      <p>Hola ${result.nombre},</p>
      <p>Tu nuevo código de verificación es:</p>
      <div style="font-size:40px;font-weight:bold;letter-spacing:10px;text-align:center;padding:24px;background:#1c2128;border-radius:8px;color:#ff8c00;font-family:monospace;">${result.verificationCode}</div>
      <p style="color:#8b949e;font-size:13px;">Expira en 30 minutos. Si no te registraste, ignorá este email.</p>
    </div>`,
  });
  res.json({ ok: true });
});

app.post('/api/login', authLim, async (req, res) => {
  const { email, pass } = req.body;
  if (!email || !pass) return res.status(400).json({ error: 'Completá email y contraseña' });
  if (pass.length > 128) return res.status(400).json({ error: 'Contraseña incorrecta' });
  const result = await auth.loginUser(email, pass);
  if (!result.ok) {
    const body = { error: result.error };
    if (result.requiresVerification) { body.requiresVerification = true; body.email = result.email; }
    return res.status(401).json(body);
  }
  res.json({ token: result.token, user: result.user });
});

app.post('/api/logout', requireAuth, (req, res) => {
  auth.logoutUser(req.headers.authorization?.replace('Bearer ', ''));
  res.json({ ok: true });
});

app.get('/api/me', requireAuth, (req, res) => res.json({ user: req.user }));

app.post('/api/reset-request', authLim, (req, res) => {
  const { email } = req.body;
  if (!email) return res.status(400).json({ error: 'Ingresá tu email' });
  const result = auth.generateResetToken(email);
  if (!result.ok) return res.status(400).json({ error: result.error });
  sendEmail({
    to: email,
    subject: 'Código para cambiar contraseña — MatemáticaCBC',
    html: `<div style="font-family:sans-serif;max-width:480px;margin:auto;padding:32px;background:#0d1117;color:#e6edf3;border-radius:12px;">
      <h2 style="color:#ff8c00;">∑ MatemáticaCBC</h2>
      <p>Hola ${result.nombre},</p>
      <p>Tu código para cambiar la contraseña:</p>
      <div style="font-size:36px;font-weight:bold;letter-spacing:8px;text-align:center;padding:24px;background:#1c2128;border-radius:8px;color:#fde68a;font-family:monospace;">${result.token}</div>
      <p style="color:#8b949e;font-size:13px;">Expira en 30 minutos.</p>
    </div>`,
  });
  res.json({ ok: true, token: process.env.RESEND_API_KEY ? null : result.token, emailEnviado: !!process.env.RESEND_API_KEY });
});

app.post('/api/reset-confirm', authLim, async (req, res) => {
  const { token, newPass } = req.body;
  if (!token || !newPass) return res.status(400).json({ error: 'Faltan datos' });
  if (newPass.length < 6) return res.status(400).json({ error: 'Mínimo 6 caracteres' });
  if (newPass.length > 128) return res.status(400).json({ error: 'Contraseña inválida' });
  const result = await auth.resetPasswordWithToken(token, newPass);
  if (!result.ok) return res.status(400).json({ error: result.error });
  res.json({ ok: true });
});

// ─── EJERCICIOS ────────────────────────────────────────────────
app.get('/api/units', requireAuth, (req, res) => {
  const result = {};
  Object.entries(UNITS).forEach(([num, unit]) => {
    const count = getUnitExercises(parseInt(num)).length;
    result[num] = { ...unit, count, ejercicios: undefined };
  });
  res.json({ units: result });
});

app.get('/api/exercises/:unit', requireAuth, (req, res) => {
  const unit = parseInt(req.params.unit);
  const exercises = getUnitExercises(unit);
  res.json({ exercises });
});

app.get('/api/parciales/:tipo', requireAuth, (req, res) => {
  const tipo = req.params.tipo;
  if (!PARCIALES[tipo]) return res.status(400).json({ error: 'Tipo inválido' });
  res.json({ parciales: PARCIALES[tipo] });
});

// ─── TUTOR IA ─────────────────────────────────────────────────
app.post('/api/tutor', lim, requireAuth, async (req, res) => {
  const { exerciseId, messages, parcialMode } = req.body;
  if (!exerciseId || !messages || !Array.isArray(messages) || !messages.length)
    return res.status(400).json({ error: 'Faltan datos' });
  const check = auth.checkConsulta(req.user.id);
  if (!check.ok) return res.status(429).json({ error: check.error });

  const exercise = getAllExercises()[parseInt(exerciseId)];
  if (!exercise) return res.status(400).json({ error: 'Ejercicio no encontrado' });

  let systemPrompt = buildSystemPrompt(exerciseId, exercise);
  if (parcialMode) systemPrompt += '\n\nMODO PARCIAL: No indiques si la respuesta es correcta o incorrecta. Solo guiá el proceso.';

  const cleanMessages = messages.slice(-20).map(m => ({
    role: m.role === 'assistant' ? 'assistant' : 'user',
    content: typeof m.content === 'string' ? m.content.substring(0, 2000) : m.content,
  }));

  try {
    const r = await anthropic.messages.create({
      model: 'claude-haiku-4-5-20251001',
      max_tokens: parseInt(process.env.MAX_TOKENS) || 500,
      system: systemPrompt,
      messages: cleanMessages,
    });
    return res.json({ response: r.content?.[0]?.text || '', restantes: check.restantes });
  } catch (e) {
    console.error('[tutor]', e.message);
    if (e.status === 429) return res.status(429).json({ error: 'Límite de API alcanzado. Intentá en unos minutos.' });
    return res.status(500).json({ error: 'Error interno. Intentá de nuevo.' });
  }
});

// ─── TUTOR LIBRE (plan Completo) ───────────────────────────────
app.post('/api/tutor-libre', lim, requireAuth, async (req, res) => {
  const check2 = auth.checkTutorLibre(req.user.id);
  if (!check2.ok) return res.status(403).json({ error: check2.error });
  const { enunciado, messages } = req.body;
  if (!enunciado || !messages) return res.status(400).json({ error: 'Faltan datos' });
  if (enunciado.length > 2000) return res.status(400).json({ error: 'Enunciado muy largo' });
  const check = auth.checkConsulta(req.user.id);
  if (!check.ok) return res.status(429).json({ error: check.error });

  const systemPrompt = `Sos un tutor de Matemática CBC (UBA). El alumno ingresó su propio ejercicio. Guialo sin dar la respuesta directa.
EJERCICIO: ${enunciado}
REGLAS: Nunca des la respuesta final. Ante error: "¿Querés que te indique el error o lo intentás de nuevo?" Máximo 3 oraciones. Sin bullets. Español AR, tuteo. Usá notación LaTeX cuando sea necesario.`;

  try {
    const r = await anthropic.messages.create({
      model: 'claude-haiku-4-5-20251001',
      max_tokens: parseInt(process.env.MAX_TOKENS) || 500,
      system: systemPrompt,
      messages: messages.slice(-20),
    });
    return res.json({ response: r.content?.[0]?.text || '' });
  } catch (e) { return res.status(500).json({ error: 'Error interno' }); }
});

// ─── STATS ─────────────────────────────────────────────────────
app.post('/api/stats/sync', requireAuth, (req, res) => {
  const { totalEx, totalMinutes, unitsWorked } = req.body;
  res.json(auth.syncUserStats(req.user.id, { totalEx, totalMinutes, unitsWorked }));
});

// ─── FAVORITOS ────────────────────────────────────────────────
app.get('/api/favorites', requireAuth, (req, res) => {
  res.json(auth.getFavorites(req.user.id));
});

app.post('/api/favorites/toggle', requireAuth, (req, res) => {
  const { exerciseId } = req.body;
  if (!exerciseId) return res.status(400).json({ error: 'Falta exerciseId' });
  res.json(auth.toggleFavorite(req.user.id, String(exerciseId)));
});

// ─── MERCADOPAGO ───────────────────────────────────────────────
const MP_PRICES = {
  estandar: parseInt(process.env.MP_PRICE_ESTANDAR) || 15990,
  completo: parseInt(process.env.MP_PRICE_COMPLETO) || 25990,
};
const MP_TITLES = {
  estandar: 'MatemáticaCBC — Plan Estándar',
  completo: 'MatemáticaCBC — Plan Premium',
};

app.post('/api/mp/create-preference', lim, requireAuth, async (req, res) => {
  const token = process.env.MP_ACCESS_TOKEN;
  if (!token) return res.status(503).json({ error: 'Pagos no configurados' });
  const { plan } = req.body;
  if (!MP_PRICES[plan]) return res.status(400).json({ error: 'Plan inválido' });
  try {
    const { MercadoPagoConfig, Preference } = require('mercadopago');
    const mpClient = new MercadoPagoConfig({ accessToken: token });
    const preference = new Preference(mpClient);
    const result = await preference.create({ body: {
      items: [{ title: MP_TITLES[plan], quantity: 1, unit_price: MP_PRICES[plan], currency_id: 'ARS' }],
      external_reference: `${req.user.id}|${plan}`,
      back_urls: {
        success: `${process.env.ALLOWED_ORIGIN}/app?pago=ok`,
        failure: `${process.env.ALLOWED_ORIGIN}/app?pago=error`,
        pending: `${process.env.ALLOWED_ORIGIN}/app?pago=pendiente`,
      },
      auto_return: 'approved',
      notification_url: `${process.env.ALLOWED_ORIGIN}/api/mp/webhook`,
    }});
    res.json({ initPoint: result.init_point });
  } catch (e) {
    console.error('MP error:', e.message);
    res.status(500).json({ error: 'Error al crear preferencia de pago' });
  }
});

app.post('/api/mp/webhook', async (req, res) => {
  res.sendStatus(200);
  if (!process.env.MP_ACCESS_TOKEN) return;

  if (process.env.MP_WEBHOOK_SECRET) {
    const xSignature = req.headers['x-signature'];
    const xRequestId = req.headers['x-request-id'];
    const dataId = req.query['data.id'] || req.body?.data?.id;
    if (!xSignature || !xRequestId) return;
    const parts = xSignature.split(',');
    let ts, v1;
    for (const part of parts) { const [k, v] = part.trim().split('='); if (k === 'ts') ts = v; if (k === 'v1') v1 = v; }
    if (!ts || !v1) return;
    const manifest = `id:${dataId};request-id:${xRequestId};ts:${ts};`;
    const expected = crypto.createHmac('sha256', process.env.MP_WEBHOOK_SECRET).update(manifest).digest('hex');
    if (!crypto.timingSafeEqual(Buffer.from(v1), Buffer.from(expected))) return;
  }

  const body = req.body || {};
  const type = body.type || req.query.type || req.query.topic;
  const paymentId = body.data?.id || req.query['data.id'] || req.query.id;
  if (type === 'payment' && paymentId) {
    try {
      const { MercadoPagoConfig, Payment } = require('mercadopago');
      const mpClient = new MercadoPagoConfig({ accessToken: process.env.MP_ACCESS_TOKEN });
      const payment = new Payment(mpClient);
      const p = await payment.get({ id: paymentId });
      console.log(`[mp-webhook] Payment ${paymentId} status=${p.status} ref=${p.external_reference}`);
      if (p.status === 'approved') {
        const [userId, plan] = (p.external_reference || '').split('|');
        if (userId && plan && MP_PRICES[plan]) {
          const result = auth.updateUserPlan(userId, plan, 30, p.transaction_amount, paymentId);
          if (!result.alreadyProcessed) console.log(`[mp-webhook] Plan actualizado: userId=${userId} plan=${plan}`);
        }
      }
    } catch (e) { console.error('[mp-webhook]', e.message); }
  }
});

// ─── ADMIN ─────────────────────────────────────────────────────
app.get('/api/admin/stats', adminLim, requireAdmin, (req, res) => {
  const users = auth.listUsers();
  const now = Date.now();
  const sevenDaysAgo = now - 7 * 86400000;
  const fourteenDaysAgo = now - 14 * 86400000;
  const byPlan = { gratis: 0, estandar: 0, completo: 0 };
  let recentlyActive = 0, totalConsultas = 0;
  const newByDayMap = {};
  users.forEach(u => {
    byPlan[u.plan] = (byPlan[u.plan] || 0) + 1;
    if (u.consultasFecha && new Date(u.consultasFecha).getTime() >= sevenDaysAgo) recentlyActive++;
    totalConsultas += u.consultasTotales || 0;
    const created = new Date(u.createdAt);
    if (created.getTime() >= fourteenDaysAgo) {
      const key = created.toISOString().slice(0, 10);
      newByDayMap[key] = (newByDayMap[key] || 0) + 1;
    }
  });
  const total = users.length;
  const pagos = (byPlan.estandar || 0) + (byPlan.completo || 0);
  const newByDay = [];
  for (let i = 13; i >= 0; i--) {
    const d = new Date(now - i * 86400000);
    const key = d.toISOString().slice(0, 10);
    newByDay.push({ date: key, label: d.toLocaleDateString('es-AR', { day: '2-digit', month: '2-digit' }), count: newByDayMap[key] || 0 });
  }
  res.json({ total, recentlyActive, recentlyInactive: total - recentlyActive, byPlan, pagos, conversionRate: total > 0 ? Math.round((pagos / total) * 100) : 0, totalConsultas, newByDay });
});

app.get('/api/admin/users', adminLim, requireAdmin, (req, res) => res.json({ users: auth.listUsers() }));
app.post('/api/admin/users/:id/plan', adminLim, requireAdmin, (req, res) => res.json(auth.updateUserPlan(req.params.id, req.body.plan)));
app.post('/api/admin/users/:id/toggle', adminLim, requireAdmin, (req, res) => res.json(auth.toggleUserActive(req.params.id)));
app.post('/api/admin/users/:id/reset-progress', adminLim, requireAdmin, (req, res) => res.json(auth.resetUserProgress(req.params.id)));

app.get('/api/admin/exercises', adminLim, requireAdmin, (req, res) => {
  const unit = req.query.unit;
  const extra = Object.values(readExDB().exercises);
  const filtered = unit ? extra.filter(e => e.unidad === parseInt(unit)) : extra;
  res.json({ exercises: filtered, mdExercises: Object.keys(getExercises()).length });
});

app.post('/api/admin/exercises', adminLim, requireAdmin, (req, res) => {
  const db = readExDB();
  const { unidad, lv, type, text, ans, steps } = req.body;
  if (!unidad || !type || !text || !ans) return res.status(400).json({ error: 'Faltan campos obligatorios' });
  const id = parseInt(req.body.id) || db.nextId++;
  if (id >= db.nextId) db.nextId = id + 1;
  const lvMap = { 1: { lvc: 'lv1', lvl: '⭐ NIVEL 1' }, 2: { lvc: 'lv2', lvl: '⭐⭐ NIVEL 2' }, 3: { lvc: 'lv3', lvl: '⭐⭐⭐ NIVEL 3' } };
  db.exercises[id] = { id, unidad: parseInt(unidad), lv: parseInt(lv) || 2, ...(lvMap[lv] || lvMap[2]), type, fuente: 'admin', text, datos: [], ans, balancear: false, steps: steps || ['—','—','—','—','—','—'] };
  writeExDB(db);
  res.json({ ok: true, id });
});

app.delete('/api/admin/exercises/:id', adminLim, requireAdmin, (req, res) => {
  const db = readExDB();
  delete db.exercises[req.params.id];
  writeExDB(db);
  res.json({ ok: true });
});

app.post('/api/admin/send-renewal-emails', adminLim, requireAdmin, (req, res) => {
  sendRenewalReminders();
  res.json({ ok: true, count: auth.getUsersExpiringIn(3).length });
});

app.get('/api/admin/maintenance', adminLim, requireAdmin, (req, res) => res.json(auth.getMaintenance()));
app.post('/api/admin/maintenance', adminLim, requireAdmin, (req, res) => {
  const { active, mensaje } = req.body;
  res.json(auth.setMaintenance(!!active, mensaje));
});

// ─── MISC ──────────────────────────────────────────────────────
app.get('/api/health', (req, res) => {
  const maint = auth.getMaintenance();
  res.json({ status: 'ok', maintenance: maint.active, timestamp: new Date().toISOString() });
});

app.get('/admin', (req, res) => {
  res.set('Cache-Control', 'no-store, no-cache, must-revalidate');
  res.type('html').send(ADMIN_HTML);
});
app.get('/app', (req, res) => serveHtml(res, 'index.html'));
app.get('/terminos', (req, res) => res.sendFile(path.join(__dirname, '../public/terminos.html')));
app.get('/privacidad', (req, res) => res.sendFile(path.join(__dirname, '../public/privacidad.html')));
app.get('*', (req, res) => serveHtml(res, 'index.html'));

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`MatemáticaCBC corriendo en puerto ${PORT}`));
module.exports = app;
