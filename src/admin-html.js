// admin-html.js — Panel de administración MatemáticaCBC (v1.0)
module.exports = `<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<title>Admin — MatemáticaCBC v1.0</title>
<meta name="viewport" content="width=device-width,initial-scale=1">
<style>
*{margin:0;padding:0;box-sizing:border-box;}
body{font-family:'Segoe UI',sans-serif;background:#0d1117;color:#e6edf3;min-height:100vh;}
a{color:#ff8c00;text-decoration:none;}
.topbar{background:#161b22;border-bottom:1px solid #30363d;padding:14px 28px;display:flex;align-items:center;justify-content:space-between;}
.topbar h1{font-size:16px;font-weight:700;color:#ff8c00;}
.topbar span{font-size:12px;color:#8b949e;}
.container{max-width:1100px;margin:0 auto;padding:28px 20px;}
.stats{display:grid;grid-template-columns:repeat(auto-fit,minmax(160px,1fr));gap:14px;margin-bottom:28px;}
.stat{background:#161b22;border:1px solid #30363d;border-radius:10px;padding:18px;text-align:center;}
.stat .num{font-size:28px;font-weight:800;color:#ff8c00;}
.stat .lbl{font-size:12px;color:#8b949e;margin-top:4px;}
.section{background:#161b22;border:1px solid #30363d;border-radius:10px;padding:22px;margin-bottom:22px;}
.section h2{font-size:14px;font-weight:700;color:#ff8c00;margin-bottom:16px;border-bottom:1px solid #30363d;padding-bottom:10px;}
table{width:100%;border-collapse:collapse;font-size:13px;}
th{text-align:left;padding:8px 10px;color:#8b949e;font-weight:600;border-bottom:1px solid #30363d;}
td{padding:8px 10px;border-bottom:1px solid #21262d;vertical-align:middle;}
tr:last-child td{border-bottom:none;}
tr:hover td{background:#1c2128;}
.badge{display:inline-block;padding:2px 10px;border-radius:99px;font-size:11px;font-weight:700;}
.badge-gratis{background:rgba(139,148,158,.15);color:#8b949e;}
.badge-estandar{background:rgba(255,140,0,.15);color:#ff8c00;}
.badge-completo{background:rgba(63,185,80,.15);color:#3fb950;}
.badge-off{background:rgba(248,81,73,.15);color:#f85149;}
.btn{display:inline-block;padding:5px 12px;border-radius:6px;font-size:12px;font-weight:600;cursor:pointer;border:none;transition:.2s;}
.btn-orange{background:#ff8c00;color:#000;}
.btn-orange:hover{background:#e07800;}
.btn-gray{background:#30363d;color:#e6edf3;}
.btn-gray:hover{background:#3d444d;}
.btn-red{background:rgba(248,81,73,.2);color:#f85149;border:1px solid rgba(248,81,73,.3);}
.btn-red:hover{background:rgba(248,81,73,.35);}
.btn-sm{padding:3px 10px;font-size:11px;}
input,select,textarea{background:#0d1117;border:1px solid #30363d;color:#e6edf3;border-radius:6px;padding:8px 12px;font-size:13px;width:100%;}
input:focus,select:focus,textarea:focus{outline:none;border-color:#ff8c00;}
.form-row{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:12px;}
.form-group{margin-bottom:12px;}
.form-group label{display:block;font-size:12px;color:#8b949e;margin-bottom:5px;}
.key-input{display:flex;gap:10px;margin-bottom:20px;}
.key-input input{flex:1;}
.msg{padding:10px 14px;border-radius:8px;font-size:13px;margin-bottom:14px;display:none;}
.msg.ok{background:rgba(63,185,80,.15);border:1px solid rgba(63,185,80,.3);color:#3fb950;}
.msg.err{background:rgba(248,81,73,.15);border:1px solid rgba(248,81,73,.3);color:#f85149;}
.chart{display:flex;align-items:flex-end;gap:4px;height:80px;margin-top:8px;}
.chart-bar{flex:1;background:#ff8c00;border-radius:3px 3px 0 0;min-height:2px;transition:.3s;}
.chart-labels{display:flex;gap:4px;margin-top:4px;}
.chart-labels span{flex:1;text-align:center;font-size:9px;color:#8b949e;}
.toggle-row{display:flex;align-items:center;gap:12px;}
.toggle{position:relative;width:44px;height:24px;}
.toggle input{opacity:0;width:0;height:0;}
.slider{position:absolute;inset:0;background:#30363d;border-radius:24px;cursor:pointer;transition:.3s;}
.slider:before{content:'';position:absolute;width:18px;height:18px;left:3px;bottom:3px;background:#fff;border-radius:50%;transition:.3s;}
input:checked+.slider{background:#ff8c00;}
input:checked+.slider:before{transform:translateX(20px);}
#loader{display:none;text-align:center;padding:40px;color:#8b949e;}
</style>
</head>
<body>

<div class="topbar">
  <h1>∑ MatemáticaCBC — Admin</h1>
  <span id="adminInfo">Ingresá tu clave para continuar</span>
</div>

<div class="container">

  <div class="key-input">
    <input type="password" id="adminKey" placeholder="Clave de administrador..." onkeydown="if(event.key==='Enter')loadAll()">
    <button class="btn btn-orange" onclick="loadAll()">Ingresar</button>
  </div>
  <div id="msg" class="msg"></div>
  <div id="loader">Cargando...</div>

  <!-- STATS -->
  <div id="statsSection" style="display:none">
    <div class="stats" id="statsCards"></div>
    <div class="section" id="chartSection">
      <h2>Nuevos usuarios — últimos 14 días</h2>
      <div class="chart" id="chart"></div>
      <div class="chart-labels" id="chartLabels"></div>
    </div>
  </div>

  <!-- USUARIOS -->
  <div class="section" id="usersSection" style="display:none">
    <h2>Usuarios <span id="userCount" style="color:#8b949e;font-weight:400"></span></h2>
    <div style="margin-bottom:12px;display:flex;gap:8px;flex-wrap:wrap;">
      <input type="text" id="userSearch" placeholder="Buscar por nombre o email..." style="max-width:300px" oninput="filterUsers()">
      <select id="userFilter" onchange="filterUsers()" style="width:auto">
        <option value="">Todos los planes</option>
        <option value="gratis">Gratis</option>
        <option value="estandar">Estándar</option>
        <option value="completo">Completo</option>
      </select>
    </div>
    <div style="overflow-x:auto">
      <table>
        <thead><tr><th>Nombre</th><th>Email</th><th>Plan</th><th>Consultas</th><th>Última actividad</th><th>Acciones</th></tr></thead>
        <tbody id="usersBody"></tbody>
      </table>
    </div>
  </div>

  <!-- EJERCICIOS EXTRA (cargados por admin) -->
  <div class="section" id="exSection" style="display:none">
    <h2>Ejercicios extra (cargados por admin)</h2>
    <p style="font-size:12px;color:#8b949e;margin-bottom:12px;">Los ejercicios generados por agentes-crewai (.md) se cargan automáticamente al inicio. Acá podés agregar ejercicios adicionales.</p>
    <p style="font-size:12px;margin-bottom:16px;color:#3fb950;" id="mdCount"></p>
    <div style="overflow-x:auto;margin-bottom:20px">
      <table>
        <thead><tr><th>ID</th><th>Unidad</th><th>Tipo</th><th>Nivel</th><th></th></tr></thead>
        <tbody id="exBody"></tbody>
      </table>
    </div>
    <h3 style="font-size:13px;color:#8b949e;margin-bottom:12px;">Agregar ejercicio</h3>
    <div class="form-row">
      <div class="form-group">
        <label>Unidad</label>
        <select id="exUnit">
          <option value="1">1 — Números reales y álgebra</option>
          <option value="2">2 — Funciones</option>
          <option value="3">3 — Trigonometría</option>
          <option value="4">4 — Límites y continuidad</option>
          <option value="5">5 — Derivadas</option>
          <option value="6">6 — Integrales</option>
        </select>
      </div>
      <div class="form-group">
        <label>Nivel</label>
        <select id="exLv">
          <option value="1">⭐ NIVEL 1 — Básica</option>
          <option value="2" selected>⭐⭐ NIVEL 2 — Intermedia</option>
          <option value="3">⭐⭐⭐ NIVEL 3 — Avanzada</option>
        </select>
      </div>
    </div>
    <div class="form-group"><label>Tipo / título del ejercicio</label><input type="text" id="exType" placeholder="ej: Límite con indeterminación 0/0"></div>
    <div class="form-group"><label>Enunciado (soporta LaTeX: $...$ y $$...$$)</label><textarea id="exText" rows="4" placeholder="Calculá el límite..."></textarea></div>
    <div class="form-group"><label>Respuesta correcta (interna, no se muestra al alumno)</label><input type="text" id="exAns" placeholder="x = 3/2"></div>
    <button class="btn btn-orange" onclick="addExercise()">Agregar ejercicio</button>
  </div>

  <!-- MANTENIMIENTO -->
  <div class="section" id="maintSection" style="display:none">
    <h2>Mantenimiento</h2>
    <div class="toggle-row" style="margin-bottom:14px">
      <label class="toggle"><input type="checkbox" id="maintToggle" onchange="setMaint()"><span class="slider"></span></label>
      <span id="maintStatus">Cargando...</span>
    </div>
    <div class="form-group">
      <label>Mensaje de mantenimiento</label>
      <input type="text" id="maintMsg" placeholder="Estamos actualizando la plataforma...">
    </div>
    <button class="btn btn-gray" onclick="setMaint()">Guardar mensaje</button>
    <div style="margin-top:20px;padding-top:16px;border-top:1px solid #30363d">
      <h3 style="font-size:13px;color:#8b949e;margin-bottom:10px">Recordatorios de renovación</h3>
      <p style="font-size:12px;color:#8b949e;margin-bottom:10px">Envía email a usuarios con plan por vencer en 3 días.</p>
      <button class="btn btn-gray" onclick="sendRenewal()">Enviar recordatorios</button>
    </div>
  </div>

</div>

<script>
let ADMIN_KEY = '';
let allUsers = [];

function key() { return document.getElementById('adminKey').value.trim(); }

function showMsg(text, type) {
  const el = document.getElementById('msg');
  el.textContent = text;
  el.className = 'msg ' + type;
  el.style.display = 'block';
  setTimeout(() => el.style.display = 'none', 4000);
}

async function apiFetch(url, opts = {}) {
  opts.headers = { ...opts.headers, 'x-admin-key': key(), 'Content-Type': 'application/json' };
  const r = await fetch(url, opts);
  const data = await r.json();
  if (!r.ok) throw new Error(data.error || 'Error desconocido');
  return data;
}

async function loadAll() {
  ADMIN_KEY = key();
  if (!ADMIN_KEY) { showMsg('Ingresá la clave primero', 'err'); return; }
  document.getElementById('loader').style.display = 'block';
  try {
    await loadStats();
    await loadUsers();
    await loadExercises();
    await loadMaint();
    ['statsSection','usersSection','exSection','maintSection'].forEach(id => document.getElementById(id).style.display = 'block');
    document.getElementById('adminInfo').textContent = 'Sesión activa';
    showMsg('Panel cargado correctamente', 'ok');
  } catch(e) {
    showMsg('Error: ' + e.message, 'err');
  }
  document.getElementById('loader').style.display = 'none';
}

async function loadStats() {
  const data = await apiFetch('/api/admin/stats');
  const cards = [
    { num: data.total, lbl: 'Usuarios totales' },
    { num: data.byPlan?.gratis || 0, lbl: 'Plan Gratis' },
    { num: data.byPlan?.estandar || 0, lbl: 'Plan Estándar' },
    { num: data.byPlan?.completo || 0, lbl: 'Plan Completo' },
    { num: data.pagos || 0, lbl: 'Pagos activos' },
    { num: (data.conversionRate || 0) + '%', lbl: 'Conversión' },
    { num: data.recentlyActive || 0, lbl: 'Activos 7d' },
    { num: data.totalConsultas || 0, lbl: 'Consultas totales' },
  ];
  document.getElementById('statsCards').innerHTML = cards.map(c =>
    \`<div class="stat"><div class="num">\${c.num}</div><div class="lbl">\${c.lbl}</div></div>\`
  ).join('');
  if (data.newByDay) {
    const max = Math.max(...data.newByDay.map(d => d.count), 1);
    document.getElementById('chart').innerHTML = data.newByDay.map(d =>
      \`<div class="chart-bar" style="height:\${Math.max(2, (d.count/max)*76)}px" title="\${d.label}: \${d.count}"></div>\`
    ).join('');
    document.getElementById('chartLabels').innerHTML = data.newByDay.map((d,i) =>
      i % 2 === 0 ? \`<span>\${d.label}</span>\` : '<span></span>'
    ).join('');
  }
}

async function loadUsers() {
  const data = await apiFetch('/api/admin/users');
  allUsers = data.users || [];
  renderUsers(allUsers);
}

function filterUsers() {
  const q = document.getElementById('userSearch').value.toLowerCase();
  const plan = document.getElementById('userFilter').value;
  renderUsers(allUsers.filter(u =>
    (!q || u.nombre.toLowerCase().includes(q) || u.email.toLowerCase().includes(q)) &&
    (!plan || u.plan === plan)
  ));
}

function planBadge(plan, expires) {
  const exp = expires ? new Date(expires).toLocaleDateString('es-AR') : '';
  const classes = { gratis: 'badge-gratis', estandar: 'badge-estandar', completo: 'badge-completo' };
  return \`<span class="badge \${classes[plan] || 'badge-gratis'}">\${plan}\${exp ? ' · ' + exp : ''}</span>\`;
}

function renderUsers(users) {
  document.getElementById('userCount').textContent = '(' + users.length + ')';
  document.getElementById('usersBody').innerHTML = users.map(u => {
    const lastAct = u.consultasFecha || u.lastLogin ? new Date(u.consultasFecha || u.lastLogin).toLocaleDateString('es-AR') : '—';
    const activeClass = u.active ? '' : 'badge-off';
    return \`<tr>
      <td>\${u.nombre} \${!u.active ? '<span class="badge badge-off">inactivo</span>' : ''}</td>
      <td style="color:#8b949e">\${u.email}</td>
      <td>\${planBadge(u.plan, u.planExpiresAt)}</td>
      <td>\${u.consultasTotales || 0}</td>
      <td>\${lastAct}</td>
      <td style="white-space:nowrap">
        <select onchange="updatePlan('\${u.id}', this.value)" class="btn btn-sm" style="background:#0d1117;border:1px solid #30363d;width:auto">
          <option value="">cambiar plan</option>
          <option value="gratis">gratis</option>
          <option value="estandar">estandar</option>
          <option value="completo">completo</option>
        </select>
        <button class="btn btn-sm btn-gray" onclick="toggleUser('\${u.id}')">\${u.active ? 'Desactivar' : 'Activar'}</button>
        <button class="btn btn-sm btn-red" onclick="resetProgress('\${u.id}')">Reset</button>
      </td>
    </tr>\`;
  }).join('');
}

async function updatePlan(id, plan) {
  if (!plan) return;
  try { await apiFetch(\`/api/admin/users/\${id}/plan\`, { method: 'POST', body: JSON.stringify({ plan }) }); await loadUsers(); showMsg('Plan actualizado', 'ok'); } catch(e) { showMsg(e.message, 'err'); }
}
async function toggleUser(id) {
  try { await apiFetch(\`/api/admin/users/\${id}/toggle\`, { method: 'POST' }); await loadUsers(); showMsg('Estado cambiado', 'ok'); } catch(e) { showMsg(e.message, 'err'); }
}
async function resetProgress(id) {
  if (!confirm('¿Resetear consultas de este usuario?')) return;
  try { await apiFetch(\`/api/admin/users/\${id}/reset-progress\`, { method: 'POST' }); await loadUsers(); showMsg('Progreso reseteado', 'ok'); } catch(e) { showMsg(e.message, 'err'); }
}

async function loadExercises() {
  const data = await apiFetch('/api/admin/exercises');
  document.getElementById('mdCount').textContent = data.mdExercises + ' ejercicios cargados automáticamente desde archivos .md';
  const exs = data.exercises || [];
  document.getElementById('exBody').innerHTML = exs.length
    ? exs.map(e => \`<tr><td>\${e.id}</td><td>\${e.unidad}</td><td>\${e.type}</td><td>\${e.lvl || ''}</td><td><button class="btn btn-sm btn-red" onclick="deleteEx(\${e.id})">Borrar</button></td></tr>\`).join('')
    : '<tr><td colspan="5" style="color:#8b949e;text-align:center">Sin ejercicios extra</td></tr>';
}

async function addExercise() {
  const body = {
    unidad: document.getElementById('exUnit').value,
    lv: document.getElementById('exLv').value,
    type: document.getElementById('exType').value,
    text: document.getElementById('exText').value,
    ans: document.getElementById('exAns').value,
  };
  if (!body.type || !body.text || !body.ans) { showMsg('Completá todos los campos', 'err'); return; }
  try {
    await apiFetch('/api/admin/exercises', { method: 'POST', body: JSON.stringify(body) });
    await loadExercises();
    showMsg('Ejercicio agregado', 'ok');
    ['exType','exText','exAns'].forEach(id => document.getElementById(id).value = '');
  } catch(e) { showMsg(e.message, 'err'); }
}

async function deleteEx(id) {
  if (!confirm('¿Eliminar ejercicio ' + id + '?')) return;
  try { await apiFetch(\`/api/admin/exercises/\${id}\`, { method: 'DELETE' }); await loadExercises(); showMsg('Eliminado', 'ok'); } catch(e) { showMsg(e.message, 'err'); }
}

async function loadMaint() {
  const data = await apiFetch('/api/admin/maintenance');
  document.getElementById('maintToggle').checked = data.active;
  document.getElementById('maintMsg').value = data.mensaje || '';
  document.getElementById('maintStatus').textContent = data.active ? 'Mantenimiento ACTIVO' : 'Sitio operativo';
}

async function setMaint() {
  const active = document.getElementById('maintToggle').checked;
  const mensaje = document.getElementById('maintMsg').value;
  try {
    await apiFetch('/api/admin/maintenance', { method: 'POST', body: JSON.stringify({ active, mensaje }) });
    document.getElementById('maintStatus').textContent = active ? 'Mantenimiento ACTIVO' : 'Sitio operativo';
    showMsg('Mantenimiento ' + (active ? 'activado' : 'desactivado'), 'ok');
  } catch(e) { showMsg(e.message, 'err'); }
}

async function sendRenewal() {
  try {
    const data = await apiFetch('/api/admin/send-renewal-emails', { method: 'POST' });
    showMsg('Recordatorios enviados: ' + data.count, 'ok');
  } catch(e) { showMsg(e.message, 'err'); }
}
</script>
</body>
</html>`;
