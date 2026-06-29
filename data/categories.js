// RunwayIQ — Category System
// Add new categories here; no changes to quiz logic needed.

const CONTINENT_MAP = {
  // Europe
  "UK":"europe","Germany":"europe","France":"europe","Spain":"europe",
  "Italy":"europe","Netherlands":"europe","Switzerland":"europe","Austria":"europe",
  "Denmark":"europe","Norway":"europe","Sweden":"europe","Belgium":"europe",
  "Portugal":"europe","Ireland":"europe","Finland":"europe","Greece":"europe",
  "Poland":"europe","Czech Republic":"europe","Hungary":"europe","Romania":"europe",
  "Bulgaria":"europe","Latvia":"europe","Estonia":"europe","Lithuania":"europe",
  "Russia":"europe","Ukraine":"europe","Turkey":"europe",
  // North America (incl. Central America & Caribbean)
  "USA":"north_america","Canada":"north_america","Mexico":"north_america",
  "Jamaica":"north_america","Bahamas":"north_america","Costa Rica":"north_america",
  "Guatemala":"north_america","El Salvador":"north_america","Panama":"north_america",
  // South America
  "Brazil":"south_america","Argentina":"south_america","Chile":"south_america",
  "Peru":"south_america","Colombia":"south_america","Venezuela":"south_america",
  "Uruguay":"south_america","Ecuador":"south_america",
  // Africa
  "Egypt":"africa","Morocco":"africa","Tunisia":"africa","Algeria":"africa",
  "South Africa":"africa","Kenya":"africa","Ethiopia":"africa","Nigeria":"africa",
  "Ivory Coast":"africa","Ghana":"africa","Senegal":"africa",
  // Asia (incl. Middle East)
  "UAE":"asia","Japan":"asia","China":"asia","South Korea":"asia",
  "Singapore":"asia","India":"asia","Thailand":"asia","Malaysia":"asia",
  "Indonesia":"asia","Philippines":"asia","Taiwan":"asia","Qatar":"asia",
  "Saudi Arabia":"asia","Bahrain":"asia","Kuwait":"asia","Oman":"asia",
  "Israel":"asia","Sri Lanka":"asia","Bangladesh":"asia","Nepal":"asia",
  "Myanmar":"asia","Vietnam":"asia","Maldives":"asia",
  // Oceania
  "Australia":"oceania","New Zealand":"oceania",
};

// Airports that serve a country's capital city
const CAPITAL_AIRPORTS = new Set([
  "DCA","IAD",     // Washington D.C. — USA
  "CDG",           // Paris — France
  "LHR","LGW",     // London — UK
  "BER",           // Berlin — Germany
  "MAD",           // Madrid — Spain
  "FCO",           // Rome — Italy
  "AMS",           // Amsterdam — Netherlands
  "VIE",           // Vienna — Austria
  "CPH",           // Copenhagen — Denmark
  "OSL",           // Oslo — Norway
  "ARN",           // Stockholm — Sweden
  "BRU",           // Brussels — Belgium
  "LIS",           // Lisbon — Portugal
  "DUB",           // Dublin — Ireland
  "HEL",           // Helsinki — Finland
  "ATH",           // Athens — Greece
  "WAW",           // Warsaw — Poland
  "PRG",           // Prague — Czech Republic
  "BUD",           // Budapest — Hungary
  "OTP",           // Bucharest — Romania
  "SOF",           // Sofia — Bulgaria
  "RIX",           // Riga — Latvia
  "TLL",           // Tallinn — Estonia
  "VNO",           // Vilnius — Lithuania
  "KBP",           // Kyiv — Ukraine
  "SVO","DME",     // Moscow — Russia
  "IST",           // Istanbul — Turkey (largest intl)
  "HND","NRT",     // Tokyo — Japan
  "PEK","PKX",     // Beijing — China
  "DEL",           // New Delhi — India
  "ICN",           // Seoul — South Korea
  "SIN",           // Singapore
  "AUH",           // Abu Dhabi — UAE
  "DOH",           // Doha — Qatar
  "RUH",           // Riyadh — Saudi Arabia
  "KWI",           // Kuwait City — Kuwait
  "MCT",           // Muscat — Oman
  "BAH",           // Manama — Bahrain
  "TLV",           // Tel Aviv — Israel (main intl)
  "CAI",           // Cairo — Egypt
  "TUN",           // Tunis — Tunisia
  "ALG",           // Algiers — Algeria
  "NBO",           // Nairobi — Kenya
  "ADD",           // Addis Ababa — Ethiopia
  "ACC",           // Accra — Ghana
  "DKR",           // Dakar — Senegal
  "MEX",           // Mexico City — Mexico
  "BSB",           // Brasília — Brazil
  "BOG",           // Bogotá — Colombia
  "SCL",           // Santiago — Chile
  "LIM",           // Lima — Peru
  "EZE",           // Buenos Aires — Argentina
  "MVD",           // Montevideo — Uruguay
  "CCS",           // Caracas — Venezuela
  "UIO",           // Quito — Ecuador
  "PTY",           // Panama City — Panama
  "SJO",           // San José — Costa Rica
  "GUA",           // Guatemala City — Guatemala
  "SAL",           // San Salvador — El Salvador
  "KIN",           // Kingston — Jamaica
  "NAS",           // Nassau — Bahamas
  "DAC",           // Dhaka — Bangladesh
  "KTM",           // Kathmandu — Nepal
  "CMB",           // Colombo — Sri Lanka
  "HAN",           // Hanoi — Vietnam
  "MNL",           // Manila — Philippines
  "CGK",           // Jakarta — Indonesia
  "KUL",           // Kuala Lumpur — Malaysia
  "BKK",           // Bangkok — Thailand
  "MLE",           // Malé — Maldives
]);

