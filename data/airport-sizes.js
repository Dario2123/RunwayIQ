// Airport size categories for adaptive satellite zoom levels.
// large: major hubs with wide physical footprint — zoom out to show full complex
// small: compact airports — zoom in for better terminal/runway detail
// medium: everything else (default)

const AIRPORT_SIZE = {
  large: new Set([
    "ATL","DXB","LAX","ORD","HND","LHR","CDG","DFW","CAN","ICN",
    "DEN","PEK","PKX","SIN","AMS","SFO","DEL","IST","FRA","MUC",
    "JFK","NRT","SYD","CTU","BKK","HKG","YYZ","IAH","GRU","DOH",
    "MNL","CGK","MEX","MAD","FCO","PVG","KIX","TPE","MEL","SVO",
    "JNB","SEA","CLT","KUL","MCO","PHX","LAS","MIA","MSP","EWR","BCN",
    "LGW","DME","YVR","ARN","CPH","RUH","BOG","SCL","GIG","PTY",
  ]),
  small: new Set([
    "KTM","PNQ","MLE","BAH","KWI","RIX","TLL","VNO","HRG","SSH",
    "DKR","NAS","KIN","MBJ","GUA","SAL","SJO","OMA","ABQ","ALB",
    "GRR","TUL","OKC","ELP","LIT","CHS","SDF","DAY","GEG","MKE",
    "OAK","BUF","RIC","ONT","BDL","COK","AMD","LKO","PBI","RSW",
  ]),
};

const AIRPORT_ZOOM = {
  large:  11.7,
  medium: 12.0,
  small:  12.7,
};

function getSatelliteZoom(airport) {
  const iata = airport[0];
  if (AIRPORT_SIZE.large.has(iata)) return AIRPORT_ZOOM.large;
  if (AIRPORT_SIZE.small.has(iata)) return AIRPORT_ZOOM.small;
  return AIRPORT_ZOOM.medium ?? CONFIG.SATELLITE_ZOOM ?? 12;
}

function getDetailZoom(airport) {
  return getSatelliteZoom(airport) - 1.2;
}
