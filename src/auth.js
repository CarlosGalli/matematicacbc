// auth.js — MatemáticaCBC
// Seguridad: bcrypt, rate limiting por email, timing constante, tokens criptográficos
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const bcrypt = require('bcrypt');

const BCRYPT_ROUNDS = 12;
const DATA_DIR = process.env.DATA_DIR || path.join(__dirname, '../data');
const DB_PATH = path.join(DATA_DIR, 'users.json');
const ATTEMPTS_PATH = path.join(DATA_DIR, 'login_attempts.json');
const MAX_ATTEMPTS = 5;
const LOCKOUT_MS = 15 * 60 * 1000;

function initDB() {
  if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });
  if (!fs.existsSync(DB_PATH))
    fs.writeFileSync(DB_PATH, JSON.stringify({ users: [], sessions: {}, resetTokens: {} }, null, 2));
  if (!fs.existsSync(ATTEMPTS_PATH))
    fs.writeFileSync(ATTEMPTS_PATH, JSON.stringify({}), 'utf8');
}

function readDB() {
  initDB();
  const d = JSON.parse(fs.readFileSync(DB_PATH, 'utf8'));
  if (!d.resetTokens) d.resetTokens = {};
  if (!d.sessions) d.sessions = {};
  return d;
}
function writeDB(d) { fs.writeFileSync(DB_PATH, JSON.stringify(d, null, 2)); }

function readAttempts() {
  try { return JSON.parse(fs.readFileSync(ATTEMPTS_PATH, 'utf8')); } catch { return {}; }
}
function writeAttempts(d) { fs.writeFileSync(ATTEMPTS_PATH, JSON.stringify(d), 'utf8'); }

async function hashPass(pass) { return bcrypt.hash(pass, BCRYPT_ROUNDS); }

async function verifyPass(pass, hash) {
  if (hash.length === 64 && !hash.startsWith('$2')) {
    const old = crypto.createHash('sha256').update(pass + 'matematicacbc_salt_2025').digest('hex');
    return hash === old;
  }
  return bcrypt.compare(pass, hash);
}

function generateToken() { return crypto.randomBytes(32).toString('hex'); }

function checkLoginAttempts(email) {
  const a = readAttempts();
  const r = a[email.toLowerCase().trim()];
  if (!r) return { ok: true };
  if (r.lockedUntil && Date.now() < r.lockedUntil) {
    const mins = Math.ceil((r.lockedUntil - Date.now()) / 60000);
    return { ok: false, error: `Cuenta bloqueada. Intentá en ${mins} min.` };
  }
  return { ok: true };
}

function recordAttempt(email, success) {
  const a = readAttempts();
  const key = email.toLowerCase().trim();
  if (success) { delete a[key]; writeAttempts(a); return; }
  if (!a[key]) a[key] = { count: 0 };
  if (a[key].lockedUntil && Date.now() >= a[key].lockedUntil) a[key] = { count: 0 };
  a[key].count++;
  a[key].lastAttempt = Date.now();
  if (a[key].count >= MAX_ATTEMPTS) a[key].lockedUntil = Date.now() + LOCKOUT_MS;
  writeAttempts(a);
}

function checkAndDowngradePlan(user, db) {
  if ((user.plan === 'completo' || user.plan === 'estandar') && user.planExpiresAt) {
    if (Date.now() > user.planExpiresAt) {
      user.plan = 'gratis';
      delete user.planExpiresAt;
      if (db) writeDB(db);
    }
  }
}

function getPlanLimits(user) {
  const planActivo = (user.plan === 'completo' || user.plan === 'estandar') && user.planExpiresAt
    ? Date.now() <= user.planExpiresAt
    : true;
  const planEfectivo = planActivo ? user.plan : 'gratis';
  if (planEfectivo === 'completo') return { consultasDia: 999, tutorLibre: true, trial: false };
  if (planEfectivo === 'estandar') return { consultasDia: 999, tutorLibre: false, trial: false };
  const dias = Math.floor((Date.now() - new Date(user.createdAt).getTime()) / 86400000);
  return { consultasDia: 999, tutorLibre: true, trial: true, trialActivo: dias < 7, diasRestantes: Math.max(0, 7 - dias) };
}