// Airports on islands (geographically)
const ISLAND_AIRPORTS = new Set([
  "HNL",  // Honolulu — Hawaiian Islands
  "NAS",  // Nassau — New Providence (Bahamas)
  "KIN",  // Kingston — Jamaica
  "MBJ",  // Montego Bay — Jamaica
  "MLE",  // Malé — Maldives atoll
  "DPS",  // Denpasar — Bali
  "CEB",  // Cebu — Cebu Island (Philippines)
  "CMB",  // Colombo — Sri Lanka
  "TPE",  // Taipei — Taiwan
  "HKG",  // Hong Kong — Lantau Island
  "KIX",  // Kansai — artificial island, Osaka Bay
  "BKI",  // Kota Kinabalu — Borneo
  "SIN",  // Singapore — island city-state
]);

// Airports above 1,000 m elevation
const HIGH_ALTITUDE_AIRPORTS = new Set([
  "UIO",  // Quito — 2,812 m
  "BOG",  // Bogotá — 2,548 m
  "ADD",  // Addis Ababa — 2,334 m
  "MEX",  // Mexico City — 2,230 m
  "KTM",  // Kathmandu — 1,338 m
  "DEN",  // Denver — 1,655 m
  "ABQ",  // Albuquerque — 1,619 m
  "SLC",  // Salt Lake City — 1,288 m
  "BSB",  // Brasília — 1,061 m
]);

// Airports within ~10 km of ocean or sea coast
const COASTAL_AIRPORTS = new Set([
  "HNL","LAX","SFO","SAN","MIA","TPA","BOS","JFK","EWR",  // USA
  "GIG",                                                    // Brazil
  "SYD",                                                    // Australia
  "HKG","SIN","CMB","MAA","COK","MLE","DPS","CGK",         // Asia
  "SSH","HRG","LOS","ABJ","ACC","DKR","CPT",               // Africa / Red Sea
  "BCN","FCO","NCE","MRS","LIS","AMS","CPH","HEL","TLL","RIX", // Europe
  "CMN",                                                    // Morocco (Atlantic)
]);

// Airports notable for exceptional characteristics
const EXTREME_AIRPORTS = new Set([
  "KIX",  // Built on artificial island in Osaka Bay
  "MLE",  // Lowest-lying major airport (sea-level atoll)
  "KTM",  // Himalayas approach — one of world's most challenging
  "UIO",  // 2nd highest commercial airport in the world (2,812 m)
  "BOG",  // 3rd highest (2,548 m); high-altitude ops
  "HNL",  // Most isolated major airport — 2,400 km from mainland
  "ANC",  // Subarctic gateway; extreme cold operations
  "DXB",  // Desert heat extremes; world's busiest intl airport
  "IST",  // Largest airport terminal by floor area
  "ADD",  // Highest major airport in Africa (2,334 m)
  "DEN",  // Mile High City — 1,655 m
  "LAS",  // Desert heat; longest runway expanses in Nevada
  "SSH","HRG", // Red Sea desert resort airports
]);

