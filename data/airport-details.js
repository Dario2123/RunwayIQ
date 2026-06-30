// RunwayIQ — Extended Airport Data
// Used by showAirportDetail() in quiz.js after each answered question.
//
// Fields (all optional — missing fields are hidden, never shown as placeholder):
//   icao:           string  — ICAO code
//   opened:         number  — year of first commercial operation
//   operator:       string  — operating company / authority
//   elevation:      number  — meters above sea level (negative = below sea level)
//   runways:        number  — number of active runways
//   longestRunway:  number  — length of longest runway in meters
//   pax:            number  — approximate annual passengers (recent year)
//   movements:      number  — approximate annual aircraft movements
//   cargo:          number  — approximate annual cargo in metric tons
//   hubAirlines:    string[] — main hub carriers (max 4)
//   distanceToCity: number  — km to city center
//   facts:          string[] — 2–4 concise, surprising facts (no bullet chars)

const AIRPORT_DETAILS = {

  // ─── North America ─────────────────────────────────────────────────────────

  ATL: {
    icao: "KATL", opened: 1926, operator: "City of Atlanta",
    elevation: 313, runways: 5, longestRunway: 3624,
    pax: 104700000, movements: 780000, cargo: 700000,
    hubAirlines: ["Delta Air Lines", "Southwest Airlines"], distanceToCity: 27,
    facts: [
      "World's busiest airport by passengers for over 25 consecutive years",
      "An underground automated train connects all 7 concourses — no re-screening required",
      "Delta operates 500+ daily departures from Atlanta — the largest hub operation of any airline"
    ]
  },

  ORD: {
    icao: "KORD", opened: 1944, operator: "City of Chicago",
    elevation: 202, runways: 8, longestRunway: 3962,
    pax: 83100000, movements: 830000, cargo: 1900000,
    hubAirlines: ["United Airlines", "American Airlines"], distanceToCity: 27,
    facts: [
      "Built on a former WWII Douglas Aircraft Company plant — the 'ORD' code comes from the old name 'Orchard Field'",
      "With 8 runways, O'Hare has more runways than any other major US airport",
      "Named after Lt. Edward 'Butch' O'Hare — America's first WWII naval aviation ace"
    ]
  },

  LAX: {
    icao: "KLAX", opened: 1928, operator: "Los Angeles World Airports",
    elevation: 38, runways: 4, longestRunway: 3685,
    pax: 88300000, movements: 600000, cargo: 2200000,
    hubAirlines: ["United Airlines", "Delta Air Lines", "American Airlines"], distanceToCity: 24,
    facts: [
      "The iconic 1961 Theme Building — a flying-saucer-on-stilts — still contains a restaurant overlooking the tarmac",
      "One of only three airports worldwide with consistently more than 75 million passengers per year",
      "LAX's six-letter radio identifier 'KLAX' inspired the name of the 1990s LA-based radio station"
    ]
  },

  DFW: {
    icao: "KDFW", opened: 1974, operator: "DFW International Airport Board",
    elevation: 182, runways: 7, longestRunway: 4085,
    pax: 73400000, movements: 690000, cargo: 1000000,
    hubAirlines: ["American Airlines"], distanceToCity: 29,
    facts: [
      "At 73 km², DFW is larger than the island of Manhattan — it has its own ZIP code and fire department",
      "American Airlines operates roughly 900 daily departures — the world's largest single-airport hub operation",
      "When it opened in 1974, DFW was the world's largest airport by area"
    ]
  },

  DEN: {
    icao: "KDEN", opened: 1995, operator: "City and County of Denver",
    elevation: 1655, runways: 6, longestRunway: 4877,
    pax: 77700000, movements: 600000, cargo: 270000,
    hubAirlines: ["United Airlines", "Southwest Airlines"], distanceToCity: 40,
    facts: [
      "At 1,655 m elevation, it is the highest major airport in the United States",
      "Its longest runway (4,877 m / 16,000 ft) is the longest commercial runway in the US",
      "At 135 km², Denver International is the largest US airport by total area",
      "The tent-like white roof was inspired by Colorado's snow-capped Rocky Mountains"
    ]
  },

  LAS: {
    icao: "KLAS", opened: 1942, operator: "Clark County Department of Aviation",
    elevation: 664, runways: 4, longestRunway: 4423,
    pax: 48400000, movements: 500000,
    hubAirlines: ["Southwest Airlines", "Spirit Airlines"], distanceToCity: 8,
    facts: [
      "Terminal gates feature slot machines — guests can gamble while waiting to board",
      "Originally built as a US Army Air Corps base during WWII",
      "One of the few major US airports where Southwest is the dominant carrier by passengers"
    ]
  },

  SFO: {
    icao: "KSFO", opened: 1927, operator: "City and County of San Francisco",
    elevation: 4, runways: 4, longestRunway: 3618,
    pax: 51100000, movements: 390000, cargo: 600000,
    hubAirlines: ["United Airlines", "Alaska Airlines"], distanceToCity: 21,
    facts: [
      "Runs entirely on 100% renewable electricity — one of the greenest airports in the US",
      "Home to the SFO Museum — the world's first accredited airport art museum",
      "Two pairs of parallel runways extend over San Francisco Bay on reclaimed land"
    ]
  },

  JFK: {
    icao: "KJFK", opened: 1948, operator: "Port Authority of NY and NJ",
    elevation: 4, runways: 4, longestRunway: 4441,
    pax: 62400000, movements: 430000, cargo: 1600000,
    hubAirlines: ["American Airlines", "Delta Air Lines", "JetBlue"], distanceToCity: 24,
    facts: [
      "Renamed after President Kennedy just 32 days after his assassination on November 22, 1963",
      "Handles more international passengers than any other US airport",
      "Eero Saarinen's 1962 TWA Terminal — now converted into the TWA Hotel — is a landmark of mid-century modern design"
    ]
  },

  MIA: {
    icao: "KMIA", opened: 1928, operator: "Miami-Dade County",
    elevation: 3, runways: 4, longestRunway: 3962,
    pax: 52300000, movements: 500000, cargo: 1900000,
    hubAirlines: ["American Airlines", "LATAM Airlines"], distanceToCity: 11,
    facts: [
      "World's primary hub for travel between the US and Latin America",
      "One of the top 10 US cargo airports — handles enormous volumes of perishables from South America",
      "American Airlines runs its largest international hub here with ~340 daily departures"
    ]
  },

  SEA: {
    icao: "KSEA", opened: 1944, operator: "Port of Seattle",
    elevation: 131, runways: 3, longestRunway: 3627,
    pax: 51900000,
    hubAirlines: ["Alaska Airlines", "Delta Air Lines"], distanceToCity: 21,
    facts: [
      "Alaska Airlines' main hub — the airline was founded in Anchorage in 1932 and moved its hub to Seattle",
      "On clear days, pilots and passengers have stunning views of Mount Rainier (4,392 m) during approach",
      "One of the fastest-growing major airports in the US over the past decade"
    ]
  },

  BOS: {
    icao: "KBOS", opened: 1923, operator: "Massport",
    elevation: 9, runways: 6, longestRunway: 3048,
    pax: 40800000,
    hubAirlines: ["JetBlue", "Delta Air Lines"], distanceToCity: 5,
    facts: [
      "One of the oldest continuously operating airports in the US, opening in 1923",
      "Located on Logan Island — entirely surrounded by Boston Harbor, connected by road tunnels",
      "Some runway extensions are built on concrete piers extending into the harbor"
    ]
  },

  HNL: {
    icao: "PHNL", opened: 1927, operator: "Hawaii Department of Transportation",
    elevation: 4, runways: 4, longestRunway: 3750,
    pax: 9400000,
    hubAirlines: ["Hawaiian Airlines", "Southwest Airlines"], distanceToCity: 9,
    facts: [
      "One of the world's most remote major airports — Honolulu is 3,800 km from the US mainland",
      "The main inter-island hub for the Hawaiian archipelago's internal air network",
      "Named after Senator Daniel K. Inouye — the first Japanese-American to serve in the US Congress"
    ]
  },

  ANC: {
    icao: "PANC", opened: 1951, operator: "Municipality of Anchorage",
    elevation: 44, runways: 4, longestRunway: 3352,
    pax: 5100000, cargo: 2700000,
    hubAirlines: ["Alaska Airlines", "FedEx", "UPS", "Polar Air Cargo"], distanceToCity: 6,
    facts: [
      "The world's 4th busiest cargo airport — despite serving a city of only ~300,000 people",
      "Sits within 9.5 hours' flying time of 90% of the industrialized world — making it a perfect cargo hub",
      "Historically served as a key refueling stop on trans-Arctic routes between North America and Asia"
    ]
  },

  YYZ: {
    icao: "CYYZ", opened: 1939, operator: "Greater Toronto Airports Authority",
    elevation: 173, runways: 5, longestRunway: 3389,
    pax: 44100000, movements: 430000,
    hubAirlines: ["Air Canada", "Porter Airlines"], distanceToCity: 27,
    facts: [
      "Named after Lester B. Pearson, Canada's 14th Prime Minister and winner of the Nobel Peace Prize in 1957",
      "Canada's busiest airport — handles over half of all international passengers entering the country"
    ]
  },

  YVR: {
    icao: "CYVR", opened: 1931, operator: "Vancouver Airport Authority",
    elevation: 4, runways: 3, longestRunway: 3505,
    pax: 26800000,
    hubAirlines: ["Air Canada", "WestJet"], distanceToCity: 16,
    facts: [
      "The only North American airport with scheduled floatplane service connecting a major city (Victoria)",
      "Features the world's largest collection of publicly displayed First Nations art inside an airport terminal",
      "Has its own branch of Anthropologie and other high-end retail, often ranked among the best shopping airports in North America"
    ]
  },

  YUL: {
    icao: "CYUL", opened: 1941, operator: "Aéroports de Montréal",
    elevation: 36, runways: 3, longestRunway: 3353,
    pax: 19200000,
    hubAirlines: ["Air Canada", "Air Transat"], distanceToCity: 22,
    facts: [
      "Named after Pierre Elliott Trudeau, Canada's 15th Prime Minister",
      "Canada's 2nd busiest airport by international passengers — Montréal is a major bilingual hub"
    ]
  },

  MEX: {
    icao: "MMMX", opened: 1952, operator: "AICM",
    elevation: 2230, runways: 2, longestRunway: 3900,
    pax: 44500000, movements: 400000,
    hubAirlines: ["Aeroméxico", "Volaris"], distanceToCity: 13,
    facts: [
      "At 2,230 m above sea level, one of the world's highest major international airports",
      "High altitude reduces air density — aircraft need longer takeoff rolls and burn significantly more fuel",
      "Built on the ancient dried lake bed of Texcoco — the ground is slowly and unevenly subsiding"
    ]
  },

  BOG: {
    icao: "SKBO", opened: 1959, operator: "OPAIN",
    elevation: 2548, runways: 2, longestRunway: 3800,
    pax: 36700000, movements: 280000,
    hubAirlines: ["Avianca", "LATAM Colombia"], distanceToCity: 15,
    facts: [
      "At 2,548 m, one of the world's highest major airports — only Lhasa (Tibet) and La Paz (Bolivia) are higher",
      "The high altitude can reduce aircraft payload by up to 30% on hot days",
      "Colombia's busiest airport and South America's 3rd largest hub by passenger numbers"
    ]
  },

  PTY: {
    icao: "MPTO", opened: 1947, operator: "Tocumen International Airport",
    elevation: 41, runways: 2, longestRunway: 3353,
    pax: 14800000,
    hubAirlines: ["Copa Airlines"], distanceToCity: 24,
    facts: [
      "Known as the 'Hub of the Americas' — Copa Airlines connects 75+ destinations across the continent from here",
      "Panama's geographic position means roughly 90% of the Americas' population lives within 5 hours' flight",
      "The Panama Canal is clearly visible from the air on final approach"
    ]
  },

  GRU: {
    icao: "SBGR", opened: 1985, operator: "GRU Airport / Guarulhos",
    elevation: 750, runways: 2, longestRunway: 3700,
    pax: 39000000, movements: 350000, cargo: 600000,
    hubAirlines: ["LATAM Brasil", "Gol"], distanceToCity: 25,
    facts: [
      "Brazil's main international gateway — handles roughly 60% of all international flights to and from the country",
      "Sits at 750 m on São Paulo's plateau — the city itself is one of the highest major metropolises in South America"
    ]
  },

  LIM: {
    icao: "SPIM", opened: 1960, operator: "Lima Airport Partners",
    elevation: 34, runways: 1, longestRunway: 3507,
    pax: 23800000,
    hubAirlines: ["LATAM Perú", "Avianca Perú"], distanceToCity: 11,
    facts: [
      "South America's 5th busiest airport — served by only 1 runway, causing chronic delays",
      "A long-planned 2nd runway was under construction as of 2024 to finally relieve capacity",
      "Named after Jorge Chávez, the Peruvian aviator who completed the first trans-Alpine flight in 1910"
    ]
  },

  SCL: {
    icao: "SCEL", opened: 1994, operator: "Nuevo Pudahuel",
    elevation: 474, runways: 2, longestRunway: 3748,
    pax: 20100000,
    hubAirlines: ["LATAM Chile", "Sky Airline"], distanceToCity: 20,
    facts: [
      "Gateway to the Atacama Desert, Patagonia, and the remote Easter Island",
      "Named after Arturo Merino Benítez — the Chilean Air Force officer who founded what eventually became LATAM Airlines"
    ]
  },

  // ─── Europe ────────────────────────────────────────────────────────────────

  LHR: {
    icao: "EGLL", opened: 1946, operator: "Heathrow Airport Holdings",
    elevation: 25, runways: 2, longestRunway: 3902,
    pax: 79200000, movements: 476000, cargo: 1700000,
    hubAirlines: ["British Airways", "Virgin Atlantic"], distanceToCity: 24,
    facts: [
      "With only 2 runways operating at ~99% capacity, Heathrow is the world's most congested dual-runway airport",
      "The debate over adding a 3rd runway has been ongoing for more than 60 years",
      "Terminal 5, opened 2008, is dedicated entirely to British Airways and can handle 30 million passengers a year"
    ]
  },

  CDG: {
    icao: "LFPG", opened: 1974, operator: "Aéroports de Paris",
    elevation: 119, runways: 4, longestRunway: 4200,
    pax: 67400000, movements: 450000, cargo: 2000000,
    hubAirlines: ["Air France"], distanceToCity: 25,
    facts: [
      "Named after Charles de Gaulle — the general and president died in 1970, four years before the airport opened",
      "The roof of Terminal 2E partially collapsed in 2004, killing 4 people; it was rebuilt and reopened in 2008",
      "One of Europe's leading cargo hubs, handling 2 million tons of freight per year"
    ]
  },

  FRA: {
    icao: "EDDF", opened: 1936, operator: "Fraport AG",
    elevation: 111, runways: 4, longestRunway: 4000,
    pax: 57400000, movements: 480000, cargo: 1900000,
    hubAirlines: ["Lufthansa", "Condor"], distanceToCity: 12,
    facts: [
      "Germany's largest airport and Europe's 3rd busiest hub",
      "Has its own long-distance rail station (Fernbahnhof) directly beneath Terminal 1 — connecting to ICE high-speed trains",
      "Handles nearly 2 million tons of cargo per year — one of Europe's top freight airports"
    ]
  },

  MUC: {
    icao: "EDDM", opened: 1992, operator: "Flughafen München GmbH",
    elevation: 448, runways: 2, longestRunway: 4000,
    pax: 48000000, movements: 390000, cargo: 350000,
    hubAirlines: ["Lufthansa"], distanceToCity: 40,
    facts: [
      "Replaced the old Munich airport at Riem in 1992, after 54 years of service",
      "At 448 m, it's Germany's highest-elevation major airport",
      "Hosts its own Oktoberfest celebration inside the terminal each autumn"
    ]
  },

  AMS: {
    icao: "EHAM", opened: 1920, operator: "Royal Schiphol Group",
    elevation: -3, runways: 6, longestRunway: 3800,
    pax: 61700000, movements: 440000, cargo: 1700000,
    hubAirlines: ["KLM"], distanceToCity: 18,
    facts: [
      "At −3 m, Schiphol is one of the world's few airports built below sea level",
      "Its name translates as 'ship's hole' — the area was once a naval lake where ships reportedly sank",
      "Has a branch of the Rijksmuseum art museum inside the departure terminal — free to enter with a boarding pass"
    ]
  },

  MAD: {
    icao: "LEMD", opened: 1931, operator: "AENA",
    elevation: 610, runways: 4, longestRunway: 4100,
    pax: 57000000, movements: 430000, cargo: 400000,
    hubAirlines: ["Iberia", "Air Europa", "Ryanair"], distanceToCity: 13,
    facts: [
      "Spain's largest and Europe's 5th busiest airport",
      "Terminal 4, designed by Richard Rogers (also co-designer of the Pompidou Centre), features a bamboo-slat ceiling",
      "At 610 m above sea level, it is one of Europe's highest major airports"
    ]
  },

  BCN: {
    icao: "LEBL", opened: 1918, operator: "AENA",
    elevation: 4, runways: 3, longestRunway: 3743,
    pax: 47300000, movements: 360000,
    hubAirlines: ["Vueling", "Ryanair"], distanceToCity: 14,
    facts: [
      "Spain's 2nd busiest airport — handles record passenger volumes as Barcelona is one of Europe's most visited cities",
      "Terminal 2B was purpose-built for the 1992 Barcelona Olympics",
      "Vueling, a low-cost carrier owned by IAG (British Airways' parent), uses Barcelona as its main hub"
    ]
  },

  ZRH: {
    icao: "LSZH", opened: 1953, operator: "Flughafen Zürich AG",
    elevation: 432, runways: 3, longestRunway: 3700,
    pax: 30400000, movements: 250000, cargo: 450000,
    hubAirlines: ["Swiss International Air Lines", "Edelweiss Air"], distanceToCity: 13,
    facts: [
      "Offers a unique 'fly-luggage' service — check your bags at Zürich main station and collect them at your destination",
      "At 432 m, one of Europe's highest major airports",
      "Consistently ranked among Europe's most punctual and well-organized airports"
    ]
  },

  VIE: {
    icao: "LOWW", opened: 1954, operator: "Flughafen Wien AG",
    elevation: 183, runways: 2, longestRunway: 3600,
    pax: 32000000, movements: 260000, cargo: 270000,
    hubAirlines: ["Austrian Airlines"], distanceToCity: 18,
    facts: [
      "One of Central Europe's main hubs — bridging Western Europe with the Balkans and Eastern Europe",
      "Austrian Airlines has consistently ranked among Europe's most on-time airlines"
    ]
  },

  CPH: {
    icao: "EKCH", opened: 1925, operator: "Copenhagen Airports A/S",
    elevation: 5, runways: 3, longestRunway: 3600,
    pax: 30800000, movements: 250000, cargo: 360000,
    hubAirlines: ["SAS", "easyJet"], distanceToCity: 8,
    facts: [
      "Scandinavia's largest airport — just 8 km from central Copenhagen, one of Europe's most central airports",
      "A direct rail link through Terminal 3 reaches Copenhagen Central Station in just 14 minutes",
      "Opened in 1925 — one of Europe's oldest continuously operating airports"
    ]
  },

  OSL: {
    icao: "ENGM", opened: 1998, operator: "Avinor",
    elevation: 202, runways: 2, longestRunway: 3600,
    pax: 27500000,
    hubAirlines: ["SAS", "Norwegian"], distanceToCity: 47,
    facts: [
      "Replaced old Fornebu Airport in 1998 — Fornebu had become dangerously hemmed in by Oslo's suburbs",
      "The site has military roots dating to 1912, when it was used for Norwegian cavalry exercises",
      "Norway is one of the world's most aviation-dependent countries — many coastal communities are only accessible by air"
    ]
  },

  ARN: {
    icao: "ESSA", opened: 1960, operator: "Swedavia",
    elevation: 42, runways: 3, longestRunway: 3300,
    pax: 25000000, movements: 200000,
    hubAirlines: ["SAS", "Norwegian"], distanceToCity: 41,
    facts: [
      "Sweden's largest airport and primary international gateway",
      "SAS (Scandinavian Airlines), founded in 1946 as a consortium of Swedish, Norwegian and Danish airlines, is headquartered nearby"
    ]
  },

  BRU: {
    icao: "EBBR", opened: 1940, operator: "Brussels Airport Company",
    elevation: 56, runways: 3, longestRunway: 3638,
    pax: 23400000, movements: 210000, cargo: 680000,
    hubAirlines: ["Brussels Airlines", "Ryanair"], distanceToCity: 14,
    facts: [
      "Often called 'Zaventem' by locals — after the municipality where it's situated",
      "Brussels is home to the EU and NATO headquarters, making the airport a major diplomatic hub"
    ]
  },

  BER: {
    icao: "EDDB", opened: 2020, operator: "Flughafen Berlin Brandenburg GmbH",
    elevation: 48, runways: 2, longestRunway: 4000,
    pax: 33900000, movements: 210000,
    hubAirlines: ["Ryanair", "easyJet", "Eurowings"], distanceToCity: 18,
    facts: [
      "Planning began in 1989; originally scheduled to open in 2011 — it finally opened in October 2020, 9 years late",
      "Cost overruns exceeded €6 billion, making it one of Germany's most expensive infrastructure disasters",
      "Replaced three Berlin airports simultaneously: Tegel (TXL), Schönefeld (SXF), and the historic Tempelhof"
    ]
  },

  MXP: {
    icao: "LIMC", opened: 1948, operator: "SEA (Società Esercizi Aeroportuali)",
    elevation: 234, runways: 2, longestRunway: 3920,
    pax: 25700000, movements: 190000,
    hubAirlines: ["easyJet", "Wizz Air"], distanceToCity: 49,
    facts: [
      "The airport's name 'Malpensa' means 'bad thoughts' — a reference to its notoriously foggy and swampy location",
      "Italy's 2nd largest airport, serving the fashion and business capital of Milan"
    ]
  },

  FCO: {
    icao: "LIRF", opened: 1961, operator: "ADR (Aeroporti di Roma)",
    elevation: 4, runways: 3, longestRunway: 3902,
    pax: 40400000, movements: 310000, cargo: 180000,
    hubAirlines: ["ITA Airways", "Ryanair"], distanceToCity: 35,
    facts: [
      "Officially named Leonardo da Vinci International Airport — after Italy's greatest Renaissance genius",
      "Opened for the 1960 Rome Summer Olympics — Italy's first modern airport",
      "ITA Airways (the successor to Alitalia) uses Fiumicino as its main hub"
    ]
  },

  ATH: {
    icao: "LGAV", opened: 2001, operator: "Athens International Airport S.A.",
    elevation: 94, runways: 2, longestRunway: 4000,
    pax: 30100000, movements: 200000,
    hubAirlines: ["Aegean Airlines", "Ryanair"], distanceToCity: 33,
    facts: [
      "Built in just 51 months — it opened three years before the 2004 Athens Olympics",
      "Named after Eleftherios Venizelos, Greece's most celebrated 20th-century statesman and reformer",
      "One of Europe's fastest-recovering airports after COVID — Greek tourism hit all-time records in 2023"
    ]
  },

  HEL: {
    icao: "EFHK", opened: 1952, operator: "Finavia",
    elevation: 55, runways: 3, longestRunway: 3440,
    pax: 20800000, movements: 170000, cargo: 200000,
    hubAirlines: ["Finnair"], distanceToCity: 18,
    facts: [
      "A key transfer hub between Europe and East Asia — Helsinki's polar routes to Tokyo are among the world's shortest",
      "Finnair was founded in 1923 — one of the world's oldest continuously operating airlines",
      "Northern Lights (Aurora Borealis) are occasionally visible from the airport on winter nights"
    ]
  },

  WAW: {
    icao: "EPWA", opened: 1934, operator: "Przedsiębiorstwo Państwowe Porty Lotnicze",
    elevation: 110, runways: 2, longestRunway: 3690,
    pax: 18300000, movements: 170000,
    hubAirlines: ["LOT Polish Airlines", "Ryanair"], distanceToCity: 10,
    facts: [
      "Named after Frédéric Chopin — the Polish composer and piano virtuoso, born near Warsaw in 1810",
      "LOT Polish Airlines, founded in 1929, is one of the world's oldest airlines still flying under its original name",
      "Poland's aviation market grew more than 200% between 2004 (EU accession) and 2019"
    ]
  },

  PRG: {
    icao: "LKPR", opened: 1937, operator: "Prague Airport",
    elevation: 380, runways: 2, longestRunway: 3715,
    pax: 17900000, movements: 155000,
    hubAirlines: ["Czech Airlines", "Ryanair"], distanceToCity: 17,
    facts: [
      "Named after Václav Havel — the playwright-turned-dissident who became Czechoslovakia's first post-communist president in 1989",
      "Central Europe's 3rd busiest airport, serving one of Europe's most visited medieval cities"
    ]
  },

  BUD: {
    icao: "LHBP", opened: 1950, operator: "Budapest Airport Ltd",
    elevation: 151, runways: 2, longestRunway: 3707,
    pax: 16400000, movements: 130000,
    hubAirlines: ["Wizz Air", "Ryanair"], distanceToCity: 16,
    facts: [
      "Named after Franz Liszt — the Hungarian composer and one of history's greatest virtuoso pianists",
      "Wizz Air, Central Europe's largest low-cost carrier, has its headquarters and largest base at Budapest"
    ]
  },

  GVA: {
    icao: "LSGG", opened: 1920, operator: "Geneva Airport",
    elevation: 430, runways: 2, longestRunway: 3900,
    pax: 17200000, movements: 170000,
    hubAirlines: ["Swiss International Air Lines", "easyJet"], distanceToCity: 5,
    facts: [
      "One of only a handful of airports in the world where the main runway extends across a national border — into France",
      "Roughly half of Geneva Airport's passengers originate from France, despite the airport being in Switzerland",
      "At just 5 km from the city center, it is one of Europe's most accessible major airports"
    ]
  },

  LIS: {
    icao: "LPPT", opened: 1942, operator: "ANA (Aeroportos de Portugal)",
    elevation: 114, runways: 2, longestRunway: 3805,
    pax: 32000000, movements: 270000,
    hubAirlines: ["TAP Air Portugal", "Ryanair"], distanceToCity: 7,
    facts: [
      "Just 7 km from Lisbon's city center — one of Europe's most centrally located major airports",
      "TAP Air Portugal uses Lisbon as a bridge hub between Europe and Portuguese-speaking Brazil, Angola, and Mozambique",
      "Portugal's surge in tourism has pushed passenger numbers beyond capacity — a new Lisbon airport is planned"
    ]
  },

  DUB: {
    icao: "EIDW", opened: 1940, operator: "Dublin Airport Authority (daa)",
    elevation: 74, runways: 2, longestRunway: 2637,
    pax: 31800000, movements: 240000,
    hubAirlines: ["Ryanair", "Aer Lingus"], distanceToCity: 12,
    facts: [
      "Home to both Ryanair and Aer Lingus — Ireland's two major airlines, for a country of only 5 million people",
      "The second runway finally opened in 2022 after 25 years of planning, legal battles, and local opposition",
      "US Customs and Border Protection pre-clearance is available here — passengers arrive in the US as domestic travelers"
    ]
  },

  MAN: {
    icao: "EGCC", opened: 1938, operator: "Manchester Airports Group",
    elevation: 78, runways: 2, longestRunway: 3048,
    pax: 28500000,
    hubAirlines: ["Jet2", "TUI Airways"], distanceToCity: 10,
    facts: [
      "The UK's 2nd busiest airport and the largest outside of London",
      "The first UK airport to handle the Boeing 747 'Jumbo Jet' in 1971",
      "Has a Concorde (G-BOAC) on static display — one of only 20 that ever flew"
    ]
  },

  TLV: {
    icao: "LLBG", opened: 1936, operator: "Israel Airports Authority",
    elevation: 41, runways: 3, longestRunway: 3900,
    pax: 20800000, movements: 180000,
    hubAirlines: ["El Al", "Arkia"], distanceToCity: 20,
    facts: [
      "Named after David Ben-Gurion — Israel's first Prime Minister and one of the founders of the modern state",
      "Has some of the most rigorous airport security in the world — screening begins before you even enter the terminal",
      "El Al's security training and protocols are studied by airports and airlines worldwide"
    ]
  },

  // ─── Middle East ─────────────────────────────────────────────────────────

  DXB: {
    icao: "OMDB", opened: 1960, operator: "Dubai Airports",
    elevation: 19, runways: 2, longestRunway: 4000,
    pax: 86900000, movements: 428000, cargo: 2600000,
    hubAirlines: ["Emirates", "flydubai"], distanceToCity: 15,
    facts: [
      "Terminal 3 is the world's largest airport terminal by floor space — 1.7 km² under a single roof",
      "Home of Emirates, the world's largest long-haul airline by scheduled seat-kilometers",
      "Two parallel runways can handle a takeoff or landing every 90 seconds — among the most efficient dual-runway systems in the world"
    ]
  },

  DOH: {
    icao: "OTHH", opened: 2014, operator: "Qatar Airways",
    elevation: 9, runways: 2, longestRunway: 4850,
    pax: 52200000, movements: 310000, cargo: 2500000,
    hubAirlines: ["Qatar Airways"], distanceToCity: 15,
    facts: [
      "A 14-metre-tall teddy bear sculpture called 'Lamp Bear' by artist Urs Fischer greets arrivals in the terminal",
      "Qatar Airways' Al Mourjan Business Lounge is widely rated the world's best airport lounge",
      "Opened in 2014, already serves 50M+ passengers per year — one of the fastest airports ever to scale to this volume"
    ]
  },

  AUH: {
    icao: "OMAA", opened: 1994, operator: "Abu Dhabi Airports",
    elevation: 27, runways: 2, longestRunway: 4100,
    pax: 28000000,
    hubAirlines: ["Etihad Airways", "Air Arabia Abu Dhabi"], distanceToCity: 30,
    facts: [
      "Etihad Airways' home hub — one of the world's youngest airlines (founded 2003) to reach major international scale",
      "Abu Dhabi and Dubai together host two of the world's 20 busiest airports, just 130 km apart",
      "US Customs pre-clearance is available — passengers land in the US as domestic travelers"
    ]
  },

  RUH: {
    icao: "OERK", opened: 1983, operator: "General Authority of Civil Aviation",
    elevation: 620, runways: 4, longestRunway: 4267,
    pax: 38400000, movements: 260000,
    hubAirlines: ["Saudia", "flynas"], distanceToCity: 35,
    facts: [
      "One of the world's largest airports by area at 225 km²",
      "Has a dedicated royal terminal used exclusively by the Saudi royal family",
      "Saudi Arabia is investing $100 billion+ in aviation infrastructure as part of Vision 2030 to attract 150M tourists per year"
    ]
  },

  JED: {
    icao: "OEJN", opened: 1981, operator: "General Authority of Civil Aviation",
    elevation: 17, runways: 4, longestRunway: 4200,
    pax: 39900000, movements: 310000,
    hubAirlines: ["Saudia", "flynas"], distanceToCity: 18,
    facts: [
      "The Hajj Terminal — a vast tent city covering 500,000 m² — is only open during the annual Hajj pilgrimage",
      "During Hajj, the terminal can process 80,000 pilgrims per hour — the highest throughput of any airport in the world",
      "Gateway to Mecca and Medina, Islam's two holiest cities — non-Muslims are not permitted to enter"
    ]
  },

  // ─── Asia ──────────────────────────────────────────────────────────────────

  SIN: {
    icao: "WSSS", opened: 1981, operator: "Civil Aviation Authority of Singapore",
    elevation: 7, runways: 2, longestRunway: 4000,
    pax: 58900000, movements: 350000, cargo: 2000000,
    hubAirlines: ["Singapore Airlines", "Scoot", "Jetstar Asia"], distanceToCity: 20,
    facts: [
      "The Jewel complex houses a 40-metre indoor waterfall — the world's tallest indoor waterfall (Rain Vortex)",
      "Has been voted the world's best airport by Skytrax more often than any other airport",
      "Changi features a butterfly garden, sunflower garden, rooftop pool, cinema, and free city tours for transit passengers"
    ]
  },

  HKG: {
    icao: "VHHH", opened: 1998, operator: "Airport Authority Hong Kong",
    elevation: 9, runways: 2, longestRunway: 3800,
    pax: 54400000, movements: 380000, cargo: 4200000,
    hubAirlines: ["Cathay Pacific", "Hong Kong Express"], distanceToCity: 34,
    facts: [
      "The world's busiest cargo airport, handling over 4 million tons of freight per year",
      "Built on entirely reclaimed land — the former island of Chek Lap Kok was leveled and the sea filled in to create it",
      "Replaced the legendary Kai Tak Airport, whose dramatic curved approach over Kowloon rooftops was one of aviation's most famous procedures"
    ]
  },

  ICN: {
    icao: "RKSI", opened: 2001, operator: "Incheon International Airport Corporation",
    elevation: 7, runways: 4, longestRunway: 4000,
    pax: 70500000, movements: 390000, cargo: 2500000,
    hubAirlines: ["Korean Air", "Asiana Airlines"], distanceToCity: 52,
    facts: [
      "Built on reclaimed land between two former islands — Yeongjong and Yongyou",
      "Repeatedly voted the world's best airport for transfer services — contains a transit hotel, golf course, ice rink, and casino",
      "Asia's 2nd busiest cargo airport, handling 2.5 million tons of freight per year"
    ]
  },

  HND: {
    icao: "RJTT", opened: 1931, operator: "Ministry of Land, Infrastructure, Transport and Tourism",
    elevation: 8, runways: 4, longestRunway: 3360,
    pax: 84600000, movements: 460000, cargo: 1100000,
    hubAirlines: ["ANA", "Japan Airlines"], distanceToCity: 16,
    facts: [
      "Japan's oldest commercial airport, in continuous operation since 1931",
      "Runway D extends 560 m into Tokyo Bay on reclaimed land",
      "Haneda's domestic terminal alone handles more passengers per year than most countries' entire airport systems"
    ]
  },

  NRT: {
    icao: "RJAA", opened: 1978, operator: "Narita International Airport Corporation",
    elevation: 43, runways: 2, longestRunway: 4000,
    pax: 36400000, movements: 270000, cargo: 1900000,
    hubAirlines: ["ANA", "Japan Airlines"], distanceToCity: 66,
    facts: [
      "Its opening was delayed by 2 years due to violent protests by farmers who refused to sell their ancestral land",
      "Protesting farmers still legally own land within the airport perimeter — a unique situation in aviation history",
      "At 66 km from central Tokyo, Narita is one of the most distant major airports from its city center"
    ]
  },

  KIX: {
    icao: "RJBB", opened: 1994, operator: "Kansai Airports",
    elevation: 10, runways: 2, longestRunway: 3500,
    pax: 24800000, movements: 200000,
    hubAirlines: ["Peach Aviation", "Japan Airlines"], distanceToCity: 38,
    facts: [
      "Built entirely on an artificial island in Osaka Bay — one of history's greatest civil engineering projects",
      "The island sinks roughly 13 cm per year as the weight of the airport compresses the soft seabed",
      "The passenger terminal, designed by Renzo Piano, stretches 1.7 km in length — internal golf carts help passengers traverse it"
    ]
  },

  IST: {
    icao: "LTFM", opened: 2018, operator: "iGA Istanbul Grand Airport",
    elevation: 325, runways: 3, longestRunway: 4100,
    pax: 76400000, movements: 520000, cargo: 950000,
    hubAirlines: ["Turkish Airlines", "Pegasus Airlines"], distanceToCity: 40,
    facts: [
      "Replaced Atatürk Airport after 75 years — all airline operations migrated in a single 45-hour overnight operation in April 2019",
      "When its planned 6th runway is complete, it will be designed to handle 200 million passengers per year",
      "Turkish Airlines flies to more countries than any other airline — covering 125+ nations"
    ]
  },

  BOM: {
    icao: "VABB", opened: 1942, operator: "CSIA (Chhatrapati Shivaji Maharaj International Airport)",
    elevation: 11, runways: 2, longestRunway: 3660,
    pax: 50000000, movements: 380000,
    hubAirlines: ["IndiGo", "Air India", "Akasa Air"], distanceToCity: 5,
    facts: [
      "One of the few major airports in the world just 5 km from a city's main business district",
      "Handles 50M passengers on just 2 runways — among the most intensively used airport infrastructure on Earth",
      "Terminal 2, opened 2014, features a 3-km-long art wall with 7,000 works by Indian artists"
    ]
  },

  DEL: {
    icao: "VIDP", opened: 1962, operator: "Delhi International Airport Ltd",
    elevation: 237, runways: 3, longestRunway: 4430,
    pax: 72200000, movements: 450000, cargo: 850000,
    hubAirlines: ["IndiGo", "Air India"], distanceToCity: 20,
    facts: [
      "India's busiest airport — Terminal 3 is one of the world's 10 largest airport terminals by floor space",
      "A flight takes off or lands every 90 seconds during peak hours",
      "India is projected to become the world's 3rd largest aviation market by 2030"
    ]
  },

  BKK: {
    icao: "VTBS", opened: 2006, operator: "Airports of Thailand",
    elevation: 2, runways: 2, longestRunway: 4000,
    pax: 58300000, movements: 350000, cargo: 1400000,
    hubAirlines: ["Thai Airways", "Bangkok Airways"], distanceToCity: 30,
    facts: [
      "Its Thai name 'Suvarnabhumi' means 'Golden Land' in Sanskrit",
      "The air traffic control tower at 132.2 m is one of the world's tallest airport control towers",
      "Site preparation took 45 years — the area was formerly known as 'Cobra Swamp'"
    ]
  },

  KUL: {
    icao: "WMKK", opened: 1998, operator: "Malaysia Airports Holdings",
    elevation: 21, runways: 2, longestRunway: 4124,
    pax: 47700000, movements: 310000, cargo: 900000,
    hubAirlines: ["Malaysia Airlines", "AirAsia"], distanceToCity: 55,
    facts: [
      "Home base of AirAsia — Asia's largest low-cost carrier, with a fleet of 200+ aircraft",
      "The KLIA Ekspres express train connects the airport to KL Sentral in just 28 minutes",
      "KLIA2 terminal was purpose-built for low-cost carriers — the largest LCC-dedicated terminal in Asia"
    ]
  },

  PEK: {
    icao: "ZBAA", opened: 1958, operator: "Capital Airports Holding Company",
    elevation: 35, runways: 3, longestRunway: 3800,
    pax: 62000000, movements: 440000, cargo: 750000,
    hubAirlines: ["Air China", "China Eastern"], distanceToCity: 32,
    facts: [
      "Terminal 3, designed by Norman Foster, was the world's largest building by floor area when completed for the 2008 Beijing Olympics",
      "Now shares traffic with the new Daxing Airport (PKX), opened 40 km to the south in 2019",
      "Air China has been based here since its founding in 1988 as the successor to China's national carrier"
    ]
  },

  PKX: {
    icao: "ZBAD", opened: 2019, operator: "Capital Airports Holding Company",
    elevation: 27, runways: 4, longestRunway: 3800,
    pax: 35000000, movements: 260000,
    hubAirlines: ["China Southern", "China Eastern"], distanceToCity: 46,
    facts: [
      "Designed by Zaha Hadid Architects — from above, the terminal resembles a giant gold starfish",
      "Was the world's largest single-building airport terminal at the time of its opening",
      "Opened on September 25, 2019 — exactly 70 years after the founding of the People's Republic of China"
    ]
  },

  PVG: {
    icao: "ZSPD", opened: 1999, operator: "Shanghai Airport Authority",
    elevation: 4, runways: 4, longestRunway: 4000,
    pax: 63000000, movements: 500000, cargo: 3600000,
    hubAirlines: ["China Eastern", "Cathay Pacific"], distanceToCity: 40,
    facts: [
      "The world's first commercially operated maglev train links the airport to the city — reaching 430 km/h",
      "Together with Hongqiao Airport (SHA), forms one of the world's busiest two-airport city systems",
      "One of Asia's top 5 cargo airports, handling 3.6 million tons of freight per year"
    ]
  },

  // ─── Africa ────────────────────────────────────────────────────────────────

  JNB: {
    icao: "FAOR", opened: 1952, operator: "ACSA (Airports Company South Africa)",
    elevation: 1694, runways: 2, longestRunway: 4418,
    pax: 21100000, movements: 180000,
    hubAirlines: ["South African Airways", "FlySafair"], distanceToCity: 26,
    facts: [
      "Africa's busiest airport, sitting at 1,694 m above sea level — high altitude affects aircraft performance",
      "Named after Oliver Reginald Tambo, an ANC leader in the fight against apartheid",
      "Hosted arrivals for the 2010 FIFA World Cup — the first World Cup held on the African continent"
    ]
  },

  NBO: {
    icao: "HKJK", opened: 1958, operator: "Kenya Airports Authority",
    elevation: 1624, runways: 2, longestRunway: 4117,
    pax: 9000000,
    hubAirlines: ["Kenya Airways"], distanceToCity: 18,
    facts: [
      "Located at 1,624 m in the Kenyan highlands — one of Africa's highest major airports",
      "Nairobi National Park is just 7 km away — wildlife including lions can occasionally be seen near the approach path",
      "Kenya Airways, 'The Pride of Africa', is the continent's only member of the SkyTeam global alliance"
    ]
  },

  ADD: {
    icao: "HAAB", opened: 1945, operator: "Ethiopian Airports Enterprise",
    elevation: 2334, runways: 2, longestRunway: 3800,
    pax: 12000000, movements: 110000,
    hubAirlines: ["Ethiopian Airlines"], distanceToCity: 5,
    facts: [
      "At 2,334 m, one of the world's highest major international airports — aircraft take off in noticeably thinner air",
      "Ethiopian Airlines' main hub — Africa's most profitable airline, flying to more African countries than any other carrier",
      "Addis Ababa hosts the African Union headquarters — making Bole a major diplomatic gateway"
    ]
  },

  CAI: {
    icao: "HECA", opened: 1945, operator: "Cairo Airport Authority",
    elevation: 116, runways: 3, longestRunway: 4000,
    pax: 17500000, movements: 160000,
    hubAirlines: ["EgyptAir"], distanceToCity: 15,
    facts: [
      "Home to EgyptAir — Africa's oldest airline, founded in 1932 as Misr Airwork",
      "Just 22 km from the Giza Pyramids — they are clearly visible from the air on clear days",
      "Has served as a hub for cross-continental travel between Africa, the Middle East, and Europe for decades"
    ]
  },

  CMN: {
    icao: "GMMN", opened: 1980, operator: "ONDA (Office National Des Aéroports)",
    elevation: 656, runways: 2, longestRunway: 3720,
    pax: 9500000,
    hubAirlines: ["Royal Air Maroc"], distanceToCity: 30,
    facts: [
      "Africa's gateway to Morocco — one of North Africa's busiest airports",
      "Morocco is positioning itself as a major aviation hub with a new mega-airport planned near Casablanca",
      "Named after the 5th Caliph Mohammed V, who led Morocco to independence from France in 1956"
    ]
  },

  CPT: {
    icao: "FACT", opened: 1954, operator: "ACSA (Airports Company South Africa)",
    elevation: 46, runways: 2, longestRunway: 3201,
    pax: 10000000,
    hubAirlines: ["South African Airways", "FlySafair"], distanceToCity: 20,
    facts: [
      "South Africa's 2nd busiest airport — approach paths offer stunning views of Table Mountain",
      "Cape Town is consistently ranked one of the world's top travel destinations",
      "The airport was expanded significantly for the 2010 FIFA World Cup"
    ]
  },

  // ─── Oceania ───────────────────────────────────────────────────────────────

  SYD: {
    icao: "YSSY", opened: 1920, operator: "Sydney Airport Corporation",
    elevation: 6, runways: 3, longestRunway: 3962,
    pax: 44400000, movements: 320000, cargo: 700000,
    hubAirlines: ["Qantas", "Virgin Australia"], distanceToCity: 8,
    facts: [
      "Australia's oldest continuously operating airport — in use since 1920",
      "Just 8 km from Sydney CBD — one of the world's most centrally located major airports",
      "Named after Charles Kingsford Smith, who completed the world's first trans-Pacific flight from Oakland to Brisbane in 1928"
    ]
  },

  MEL: {
    icao: "YMML", opened: 1970, operator: "Melbourne Airport",
    elevation: 131, runways: 2, longestRunway: 3657,
    pax: 35900000,
    hubAirlines: ["Qantas", "Jetstar", "Virgin Australia"], distanceToCity: 23,
    facts: [
      "Australia's 2nd busiest airport — Melbourne and Sydney alternate as the country's most-visited city",
      "The airport is located in Tullamarine, yet is always called Melbourne Airport — the city is 23 km away",
      "A direct rail link has been planned for decades but not yet built — airport buses remain the primary connection"
    ]
  },

  // ─── Russia & Eastern Europe ───────────────────────────────────────────────

  SVO: {
    icao: "UUEE", opened: 1959, operator: "Sheremetyevo International Airport JSC",
    elevation: 190, runways: 3, longestRunway: 3700,
    pax: 36400000, movements: 290000,
    hubAirlines: ["Aeroflot"], distanceToCity: 37,
    facts: [
      "Russia's largest and busiest airport",
      "Aeroflot, founded in 1923, is one of the world's oldest airlines still operating under its original name",
      "The connected terminals C through F form one of the longest continuous airport terminal complexes in the world"
    ]
  },

  LED: {
    icao: "ULLI", opened: 1932, operator: "Pulkovo Airport",
    elevation: 23, runways: 2, longestRunway: 3781,
    pax: 18900000,
    hubAirlines: ["Rossiya Airlines", "S7 Airlines"], distanceToCity: 23,
    facts: [
      "Russia's 2nd largest city's main gateway — St. Petersburg is often called the cultural capital of Russia",
      "The modern Terminal 1, designed by Grimshaw Architects, opened in 2014 and is considered one of Russia's finest airport buildings"
    ]
  },

  OTP: {
    icao: "LROP", opened: 1970, operator: "CNAB (National Company Bucharest Airports)",
    elevation: 96, runways: 2, longestRunway: 3500,
    pax: 14800000,
    hubAirlines: ["TAROM", "Wizz Air"], distanceToCity: 26,
    facts: [
      "Named after Henri Coandă — the Romanian physicist and aviation pioneer who invented the Coandă Effect (1910)",
      "Wizz Air's largest Romanian base — Bucharest is one of the fastest-growing low-cost markets in Europe"
    ]
  },

  // ─── Special & Island Airports ────────────────────────────────────────────

  KTM: {
    icao: "VNKT", opened: 1955, operator: "Civil Aviation Authority of Nepal",
    elevation: 1338, runways: 1, longestRunway: 3050,
    pax: 5200000,
    hubAirlines: ["Nepal Airlines", "Buddha Air"], distanceToCity: 6,
    facts: [
      "Gateway to the Himalayas — the starting point for nearly all Mount Everest expeditions",
      "On clear days, pilots and passengers can see Mount Everest, Annapurna, and Machhapuchhre from final approach",
      "Surrounded by mountains and the city on all sides — there is no room to add a second runway",
      "Pilots require special training and are not allowed to land here purely on instruments — visual contact with the terrain is mandatory"
    ]
  },

  DPS: {
    icao: "WADD", opened: 1931, operator: "Angkasa Pura I",
    elevation: 4, runways: 1, longestRunway: 3000,
    pax: 13200000,
    hubAirlines: ["Garuda Indonesia", "Lion Air"], distanceToCity: 13,
    facts: [
      "Located on the island of Bali — one of the world's most iconic and visited travel destinations",
      "Named after I Gusti Ngurah Rai, a Balinese resistance fighter killed by Dutch colonial forces in 1946",
      "A single runway handling 13M passengers per year causes frequent long delays, especially during peak tourist season"
    ]
  },

  MLE: {
    icao: "VRMM", opened: 1966, operator: "Maldives Airports Company",
    elevation: 2, runways: 2, longestRunway: 3200,
    pax: 3200000,
    hubAirlines: ["Maldivian", "Island Aviation"], distanceToCity: 2,
    facts: [
      "Located on its own island (Hulhulé) — visitors reach Malé by speedboat, ferry, or water taxi",
      "One of the world's few airports entirely surrounded by the open Indian Ocean",
      "Resort transfers are by seaplane from a dedicated terminal — the Maldives' internal airline operates mainly seaplanes"
    ]
  },

  NAS: {
    icao: "MYNN", opened: 1957, operator: "Nassau Airport Development Company",
    elevation: 7, runways: 2, longestRunway: 3353,
    pax: 4000000,
    hubAirlines: ["Bahamasair"], distanceToCity: 13,
    facts: [
      "Gateway to the Bahamas — the crystal-blue Bahamian waters are visible from the aircraft window on final approach",
      "Named after Lynden Pindling, the Bahamas' first Prime Minister after independence from Britain in 1973"
    ]
  },

  UIO: {
    icao: "SEQM", opened: 2013, operator: "Quiport",
    elevation: 2400, runways: 1, longestRunway: 4100,
    pax: 6600000,
    hubAirlines: ["LATAM Ecuador", "Avianca Ecuador"], distanceToCity: 37,
    facts: [
      "The old Mariscal Sucre Airport (downtown Quito) was closed in 2013 — it was hemmed in by buildings and impossible to extend safely",
      "The new airport sits at 2,400 m above sea level — one of South America's higher international airports",
      "Despite being named 'Mariscal Sucre', Quito's new airport is 37 km outside the city"
    ]
  },
};
