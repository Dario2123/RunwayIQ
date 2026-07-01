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
      "Canada's busiest airport — handles over half of all international passengers entering the country",
      "Home to one of the world's largest US Customs and Border Protection preclearance facilities, letting passengers clear US immigration before departure"
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
      "Canada's 2nd busiest airport by international passengers — Montréal is a major bilingual hub",
      "Absorbed almost all passenger traffic in 2004 after the once-futuristic Mirabel Airport, built for supersonic jets that never arrived, was closed to passengers"
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
      "Sits at 750 m on São Paulo's plateau — the city itself is one of the highest major metropolises in South America",
      "Is actually named after the neighboring municipality of Guarulhos rather than São Paulo itself, which lies about 25 km away"
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
      "Named after Arturo Merino Benítez — the Chilean Air Force officer who founded what eventually became LATAM Airlines",
      "Its runway sits in a valley ringed by the snow-capped Andes, giving arriving flights one of the most dramatic mountain approaches of any capital-city airport"
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
      "Austrian Airlines has consistently ranked among Europe's most on-time airlines",
      "The City Airport Train (CAT) whisks passengers to central Vienna in just 16 minutes, one of the fastest dedicated airport rail links in Europe"
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
      "SAS (Scandinavian Airlines), founded in 1946 as a consortium of Swedish, Norwegian and Danish airlines, is headquartered nearby",
      "Uses an underground aquifer system to store summer heat and later melt runway snow and ice, one of the most innovative environmental setups of any airport"
    ]
  },

  BRU: {
    icao: "EBBR", opened: 1940, operator: "Brussels Airport Company",
    elevation: 56, runways: 3, longestRunway: 3638,
    pax: 23400000, movements: 210000, cargo: 680000,
    hubAirlines: ["Brussels Airlines", "Ryanair"], distanceToCity: 14,
    facts: [
      "Often called 'Zaventem' by locals — after the municipality where it's situated",
      "Brussels is home to the EU and NATO headquarters, making the airport a major diplomatic hub",
      "Its three runways form a triangular layout inherited from the site's origins as a Luftwaffe-built airfield during WWII"
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
      "Italy's 2nd largest airport, serving the fashion and business capital of Milan",
      "Sits nearly 50 km from central Milan, among the farthest big European hub airports from the city center it serves, hence the dedicated Malpensa Express rail line"
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
      "Central Europe's 3rd busiest airport, serving one of Europe's most visited medieval cities",
      "Known simply as Ruzyně Airport for most of its history, only renamed for Havel in 2012, more than five years after his death"
    ]
  },

  BUD: {
    icao: "LHBP", opened: 1950, operator: "Budapest Airport Ltd",
    elevation: 151, runways: 2, longestRunway: 3707,
    pax: 16400000, movements: 130000,
    hubAirlines: ["Wizz Air", "Ryanair"], distanceToCity: 16,
    facts: [
      "Named after Franz Liszt — the Hungarian composer and one of history's greatest virtuoso pianists",
      "Wizz Air, Central Europe's largest low-cost carrier, has its headquarters and largest base at Budapest",
      "Unlike most European capitals, Budapest still has no direct rail link to its airport, relying instead on shuttle buses and taxis"
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
      "The modern Terminal 1, designed by Grimshaw Architects, opened in 2014 and is considered one of Russia's finest airport buildings",
      "Named after the nearby Pulkovo Observatory, one of Russia's most historically important astronomical research centers, founded in 1839"
    ]
  },

  OTP: {
    icao: "LROP", opened: 1970, operator: "CNAB (National Company Bucharest Airports)",
    elevation: 96, runways: 2, longestRunway: 3500,
    pax: 14800000,
    hubAirlines: ["TAROM", "Wizz Air"], distanceToCity: 26,
    facts: [
      "Named after Henri Coandă — the Romanian physicist and aviation pioneer who invented the Coandă Effect (1910)",
      "Wizz Air's largest Romanian base — Bucharest is one of the fastest-growing low-cost markets in Europe",
      "Its IATA code 'OTP' still reflects the airport's old name, Otopeni, even though it was officially renamed for Henri Coandă back in 2004"
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
      "Named after Lynden Pindling, the Bahamas' first Prime Minister after independence from Britain in 1973",
      "One of the few airports outside North America with US Customs and Border Protection preclearance, letting arriving passengers skip immigration lines on landing in the United States"
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
// ─── Europe (v1.2 expansion) ─────────────────────────────────────────

  PMI: {
    icao: "LEPA", opened: 1960, operator: "Aena",
    elevation: 8, runways: 2, longestRunway: 3270,
    pax: 29700000, movements: 190000, cargo: 15000,
    hubAirlines: ["Air Europa", "Ryanair", "Vueling", "Eurowings"], distanceToCity: 8,
    facts: [
      "During the peak of summer, Palma can handle more daily flights than Heathrow or Gatwick, briefly making it one of the busiest airports in Europe on a single August day",
      "Known locally as Son Sant Joan, it is the main gateway for millions of northern European sun-seekers every summer",
      "Its two parallel runways were built largely to cope with charter traffic that dwarfs the resident population of Mallorca",
      "Air Europa uses Palma as a key base alongside its Madrid hub, feeding long-haul connections from a leisure island"
    ]
  },
  AYT: {
    icao: "LTAI", opened: 1998, operator: "TAV Airports",
    elevation: 54, runways: 2, longestRunway: 3400,
    pax: 34700000, movements: 230000, cargo: 20000,
    hubAirlines: ["Corendon Airlines", "SunExpress", "Turkish Airlines"], distanceToCity: 13,
    facts: [
      "Its distinctive Terminal 1 features a huge glass dome that has become a symbol of Turkey's package-holiday boom",
      "In peak July weeks it can handle more passengers than some European capital-city airports see in an entire year",
      "SunExpress, a joint venture between Lufthansa and Turkish Airlines, uses Antalya as one of its main operating bases",
      "The airport was built almost entirely to serve the Mediterranean resort coast rather than the city of Antalya itself"
    ]
  },
  VCE: {
    icao: "LIPZ", opened: 1960, operator: "SAVE S.p.A.",
    elevation: 2, runways: 1, longestRunway: 3300,
    pax: 11000000, movements: 90000,
    hubAirlines: ["easyJet", "Volotea"], distanceToCity: 8,
    facts: [
      "Named after Marco Polo, the Venetian explorer born in the city it serves",
      "Sits right on the edge of the Venetian Lagoon, with its own water-taxi dock that lets passengers travel straight into Venice's canals",
      "A nearby seaplane base offers direct scenic transfers landing right in front of St. Mark's Square",
      "Because Venice's historic center bans cars, arriving passengers usually finish their journey by boat rather than road"
    ]
  },
  OPO: {
    icao: "LPPR", opened: 1945, operator: "ANA Aeroportos de Portugal (Vinci Airports)",
    elevation: 69, runways: 1, longestRunway: 3480,
    pax: 13000000, movements: 100000, cargo: 40000,
    hubAirlines: ["TAP Air Portugal", "Ryanair"], distanceToCity: 11,
    facts: [
      "Named after Francisco Sá Carneiro, a Portuguese prime minister killed in a 1980 plane crash",
      "Ryanair operates its largest Portuguese base from here, driving much of the airport's rapid growth since the 2000s",
      "Despite handling millions of international passengers a year, it still runs on a single runway",
      "Its modern terminal was purpose-built to funnel a flood of new low-cost routes into northern Portugal"
    ]
  },
  TFS: {
    icao: "GCTS", opened: 1978, operator: "Aena",
    elevation: 64, runways: 1, longestRunway: 3200,
    pax: 12000000, movements: 75000,
    distanceToCity: 20,
    facts: [
      "Opened in 1978, a year after the world's deadliest aviation accident occurred at the island's other airport, Tenerife North (Los Rodeos)",
      "Sits in the dry, sunny south of Tenerife, in stark climatic contrast to the cloud-prone north where the older airport sits",
      "Now handles the vast majority of Tenerife's international leisure traffic, dwarfing the airport where the 1977 disaster took place",
      "Serves the island's biggest resort strips, including Playa de las Américas and Los Cristianos, rather than the capital Santa Cruz"
    ]
  },
  BLQ: {
    icao: "LIPE", opened: 1936, operator: "Aeroporto di Bologna S.p.A.",
    elevation: 36, runways: 1, longestRunway: 2800,
    pax: 10000000, movements: 80000, cargo: 45000,
    distanceToCity: 6,
    facts: [
      "Named after Guglielmo Marconi, the Nobel Prize-winning inventor of radio, who was born just outside Bologna",
      "Linked to the city center by the Marconi Express, a fully automated, driverless monorail people-mover",
      "One of Italy's fastest-growing airports in the low-cost era despite operating on a single runway",
      "Handles a notable amount of air freight thanks to Bologna's position in Italy's industrial Emilia-Romagna region"
    ]
  },
  HER: {
    icao: "LGIR", opened: 1937, operator: "Fraport Greece",
    elevation: 39, runways: 1, longestRunway: 2716,
    pax: 8000000, movements: 65000,
    hubAirlines: ["Aegean Airlines"], distanceToCity: 5,
    facts: [
      "Shares its single runway with a Greek Air Force base, making it one of Europe's busiest joint civil-military airfields",
      "Officially named after Nikos Kazantzakis, the Cretan writer best known for Zorba the Greek",
      "Its congested single runway is why Crete is building an entirely new airport at Kastelli to replace it",
      "Handles staggering summer traffic for its size, driven almost entirely by Crete's mass tourism industry"
    ]
  },
  GOT: {
    icao: "ESGG", opened: 1977, operator: "Swedavia",
    elevation: 153, runways: 2, longestRunway: 3300,
    pax: 5500000, movements: 65000, cargo: 30000,
    distanceToCity: 25,
    facts: [
      "Replaced the old Torslanda city airport in 1977, moving Gothenburg's main air traffic out into surrounding pine forest",
      "Handles a disproportionately large share of Sweden's air cargo relative to its passenger numbers",
      "Its terminal and control tower were deliberately designed to sit low and blend into the forested landscape around it",
      "Sweden's second-busiest airport, roughly 25 km from central Gothenburg"
    ]
  },
  GYD: {
    icao: "UBBB", opened: 1988, operator: "Azerbaijan Airports Company",
    elevation: 4, runways: 2, longestRunway: 3200,
    pax: 6500000, movements: 55000, cargo: 100000,
    hubAirlines: ["Azerbaijan Airlines", "Silk Way West Airlines", "Buta Airways"], distanceToCity: 25,
    facts: [
      "Baku sits in a deep depression near the Caspian Sea, one of the lowest points on Earth's land surface, even though the airport itself is only a few meters above sea level",
      "Home to Silk Way West Airlines, a major cargo carrier whose freighters link Asia, Europe, and the Middle East over Azerbaijani airspace",
      "Named after Heydar Aliyev, Azerbaijan's former president and father of the current head of state",
      "Its striking 2014 terminal features a spiraling wooden lattice ceiling that has won international design awards",
      "Became an increasingly important cargo waypoint after 2022, as many flights began rerouting around closed Russian and Ukrainian airspace"
    ]
  },
  KEF: {
    icao: "BIKF", opened: 1943, operator: "Isavia",
    elevation: 52, runways: 2, longestRunway: 3054,
    pax: 7500000, movements: 90000, cargo: 30000,
    hubAirlines: ["Icelandair", "PLAY"], distanceToCity: 50,
    facts: [
      "Built by the US military during World War II and later used as a NATO base throughout the Cold War until American forces left in 2006",
      "Icelandair built its entire business model around this airport's location, using it as a mid-Atlantic connecting hub between North America and Europe",
      "Originally named Meeks Field, after a US airman killed nearby in a 1941 crash",
      "Sits on a lava field on the volcanically active Reykjanes Peninsula, near fissures that have erupted repeatedly in recent years",
      "Handles far more passengers than Iceland's small population would need, thanks to huge volumes of transatlantic transit traffic"
    ]
  },
  BIO: {
    icao: "LEBB", opened: 1948, operator: "Aena",
    elevation: 42, runways: 1, longestRunway: 2600,
    pax: 6000000, movements: 55000,
    distanceToCity: 10,
    facts: [
      "Its terminal was designed by Spanish architect Santiago Calatrava to resemble a giant white dove taking flight",
      "Hemmed in by steep hills, the runway had to be built partly on an elevated platform with the terrain dropping sharply at both ends",
      "Considered one of the most architecturally distinctive regional airports in Spain",
      "Sits in a narrow valley near the Nervion river, which makes crosswind landings a regular challenge for pilots"
    ]
  },
  BGO: {
    icao: "ENBR", opened: 1955, operator: "Avinor",
    elevation: 50, runways: 1, longestRunway: 2990,
    pax: 6000000, movements: 75000,
    hubAirlines: ["Widerøe", "SAS", "Norwegian"], distanceToCity: 15,
    facts: [
      "One of the busiest helicopter hubs in the world, due to constant crew-change flights out to North Sea offshore oil platforms",
      "Bergen is one of the rainiest cities in Europe, giving the airport a reputation for frequent low-visibility approaches",
      "Built on a peninsula surrounded by fjords and mountains just south of the city center",
      "A key base for Widerøe, Norway's largest regional airline, famous for short-runway flights to remote coastal towns"
    ]
  },
  IBZ: {
    icao: "LEIB", opened: 1958, operator: "Aena",
    elevation: 6, runways: 1, longestRunway: 2800,
    pax: 8500000, movements: 70000,
    distanceToCity: 6,
    facts: [
      "Traffic is wildly seasonal, swinging from near-empty in January to one of Europe's busiest airports per capita in August",
      "Landing approaches pass close to the island's famous party beaches, just minutes from Ibiza Town",
      "Sees a surge of private jet arrivals every summer, catering to the island's high-end club and festival scene",
      "One of the shortest airport-to-nightlife-district distances of any major European resort airport"
    ]
  },
  DBV: {
    icao: "LDDU", opened: 1965, operator: "Zracna luka Dubrovnik",
    elevation: 160, runways: 1, longestRunway: 3300,
    pax: 3000000, movements: 30000,
    distanceToCity: 20,
    facts: [
      "Sits on a plateau more than 150 meters above sea level, unusually high ground for a coastal Mediterranean airport",
      "Traffic surged dramatically after Dubrovnik's Old Town became a filming location for Game of Thrones, drawing tourists from around the world",
      "Located in Čilipi, about 20 km from Dubrovnik's historic walled center, along a scenic Adriatic coastal road",
      "Extremely seasonal, with summer traffic dwarfing the sleepy winter schedule serving a city of roughly 40,000 residents"
    ]
  },
  SNN: {
    icao: "EINN", opened: 1945, operator: "Shannon Airport Authority",
    elevation: 15, runways: 1, longestRunway: 3199,
    pax: 1700000, movements: 35000,
    hubAirlines: ["Ryanair"], distanceToCity: 24,
    facts: [
      "Where duty-free shopping was invented in 1947, as a way to encourage transatlantic travelers on refueling stopovers to spend money",
      "One of the first airports in the world to host US Customs and Border Protection preclearance, letting passengers clear US immigration before departure",
      "Was once a mandatory refueling stop for early transatlantic propeller airliners, before jets made non-stop crossings routine",
      "Ireland's original transatlantic gateway, historically far more significant to global aviation than its small size today suggests"
    ]
  },
  INN: {
    icao: "LOWI", opened: 1925, operator: "Innsbruck Airport (Tyrolean Airport Authority)",
    elevation: 581, runways: 1, longestRunway: 2000,
    pax: 900000, movements: 30000,
    distanceToCity: 3,
    facts: [
      "Surrounded by the Alps on all sides, it requires pilots to complete special mountain-flying certification before they are allowed to land",
      "The approach involves a steep, curving descent squeezed between mountain peaks, rated among the most demanding in Europe",
      "Sits just 3 km from Innsbruck's city center, making it one of the closest major airports to a downtown area anywhere in Europe",
      "A magnet for winter ski charter flights, when Alpine turbulence and crosswinds add further difficulty to an already tricky landing"
    ]
  },
  TOS: {
    icao: "ENTC", opened: 1964, operator: "Avinor",
    elevation: 3, runways: 1, longestRunway: 2075,
    pax: 1800000, movements: 30000,
    hubAirlines: ["Widerøe", "Norwegian", "SAS"], distanceToCity: 5,
    facts: [
      "Located on Tromsøya island and connected to the mainland by bridge, making it one of the busiest airports so far above the Arctic Circle",
      "Sees weeks of continuous winter darkness and equally endless midnight-sun daylight in summer",
      "A popular gateway for aurora borealis tourism thanks to its far-northern position",
      "The short runway, hemmed in by water and mountains, limits the aircraft types that can operate here"
    ]
  },
  BLL: {
    icao: "EKBI", opened: 1964, operator: "Billund Airport",
    elevation: 74, runways: 1, longestRunway: 3100,
    pax: 3500000, movements: 45000, cargo: 20000,
    distanceToCity: 1,
    facts: [
      "Built and financed largely by the LEGO company to help ferry business visitors and toy shipments to this otherwise tiny town",
      "Denmark's second-busiest airport despite serving a town of only a few thousand people",
      "Sits right next to Legoland Billund, one of the original LEGO theme parks",
      "Only later transferred to municipal ownership after decades of being effectively a company airport"
    ]
  },
  BTS: {
    icao: "LZIB", opened: 1951, operator: "Letisko M. R. Štefánika - Airport Bratislava",
    elevation: 133, runways: 2, longestRunway: 3202,
    pax: 2200000, movements: 35000, cargo: 15000,
    hubAirlines: ["Ryanair"], distanceToCity: 9,
    facts: [
      "Sits only about 55 km from Vienna, Austria, making it a cheap-flight alternative that many travelers use to reach Vienna instead",
      "Named after Milan Rastislav Štefánik, an astronomer, soldier, and diplomat who helped found Czechoslovakia and died in a 1919 plane crash",
      "One of the few world capital-city airports within an easy hour's drive of another country's capital",
      "A major Ryanair base drives the bulk of its passenger traffic to European leisure destinations"
    ]
  },
  LGW: {
    icao: "EGKK", opened: 1958, operator: "VINCI Airports",
    elevation: 62, runways: 1, longestRunway: 3316,
    pax: 40000000, movements: 260000, cargo: 90000,
    hubAirlines: ["easyJet", "British Airways", "TUI Airways", "Norwegian"], distanceToCity: 45,
    facts: [
      "The world's busiest single-runway airport, moving tens of millions of passengers a year off just one main runway",
      "A standby second runway exists but sits too close to the main one to be used simultaneously under current safety rules",
      "Was the site of the world's first scheduled helicopter passenger service, launched by BEA in the 1950s",
      "Its train station sits directly beneath the terminal, giving it one of the most direct airport-to-city rail links in the UK",
      "easyJet's largest base anchors most of the airport's short-haul European network"
    ]
  },
  AGP: {
    icao: "LEMG", opened: 1919, operator: "Aena",
    elevation: 16, runways: 2, longestRunway: 3200,
    pax: 24000000, movements: 160000,
    hubAirlines: ["Ryanair", "Vueling"], distanceToCity: 8,
    facts: [
      "One of Europe's oldest continuously operating airports, with commercial flights dating back over a century",
      "Its runway extends out over land reclaimed from the Mediterranean Sea",
      "The main gateway to Spain's Costa del Sol, making it one of the busiest airports in southern Europe every summer",
      "Terminal 3, built ahead of the 2010s tourism boom, was designed with a dramatic wave-like glass-and-steel roofline"
    ]
  },
  VKO: {
    icao: "UUWW", opened: 1941, operator: "Vnukovo International Airport JSC",
    elevation: 208, runways: 2, longestRunway: 3060,
    pax: 14000000, movements: 120000,
    hubAirlines: ["Rossiya Airlines", "UTair"], distanceToCity: 25,
    facts: [
      "Moscow's oldest operating airport, historically favored for VIP and government flights, including those of Soviet and Russian leaders",
      "Its traffic has become overwhelmingly domestic since Western sanctions grounded much of Russia's international network in 2022",
      "Sits close to a well-known government dacha complex southwest of the city",
      "One of three major airports ringing Moscow, alongside Sheremetyevo and Domodedovo"
    ]
  },
  ADB: {
    icao: "LTBJ", opened: 1987, operator: "TAV Airports / DHMİ",
    elevation: 125, runways: 2, longestRunway: 3320,
    pax: 13000000, movements: 100000, cargo: 50000,
    distanceToCity: 18,
    facts: [
      "Named after Adnan Menderes, a former Turkish prime minister executed after a 1960 military coup",
      "Serves as the main gateway to the ancient ruins of Ephesus, one of the best-preserved classical cities on the Mediterranean",
      "One of the earliest Turkish airports modernized through a public-private concession model later copied elsewhere in the country",
      "Handles a mix of business travel to Turkey's third-largest city and heavy summer leisure traffic to nearby Aegean resorts"
    ]
  },
  SAW: {
    icao: "LTFJ", opened: 2001, operator: "ISG (Malaysia Airports Holding Berhad concession)",
    elevation: 95, runways: 2, longestRunway: 3000,
    pax: 35000000, movements: 230000, cargo: 200000,
    hubAirlines: ["Pegasus Airlines", "AJet"], distanceToCity: 40,
    facts: [
      "Named after Sabiha Gökçen, the world's first female combat pilot and the adopted daughter of Atatürk",
      "The main base for Pegasus Airlines, Turkey's largest low-cost carrier",
      "Sits on Istanbul's Asian side, far from the historic European core, making cross-city transfers between Istanbul's two airports notoriously long",
      "Absorbed much of Istanbul's low-cost and secondary traffic after the main hub moved to the new İstanbul Airport in 2019"
    ]
  },
  DME: {
    icao: "UUDD", opened: 1965, operator: "Domodedovo Airport",
    elevation: 190, runways: 2, longestRunway: 3800,
    pax: 14000000, movements: 110000,
    hubAirlines: ["Ural Airlines", "S7 Airlines"], distanceToCity: 42,
    facts: [
      "Once Russia's busiest airport and a favored hub for foreign carriers before 2022, its international traffic collapsed after Western sanctions closed off much of its network",
      "Home to one of Russia's longest runways, capable of handling the largest wide-body jets",
      "Was the site of a deadly 2011 terrorist bombing in its international arrivals hall",
      "Historically served as the main hub for S7 Airlines, one of Russia's largest carriers"
    ]
  },
  STN: {
    icao: "EGSS", opened: 1943, operator: "MAG (Manchester Airports Group)",
    elevation: 106, runways: 1, longestRunway: 3049,
    pax: 28000000, movements: 190000, cargo: 250000,
    hubAirlines: ["Ryanair"], distanceToCity: 60,
    facts: [
      "Its striking 1991 terminal was designed by architect Norman Foster and became a template for modern airport design worldwide",
      "Ryanair's single largest base anywhere in its entire network",
      "Originally built as a US Army Air Forces bomber base during World War II",
      "The UK's leading dedicated air-freight airport outside Heathrow, handling a huge share of the country's air cargo"
    ]
  },
  DUS: {
    icao: "EDDL", opened: 1927, operator: "Flughafen Düsseldorf GmbH",
    elevation: 45, runways: 2, longestRunway: 3000,
    pax: 24000000, movements: 180000, cargo: 100000,
    hubAirlines: ["Eurowings", "Lufthansa"], distanceToCity: 7,
    facts: [
      "Directly connected to the city by a driverless SkyTrain elevated monorail linking the terminals to the regional train station",
      "Germany's third-busiest airport and Eurowings' largest hub",
      "A devastating 1996 fire, sparked by welding work on the terminal roof, killed 17 people and reshaped fire-safety rules at German airports",
      "Sits close enough to the city that flight paths pass directly over central Düsseldorf"
    ]
  },
  HAM: {
    icao: "EDDH", opened: 1911, operator: "Flughafen Hamburg GmbH",
    elevation: 16, runways: 2, longestRunway: 3666,
    pax: 14000000, movements: 110000, cargo: 20000,
    hubAirlines: ["Lufthansa", "Eurowings"], distanceToCity: 9,
    facts: [
      "Regarded as the world's oldest commercial airport still operating on its original site, dating to 1911",
      "Officially renamed Hamburg Airport Helmut Schmidt in 2016 after the former German Chancellor, a native of the city",
      "Sits right next to Airbus's huge Finkenwerder plant, where A320-family jets are completed and first flown",
      "Rebuilt almost entirely after extensive WWII bombing destroyed most of the original site"
    ]
  },
  NCE: {
    icao: "LFMN", opened: 1945, operator: "Aéroports de la Côte d'Azur",
    elevation: 4, runways: 2, longestRunway: 2960,
    pax: 14000000, movements: 110000,
    hubAirlines: ["easyJet"], distanceToCity: 6,
    facts: [
      "France's third-busiest airport, built largely on land reclaimed from the Mediterranean Sea",
      "Its runways run directly along the Baie des Anges coastline, giving arriving passengers dramatic views of the French Riviera",
      "Offers dedicated helicopter transfers straight to Monaco, one of the shortest scheduled helicopter hops in the world",
      "easyJet's largest base in France operates from here, linking the Riviera to dozens of European cities"
    ]
  },
  KBP: {
    icao: "UKBB", opened: 1959, operator: "Boryspil International Airport State Enterprise",
    elevation: 130, runways: 2, longestRunway: 3500,
    pax: 0, movements: 0,
    hubAirlines: ["Ukraine International Airlines"], distanceToCity: 29,
    facts: [
      "Ukraine's largest airport has been completely closed to civilian air traffic since Russia's full-scale invasion in February 2022 shut down Ukrainian airspace",
      "Was the primary hub of Ukraine International Airlines and the country's main international gateway before the war",
      "Connected to Kyiv by a dedicated express rail link, the Skyline train, built for the 2012 European Football Championship",
      "Sat close to intense fighting during the opening weeks of the 2022 invasion given its position just southeast of Kyiv"
    ]
  },
  BHX: {
    icao: "EGBB", opened: 1939, operator: "Birmingham Airport Holdings",
    elevation: 99, runways: 1, longestRunway: 3052,
    pax: 12500000, movements: 110000, cargo: 15000,
    hubAirlines: ["Ryanair", "TUI Airways"], distanceToCity: 16,
    facts: [
      "Originally opened in 1939 as Elmdon Aerodrome, decades before it grew into one of England's busiest regional airports",
      "Its single runway was extended in the 1990s specifically to allow long-haul wide-body jets to reach North America and Asia",
      "The terminal sits directly beside Birmingham International railway station, linked by a free automated people-mover",
      "Sits next to the NEC exhibition complex, making it a major gateway for trade-show and conference visitors"
    ]
  },

  EDI: {
    icao: "EGPH", opened: 1947, operator: "VINCI Airports",
    elevation: 41, runways: 1, longestRunway: 2556,
    pax: 15000000, movements: 120000, cargo: 20000,
    hubAirlines: ["Loganair", "easyJet", "Ryanair"], distanceToCity: 13,
    facts: [
      "Edinburgh is one of the busiest single-runway airports in Europe, squeezing a huge volume of traffic through just one strip of tarmac",
      "The airport began life in 1916 as Turnhouse, a training airfield for the Royal Flying Corps",
      "A tram line built in 2014 links the terminal directly to Edinburgh city centre, one of the few UK airports with such a direct rail-style connection",
      "Strong crosswinds off the Firth of Forth regularly force pilots into go-arounds during winter storms"
    ]
  },
  GLA: {
    icao: "EGPF", opened: 1966, operator: "AGS Airports",
    elevation: 8, runways: 2, longestRunway: 2658,
    pax: 8000000, movements: 70000,
    hubAirlines: ["Loganair", "TUI Airways"], distanceToCity: 13,
    facts: [
      "Glasgow Airport was built on the site of a former Royal Navy air station called Abbotsinch",
      "In 2007 a burning jeep was deliberately driven into the terminal's glass doors in a failed terrorist attack",
      "Glasgow and Prestwick airports both claim the city's name despite sitting more than 30 kilometers apart, a source of constant passenger confusion",
      "Its secondary crosswind runway is now used only rarely, reserved for days when winds make the main strip unusable"
    ]
  },
  STR: {
    icao: "EDDS", opened: 1939, operator: "Flughafen Stuttgart GmbH",
    elevation: 400, runways: 1, longestRunway: 3345,
    pax: 10500000, movements: 110000, cargo: 30000,
    hubAirlines: ["Eurowings", "TUI fly Deutschland"], distanceToCity: 13,
    facts: [
      "Stuttgart sits on a plateau ringed by hills and vineyards, one of the highest-elevation major airports in Germany at around 400 meters",
      "The terminal is built into a hillside so that different floors open directly onto the apron at ground level",
      "Its location deep in car-manufacturing country makes it a key transit point for Mercedes-Benz and Porsche executives and freight",
      "Surrounding terrain funnels gusty crosswinds onto the single runway more often than at flatter German airports"
    ]
  },
  TLS: {
    icao: "LFBO", opened: 1922, operator: "Aeroport Toulouse-Blagnac SA",
    elevation: 151, runways: 2, longestRunway: 3500,
    pax: 10000000, movements: 120000,
    hubAirlines: ["Air France", "easyJet", "Volotea"], distanceToCity: 7,
    facts: [
      "Toulouse-Blagnac is where pioneering Aeropostale airmail flights to South America and North Africa began in the 1920s",
      "It sits right beside the Airbus final assembly line, so brand-new A320s and A350s taxi past the terminal on their delivery flights",
      "The runway was specifically strengthened and extended to handle the enormous A380 during its testing and delivery years",
      "Antoine de Saint-Exupery, author of The Little Prince, flew early airmail routes out of this very airfield"
    ]
  },
  VLC: {
    icao: "LEVC", opened: 1933, operator: "Aena",
    elevation: 69, runways: 2, longestRunway: 3160,
    pax: 9800000, movements: 90000, cargo: 25000,
    hubAirlines: ["Ryanair", "Vueling"], distanceToCity: 8,
    facts: [
      "Valencia Airport is located in Manises, a town famous for centuries of ceramics production",
      "The original aerodrome on this site served as a key Republican air base during the Spanish Civil War",
      "It has become one of Spain's fastest-growing low-cost bases, riding Valencia's tech and tourism boom",
      "A single compact terminal keeps connection times short even as passenger numbers keep climbing"
    ]
  },
  SVQ: {
    icao: "LEZL", opened: 1940, operator: "Aena",
    elevation: 34, runways: 1, longestRunway: 3360,
    pax: 7000000, movements: 60000,
    hubAirlines: ["Vueling", "Ryanair"], distanceToCity: 9,
    facts: [
      "Seville's terminal was designed by star architect Rafael Moneo, its barrel-vaulted roof echoing Andalusian palace architecture",
      "The airport underwent a major expansion to handle traffic surges during the 1992 Seville Expo",
      "It sits near Airbus's Spanish military plant, a key assembly and testing site for the A400M transport aircraft",
      "The airport code LEZL preserves the name of San Pablo, the historic district where the airfield was first built"
    ]
  },
  ALC: {
    icao: "LEAL", opened: 1967, operator: "Aena",
    elevation: 43, runways: 1, longestRunway: 3000,
    pax: 15500000, movements: 100000,
    hubAirlines: ["Ryanair", "easyJet", "Jet2"], distanceToCity: 9,
    facts: [
      "Alicante ranks among Spain's five busiest airports despite serving a mid-sized city, powered almost entirely by British and northern European holiday charters",
      "Its single runway handles an outsized share of widebody leisure traffic during peak summer weekends",
      "The airport sits close to the ancient ruins of Illici near Elche, one of the oldest continuously inhabited sites in Spain",
      "Weekly flight numbers from regional UK airports to Alicante rival those of some of Europe's biggest hubs"
    ]
  },
  LPA: {
    icao: "GCLP", opened: 1930, operator: "Aena",
    elevation: 24, runways: 2, longestRunway: 3100,
    pax: 12000000, movements: 100000, cargo: 20000,
    hubAirlines: ["Binter Canarias", "Ryanair", "Vueling"], distanceToCity: 20,
    facts: [
      "Gran Canaria's runway occupies the Gando peninsula, one of the only stretches of flat land on this volcanic island large enough for an airport",
      "It is the main hub for Binter Canarias, stitching together the seven Canary Islands with dozens of short inter-island hops daily",
      "In 1977 a bomb threat closed this very airport, diverting the Pan Am and KLM 747s to Tenerife North, where they collided in what remains aviation's deadliest accident",
      "Its year-round mild climate means the airport sees almost none of the seasonal traffic dips typical of mainland European airports"
    ]
  },
  NAP: {
    icao: "LIRN", opened: 1910, operator: "GESAC",
    elevation: 90, runways: 1, longestRunway: 2628,
    pax: 12000000, movements: 90000,
    hubAirlines: ["ITA Airways", "easyJet", "Ryanair"], distanceToCity: 4,
    facts: [
      "Naples' Capodichino field traces back to a military airstrip from the 1910s, making it one of Europe's oldest continuously used airports",
      "Its single runway sits remarkably close to the city, with approaches offering dramatic views straight over Mount Vesuvius",
      "Dense surrounding development leaves the airport almost no room to expand, one of Italy's most space-constrained hubs",
      "Vesuvius looms just a few kilometers from the runway, an active volcano that pilots and controllers keep a permanent eye on"
    ]
  },
  CTA: {
    icao: "LICC", opened: 1935, operator: "SAC SpA",
    elevation: 13, runways: 1, longestRunway: 2436,
    pax: 10500000, movements: 80000,
    hubAirlines: ["Ryanair", "ITA Airways"], distanceToCity: 5,
    facts: [
      "Catania's airport sits at the foot of Mount Etna, Europe's most active volcano, and has been shut down repeatedly by ash clouds",
      "Parts of its runway were built over hardened lava fields left by historic Etna eruptions",
      "Volcanic ash forced full closures for days at a time during Etna's eruptions in both 2021 and 2023",
      "Fontanarossa is one of the few airports where an erupting volcano can be watched directly from the terminal windows"
    ]
  },
  BGY: {
    icao: "LIME", opened: 1938, operator: "SACBO",
    elevation: 238, runways: 1, longestRunway: 2937,
    pax: 16500000, movements: 110000, cargo: 230000,
    hubAirlines: ["Ryanair"], distanceToCity: 4,
    facts: [
      "Despite its name, Milan Bergamo sits about 45 kilometers from central Milan, the most distant of the city's three airports",
      "It became Ryanair's largest base outside Ireland and the UK, turning it into one of Italy's biggest low-cost gateways",
      "The airport handles a share of Italy's air freight that rivals much larger hubs, thanks to its role as a major overnight cargo center",
      "Bergamo province was hit hardest by Italy's first COVID-19 wave, and the airport became a symbol of that period when military convoys carried coffins away from the region"
    ]
  },
  SKG: {
    icao: "LGTS", opened: 1930, operator: "Fraport Greece",
    elevation: 6, runways: 1, longestRunway: 2440,
    pax: 7500000, movements: 60000,
    hubAirlines: ["Aegean Airlines", "Ryanair"], distanceToCity: 16,
    facts: [
      "Thessaloniki's runway hugs the Thermaic Gulf coastline, giving landing aircraft a low, dramatic pass right over the water",
      "It is officially called Macedonia Airport, a name tied to the surrounding Greek region that has stirred political sensitivities with neighboring North Macedonia",
      "The airport is run under a long concession by Fraport, the same company that operates Frankfurt Airport, as part of a deal covering 14 Greek regional airports",
      "It serves as the main gateway to Mount Athos and the beach resorts of Halkidiki"
    ]
  },
  RHO: {
    icao: "LGRP", opened: 1977, operator: "Fraport Greece",
    elevation: 4, runways: 1, longestRunway: 3305,
    pax: 6500000, movements: 50000,
    hubAirlines: ["Ryanair", "easyJet", "TUI fly"], distanceToCity: 14,
    facts: [
      "Rhodes' airport is named Diagoras, after an ancient Olympic champion boxer born on the island",
      "Its runway sits on a narrow strip of land squeezed between the Aegean Sea and a lagoon, exposed to strong crosswinds",
      "Passenger numbers can multiply many times over between quiet winter weeks and peak summer charter season",
      "The airport lies a few kilometers from Ialysos, one of the three ancient city-states that together formed Rhodes"
    ]
  },
  FAO: {
    icao: "LPFR", opened: 1965, operator: "ANA Aeroportos de Portugal",
    elevation: 7, runways: 1, longestRunway: 2490,
    pax: 9500000, movements: 70000,
    hubAirlines: ["easyJet", "Ryanair", "TAP Air Portugal"], distanceToCity: 4,
    facts: [
      "Faro's runway was built directly through the Ria Formosa, a protected coastal lagoon and wetland nature reserve",
      "Flamingos and other wetland birds can occasionally be spotted from the runway thanks to the surrounding lagoon habitat",
      "Passenger traffic swings dramatically with the seasons, driven almost entirely by British and northern European tourists to the Algarve",
      "It has one of Europe's highest ratios of seasonal charter flights to year-round scheduled traffic"
    ]
  },
  BEG: {
    icao: "LYBE", opened: 1962, operator: "VINCI Airports",
    elevation: 99, runways: 2, longestRunway: 3400,
    pax: 6500000, movements: 60000, cargo: 15000,
    hubAirlines: ["Air Serbia"], distanceToCity: 12,
    facts: [
      "Belgrade's airport is named after Nikola Tesla, the Serbian-American inventor, and displays memorabilia honoring him in the terminal",
      "It was bombed and heavily damaged during NATO's 1999 air campaign against Yugoslavia",
      "It later became the hub for a reborn Air Serbia after a partnership with Etihad Airways brought Gulf-style long-haul connections to the Balkans",
      "VINCI Airports took over operations under a long-term concession and has invested heavily in a new terminal to expand capacity"
    ]
  },
  ESB: {
    icao: "LTAC", opened: 1955, operator: "TAV Airports",
    elevation: 949, runways: 2, longestRunway: 3750,
    pax: 9000000, movements: 70000,
    hubAirlines: ["Turkish Airlines", "Pegasus Airlines"], distanceToCity: 28,
    facts: [
      "Esenboga sits at nearly 950 meters above sea level on the high Anatolian plateau, giving it noticeably thinner air than most European airports",
      "It serves Turkey's capital rather than its far busier aviation hub, Istanbul, and handles only a fraction of Istanbul's traffic",
      "Its elevated inland position exposes it to harsh winter conditions with snow and fog that Istanbul rarely sees",
      "The airport takes its name from the small town of Esenboga just to its north"
    ]
  },
  MLA: {
    icao: "LMML", opened: 1992, operator: "VINCI Airports",
    elevation: 91, runways: 1, longestRunway: 3544,
    pax: 9000000, movements: 70000, cargo: 20000,
    hubAirlines: ["KM Malta Airlines", "Ryanair"], distanceToCity: 5,
    facts: [
      "Malta's only airport was built on the site of RAF Luqa, one of the most heavily bombed Allied airfields of the Second World War during the siege of Malta",
      "Its single runway handles every commercial flight in and out of the entire country, since Malta has no other fixed-wing airport",
      "The original 1930s terminal building still stands and now serves as an aviation heritage site",
      "Because the island is so small, arriving flights are visible from almost anywhere in Malta during final approach"
    ]
  },
  LCA: {
    icao: "LCLK", opened: 1975, operator: "Hermes Airports",
    elevation: 2, runways: 1, longestRunway: 2700,
    pax: 9500000, movements: 65000,
    hubAirlines: ["Cyprus Airways", "TUS Airways"], distanceToCity: 6,
    facts: [
      "Larnaca Airport was built to replace Nicosia International, which was abandoned in the UN buffer zone after the 1974 Turkish invasion and has sat frozen in time ever since",
      "Its runway sits just meters from the Mediterranean coastline, with landings offering low passes directly over the sea",
      "The airport was rapidly developed in the late 1970s partly using equipment salvaged from the mothballed Nicosia terminal",
      "It is one of the few EU international gateways within sight of a divided capital's demilitarized zone"
    ]
  },
  CGN: {
    icao: "EDDK", opened: 1939, operator: "Flughafen Koln/Bonn GmbH",
    elevation: 92, runways: 2, longestRunway: 3815,
    pax: 10500000, movements: 90000, cargo: 850000,
    hubAirlines: ["Eurowings", "UPS Airlines"], distanceToCity: 15,
    facts: [
      "Cologne Bonn is UPS's largest air cargo hub outside the United States, with freighters arriving from across Europe every night",
      "Its terminal was designed by Bauhaus-trained architect Paul Schneider-Esleben, becoming an icon of postwar German airport architecture",
      "Archaeological finds from Roman-era settlements have surfaced during runway and terminal expansions",
      "It served as the main government airport during the Bonn Republic era, when Bonn was West Germany's capital"
    ]
  },
  LYS: {
    icao: "LFLL", opened: 1975, operator: "VINCI Airports",
    elevation: 235, runways: 2, longestRunway: 3600,
    pax: 11000000, movements: 80000, cargo: 30000,
    hubAirlines: ["Air France", "easyJet"], distanceToCity: 25,
    facts: [
      "Lyon's airport is named after Antoine de Saint-Exupery, author of The Little Prince, who was born in the city",
      "Its TGV station, designed by Santiago Calatrava, resembles a giant bird taking flight and links the airport straight into France's high-speed rail network",
      "It was originally called Satolas, after the village where it was built, before being renamed in 2000 to honor its famous local aviator",
      "Passengers can reach Paris in roughly two hours by direct high-speed train without needing a connecting flight"
    ]
  },
  MRS: {
    icao: "LFML", opened: 1922, operator: "Chambre de Commerce Marseille Provence",
    elevation: 21, runways: 2, longestRunway: 3500,
    pax: 10000000, movements: 80000, cargo: 15000,
    hubAirlines: ["Air France", "easyJet", "Ryanair"], distanceToCity: 25,
    facts: [
      "Marseille Provence sits on the shores of the Etang de Berre lagoon, surrounded by oil refineries and a major Airbus Helicopters plant",
      "It regularly contends with the Mistral, a fierce northerly wind funneling down the Rhone valley that can force tricky crosswind landings",
      "The airfield was historically a key staging post for colonial-era airmail and passenger routes to North Africa",
      "Its original 1922 airfield at Marignane predates most of France's other major regional airports"
    ]
  },
  KRK: {
    icao: "EPKK", opened: 1964, operator: "Krakow Airport JSC",
    elevation: 237, runways: 1, longestRunway: 2550,
    pax: 9500000, movements: 70000,
    hubAirlines: ["Ryanair", "Wizz Air", "LOT Polish Airlines"], distanceToCity: 11,
    facts: [
      "Krakow's airport is named after Pope John Paul II, who served as archbishop of Krakow before becoming pope",
      "It sits in Balice, a village that was also home to a Luftwaffe airfield during the Nazi occupation of Poland",
      "It has become one of Central Europe's fastest-growing airports, fueled by low-cost carrier expansion and Krakow's tourism boom",
      "Auschwitz-Birkenau lies only about 50 kilometers away, making the airport a gateway for both leisure travelers and Holocaust remembrance visits"
    ]
  },
  NUE: {
    icao: "EDDN", opened: 1955, operator: "Flughafen Nurnberg GmbH",
    elevation: 344, runways: 1, longestRunway: 2700,
    pax: 2800000, movements: 40000,
    hubAirlines: ["Eurowings", "Corendon Airlines"], distanceToCity: 5,
    facts: [
      "Nuremberg's airport is officially named Albrecht Durer Airport, after the city's famous Renaissance painter",
      "It sits unusually close to the city, just a few kilometers from Nuremberg's medieval old town",
      "Part of the site was once used for Nazi party rally grounds infrastructure before being converted to civilian aviation use after the war",
      "A short metro ride connects the terminal straight into the city center, one of the fastest airport-to-downtown transit links in Germany"
    ]
  },
  HAJ: {
    icao: "EDDV", opened: 1952, operator: "AviAlliance",
    elevation: 55, runways: 2, longestRunway: 3800,
    pax: 5500000, movements: 60000, cargo: 10000,
    hubAirlines: ["Eurowings", "TUI fly Deutschland"], distanceToCity: 11,
    facts: [
      "Hannover Airport becomes a focal point every spring during the Hannover Messe, one of the world's largest industrial trade fairs",
      "It serves as a key base for TUI, reflecting Hannover's role as headquarters of the world's largest tourism group",
      "In 2016 it hosted Air Force One and dozens of world leaders during a Barack Obama visit tied to the trade fair",
      "Its two parallel runways were built decades apart, a legacy of the airport's gradual postwar expansion"
    ]
  },
  LEJ: {
    icao: "EDDP", opened: 1927, operator: "Mitteldeutsche Flughafen AG",
    elevation: 141, runways: 2, longestRunway: 3600,
    pax: 2500000, movements: 75000, cargo: 1900000,
    hubAirlines: ["DHL Aviation"], distanceToCity: 16,
    facts: [
      "Leipzig/Halle is DHL's largest air cargo hub in the world, with freighters landing and departing around the clock every night",
      "Despite modest passenger numbers, its cargo volume rivals some of Europe's biggest airports thanks entirely to express freight",
      "It runs a genuine 24-hour flight schedule with no night curfew, unusual among German airports, to keep overnight sorting running",
      "A second runway was built specifically to absorb the surge in DHL freighter traffic after the hub opened in 2008"
    ]
  },
  BOD: {
    icao: "LFBD", opened: 1919, operator: "VINCI Airports",
    elevation: 49, runways: 2, longestRunway: 3100,
    pax: 7000000, movements: 70000,
    hubAirlines: ["easyJet", "Air France", "Volotea", "Transavia"], distanceToCity: 11,
    facts: [
      "Bordeaux's airport traces its roots to a First World War military aviation school, one of the earliest in France",
      "Its Billi terminal was one of France's first buildings purpose-built for no-frills, low-cost carrier operations",
      "The airport sits beside the Dassault Aviation plant at Merignac, where military jets such as the Rafale are assembled",
      "Airport branding leans heavily into the surrounding wine country, marketing itself as gateway to the world-famous Bordeaux vineyards"
    ]
  },
  NTE: {
    icao: "LFRS", opened: 1932, operator: "VINCI Airports",
    elevation: 27, runways: 1, longestRunway: 2900,
    pax: 7500000, movements: 60000,
    hubAirlines: ["easyJet", "Air France", "Volotea"], distanceToCity: 9,
    facts: [
      "Nantes Atlantique began life as a Luftwaffe airbase during the Second World War before conversion to civilian use afterward",
      "A long-planned replacement airport at Notre-Dame-des-Landes was scrapped in 2018 after years of intense environmental protests, leaving Nantes Atlantique to be expanded instead",
      "It sits next to an Airbus plant that builds major fuselage sections, shipped out aboard the oversized Beluga transport aircraft",
      "Its single runway now handles steadily rising traffic despite the cancellation of the planned new airport nearby"
    ]
  },
  PMO: {
    icao: "LICJ", opened: 1960, operator: "GESAP",
    elevation: 34, runways: 1, longestRunway: 3326,
    pax: 7500000, movements: 60000,
    hubAirlines: ["Ryanair", "ITA Airways"], distanceToCity: 35,
    facts: [
      "Palermo's airport is named after anti-mafia judges Giovanni Falcone and Paolo Borsellino, both assassinated by the Sicilian mafia in 1992",
      "The runway occupies a narrow coastal strip squeezed between the Tyrrhenian Sea and steep mountains, one of Italy's more demanding approaches",
      "Surrounding terrain forces pilots onto curved approach paths rather than a straight-in descent",
      "The airport's older name, Punta Raisi, still turns up on maps and older signage around the terminal"
    ]
  },
  BRI: {
    icao: "LIBD", opened: 1936, operator: "Aeroporti di Puglia",
    elevation: 56, runways: 1, longestRunway: 3000,
    pax: 6500000, movements: 50000,
    hubAirlines: ["Ryanair", "Wizz Air"], distanceToCity: 9,
    facts: [
      "Bari's airport is named after Pope John Paul II, reflecting the city's status as a pilgrimage site tied to the Basilica of Saint Nicholas",
      "Its terminal, opened in the mid-2000s, features a wave-shaped roof evoking the nearby Adriatic coastline",
      "It has become a key low-cost gateway to Puglia's booming tourism region, including Alberobello's famous trulli houses",
      "Bari is one of southern Italy's main links to the Balkans, with frequent routes across the Adriatic to Albania and beyond"
    ]
  },
  TRN: {
    icao: "LIMF", opened: 1953, operator: "SAGAT",
    elevation: 300, runways: 1, longestRunway: 3300,
    pax: 4300000, movements: 50000,
    hubAirlines: ["Ryanair", "ITA Airways"], distanceToCity: 16,
    facts: [
      "Turin's airport is officially named after former Italian president Sandro Pertini, though locals almost always call it by its old name, Caselle",
      "Its runway sits in the shadow of the Alps, with snow-capped peaks forming a dramatic backdrop on clear approaches",
      "It served as a key test and delivery site for Fiat's aviation division and later Alenia Aeronautica, reflecting Turin's industrial history",
      "The airport underwent major expansion to handle the surge of arrivals during the 2006 Winter Olympics"
    ]
  },
  BSL: {
    icao: "LFSB", opened: 1946, operator: "EuroAirport Basel-Mulhouse-Freiburg",
    elevation: 263, runways: 1, longestRunway: 3900,
    pax: 9000000, movements: 90000, cargo: 110000,
    hubAirlines: ["easyJet"], distanceToCity: 4,
    facts: [
      "EuroAirport is one of the world's few airports jointly run by two countries, with the entire site legally on French soil yet serving Basel, Mulhouse, and Freiburg across three nations' catchment areas",
      "Arriving passengers can exit through either a French or a Swiss customs sector depending on where they are headed",
      "It operates under a special 1949 bilateral treaty between France and Switzerland rather than the rules of a single host nation",
      "A tram extension only reached the terminal in 2017, unusually late for a hub serving such a wealthy border region"
    ]
  },


  // ─── Asia (v1.2 expansion) ─────────────────────────────────────────

  HKT: {
    icao: "VTSP", opened: 1976, operator: "Airports of Thailand (AOT)",
    elevation: 25, runways: 1, longestRunway: 3000,
    pax: 13000000, movements: 90000,
    hubAirlines: ["Bangkok Airways", "Thai AirAsia"], distanceToCity: 32,
    facts: [
      "The single runway sits on a narrow strip between the Andaman Sea and karst hills, forcing steep approaches over the water",
      "Its runway threshold at Mai Khao Beach is a famous spot where tourists stand just meters from landing jets, much like Maho Beach in the Caribbean",
      "Despite having only one runway, it ranks among Thailand's busiest airports thanks to tourism traffic",
      "The airport was undamaged by the 2004 Indian Ocean tsunami because it sits slightly inland from the worst-hit coastline",
      "A major terminal expansion in 2016 roughly tripled capacity to handle the boom in Chinese charter tourism"
    ]
  },

  NGO: {
    icao: "RJGG", opened: 2005, operator: "Central Japan International Airport Co.",
    elevation: 4, runways: 1, longestRunway: 3500,
    pax: 11000000, movements: 130000, cargo: 100000,
    hubAirlines: ["All Nippon Airways", "Japan Airlines"], distanceToCity: 35,
    facts: [
      "Built entirely on a man-made island in Ise Bay, connected to the mainland by a single access road and rail line",
      "Its rooftop 'Sky Deck' and onsen-style bathing area let travelers watch takeoffs while soaking in a hot bath",
      "The masterplan deliberately leaves room to add a second parallel runway on reclaimed land as traffic grows",
      "Opened in 2005 just in time for the World Expo held nearby in Aichi prefecture",
      "Despite sitting on open water, the terminal is barely a few meters above sea level and relies on extensive seawalls against typhoons"
    ]
  },

  MNL: {
    icao: "RPLL", opened: 1948, operator: "Manila International Airport Authority",
    elevation: 23, runways: 2, longestRunway: 3737,
    pax: 47000000, movements: 300000, cargo: 500000,
    hubAirlines: ["Philippine Airlines", "Cebu Pacific", "PAL Express"], distanceToCity: 7,
    facts: [
      "Its two runways cross each other in an X shape, an unusual layout that limits simultaneous operations and worsens congestion",
      "Renamed in 1987 after opposition leader Ninoy Aquino, who was assassinated on the airport tarmac in 1983 upon returning from exile",
      "Long ranked among the world's most congested airports, with four separate terminals sharing a single taxiway system",
      "Has no dedicated rail link into Manila, so ground transfers can take longer than many of the flights themselves",
      "Sits squarely within Metro Manila's dense urban sprawl, among the closest major hub airports to a city center in Asia"
    ]
  },

  CGK: {
    icao: "WIII", opened: 1985, operator: "Angkasa Pura II",
    elevation: 10, runways: 2, longestRunway: 3660,
    pax: 54000000, movements: 400000, cargo: 700000,
    hubAirlines: ["Garuda Indonesia", "Lion Air", "Batik Air", "Citilink"], distanceToCity: 20,
    facts: [
      "Named jointly after Indonesia's first president Sukarno and its first vice president, Mohammad Hatta",
      "Terminal 3 was built as a deliberately column-free check-in hall, one of the largest open spans of its kind in Asia",
      "Once ranked among the world's top 10 busiest airports by passenger traffic despite Jakarta's notorious road congestion",
      "Built on marshy land north of the city, which required extensive soil reinforcement before construction could begin",
      "A dedicated airport rail link finally opened in 2017, more than three decades after the airport itself"
    ]
  },

  SZX: {
    icao: "ZGSZ", opened: 1991, operator: "Shenzhen Airport Group",
    elevation: 4, runways: 2, longestRunway: 3400,
    pax: 52000000, movements: 350000, cargo: 1300000,
    hubAirlines: ["Shenzhen Airlines", "China Southern Airlines"], distanceToCity: 32,
    facts: [
      "Its striking Terminal 3, shaped like a manta ray, was designed by Italian architect Massimiliano Fuksas",
      "Home base of SF Express's SF Airlines, one of China's largest express-cargo carriers, making Shenzhen a key logistics hub",
      "Built partly on reclaimed tidal land along Shenzhen Bay",
      "One of the fastest-growing airports in China over the past two decades as Shenzhen's tech economy boomed",
      "Has its own ferry pier so travelers can cross directly to Hong Kong by boat without going through a land border checkpoint"
    ]
  },

  CAN: {
    icao: "ZGGG", opened: 2004, operator: "Guangzhou Baiyun International Airport Company",
    elevation: 15, runways: 3, longestRunway: 3800,
    pax: 63000000, movements: 440000, cargo: 2000000,
    hubAirlines: ["China Southern Airlines", "Xiamen Airlines"], distanceToCity: 28,
    facts: [
      "China Southern Airlines' mega-hub here anchors the historic 'Canton Route' linking China to Southeast Asia and Oceania",
      "Became mainland China's busiest airport by passenger numbers in 2023, overtaking Beijing",
      "One of the few airports anywhere with three fully independent parallel runways, enabling triple simultaneous operations",
      "The terminal roof design is meant to evoke flowing water, a nod to the Pearl River Delta surrounding it",
      "Replaced the old, land-locked Baiyun airport that had run out of room to expand inside the city"
    ]
  },

  CTU: {
    icao: "ZUTF", opened: 2021, operator: "Chengdu Airport Group",
    elevation: 447, runways: 3, longestRunway: 4000, pax: 40000000, movements: 280000, cargo: 150000,
    hubAirlines: ["Sichuan Airlines", "China Eastern Airlines"], distanceToCity: 50,
    facts: [
      "Opened in 2021, making Chengdu one of only a few Chinese cities with two major full-service international airports",
      "Ultimately masterplanned for six runways, one of the most expansive airport blueprints in the world",
      "Its terminal roof pattern draws inspiration from the giant panda's mountain habitat native to Sichuan",
      "Sits about 50 km from central Chengdu and relies on a dedicated high-speed rail line to bring passengers into the city",
      "Took over the bulk of international long-haul routes from the older, more centrally located Shuangliu airport"
    ]
  },

  CKG: {
    icao: "ZUCK", opened: 1990, operator: "Chongqing Airport Group",
    elevation: 416, runways: 3, longestRunway: 3600, pax: 46000000, movements: 320000, cargo: 400000,
    hubAirlines: ["China Southern Airlines", "Chongqing Airlines"], distanceToCity: 21,
    facts: [
      "Sits amid the mountainous terrain around Chongqing, a city famous for its stacked, multi-level roads and bridges",
      "Chongqing Airlines, the city's home carrier, is jointly owned by China Southern and Hainan Airlines",
      "One of a handful of Chinese airports with three runways, with a fourth planned as Chongqing pushes to become a national aviation hub",
      "Winter fog rolling off the Yangtze river basin regularly forces flight diversions here",
      "Terminal 3's design references Chongqing's centuries-old role as a river-trade gateway on the Yangtze"
    ]
  },

  XIY: {
    icao: "ZLXY", opened: 1991, operator: "Xi'an Xianyang International Airport Co.",
    elevation: 478, runways: 3, longestRunway: 3800, pax: 45000000, movements: 320000, cargo: 300000,
    hubAirlines: ["Hainan Airlines", "China Eastern Airlines", "Xiamen Airlines"], distanceToCity: 41,
    facts: [
      "Located near the ancient capital's Terracotta Army site, making it a gateway to one of China's top archaeological attractions",
      "Underwent a major expansion around 2024 adding a new terminal and more runways to become one of China's largest airports by area",
      "Xi'an was the eastern terminus of the ancient Silk Road, and the airport markets itself as a modern hub on that same route",
      "Sits on the historic Guanzhong Plain, cradle of several ancient Chinese dynasties",
      "Hainan Airlines built one of its largest regional hubs here to link central China with Europe and Central Asia"
    ]
  },

  TAO: {
    icao: "ZSQD", opened: 2021, operator: "Qingdao Jiaodong International Airport Co.",
    elevation: 28, runways: 2, longestRunway: 3600, pax: 25000000, movements: 180000, cargo: 200000,
    hubAirlines: ["Shandong Airlines", "China Eastern Airlines"], distanceToCity: 39,
    facts: [
      "Opened in 2021 with a starfish-shaped terminal, one of the most distinctive airport silhouettes in China",
      "Replaced Qingdao's old Liuting Airport, which was converted into a military-only base after the switch",
      "Qingdao's German colonial past and beer-brewing fame are echoed in the airport's Tsingtao-branded lounges",
      "Built as part of a plan to make Qingdao a major logistics gateway on the Yellow Sea coast",
      "Its radial pier design lets aircraft park closer to the terminal center, cutting passenger walking distances"
    ]
  },

  NKG: {
    icao: "ZSNJ", opened: 1997, operator: "Nanjing Lukou International Airport Co.",
    elevation: 26, runways: 2, longestRunway: 3600, pax: 28000000, movements: 200000, cargo: 400000,
    hubAirlines: ["China Eastern Airlines", "Juneyao Airlines"], distanceToCity: 35,
    facts: [
      "Sits roughly 35 km south of central Nanjing, one of the farther airport-to-city distances among major Chinese hubs",
      "Replaced the older Nanjing Dajiaochang airport, which had been in continuous use since the 1930s",
      "Named after Lukou, the small town on Nanjing's southern outskirts where it was built",
      "Straddles the border area near neighboring Anhui province, an unusual near cross-provincial location for a city's main airport",
      "Nanjing served as China's capital during several historical periods, and the airport markets itself as gateway to the ancient city walls"
    ]
  },

  XMN: {
    icao: "ZSAM", opened: 1983, operator: "Xiamen International Airport Group",
    elevation: 6, runways: 2, longestRunway: 3400, pax: 27000000, movements: 190000, cargo: 350000,
    hubAirlines: ["Xiamen Airlines"], distanceToCity: 8,
    facts: [
      "Home base of Xiamen Airlines, mainland China's oldest continuously operating airline, founded in 1984",
      "Built on reclaimed land linked to Xiamen Island by a causeway, giving many approaches a scenic run in over the strait facing Taiwan",
      "Ranks among the busiest airports in China still operating on essentially one main runway, prompting construction of an entirely new Xiamen airport at Xiang'an",
      "A short flight from Kinmen, the Taiwan-controlled islands visible from parts of Xiamen's coastline",
      "One of the closest major Chinese airports to its own downtown core, only about 8 km away"
    ]
  },

  CSX: {
    icao: "ZGHA", opened: 1989, operator: "Hunan Airport Group",
    elevation: 66, runways: 2, longestRunway: 3600, pax: 27000000, movements: 190000, cargo: 150000,
    hubAirlines: ["China Southern Airlines", "Hunan Airlines"], distanceToCity: 25,
    facts: [
      "Named after the nearby town of Huanghua, not the river-island 'Orange Isle' landmark most tourists associate with Changsha",
      "Serves as the main gateway to Hunan province, home to Mao Zedong's birthplace and the dramatic sandstone pillars of Zhangjiajie",
      "Hunan Airlines, based here, is one of China's smaller regional carriers with dense links across central China",
      "Underwent a major terminal expansion in the 2010s as Changsha's manufacturing and tech economy grew rapidly",
      "Summer thunderstorms are common in this part of Hunan, regularly causing delays during the hot, humid months"
    ]
  },

  WUH: {
    icao: "ZHHH", opened: 1995, operator: "Wuhan Airport Group",
    elevation: 34, runways: 3, longestRunway: 3600, pax: 24000000, movements: 170000, cargo: 300000,
    hubAirlines: ["China Southern Airlines", "Hainan Airlines"], distanceToCity: 26,
    facts: [
      "Became globally known in January 2020 as the origin point of the first city-wide COVID-19 travel shutdown",
      "Sits near Wuhan's confluence of the Yangtze and Han rivers, historically one of China's key inland trade crossroads",
      "Terminal 3's wave-like roof is meant to evoke the region's rivers and lakes",
      "Wuhan is nicknamed the 'Chicago of the East' for its rail and river transport hub status, a role the airport now extends into aviation",
      "Home to a growing air-cargo and e-commerce hub tied to central China's manufacturing belt"
    ]
  },

  CTS: {
    icao: "RJCC", opened: 1988, operator: "New Chitose Airport Company / MLIT",
    elevation: 26, runways: 2, longestRunway: 3000, pax: 23000000, movements: 150000, cargo: 60000,
    hubAirlines: ["All Nippon Airways", "Japan Airlines", "AirDo"], distanceToCity: 42,
    facts: [
      "Home to Japan's only airport-based hot spring theme park, Chitose Airport Onsen, built right inside the terminal complex",
      "Also houses an indoor ice rink and a large duty-free character theme park, making it as much a destination as a transit point",
      "Regularly hit by heavy winter snowfall, requiring some of the most intensive runway de-icing operations in Japan",
      "AirDo, Hokkaido's dedicated regional carrier, was created specifically to keep fares affordable on routes to Tokyo",
      "Shares its runways with the Japan Air Self-Defense Force's Chitose Air Base next door"
    ]
  },

  FUK: {
    icao: "RJFF", opened: 1944, operator: "Fukuoka International Airport Corporation",
    elevation: 10, runways: 1, longestRunway: 2800, pax: 24000000, movements: 155000, cargo: 50000,
    hubAirlines: ["All Nippon Airways", "Japan Airlines", "Solaseed Air"], distanceToCity: 3,
    facts: [
      "One of the busiest single-runway airports in the world, handling well over 150,000 takeoffs and landings a year",
      "Sits only about 3 km from downtown Fukuoka, making it one of the most centrally located major airports in Asia",
      "Built on the site of a former Japanese Imperial Army airfield and later operated for years as a US military base called Itazuke",
      "Its closeness to the city means the subway ride from the terminal to Hakata Station takes only a few minutes",
      "A second runway has been under construction for years specifically to relieve congestion at this notoriously busy single strip"
    ]
  },

  PUS: {
    icao: "RKPK", opened: 1976, operator: "Korea Airports Corporation",
    elevation: 3, runways: 2, longestRunway: 2744, pax: 17000000, movements: 120000, cargo: 100000,
    hubAirlines: ["Air Busan", "Korean Air", "Asiana Airlines"], distanceToCity: 27,
    facts: [
      "Shares its runways with a Republic of Korea Air Force base, a legacy of its origin as the Korean War-era US airfield known as K-1",
      "Air Busan, headquartered here, was created to give South Korea's second city direct regional routes independent of Seoul-centric flying",
      "Mountains ringing the airport require a distinctive curved approach for some runway directions",
      "A long-debated new offshore airport at Gadeokdo has been approved to eventually take over Gimhae's international traffic",
      "Busan's status as a major container port city is echoed in the airport's growing air-cargo trade with Japan and China"
    ]
  },

  KHI: {
    icao: "OPKC", opened: 1929, operator: "Pakistan Airports Authority",
    elevation: 30, runways: 2, longestRunway: 3400, pax: 7000000, movements: 70000, cargo: 200000,
    hubAirlines: ["Pakistan International Airlines", "Airblue"], distanceToCity: 15,
    facts: [
      "Named after Muhammad Ali Jinnah, founder of Pakistan, and remains the country's busiest airport despite Islamabad being the capital",
      "Served as a key refueling stop on early transcontinental air routes between Europe and Asia before long-range jets made the trip nonstop",
      "Karachi was briefly Pakistan's capital, and some of the airport's original buildings date to that early post-independence era",
      "Handles the bulk of Pakistan's air cargo trade thanks to Karachi's status as the country's main seaport city",
      "Dust storms and coastal fog blowing in from the Arabian Sea occasionally disrupt operations here"
    ]
  },

  LHE: {
    icao: "OPLA", opened: 1980, operator: "Pakistan Airports Authority",
    elevation: 217, runways: 1, longestRunway: 3360, pax: 6500000, movements: 60000, cargo: 80000,
    hubAirlines: ["Pakistan International Airlines", "Airblue"], distanceToCity: 15,
    facts: [
      "Named after Sir Muhammad Iqbal, the poet-philosopher regarded as the spiritual father of Pakistan's creation",
      "Replaced the historic Walton Aerodrome, which served Lahore from the British colonial era and still stands as a heritage site",
      "Dense winter smog, worsened by regional crop burning, frequently forces flight delays and diversions each November and December",
      "Sits close to the India-Pakistan border, a legacy of Lahore's role as a frontier city divided during the 1947 Partition",
      "One of only a few Pakistani airports with direct flights to Saudi Arabia timed around the Hajj and Umrah pilgrimage seasons"
    ]
  },

  ISB: {
    icao: "OPIS", opened: 2018, operator: "Pakistan Airports Authority",
    elevation: 507, runways: 1, longestRunway: 3600, pax: 5500000, movements: 55000, cargo: 50000,
    hubAirlines: ["Pakistan International Airlines", "Airblue", "SereneAir"], distanceToCity: 30,
    facts: [
      "Opened in 2018 to replace the older, capacity-strained Benazir Bhutto International Airport located much closer to the city",
      "At roughly 30 km from central Islamabad, it sits notably farther from downtown than the airport it replaced",
      "Its single runway, over 3,600 meters long, is among the longest in Pakistan, built to accommodate large long-haul aircraft",
      "Sits near the foothills of the Margalla Hills, giving arriving flights a scenic mountain backdrop unusual for a capital-city airport",
      "The relocation was controversial, criticized for years of construction delays and cost overruns before it finally opened"
    ]
  },

  IKA: {
    icao: "OIIE", opened: 2004, operator: "Iran Airports Company",
    elevation: 1007, runways: 2, longestRunway: 4000,
    pax: 7500000, movements: 55000, cargo: 150000,
    hubAirlines: ["Iran Air", "Mahan Air"], distanceToCity: 30,
    facts: [
      "It was built to replace overcrowded Mehrabad as Tehran's main international gateway but took decades to fully open due to the 1979 revolution and subsequent unrest",
      "Sits on a high desert plateau over 1000 meters above sea level, which lengthens takeoff runs for departing jets",
      "Decades of international sanctions have forced Iranian carriers to keep some of the oldest passenger jets still flying in scheduled service",
      "Mehrabad, the older city-center airport it was meant to replace, remains in use today for domestic and government flights",
      "The terminal design was inspired by Persian garden architecture with symmetrical courtyards"
    ]
  },
  TPE: {
    icao: "RCTP", opened: 1979, operator: "Taoyuan International Airport Corporation",
    elevation: 33, runways: 2, longestRunway: 3800,
    pax: 42000000, movements: 220000, cargo: 2100000,
    hubAirlines: ["China Airlines", "EVA Air"], distanceToCity: 40,
    facts: [
      "It was named Chiang Kai-shek International Airport until a politically charged renaming in 2006",
      "Ranks among the busiest cargo airports on earth, driven almost entirely by Taiwan's semiconductor and electronics exports",
      "A third runway and satellite terminal are under construction to relieve a facility that already exceeds its designed passenger capacity",
      "Sits far enough from Taipei that a dedicated airport MRT rail line only opened in 2017 to connect the two"
    ]
  },
  SHA: {
    icao: "ZSSS", opened: 1921, operator: "Shanghai Airport Authority",
    elevation: 3, runways: 2, longestRunway: 3400,
    pax: 44000000, movements: 300000, cargo: 200000,
    hubAirlines: ["China Eastern Airlines", "Shanghai Airlines"], distanceToCity: 13,
    facts: [
      "It was Shanghai's sole airport until Pudong International opened across the city in 1999 to take over most long-haul international traffic",
      "Sits only about 13 kilometers from downtown, far closer than Pudong, which keeps it popular with business travelers on domestic routes",
      "Is physically fused with Hongqiao Railway Station, creating one of the largest integrated air-rail transport hubs in the world",
      "Despite predating aviation's jet age, its runways still handle several hundred thousand movements a year in one of China's busiest air corridors"
    ]
  },
  MCT: {
    icao: "OOMS", opened: 2018, operator: "Oman Airports Management Company",
    elevation: 15, runways: 2, longestRunway: 4000,
    pax: 13000000, movements: 90000, cargo: 50000,
    hubAirlines: ["Oman Air", "SalamAir"], distanceToCity: 30,
    facts: [
      "The current terminal opened in 2018 and roughly tripled capacity, replacing the older Seeb International Airport it grew out of",
      "Squeezed between the jagged Al Hajar mountains and the Gulf of Oman coastline, giving arriving flights a dramatic scenic descent",
      "Terminal architecture deliberately echoes traditional Omani forts and wind-tower motifs rather than generic glass-and-steel design",
      "Functions as a connecting hub for traffic threading between Europe, East Africa and South Asia"
    ]
  },
  CMB: {
    icao: "VCBI", opened: 1967, operator: "Airport and Aviation Services Sri Lanka",
    elevation: 9, runways: 1, longestRunway: 3350,
    pax: 10500000, movements: 75000, cargo: 180000,
    hubAirlines: ["SriLankan Airlines"], distanceToCity: 32,
    facts: [
      "Despite being the national hub, it operates with just a single runway serving the country's entire long-haul network",
      "It actually sits near Negombo, roughly 32 kilometers from central Colombo, not within the capital itself",
      "In 2001 Tamil Tiger rebels stormed the adjacent air force base and destroyed several parked airliners on the tarmac",
      "Named after Sri Lanka's first prime minister rather than any geographic feature"
    ]
  },
  DAC: {
    icao: "VGHS", opened: 1980, operator: "Civil Aviation Authority of Bangladesh",
    elevation: 9, runways: 1, longestRunway: 3200,
    pax: 9500000, movements: 70000, cargo: 250000,
    hubAirlines: ["Biman Bangladesh Airlines", "US-Bangla Airlines"], distanceToCity: 17,
    facts: [
      "Its cargo apron is a critical choke point for Bangladesh's garment industry, which ships enormous volumes of ready-made clothing by air freight",
      "It was known as Zia International Airport for over two decades before being renamed after a 14th century Sufi saint",
      "A sprawling new third terminal designed with a wave-shaped roof opened in 2023 as one of the country's largest ever infrastructure projects",
      "Operates on a single runway despite serving a metro area of over 20 million people"
    ]
  },
  CCU: {
    icao: "VECC", opened: 1924, operator: "Airports Authority of India",
    elevation: 6, runways: 2, longestRunway: 3627,
    pax: 11500000, movements: 90000, cargo: 60000,
    hubAirlines: ["IndiGo", "SpiceJet"], distanceToCity: 17,
    facts: [
      "One of India's oldest active airports, it was known as Dum Dum Airport for most of the 20th century",
      "Named after Subhas Chandra Bose, the independence leader who sought military backing from Axis powers against British rule",
      "Historically served as India's principal gateway to the northeastern states and onward routes into Southeast Asia",
      "Its older terminal building still stands beside the modern one, a visible layer of colonial-era aviation history"
    ]
  },
  MAA: {
    icao: "VOMM", opened: 1930, operator: "Airports Authority of India",
    elevation: 16, runways: 2, longestRunway: 3658,
    pax: 22000000, movements: 150000, cargo: 400000,
    hubAirlines: ["IndiGo", "Air India"], distanceToCity: 12,
    facts: [
      "One of its two intersecting runways is partly built on a bridge spanning the Adyar River, an unusual piece of runway engineering",
      "Handles a disproportionate share of India's air cargo thanks to Chennai's cluster of electronics and auto-parts factories",
      "Was one of the first airports in India to have a purpose-built international terminal separate from domestic operations",
      "Sits close enough to the Bay of Bengal that flooding from the Adyar has previously forced runway closures"
    ]
  },
  BLR: {
    icao: "VOBL", opened: 2008, operator: "Bangalore International Airport Limited",
    elevation: 914, runways: 2, longestRunway: 4000,
    pax: 37500000, movements: 230000, cargo: 450000,
    hubAirlines: ["IndiGo", "Air India"], distanceToCity: 35,
    facts: [
      "Sits at roughly 900 meters elevation, making it one of the highest major airports in India with a noticeably cooler climate",
      "Named after Kempegowda, the 16th century chieftain traditionally credited with founding Bengaluru",
      "Replaced the old HAL Airport, a former Air Force and aircraft-manufacturer base much closer to the city center",
      "Handles a huge share of India's pharmaceutical and electronics air exports thanks to Bengaluru's tech industry"
    ]
  },
  SGN: {
    icao: "VVTS", opened: 1930, operator: "Airports Corporation of Vietnam",
    elevation: 10, runways: 2, longestRunway: 3800,
    pax: 41000000, movements: 280000, cargo: 600000,
    hubAirlines: ["Vietnam Airlines", "VietJet Air"], distanceToCity: 8,
    facts: [
      "During the Vietnam War it was reputedly the busiest airport in the world by aircraft movements, operating as a massive joint US-South Vietnamese airbase",
      "Sits barely 8 kilometers from downtown Ho Chi Minh City, an unusually short hop for such a high-traffic international airport",
      "Chronic overcrowding is driving construction of the new Long Thanh International Airport nearby, due to open in phases from 2026",
      "Runway infrastructure still traces back to French colonial and American military-era construction"
    ]
  },
  HAN: {
    icao: "VVNB", opened: 1978, operator: "Airports Corporation of Vietnam",
    elevation: 12, runways: 2, longestRunway: 3800,
    pax: 26500000, movements: 180000, cargo: 500000,
    hubAirlines: ["Vietnam Airlines", "VietJet Air", "Bamboo Airways"], distanceToCity: 28,
    facts: [
      "Originally built as a military airbase, it only converted to civilian passenger service in the late 1970s after reunification",
      "Terminal 2, opened in 2015, has an undulating roofline deliberately inspired by the limestone karsts of Halong Bay",
      "Located north of the Red River, so nearly every journey into central Hanoi crosses one of the river's bridges",
      "Passenger numbers have grown explosively as Hanoi's role as a manufacturing and tourism gateway has expanded"
    ]
  },
  OKA: {
    icao: "ROAH", opened: 1933, operator: "Naha Airport Building Co.",
    elevation: 3, runways: 2, longestRunway: 3000,
    pax: 19500000, movements: 140000, cargo: 250000,
    hubAirlines: ["ANA", "Japan Transocean Air", "Solaseed Air"], distanceToCity: 4,
    facts: [
      "Remained under US military administration until Okinawa's reversion to Japanese sovereignty in 1972",
      "ANA operates an overnight cargo hub here nicknamed the Okinawa hub, using the island's position to bridge Japan and the rest of Asia by air freight overnight",
      "A second runway built partly on reclaimed land into the East China Sea opened in 2020 to ease congestion",
      "For decades it shared facilities with an adjacent US military airfield before civil and military operations were separated"
    ]
  },
  CJU: {
    icao: "RKPC", opened: 1968, operator: "Korea Airports Corporation",
    elevation: 36, runways: 2, longestRunway: 3200,
    pax: 29500000, movements: 210000, cargo: 50000,
    hubAirlines: ["Korean Air", "Jeju Air", "Jin Air"], distanceToCity: 3,
    facts: [
      "The Jeju-Seoul Gimpo route it anchors has repeatedly ranked as one of the single busiest air routes on the planet by passenger count",
      "Low-cost carrier Jeju Air takes its name directly from this volcanic island airport, where it is headquartered",
      "Built on a subtropical volcanic island, it is periodically disrupted by strong crosswinds sweeping in off the Korea Strait",
      "Persistent capacity constraints have kept a long-debated second Jeju airport project alive for years"
    ]
  },
  CNX: {
    icao: "VTCC", opened: 1922, operator: "Airports of Thailand",
    elevation: 314, runways: 1, longestRunway: 3000,
    pax: 8000000, movements: 60000, cargo: 12000,
    hubAirlines: ["Thai AirAsia", "Nok Air"], distanceToCity: 4,
    facts: [
      "One of Thailand's oldest airports, it has been in continuous operation since the early 1920s",
      "Ringed by the mountains of northern Thailand, arriving flights descend through a noticeably scenic valley approach",
      "Seasonal agricultural burning across the region regularly blankets the airport in haze thick enough to disrupt flight schedules",
      "Its single runway and mountainous surroundings leave little room for the kind of expansion Bangkok's airports have undergone"
    ]
  },
  HYD: {
    icao: "VOHS", opened: 2008, operator: "GMR Hyderabad International Airport Limited",
    elevation: 542, runways: 2, longestRunway: 4260,
    pax: 24500000, movements: 160000, cargo: 180000,
    hubAirlines: ["IndiGo", "Air India Express"], distanceToCity: 22,
    facts: [
      "Its longest runway stretches beyond 4,260 meters, among the longest in India and long enough for a fully loaded Airbus A380",
      "Became one of the first airports in Asia to earn LEED Gold certification for sustainable, energy-efficient terminal design",
      "Replaced the old Begumpet Airport, which sat much closer to the city but could not expand further",
      "Was developed as one of India's first greenfield airport public-private partnerships"
    ]
  },
  RGN: {
    icao: "VYYY", opened: 1947, operator: "Department of Civil Aviation, Myanmar",
    elevation: 30, runways: 1, longestRunway: 3413,
    pax: 3000000, movements: 30000, cargo: 15000,
    hubAirlines: ["Myanmar National Airlines", "Myanmar Airways International"], distanceToCity: 15,
    facts: [
      "It began life as Mingaladon airfield, a Royal Air Force base built under British colonial rule",
      "Remained Myanmar's principal international gateway even after the capital was abruptly relocated to Naypyidaw in 2006",
      "Passenger traffic collapsed sharply after the 2021 military coup compounded the pandemic-era travel slump",
      "Its terminal incorporates tiered, pagoda-style rooflines drawn from traditional Burmese architecture"
    ]
  },
  BKI: {
    icao: "WBKK", opened: 1963, operator: "Malaysia Airports Holdings Berhad",
    elevation: 3, runways: 1, longestRunway: 3780,
    pax: 9000000, movements: 70000, cargo: 30000,
    hubAirlines: ["Malaysia Airlines", "AirAsia"], distanceToCity: 7,
    facts: [
      "Serves as the main gateway to Mount Kinabalu, the highest peak in insular Southeast Asia, visible from the terminal on clear days",
      "Sits directly on the South China Sea coastline, giving departing passengers water views right up to the runway's edge",
      "For years was one of Malaysia's busiest airports after Kuala Lumpur, driven by strong domestic Borneo demand",
      "Acts as the jumping-off point for Sabah's rainforest lodges and world-renowned dive sites off Sipadan"
    ]
  },
  CEB: {
    icao: "RPVM", opened: 1965, operator: "GMR-Megawide Cebu Airport Corporation",
    elevation: 12, runways: 1, longestRunway: 3300,
    pax: 11500000, movements: 95000, cargo: 60000,
    hubAirlines: ["Cebu Pacific", "Philippine Airlines"], distanceToCity: 16,
    facts: [
      "Sits on Mactan Island, the very spot where explorer Ferdinand Magellan was killed in battle with local chieftain Lapu-Lapu in 1521",
      "Its 2018 terminal was deliberately shaped to evoke a woven basket, echoing traditional Filipino handicraft patterns",
      "Reaches the mainland only via bridges across the narrow Mactan Channel",
      "Ranks as the country's second-busiest airport, propelled largely by beach-resort tourism rather than business travel"
    ]
  },
  SUB: {
    icao: "WARR", opened: 1964, operator: "Angkasa Pura I",
    elevation: 3, runways: 1, longestRunway: 3000,
    pax: 9000000, movements: 70000, cargo: 40000,
    hubAirlines: ["Lion Air", "Citilink"], distanceToCity: 20,
    facts: [
      "Originated as a Dutch colonial-era naval airbase before being converted for civilian air travel",
      "Named after Juanda Kartawijaya, an Indonesian independence-era prime minister rather than a local landmark",
      "Ranks as the busiest airport on Java outside the greater Jakarta area",
      "Handles heavy domestic traffic feeding East Java's industrial and tourism corridor toward Bali"
    ]
  },


  // ─── North America (v1.2 expansion) ─────────────────────────────────────────

  CUN: {
    icao: "MMUN", opened: 1974, operator: "Grupo Aeroportuario del Sureste (ASUR)",
    elevation: 7, runways: 2, longestRunway: 3700,
    pax: 30200000, movements: 210000, cargo: 14000,
    hubAirlines: ["Aeroméxico", "Volaris", "Viva Aerobus"], distanceToCity: 17,
    facts: [
      "Cancún's terminal 3 was designed with a distinctive palapa-style roof echoing traditional Mayan thatched architecture",
      "It is the busiest airport in Mexico after Mexico City, driven almost entirely by tourism to the Riviera Maya",
      "The airport sits well inland from the hotel zone, so nearly every arriving flight is met by a fleet of tour-operator buses",
      "Cancún handles more international passengers than any other airport in Mexico",
      "Despite huge tourist volume, cargo operations stay minimal since almost all traffic is passenger charter and scheduled leisure flights"
    ]
  },
  SXM: {
    icao: "TNCM", opened: 1943, operator: "Princess Juliana International Airport Operating Company",
    elevation: 4, runways: 1, longestRunway: 2300,
    pax: 2000000, movements: 48000,
    hubAirlines: ["Winair"], distanceToCity: 2,
    facts: [
      "Maho Beach sits right at the runway threshold, letting beachgoers watch jets pass just meters overhead on final approach",
      "A famous fence at Maho Beach warns tourists after several were blown into the water or against the fence by jet blast",
      "The runway is one of the shortest in the world able to host wide-body jets, since it ends practically on the beach",
      "The island is politically split between Dutch Sint Maarten and French Saint-Martin, though only one airport serves both sides",
      "Regional carrier Winair is based here, connecting the Maho Beach runway to tiny neighboring islands like Saba"
    ]
  },
  TGU: {
    icao: "MHTG", opened: 1934, operator: "Interairports",
    elevation: 1005, runways: 1, longestRunway: 1830,
    pax: 1200000, movements: 15000,
    distanceToCity: 6,
    facts: [
      "Toncontín was long ranked among the most dangerous commercial airports in the world because of its short runway hemmed in by mountains",
      "Pilots must fly a steep banking turn just before touchdown to line up with the single runway squeezed between hills",
      "The runway sits in a valley surrounded by peaks over 1,200 meters, forcing large jets into unusually tight approach angles",
      "A fatal 2008 crash that killed five people led several airlines to restrict which aircraft types could use the airport",
      "Since 2021 many international flights have shifted to the new Palmerola International Airport outside the capital specifically to avoid Toncontín's approach"
    ]
  },
  CLT: {
    icao: "KCLT", opened: 1936, operator: "City of Charlotte Aviation Department",
    elevation: 230, runways: 4, longestRunway: 3201,
    pax: 50100000, movements: 540000, cargo: 180000,
    hubAirlines: ["American Airlines"], distanceToCity: 11,
    facts: [
      "Charlotte Douglas is American Airlines' second-largest hub by departures, a legacy inherited from US Airways",
      "It ranks among the busiest airports in the world by aircraft movements despite Charlotte not being a top-20 US metro area",
      "The airport is named for Ben Elbert Douglas Sr, Charlotte's mayor and an early local aviation booster who held a pilot's license",
      "Four runways let it run near-continuous banks of departures and arrivals to feed American's connecting traffic",
      "Charlotte handles far more domestic connections than international ones, making it one of the busiest US hubs many foreign travelers have never heard of"
    ]
  },
  MCO: {
    icao: "KMCO", opened: 1981, operator: "Greater Orlando Aviation Authority",
    elevation: 29, runways: 4, longestRunway: 3658,
    pax: 57300000, movements: 340000, cargo: 200000,
    hubAirlines: ["Southwest Airlines", "JetBlue", "Frontier Airlines"], distanceToCity: 10,
    facts: [
      "Orlando International's code MCO comes from McCoy Air Force Base, the Strategic Air Command base the airport replaced",
      "It has an on-site security checkpoint built directly inside an airport hotel, the Hyatt Regency, above the main terminal",
      "A people-mover tram system shuttles passengers since the landside terminal sits over a kilometer from the airside gates",
      "Orlando is the busiest airport in Florida and one of the busiest in the US, driven almost entirely by theme-park tourism",
      "A retired Boeing 747 stands near the airport for public tours, a nod to the site's Air Force history"
    ]
  },
  PHX: {
    icao: "KPHX", opened: 1935, operator: "City of Phoenix Aviation Department",
    elevation: 337, runways: 3, longestRunway: 3688,
    pax: 49500000, movements: 450000, cargo: 230000,
    hubAirlines: ["American Airlines"], distanceToCity: 5,
    facts: [
      "Sky Harbor sits barely five kilometers from downtown Phoenix, one of the closest major hub airports to a US city center",
      "It is American Airlines' largest hub by number of destinations served",
      "Extreme summer heat can ground some older aircraft types, since certain jets carry weight restrictions above roughly 48°C",
      "The airport takes its name from an early private airfield called Sky Harbor that opened south of downtown in the 1920s",
      "Phoenix's dry desert climate gives Sky Harbor one of the highest shares of weather-unaffected operations among major US airports"
    ]
  },
  EWR: {
    icao: "KEWR", opened: 1928, operator: "Port Authority of New York and New Jersey",
    elevation: 6, runways: 3, longestRunway: 3355,
    pax: 49000000, movements: 430000, cargo: 900000,
    hubAirlines: ["United Airlines"], distanceToCity: 16,
    facts: [
      "Newark was the first major airport built to serve New York City, opening in 1928, years before LaGuardia or JFK existed",
      "It was briefly the world's busiest commercial airport during the 1930s, before Idlewild, later JFK, was even built",
      "United Airlines runs its largest hub here, using Newark as its primary gateway from the New York area to Europe",
      "The airport sits on reclaimed marshland along Newark Bay, requiring extensive landfill and drainage work during construction",
      "Continental Airlines built Newark into a hub in the 1990s, a legacy United inherited after their 2010 merger"
    ]
  },
  IAH: {
    icao: "KIAH", opened: 1969, operator: "Houston Airport System",
    elevation: 30, runways: 5, longestRunway: 3662,
    pax: 46000000, movements: 410000, cargo: 250000,
    hubAirlines: ["United Airlines"], distanceToCity: 37,
    facts: [
      "Bush Intercontinental is United Airlines' largest hub by destination count and a major US gateway to Latin America",
      "It was renamed in 1997 to honor President George H W Bush, a longtime Houston resident",
      "An automated underground train links its terminals, one of the few subway-style systems at a US airport",
      "The airport's five runways make it one of only a handful of US airports with that many active",
      "Houston's humid subtropical climate and frequent thunderstorms make IAH one of the more weather-delay-prone hubs in the country"
    ]
  },
  MSP: {
    icao: "KMSP", opened: 1920, operator: "Metropolitan Airports Commission",
    elevation: 256, runways: 4, longestRunway: 3389,
    pax: 38000000, movements: 400000, cargo: 200000,
    hubAirlines: ["Delta Air Lines", "Sun Country Airlines"], distanceToCity: 16,
    facts: [
      "MSP traces back to Wold-Chamberlain Field, opened in 1920, making it one of the oldest continuously operated US airports",
      "It is Delta Air Lines' largest hub outside Atlanta, a legacy of Delta's merger with Twin-Cities-based Northwest Airlines",
      "Sun Country Airlines is headquartered and based here, one of the few US leisure carriers still rooted in a cold-weather hub",
      "The airport runs one of the largest snow-removal fleets of any US airport to keep runways clear through harsh winters",
      "MSP sits almost equidistant between downtown Minneapolis and downtown St Paul, giving it its hyphenated name"
    ]
  },
  SDQ: {
    icao: "MDSD", opened: 1959, operator: "Aerodom",
    elevation: 18, runways: 1, longestRunway: 3353,
    pax: 4600000, movements: 60000, cargo: 15000,
    hubAirlines: ["Arajet"], distanceToCity: 20,
    facts: [
      "Las Américas takes its name from the highway linking it to Santo Domingo, itself named for the Americas",
      "The airport sits directly along the Caribbean coastline, with its single runway running parallel to the shore",
      "It was the site of a major aviation disaster in 1970 when a chartered DC-9 crashed shortly after takeoff",
      "Santo Domingo's airport is the home base of Arajet, the Dominican Republic's first ultra-low-cost carrier, launched in 2022",
      "Despite serving the capital, Las Américas now handles fewer passengers than the resort airport at Punta Cana on the same island"
    ]
  },
  PUJ: {
    icao: "MDPC", opened: 1984, operator: "Grupo Puntacana",
    elevation: 12, runways: 2, longestRunway: 3300,
    pax: 8600000, movements: 70000,
    distanceToCity: 8,
    facts: [
      "Punta Cana is one of the only major international airports in the world that is privately owned, built by the Grupo Puntacana resort developer",
      "Its terminals use open-air, palm-thatched roof structures instead of enclosed jet bridges, keeping a tropical airport feel",
      "It is the busiest airport in the Caribbean by passenger traffic, surpassing even Puerto Rico's main airport",
      "The airport was built to directly serve the resort corridor rather than any nearby city, so it has almost no urban surroundings",
      "Nearly all arriving flights are seasonal leisure charters and scheduled holiday routes from Europe and North America"
    ]
  },
  DCA: {
    icao: "KDCA", opened: 1941, operator: "Metropolitan Washington Airports Authority",
    elevation: 4, runways: 3, longestRunway: 2094,
    pax: 25000000, movements: 300000,
    hubAirlines: ["American Airlines"], distanceToCity: 5,
    facts: [
      "National Airport enforces a strict perimeter rule limiting most nonstop flights to roughly 1,250 miles, protecting Dulles's long-haul traffic",
      "Its main approach follows the curving Potomac River, a distinctive visual approach pilots call the River Visual",
      "The airport was renamed for President Ronald Reagan in 1998, decades after opening as Washington National in 1941",
      "Its proximity to the Pentagon and downtown Washington makes it one of the most airspace-restricted airports in the country",
      "A January 2025 mid-air collision between a regional jet and a military helicopter near the airport prompted new restricted zones around the Potomac approach"
    ]
  },
  IAD: {
    icao: "KIAD", opened: 1962, operator: "Metropolitan Washington Airports Authority",
    elevation: 95, runways: 5, longestRunway: 3505,
    pax: 24000000, movements: 330000, cargo: 300000,
    hubAirlines: ["United Airlines"], distanceToCity: 42,
    facts: [
      "Dulles was the first airport designed specifically for jet aircraft, opening in 1962 with a landmark Eero Saarinen terminal",
      "It pioneered mobile lounges, giant vehicles that ferried passengers directly from the terminal out to aircraft on the tarmac",
      "Despite serving the US capital, Dulles sits roughly 42 kilometers from downtown Washington in rural Virginia",
      "United Airlines uses Dulles as its primary hub for flights to Africa and the Middle East from the Washington area",
      "The terminal's swooping, wing-like roofline is considered one of the great works of modernist airport architecture"
    ]
  },
  DTW: {
    icao: "KDTW", opened: 1958, operator: "Wayne County Airport Authority",
    elevation: 202, runways: 6, longestRunway: 3688,
    pax: 35000000, movements: 370000, cargo: 100000,
    hubAirlines: ["Delta Air Lines"], distanceToCity: 30,
    facts: [
      "Detroit Metro is Delta Air Lines' largest hub in the northern US and a key connecting point on polar routes to Asia",
      "Its McNamara Terminal features an indoor tram and a long light-and-water fountain display running the length of the concourse",
      "The airport operates six runways, one of the highest counts of any US airport, to handle Michigan's frequent winter weather",
      "Detroit Metro sits roughly 30 kilometers from downtown, closer to the suburb of Romulus than to the city it's named for",
      "Lake-effect snow and fog from nearby Lake Erie and Lake Huron make de-icing a major part of winter operations"
    ]
  },
  YYC: {
    icao: "CYYC", opened: 1938, operator: "The Calgary Airport Authority",
    elevation: 1084, runways: 3, longestRunway: 4267,
    pax: 18000000, movements: 230000, cargo: 130000,
    hubAirlines: ["WestJet", "Air Canada"], distanceToCity: 17,
    facts: [
      "Calgary International sits over 1,000 meters above sea level, making it one of the highest major airports in Canada",
      "Its runway 17L/35R stretches 4,267 meters, among the longest civil runways in North America, partly to offset thinner high-altitude air",
      "The airport is the headquarters hub of WestJet, Canada's second-largest airline",
      "High elevation and dry air mean aircraft need noticeably longer takeoff rolls here than at sea-level airports",
      "Its international terminal, opened in 2016, was one of the largest infrastructure projects in Calgary's history"
    ]
  },
  SAN: {
    icao: "KSAN", opened: 1928, operator: "San Diego County Regional Airport Authority",
    elevation: 5, runways: 1, longestRunway: 2865,
    pax: 25000000, movements: 200000,
    distanceToCity: 5,
    facts: [
      "San Diego International runs on a single runway squeezed between downtown skyscrapers and San Diego Bay",
      "Also known as Lindbergh Field, it's named for Charles Lindbergh, whose Spirit of St Louis was built and first tested in San Diego",
      "The final approach passes remarkably close over downtown high-rises, giving arriving passengers a dramatic skyline view seconds before touchdown",
      "Despite carrying roughly 25 million passengers a year, it remains one of the busiest single-runway airports in the world",
      "Its tight urban site leaves no room for expansion, a rare constraint among major American airports"
    ]
  },
  TPA: {
    icao: "KTPA", opened: 1971, operator: "Hillsborough County Aviation Authority",
    elevation: 8, runways: 3, longestRunway: 3353,
    pax: 22000000, movements: 200000, cargo: 60000,
    distanceToCity: 8,
    facts: [
      "Tampa International pioneered the modern landside-airside terminal design, using automated people-movers to shuttle passengers to gates since 1971",
      "Its layout, a central check-in building linked by trains to satellite airside concourses, became a model copied by airports worldwide",
      "The airport sits on the site of the former Drew Field, a World War II Army Air Forces training base",
      "Tampa consistently ranks among the top US airports for passenger satisfaction, credited partly to its short walking distances",
      "The curb-to-gate design lets most passengers reach their gate in under ten minutes, among the fastest transfer times at a major US airport"
    ]
  },
  PDX: {
    icao: "KPDX", opened: 1940, operator: "Port of Portland",
    elevation: 6, runways: 3, longestRunway: 3353,
    pax: 19500000, movements: 200000, cargo: 300000,
    hubAirlines: ["Alaska Airlines"], distanceToCity: 10,
    facts: [
      "PDX's swirling teal 1980s carpet became such a beloved local icon that it was turned into socks and shoes before the terminal was renovated",
      "The airport is known for unusually smooth security lines, credited to its compact, efficient single-terminal design",
      "Alaska Airlines operates one of its largest hubs here, connecting Portland heavily to the West Coast and Hawaii",
      "A 2020s terminal renovation used enormous amounts of sustainably sourced local timber, among the first of its kind at a major US airport",
      "The airport sits close enough to Mount Hood and Mount St Helens that both volcanoes are visible from the runways on clear days"
    ]
  },
  STL: {
    icao: "KSTL", opened: 1920, operator: "City of St. Louis",
    elevation: 172, runways: 4, longestRunway: 3597,
    pax: 14000000, movements: 180000, cargo: 40000,
    hubAirlines: ["Southwest Airlines"], distanceToCity: 19,
    facts: [
      "Lambert Field is one of the oldest continuously operating commercial airports in the US, dating to the 1920s",
      "It was once Trans World Airlines' largest hub, and the terminal's mid-century concrete domes still echo that TWA-era design",
      "A rare F4 tornado tore through the main terminal in 2011, causing major structural damage but no fatalities",
      "St Louis lost most of its hub traffic after TWA's collapse and American's later de-hubbing in the early 2000s",
      "The terminal's distinctive 1956 concrete domes were considered so architecturally significant they earned National Historic Landmark status"
    ]
  },
  BWI: {
    icao: "KBWI", opened: 1950, operator: "Maryland Aviation Administration",
    elevation: 45, runways: 3, longestRunway: 3200,
    pax: 27000000, movements: 250000, cargo: 60000,
    hubAirlines: ["Southwest Airlines"], distanceToCity: 15,
    facts: [
      "BWI is Southwest Airlines' largest and busiest hub anywhere in its network",
      "It was renamed in 2005 to honor Thurgood Marshall, the first African American Supreme Court justice, born in Baltimore",
      "The airport sits roughly midway between Baltimore and Washington DC, making it a popular low-cost alternative to the capital's other airports",
      "A direct light rail line and an Amtrak-served rail station connect straight to the terminal, unusual convenience among major US airports",
      "Its plane-spotting area near the runway ends offers some of the closest public views of landing aircraft in the region"
    ]
  },
  PHL: {
    icao: "KPHL", opened: 1940, operator: "City of Philadelphia Division of Aviation",
    elevation: 12, runways: 4, longestRunway: 3512,
    pax: 33000000, movements: 370000, cargo: 600000,
    hubAirlines: ["American Airlines"], distanceToCity: 11,
    facts: [
      "Philadelphia International is American Airlines' hub for transatlantic flights, a legacy of US Airways, once headquartered there",
      "The airport sits along the Delaware River, with several runways built on reclaimed marshland",
      "It handles one of the largest volumes of air cargo on the US East Coast, aided by nearby shipping and rail links",
      "Its parallel runway layout has historically made it prone to weather delays that ripple through the whole US air traffic network",
      "The airport predates the interstate highway system, and Interstate 95 was later built running directly alongside its runways"
    ]
  },
  MSY: {
    icao: "KMSY", opened: 1946, operator: "New Orleans Aviation Board",
    elevation: 2, runways: 2, longestRunway: 3160,
    pax: 14000000, movements: 140000,
    hubAirlines: ["Southwest Airlines"], distanceToCity: 18,
    facts: [
      "The airport has been named for jazz legend Louis Armstrong, a New Orleans native, since 2001",
      "Its original name, Moisant Field, honored aviator John Moisant, who died in a crash on the same site in 1910",
      "Sitting in the low-lying New Orleans basin, the airport relies on extensive pumping and drainage systems to keep runways dry",
      "A new terminal costing about a billion dollars opened in 2019, replacing a decades-old facility that had become one of the most cramped in the country",
      "Flight paths are routed to avoid the French Quarter and famous parade routes, keeping the historic district free of low overflights"
    ]
  },

  SLC: {
    icao: "KSLC", opened: 1911, operator: "Salt Lake City Department of Airports",
    elevation: 1288, runways: 4, longestRunway: 3658,
    pax: 26500000, movements: 340000, cargo: 200000,
    hubAirlines: ["Delta Air Lines", "SkyWest Airlines"], distanceToCity: 6,
    facts: [
      "SLC opened an entirely new $4.1 billion terminal in 2020 that was built right next to the old one so operations never had to pause",
      "It sits at the base of the Wasatch Mountains, giving arriving pilots a dramatic canyon-edge approach on clear days",
      "The airport is built on reclaimed land right at the edge of the Great Salt Lake, which occasionally floods nearby taxiways in wet years",
      "It is one of Delta's largest connecting hubs, funneling mountain west and ski traffic through a single pair of parallel runways",
      "Utah's dry high-altitude air made the area a historic proving ground for early aircraft performance testing"
    ]
  },
  RDU: {
    icao: "KRDU", opened: 1943, operator: "Raleigh-Durham Airport Authority",
    elevation: 135, runways: 3, longestRunway: 3355,
    pax: 14200000, movements: 210000, cargo: 40000,
    distanceToCity: 16,
    facts: [
      "RDU is jointly owned by the cities of Raleigh and Durham together with Wake and Durham counties, an unusually shared governance setup",
      "It sits literally between the two cities it is named after, in the middle of North Carolina's Research Triangle Park",
      "The airport began life in 1943 as a US Army airfield used to train fighter pilots during World War II",
      "Its runway 5L/23R stretches nearly 3,400 meters, among the longest on the US East Coast outside major international gateways",
      "Terminal 2's curved roofline was designed to echo the rolling hills of the surrounding Piedmont countryside"
    ]
  },
  AUS: {
    icao: "KAUS", opened: 1999, operator: "City of Austin Department of Aviation",
    elevation: 165, runways: 2, longestRunway: 3658,
    pax: 22000000, movements: 180000, cargo: 30000,
    distanceToCity: 13,
    facts: [
      "AUS was built on the grounds of the former Bergstrom Air Force Base, a Cold War Strategic Air Command bomber station",
      "Its single very long runway, inherited straight from the Air Force, is able to handle diverted Space Shuttle carrier aircraft and jumbo jets",
      "The terminal includes a dedicated stage where local musicians perform live sets for travelers, tying the airport to Austin's music scene",
      "It replaced the much smaller Robert Mueller Municipal Airport, which sat inside city neighborhoods and had run out of room to expand",
      "Bergstrom's old military runway markings can still be spotted faintly beneath the repaved civilian surface"
    ]
  },
  PIT: {
    icao: "KPIT", opened: 1952, operator: "Allegheny County Airport Authority",
    elevation: 373, runways: 4, longestRunway: 3505,
    pax: 9300000, movements: 130000, cargo: 90000,
    distanceToCity: 30,
    facts: [
      "PIT was built as a colossal US Airways hub in the early 1990s, complete with a giant X-shaped airside terminal that today handles only a fraction of its designed capacity",
      "Its airside terminal was one of the first in the US to be linked to the landside building by an automated underground train",
      "After US Airways abandoned the hub in the 2000s, Pittsburgh reinvented itself as a logistics base, now hosting a major Amazon Air cargo facility",
      "The airport sits atop land honeycombed by old coal mine workings, which required special ground stabilization during construction",
      "Pittsburgh's terminal complex was, for a time, the largest airport built from scratch in the US since Dallas-Fort Worth"
    ]
  },
  BNA: {
    icao: "KBNA", opened: 1937, operator: "Metropolitan Nashville Airport Authority",
    elevation: 183, runways: 4, longestRunway: 3362,
    pax: 21900000, movements: 230000, cargo: 25000,
    hubAirlines: ["Southwest Airlines"], distanceToCity: 13,
    facts: [
      "BNA added a guitar-shaped concourse and music-themed murals as part of a multibillion dollar expansion tying the terminal to Nashville's identity",
      "Southwest Airlines runs one of its largest crew bases and focus-city operations out of Nashville",
      "The airport was once a key regional hub for now-defunct carriers like American Eagle predecessor Pinnacle Airlines",
      "Nashville's tourism boom has made BNA one of the fastest-growing large airports in the country over the past decade",
      "Its runway layout follows the Cumberland River valley, a path used by some of the earliest airmail routes through Tennessee"
    ]
  },
  DAL: {
    icao: "KDAL", opened: 1917, operator: "City of Dallas Department of Aviation",
    elevation: 152, runways: 2, longestRunway: 2682,
    pax: 7500000, movements: 135000,
    hubAirlines: ["Southwest Airlines"], distanceToCity: 10,
    facts: [
      "DAL is the headquarters and founding base of Southwest Airlines, whose corporate offices overlook the field",
      "For decades the federal Wright Amendment restricted flights out of Love Field to nearby states, a rule that only fully expired in 2014",
      "A City of Dallas ordinance caps the airport at 20 gates, deliberately limiting growth to keep traffic flowing through DFW instead",
      "Love Field predates DFW by more than five decades, opening in 1917 as a World War I Army pilot training field",
      "It is named after Lieutenant Moss Lee Love, a US Army aviator who died in a 1913 crash years before the airport bearing his name existed"
    ]
  },
  HOU: {
    icao: "KHOU", opened: 1927, operator: "Houston Airport System",
    elevation: 14, runways: 4, longestRunway: 2317,
    pax: 13400000, movements: 195000,
    hubAirlines: ["Southwest Airlines"], distanceToCity: 11,
    facts: [
      "Hobby was Houston's main airport until Bush Intercontinental opened in 1969, after which it languished for decades before a 2015 international revival",
      "Its restored 1940s art-deco terminal building now operates as a small aviation museum on the airport grounds",
      "Southwest Airlines waged a long legal and political fight to add international flights from Hobby, finally winning approval in 2015",
      "The airport is named after William P. Hobby, a former Texas governor and influential Houston newspaper publisher",
      "NASA astronauts once used Hobby regularly for training flights before Ellington Field became the agency's preferred local base"
    ]
  },
  SJC: {
    icao: "KSJC", opened: 1949, operator: "City of San José",
    elevation: 19, runways: 2, longestRunway: 3353,
    pax: 11000000, movements: 175000, cargo: 55000,
    distanceToCity: 5,
    facts: [
      "SJC is named after Congressman Norman Mineta, who went on to become the first Asian American cabinet secretary and later US Transportation Secretary after 9/11",
      "Sitting in the heart of Silicon Valley, it hosts one of the densest concentrations of corporate and private jet traffic of any US commercial airport",
      "Terminal B's undulating roofline was designed to echo the rolling hills of the surrounding Santa Clara Valley",
      "Major tech companies base large corporate flight departments at SJC rather than at the larger San Francisco airport nearby",
      "The airport has operated at its current site since 1949, decades before the valley around it became a global tech center"
    ]
  },
  YOW: {
    icao: "CYOW", opened: 1928, operator: "Ottawa International Airport Authority",
    elevation: 114, runways: 3, longestRunway: 3200,
    pax: 4800000, movements: 130000,
    distanceToCity: 13,
    facts: [
      "YOW is named after Canada's first prime minister John A. Macdonald and fellow Confederation father George-Etienne Cartier",
      "As the capital's airport, it regularly handles VIP and government flights, including frequent Royal Canadian Air Force transport aircraft",
      "Its 2003 terminal was one of the first major Canadian airports built with fully integrated post-9/11 security screening",
      "The airport's code YOW has no letters in common with Ottawa, a quirk shared by many older Canadian airport identifiers",
      "Ottawa's proximity to several military installations makes it a common diversion point for Canadian Forces aircraft"
    ]
  },
  YEG: {
    icao: "CYEG", opened: 1960, operator: "Edmonton Airports",
    elevation: 723, runways: 2, longestRunway: 3353,
    pax: 8100000, movements: 130000, cargo: 150000,
    distanceToCity: 28,
    facts: [
      "YEG is Canada's largest airport by land area, covering more ground than much of downtown Edmonton itself",
      "It sits about 28 kilometers south of downtown Edmonton, one of the longest airport-to-downtown commutes among major Canadian cities",
      "The airport is a key resupply gateway for remote Arctic and northern communities, hosting significant northern cargo operations",
      "It absorbed nearly all commercial traffic after the smaller, more central Edmonton City Centre Airport closed in 2013",
      "At over 700 meters elevation, it sits notably higher than most major Canadian airports"
    ]
  },
  GDL: {
    icao: "MMGL", opened: 1966, operator: "Grupo Aeroportuario del Pacífico",
    elevation: 1566, runways: 2, longestRunway: 3505,
    pax: 13500000, movements: 150000, cargo: 90000,
    hubAirlines: ["Volaris", "VivaAerobus"], distanceToCity: 16,
    facts: [
      "GDL is named after Miguel Hidalgo, the priest who launched Mexico's war of independence in a town near Guadalajara in 1810",
      "The airport is a major export gateway for Guadalajara's large electronics manufacturing cluster, often nicknamed Mexico's Silicon Valley",
      "It serves as a primary operating base for low-cost carrier Volaris",
      "Sitting at over 1,500 meters elevation, aircraft here face reduced performance margins similar to Mexico City or Denver",
      "Its official name uses the city's Spanish civic identity rather than a simple Guadalajara city reference, which is why the code reads GDL"
    ]
  },
  MTY: {
    icao: "MMMY", opened: 1985, operator: "Grupo Aeroportuario del Centro Norte (OMA)",
    elevation: 449, runways: 2, longestRunway: 3750,
    pax: 11500000, movements: 110000, cargo: 60000,
    hubAirlines: ["VivaAerobus"], distanceToCity: 24,
    facts: [
      "MTY is the headquarters hub of ultra-low-cost carrier VivaAerobus",
      "It is named after General Mariano Escobedo, the 19th-century Mexican commander who captured and executed Emperor Maximilian I",
      "The airport sits in a valley ringed by the Sierra Madre Oriental, with the iconic saddle-shaped Cerro de la Silla peak visible from the runway",
      "Monterrey's airport is a critical logistics gateway for northern Mexico's automotive and steel manufacturing corridor",
      "At roughly 24 kilometers from downtown, it is notably farther from its city center than most major Mexican airports"
    ]
  },
  CVG: {
    icao: "KCVG", opened: 1947, operator: "Kenton County Airport Board",
    elevation: 268, runways: 3, longestRunway: 3355,
    pax: 10300000, movements: 210000, cargo: 1300000,
    hubAirlines: ["Amazon Air", "DHL Express"], distanceToCity: 21,
    facts: [
      "CVG is physically located across the Ohio River in Kentucky, not Ohio, despite its code and name reflecting Cincinnati",
      "It hosts DHL Express's largest hub outside Germany, making it a major node in global overnight package delivery",
      "Amazon built its largest air cargo hub in the world here, a $1.5 billion sorting facility called Amazon Air Hub",
      "The airport was once a sprawling Delta Air Lines passenger hub before the carrier drastically scaled back operations there in the 2000s",
      "Its cargo tonnage regularly places it among the busiest freight airports in North America despite modest passenger traffic"
    ]
  },
  SAT: {
    icao: "KSAT", opened: 1942, operator: "City of San Antonio Aviation Department",
    elevation: 240, runways: 3, longestRunway: 2591,
    pax: 10600000, movements: 150000,
    distanceToCity: 13,
    facts: [
      "SAT sits close to several major US military installations, reflecting San Antonio's identity as Military City USA",
      "The land the airport occupies was carved from old ranch and pecan orchard property purchased by the city in the early 1940s",
      "Despite steady passenger growth, SAT has never had a true hub carrier, relying instead on strong local point-to-point demand",
      "The airport periodically coordinates airspace with nearby Joint Base San Antonio's heavy military flight training traffic",
      "Its terminal architecture draws on South Texas ranching and Spanish mission themes rather than typical glass-box airport design"
    ]
  },
  SMF: {
    icao: "KSMF", opened: 1967, operator: "Sacramento County Department of Airports",
    elevation: 8, runways: 2, longestRunway: 2652,
    pax: 12000000, movements: 130000, cargo: 60000,
    distanceToCity: 16,
    facts: [
      "SMF relocated to its current site in 1967, replacing the older, smaller Sacramento Municipal Airport nearer downtown",
      "Its terminal's soaring, light-filled architecture was designed to evoke the open skies of the Central Valley",
      "The airport occasionally deals with the region's notorious tule fog, a dense wintertime ground fog unique to California's Central Valley",
      "SMF quietly serves as a relief valve for Bay Area travelers during peak holiday congestion at San Francisco and Oakland",
      "It hosts a regional UPS cargo sorting operation serving Northern California"
    ]
  },
  MCI: {
    icao: "KMCI", opened: 1972, operator: "Kansas City Aviation Department",
    elevation: 313, runways: 3, longestRunway: 3505,
    pax: 12000000, movements: 150000, cargo: 45000,
    distanceToCity: 24,
    facts: [
      "MCI originally opened in 1972 with three horseshoe-shaped terminals designed so passengers could park within feet of their gate",
      "That famous drive-to-your-gate horseshoe design was fully demolished and replaced by a single modern terminal that opened in 2023",
      "The airport was once a major hub for Trans World Airlines before the carrier's collapse in 2001",
      "It sits about 24 kilometers from downtown, chosen partly to allow room for the sprawling original horseshoe layout",
      "Kansas City's older downtown airport still operates today as a general aviation and charter field along the Missouri River"
    ]
  },
  IND: {
    icao: "KIND", opened: 1931, operator: "Indianapolis Airport Authority",
    elevation: 243, runways: 3, longestRunway: 3402,
    pax: 9800000, movements: 155000, cargo: 1000000,
    hubAirlines: ["FedEx Express"], distanceToCity: 11,
    facts: [
      "IND hosts FedEx's second-largest global hub, an overnight sorting operation that dwarfs the airport's passenger side in scale",
      "Its 2008 terminal was one of the first major US airports built entirely from scratch with post-9/11 security fully designed in from day one",
      "The airport sits just a few kilometers from the Indianapolis Motor Speedway, home of the Indy 500",
      "Indianapolis was once a hub for now-defunct ATA Airlines before that carrier's 2008 bankruptcy",
      "FedEx's nightly sort here brings in hundreds of flights within a tight overnight window, one of the largest logistics choreography operations in the country"
    ]
  },
  CMH: {
    icao: "KCMH", opened: 1929, operator: "Columbus Regional Airport Authority",
    elevation: 262, runways: 2, longestRunway: 3049,
    pax: 8700000, movements: 110000, cargo: 30000,
    distanceToCity: 10,
    facts: [
      "CMH was renamed in 2016 to honor astronaut and Ohio native John Glenn, the first American to orbit the Earth",
      "It shares its origins with nearby Rickenbacker International, both once part of a larger military aviation complex",
      "Rickenbacker, a former Air Force base a short drive away, now handles much of the region's air cargo, leaving Glenn focused on passengers",
      "The airport traces its roots back to 1929, making it one of the older continuously operating municipal airports in the US",
      "Its proximity to Ohio State University generates heavy charter and private aircraft traffic on Buckeyes football game days"
    ]
  },
  MEM: {
    icao: "KMEM", opened: 1929, operator: "Memphis-Shelby County Airport Authority",
    elevation: 100, runways: 3, longestRunway: 3459,
    pax: 4600000, movements: 250000, cargo: 4300000,
    hubAirlines: ["FedEx Express"], distanceToCity: 14,
    facts: [
      "MEM is home to FedEx's global SuperHub, which for years ranked as the world's busiest cargo airport by tonnage",
      "Hundreds of FedEx jets converge on Memphis within a tightly choreographed overnight sorting window every night",
      "The airport was once a major Northwest Airlines and later Delta passenger hub, but Delta closed that hub in 2013",
      "Despite its huge number of aircraft movements, Memphis has surprisingly modest passenger traffic compared to similarly busy airports",
      "Far more cargo freighter flights land here overnight than passenger flights during the entire day"
    ]
  },
  JAX: {
    icao: "KJAX", opened: 1968, operator: "Jacksonville Aviation Authority",
    elevation: 9, runways: 2, longestRunway: 3048,
    pax: 7700000, movements: 100000, cargo: 25000,
    distanceToCity: 21,
    facts: [
      "JAX sits close to Naval Air Station Jacksonville, requiring regular airspace coordination with significant Navy aviation traffic",
      "The airport replaced Jacksonville's older, more centrally located Imeson Airport when it opened at its current site in 1968",
      "Its terminal renovation leaned into coastal Florida architectural themes, with open sightlines toward the St. Johns River area",
      "JAX serves as an air logistics gateway supporting Jacksonville's large seaport and distribution industry",
      "Nearby aerospace and business jet manufacturing facilities have made the airport a occasional test site for corporate aircraft"
    ]
  },
  SNA: {
    icao: "KSNA", opened: 1923, operator: "County of Orange",
    elevation: 17, runways: 2, longestRunway: 1738,
    pax: 11400000, movements: 230000,
    distanceToCity: 5,
    facts: [
      "SNA is named after actor John Wayne, a longtime Orange County resident, and greets travelers with a nine-foot bronze statue of him",
      "Strict noise-abatement rules force departing jets to cut back power sharply just after liftoff, producing an unusually steep, quiet climbout",
      "Its main runway is only about 1,700 meters, notably short for a busy commercial airport, which limits aircraft types and fuel loads",
      "A local ordinance legally caps the airport's annual passenger and flight totals, a rare growth restriction for a major US airport",
      "It was originally called Orange County Airport before being renamed for John Wayne shortly after his death in 1979"
    ]
  },


  // ─── South America (v1.2 expansion) ─────────────────────────────────────────

  LPB: {
    icao: "SLLP", opened: 1965, operator: "SABSA",
    elevation: 4061, runways: 2, longestRunway: 4000,
    pax: 3200000, movements: 68000, cargo: 28000,
    hubAirlines: ["Boliviana de Aviación", "Amaszonas"], distanceToCity: 12,
    facts: [
      "At 4061 meters above sea level it is one of the highest international airports on the planet",
      "The thin high-altitude air forces aircraft to use one of the longest runways in South America just to generate enough lift",
      "Engines lose so much thrust in the thin atmosphere that some airlines restrict payload or fuel loads on hot afternoons",
      "It sits on the Altiplano plateau above the city of La Paz itself, with the snow-capped Illimani peak visible on approach",
      "Pilots need special high-altitude airport certification before they are allowed to land here"
    ]
  },
  CUZ: {
    icao: "SPZO", opened: 1965, operator: "Corporación Peruana de Aeropuertos",
    elevation: 3311, runways: 1, longestRunway: 3600, distanceToCity: 3,
    pax: 4500000, movements: 42000,
    facts: [
      "Sits at 3311 meters in the Andes, making it one of the highest major airports in the world and the main gateway to Machu Picchu",
      "Surrounded by steep mountains on all sides, so flights are only permitted during daylight hours under visual conditions",
      "Only certain aircraft types with high-altitude performance certification are cleared to operate here",
      "The runway lies barely a few minutes from Cusco's historic main square, unusually close for an airport of its size",
      "A replacement airport at Chinchero has been planned for years because Cusco's terrain limits how much the current runway can grow"
    ]
  },
  USH: {
    icao: "SAWH", opened: 1995, operator: "Aeropuertos Argentina 2000",
    elevation: 8, runways: 1, longestRunway: 2600, distanceToCity: 4,
    pax: 550000, movements: 11000,
    facts: [
      "Nicknamed the airport at the end of the world, it is the southernmost civilian airport serving a major city in the Americas",
      "Its runway extends out onto a partially reclaimed peninsula jutting into the Beagle Channel",
      "It functions as the main departure point for almost every Antarctic cruise expedition",
      "The Martial mountain range towers directly behind the terminal, funneling strong and unpredictable crosswinds across the runway",
      "In midwinter, daylight shrinks to only a few hours, compressing the entire day's flight schedule into a narrow window"
    ]
  },
  GPS: {
    icao: "SEGS", opened: 1986, operator: "ECOGAL",
    elevation: 20, runways: 1, longestRunway: 2760, distanceToCity: 25,
    pax: 950000, movements: 9500,
    facts: [
      "Originally built in 1943 as a secret US Army Air Force base guarding the Pacific approaches to the Panama Canal",
      "It was the first airport in the world to be certified as fully powered by solar and wind energy",
      "The island of Baltra has no permanent population outside airport staff, so arriving passengers immediately take a ferry and bus to reach any town",
      "Every checked and carry-on bag is screened for seeds, soil and insects to protect the Galápagos ecosystem before passengers may proceed",
      "Its runway was laid directly on top of the old wartime airstrip, reusing the original World War Two alignment"
    ]
  },
  EZE: {
    icao: "SAEZ", opened: 1949, operator: "Aeropuertos Argentina 2000",
    elevation: 20, runways: 2, longestRunway: 3300,
    pax: 11500000, movements: 95000, cargo: 130000,
    hubAirlines: ["Aerolíneas Argentinas"], distanceToCity: 22,
    facts: [
      "Handles almost all of Argentina's long-haul international flights, while cross-town Aeroparque covers most domestic routes",
      "Everyone calls it Ezeiza, after the district it sits in, rather than its official name honoring a former public works minister",
      "Its cargo terminal processes the majority of Argentina's air freight, including large volumes of fresh beef and produce exports",
      "Dense winter fog rolling off the Río de la Plata basin frequently forces diversions to Montevideo or Córdoba",
      "It was one of the first airports in Latin America built specifically for the jet age, opening just as commercial jet travel began"
    ]
  },
  GIG: {
    icao: "SBGL", opened: 1952, operator: "RIOgaleão",
    elevation: 3, runways: 2, longestRunway: 4000,
    pax: 7500000, movements: 65000, cargo: 45000,
    distanceToCity: 20,
    facts: [
      "Built on Governador Island in Guanabara Bay, giving arriving flights a dramatic view of Sugarloaf Mountain and Rio's skyline",
      "One of the few airports in Latin America with a runway long enough to regularly handle the Airbus A380",
      "Its name comes from the Portuguese word for galleon, a nod to colonial shipyards that once operated on the island",
      "Lost most of its international flights to São Paulo's Guarulhos after Latin American carriers consolidated their hubs following the 2016 Olympics",
      "Passengers can watch cargo ships and fishing boats pass directly beneath the final approach path over the bay"
    ]
  },
  POA: {
    icao: "SBPA", opened: 1938, operator: "Fraport Brasil",
    elevation: 3, runways: 1, longestRunway: 2280,
    pax: 5200000, movements: 68000,
    distanceToCity: 8,
    facts: [
      "Sits directly beside the Guaíba River delta and was completely submerged during the catastrophic floods of May 2024, closing it for months",
      "One of Brazil's oldest continuously used airports, tracing its origins back to a 1920s seaplane base",
      "Its single runway runs parallel to the lakeshore, giving many arriving flights water views right up to touchdown",
      "It was rebuilt with raised flood barriers and pumping systems after the 2024 disaster to prevent a repeat closure",
      "Operated under long-term concession by Germany's Fraport rather than a Brazilian company"
    ]
  },
  CWB: {
    icao: "SBCT", opened: 1974, operator: "CCR Aeroportos",
    elevation: 911, runways: 1, longestRunway: 2400,
    pax: 5300000, movements: 62000, cargo: 55000,
    distanceToCity: 18,
    facts: [
      "Sits more than 900 meters above sea level on a cool subtropical plateau, unusually high for a major airport in coastal southern Brazil",
      "Named for a former Brazilian president but actually located in the neighboring municipality of São José dos Pinhais, not Curitiba itself",
      "Handles some of the highest air cargo volumes in Brazil thanks to the region's dense cluster of auto and machinery factories",
      "Its cool, foggy plateau climate makes it one of the more weather-disrupted major airports in Brazil",
      "Frequently serves as the emergency diversion airport for flights unable to land in São Paulo due to bad weather"
    ]
  },
  BSB: {
    icao: "SBBR", opened: 1957, operator: "Inframerica",
    elevation: 1060, runways: 2, longestRunway: 3300,
    pax: 17500000, movements: 210000, cargo: 22000,
    hubAirlines: ["GOL", "Azul", "LATAM Brasil"], distanceToCity: 11,
    facts: [
      "Opened in 1957 alongside Brazil's newly built capital, sharing the same modernist design era as the city itself",
      "Its central location makes it Brazil's main connecting hub, and it logs more takeoffs and landings than any other airport in the country despite modest passenger totals",
      "Sits on Brazil's central plateau at over 1000 meters elevation, far higher than most Brazilian coastal airports",
      "All three of Brazil's major airlines route enormous numbers of passengers through here purely to connect between other cities",
      "Its terminal was substantially rebuilt to handle surging traffic ahead of the 2014 World Cup and 2016 Olympics"
    ]
  },
  MVD: {
    icao: "SUMU", opened: 1947, operator: "Puerta del Sur",
    elevation: 33, runways: 2, longestRunway: 3200,
    pax: 2300000, movements: 32000, cargo: 16000,
    distanceToCity: 19,
    facts: [
      "Its striking wave-shaped terminal, opened in 2009, was designed by Uruguayan-American architect Rafael Viñoly to evoke a bird in flight",
      "Uruguay has had no national flag carrier since PLUNA, once based here, collapsed in 2012",
      "Located right where the Río de la Plata estuary meets the open Atlantic Ocean",
      "Despite serving a country of only around three million people, it acts as a secondary escape valve for Argentine travelers chasing cheaper fares",
      "Sits on reclaimed coastal land east of Montevideo, close enough that arriving flights track along the shoreline"
    ]
  },
  CCS: {
    icao: "SVMI", opened: 1945, operator: "Instituto Aeropuerto Internacional de Maiquetía",
    elevation: 72, runways: 2, longestRunway: 3500,
    pax: 2600000, movements: 30000, cargo: 20000,
    hubAirlines: ["Conviasa"], distanceToCity: 26,
    facts: [
      "Located on the Caribbean coast at Maiquetía, separated from Caracas by the steep Ávila mountain range",
      "Travelers must cross a mountain highway carved through the Ávila range to reach the capital, since no flat land existed for an airport closer to the city",
      "International airline service has collapsed dramatically since the mid-2010s amid Venezuela's economic and political crisis",
      "State carrier Conviasa now operates as close to a true hub airline here as exists in the country",
      "Its coastal runway alignment exposes arriving aircraft to strong, gusty onshore winds off the Caribbean Sea"
    ]
  },
  MAO: {
    icao: "SBEG", opened: 1976, operator: "Vinci Airports",
    elevation: 92, runways: 2, longestRunway: 3200,
    pax: 4600000, movements: 55000, cargo: 85000,
    distanceToCity: 13,
    facts: [
      "Serves as the main air gateway to the Amazon rainforest, with dense jungle stretching to the horizon in nearly every direction",
      "Handles enormous freight volumes because Manaus hosts a duty-free industrial zone that manufactures electronics shipped out almost entirely by air",
      "The nearest major airport lies more than 800 kilometers away across unbroken rainforest, making it one of the most isolated large airports on Earth",
      "Manaus has no road connection to most of the rest of Brazil, so the airport effectively substitutes for highways the jungle never allowed",
      "Named after Eduardo Gomes, a Brazilian military aviator known for pioneering flights over the Amazon"
    ]
  },
  MDE: {
    icao: "SKRG", opened: 1985, operator: "Airplan",
    elevation: 2142, runways: 1, longestRunway: 3800,
    pax: 9200000, movements: 92000, cargo: 95000,
    hubAirlines: ["Avianca"], distanceToCity: 29,
    facts: [
      "Sits on a plateau roughly 500 meters higher than Medellín itself, in the separate town of Rionegro",
      "Pilots must descend through a narrow Andean valley to reach the city below, one of the more demanding approaches in Colombia",
      "The surrounding Antioquia region ships enormous volumes of fresh-cut flowers to the United States and Europe, making cargo a major share of its business",
      "It replaced the old Olaya Herrera airport, which still operates today for smaller aircraft right in the city center",
      "Persistent valley fog and low cloud around Medellín cause frequent weather-related diversions and delays"
    ]
  },
  SSA: {
    icao: "SBSV", opened: 1998, operator: "Vinci Airports",
    elevation: 20, runways: 1, longestRunway: 3005,
    pax: 7200000, movements: 68000, cargo: 16000,
    distanceToCity: 20,
    facts: [
      "Named after a Bahian congressman rather than the city it serves, unlike most of Brazil's other major airports",
      "Serves Salvador, Brazil's first colonial capital and one of the country's most historic coastal cities",
      "Sits close enough to the Atlantic that many arriving flights track along Bahia's beaches on final approach",
      "One of the busiest airports in Brazil's Northeast, driven heavily by domestic tourism traffic to Bahia's coastline",
      "Its terminal was substantially rebuilt when Salvador hosted matches during the 2014 World Cup"
    ]
  },
  FOR: {
    icao: "SBFZ", opened: 1998, operator: "Fraport Brasil",
    elevation: 25, runways: 1, longestRunway: 3005,
    pax: 7100000, movements: 58000, cargo: 20000,
    distanceToCity: 8,
    facts: [
      "Named after Fortaleza-born aviation pioneer Euclides Pinto Martins",
      "Sits unusually close to the city center, just a short ride from Fortaleza's famous beaches",
      "One of the main gateway airports for Brazil's booming Northeast beach tourism industry",
      "Operated by Germany's Fraport under a long-term concession, one of several Brazilian regional airports run by a foreign company",
      "Strong, steady Atlantic trade winds heavily influence runway usage and approach patterns here"
    ]
  },
  REC: {
    icao: "SBRF", opened: 1953, operator: "Aena Brasil",
    elevation: 10, runways: 1, longestRunway: 3005,
    pax: 7000000, movements: 64000, cargo: 20000,
    distanceToCity: 10,
    facts: [
      "Its full official name honors sociologist Gilberto Freyre, though almost everyone simply calls it Guararapes",
      "Named after the 17th century Battles of Guararapes, fought nearby against Dutch colonial forces",
      "Operated by Spain's Aena, another example of a major Brazilian airport run under foreign concession",
      "Sits close enough to the coast that many flights pass directly over Recife's crowded urban beaches on approach",
      "Serves as the main gateway to the colonial city of Olinda and to the remote Fernando de Noronha archipelago"
    ]
  },
  GYE: {
    icao: "SEGU", opened: 2006, operator: "TAGSA",
    elevation: 6, runways: 1, longestRunway: 3000,
    pax: 5600000, movements: 62000, cargo: 52000,
    distanceToCity: 5,
    facts: [
      "Ecuador's busiest airport by passenger traffic, ahead even of the airport serving the capital",
      "A major export hub for the country's banana industry, which supplies a huge share of the world's banana trade",
      "Named after José Joaquín de Olmedo, Guayaquil's first mayor and a celebrated hero of Ecuadorian independence",
      "Sits just a few kilometers from downtown Guayaquil along the Guayas River estuary",
      "Serves as one of the two main jumping-off points, alongside Quito, for flights out to the Galápagos Islands"
    ]
  },


  // ─── Africa (v1.2 expansion) ─────────────────────────────────────────

  MRU: {
    icao: "FIMP", opened: 1993, operator: "Airports of Mauritius Ltd",
    elevation: 56, runways: 1, longestRunway: 3370,
    pax: 4800000, movements: 45000, cargo: 25000,
    hubAirlines: ["Air Mauritius"], distanceToCity: 48,
    facts: [
      "The airport sits on the southeastern coast of Mauritius, roughly an hour's drive from the capital Port Louis on the opposite side of the island",
      "Its single runway handles long-haul widebodies flying nonstop to Paris, London and Perth despite Mauritius being a small volcanic island in the middle of the Indian Ocean",
      "The terminal was rebuilt in 2013 with a roofline said to evoke a sega drum, referencing the island's traditional music and dance",
      "Air Mauritius has historically flown further per capita than almost any national carrier, given the island's total reliance on air links to the outside world"
    ]
  },
  HRG: {
    icao: "HEGN", opened: 1989, operator: "Egyptian Holding Company for Airports",
    elevation: 17, runways: 2, longestRunway: 3800,
    pax: 9000000, movements: 65000,
    distanceToCity: 5,
    facts: [
      "Sits on the edge of the Egyptian desert directly beside the Red Sea, built almost entirely to serve package-holiday diving and beach tourism",
      "Charter flights from Germany, Russia and the UK have historically made up the large majority of traffic, with barely any Egyptian domestic demand",
      "Passenger numbers collapsed after the 2015 Metrojet bombing over Sinai and took years to recover to prior levels",
      "The runway lies just a few kilometers from world-famous reef diving sites like the Giftun Islands, visible from the final approach"
    ]
  },
  SSH: {
    icao: "HESH", opened: 1971, operator: "Egyptian Holding Company for Airports",
    elevation: 39, runways: 2, longestRunway: 3000,
    pax: 5000000, movements: 55000,
    distanceToCity: 15,
    facts: [
      "Wedged between the Sinai desert mountains and the Red Sea, the approach offers views of both barren peaks and coral reefs within seconds of each other",
      "Security was overhauled internationally after the 2015 bombing of a Russian charter jet shortly after departure, one of the deadliest attacks on civil aviation in the region",
      "The airport mainly exists to funnel European sun-seekers to the resort strip of Naama Bay rather than to serve local population centers",
      "Sharm el-Sheikh has hosted major international summits, including COP27 in 2022, despite its remote desert-peninsula location"
    ]
  },
  ABV: {
    icao: "DNAA", opened: 1982, operator: "Federal Airports Authority of Nigeria",
    elevation: 343, runways: 1, longestRunway: 3600,
    pax: 5500000, movements: 45000,
    hubAirlines: ["Air Peace"], distanceToCity: 22,
    facts: [
      "The single runway was completely shut for six weeks in 2017 for resurfacing, forcing all flights to divert to a military airstrip in Kaduna",
      "As the airport serving Nigeria's purpose-built capital, it was designed from the outset around government and diplomatic traffic rather than organic urban growth",
      "A new runway and terminal capable of handling the Airbus A380 were built in the 2010s as part of efforts to position Abuja as a regional hub",
      "Abuja sits at a notably higher elevation than Lagos, giving it a cooler climate despite being much closer to the equator in latitude terms"
    ]
  },
  DUR: {
    icao: "FALE", opened: 2010, operator: "Airports Company South Africa",
    elevation: 14, runways: 1, longestRunway: 3700,
    pax: 5300000, movements: 45000, cargo: 8000,
    distanceToCity: 33,
    facts: [
      "Opened in 2010 just before the FIFA World Cup, replacing Durban International which occupied a former air force base closer to the city",
      "Built on a former sugarcane plantation, its single very long runway can handle fully loaded long-haul aircraft despite Durban's status as a secondary South African city",
      "Named after the Zulu king Shaka, a rare case of an airport honoring a pre-colonial African monarch rather than a colonial or political figure",
      "The old airport site was later redeveloped, and King Shaka's terminal design deliberately references the rolling green hills of KwaZulu-Natal"
    ]
  },
  LOS: {
    icao: "DNMM", opened: 1979, operator: "Federal Airports Authority of Nigeria",
    elevation: 39, runways: 2, longestRunway: 3900,
    pax: 8000000, movements: 60000, cargo: 20000,
    hubAirlines: ["Air Peace", "Arik Air"], distanceToCity: 22,
    facts: [
      "Consists of two separate terminal complexes, domestic (MMA2) and international, that operate almost as independent airports on the same site",
      "Is the busiest airport in West Africa, acting as the commercial gateway to Africa's most populous country",
      "Notorious historically for chronic congestion and infrastructure strain relative to Lagos's explosive urban population growth",
      "A new Chinese-built international terminal opened in 2022 aiming to modernize capacity for a metro area of over 20 million people"
    ]
  },
  RAK: {
    icao: "GMMX", opened: 1932, operator: "Office National des Aéroports",
    elevation: 466, runways: 1, longestRunway: 3100,
    pax: 7500000, movements: 60000,
    hubAirlines: ["Royal Air Maroc"], distanceToCity: 6,
    facts: [
      "The terminal facade is decorated with intricate geometric zellige-tile-inspired patterns echoing traditional Marrakech architecture",
      "Sits close enough to the city that the snow-capped High Atlas mountains are visible from the runway on clear winter days",
      "Became one of the busiest low-cost carrier destinations in Africa as European budget airlines expanded direct routes into Marrakech in the 2000s and 2010s",
      "Despite serving a historic caravan-trade city, the airport itself only opened to regular commercial traffic in the 1930s under French colonial administration"
    ]
  },
  DAR: {
    icao: "HTDA", opened: 1954, operator: "Tanzania Airports Authority",
    elevation: 55, runways: 1, longestRunway: 3000,
    pax: 3000000, movements: 40000,
    hubAirlines: ["Air Tanzania", "Precision Air"], distanceToCity: 12,
    facts: [
      "Named after Tanzania's founding president Julius Nyerere, who led the country to independence and later championed pan-African unity",
      "Functions as the main gateway to Zanzibar, Kilimanjaro safari circuits and the Selous/Nyerere game reserves for travelers connecting onward",
      "A third terminal built with Chinese financing opened in 2021 with capacity for 6 million passengers, aimed at growing Tanzania's tourism and trade role on the Swahili coast",
      "Sits directly on the Indian Ocean coastline, with approaches often crossing over dhow fishing boats in the harbor below"
    ]
  },
  TUN: {
    icao: "DTTA", opened: 1940, operator: "Office de l'Aviation Civile et des Aéroports",
    elevation: 22, runways: 2, longestRunway: 3200,
    pax: 5300000, movements: 55000,
    hubAirlines: ["Tunisair"], distanceToCity: 8,
    facts: [
      "Named Tunis-Carthage after the ancient Phoenician and Roman city of Carthage, whose ruins lie only a few kilometers from the runway",
      "Originally built as a French military airfield in 1940, decades before it became Tunisia's main civilian gateway",
      "Passenger traffic dropped sharply after the 2015 terrorist attacks on tourists and only recovered fully in the following decade",
      "Sits close enough to central Tunis that the presidential palace suburb of Carthage and the Mediterranean coast are both visible on approach"
    ]
  },
  ALG: {
    icao: "DAAG", opened: 1924, operator: "Établissement de Gestion des Services Aéroportuaires d'Alger",
    elevation: 25, runways: 2, longestRunway: 3500,
    pax: 7000000, movements: 60000,
    hubAirlines: ["Air Algérie"], distanceToCity: 17,
    facts: [
      "Named after Houari Boumediene, the Algerian revolutionary leader who ruled the country for over a decade after independence from France",
      "Overlooks the Bay of Algiers, with the whitewashed hillside city — nicknamed 'Alger la Blanche' — visible from arriving flights",
      "Handles by far the largest share of Algeria's air traffic among the country's airports, reflecting the heavy centralization of the country's economy around its capital",
      "A large new terminal was built in the 2000s to modernize an airport whose original structure dated back to the French colonial era"
    ]
  },
  ABJ: {
    icao: "DIAP", opened: 1951, operator: "Aeria",
    elevation: 6, runways: 1, longestRunway: 3000,
    pax: 3000000, movements: 35000, cargo: 15000,
    hubAirlines: ["Air Côte d'Ivoire"], distanceToCity: 16,
    facts: [
      "Named after Félix Houphouët-Boigny, Ivory Coast's first president after independence, who ruled for over three decades",
      "Sits on a peninsula surrounded by the Ébrié lagoon, giving arriving flights a near-island approach over water on multiple sides",
      "Long served as the political capital's airport even after Ivory Coast officially moved its capital to Yamoussoukro, since Abidjan remained the true commercial center",
      "Functions as one of the busiest hubs in Francophone West Africa, connecting the region to Paris and other former colonial capitals"
    ]
  },
  ACC: {
    icao: "DGAA", opened: 1943, operator: "Ghana Airports Company",
    elevation: 63, runways: 1, longestRunway: 3403,
    pax: 4500000, movements: 45000, cargo: 10000,
    distanceToCity: 6,
    facts: [
      "Named after Baba Yara Kotoka, a Ghanaian army officer who played a leading role in the 1966 coup that overthrew Kwame Nkrumah",
      "Originally built as a Royal Air Force staging post during the Second World War before being converted to civilian use",
      "A new terminal 3 opened in 2018, roughly tripling capacity as Ghana positioned Accra as a rival West African hub to Lagos and Abidjan",
      "Sits just a few kilometers from Accra's Atlantic coastline, with the airport approach passing directly over the dense city center"
    ]
  },


  // ─── Oceania (v1.2 expansion) ─────────────────────────────────────────

  BNE: {
    icao: "YBBN", opened: 1988, operator: "Brisbane Airport Corporation",
    elevation: 4, runways: 2, longestRunway: 3560,
    pax: 22900000, movements: 220000, cargo: 240000,
    hubAirlines: ["Qantas", "Jetstar", "Virgin Australia"], distanceToCity: 13,
    facts: [
      "Its 2012 parallel runway sits on reclaimed land pumped up from Moreton Bay, taking a decade to settle before construction could begin",
      "The airport is built on a flood plain and had to be substantially raised after the 2011 Brisbane floods came close to shutting it down",
      "It serves as the main international gateway to the Great Barrier Reef and Queensland's tourist coastline",
      "Qantas founded its original operations near this site in the 1920s, decades before the modern terminal existed",
      "The new parallel runway, opened in 2020, doubled the airport's capacity and cost more than the original airport itself"
    ]
  },
  AKL: {
    icao: "NZAA", opened: 1966, operator: "Auckland International Airport Limited",
    elevation: 7, runways: 1, longestRunway: 3635,
    pax: 17700000, movements: 148000, cargo: 180000,
    hubAirlines: ["Air New Zealand"], distanceToCity: 21,
    facts: [
      "Despite handling nearly 18 million passengers a year, it operates with only a single full-length runway",
      "It sits on the shores of the Manukau Harbour, and its runway was built by draining tidal mudflats",
      "A second runway has been debated for decades but repeatedly delayed, making Auckland one of the busiest single-runway airports on Earth",
      "The airport is built near several extinct volcanic cones that dot the Auckland skyline",
      "Air New Zealand's distinctive black-and-white koru livery aircraft are based here as the country's sole long-haul hub"
    ]
  },
  NAN: {
    icao: "NFFN", opened: 1942, operator: "Airports Fiji Limited",
    elevation: 18, runways: 1, longestRunway: 3300,
    pax: 2100000, movements: 35000, cargo: 15000,
    hubAirlines: ["Fiji Airways"], distanceToCity: 9,
    facts: [
      "It was built by the US military during WWII as a staging base for the Pacific campaign, not as a civilian airport",
      "Nadi handles more international traffic than Fiji's capital Suva, making it the country's true aviation gateway",
      "The airport sits on the drier western side of Viti Levu, chosen specifically because it gets far less rain than the rest of the island",
      "Fiji Airways uses Nadi as a mid-Pacific hub connecting North America, Australia and New Zealand with a fleet of only a few dozen aircraft",
      "Its control tower and original terminal design date back to Pan Am's flying-boat era of trans-Pacific travel"
    ]
  },
  ZQN: {
    icao: "NZQN", opened: 1935, operator: "Queenstown Airport Corporation",
    elevation: 356, runways: 1, longestRunway: 2195,
    pax: 2400000, movements: 41000, cargo: 1500,
    hubAirlines: ["Air New Zealand"], distanceToCity: 8,
    facts: [
      "It is ringed by the Southern Alps, forcing pilots to fly visual approaches that snake between mountain peaks rather than straight-in instrument approaches",
      "The airport closes to scheduled jet traffic overnight because no safe way exists to operate large aircraft over the terrain in darkness",
      "Wind shear and sudden weather changes off the nearby Remarkables mountain range cause frequent last-minute go-arounds",
      "It is one of the few commercial airports in the world where jet crews require special mountain-flying certification before landing",
      "Despite its small single runway, it is New Zealand's fourth-busiest airport thanks to ski season and Milford Sound tourism"
    ]
  },
  PER: {
    icao: "YPPH", opened: 1944, operator: "Perth Airport Pty Ltd",
    elevation: 20, runways: 2, longestRunway: 3444,
    pax: 14500000, movements: 155000, cargo: 90000,
    hubAirlines: ["Qantas", "Virgin Australia"], distanceToCity: 12,
    facts: [
      "It is the closest major Australian airport to Africa and Asia, making it the launch point for the world's longest domestic flight, over 4,000 km to Melbourne",
      "Perth handled Qantas's first non-stop Perth–London 'Project Sunrise' route, once the longest scheduled passenger flight in the world by distance",
      "Because Perth is one of the most isolated cities on Earth, the airport's international terminal was for decades busier relative to the city's size than any other Australian hub",
      "The airport sprawls across a former WWII RAAF base and market garden land east of the city",
      "Direct nonstop flights connect Perth to London, a route spanning roughly 14,500 km, among the longest scheduled routes in aviation"
    ]
  },
  ADL: {
    icao: "YPAD", opened: 1955, operator: "Adelaide Airport Limited",
    elevation: 6, runways: 2, longestRunway: 3100,
    pax: 8300000, movements: 100000, cargo: 35000,
    hubAirlines: ["Qantas", "Virgin Australia"], distanceToCity: 7,
    facts: [
      "It is unusually close to the city centre for an international airport, just a few minutes' drive from Adelaide's CBD",
      "Adelaide's terminal was rebuilt in 2005 as one of the first Australian airports designed with a single combined domestic-international terminal",
      "The airport lies directly beneath the flight path used for aerobatic displays during the Australian International Airshow's predecessor events",
      "Its crosswind runway was closed permanently in 2018 after the main runway extension made it redundant",
      "Adelaide serves as a major base for grain and mineral freighter charters serving South Australia's outback mining regions"
    ]
  },
  CHC: {
    icao: "NZCH", opened: 1940, operator: "Christchurch International Airport Limited",
    elevation: 37, runways: 2, longestRunway: 3288,
    pax: 6500000, movements: 130000, cargo: 60000,
    hubAirlines: ["Air New Zealand"], distanceToCity: 11,
    facts: [
      "It is the main logistics gateway to Antarctica, with the US, Italian and New Zealand Antarctic programs all staging supply flights from here",
      "Ski-equipped Hercules and Globemaster aircraft depart Christchurch for the ice runways of McMurdo Sound and Scott Base each summer season",
      "The terminal had to be extensively repaired and partly rebuilt after the devastating 2011 Canterbury earthquake",
      "It is New Zealand's largest South Island airport and the busiest single-runway-class airport for domestic connections in the country",
      "A US Antarctic Centre and clothing depot sit adjacent to the terminal, kitting out scientists before their flights south"
    ]
  },
  WLG: {
    icao: "NZWN", opened: 1929, operator: "Wellington International Airport Limited",
    elevation: 12, runways: 1, longestRunway: 1945,
    pax: 5200000, movements: 90000, cargo: 8000,
    hubAirlines: ["Air New Zealand"], distanceToCity: 6,
    facts: [
      "Its short runway, hemmed in by hills and Cook Strait waters at both ends, is one of the shortest used by narrow-body jets on regular international service",
      "Wellington sits in a wind funnel between the North and South Islands, giving it a reputation as one of the windiest commercial airports in the world",
      "Its main runway was extended into the sea on reclaimed land in 2019 to allow longer-haul jets to serve the capital directly",
      "Crosswind gusts here have made emergency go-arounds routine enough that local aviation footage of dramatic landings regularly goes viral",
      "It sits closer to its city centre than almost any other national capital's main airport"
    ]
  },
  GUM: {
    icao: "PGUM", opened: 1945, operator: "Guam International Airport Authority",
    elevation: 92, runways: 2, longestRunway: 3050,
    pax: 3200000, movements: 55000, cargo: 40000,
    hubAirlines: ["United Airlines"], distanceToCity: 8,
    facts: [
      "It was built over a WWII Japanese-era airfield captured during the brutal 1944 Battle of Guam and later expanded by US forces",
      "Guam's runway length and US military presence make it a designated emergency diversion airfield for trans-Pacific flights",
      "It sits beside Andersen Air Force Base's air corridor, and the island itself has hosted B-52 and B-2 bomber deployments for decades",
      "United operates a unique 'island-hopper' hub here, connecting tiny Micronesian atolls like Chuuk and Pohnpei to the wider Pacific network",
      "Guam is closer to Manila and Tokyo than to Honolulu, making the airport a strategic stepping stone between Asia and the US mainland"
    ]
  },
};
