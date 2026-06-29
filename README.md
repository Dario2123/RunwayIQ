# ✈️ RunwayIQ

Aviation quiz app — identify airports by IATA code or satellite image.

## Features
- 🔤 **Code-Quiz** — IATA code shown, name the airport
- 🛰️ **Satellite** — Mapbox satellite image, identify the airport
- 🎲 **Mixed** — alternating both modes
- 3 difficulty levels: Easy (autocomplete) · Hard (city only) · Expert (full name)
- Top 200 passenger airports worldwide
- Levenshtein-based typo tolerance

## Setup
1. Clone the repo
2. Open `index.html` in a browser (or serve via GitHub Pages)
3. Mapbox token is in `data/config.js` — restrict it to your domain in production

## Project Structure
```
runwayiq/
├── index.html          # Main HTML
├── css/
│   └── style.css       # All styles
├── js/
│   └── quiz.js         # Game logic
└── data/
    ├── airports.js     # Airport dataset (200 airports)
    └── config.js       # API keys & settings
```

## Live
https://YOUR-USERNAME.github.io/runwayiq