function generateSixDigitCode() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

async function createUser({ nombre, email, pass, plan = 'gratis' }) {
  const db = readDB();
  if (db.users.find(u => u.email === email.toLowerCase()))
    return { ok: false, error: 'El email ya está registrado' };
  const verificationCode = generateSixDigitCode();
  const user = {
    id: Date.now().toString(),
    nombre: nombre.trim().substring(0, 100),
    email: email.toLowerCase().trim(),
    passHash: await hashPass(pass),
    plan,
    consultasHoy: 0,
    consultasFecha: new Date().toDateString(),
    consultasTotales: 0,
    createdAt: new Date().toISOString(),
    active: true,
    emailVerificado: false,
    verificationCode,
    verificationCodeExpires: Date.now() + 30 * 60 * 1000,
  };
  db.users.push(user);
  writeDB(db);
  return { ok: true, user: sanitize(user), verificationCode, nombre: user.nombre };
}

function verifyEmailCode(email, code) {
  const db = readDB();
  const user = db.users.find(u => u.email === email.toLowerCase().trim());
  if (!user) return { ok: false, error: 'Usuario no encontrado' };
  if (user.emailVerificado) return { ok: true, alreadyVerified: true };
  if (!user.verificationCode || user.verificationCode !== code.toString())
    return { ok: false, error: 'Código incorrecto' };
  if (Date.now() > (user.verificationCodeExpires || 0))
    return { ok: false, error: 'El código expiró. Solicitá uno nuevo.' };
  user.emailVerificado = true;
  delete user.verificationCode;
  delete user.verificationCodeExpires;
  const token = generateToken();
  db.sessions[token] = { userId: user.id, createdAt: Date.now() };
  writeDB(db);
  return { ok: true, token, user: sanitize(user) };
}

function resendVerificationCode(email) {
  const db = readDB();
  const user = db.users.find(u => u.email === email.toLowerCase().trim());
  if (!user) return { ok: false, error: 'Usuario no encontrado' };
  if (user.emailVerificado) return { ok: false, error: 'El email ya está verificado' };
  const verificationCode = generateSixDigitCode();
  user.verificationCode = verificationCode;
  user.verificationCodeExpires = Date.now() + 30 * 60 * 1000;
  writeDB(db);
  return { ok: true, verificationCode, nombre: user.nombre };
}

async function loginUser(email, pass) {
  const attemptCheck = checkLoginAttempts(email);
  if (!attemptCheck.ok) return attemptCheck;
  const db = readDB();
  const user = db.users.find(u => u.email === email.toLowerCase() && u.active);
  if (!user) {
    await bcrypt.hash('dummy_timing', BCRYPT_ROUNDS);
    recordAttempt(email, false);
    return { ok: false, error: 'Email o contraseña incorrectos' };
  }
  const valid = await verifyPass(pass, user.passHash);
  if (!valid) {
    recordAttempt(email, false);
    const a = readAttempts();
    const rem = MAX_ATTEMPTS - (a[email.toLowerCase().trim()]?.count || 0);
    if (rem <= 2 && rem > 0) return { ok: false, error: `Contraseña incorrecta. ${rem} intento${rem > 1 ? 's' : ''} restante${rem > 1 ? 's' : ''}.` };
    return { ok: false, error: 'Email o contraseña incorrectos' };
  }
  recordAttempt(email, true);
  if (user.emailVerificado === false) {
    return { ok: false, error: 'Verificá tu email antes de ingresar.', requiresVerification: true, email: user.email };
  }
  if (user.passHash.length === 64 && !user.passHash.startsWith('$2')) {
    user.passHash = await hashPass(pass);
  }
  if (user.consultasFecha !== new Date().toDateString()) {
    user.consultasHoy = 0;
    user.consultasFecha = new Date().toDateString();
  }
  user.lastLogin = new Date().toISOString();
  const token = generateToken();
  db.sessions[token] = { userId: user.id, createdAt: Date.now() };
  writeDB(db);
  return { ok: true, token, user: sanitize(user) };
}

