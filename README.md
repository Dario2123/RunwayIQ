# RunwayIQ

Aviation quiz app — identify airports by IATA code or satellite image.

## Features
- **Code-Quiz** — IATA code shown, name the airport
- **Satellite** — Mapbox satellite image, identify the airport
- **Mixed** — alternating both modes
- 3 difficulty levels: Easy (autocomplete) · Hard (city only) · Expert (full name)
- Top 200 passenger airports worldwide
- Levenshtein-based typo tolerance

## Local development

1. Clone the repo
2. Copy `data/config.example.js` → `data/config.js`
3. Add your Mapbox public token to `data/config.js`
4. Open `index.html` in a browser

`data/config.js` is listed in `.gitignore` and will never be committed.

## Deploy to Vercel

`data/config.js` is generated at build time by `build.js` from a Vercel environment variable.

**Steps:**
1. In the Vercel dashboard → Settings → Environment Variables, add:
   - **Name:** `MAPBOX_TOKEN`
   - **Value:** your Mapbox public token (`pk.eyJ...`)
   - **Environment:** Production (+ Preview if needed)
2. Push the repo — Vercel runs `node build.js` automatically (configured in `vercel.json`)
3. `data/config.js` is generated fresh on every deploy with the token from the env var

No token ever touches the Git repository.

## Project structure

```
runwayiq/
├── index.html              # Main HTML
├── build.js                # Build script: generates data/config.js from MAPBOX_TOKEN env var
├── vercel.json             # Vercel build config
├── css/
│   └── style.css
├── js/
│   └── quiz.js
└── data/
    ├── airports.js         # Airport dataset (200 airports)
    ├── config.js           # GITIGNORED — generated locally or at build time
    └── config.example.js   # Template — committed, no real token
```

## Mapbox token

Get a free token at [account.mapbox.com](https://account.mapbox.com).
Restrict the token to your domain in the Mapbox dashboard — public tokens are
visible in browser devtools by design, so domain restriction is the only real protection.
