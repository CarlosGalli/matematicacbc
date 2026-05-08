// md-parser.js — Parsea archivos .md generados por agentes-crewai
// Soporta las variaciones de formato entre unidades (emojis, mayúsculas, bold vs ###)
'use strict';

function parseDifficulty(text) {
  if (!text) return { lv: 2, lvc: 'lv2', lvl: '⭐⭐ NIVEL 2' };
  const t = text.toLowerCase();
  if (t.includes('básica') || t.includes('basica') || t.includes('nivel 1') || t.includes('1')) {
    if (t.includes('básica') || t.includes('basica')) return { lv: 1, lvc: 'lv1', lvl: '⭐ NIVEL 1' };
  }
  if (t.includes('avanzada') || t.includes('alta') || t.includes('nivel 3') || t.includes('difícil')) {
    return { lv: 3, lvc: 'lv3', lvl: '⭐⭐⭐ NIVEL 3' };
  }
  if (t.includes('básica') || t.includes('basica')) return { lv: 1, lvc: 'lv1', lvl: '⭐ NIVEL 1' };
  return { lv: 2, lvc: 'lv2', lvl: '⭐⭐ NIVEL 2' };
}

// Extrae un bloque de texto entre dos posiciones usando regex, devuelve el contenido limpio
function findSection(block, ...patterns) {
  for (const pattern of patterns) {
    const m = block.match(pattern);
    if (m && m[1] && m[1].trim()) return m[1].trim();
  }
  return '';
}

function extractSteps(resolucion) {
  if (!resolucion) return [];
  const matches = [...resolucion.matchAll(/\*\*Paso \d+[:.]\s*([^*\n]+?)\.*\*\*/g)];
  return matches.map(m => m[1].replace(/\.$/, '').trim()).filter(Boolean);
}