function getSession(token) {
  if (!token) return null;
  const db = readDB();
  const s = db.sessions[token];
  if (!s) return null;
  if (Date.now() - s.createdAt > 30 * 86400000) { delete db.sessions[token]; writeDB(db); return null; }
  const user = db.users.find(u => u.id === s.userId);
  return user && user.active ? user : null;
}

function logoutUser(token) { const db = readDB(); delete db.sessions[token]; writeDB(db); }

function checkConsulta(userId) {
  const db = readDB();
  const user = db.users.find(u => u.id === userId);
  if (!user) return { ok: false, error: 'Usuario no encontrado' };
  checkAndDowngradePlan(user, db);
  if (user.consultasFecha !== new Date().toDateString()) {
    user.consultasHoy = 0;
    user.consultasFecha = new Date().toDateString();
  }
  const lim = getPlanLimits(user);
  if (lim.trial && !lim.trialActivo) {
    return { ok: false, error: 'Tu trial de 7 días venció. Suscribite para continuar.' };
  }
  if (!lim.trial && user.consultasHoy >= lim.consultasDia) return { ok: false, error: 'Límite diario alcanzado.' };
  user.consultasHoy++;
  user.consultasTotales = (user.consultasTotales || 0) + 1;
  writeDB(db);
  return { ok: true, restantes: lim.trial ? lim.diasRestantes : lim.consultasDia - user.consultasHoy };
}

function checkTutorLibre(userId) {
  const db = readDB();
  const user = db.users.find(u => u.id === userId);
  if (!user) return { ok: false, error: 'Usuario no encontrado' };
  checkAndDowngradePlan(user, db);
  const lim = getPlanLimits(user);
  if (lim.trial && !lim.trialActivo) return { ok: false, error: 'Tu trial de 7 días venció. Suscribite para continuar.' };
  if (!lim.tutorLibre) return { ok: false, error: 'El tutor libre está disponible solo en el plan Completo.' };
  return { ok: true };
}

function generateResetToken(email) {
  const db = readDB();
  const user = db.users.find(u => u.email === email.toLowerCase().trim());
  if (!user) return { ok: false, error: 'No existe una cuenta con ese email' };
  const token = crypto.randomBytes(4).toString('hex').toUpperCase();
  db.resetTokens[token] = { userId: user.id, email: user.email, createdAt: Date.now(), used: false };
  writeDB(db);
  return { ok: true, token, nombre: user.nombre };
}

async function resetPasswordWithToken(token, newPass) {
  const db = readDB();
  const reset = db.resetTokens[token.toUpperCase()];
  if (!reset) return { ok: false, error: 'Código inválido' };
  if (reset.used) return { ok: false, error: 'Este código ya fue usado' };
  if (Date.now() - reset.createdAt > 30 * 60 * 1000) return { ok: false, error: 'El código expiró (30 min)' };
  const user = db.users.find(u => u.id === reset.userId);
  if (!user) return { ok: false, error: 'Usuario no encontrado' };
  user.passHash = await hashPass(newPass);
  reset.used = true;
  Object.keys(db.sessions).forEach(t => { if (db.sessions[t].userId === user.id) delete db.sessions[t]; });
  writeDB(db);
  return { ok: true };
}

function listUsers() {
  const db = readDB();
  const lastLoginMap = {};
  for (const session of Object.values(db.sessions || {})) {
    const { userId, createdAt } = session;
    if (!lastLoginMap[userId] || createdAt > lastLoginMap[userId]) lastLoginMap[userId] = createdAt;
  }
  return db.users.map(u => {
    const s = sanitize(u);
    if (!s.lastLogin && lastLoginMap[u.id]) s.lastLogin = new Date(lastLoginMap[u.id]).toISOString();
    return s;
  });
}

