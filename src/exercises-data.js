// exercises-data.js — MatemáticaCBC
// Carga ejercicios desde los archivos .md generados por agentes-crewai
'use strict';

const path = require('path');
const { parseMdFile } = require('./md-parser');

// Las 6 unidades del programa de Matemática CBC-UBA
const UNITS = {
  '1': { nombre: 'Números reales y álgebra', parcial: '1er Parcial', color: 'azul',
         slug: 'numeros_reales_algebra' },
  '2': { nombre: 'Funciones',               parcial: '1er Parcial', color: 'verde',
         slug: 'funciones' },
  '3': { nombre: 'Trigonometría',            parcial: '1er Parcial', color: 'naranja',
         slug: 'trigonometria' },
  '4': { nombre: 'Límites y continuidad',    parcial: '2do Parcial', color: 'violeta',
         slug: 'limites_continuidad' },
  '5': { nombre: 'Derivadas',               parcial: '2do Parcial', color: 'rojo',
         slug: 'derivadas' },
  '6': { nombre: 'Integrales',              parcial: '2do Parcial', color: 'amarillo',
         slug: 'integrales' },
};

// Directorio donde están los archivos .md
const MD_DIR = process.env.MD_OUTPUTS_DIR
  || path.join(__dirname, 'md-content');

// Carga todos los ejercicios de las .md al iniciar
function loadAllExercises() {
  const all = {};
  Object.entries(UNITS).forEach(([num, unit]) => {
    const filename = `matematica_cbc_unidad_0${num}_${unit.slug}.md`;
    const filePath = path.join(MD_DIR, filename);
    const exercises = parseMdFile(filePath, parseInt(num));
    exercises.forEach(ex => { all[ex.id] = ex; });
    console.log(`[exercises] Unidad ${num} (${unit.nombre}): ${exercises.length} ejercicios desde ${filename}`);
  });
  return all;
}

// Cache en memoria — se carga una sola vez al inicio
let _exercises = null;

function getExercises() {
  if (!_exercises) _exercises = loadAllExercises();
  return _exercises;
}

function getExercisesByUnit(unitNum) {
  return Object.values(getExercises()).filter(e => e.unidad === parseInt(unitNum));
}

function getExerciseById(id) {
  return getExercises()[parseInt(id)] || null;
}

module.exports = { UNITS, getExercises, getExercisesByUnit, getExerciseById };
