// RunwayIQ — Data validation script
// Usage: node validate.js

const fs = require('fs');
const path = require('path');

function loadVanillaJs(filePath, varName) {
  const code = fs.readFileSync(filePath, 'utf8');
  return new Function(code + '\nreturn ' + varName + ';')();
}

const ALLOWED_TAGS = loadVanillaJs(path.join(__dirname, 'data/tags.js'), 'ALLOWED_TAGS');
const AIRPORTS     = loadVanillaJs(path.join(__dirname, 'data/airports.js'), 'AIRPORTS');
const AIRPORT_DETAILS = loadVanillaJs(path.join(__dirname, 'data/airport-details.js'), 'AIRPORT_DETAILS');

const REQUIRED_FIELDS = ['iata', 'name', 'city', 'country', 'continent', 'lat', 'lon', 'size', 'difficulty', 'tags'];
const VALID_SIZES = ['large', 'medium', 'small'];
const VALID_CONTINENTS = ['europe', 'north_america', 'south_america', 'africa', 'asia', 'oceania'];

let errors = 0;
let warnings = 0;

function error(msg)   { console.error('  ✗ ERROR:', msg);   errors++; }
function warn(msg)    { console.warn ('  ⚠ WARN: ', msg);   warnings++; }
function ok(msg)      { console.log  ('  ✓', msg); }

console.log('\n=== RunwayIQ Validator ===\n');

// ── 1. Duplicate IATAs ──────────────────────────────────────────────────────
console.log('[1] Checking for duplicate IATAs…');
const seen = new Set();
for (const ap of AIRPORTS) {
  if (seen.has(ap.iata)) error(`Duplicate IATA: ${ap.iata}`);
  seen.add(ap.iata);
}
if (errors === 0) ok(`${AIRPORTS.length} airports, all IATAs unique`);

// ── 2. Required fields ──────────────────────────────────────────────────────
console.log('\n[2] Checking required fields…');
let fieldErrors = 0;
for (const ap of AIRPORTS) {
  for (const f of REQUIRED_FIELDS) {
    if (ap[f] === undefined || ap[f] === null || ap[f] === '') {
      error(`${ap.iata}: missing field "${f}"`);
      fieldErrors++;
    }
  }
}
if (fieldErrors === 0) ok('All airports have required fields');

// ── 3. Valid sizes ──────────────────────────────────────────────────────────
console.log('\n[3] Checking size values…');
let sizeErrors = 0;
for (const ap of AIRPORTS) {
  if (!VALID_SIZES.includes(ap.size)) {
    error(`${ap.iata}: invalid size "${ap.size}"`);
    sizeErrors++;
  }
}
if (sizeErrors === 0) ok('All size values valid');

// ── 4. Valid continents ─────────────────────────────────────────────────────
console.log('\n[4] Checking continent values…');
let contErrors = 0;
for (const ap of AIRPORTS) {
  if (!VALID_CONTINENTS.includes(ap.continent)) {
    error(`${ap.iata}: invalid continent "${ap.continent}"`);
    contErrors++;
  }
}
if (contErrors === 0) ok('All continent values valid');

// ── 5. Valid difficulty ─────────────────────────────────────────────────────
console.log('\n[5] Checking difficulty values…');
let diffErrors = 0;
for (const ap of AIRPORTS) {
  if (!Number.isInteger(ap.difficulty) || ap.difficulty < 1 || ap.difficulty > 5) {
    error(`${ap.iata}: invalid difficulty "${ap.difficulty}" (must be integer 1–5)`);
    diffErrors++;
  }
}
if (diffErrors === 0) ok('All difficulty values valid (1–5)');

// ── 6. Valid coordinates ────────────────────────────────────────────────────
console.log('\n[6] Checking coordinates…');
let coordErrors = 0;
for (const ap of AIRPORTS) {
  if (typeof ap.lat !== 'number' || ap.lat < -90 || ap.lat > 90) {
    error(`${ap.iata}: invalid lat ${ap.lat}`);
    coordErrors++;
  }
  if (typeof ap.lon !== 'number' || ap.lon < -180 || ap.lon > 180) {
    error(`${ap.iata}: invalid lon ${ap.lon}`);
    coordErrors++;
  }
}
if (coordErrors === 0) ok('All coordinates in range');

// ── 7. Valid tags ───────────────────────────────────────────────────────────
console.log('\n[7] Checking tags…');
let tagErrors = 0;
for (const ap of AIRPORTS) {
  if (!Array.isArray(ap.tags)) {
    error(`${ap.iata}: tags is not an array`);
    tagErrors++;
    continue;
  }
  for (const tag of ap.tags) {
    if (!ALLOWED_TAGS.includes(tag)) {
      error(`${ap.iata}: unknown tag "${tag}"`);
      tagErrors++;
    }
  }
}
if (tagErrors === 0) ok('All tags valid');

// ── 8. Duplicate aliases ────────────────────────────────────────────────────
console.log('\n[8] Checking for duplicate aliases…');
const allAliases = new Map();
let aliasErrors = 0;
for (const ap of AIRPORTS) {
  if (!ap.aliases) continue;
  for (const alias of ap.aliases) {
    if (allAliases.has(alias)) {
      error(`Duplicate alias "${alias}" in ${ap.iata} and ${allAliases.get(alias)}`);
      aliasErrors++;
    } else {
      allAliases.set(alias, ap.iata);
    }
  }
}
if (aliasErrors === 0) ok('No duplicate aliases');

// ── 9. Orphaned airport-details entries ─────────────────────────────────────
console.log('\n[9] Checking airport-details entries…');
const iataSet = new Set(AIRPORTS.map(ap => ap.iata));
let orphanErrors = 0;
for (const iata of Object.keys(AIRPORT_DETAILS)) {
  if (!iataSet.has(iata)) {
    warn(`airport-details has entry for "${iata}" which is not in AIRPORTS`);
    orphanErrors++;
  }
}
if (orphanErrors === 0) ok('All airport-details entries match airports');

// ── 10. Tag category coverage ───────────────────────────────────────────────
console.log('\n[10] Checking tag category coverage…');
const tagChecks = ['capital', 'island', 'artificial-island', 'mountain', 'coastal', 'featured', 'hub', 'cargo', 'holiday'];
for (const tag of tagChecks) {
  const count = AIRPORTS.filter(ap => ap.tags.includes(tag)).length;
  if (count === 0) error(`No airports have tag "${tag}"`);
  else ok(`tag "${tag}": ${count} airports`);
}

// ── Summary ─────────────────────────────────────────────────────────────────
console.log('\n' + '='.repeat(35));
if (errors === 0 && warnings === 0) {
  console.log(`✅ All checks passed — ${AIRPORTS.length} airports, 0 errors, 0 warnings\n`);
  process.exit(0);
} else {
  console.log(`❌ ${errors} error(s), ${warnings} warning(s)\n`);
  process.exit(errors > 0 ? 1 : 0);
}