function updateUserPlan(userId, plan, durationDays = 30, amountPaid = null, paymentId = null) {
  const db = readDB();
  const user = db.users.find(u => u.id === userId);
  if (!user) return { ok: false, error: 'Usuario no encontrado' };
  if (paymentId && user.lastPaymentId === String(paymentId)) return { ok: true, planExpiresAt: user.planExpiresAt, alreadyProcessed: true };
  user.plan = plan;
  if (plan === 'completo' || plan === 'estandar') {
    user.planExpiresAt = Date.now() + durationDays * 86400000;
  } else {
    delete user.planExpiresAt;
  }
  if (amountPaid !== null) { user.lastPaymentAmount = amountPaid; user.lastPaymentDate = new Date().toISOString(); }
  if (paymentId) user.lastPaymentId = String(paymentId);
  writeDB(db);
  return { ok: true, planExpiresAt: user.planExpiresAt };
}

function getUsersExpiringIn(days) {
  const db = readDB();
  const now = Date.now();
  const targetStart = now + (days - 0.5) * 86400000;
  const targetEnd   = now + (days + 0.5) * 86400000;
  return db.users.filter(u => {
    if (!u.active) return false;
    if (u.plan !== 'completo' && u.plan !== 'estandar') return false;
    if (!u.planExpiresAt) return false;
    return u.planExpiresAt >= targetStart && u.planExpiresAt < targetEnd;
  }).map(sanitize);
}

function toggleUserActive(userId) {
  const db = readDB();
  const user = db.users.find(u => u.id === userId);
  if (!user) return { ok: false, error: 'No encontrado' };
  user.active = !user.active;
  writeDB(db);
  return { ok: true, active: user.active };
}

function resetUserProgress(userId) {
  const db = readDB();
  const user = db.users.find(u => u.id === userId);
  if (!user) return { ok: false, error: 'No encontrado' };
  user.consultasHoy = 0;
  user.consultasTotales = 0;
  user.consultasFecha = new Date().toDateString();
  writeDB(db);
  return { ok: true };
}

function syncUserStats(userId, { totalEx, totalMinutes, unitsWorked }) {
  const db = readDB();
  const user = db.users.find(u => u.id === userId);
  if (!user) return { ok: false, error: 'Usuario no encontrado' };
  if (typeof totalEx === 'number' && totalEx >= (user.totalEx || 0)) user.totalEx = totalEx;
  if (typeof totalMinutes === 'number' && totalMinutes >= (user.totalMinutes || 0)) user.totalMinutes = totalMinutes;
  if (Array.isArray(unitsWorked)) {
    const existing = new Set(user.unitsWorked || []);
    unitsWorked.forEach(u => existing.add(u));
    user.unitsWorked = [...existing];
  }
  writeDB(db);
  return { ok: true };
}

function getFavorites(userId) {
  const db = readDB();
  const user = db.users.find(u => u.id === userId);
  if (!user) return { ok: false, error: 'Usuario no encontrado' };
  return { ok: true, favorites: user.favorites || [] };
}

function toggleFavorite(userId, exerciseId) {
  const db = readDB();
  const user = db.users.find(u => u.id === userId);
  if (!user) return { ok: false, error: 'Usuario no encontrado' };
  if (!user.favorites) user.favorites = [];
  const id = String(exerciseId);
  const idx = user.favorites.indexOf(id);
  if (idx === -1) { user.favorites.push(id); } else { user.favorites.splice(idx, 1); }
  writeDB(db);
  return { ok: true, favorites: user.favorites };
}

let _maintState = { active: false, mensaje: 'Estamos actualizando la plataforma. Volvé en unos minutos.' };
function getMaintenance() { return _maintState; }
function setMaintenance(active, mensaje) {
  _maintState = { active: !!active, mensaje: mensaje || _maintState.mensaje };
  return { ok: true, active: _maintState.active };
}

function sanitize(u) {
  const { passHash, verificationCode, verificationCodeExpires, ...r } = u;
  return r;
}

module.exports = {
  createUser, loginUser, getSession, logoutUser,
  checkConsulta, checkTutorLibre, getPlanLimits,
  listUsers, updateUserPlan, toggleUserActive, resetUserProgress,
  getUsersExpiringIn, syncUserStats,
  generateResetToken, resetPasswordWithToken,
  getMaintenance, setMaintenance,
  verifyEmailCode, resendVerificationCode,
  getFavorites, toggleFavorite,
};
