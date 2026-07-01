// RunwayIQ — Category System
// Add new categories here; no changes to quiz logic needed.

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
        filter: () => AIRPORTS.filter(ap => ap.size === "large"),
      },
      {
        id: "medium", labelKey: "cat.size.items.medium.label", icon: "🛫",
        filter: () => AIRPORTS.filter(ap => ap.size === "medium"),
      },
      {
        id: "small", labelKey: "cat.size.items.small.label", icon: "🛩️",
        filter: () => AIRPORTS.filter(ap => ap.size === "small"),
      },
    ],
  },
  {
    id: "continent",
    labelKey: "cat.continent.label",
    icon: "🌎",
    items: [
      { id: "europe",        labelKey: "cat.continent.items.europe.label",        icon: "🌍", filter: () => AIRPORTS.filter(ap => ap.continent === "europe") },
      { id: "north_america", labelKey: "cat.continent.items.north_america.label", icon: "🌎", filter: () => AIRPORTS.filter(ap => ap.continent === "north_america") },
      { id: "south_america", labelKey: "cat.continent.items.south_america.label", icon: "🌎", filter: () => AIRPORTS.filter(ap => ap.continent === "south_america") },
      { id: "africa",        labelKey: "cat.continent.items.africa.label",        icon: "🌍", filter: () => AIRPORTS.filter(ap => ap.continent === "africa") },
      { id: "asia",          labelKey: "cat.continent.items.asia.label",          icon: "🌏", filter: () => AIRPORTS.filter(ap => ap.continent === "asia") },
      { id: "oceania",       labelKey: "cat.continent.items.oceania.label",       icon: "🌏", filter: () => AIRPORTS.filter(ap => ap.continent === "oceania") },
    ],
  },
  {
    id: "country",
    labelKey: "cat.country.label",
    icon: "🏳️",
    items: [
      { id: "usa",       labelKey: "cat.country.items.usa.label",       icon: "🇺🇸", filter: () => AIRPORTS.filter(ap => ap.country === "USA") },
      { id: "canada",    labelKey: "cat.country.items.canada.label",    icon: "🇨🇦", filter: () => AIRPORTS.filter(ap => ap.country === "Canada") },
      { id: "germany",   labelKey: "cat.country.items.germany.label",   icon: "🇩🇪", filter: () => AIRPORTS.filter(ap => ap.country === "Germany") },
      { id: "france",    labelKey: "cat.country.items.france.label",    icon: "🇫🇷", filter: () => AIRPORTS.filter(ap => ap.country === "France") },
      { id: "uk",        labelKey: "cat.country.items.uk.label",        icon: "🇬🇧", filter: () => AIRPORTS.filter(ap => ap.country === "UK") },
      { id: "spain",     labelKey: "cat.country.items.spain.label",     icon: "🇪🇸", filter: () => AIRPORTS.filter(ap => ap.country === "Spain") },
      { id: "italy",     labelKey: "cat.country.items.italy.label",     icon: "🇮🇹", filter: () => AIRPORTS.filter(ap => ap.country === "Italy") },
      { id: "brazil",    labelKey: "cat.country.items.brazil.label",    icon: "🇧🇷", filter: () => AIRPORTS.filter(ap => ap.country === "Brazil") },
      { id: "japan",     labelKey: "cat.country.items.japan.label",     icon: "🇯🇵", filter: () => AIRPORTS.filter(ap => ap.country === "Japan") },
      { id: "china",     labelKey: "cat.country.items.china.label",     icon: "🇨🇳", filter: () => AIRPORTS.filter(ap => ap.country === "China") },
      { id: "australia",   labelKey: "cat.country.items.australia.label",   icon: "🇦🇺", filter: () => AIRPORTS.filter(ap => ap.country === "Australia") },
      { id: "india",       labelKey: "cat.country.items.india.label",       icon: "🇮🇳", filter: () => AIRPORTS.filter(ap => ap.country === "India") },
      { id: "turkey",      labelKey: "cat.country.items.turkey.label",      icon: "🇹🇷", filter: () => AIRPORTS.filter(ap => ap.country === "Turkey") },
      { id: "new_zealand", labelKey: "cat.country.items.new_zealand.label", icon: "🇳🇿", filter: () => AIRPORTS.filter(ap => ap.country === "New Zealand") },
      { id: "mexico",      labelKey: "cat.country.items.mexico.label",      icon: "🇲🇽", filter: () => AIRPORTS.filter(ap => ap.country === "Mexico") },
      { id: "argentina",   labelKey: "cat.country.items.argentina.label",   icon: "🇦🇷", filter: () => AIRPORTS.filter(ap => ap.country === "Argentina") },
      { id: "greece",      labelKey: "cat.country.items.greece.label",      icon: "🇬🇷", filter: () => AIRPORTS.filter(ap => ap.country === "Greece") },
    ],
  },
  {
    id: "special",
    labelKey: "cat.special.label",
    icon: "⭐",
    items: [
      { id: "capitals",  labelKey: "cat.special.items.capitals.label",  icon: "🌃", filter: () => AIRPORTS.filter(ap => ap.tags.includes("capital")) },
      { id: "islands",   labelKey: "cat.special.items.islands.label",   icon: "🏝️", filter: () => AIRPORTS.filter(ap => ap.tags.includes("island") || ap.tags.includes("artificial-island")) },
      { id: "mountains", labelKey: "cat.special.items.mountains.label", icon: "🏔️", filter: () => AIRPORTS.filter(ap => ap.tags.includes("mountain")) },
      { id: "coastal",   labelKey: "cat.special.items.coastal.label",   icon: "🌊", filter: () => AIRPORTS.filter(ap => ap.tags.includes("coastal")) },
      { id: "extreme",   labelKey: "cat.special.items.extreme.label",   icon: "❄️", filter: () => AIRPORTS.filter(ap => ap.tags.includes("featured")) },
    ],
  },
  {
    id: "characteristics",
    labelKey: "cat.characteristics.label",
    icon: "🏷️",
    items: [
      { id: "cargo",     labelKey: "cat.characteristics.items.cargo.label",    icon: "📦", filter: () => AIRPORTS.filter(ap => ap.tags.includes("cargo")) },
      { id: "holiday",   labelKey: "cat.characteristics.items.holiday.label",  icon: "🌴", filter: () => AIRPORTS.filter(ap => ap.tags.includes("holiday")) },
      { id: "low_cost",  labelKey: "cat.characteristics.items.low_cost.label", icon: "💸", filter: () => AIRPORTS.filter(ap => ap.tags.includes("low-cost")) },
      { id: "difficult", labelKey: "cat.characteristics.items.difficult.label",icon: "⚠️", filter: () => AIRPORTS.filter(ap => ap.tags.includes("difficult-approach")) },
      { id: "military",  labelKey: "cat.characteristics.items.military.label", icon: "✈️", filter: () => AIRPORTS.filter(ap => ap.tags.includes("military-history")) },
      { id: "remote",    labelKey: "cat.characteristics.items.remote.label",   icon: "🗺️", filter: () => AIRPORTS.filter(ap => ap.tags.includes("remote")) },
    ],
  },
];
