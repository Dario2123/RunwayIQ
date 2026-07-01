// RunwayIQ — Allowed Tags
// Every airport tag must appear in this list (enforced by validate.js).
const ALLOWED_TAGS = [
  "hub",                // major airline hub airport
  "cargo",              // significant cargo operations
  "capital",            // serves capital city or main national gateway
  "holiday",            // primarily tourist / resort destination
  "coastal",            // within ~10 km of ocean or sea coast
  "island",             // located on an island or island nation/city-state
  "featured",           // exceptional / notable characteristics
  "international",      // serves significant international traffic
  "domestic",           // primarily domestic operations
  "mountain",           // high altitude (>1 000 m) or mountainous approach
  "remote",             // unusually isolated / far from major population centres
  "artificial-island",  // built on artificial or fully reclaimed land in the sea
  "low-cost",           // major low-cost carrier hub
  "night-curfew",       // operates under strict night curfew restrictions
  "difficult-approach", // technically challenging approach (terrain, obstacles, etc.)
  "military-history",   // site originally built as or converted from military base
];
