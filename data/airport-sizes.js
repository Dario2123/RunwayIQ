// RunwayIQ — Satellite zoom levels by airport size.
// Size is now part of each airport object (airport.size: "large" | "medium" | "small").
// large: major hubs with wide physical footprint — zoom out to show full complex
// small: compact airports — zoom in for better terminal/runway detail
// medium: everything else (default)

const AIRPORT_ZOOM = {
  large:  11.7,
  medium: 12.0,
  small:  12.7,
};

function getSatelliteZoom(airport) {
  if (airport.size === 'large') return AIRPORT_ZOOM.large;
  if (airport.size === 'small') return AIRPORT_ZOOM.small;
  return AIRPORT_ZOOM.medium ?? CONFIG.SATELLITE_ZOOM ?? 12;
}

function getDetailZoom(airport) {
  return getSatelliteZoom(airport) - 1.2;
}