const CATEGORY_GROUPS = [
  {
    id: "all",
    labelKey: "cat.all.label",
    icon: "🌍",
    direct: true,
    filter: () => [...AIRPORTS],
  },
  {
    id: "size",
    labelKey: "cat.size.label",
    icon: "✈️",
    items: [
      {
        id: "top100", labelKey: "cat.size.items.top100.label", icon: "🔥",
        filter: () => AIRPORTS.slice(0, 100),
      },
      {
        id: "large", labelKey: "cat.size.items.large.label", icon: "✈️",
        filter: () => AIRPORTS.filter(ap => AIRPORT_SIZE.large.has(ap[0])),
      },
      {
        id: "medium", labelKey: "cat.size.items.medium.label", icon: "🛫",
        filter: () => AIRPORTS.filter(ap => !AIRPORT_SIZE.large.has(ap[0]) && !AIRPORT_SIZE.small.has(ap[0])),
      },
      {
        id: "small", labelKey: "cat.size.items.small.label", icon: "🛩️",
        filter: () => AIRPORTS.filter(ap => AIRPORT_SIZE.small.has(ap[0])),
      },
    ],
  },
  {
    id: "continent",
    labelKey: "cat.continent.label",
    icon: "🌎",
    items: [
      { id: "europe",        labelKey: "cat.continent.items.europe.label",        icon: "🌍", filter: () => AIRPORTS.filter(ap => CONTINENT_MAP[ap[3]] === "europe") },
      { id: "north_america", labelKey: "cat.continent.items.north_america.label", icon: "🌎", filter: () => AIRPORTS.filter(ap => CONTINENT_MAP[ap[3]] === "north_america") },
      { id: "south_america", labelKey: "cat.continent.items.south_america.label", icon: "🌎", filter: () => AIRPORTS.filter(ap => CONTINENT_MAP[ap[3]] === "south_america") },
      { id: "africa",        labelKey: "cat.continent.items.africa.label",        icon: "🌍", filter: () => AIRPORTS.filter(ap => CONTINENT_MAP[ap[3]] === "africa") },
      { id: "asia",          labelKey: "cat.continent.items.asia.label",          icon: "🌏", filter: () => AIRPORTS.filter(ap => CONTINENT_MAP[ap[3]] === "asia") },
      { id: "oceania",       labelKey: "cat.continent.items.oceania.label",       icon: "🌏", filter: () => AIRPORTS.filter(ap => CONTINENT_MAP[ap[3]] === "oceania") },
    ],
  },
  {
    id: "country",
    labelKey: "cat.country.label",
    icon: "🏳️",
    items: [
      { id: "usa",       labelKey: "cat.country.items.usa.label",       icon: "🇺🇸", filter: () => AIRPORTS.filter(ap => ap[3] === "USA") },
      { id: "canada",    labelKey: "cat.country.items.canada.label",    icon: "🇨🇦", filter: () => AIRPORTS.filter(ap => ap[3] === "Canada") },
      { id: "germany",   labelKey: "cat.country.items.germany.label",   icon: "🇩🇪", filter: () => AIRPORTS.filter(ap => ap[3] === "Germany") },
      { id: "france",    labelKey: "cat.country.items.france.label",    icon: "🇫🇷", filter: () => AIRPORTS.filter(ap => ap[3] === "France") },
      { id: "uk",        labelKey: "cat.country.items.uk.label",        icon: "🇬🇧", filter: () => AIRPORTS.filter(ap => ap[3] === "UK") },
      { id: "spain",     labelKey: "cat.country.items.spain.label",     icon: "🇪🇸", filter: () => AIRPORTS.filter(ap => ap[3] === "Spain") },
      { id: "italy",     labelKey: "cat.country.items.italy.label",     icon: "🇮🇹", filter: () => AIRPORTS.filter(ap => ap[3] === "Italy") },
      { id: "brazil",    labelKey: "cat.country.items.brazil.label",    icon: "🇧🇷", filter: () => AIRPORTS.filter(ap => ap[3] === "Brazil") },
      { id: "japan",     labelKey: "cat.country.items.japan.label",     icon: "🇯🇵", filter: () => AIRPORTS.filter(ap => ap[3] === "Japan") },
      { id: "china",     labelKey: "cat.country.items.china.label",     icon: "🇨🇳", filter: () => AIRPORTS.filter(ap => ap[3] === "China") },
      { id: "australia", labelKey: "cat.country.items.australia.label", icon: "🇦🇺", filter: () => AIRPORTS.filter(ap => ap[3] === "Australia") },
      { id: "india",     labelKey: "cat.country.items.india.label",     icon: "🇮🇳", filter: () => AIRPORTS.filter(ap => ap[3] === "India") },
    ],
  },
  {
    id: "special",
    labelKey: "cat.special.label",
    icon: "⭐",
    items: [
      { id: "capitals",  labelKey: "cat.special.items.capitals.label",  icon: "🌃", filter: () => AIRPORTS.filter(ap => CAPITAL_AIRPORTS.has(ap[0])) },
      { id: "islands",   labelKey: "cat.special.items.islands.label",   icon: "🏝️", filter: () => AIRPORTS.filter(ap => ISLAND_AIRPORTS.has(ap[0])) },
      { id: "mountains", labelKey: "cat.special.items.mountains.label", icon: "🏔️", filter: () => AIRPORTS.filter(ap => HIGH_ALTITUDE_AIRPORTS.has(ap[0])) },
      { id: "coastal",   labelKey: "cat.special.items.coastal.label",   icon: "🌊", filter: () => AIRPORTS.filter(ap => COASTAL_AIRPORTS.has(ap[0])) },
      { id: "extreme",   labelKey: "cat.special.items.extreme.label",   icon: "❄️", filter: () => AIRPORTS.filter(ap => EXTREME_AIRPORTS.has(ap[0])) },
    ],
  },
];