function extractAnswer(block) {
  // Buscar sección Respuesta Final (con o sin emojis)
  const patterns = [
    /###\s+[^\n]*Respuesta Final[^\n]*\n([\s\S]+?)(?:\n###|\n---|\n## |\n# |$)/,
    /###\s+[^\n]*Respuesta[^\n]*\n([\s\S]+?)(?:\n###|\n---|\n## |$)/,
    /\*\*Respuesta[^:]*:\*\*\s*([\s\S]+?)(?:\n---|\n###|\n\n\n|$)/,
  ];
  let ans = findSection(block, ...patterns);
  if (!ans) return '';

  // Limpiar: tomar primera línea significativa
  const firstLine = ans.split('\n').find(l => l.trim() && !l.trim().startsWith('---')) || '';

  // Quitar \boxed{} preservando los delimitadores $$ o \[...\] para que KaTeX los encuentre.
  // El grupo ((?:[^{}]|\{[^{}]*\})*) maneja un nivel de anidamiento (ej: \frac{3}{5}).
  let clean = firstLine
    .replace(/\\boxed\{((?:[^{}]|\{[^{}]*\})*)\}/, '$1')
    .trim();

  if (clean.length < 3) {
    // Si la primera línea es muy corta, tomar hasta 200 chars del bloque completo
    clean = ans
      .replace(/\\boxed\{((?:[^{}]|\{[^{}]*\})*)\}/, '$1')
      .replace(/\n/g, ' ').substring(0, 200).trim();
  }
  return clean;
}

function extractEnunciado(block) {
  // Formato 1: ### Enunciado (con o sin emojis) — el más común
  const m1 = block.match(/###\s+[^\n]*Enunciado[^\n]*\n([\s\S]+?)(?:\n###|\n---|\n## |$)/);
  if (m1 && m1[1].trim()) return m1[1].trim();

  // Formato 2: **Enunciado:** (bold, sin header ###) — unidad 2
  const m2 = block.match(/\*\*Enunciado:\*\*\n+([\s\S]+?)(?:\n---|\n###|\n\*\*Paso|\n\*\*Resolución)/);
  if (m2 && m2[1].trim()) return m2[1].trim();

  // Formato 3: "Enunciado" como primera línea bold sin dos puntos
  const m3 = block.match(/\n\*\*Enunciado\*\*\n+([\s\S]+?)(?:\n---|\n###)/);
  if (m3 && m3[1].trim()) return m3[1].trim();

  // Fallback: tomar las primeras líneas después del header de dificultad
  const m4 = block.match(/(?:Dificultad[^\n]*\n+(?:---\n+)?)([\s\S]{10,300})(?:\n---|\n###|\n\*\*Paso)/);
  if (m4 && m4[1].trim()) {
    // Limpiar líneas de dificultad y marcadores
    const clean = m4[1].replace(/^\*\*Enunciado:\*\*\n+/, '').trim();
    if (clean.length > 10) return clean;
  }

  return '';
}

function extractResolucion(block) {
  // Busca cualquier sección que contenga "Resolución" o "Resolucion"
  const m = block.match(/###\s+[^\n]*[Rr]esolución[^\n]*\n([\s\S]+?)(?:\n###|\n---(?:\n|$)(?=.*###)|\n## |\n# |$)/);
  if (m && m[1]) return m[1].trim();
  return '';
}

function extractDifficulty(block) {
  // Formato 1: **Dificultad:** ⭐ Básica
  const m1 = block.match(/\*\*Dificultad:\*\*\s*(.+)/);
  if (m1) return parseDifficulty(m1[1]);

  // Formato 2: ### ⭐ Dificultad: Básica (unidad 2)
  const m2 = block.match(/###\s+[^\n]*Dificultad:\s*(.+)/);
  if (m2) return parseDifficulty(m2[1]);

  // Formato 3: ⭐ Básica en la primera línea del bloque
  const m3 = block.match(/\n⭐+\s*(Básica|Media|Avanzada|Alta)/i);
  if (m3) return parseDifficulty(m3[1]);

  return parseDifficulty('');
}

function parseExerciseBlock(block, unitNum, idx) {
  // Primera línea: " — Título del ejercicio"
  const firstNewline = block.indexOf('\n');
  const headerLine = firstNewline === -1 ? block : block.substring(0, firstNewline);
  const titleMatch = headerLine.match(/—\s*(.+)$/);
  const title = titleMatch ? titleMatch[1].trim() : `Ejercicio ${idx}`;

  const diff = extractDifficulty(block);
  const text = extractEnunciado(block);
  const resolucion = extractResolucion(block);
  const steps = extractSteps(resolucion);
  const ans = extractAnswer(block);

  const paddedSteps = steps.slice(0, 6);
  while (paddedSteps.length < 6) paddedSteps.push('—');

  return {
    id: unitNum * 100 + idx,
    unidad: unitNum,
    ...diff,
    type: title,
    fuente: 'generado',
    text: text || title,
    datos: [],
    ans,
    balancear: false,
    steps: paddedSteps,
  };
}

function parseMdFile(filePath, unitNum) {
  const fs = require('fs');
  if (!fs.existsSync(filePath)) {
    console.warn(`[md-parser] Archivo no encontrado: ${filePath}`);
    return [];
  }

  let content = fs.readFileSync(filePath, 'utf8');
  // Normalizar: CRLF → LF
  content = content.replace(/\r\n/g, '\n').replace(/\r/g, '\n');
  // Normalizar: ## EJERCICIO → ## Ejercicio (unidad 6 usa mayúsculas)
  content = content.replace(/\n## EJERCICIO (\d+)/g, '\n## Ejercicio $1');

  // Dividir por ## Ejercicio N
  const parts = content.split(/\n## Ejercicio \d+/);
  const exercises = [];

  parts.slice(1).forEach((block, i) => {
    try {
      const ex = parseExerciseBlock(block, unitNum, i + 1);
      exercises.push(ex);
    } catch (e) {
      console.warn(`[md-parser] Error en ejercicio ${i + 1} unidad ${unitNum}:`, e.message);
    }
  });

  return exercises;
}

module.exports = { parseMdFile };
