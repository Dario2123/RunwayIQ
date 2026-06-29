// Generates data/config.js from environment variables at build time.
// Run via: node build.js
// Required env var: MAPBOX_TOKEN
const fs   = require('fs');
const path = require('path');

const token = process.env.MAPBOX_TOKEN || '';

if (!token) {
  console.warn('[build] WARNING: MAPBOX_TOKEN is not set — satellite mode will show an error.');
}

const output = `// Auto-generated at build time — do not edit manually.
const CONFIG = {
  MAPBOX_TOKEN: '${token}',
  SATELLITE_ZOOM: 12,
  SATELLITE_SIZE: '800x450',
};
`;

fs.writeFileSync(path.join(__dirname, 'data', 'config.js'), output, 'utf8');
console.log('[build] data/config.js generated.');
