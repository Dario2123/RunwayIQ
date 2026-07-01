// RunwayIQ — Airport Data v2
// Fields: iata, name, city, country, continent, lat, lon, size, difficulty, tags
// Optional: nameShort, aliases
// Ordered by approximate annual passenger volume (largest first).
// difficulty: 1 = globally iconic, 5 = obscure regional

const AIRPORTS = [
  { iata:"ATL", name:"Hartsfield-Jackson Atlanta International", city:"Atlanta", country:"USA", continent:"north_america", lat:33.6407, lon:-84.4277, size:"large", difficulty:1, tags:["hub","international","cargo","military-history"], aliases:["Atlanta Airport","Hartsfield-Jackson"] },
  { iata:"DXB", name:"Dubai International", city:"Dubai", country:"UAE", continent:"asia", lat:25.2532, lon:55.3657, size:"large", difficulty:1, tags:["hub","international","cargo","featured"], aliases:["Dubai Airport"] },
  { iata:"LAX", name:"Los Angeles International", city:"Los Angeles", country:"USA", continent:"north_america", lat:33.9425, lon:-118.4081, size:"large", difficulty:1, tags:["hub","international","cargo","coastal"], aliases:["Los Angeles Airport"] },
  { iata:"ORD", name:"O'Hare International", city:"Chicago", country:"USA", continent:"north_america", lat:41.9742, lon:-87.9073, size:"large", difficulty:1, tags:["hub","international","cargo","military-history"], aliases:["O'Hare Airport","Chicago O'Hare","Chicago Airport"] },
  { iata:"HND", name:"Tokyo Haneda", city:"Tokyo", country:"Japan", continent:"asia", lat:35.5494, lon:139.7798, size:"large", difficulty:1, tags:["hub","international","cargo","capital","coastal"], aliases:["Haneda Airport","Haneda"] },
  { iata:"LHR", name:"London Heathrow", city:"London", country:"UK", continent:"europe", lat:51.4700, lon:-0.4543, size:"large", difficulty:1, tags:["hub","international","cargo","capital","night-curfew","featured"], aliases:["Heathrow","Heathrow Airport","London Airport"] },
  { iata:"CDG", name:"Paris Charles de Gaulle", city:"Paris", country:"France", continent:"europe", lat:49.0097, lon:2.5479, size:"large", difficulty:1, tags:["hub","international","cargo","capital","night-curfew"], aliases:["Charles de Gaulle","Roissy","Paris Airport"] },
  { iata:"DFW", name:"Dallas/Fort Worth International", city:"Dallas", country:"USA", continent:"north_america", lat:32.8998, lon:-97.0403, size:"large", difficulty:1, tags:["hub","international","cargo"], aliases:["Dallas Airport","Dallas Fort Worth"] },
  { iata:"CAN", name:"Guangzhou Baiyun International", city:"Guangzhou", country:"China", continent:"asia", lat:23.3924, lon:113.2988, size:"large", difficulty:3, tags:["hub","international","cargo"], aliases:["Guangzhou Airport","Baiyun Airport","Canton Airport"] },
  { iata:"ICN", name:"Incheon International", city:"Seoul", country:"South Korea", continent:"asia", lat:37.4602, lon:126.4407, size:"large", difficulty:2, tags:["hub","international","cargo","capital","featured"], aliases:["Incheon Airport","Seoul Airport"] },
  { iata:"DEN", name:"Denver International", city:"Denver", country:"USA", continent:"north_america", lat:39.8561, lon:-104.6737, size:"large", difficulty:1, tags:["hub","international","mountain","featured"], aliases:["Denver Airport"] },
  { iata:"PEK", name:"Beijing Capital International", city:"Beijing", country:"China", continent:"asia", lat:40.0799, lon:116.6031, size:"large", difficulty:2, tags:["hub","international","cargo","capital","featured"], aliases:["Beijing Capital","Beijing Airport"] },
  { iata:"PKX", name:"Beijing Daxing International", city:"Beijing", country:"China", continent:"asia", lat:39.5097, lon:116.4105, size:"large", difficulty:3, tags:["hub","international","capital","featured"], aliases:["Beijing Daxing","Daxing Airport"] },
  { iata:"LAS", name:"Harry Reid International", city:"Las Vegas", country:"USA", continent:"north_america", lat:36.0840, lon:-115.1537, size:"large", difficulty:2, tags:["hub","international","holiday","military-history","featured"], aliases:["Las Vegas Airport","Harry Reid","McCarran"] },
  { iata:"SIN", name:"Singapore Changi", city:"Singapore", country:"Singapore", continent:"asia", lat:1.3644, lon:103.9915, size:"large", difficulty:1, tags:["hub","international","cargo","capital","island","coastal","featured"], aliases:["Changi","Changi Airport","Singapore Airport"] },
  { iata:"AMS", name:"Amsterdam Schiphol", city:"Amsterdam", country:"Netherlands", continent:"europe", lat:52.3105, lon:4.7683, size:"large", difficulty:1, tags:["hub","international","cargo","capital","featured"], aliases:["Schiphol","Amsterdam Airport"] },
  { iata:"BOM", name:"Chhatrapati Shivaji Maharaj International", city:"Mumbai", country:"India", continent:"asia", lat:19.0896, lon:72.8656, size:"large", difficulty:2, tags:["hub","international","coastal"], aliases:["Mumbai Airport","Chhatrapati Shivaji"] },
  { iata:"SFO", name:"San Francisco International", city:"San Francisco", country:"USA", continent:"north_america", lat:37.6213, lon:-122.3790, size:"large", difficulty:1, tags:["hub","international","cargo","coastal","featured"], aliases:["San Francisco Airport"] },
  { iata:"DEL", name:"Indira Gandhi International", city:"New Delhi", country:"India", continent:"asia", lat:28.5565, lon:77.1000, size:"large", difficulty:2, tags:["hub","international","cargo","capital"], aliases:["Delhi Airport","New Delhi Airport","Indira Gandhi"] },
  { iata:"SEA", name:"Seattle-Tacoma International", city:"Seattle", country:"USA", continent:"north_america", lat:47.4502, lon:-122.3088, size:"large", difficulty:2, tags:["hub","international","coastal"], aliases:["Seattle Airport","Sea-Tac"] },
  { iata:"CLT", name:"Charlotte Douglas International", city:"Charlotte", country:"USA", continent:"north_america", lat:35.2140, lon:-80.9431, size:"large", difficulty:2, tags:["hub","international"], aliases:["Charlotte Airport","Douglas Airport","CLT Airport"] },
  { iata:"KUL", name:"Kuala Lumpur International", city:"Kuala Lumpur", country:"Malaysia", continent:"asia", lat:2.7456, lon:101.7099, size:"large", difficulty:2, tags:["hub","international","cargo","capital","low-cost"], aliases:["Kuala Lumpur Airport","KLIA"] },
  { iata:"MCO", name:"Orlando International", city:"Orlando", country:"USA", continent:"north_america", lat:28.4294, lon:-81.3089, size:"large", difficulty:2, tags:["holiday","international"], aliases:["Orlando Airport","MCO Airport"] },
  { iata:"IST", name:"Istanbul Airport", city:"Istanbul", country:"Turkey", continent:"europe", lat:41.2753, lon:28.7519, size:"large", difficulty:1, tags:["hub","international","cargo","capital","featured"], aliases:["Istanbul Airport"] },
  { iata:"PHX", name:"Phoenix Sky Harbor International", city:"Phoenix", country:"USA", continent:"north_america", lat:33.4373, lon:-112.0078, size:"large", difficulty:2, tags:["hub","international"], aliases:["Sky Harbor","Phoenix Airport"] },
  { iata:"EWR", name:"Newark Liberty International", city:"Newark", country:"USA", continent:"north_america", lat:40.6895, lon:-74.1745, size:"large", difficulty:2, tags:["hub","international","cargo","coastal"], aliases:["Newark Airport","Liberty Airport"] },
  { iata:"FRA", name:"Frankfurt am Main", city:"Frankfurt", country:"Germany", continent:"europe", lat:50.0379, lon:8.5622, size:"large", difficulty:1, tags:["hub","international","cargo","night-curfew","featured"], aliases:["Frankfurt Airport","Frankfurt Main","Rhein-Main"] },
  { iata:"MIA", name:"Miami International", city:"Miami", country:"USA", continent:"north_america", lat:25.7959, lon:-80.2870, size:"large", difficulty:1, tags:["hub","international","cargo","coastal"], aliases:["Miami Airport"] },
  { iata:"MUC", name:"Munich Airport", city:"Munich", country:"Germany", continent:"europe", lat:48.3538, lon:11.7861, size:"large", difficulty:2, tags:["hub","international","cargo","night-curfew"], aliases:["Munich Airport","Franz Josef Strauss"] },
  { iata:"JFK", name:"John F. Kennedy International", city:"New York", country:"USA", continent:"north_america", lat:40.6413, lon:-73.7781, size:"large", difficulty:1, tags:["hub","international","cargo","capital","coastal","featured"], aliases:["JFK","John F Kennedy","John F. Kennedy","New York JFK"] },
  { iata:"NRT", name:"Tokyo Narita International", city:"Tokyo", country:"Japan", continent:"asia", lat:35.7720, lon:140.3929, size:"large", difficulty:2, tags:["hub","international","cargo","capital","night-curfew","featured"], aliases:["Narita","Narita Airport"] },
  { iata:"SYD", name:"Sydney Kingsford Smith", city:"Sydney", country:"Australia", continent:"oceania", lat:-33.9399, lon:151.1753, size:"large", difficulty:1, tags:["hub","international","cargo","coastal","featured"], aliases:["Sydney Airport","Kingsford Smith"] },
  { iata:"CTU", name:"Chengdu Tianfu International", city:"Chengdu", country:"China", continent:"asia", lat:30.3125, lon:104.4441, size:"large", difficulty:3, tags:["hub","international"], aliases:["Tianfu Airport","Chengdu Airport"] },
  { iata:"BCN", name:"El Prat Barcelona International", city:"Barcelona", country:"Spain", continent:"europe", lat:41.2971, lon:2.0785, size:"large", difficulty:2, tags:["hub","international","coastal","holiday","low-cost"], aliases:["Barcelona Airport","El Prat"] },
  { iata:"BKK", name:"Suvarnabhumi International", city:"Bangkok", country:"Thailand", continent:"asia", lat:13.6811, lon:100.7474, size:"large", difficulty:1, tags:["hub","international","cargo","capital","holiday","featured"], aliases:["Bangkok Airport","Suvarnabhumi"] },
  { iata:"HKG", name:"Hong Kong International", city:"Hong Kong", country:"China", continent:"asia", lat:22.3080, lon:113.9185, size:"large", difficulty:1, tags:["hub","international","cargo","island","coastal","featured"], aliases:["Hong Kong Airport"] },
  { iata:"YYZ", name:"Toronto Pearson International", city:"Toronto", country:"Canada", continent:"north_america", lat:43.6777, lon:-79.6248, size:"large", difficulty:2, tags:["hub","international","cargo"], aliases:["Toronto Airport","Pearson Airport"] },
  { iata:"IAH", name:"George Bush Intercontinental", city:"Houston", country:"USA", continent:"north_america", lat:29.9902, lon:-95.3368, size:"large", difficulty:2, tags:["hub","international","cargo"], aliases:["Houston Intercontinental","Bush Airport","Houston Airport"] },
  { iata:"ZRH", name:"Zurich Airport", city:"Zurich", country:"Switzerland", continent:"europe", lat:47.4647, lon:8.5492, size:"large", difficulty:2, tags:["hub","international","cargo","night-curfew","featured"], aliases:["Zurich Airport"] },
  { iata:"MSP", name:"Minneapolis-St. Paul International", city:"Minneapolis", country:"USA", continent:"north_america", lat:44.8848, lon:-93.2223, size:"large", difficulty:2, tags:["hub","international"], aliases:["Minneapolis Airport","MSP Airport","Twin Cities Airport"] },
  { iata:"GRU", name:"São Paulo Guarulhos International", city:"São Paulo", country:"Brazil", continent:"south_america", lat:-23.4356, lon:-46.4731, size:"large", difficulty:2, tags:["hub","international","cargo"], aliases:["Guarulhos","Sao Paulo Airport","São Paulo Airport"] },
  { iata:"DOH", name:"Hamad International", city:"Doha", country:"Qatar", continent:"asia", lat:25.2609, lon:51.6138, size:"large", difficulty:1, tags:["hub","international","cargo","capital","featured"], aliases:["Doha Airport","Hamad Airport"] },
  { iata:"MNL", name:"Ninoy Aquino International", city:"Manila", country:"Philippines", continent:"asia", lat:14.5086, lon:121.0197, size:"large", difficulty:2, tags:["hub","international","capital"], aliases:["NAIA","Manila Airport"] },
  { iata:"CGK", name:"Soekarno-Hatta International", city:"Jakarta", country:"Indonesia", continent:"asia", lat:-6.1256, lon:106.6559, size:"large", difficulty:2, tags:["hub","international","capital","coastal"], aliases:["Soekarno-Hatta","Jakarta Airport","Cengkareng"] },
  { iata:"MEX", name:"Benito Juárez International", city:"Mexico City", country:"Mexico", continent:"north_america", lat:19.4363, lon:-99.0721, size:"large", difficulty:2, tags:["hub","international","cargo","capital","mountain"], aliases:["Mexico City Airport","Benito Juarez"] },
  { iata:"LGW", name:"London Gatwick", city:"London", country:"UK", continent:"europe", lat:51.1537, lon:-0.1821, size:"large", difficulty:2, tags:["hub","international","capital","low-cost"], aliases:["Gatwick","London Gatwick Airport"] },
  { iata:"EZE", name:"Ministro Pistarini International", city:"Buenos Aires", country:"Argentina", continent:"south_america", lat:-34.8222, lon:-58.5358, size:"large", difficulty:2, tags:["hub","international","capital"], aliases:["Ezeiza","Buenos Aires Ezeiza","Pistarini"] },
  { iata:"ARN", name:"Stockholm Arlanda", city:"Stockholm", country:"Sweden", continent:"europe", lat:59.6519, lon:17.9186, size:"large", difficulty:2, tags:["hub","international","capital"], aliases:["Stockholm Airport","Arlanda"] },
  { iata:"CAI", name:"Cairo International", city:"Cairo", country:"Egypt", continent:"africa", lat:30.1219, lon:31.4056, size:"medium", difficulty:2, tags:["hub","international","capital"], aliases:["Cairo Airport"] },
  { iata:"VIE", name:"Vienna International", city:"Vienna", country:"Austria", continent:"europe", lat:48.1103, lon:16.5697, size:"medium", difficulty:2, tags:["hub","international","cargo","capital"], aliases:["Vienna Airport"] },
  { iata:"CPH", name:"Copenhagen Airport", city:"Copenhagen", country:"Denmark", continent:"europe", lat:55.6180, lon:12.6560, size:"large", difficulty:2, tags:["hub","international","cargo","capital","coastal"], aliases:["Copenhagen Airport","Kastrup"] },
  { iata:"OSL", name:"Oslo Gardermoen", city:"Oslo", country:"Norway", continent:"europe", lat:60.1939, lon:11.1004, size:"medium", difficulty:3, tags:["hub","international","capital"], aliases:["Oslo Airport","Gardermoen"] },
  { iata:"BRU", name:"Brussels Airport", city:"Brussels", country:"Belgium", continent:"europe", lat:50.9010, lon:4.4844, size:"medium", difficulty:3, tags:["hub","international","cargo","capital"], aliases:["Brussels Airport","Zaventem"] },
  { iata:"MAN", name:"Manchester Airport", city:"Manchester", country:"UK", continent:"europe", lat:53.3537, lon:-2.2750, size:"medium", difficulty:3, tags:["hub","international","featured"], aliases:["Manchester Airport"] },
  { iata:"LIS", name:"Lisbon Humberto Delgado", city:"Lisbon", country:"Portugal", continent:"europe", lat:38.7813, lon:-9.1359, size:"medium", difficulty:2, tags:["hub","international","capital","coastal"], aliases:["Lisbon Airport","Humberto Delgado"] },
  { iata:"DUB", name:"Dublin Airport", city:"Dublin", country:"Ireland", continent:"europe", lat:53.4213, lon:-6.2701, size:"medium", difficulty:2, tags:["hub","international","capital","low-cost","featured"], aliases:["Dublin Airport"] },
  { iata:"MAD", name:"Adolfo Suárez Madrid-Barajas", city:"Madrid", country:"Spain", continent:"europe", lat:40.4936, lon:-3.5668, size:"large", difficulty:1, tags:["hub","international","cargo","capital"], aliases:["Madrid Airport","Barajas","Madrid-Barajas"] },
  { iata:"FCO", name:"Rome Fiumicino", city:"Rome", country:"Italy", continent:"europe", lat:41.8003, lon:12.2389, size:"large", difficulty:2, tags:["hub","international","cargo","capital","coastal","low-cost"], aliases:["Rome Airport","Fiumicino","Leonardo da Vinci Airport"] },
  { iata:"HEL", name:"Helsinki-Vantaa", city:"Helsinki", country:"Finland", continent:"europe", lat:60.3172, lon:24.9633, size:"medium", difficulty:2, tags:["hub","international","cargo","capital","coastal","featured"], aliases:["Helsinki Airport","Vantaa"] },
  { iata:"PVG", name:"Shanghai Pudong International", city:"Shanghai", country:"China", continent:"asia", lat:31.1443, lon:121.8083, size:"large", difficulty:2, tags:["hub","international","cargo","coastal","featured"], aliases:["Shanghai Pudong","Pudong Airport"] },
  { iata:"SHA", name:"Shanghai Hongqiao International", city:"Shanghai", country:"China", continent:"asia", lat:31.1979, lon:121.3364, size:"medium", difficulty:3, tags:["hub","domestic"], aliases:["Hongqiao","Shanghai Hongqiao","Hongqiao Airport"] },
  { iata:"KIX", name:"Osaka Kansai International", city:"Osaka", country:"Japan", continent:"asia", lat:34.4347, lon:135.2440, size:"large", difficulty:2, tags:["hub","international","artificial-island","island","featured","night-curfew"], aliases:["Kansai Airport","Osaka Airport"] },
  { iata:"TPE", name:"Taiwan Taoyuan International", city:"Taipei", country:"Taiwan", continent:"asia", lat:25.0777, lon:121.2322, size:"medium", difficulty:2, tags:["hub","international","island"], aliases:["Taoyuan","Taipei Airport","CKS Airport"] },
  { iata:"MEL", name:"Melbourne Airport", city:"Melbourne", country:"Australia", continent:"oceania", lat:-37.6690, lon:144.8410, size:"large", difficulty:2, tags:["hub","international"], aliases:["Melbourne Airport"] },
  { iata:"CGN", name:"Cologne Bonn Airport", city:"Cologne", country:"Germany", continent:"europe", lat:50.8659, lon:7.1427, size:"medium", difficulty:4, tags:["low-cost"], aliases:["Cologne","Bonn","Koln"] },
  { iata:"DUS", name:"Düsseldorf Airport", city:"Düsseldorf", country:"Germany", continent:"europe", lat:51.2895, lon:6.7668, size:"medium", difficulty:3, tags:["hub","international"], aliases:["Dusseldorf Airport","Düsseldorf International"] },
  { iata:"HAM", name:"Hamburg Airport", city:"Hamburg", country:"Germany", continent:"europe", lat:53.6304, lon:10.0062, size:"medium", difficulty:3, tags:["hub","international","coastal"], aliases:["Hamburg Airport","Helmut Schmidt Airport"] },
  { iata:"BER", name:"Berlin Brandenburg Airport", city:"Berlin", country:"Germany", continent:"europe", lat:52.3667, lon:13.5033, size:"medium", difficulty:2, tags:["hub","international","capital","featured","low-cost","night-curfew"], aliases:["Berlin Airport","Berlin Brandenburg"] },
  { iata:"MXP", name:"Milan Malpensa International", city:"Milan", country:"Italy", continent:"europe", lat:45.6306, lon:8.7281, size:"medium", difficulty:3, tags:["hub","international","featured"], aliases:["Milan Airport","Malpensa"] },
  { iata:"GVA", name:"Geneva Airport", city:"Geneva", country:"Switzerland", continent:"europe", lat:46.2381, lon:6.1089, size:"medium", difficulty:2, tags:["hub","international","featured"], aliases:["Geneva Airport"] },
  { iata:"ATH", name:"Athens Eleftherios Venizelos", city:"Athens", country:"Greece", continent:"europe", lat:37.9364, lon:23.9445, size:"medium", difficulty:2, tags:["hub","international","capital","coastal"], aliases:["Athens Airport","Venizelos"] },
  { iata:"WAW", name:"Warsaw Chopin Airport", city:"Warsaw", country:"Poland", continent:"europe", lat:52.1657, lon:20.9671, size:"medium", difficulty:3, tags:["hub","international","capital"], aliases:["Warsaw Airport","Chopin Airport"] },
  { iata:"PRG", name:"Václav Havel Airport Prague", city:"Prague", country:"Czech Republic", continent:"europe", lat:50.1008, lon:14.2600, size:"medium", difficulty:3, tags:["hub","international","capital","low-cost"], aliases:["Prague Airport","Vaclav Havel Airport"] },
  { iata:"BUD", name:"Budapest Ferenc Liszt International", city:"Budapest", country:"Hungary", continent:"europe", lat:47.4298, lon:19.2611, size:"medium", difficulty:3, tags:["hub","international","capital","low-cost","featured"], aliases:["Budapest Airport","Ferenc Liszt Airport"] },
  { iata:"LYS", name:"Lyon-Saint Exupéry Airport", city:"Lyon", country:"France", continent:"europe", lat:45.7256, lon:5.0811, size:"medium", difficulty:4, tags:["international"], aliases:["Lyon","Saint Exupery","Satolas"] },
  { iata:"NCE", name:"Nice Côte d'Azur Airport", city:"Nice", country:"France", continent:"europe", lat:43.6584, lon:7.2159, size:"medium", difficulty:3, tags:["international","holiday","coastal"], aliases:["Nice Airport","Cote d'Azur Airport","Nice Riviera"] },
  { iata:"MRS", name:"Marseille Provence Airport", city:"Marseille", country:"France", continent:"europe", lat:43.4393, lon:5.2214, size:"medium", difficulty:4, tags:["international","coastal"], aliases:["Marseille","Marignane"] },
  { iata:"TLV", name:"Ben Gurion International", city:"Tel Aviv", country:"Israel", continent:"asia", lat:32.0114, lon:34.8867, size:"medium", difficulty:2, tags:["hub","international","capital","coastal","featured"], aliases:["Tel Aviv Airport","Ben Gurion"] },
  { iata:"AUH", name:"Abu Dhabi International", city:"Abu Dhabi", country:"UAE", continent:"asia", lat:24.4330, lon:54.6511, size:"medium", difficulty:2, tags:["hub","international","capital"], aliases:["Abu Dhabi Airport"] },
  { iata:"RUH", name:"King Khalid International", city:"Riyadh", country:"Saudi Arabia", continent:"asia", lat:24.9576, lon:46.6988, size:"large", difficulty:2, tags:["hub","international","capital","featured"], aliases:["Riyadh Airport","King Khalid Airport"] },
  { iata:"JED", name:"King Abdulaziz International", city:"Jeddah", country:"Saudi Arabia", continent:"asia", lat:21.6796, lon:39.1565, size:"medium", difficulty:2, tags:["hub","international","coastal","featured"], aliases:["Jeddah Airport","King Abdulaziz Airport"] },
  { iata:"BAH", name:"Bahrain International", city:"Manama", country:"Bahrain", continent:"asia", lat:26.2708, lon:50.6336, size:"small", difficulty:3, tags:["hub","international","capital","island"] },
  { iata:"KWI", name:"Kuwait International", city:"Kuwait City", country:"Kuwait", continent:"asia", lat:29.2267, lon:47.9689, size:"small", difficulty:3, tags:["hub","international","capital"] },
  { iata:"MCT", name:"Muscat International", city:"Muscat", country:"Oman", continent:"asia", lat:23.5933, lon:58.2844, size:"medium", difficulty:3, tags:["hub","international","capital","coastal"], aliases:["Muscat Airport","Seeb Airport","Oman Airport"] },
  { iata:"CMB", name:"Bandaranaike International", city:"Colombo", country:"Sri Lanka", continent:"asia", lat:7.1808, lon:79.8841, size:"medium", difficulty:3, tags:["hub","international","capital","island","coastal"], aliases:["Colombo Airport","Bandaranaike","Katunayake Airport"] },
  { iata:"DAC", name:"Hazrat Shahjalal International", city:"Dhaka", country:"Bangladesh", continent:"asia", lat:23.8433, lon:90.3979, size:"medium", difficulty:3, tags:["hub","international","capital"], aliases:["Dhaka Airport","Shahjalal Airport","Zia International"] },
  { iata:"KTM", name:"Tribhuvan International", city:"Kathmandu", country:"Nepal", continent:"asia", lat:27.6966, lon:85.3591, size:"small", difficulty:4, tags:["mountain","international","capital","difficult-approach","featured"], aliases:["Kathmandu Airport","Tribhuvan Airport"] },
  { iata:"CCU", name:"Netaji Subhas Chandra Bose International", city:"Kolkata", country:"India", continent:"asia", lat:22.6547, lon:88.4467, size:"medium", difficulty:3, tags:["hub","international"], aliases:["Kolkata Airport","Dum Dum Airport","Netaji Subhas Airport"] },
  { iata:"MAA", name:"Chennai International", city:"Chennai", country:"India", continent:"asia", lat:12.9900, lon:80.1693, size:"medium", difficulty:3, tags:["hub","international","coastal"], aliases:["Chennai Airport","Madras Airport"] },
  { iata:"BLR", name:"Kempegowda International", city:"Bengaluru", country:"India", continent:"asia", lat:13.1979, lon:77.7063, size:"medium", difficulty:3, tags:["hub","international"], aliases:["Bengaluru Airport","Bangalore Airport","Kempegowda Airport"] },
  { iata:"HYD", name:"Rajiv Gandhi International", city:"Hyderabad", country:"India", continent:"asia", lat:17.2403, lon:78.4294, size:"medium", difficulty:4, tags:["hub","international"], aliases:["Hyderabad Airport","Shamshabad Airport","Rajiv Gandhi Airport"] },
  { iata:"AMD", name:"Sardar Vallabhbhai Patel International", city:"Ahmedabad", country:"India", continent:"asia", lat:23.0777, lon:72.6347, size:"small", difficulty:4, tags:["international"] },
  { iata:"COK", name:"Cochin International", city:"Kochi", country:"India", continent:"asia", lat:10.1520, lon:76.4019, size:"small", difficulty:4, tags:["international","coastal"] },
  { iata:"PNQ", name:"Pune Airport", city:"Pune", country:"India", continent:"asia", lat:18.5822, lon:73.9197, size:"small", difficulty:4, tags:["international"] },
  { iata:"MLE", name:"Velana International", city:"Malé", country:"Maldives", continent:"asia", lat:4.1918, lon:73.5290, size:"small", difficulty:3, tags:["international","capital","island","coastal","holiday","featured","remote"], aliases:["Male Airport","Malé Airport","Velana Airport"] },
  { iata:"LKO", name:"Chaudhary Charan Singh International", city:"Lucknow", country:"India", continent:"asia", lat:26.7606, lon:80.8893, size:"medium", difficulty:5, tags:["domestic"] },
  { iata:"RGN", name:"Yangon International", city:"Yangon", country:"Myanmar", continent:"asia", lat:16.9073, lon:96.1332, size:"medium", difficulty:4, tags:["hub","international"], aliases:["Yangon Airport","Mingaladon Airport"] },
  { iata:"SGN", name:"Tan Son Nhat International", city:"Ho Chi Minh City", country:"Vietnam", continent:"asia", lat:10.8188, lon:106.6520, size:"medium", difficulty:3, tags:["hub","international"], aliases:["Ho Chi Minh Airport","Saigon Airport","Tan Son Nhat"] },
  { iata:"HAN", name:"Noi Bai International", city:"Hanoi", country:"Vietnam", continent:"asia", lat:21.2187, lon:105.8043, size:"medium", difficulty:3, tags:["hub","international","capital"], aliases:["Hanoi Airport","Noi Bai"] },
  { iata:"BKI", name:"Kota Kinabalu International", city:"Kota Kinabalu", country:"Malaysia", continent:"asia", lat:5.9372, lon:116.0508, size:"medium", difficulty:4, tags:["international","coastal","island"], aliases:["Kota Kinabalu Airport","KK Airport","Sabah Airport"] },
  { iata:"CEB", name:"Mactan-Cebu International", city:"Cebu", country:"Philippines", continent:"asia", lat:10.3075, lon:123.9789, size:"medium", difficulty:4, tags:["international","holiday","island"], aliases:["Cebu Airport","Mactan Airport"] },
  { iata:"DPS", name:"Ngurah Rai International", city:"Bali", country:"Indonesia", continent:"asia", lat:-8.7482, lon:115.1670, size:"medium", difficulty:2, tags:["international","holiday","coastal","island","featured"], aliases:["Bali Airport","Denpasar Airport","Ngurah Rai"] },
  { iata:"SUB", name:"Juanda International", city:"Surabaya", country:"Indonesia", continent:"asia", lat:-7.3798, lon:112.7870, size:"medium", difficulty:4, tags:["international"], aliases:["Surabaya Airport","Juanda Airport"] },
  { iata:"SVO", name:"Sheremetyevo International", city:"Moscow", country:"Russia", continent:"europe", lat:55.9726, lon:37.4146, size:"large", difficulty:2, tags:["hub","international","capital"], aliases:["Moscow Sheremetyevo","Sheremetyevo Airport"] },
  { iata:"DME", name:"Domodedovo International", city:"Moscow", country:"Russia", continent:"europe", lat:55.4088, lon:37.9063, size:"large", difficulty:3, tags:["hub","international","capital"], aliases:["Domodedovo Airport","Moscow Domodedovo"] },
  { iata:"LED", name:"Pulkovo Airport", city:"St. Petersburg", country:"Russia", continent:"europe", lat:59.8003, lon:30.2625, size:"medium", difficulty:3, tags:["hub","international"], aliases:["St Petersburg Airport","St. Petersburg Airport","Pulkovo"] },
  { iata:"KBP", name:"Boryspil International", city:"Kyiv", country:"Ukraine", continent:"europe", lat:50.3450, lon:30.8947, size:"medium", difficulty:3, tags:["hub","international","capital"], aliases:["Kyiv Boryspil","Boryspil Airport","Kiev Airport"] },
  { iata:"OTP", name:"Henri Coandă International", city:"Bucharest", country:"Romania", continent:"europe", lat:44.5711, lon:26.0858, size:"medium", difficulty:3, tags:["hub","international","capital","low-cost","featured"], aliases:["Bucharest Airport","Henri Coanda"] },
  { iata:"SOF", name:"Sofia Airport", city:"Sofia", country:"Bulgaria", continent:"europe", lat:42.6967, lon:23.4114, size:"small", difficulty:4, tags:["hub","international","capital"] },
  { iata:"KRK", name:"John Paul II International Krakow", city:"Krakow", country:"Poland", continent:"europe", lat:50.0778, lon:19.7848, size:"medium", difficulty:4, tags:["international"], aliases:["Krakow","Balice"] },
  { iata:"RIX", name:"Riga International Airport", city:"Riga", country:"Latvia", continent:"europe", lat:56.9236, lon:23.9711, size:"small", difficulty:4, tags:["hub","international","capital","coastal"] },
  { iata:"TLL", name:"Tallinn Airport", city:"Tallinn", country:"Estonia", continent:"europe", lat:59.4133, lon:24.8328, size:"small", difficulty:4, tags:["hub","international","capital","coastal"] },
  { iata:"VNO", name:"Vilnius Airport", city:"Vilnius", country:"Lithuania", continent:"europe", lat:54.6341, lon:25.2858, size:"small", difficulty:4, tags:["hub","international","capital"] },
  { iata:"HRG", name:"Hurghada International", city:"Hurghada", country:"Egypt", continent:"africa", lat:27.1783, lon:33.7994, size:"small", difficulty:4, tags:["holiday","international","coastal","featured"], aliases:["Hurghada","Hurghada Airport"] },
  { iata:"SSH", name:"Sharm el-Sheikh International", city:"Sharm el-Sheikh", country:"Egypt", continent:"africa", lat:27.9773, lon:34.3950, size:"small", difficulty:4, tags:["holiday","international","coastal","featured"], aliases:["Sharm el Sheikh","Sharm","Ophira"] },
  { iata:"CMN", name:"Mohammed V International", city:"Casablanca", country:"Morocco", continent:"africa", lat:33.3675, lon:-7.5900, size:"medium", difficulty:3, tags:["hub","international","coastal"], aliases:["Casablanca Airport","Mohammed V Airport"] },
  { iata:"TUN", name:"Tunis-Carthage International", city:"Tunis", country:"Tunisia", continent:"africa", lat:36.8510, lon:10.2272, size:"medium", difficulty:4, tags:["hub","international","capital"], aliases:["Tunis","Carthage Airport"] },
  { iata:"ALG", name:"Houari Boumediene Airport", city:"Algiers", country:"Algeria", continent:"africa", lat:36.6910, lon:3.2154, size:"medium", difficulty:4, tags:["hub","international","capital"], aliases:["Algiers","Houari Boumediene"] },
  { iata:"JNB", name:"O.R. Tambo International", city:"Johannesburg", country:"South Africa", continent:"africa", lat:-26.1392, lon:28.2460, size:"medium", difficulty:2, tags:["hub","international","capital","mountain","featured"], aliases:["Johannesburg Airport","O.R. Tambo","OR Tambo"] },
  { iata:"CPT", name:"Cape Town International", city:"Cape Town", country:"South Africa", continent:"africa", lat:-33.9648, lon:18.6017, size:"medium", difficulty:3, tags:["hub","international","coastal"], aliases:["Cape Town Airport"] },
  { iata:"NBO", name:"Jomo Kenyatta International", city:"Nairobi", country:"Kenya", continent:"africa", lat:-1.3192, lon:36.9275, size:"medium", difficulty:3, tags:["hub","international","capital","mountain","featured"], aliases:["Nairobi Airport","Jomo Kenyatta"] },
  { iata:"ADD", name:"Addis Ababa Bole International", city:"Addis Ababa", country:"Ethiopia", continent:"africa", lat:8.9779, lon:38.7993, size:"medium", difficulty:3, tags:["hub","international","capital","mountain","featured"], aliases:["Addis Ababa Airport","Bole Airport"] },
  { iata:"LOS", name:"Murtala Muhammed International", city:"Lagos", country:"Nigeria", continent:"africa", lat:6.5774, lon:3.3212, size:"medium", difficulty:3, tags:["hub","international","coastal"], aliases:["Lagos","Murtala Muhammed","Ikeja"] },
  { iata:"ABJ", name:"Félix-Houphouët-Boigny International", city:"Abidjan", country:"Ivory Coast", continent:"africa", lat:5.2614, lon:-3.9263, size:"medium", difficulty:4, tags:["hub","international","coastal"], aliases:["Abidjan","Felix Houphouet-Boigny","Port Bouet"] },
  { iata:"ACC", name:"Kotoka International", city:"Accra", country:"Ghana", continent:"africa", lat:5.6052, lon:-0.1668, size:"medium", difficulty:4, tags:["hub","international","capital","coastal"], aliases:["Accra","Kotoka"] },
  { iata:"DKR", name:"Blaise Diagne International", city:"Dakar", country:"Senegal", continent:"africa", lat:14.6700, lon:-17.0733, size:"small", difficulty:4, tags:["hub","international","capital","coastal","remote"] },
  { iata:"YVR", name:"Vancouver International", city:"Vancouver", country:"Canada", continent:"north_america", lat:49.1947, lon:-123.1792, size:"large", difficulty:2, tags:["hub","international","coastal","featured"], aliases:["Vancouver Airport"] },
  { iata:"YUL", name:"Montreal-Trudeau International", city:"Montreal", country:"Canada", continent:"north_america", lat:45.4657, lon:-73.7449, size:"medium", difficulty:3, tags:["hub","international"], aliases:["Montreal Airport","Trudeau Airport"] },
  { iata:"YEG", name:"Edmonton International", city:"Edmonton", country:"Canada", continent:"north_america", lat:53.3097, lon:-113.5797, size:"medium", difficulty:4, tags:["hub","international"], aliases:["Edmonton Airport","Edmonton Intl"] },
  { iata:"YYC", name:"Calgary International", city:"Calgary", country:"Canada", continent:"north_america", lat:51.1215, lon:-114.0139, size:"medium", difficulty:3, tags:["hub","international"], aliases:["Calgary Airport","YYC Airport"] },
  { iata:"GDL", name:"Miguel Hidalgo y Costilla International", city:"Guadalajara", country:"Mexico", continent:"north_america", lat:20.5218, lon:-103.3111, size:"medium", difficulty:4, tags:["hub","international"], aliases:["Guadalajara Airport","Guadalajara Intl","Miguel Hidalgo Airport"] },
  { iata:"MTY", name:"General Mariano Escobedo International", city:"Monterrey", country:"Mexico", continent:"north_america", lat:25.7749, lon:-100.1071, size:"medium", difficulty:4, tags:["hub","international"], aliases:["Monterrey Airport","Monterrey Intl","Escobedo Airport"] },
  { iata:"BOG", name:"El Dorado International", city:"Bogotá", country:"Colombia", continent:"south_america", lat:4.7016, lon:-74.1469, size:"large", difficulty:2, tags:["hub","international","capital","mountain","featured"], aliases:["Bogota Airport","Bogotá Airport","El Dorado Airport"] },
  { iata:"MDE", name:"José María Córdova International", city:"Medellín", country:"Colombia", continent:"south_america", lat:6.1645, lon:-75.4231, size:"medium", difficulty:4, tags:["hub","international"], aliases:["Rionegro Airport","José María Córdova","Medellín Airport"] },
  { iata:"SCL", name:"Arturo Merino Benítez International", city:"Santiago", country:"Chile", continent:"south_america", lat:-33.3930, lon:-70.7858, size:"large", difficulty:2, tags:["hub","international","capital"], aliases:["Santiago Airport","Arturo Merino Benitez"] },
  { iata:"LIM", name:"Jorge Chávez International", city:"Lima", country:"Peru", continent:"south_america", lat:-12.0219, lon:-77.1143, size:"medium", difficulty:2, tags:["hub","international","capital","coastal","featured"], aliases:["Lima Airport","Jorge Chavez"] },
  { iata:"GIG", name:"Rio de Janeiro Galeão International", city:"Rio de Janeiro", country:"Brazil", continent:"south_america", lat:-22.8099, lon:-43.2505, size:"large", difficulty:2, tags:["hub","international","cargo","coastal","holiday"], aliases:["Galeão","Rio Galeão","Rio International"] },
  { iata:"BSB", name:"Presidente Juscelino Kubitschek International", city:"Brasília", country:"Brazil", continent:"south_america", lat:-15.8711, lon:-47.9186, size:"medium", difficulty:3, tags:["hub","international","capital","mountain"], aliases:["Brasília Airport","JK Airport","Kubitschek"] },
  { iata:"SSA", name:"Deputado Luís Eduardo Magalhães International", city:"Salvador", country:"Brazil", continent:"south_america", lat:-12.9086, lon:-38.3225, size:"medium", difficulty:4, tags:["hub","international","coastal"], aliases:["Salvador Airport","Luís Eduardo Magalhães"] },
  { iata:"FOR", name:"Pinto Martins International", city:"Fortaleza", country:"Brazil", continent:"south_america", lat:-3.7763, lon:-38.5326, size:"medium", difficulty:4, tags:["hub","international","coastal"], aliases:["Fortaleza Airport","Pinto Martins"] },
  { iata:"REC", name:"Guararapes International", city:"Recife", country:"Brazil", continent:"south_america", lat:-8.1265, lon:-34.9229, size:"medium", difficulty:4, tags:["hub","international","coastal"], aliases:["Recife Airport","Guararapes"] },
  { iata:"MVD", name:"Carrasco International", city:"Montevideo", country:"Uruguay", continent:"south_america", lat:-34.8384, lon:-56.0308, size:"medium", difficulty:3, tags:["hub","international","capital"], aliases:["Carrasco","Montevideo Airport"] },
  { iata:"CCS", name:"Simón Bolívar International", city:"Caracas", country:"Venezuela", continent:"south_america", lat:10.6031, lon:-66.9913, size:"medium", difficulty:3, tags:["hub","international","capital"], aliases:["Maiquetía","Caracas Airport","Simon Bolivar Caracas"] },
  { iata:"UIO", name:"Mariscal Sucre International", city:"Quito", country:"Ecuador", continent:"south_america", lat:-0.1292, lon:-78.3575, size:"medium", difficulty:3, tags:["hub","international","capital","mountain","featured"], aliases:["Quito Airport","Mariscal Sucre"] },
  { iata:"GYE", name:"José Joaquín de Olmedo International", city:"Guayaquil", country:"Ecuador", continent:"south_america", lat:-2.1574, lon:-79.8836, size:"medium", difficulty:4, tags:["hub","international","coastal"], aliases:["Guayaquil Airport","Olmedo Airport"] },
  { iata:"PTY", name:"Tocumen International", city:"Panama City", country:"Panama", continent:"north_america", lat:9.0714, lon:-79.3835, size:"large", difficulty:2, tags:["hub","international","capital","featured"], aliases:["Panama City Airport","Tocumen Airport"] },
  { iata:"SJO", name:"Juan Santamaría International", city:"San José", country:"Costa Rica", continent:"north_america", lat:9.9939, lon:-84.2088, size:"small", difficulty:3, tags:["hub","international","capital"] },
  { iata:"GUA", name:"La Aurora International", city:"Guatemala City", country:"Guatemala", continent:"north_america", lat:14.5833, lon:-90.5275, size:"small", difficulty:4, tags:["hub","international","capital"] },
  { iata:"SAL", name:"Monseñor Óscar Arnulfo Romero International", city:"San Salvador", country:"El Salvador", continent:"north_america", lat:13.4409, lon:-89.0557, size:"small", difficulty:4, tags:["hub","international","capital"] },
  { iata:"KIN", name:"Norman Manley International", city:"Kingston", country:"Jamaica", continent:"north_america", lat:17.9357, lon:-76.7875, size:"small", difficulty:4, tags:["hub","international","capital","coastal","island"] },
  { iata:"MBJ", name:"Sangster International", city:"Montego Bay", country:"Jamaica", continent:"north_america", lat:18.5037, lon:-77.9134, size:"small", difficulty:4, tags:["holiday","international","coastal","island"] },
  { iata:"NAS", name:"Lynden Pindling International", city:"Nassau", country:"Bahamas", continent:"north_america", lat:25.0390, lon:-77.4662, size:"small", difficulty:4, tags:["hub","international","capital","holiday","coastal","island"], aliases:["Nassau Airport","Lynden Pindling"] },
  { iata:"SAN", name:"San Diego International", city:"San Diego", country:"USA", continent:"north_america", lat:32.7338, lon:-117.1933, size:"medium", difficulty:3, tags:["hub","international","coastal"], aliases:["Lindbergh Field","San Diego Airport"] },
  { iata:"TPA", name:"Tampa International", city:"Tampa", country:"USA", continent:"north_america", lat:27.9755, lon:-82.5332, size:"medium", difficulty:3, tags:["hub","international","coastal","holiday"], aliases:["Tampa Airport","TPA Airport"] },
  { iata:"PDX", name:"Portland International", city:"Portland", country:"USA", continent:"north_america", lat:45.5898, lon:-122.5951, size:"medium", difficulty:3, tags:["hub","international","coastal"], aliases:["Portland Airport","PDX Airport"] },
  { iata:"STL", name:"St. Louis Lambert International", city:"St. Louis", country:"USA", continent:"north_america", lat:38.7487, lon:-90.3700, size:"medium", difficulty:3, tags:["hub","international"], aliases:["Lambert Field","St Louis Airport","Lambert International"] },
  { iata:"BOS", name:"Boston Logan International", city:"Boston", country:"USA", continent:"north_america", lat:42.3656, lon:-71.0096, size:"medium", difficulty:2, tags:["hub","international","coastal","featured"], aliases:["Boston Airport","Logan Airport"] },
  { iata:"BWI", name:"Baltimore/Washington International Thurgood Marshall", city:"Baltimore", country:"USA", continent:"north_america", lat:39.1754, lon:-76.6683, size:"medium", difficulty:3, tags:["hub","international","low-cost"], aliases:["Baltimore Airport","Thurgood Marshall Airport","BWI Airport"] },
  { iata:"DCA", name:"Ronald Reagan Washington National", city:"Washington D.C.", country:"USA", continent:"north_america", lat:38.8521, lon:-77.0377, size:"medium", difficulty:2, tags:["hub","international","capital","coastal"], aliases:["Reagan National","Washington National","National Airport"] },
  { iata:"IAD", name:"Washington Dulles International", city:"Washington D.C.", country:"USA", continent:"north_america", lat:38.9531, lon:-77.4565, size:"medium", difficulty:2, tags:["hub","international","capital"], aliases:["Dulles Airport","Dulles International"] },
  { iata:"PHL", name:"Philadelphia International", city:"Philadelphia", country:"USA", continent:"north_america", lat:39.8744, lon:-75.2424, size:"medium", difficulty:3, tags:["hub","international","coastal"], aliases:["Philadelphia Airport","PHL Airport"] },
  { iata:"DTW", name:"Detroit Metropolitan Wayne County", city:"Detroit", country:"USA", continent:"north_america", lat:42.2162, lon:-83.3554, size:"medium", difficulty:2, tags:["hub","international"], aliases:["Detroit Airport","Detroit Metro"] },
  { iata:"MSY", name:"Louis Armstrong New Orleans International", city:"New Orleans", country:"USA", continent:"north_america", lat:29.9934, lon:-90.2580, size:"medium", difficulty:3, tags:["hub","international","coastal"], aliases:["New Orleans Airport","Armstrong Airport","Louis Armstrong Airport"] },
  { iata:"CVG", name:"Cincinnati/Northern Kentucky International", city:"Cincinnati", country:"USA", continent:"north_america", lat:39.0480, lon:-84.6678, size:"medium", difficulty:4, tags:["hub","international","cargo"], aliases:["Cincinnati Airport","Cincinnati NKY","Northern Kentucky Airport"] },
  { iata:"SLC", name:"Salt Lake City International", city:"Salt Lake City", country:"USA", continent:"north_america", lat:40.7884, lon:-111.9778, size:"medium", difficulty:3, tags:["hub","international","mountain"], aliases:["Salt Lake City","Salt Lake International","SLC Airport"] },
  { iata:"RDU", name:"Raleigh-Durham International", city:"Raleigh", country:"USA", continent:"north_america", lat:35.8776, lon:-78.7875, size:"medium", difficulty:3, tags:["hub","international"], aliases:["Raleigh Durham","Raleigh Airport","Durham Airport"] },
  { iata:"SAT", name:"San Antonio International", city:"San Antonio", country:"USA", continent:"north_america", lat:29.5337, lon:-98.4698, size:"medium", difficulty:4, tags:["hub","international"], aliases:["San Antonio Airport","San Antonio Intl"] },
  { iata:"AUS", name:"Austin-Bergstrom International", city:"Austin", country:"USA", continent:"north_america", lat:30.1975, lon:-97.6664, size:"medium", difficulty:3, tags:["hub","international"], aliases:["Austin Airport","Bergstrom","Austin Bergstrom"] },
  { iata:"SMF", name:"Sacramento International", city:"Sacramento", country:"USA", continent:"north_america", lat:38.6954, lon:-121.5908, size:"medium", difficulty:4, tags:["hub","international"], aliases:["Sacramento Airport","Sacramento Intl"] },
  { iata:"MCI", name:"Kansas City International", city:"Kansas City", country:"USA", continent:"north_america", lat:39.2976, lon:-94.7139, size:"medium", difficulty:4, tags:["hub","international"], aliases:["Kansas City Airport","KC International","Kansas City Intl"] },
  { iata:"IND", name:"Indianapolis International", city:"Indianapolis", country:"USA", continent:"north_america", lat:39.7173, lon:-86.2944, size:"medium", difficulty:4, tags:["hub","international"], aliases:["Indianapolis Airport","Indy Airport","Indianapolis Intl"] },
  { iata:"CMH", name:"John Glenn Columbus International", city:"Columbus", country:"USA", continent:"north_america", lat:39.9980, lon:-82.8919, size:"medium", difficulty:4, tags:["hub","international"], aliases:["Columbus Airport","John Glenn Airport","Port Columbus"] },
  { iata:"PIT", name:"Pittsburgh International", city:"Pittsburgh", country:"USA", continent:"north_america", lat:40.4915, lon:-80.2329, size:"medium", difficulty:3, tags:["hub","international"], aliases:["Pittsburgh Airport","Greater Pittsburgh"] },
  { iata:"MEM", name:"Memphis International", city:"Memphis", country:"USA", continent:"north_america", lat:35.0424, lon:-89.9767, size:"medium", difficulty:4, tags:["hub","international","cargo"], aliases:["Memphis Airport","Memphis Intl","FedEx Hub"] },
  { iata:"OAK", name:"Oakland International", city:"Oakland", country:"USA", continent:"north_america", lat:37.7213, lon:-122.2208, size:"small", difficulty:4, tags:["international","coastal","low-cost"] },
  { iata:"HNL", name:"Daniel K. Inouye International", city:"Honolulu", country:"USA", continent:"north_america", lat:21.3245, lon:-157.9251, size:"medium", difficulty:2, tags:["hub","international","holiday","coastal","island","featured","remote"], aliases:["Honolulu Airport","Daniel K Inouye"] },
  { iata:"ANC", name:"Ted Stevens Anchorage International", city:"Anchorage", country:"USA", continent:"north_america", lat:61.1744, lon:-149.9961, size:"medium", difficulty:3, tags:["hub","international","cargo","featured","remote"], aliases:["Anchorage Airport","Ted Stevens Airport"] },
  { iata:"MKE", name:"Milwaukee Mitchell International", city:"Milwaukee", country:"USA", continent:"north_america", lat:42.9472, lon:-87.8966, size:"small", difficulty:4, tags:["hub","international"] },
  { iata:"ABQ", name:"Albuquerque International Sunport", city:"Albuquerque", country:"USA", continent:"north_america", lat:35.0402, lon:-106.6090, size:"small", difficulty:4, tags:["hub","international","mountain"] },
  { iata:"OMA", name:"Eppley Airfield", city:"Omaha", country:"USA", continent:"north_america", lat:41.3032, lon:-95.8940, size:"small", difficulty:5, tags:["hub","domestic"] },
  { iata:"BNA", name:"Nashville International", city:"Nashville", country:"USA", continent:"north_america", lat:36.1245, lon:-86.6782, size:"medium", difficulty:3, tags:["hub","international"], aliases:["Nashville Airport","Nashville Intl","Music City Airport"] },
  { iata:"RSW", name:"Southwest Florida International", city:"Fort Myers", country:"USA", continent:"north_america", lat:26.5362, lon:-81.7552, size:"small", difficulty:4, tags:["holiday","international"] },
  { iata:"PBI", name:"Palm Beach International", city:"West Palm Beach", country:"USA", continent:"north_america", lat:26.6832, lon:-80.0956, size:"small", difficulty:5, tags:["holiday","international"] },
  { iata:"JAX", name:"Jacksonville International", city:"Jacksonville", country:"USA", continent:"north_america", lat:30.4941, lon:-81.6879, size:"medium", difficulty:4, tags:["hub","international"], aliases:["Jacksonville Airport","Jax Intl"] },
  { iata:"DAL", name:"Dallas Love Field", city:"Dallas", country:"USA", continent:"north_america", lat:32.8481, lon:-96.8518, size:"medium", difficulty:3, tags:["hub","domestic","low-cost"], aliases:["Love Field","Dallas Love"] },
  { iata:"HOU", name:"William P. Hobby Airport", city:"Houston", country:"USA", continent:"north_america", lat:29.6454, lon:-95.2789, size:"medium", difficulty:3, tags:["hub","domestic","low-cost"], aliases:["Hobby Airport","Houston Hobby","William Hobby"] },
  { iata:"BUF", name:"Buffalo Niagara International", city:"Buffalo", country:"USA", continent:"north_america", lat:42.9405, lon:-78.7322, size:"small", difficulty:4, tags:["hub","international"] },
  { iata:"RIC", name:"Richmond International", city:"Richmond", country:"USA", continent:"north_america", lat:37.5052, lon:-77.3197, size:"small", difficulty:5, tags:["hub","domestic"] },
  { iata:"SJC", name:"Norman Y. Mineta San José International", city:"San José", country:"USA", continent:"north_america", lat:37.3626, lon:-121.9290, size:"medium", difficulty:3, tags:["hub","international"], aliases:["San Jose Airport","Mineta San Jose","Norman Mineta"] },
  { iata:"SNA", name:"John Wayne Airport", city:"Orange County", country:"USA", continent:"north_america", lat:33.6757, lon:-117.8682, size:"medium", difficulty:4, tags:["hub","international"], aliases:["Orange County Airport","John Wayne","Orange County"] },
  { iata:"ONT", name:"Ontario International", city:"Ontario", country:"USA", continent:"north_america", lat:34.0560, lon:-117.6009, size:"small", difficulty:5, tags:["hub","domestic"] },
  { iata:"BDL", name:"Bradley International", city:"Windsor Locks", country:"USA", continent:"north_america", lat:41.9389, lon:-72.6832, size:"small", difficulty:5, tags:["hub","international"] },
  { iata:"ALB", name:"Albany International", city:"Albany", country:"USA", continent:"north_america", lat:42.7483, lon:-73.8017, size:"small", difficulty:5, tags:["hub","domestic"] },
  { iata:"GRR", name:"Gerald R. Ford International", city:"Grand Rapids", country:"USA", continent:"north_america", lat:42.8808, lon:-85.5228, size:"small", difficulty:5, tags:["hub","domestic"] },
  { iata:"TUL", name:"Tulsa International", city:"Tulsa", country:"USA", continent:"north_america", lat:36.1984, lon:-95.8881, size:"small", difficulty:5, tags:["hub","domestic"] },
  { iata:"OKC", name:"Will Rogers World Airport", city:"Oklahoma City", country:"USA", continent:"north_america", lat:35.3931, lon:-97.6007, size:"small", difficulty:5, tags:["hub","domestic"] },
  { iata:"ELP", name:"El Paso International", city:"El Paso", country:"USA", continent:"north_america", lat:31.8072, lon:-106.3779, size:"small", difficulty:5, tags:["hub","international"] },
  { iata:"LIT", name:"Bill and Hillary Clinton National Airport", city:"Little Rock", country:"USA", continent:"north_america", lat:34.7294, lon:-92.2243, size:"small", difficulty:5, tags:["hub","domestic"] },
  { iata:"CHS", name:"Charleston International", city:"Charleston", country:"USA", continent:"north_america", lat:32.8987, lon:-80.0405, size:"small", difficulty:5, tags:["hub","domestic","military-history"] },
  { iata:"SDF", name:"Louisville Muhammad Ali International", city:"Louisville", country:"USA", continent:"north_america", lat:38.1744, lon:-85.7360, size:"small", difficulty:4, tags:["hub","international","cargo"] },
  { iata:"DAY", name:"Dayton International", city:"Dayton", country:"USA", continent:"north_america", lat:39.9024, lon:-84.2194, size:"small", difficulty:5, tags:["hub","domestic","military-history"] },
  { iata:"GEG", name:"Spokane International", city:"Spokane", country:"USA", continent:"north_america", lat:47.6199, lon:-117.5338, size:"small", difficulty:5, tags:["hub","domestic"] },

  // ── EUROPE EXPANSION ─────────────────────────────────────────────────────

  // UK
  { iata:"STN", name:"London Stansted Airport", city:"London", country:"UK", continent:"europe", lat:51.8850, lon:0.2350, size:"medium", difficulty:2, tags:["hub","international","low-cost","cargo","military-history"], aliases:["Stansted","London Stansted"] },
  { iata:"LTN", name:"London Luton Airport", city:"London", country:"UK", continent:"europe", lat:51.8747, lon:-0.3683, size:"small", difficulty:3, tags:["international","low-cost"] },
  { iata:"BHX", name:"Birmingham Airport", city:"Birmingham", country:"UK", continent:"europe", lat:52.4539, lon:-1.7480, size:"medium", difficulty:3, tags:["hub","international"], aliases:["Birmingham Airport","Elmdon Airport"] },
  { iata:"EDI", name:"Edinburgh Airport", city:"Edinburgh", country:"UK", continent:"europe", lat:55.9500, lon:-3.3725, size:"medium", difficulty:3, tags:["hub","international","capital"], aliases:["Edinburgh","Turnhouse"] },
  { iata:"GLA", name:"Glasgow Airport", city:"Glasgow", country:"UK", continent:"europe", lat:55.8642, lon:-4.4331, size:"medium", difficulty:3, tags:["hub","international"], aliases:["Glasgow","Abbotsinch"] },
  { iata:"BRS", name:"Bristol Airport", city:"Bristol", country:"UK", continent:"europe", lat:51.3827, lon:-2.7191, size:"small", difficulty:4, tags:["international","low-cost"] },
  { iata:"NCL", name:"Newcastle Airport", city:"Newcastle", country:"UK", continent:"europe", lat:54.8636, lon:-1.7074, size:"small", difficulty:4, tags:["international"] },
  { iata:"BFS", name:"Belfast International Airport", city:"Belfast", country:"UK", continent:"europe", lat:54.6575, lon:-6.2158, size:"small", difficulty:4, tags:["hub","international","military-history"] },
  { iata:"ABZ", name:"Aberdeen Airport", city:"Aberdeen", country:"UK", continent:"europe", lat:57.2019, lon:-2.1978, size:"small", difficulty:4, tags:["hub","international"] },
  { iata:"EMA", name:"East Midlands Airport", city:"Castle Donington", country:"UK", continent:"europe", lat:52.8311, lon:-1.3281, size:"small", difficulty:4, tags:["international","cargo"] },
  { iata:"LBA", name:"Leeds Bradford Airport", city:"Leeds", country:"UK", continent:"europe", lat:53.8659, lon:-1.6602, size:"small", difficulty:4, tags:["international"] },

  // Germany
  { iata:"STR", name:"Stuttgart Airport", city:"Stuttgart", country:"Germany", continent:"europe", lat:48.6899, lon:9.2220, size:"medium", difficulty:3, tags:["hub","international"], aliases:["Stuttgart","Echterdingen"] },
  { iata:"NUE", name:"Nuremberg Airport", city:"Nuremberg", country:"Germany", continent:"europe", lat:49.4987, lon:11.0669, size:"medium", difficulty:4, tags:["hub","international"], aliases:["Nuremberg","Nurnberg","Albrecht Durer"] },
  { iata:"HAJ", name:"Hannover Airport", city:"Hannover", country:"Germany", continent:"europe", lat:52.4611, lon:9.6850, size:"medium", difficulty:4, tags:["hub","international"], aliases:["Hannover","Hanover"] },
  { iata:"LEJ", name:"Leipzig/Halle Airport", city:"Leipzig", country:"Germany", continent:"europe", lat:51.4324, lon:12.2416, size:"medium", difficulty:4, tags:["hub","international","cargo","low-cost"], aliases:["Leipzig","Halle"] },
  { iata:"FMO", name:"Münster Osnabrück Airport", city:"Münster", country:"Germany", continent:"europe", lat:52.1346, lon:7.6848, size:"small", difficulty:5, tags:["international"] },
  { iata:"BRE", name:"Bremen Airport", city:"Bremen", country:"Germany", continent:"europe", lat:53.0475, lon:8.7867, size:"small", difficulty:4, tags:["hub","international"] },

  // France
  { iata:"TLS", name:"Toulouse-Blagnac Airport", city:"Toulouse", country:"France", continent:"europe", lat:43.6293, lon:1.3638, size:"medium", difficulty:3, tags:["hub","international"], aliases:["Toulouse","Blagnac"] },
  { iata:"BOD", name:"Bordeaux-Mérignac Airport", city:"Bordeaux", country:"France", continent:"europe", lat:44.8283, lon:-0.7156, size:"medium", difficulty:4, tags:["hub","international"], aliases:["Bordeaux","Merignac"] },
  { iata:"NTE", name:"Nantes Atlantique Airport", city:"Nantes", country:"France", continent:"europe", lat:47.1532, lon:-1.6111, size:"medium", difficulty:4, tags:["hub","international","coastal"], aliases:["Nantes","Notre-Dame-des-Landes"] },
  { iata:"LIL", name:"Lille-Lesquin Airport", city:"Lille", country:"France", continent:"europe", lat:50.5619, lon:3.0894, size:"small", difficulty:4, tags:["international"] },
  { iata:"SXB", name:"Strasbourg Airport", city:"Strasbourg", country:"France", continent:"europe", lat:48.5383, lon:7.6283, size:"small", difficulty:4, tags:["international"] },
  { iata:"MPL", name:"Montpellier Mediterranean Airport", city:"Montpellier", country:"France", continent:"europe", lat:43.5762, lon:3.9630, size:"small", difficulty:4, tags:["international","coastal"] },

  // Spain
  { iata:"AGP", name:"Málaga Airport", city:"Málaga", country:"Spain", continent:"europe", lat:36.6749, lon:-4.4991, size:"large", difficulty:2, tags:["hub","international","holiday","coastal"], aliases:["Malaga Airport","Costa del Sol Airport"] },
  { iata:"PMI", name:"Palma de Mallorca Airport", city:"Palma", country:"Spain", continent:"europe", lat:39.5517, lon:2.7388, size:"large", difficulty:2, tags:["hub","international","holiday","island","featured"], aliases:["Palma Airport","Mallorca","Son Sant Joan"] },
  { iata:"VLC", name:"Valencia Airport", city:"Valencia", country:"Spain", continent:"europe", lat:39.4893, lon:-0.4816, size:"medium", difficulty:3, tags:["hub","international","coastal"], aliases:["Valencia","Manises"] },
  { iata:"SVQ", name:"Seville Airport", city:"Seville", country:"Spain", continent:"europe", lat:37.4180, lon:-5.8931, size:"medium", difficulty:3, tags:["hub","international"], aliases:["Seville","San Pablo"] },
  { iata:"BIO", name:"Bilbao Airport", city:"Bilbao", country:"Spain", continent:"europe", lat:43.3011, lon:-2.9106, size:"medium", difficulty:4, tags:["hub","international","featured"], aliases:["Bilbao Airport","Loiu Airport"] },
  { iata:"ALC", name:"Alicante-Elche Airport", city:"Alicante", country:"Spain", continent:"europe", lat:38.2822, lon:-0.5582, size:"medium", difficulty:3, tags:["hub","international","holiday","coastal"], aliases:["Alicante","Elche"] },
  { iata:"TFN", name:"Tenerife Norte Airport", city:"Tenerife", country:"Spain", continent:"europe", lat:28.4827, lon:-16.3414, size:"small", difficulty:4, tags:["hub","international","island"] },
  { iata:"TFS", name:"Tenerife Sur Airport", city:"Tenerife", country:"Spain", continent:"europe", lat:28.0445, lon:-16.5725, size:"medium", difficulty:3, tags:["hub","international","holiday","island","featured"], aliases:["Tenerife South","Reina Sofia","South Tenerife Airport"] },
  { iata:"LPA", name:"Gran Canaria Airport", city:"Las Palmas", country:"Spain", continent:"europe", lat:27.9319, lon:-15.3866, size:"medium", difficulty:3, tags:["hub","international","holiday","island"], aliases:["Gran Canaria","Las Palmas","Gando"] },
  { iata:"ACE", name:"Lanzarote Airport", city:"Arrecife", country:"Spain", continent:"europe", lat:28.9455, lon:-13.6052, size:"small", difficulty:4, tags:["international","holiday","island"] },
  { iata:"FUE", name:"Fuerteventura Airport", city:"Puerto del Rosario", country:"Spain", continent:"europe", lat:28.4497, lon:-13.8638, size:"small", difficulty:4, tags:["international","holiday","island","coastal"] },
  { iata:"IBZ", name:"Ibiza Airport", city:"Ibiza", country:"Spain", continent:"europe", lat:38.8729, lon:1.3731, size:"small", difficulty:3, tags:["international","holiday","island","featured"], aliases:["Ibiza Airport","Eivissa"] },
  { iata:"SDR", name:"Santander Airport", city:"Santander", country:"Spain", continent:"europe", lat:43.4271, lon:-3.8200, size:"small", difficulty:5, tags:["international","coastal"] },

  // Italy
  { iata:"VCE", name:"Venice Marco Polo Airport", city:"Venice", country:"Italy", continent:"europe", lat:45.5053, lon:12.3519, size:"medium", difficulty:2, tags:["hub","international","featured","coastal"], aliases:["Venice Airport","Marco Polo Airport","Tessera"] },
  { iata:"NAP", name:"Naples International Airport", city:"Naples", country:"Italy", continent:"europe", lat:40.8860, lon:14.2908, size:"medium", difficulty:3, tags:["hub","international","coastal"], aliases:["Naples","Capodichino"] },
  { iata:"CTA", name:"Catania-Fontanarossa Airport", city:"Catania", country:"Italy", continent:"europe", lat:37.4668, lon:15.0664, size:"medium", difficulty:3, tags:["hub","international","island","coastal"], aliases:["Catania","Fontanarossa"] },
  { iata:"PMO", name:"Falcone-Borsellino Airport", city:"Palermo", country:"Italy", continent:"europe", lat:38.1759, lon:13.0910, size:"medium", difficulty:4, tags:["hub","international","island","coastal"], aliases:["Palermo","Punta Raisi"] },
  { iata:"BLQ", name:"Bologna Guglielmo Marconi Airport", city:"Bologna", country:"Italy", continent:"europe", lat:44.5354, lon:11.2887, size:"medium", difficulty:3, tags:["hub","international","featured"], aliases:["Bologna Airport","Marconi Airport","Borgo Panigale"] },
  { iata:"BGY", name:"Milan Bergamo Airport", city:"Bergamo", country:"Italy", continent:"europe", lat:45.6739, lon:9.7042, size:"medium", difficulty:3, tags:["international","low-cost","cargo"], aliases:["Bergamo","Orio al Serio"] },
  { iata:"CIA", name:"Rome Ciampino Airport", city:"Rome", country:"Italy", continent:"europe", lat:41.7994, lon:12.5949, size:"small", difficulty:4, tags:["international","low-cost","capital"] },
  { iata:"PSA", name:"Pisa Galileo Galilei Airport", city:"Pisa", country:"Italy", continent:"europe", lat:43.6839, lon:10.3927, size:"small", difficulty:4, tags:["international","low-cost"] },
  { iata:"BRI", name:"Bari Karol Wojtyla Airport", city:"Bari", country:"Italy", continent:"europe", lat:41.1389, lon:16.7606, size:"medium", difficulty:4, tags:["hub","international","coastal"], aliases:["Bari","Palese"] },
  { iata:"TRN", name:"Turin Airport", city:"Turin", country:"Italy", continent:"europe", lat:45.2008, lon:7.6497, size:"medium", difficulty:4, tags:["hub","international"], aliases:["Turin","Torino","Caselle"] },

  // Greece
  { iata:"SKG", name:"Thessaloniki Macedonia Airport", city:"Thessaloniki", country:"Greece", continent:"europe", lat:40.5197, lon:22.9709, size:"medium", difficulty:3, tags:["hub","international","coastal"], aliases:["Thessaloniki","Salonika","Macedonia Airport"] },
  { iata:"HER", name:"Heraklion International Airport", city:"Heraklion", country:"Greece", continent:"europe", lat:35.3397, lon:25.1803, size:"medium", difficulty:3, tags:["hub","international","holiday","island","coastal","featured"], aliases:["Heraklion Airport","Nikos Kazantzakis Airport","Crete Airport"] },
  { iata:"RHO", name:"Rhodes Diagoras Airport", city:"Rhodes", country:"Greece", continent:"europe", lat:36.4054, lon:28.0862, size:"medium", difficulty:3, tags:["hub","international","holiday","island","coastal"], aliases:["Rhodes","Diagoras"] },
  { iata:"CFU", name:"Corfu Airport", city:"Corfu", country:"Greece", continent:"europe", lat:39.6019, lon:19.9117, size:"small", difficulty:4, tags:["international","holiday","island","coastal"] },
  { iata:"CHQ", name:"Chania International Airport", city:"Chania", country:"Greece", continent:"europe", lat:35.5317, lon:24.1497, size:"small", difficulty:4, tags:["international","holiday","island"] },

  // Portugal
  { iata:"OPO", name:"Francisco Sá Carneiro Airport", city:"Porto", country:"Portugal", continent:"europe", lat:41.2481, lon:-8.6814, size:"medium", difficulty:2, tags:["hub","international","coastal","featured"], aliases:["Porto Airport","Sá Carneiro","Pedras Rubras"] },
  { iata:"FAO", name:"Faro Airport", city:"Faro", country:"Portugal", continent:"europe", lat:37.0144, lon:-7.9659, size:"medium", difficulty:3, tags:["hub","international","holiday","coastal"], aliases:["Faro","Algarve Airport"] },

  // Ireland
  { iata:"ORK", name:"Cork Airport", city:"Cork", country:"Ireland", continent:"europe", lat:51.8413, lon:-8.4911, size:"small", difficulty:4, tags:["hub","international","coastal"] },
  { iata:"SNN", name:"Shannon Airport", city:"Shannon", country:"Ireland", continent:"europe", lat:52.7020, lon:-8.9248, size:"small", difficulty:4, tags:["hub","international","featured"], aliases:["Shannon","Limerick Airport"] },

  // Netherlands
  { iata:"EIN", name:"Eindhoven Airport", city:"Eindhoven", country:"Netherlands", continent:"europe", lat:51.4501, lon:5.3746, size:"small", difficulty:4, tags:["international","low-cost","military-history"] },

  // Belgium
  { iata:"CRL", name:"Brussels South Charleroi Airport", city:"Charleroi", country:"Belgium", continent:"europe", lat:50.4592, lon:4.4538, size:"small", difficulty:4, tags:["international","low-cost"] },

  // Austria
  { iata:"INN", name:"Innsbruck Airport", city:"Innsbruck", country:"Austria", continent:"europe", lat:47.2602, lon:11.3440, size:"small", difficulty:4, tags:["international","mountain","difficult-approach","featured"], aliases:["Innsbruck Airport","Kranebitten"] },
  { iata:"SZG", name:"Salzburg Airport", city:"Salzburg", country:"Austria", continent:"europe", lat:47.7933, lon:13.0043, size:"small", difficulty:4, tags:["international","holiday"] },

  // Switzerland
  { iata:"BSL", name:"EuroAirport Basel-Mulhouse-Freiburg", city:"Basel", country:"Switzerland", continent:"europe", lat:47.5896, lon:7.5290, size:"medium", difficulty:4, tags:["hub","international"], aliases:["Basel","Mulhouse","Freiburg"] },

  // Scandinavia
  { iata:"GOT", name:"Gothenburg Landvetter Airport", city:"Gothenburg", country:"Sweden", continent:"europe", lat:57.6628, lon:12.2798, size:"medium", difficulty:3, tags:["hub","international","featured"], aliases:["Gothenburg Airport","Landvetter"] },
  { iata:"MMX", name:"Malmö Airport", city:"Malmö", country:"Sweden", continent:"europe", lat:55.5363, lon:13.3762, size:"small", difficulty:5, tags:["international"] },
  { iata:"BGO", name:"Bergen Airport Flesland", city:"Bergen", country:"Norway", continent:"europe", lat:60.2934, lon:5.2181, size:"medium", difficulty:4, tags:["hub","international","coastal","featured"], aliases:["Bergen Airport","Flesland"] },
  { iata:"TRD", name:"Trondheim Vaernes Airport", city:"Trondheim", country:"Norway", continent:"europe", lat:63.4578, lon:10.9259, size:"small", difficulty:4, tags:["hub","international"] },
  { iata:"SVG", name:"Stavanger Airport Sola", city:"Stavanger", country:"Norway", continent:"europe", lat:58.8767, lon:5.6378, size:"small", difficulty:4, tags:["hub","international","coastal","military-history"] },
  { iata:"TOS", name:"Tromsø Airport", city:"Tromsø", country:"Norway", continent:"europe", lat:69.6833, lon:18.9189, size:"small", difficulty:4, tags:["hub","international","featured","remote"], aliases:["Tromso Airport","Tromsø Langnes"] },
  { iata:"BLL", name:"Billund Airport", city:"Billund", country:"Denmark", continent:"europe", lat:55.7403, lon:9.1519, size:"small", difficulty:4, tags:["hub","international","featured"], aliases:["Billund Airport","Lego Airport"] },
  { iata:"AAL", name:"Aalborg Airport", city:"Aalborg", country:"Denmark", continent:"europe", lat:57.0927, lon:9.8492, size:"small", difficulty:5, tags:["hub","international"] },
  { iata:"TRF", name:"Sandefjord Torp Airport", city:"Sandefjord", country:"Norway", continent:"europe", lat:59.1868, lon:10.2586, size:"small", difficulty:5, tags:["international","low-cost"] },

  // Eastern Europe
  { iata:"BEG", name:"Belgrade Nikola Tesla Airport", city:"Belgrade", country:"Serbia", continent:"europe", lat:44.8184, lon:20.3091, size:"medium", difficulty:3, tags:["hub","international","capital"], aliases:["Belgrade","Nikola Tesla","Surcin"] },
  { iata:"ZAG", name:"Zagreb Franjo Tuđman Airport", city:"Zagreb", country:"Croatia", continent:"europe", lat:45.7429, lon:16.0688, size:"medium", difficulty:4, tags:["hub","international","capital"] },
  { iata:"DBV", name:"Dubrovnik Airport", city:"Dubrovnik", country:"Croatia", continent:"europe", lat:42.5614, lon:18.2682, size:"small", difficulty:3, tags:["international","holiday","coastal","featured"], aliases:["Dubrovnik Airport","Čilipi"] },
  { iata:"SPU", name:"Split Airport", city:"Split", country:"Croatia", continent:"europe", lat:43.5390, lon:16.2980, size:"small", difficulty:4, tags:["international","holiday","coastal"] },
  { iata:"TIA", name:"Tirana Nënë Tereza International Airport", city:"Tirana", country:"Albania", continent:"europe", lat:41.4147, lon:19.7206, size:"small", difficulty:4, tags:["hub","international","capital"] },
  { iata:"SKP", name:"Skopje Alexander the Great Airport", city:"Skopje", country:"North Macedonia", continent:"europe", lat:41.9614, lon:21.6214, size:"small", difficulty:5, tags:["hub","international","capital"] },
  { iata:"BTS", name:"Bratislava Airport", city:"Bratislava", country:"Slovakia", continent:"europe", lat:48.1702, lon:17.2127, size:"small", difficulty:4, tags:["hub","international","capital","featured"], aliases:["Bratislava Airport","M.R. Stefanik Airport"] },
  { iata:"KIV", name:"Chișinău International Airport", city:"Chisinau", country:"Moldova", continent:"europe", lat:46.9278, lon:28.9309, size:"small", difficulty:5, tags:["hub","international","capital"] },
  { iata:"MSQ", name:"Minsk National Airport", city:"Minsk", country:"Belarus", continent:"europe", lat:53.8825, lon:28.0325, size:"medium", difficulty:4, tags:["hub","international","capital"] },
  { iata:"WRO", name:"Wrocław Airport", city:"Wrocław", country:"Poland", continent:"europe", lat:51.1027, lon:16.8858, size:"medium", difficulty:4, tags:["hub","international"] },
  { iata:"KTW", name:"Katowice International Airport", city:"Katowice", country:"Poland", continent:"europe", lat:50.4743, lon:19.0800, size:"medium", difficulty:4, tags:["hub","international","low-cost"] },
  { iata:"GDN", name:"Gdańsk Lech Wałęsa Airport", city:"Gdańsk", country:"Poland", continent:"europe", lat:54.3776, lon:18.4662, size:"medium", difficulty:4, tags:["hub","international","coastal"] },
  { iata:"POZ", name:"Poznań-Ławica Airport", city:"Poznań", country:"Poland", continent:"europe", lat:52.4210, lon:16.8263, size:"small", difficulty:4, tags:["hub","international"] },
  { iata:"CLJ", name:"Cluj-Napoca International Airport", city:"Cluj-Napoca", country:"Romania", continent:"europe", lat:46.7852, lon:23.6862, size:"small", difficulty:5, tags:["hub","international"] },
  { iata:"TSR", name:"Timișoara Traian Vuia Airport", city:"Timișoara", country:"Romania", continent:"europe", lat:45.8099, lon:21.3378, size:"small", difficulty:5, tags:["hub","international"] },
  { iata:"BOJ", name:"Burgas Airport", city:"Burgas", country:"Bulgaria", continent:"europe", lat:42.5696, lon:27.5150, size:"medium", difficulty:4, tags:["hub","international","holiday","coastal"] },
  { iata:"VAR", name:"Varna Airport", city:"Varna", country:"Bulgaria", continent:"europe", lat:43.2322, lon:27.8251, size:"medium", difficulty:4, tags:["hub","international","holiday","coastal"] },
  { iata:"PRN", name:"Pristina Adem Jashari International Airport", city:"Pristina", country:"Kosovo", continent:"europe", lat:42.5728, lon:21.0358, size:"small", difficulty:5, tags:["hub","international","capital"] },
  { iata:"TGD", name:"Podgorica Airport", city:"Podgorica", country:"Montenegro", continent:"europe", lat:42.3597, lon:19.2519, size:"small", difficulty:5, tags:["hub","international","capital"] },
  { iata:"SJJ", name:"Sarajevo International Airport", city:"Sarajevo", country:"Bosnia & Herzegovina", continent:"europe", lat:43.8246, lon:18.3315, size:"small", difficulty:5, tags:["hub","international","capital"] },

  // Russia (additional)
  { iata:"VKO", name:"Moscow Vnukovo International Airport", city:"Moscow", country:"Russia", continent:"europe", lat:55.5915, lon:37.2815, size:"large", difficulty:2, tags:["hub","international","capital"], aliases:["Vnukovo","Moscow Vnukovo"] },
  { iata:"SVX", name:"Koltsovo Airport", city:"Ekaterinburg", country:"Russia", continent:"europe", lat:56.8431, lon:60.8028, size:"medium", difficulty:4, tags:["hub","international"] },
  { iata:"OVB", name:"Tolmachevo Airport", city:"Novosibirsk", country:"Russia", continent:"europe", lat:54.9703, lon:82.6508, size:"medium", difficulty:4, tags:["hub","international"] },
  { iata:"VVO", name:"Vladivostok International Airport", city:"Vladivostok", country:"Russia", continent:"europe", lat:43.3990, lon:132.1480, size:"medium", difficulty:4, tags:["hub","international","coastal"] },
  { iata:"KJA", name:"Krasnoyarsk Airport", city:"Krasnoyarsk", country:"Russia", continent:"europe", lat:56.1730, lon:92.4934, size:"medium", difficulty:4, tags:["hub","international"] },
  { iata:"UFA", name:"Ufa International Airport", city:"Ufa", country:"Russia", continent:"europe", lat:54.5572, lon:55.8744, size:"medium", difficulty:5, tags:["hub","international"] },

  // Turkey
  { iata:"ADB", name:"Izmir Adnan Menderes Airport", city:"Izmir", country:"Turkey", continent:"europe", lat:38.2924, lon:27.1570, size:"large", difficulty:2, tags:["hub","international","coastal"], aliases:["Izmir Airport","Adnan Menderes Airport"] },
  { iata:"AYT", name:"Antalya Airport", city:"Antalya", country:"Turkey", continent:"europe", lat:36.8987, lon:30.8005, size:"large", difficulty:2, tags:["hub","international","holiday","coastal","featured"], aliases:["Antalya","Turkish Riviera Airport"] },
  { iata:"ESB", name:"Ankara Esenboğa Airport", city:"Ankara", country:"Turkey", continent:"europe", lat:40.1281, lon:32.9951, size:"medium", difficulty:3, tags:["hub","international","capital"], aliases:["Ankara","Esenboga"] },
  { iata:"SAW", name:"Istanbul Sabiha Gökçen Airport", city:"Istanbul", country:"Turkey", continent:"europe", lat:40.8985, lon:29.3092, size:"large", difficulty:2, tags:["hub","international","low-cost"], aliases:["Sabiha Gokcen","Istanbul Asia Airport"] },
  { iata:"DLM", name:"Dalaman Airport", city:"Dalaman", country:"Turkey", continent:"europe", lat:36.7133, lon:28.7925, size:"medium", difficulty:4, tags:["hub","international","holiday","coastal"] },
  { iata:"BJV", name:"Bodrum Milas Airport", city:"Bodrum", country:"Turkey", continent:"europe", lat:37.2506, lon:27.6643, size:"small", difficulty:4, tags:["international","holiday","coastal"] },

  // Caucasus
  { iata:"TBS", name:"Tbilisi International Airport", city:"Tbilisi", country:"Georgia", continent:"europe", lat:41.6693, lon:44.9547, size:"medium", difficulty:4, tags:["hub","international","capital"] },
  { iata:"EVN", name:"Zvartnots International Airport", city:"Yerevan", country:"Armenia", continent:"europe", lat:40.1473, lon:44.3959, size:"medium", difficulty:4, tags:["hub","international","capital"] },
  { iata:"GYD", name:"Heydar Aliyev International Airport", city:"Baku", country:"Azerbaijan", continent:"europe", lat:40.4675, lon:50.0467, size:"medium", difficulty:3, tags:["hub","international","capital","featured","cargo"], aliases:["Baku Airport","Heydar Aliyev Airport","Baku International"] },

  // Kazakhstan
  { iata:"ALA", name:"Almaty International Airport", city:"Almaty", country:"Kazakhstan", continent:"asia", lat:43.3521, lon:77.0405, size:"medium", difficulty:4, tags:["hub","international"] },
  { iata:"NQZ", name:"Nursultan Nazarbayev International Airport", city:"Nur-Sultan", country:"Kazakhstan", continent:"asia", lat:51.0222, lon:71.4669, size:"medium", difficulty:4, tags:["hub","international","capital"] },

  // Other Europe
  { iata:"KEF", name:"Keflavík International Airport", city:"Reykjavík", country:"Iceland", continent:"europe", lat:63.9850, lon:-22.6056, size:"medium", difficulty:3, tags:["hub","international","capital","featured","remote","military-history"], aliases:["Reykjavik Airport","Keflavik","Iceland Airport"] },
  { iata:"MLA", name:"Malta International Airport", city:"Valletta", country:"Malta", continent:"europe", lat:35.8574, lon:14.4775, size:"medium", difficulty:3, tags:["hub","international","capital","island","coastal","holiday"], aliases:["Malta","Valletta","Luqa"] },
  { iata:"LCA", name:"Larnaca International Airport", city:"Larnaca", country:"Cyprus", continent:"europe", lat:34.8751, lon:33.6249, size:"medium", difficulty:3, tags:["hub","international","holiday","coastal"], aliases:["Larnaca","Cyprus"] },
  { iata:"PFO", name:"Paphos Airport", city:"Paphos", country:"Cyprus", continent:"europe", lat:34.7180, lon:32.4857, size:"small", difficulty:4, tags:["international","holiday","coastal"] },
  { iata:"LUX", name:"Luxembourg Airport", city:"Luxembourg City", country:"Luxembourg", continent:"europe", lat:49.6233, lon:6.2044, size:"small", difficulty:4, tags:["hub","international","capital","cargo"] },

  // ── ASIA EXPANSION ────────────────────────────────────────────────────────────

  // China (additional)
  { iata:"SZX", name:"Shenzhen Bao'an International", city:"Shenzhen", country:"China", continent:"asia", lat:22.6393, lon:113.8107, size:"large", difficulty:2, tags:["hub","international","cargo","coastal"], aliases:["Shenzhen Airport","Bao'an Airport"] },
  { iata:"CKG", name:"Chongqing Jiangbei International", city:"Chongqing", country:"China", continent:"asia", lat:29.7192, lon:106.6417, size:"large", difficulty:3, tags:["hub","international","cargo"], aliases:["Chongqing Airport","Jiangbei Airport"] },
  { iata:"XIY", name:"Xi'an Xianyang International", city:"Xi'an", country:"China", continent:"asia", lat:34.4471, lon:108.7516, size:"large", difficulty:3, tags:["hub","international"], aliases:["Xi'an Airport","Xianyang Airport"] },
  { iata:"HAK", name:"Haikou Meilan International", city:"Haikou", country:"China", continent:"asia", lat:19.9349, lon:110.4589, size:"medium", difficulty:4, tags:["hub","international","island","coastal"] },
  { iata:"SYX", name:"Sanya Phoenix International", city:"Sanya", country:"China", continent:"asia", lat:18.3029, lon:109.4122, size:"medium", difficulty:4, tags:["hub","international","island","coastal","holiday"] },
  { iata:"TAO", name:"Qingdao Jiaodong International", city:"Qingdao", country:"China", continent:"asia", lat:36.3621, lon:120.0816, size:"large", difficulty:3, tags:["hub","international","coastal"], aliases:["Qingdao Airport","Jiaodong Airport"] },
  { iata:"NKG", name:"Nanjing Lukou International", city:"Nanjing", country:"China", continent:"asia", lat:31.7420, lon:118.8620, size:"large", difficulty:3, tags:["hub","international"], aliases:["Nanjing Airport","Lukou Airport"] },
  { iata:"HRB", name:"Harbin Taiping International", city:"Harbin", country:"China", continent:"asia", lat:45.6234, lon:126.2503, size:"medium", difficulty:4, tags:["hub","international"] },
  { iata:"SHE", name:"Shenyang Taoxian International", city:"Shenyang", country:"China", continent:"asia", lat:41.6398, lon:123.4836, size:"medium", difficulty:4, tags:["hub","international"] },
  { iata:"URC", name:"Ürümqi Diwopu International", city:"Ürümqi", country:"China", continent:"asia", lat:43.9071, lon:87.4742, size:"medium", difficulty:4, tags:["hub","international","remote"] },
  { iata:"XMN", name:"Xiamen Gaoqi International", city:"Xiamen", country:"China", continent:"asia", lat:24.5440, lon:118.1277, size:"large", difficulty:3, tags:["hub","international","coastal"], aliases:["Xiamen Airport","Gaoqi Airport"] },
  { iata:"CSX", name:"Changsha Huanghua International", city:"Changsha", country:"China", continent:"asia", lat:28.1892, lon:113.2196, size:"large", difficulty:3, tags:["hub","international"], aliases:["Changsha Airport","Huanghua Airport"] },
  { iata:"WUH", name:"Wuhan Tianhe International", city:"Wuhan", country:"China", continent:"asia", lat:30.7838, lon:114.2081, size:"large", difficulty:3, tags:["hub","international"], aliases:["Wuhan Airport","Tianhe Airport"] },
  { iata:"NNG", name:"Nanning Wuxu International", city:"Nanning", country:"China", continent:"asia", lat:22.6083, lon:108.1723, size:"medium", difficulty:4, tags:["hub","international"] },
  { iata:"ZUH", name:"Zhuhai Jinwan Airport", city:"Zhuhai", country:"China", continent:"asia", lat:22.0064, lon:113.3760, size:"medium", difficulty:4, tags:["hub","international","coastal"] },
  { iata:"HET", name:"Hohhot Baita International", city:"Hohhot", country:"China", continent:"asia", lat:40.8514, lon:111.8240, size:"medium", difficulty:5, tags:["hub","international"] },
  { iata:"LHW", name:"Lanzhou Zhongchuan International", city:"Lanzhou", country:"China", continent:"asia", lat:36.5153, lon:103.6203, size:"medium", difficulty:5, tags:["hub","international"] },
  { iata:"SWA", name:"Jieyang Chaoshan International", city:"Shantou", country:"China", continent:"asia", lat:23.5520, lon:116.5033, size:"medium", difficulty:5, tags:["hub","international","coastal"] },

  // Japan (additional)
  { iata:"NGO", name:"Chubu Centrair International", city:"Nagoya", country:"Japan", continent:"asia", lat:34.8584, lon:136.8054, size:"large", difficulty:3, tags:["hub","international","coastal","featured","artificial-island"], aliases:["Centrair","Nagoya Airport"] },
  { iata:"OKA", name:"Naha Airport", city:"Okinawa", country:"Japan", continent:"asia", lat:26.1958, lon:127.6464, size:"medium", difficulty:3, tags:["hub","international","island","coastal"], aliases:["Okinawa Airport","Naha International"] },
  { iata:"CTS", name:"New Chitose Airport", city:"Sapporo", country:"Japan", continent:"asia", lat:42.7752, lon:141.6922, size:"large", difficulty:3, tags:["hub","international"], aliases:["New Chitose","Sapporo Airport"] },
  { iata:"FUK", name:"Fukuoka Airport", city:"Fukuoka", country:"Japan", continent:"asia", lat:33.5859, lon:130.4508, size:"large", difficulty:3, tags:["hub","international","coastal"], aliases:["Fukuoka Airport","Itazuke"] },
  { iata:"HIJ", name:"Hiroshima Airport", city:"Hiroshima", country:"Japan", continent:"asia", lat:34.4361, lon:132.9194, size:"medium", difficulty:4, tags:["hub","international","military-history"] },
  { iata:"SDJ", name:"Sendai Airport", city:"Sendai", country:"Japan", continent:"asia", lat:38.1397, lon:140.9170, size:"medium", difficulty:4, tags:["hub","international","coastal"] },

  // South Korea (additional)
  { iata:"PUS", name:"Gimhae International Airport", city:"Busan", country:"South Korea", continent:"asia", lat:35.1795, lon:128.9382, size:"large", difficulty:3, tags:["hub","international","coastal"], aliases:["Busan Airport","Gimhae Airport"] },
  { iata:"CJU", name:"Jeju International Airport", city:"Jeju", country:"South Korea", continent:"asia", lat:33.5113, lon:126.4930, size:"medium", difficulty:3, tags:["hub","international","island","coastal"], aliases:["Jeju Airport"] },
  { iata:"TAE", name:"Daegu International Airport", city:"Daegu", country:"South Korea", continent:"asia", lat:35.8947, lon:128.6589, size:"medium", difficulty:4, tags:["hub","international","military-history"] },

  // Southeast Asia
  { iata:"HKT", name:"Phuket International Airport", city:"Phuket", country:"Thailand", continent:"asia", lat:8.1132, lon:98.3169, size:"large", difficulty:2, tags:["hub","international","holiday","island","coastal","featured"], aliases:["Phuket","Phuket Airport"] },
  { iata:"CNX", name:"Chiang Mai International", city:"Chiang Mai", country:"Thailand", continent:"asia", lat:18.7668, lon:98.9627, size:"medium", difficulty:3, tags:["hub","international"], aliases:["Chiang Mai Airport"] },
  { iata:"USM", name:"Samui Airport", city:"Ko Samui", country:"Thailand", continent:"asia", lat:9.5478, lon:100.0629, size:"small", difficulty:4, tags:["international","holiday","island","coastal"] },
  { iata:"UPG", name:"Sultan Hasanuddin International", city:"Makassar", country:"Indonesia", continent:"asia", lat:-5.0616, lon:119.5540, size:"medium", difficulty:4, tags:["hub","international","coastal"] },
  { iata:"PNH", name:"Phnom Penh International", city:"Phnom Penh", country:"Cambodia", continent:"asia", lat:11.5466, lon:104.8441, size:"medium", difficulty:4, tags:["hub","international","capital"] },
  { iata:"REP", name:"Siem Reap International", city:"Siem Reap", country:"Cambodia", continent:"asia", lat:13.4107, lon:103.8129, size:"small", difficulty:4, tags:["international","holiday"] },
  { iata:"VTE", name:"Wattay International Airport", city:"Vientiane", country:"Laos", continent:"asia", lat:17.9883, lon:102.5633, size:"medium", difficulty:4, tags:["hub","international","capital"] },

  // India (additional)
  { iata:"TRV", name:"Trivandrum International Airport", city:"Thiruvananthapuram", country:"India", continent:"asia", lat:8.4821, lon:76.9201, size:"medium", difficulty:4, tags:["hub","international","coastal"] },
  { iata:"JAI", name:"Jaipur International Airport", city:"Jaipur", country:"India", continent:"asia", lat:26.8242, lon:75.8122, size:"medium", difficulty:4, tags:["hub","international"] },
  { iata:"GAU", name:"Lokpriya Gopinath Bordoloi International", city:"Guwahati", country:"India", continent:"asia", lat:26.1061, lon:91.5859, size:"medium", difficulty:4, tags:["hub","international"] },
  { iata:"IXC", name:"Chandigarh International Airport", city:"Chandigarh", country:"India", continent:"asia", lat:30.6735, lon:76.7885, size:"small", difficulty:4, tags:["international","military-history"] },
  { iata:"BBI", name:"Biju Patnaik International", city:"Bhubaneswar", country:"India", continent:"asia", lat:20.2444, lon:85.8178, size:"medium", difficulty:4, tags:["hub","international","coastal"] },
  { iata:"NAG", name:"Dr. Babasaheb Ambedkar International", city:"Nagpur", country:"India", continent:"asia", lat:21.0922, lon:79.0472, size:"medium", difficulty:4, tags:["hub","international"] },
  { iata:"VNS", name:"Lal Bahadur Shastri International", city:"Varanasi", country:"India", continent:"asia", lat:25.4524, lon:82.8593, size:"small", difficulty:4, tags:["international"] },
  { iata:"IXB", name:"Bagdogra Airport", city:"Siliguri", country:"India", continent:"asia", lat:26.6812, lon:88.3286, size:"small", difficulty:5, tags:["international","mountain"] },
  { iata:"TRZ", name:"Tiruchirappalli International", city:"Tiruchirappalli", country:"India", continent:"asia", lat:10.7654, lon:78.7097, size:"small", difficulty:5, tags:["international"] },
  { iata:"CJB", name:"Coimbatore International Airport", city:"Coimbatore", country:"India", continent:"asia", lat:11.0300, lon:77.0434, size:"small", difficulty:5, tags:["international"] },
  { iata:"IXM", name:"Madurai Airport", city:"Madurai", country:"India", continent:"asia", lat:9.8345, lon:78.0934, size:"small", difficulty:5, tags:["international"] },

  // Pakistan
  { iata:"KHI", name:"Karachi Jinnah International", city:"Karachi", country:"Pakistan", continent:"asia", lat:24.9065, lon:67.1608, size:"large", difficulty:3, tags:["hub","international","cargo","coastal"], aliases:["Karachi Airport","Jinnah Airport"] },
  { iata:"LHE", name:"Allama Iqbal International", city:"Lahore", country:"Pakistan", continent:"asia", lat:31.5216, lon:74.4036, size:"large", difficulty:3, tags:["hub","international"], aliases:["Lahore Airport","Iqbal Airport"] },
  { iata:"ISB", name:"Islamabad International Airport", city:"Islamabad", country:"Pakistan", continent:"asia", lat:33.5491, lon:72.8558, size:"large", difficulty:3, tags:["hub","international","capital"], aliases:["Islamabad Airport","New Islamabad Airport"] },

  // Central Asia
  { iata:"TAS", name:"Islam Karimov Tashkent International", city:"Tashkent", country:"Uzbekistan", continent:"asia", lat:41.2579, lon:69.2812, size:"medium", difficulty:4, tags:["hub","international","capital"] },
  { iata:"FRU", name:"Manas International Airport", city:"Bishkek", country:"Kyrgyzstan", continent:"asia", lat:43.0613, lon:74.4777, size:"medium", difficulty:5, tags:["hub","international","capital"] },
  { iata:"ASB", name:"Ashgabat International Airport", city:"Ashgabat", country:"Turkmenistan", continent:"asia", lat:37.9868, lon:58.3610, size:"medium", difficulty:5, tags:["hub","international","capital"] },
  { iata:"DYU", name:"Dushanbe International Airport", city:"Dushanbe", country:"Tajikistan", continent:"asia", lat:38.5433, lon:68.8250, size:"medium", difficulty:5, tags:["hub","international","capital"] },

  // Middle East / Other Asia
  { iata:"KBL", name:"Hamid Karzai International", city:"Kabul", country:"Afghanistan", continent:"asia", lat:34.5659, lon:69.2123, size:"medium", difficulty:5, tags:["hub","international","capital","difficult-approach","mountain"] },
  { iata:"IKA", name:"Imam Khomeini International", city:"Tehran", country:"Iran", continent:"asia", lat:35.4161, lon:51.1522, size:"large", difficulty:3, tags:["hub","international","capital","cargo"], aliases:["Tehran Airport","Imam Khomeini","Tehran International"] },
  { iata:"MHD", name:"Mashhad International Airport", city:"Mashhad", country:"Iran", continent:"asia", lat:36.2352, lon:59.6410, size:"medium", difficulty:4, tags:["hub","international"] },
  { iata:"SXR", name:"Sheikh ul-Alam International", city:"Srinagar", country:"India", continent:"asia", lat:34.0054, lon:74.7742, size:"small", difficulty:5, tags:["international","mountain","difficult-approach"] },

  // ── NORTH AMERICA EXPANSION ────────────────────────────────────────────────

  // Canada (additional)
  { iata:"YOW", name:"Ottawa Macdonald-Cartier International", city:"Ottawa", country:"Canada", continent:"north_america", lat:45.3225, lon:-75.6692, size:"medium", difficulty:3, tags:["hub","international","capital"], aliases:["Ottawa Airport","Macdonald-Cartier","Ottawa Intl"] },
  { iata:"YHZ", name:"Halifax Stanfield International", city:"Halifax", country:"Canada", continent:"north_america", lat:44.8808, lon:-63.5086, size:"medium", difficulty:4, tags:["hub","international","coastal"] },
  { iata:"YWG", name:"Winnipeg James Armstrong Richardson International", city:"Winnipeg", country:"Canada", continent:"north_america", lat:49.9100, lon:-97.2398, size:"medium", difficulty:4, tags:["hub","international"] },

  // Mexico
  { iata:"CUN", name:"Cancún International Airport", city:"Cancún", country:"Mexico", continent:"north_america", lat:21.0365, lon:-86.8771, size:"large", difficulty:2, tags:["hub","international","holiday","coastal","featured"], aliases:["Cancun Airport","Cancun","MMUN"] },
  { iata:"SJD", name:"Los Cabos International Airport", city:"Los Cabos", country:"Mexico", continent:"north_america", lat:23.1518, lon:-109.7211, size:"medium", difficulty:4, tags:["hub","international","holiday","coastal"] },
  { iata:"PVR", name:"Licenciado Gustavo Díaz Ordaz International", city:"Puerto Vallarta", country:"Mexico", continent:"north_america", lat:20.6801, lon:-105.2544, size:"medium", difficulty:4, tags:["hub","international","holiday","coastal"] },
  { iata:"HMO", name:"General Ignacio Pesqueira García International", city:"Hermosillo", country:"Mexico", continent:"north_america", lat:29.0959, lon:-111.0479, size:"small", difficulty:5, tags:["hub","international"] },

  // Caribbean
  { iata:"SXM", name:"Princess Juliana International", city:"Sint Maarten", country:"Sint Maarten", continent:"north_america", lat:18.0410, lon:-63.1089, size:"medium", difficulty:3, tags:["hub","international","island","coastal","featured","difficult-approach"], aliases:["Maho Beach Airport","St Maarten","Princess Juliana"] },
  { iata:"SDQ", name:"Las Américas International Airport", city:"Santo Domingo", country:"Dominican Republic", continent:"north_america", lat:18.4297, lon:-69.6689, size:"large", difficulty:3, tags:["hub","international","capital","coastal"], aliases:["Santo Domingo Airport","Las Americas Airport"] },
  { iata:"PUJ", name:"Punta Cana International Airport", city:"Punta Cana", country:"Dominican Republic", continent:"north_america", lat:18.5674, lon:-68.3634, size:"large", difficulty:3, tags:["hub","international","holiday","coastal"], aliases:["Punta Cana Airport","PUJ Airport"] },
  { iata:"GCM", name:"Owen Roberts International Airport", city:"George Town", country:"Cayman Islands", continent:"north_america", lat:19.2928, lon:-81.3577, size:"small", difficulty:4, tags:["international","island","coastal","holiday"] },
  { iata:"BGI", name:"Grantley Adams International Airport", city:"Bridgetown", country:"Barbados", continent:"north_america", lat:13.0746, lon:-59.4925, size:"medium", difficulty:4, tags:["hub","international","island","coastal","capital"] },
  { iata:"POS", name:"Piarco International Airport", city:"Port of Spain", country:"Trinidad and Tobago", continent:"north_america", lat:10.5954, lon:-61.3372, size:"medium", difficulty:4, tags:["hub","international","coastal","capital"] },
  { iata:"CUR", name:"Hato International Airport", city:"Willemstad", country:"Curaçao", continent:"north_america", lat:12.1889, lon:-68.9598, size:"medium", difficulty:4, tags:["hub","international","island","coastal","capital"] },

  // Central America
  { iata:"TGU", name:"Toncontín International Airport", city:"Tegucigalpa", country:"Honduras", continent:"north_america", lat:14.0608, lon:-87.2172, size:"small", difficulty:5, tags:["hub","international","capital","difficult-approach","mountain","featured"], aliases:["Tegucigalpa Airport","Toncontin","Tegucigalpa"] },
  { iata:"SAP", name:"Ramón Villeda Morales International", city:"San Pedro Sula", country:"Honduras", continent:"north_america", lat:15.4526, lon:-87.9236, size:"medium", difficulty:5, tags:["hub","international"] },
  { iata:"MGA", name:"Augusto C. Sandino International", city:"Managua", country:"Nicaragua", continent:"north_america", lat:12.1415, lon:-86.1682, size:"medium", difficulty:5, tags:["hub","international","capital"] },

  // ── SOUTH AMERICA EXPANSION ────────────────────────────────────────────────

  // Brazil (additional)
  { iata:"BEL", name:"Val de Cans International Airport", city:"Belém", country:"Brazil", continent:"south_america", lat:-1.3792, lon:-48.4763, size:"medium", difficulty:4, tags:["hub","international","coastal"] },
  { iata:"MAO", name:"Eduardo Gomes International Airport", city:"Manaus", country:"Brazil", continent:"south_america", lat:-3.0386, lon:-60.0497, size:"medium", difficulty:3, tags:["hub","international","remote"], aliases:["Manaus Airport","Eduardo Gomes"] },
  { iata:"POA", name:"Salgado Filho International Airport", city:"Porto Alegre", country:"Brazil", continent:"south_america", lat:-29.9944, lon:-51.1714, size:"large", difficulty:3, tags:["hub","international","coastal"], aliases:["Porto Alegre Airport","Salgado Filho"] },
  { iata:"FLN", name:"Hercílio Luz International Airport", city:"Florianópolis", country:"Brazil", continent:"south_america", lat:-27.6703, lon:-48.5523, size:"medium", difficulty:4, tags:["hub","international","island","coastal"] },
  { iata:"CWB", name:"Afonso Pena International Airport", city:"Curitiba", country:"Brazil", continent:"south_america", lat:-25.5285, lon:-49.1758, size:"large", difficulty:3, tags:["hub","international"], aliases:["Curitiba Airport","Afonso Pena"] },
  { iata:"NAT", name:"Governador Aluízio Alves International", city:"Natal", country:"Brazil", continent:"south_america", lat:-5.9114, lon:-35.2493, size:"medium", difficulty:4, tags:["hub","international","coastal"] },
  { iata:"MCZ", name:"Zumbi dos Palmares International", city:"Maceió", country:"Brazil", continent:"south_america", lat:-9.5109, lon:-35.7917, size:"medium", difficulty:5, tags:["hub","international","coastal"] },

  // Argentina (additional)
  { iata:"MDZ", name:"Governor Francisco Gabrielli International", city:"Mendoza", country:"Argentina", continent:"south_america", lat:-32.8317, lon:-68.7929, size:"medium", difficulty:4, tags:["hub","international","mountain"] },
  { iata:"COR", name:"Ingeniero Ambrosio Taravella International", city:"Córdoba", country:"Argentina", continent:"south_america", lat:-31.3236, lon:-64.2080, size:"medium", difficulty:4, tags:["hub","international"] },
  { iata:"BRC", name:"San Carlos de Bariloche International", city:"Bariloche", country:"Argentina", continent:"south_america", lat:-41.1512, lon:-71.1575, size:"small", difficulty:4, tags:["hub","international","mountain","holiday"] },
  { iata:"USH", name:"Malvinas Argentinas International", city:"Ushuaia", country:"Argentina", continent:"south_america", lat:-54.8433, lon:-68.2958, size:"small", difficulty:4, tags:["hub","international","remote","featured","difficult-approach"], aliases:["Ushuaia Airport","End of the World Airport","Malvinas Argentinas"] },
  { iata:"SLA", name:"Martín Miguel de Güemes International", city:"Salta", country:"Argentina", continent:"south_america", lat:-24.8560, lon:-65.4867, size:"small", difficulty:5, tags:["hub","international","mountain"] },
  { iata:"NQN", name:"Presidente Perón International", city:"Neuquén", country:"Argentina", continent:"south_america", lat:-38.9490, lon:-68.1557, size:"small", difficulty:5, tags:["hub","international"] },

  // Bolivia
  { iata:"LPB", name:"El Alto International Airport", city:"La Paz", country:"Bolivia", continent:"south_america", lat:-16.5133, lon:-68.1922, size:"medium", difficulty:4, tags:["hub","international","capital","mountain","difficult-approach","featured"], aliases:["El Alto","La Paz Airport","SLLP"] },
  { iata:"VVI", name:"Viru Viru International Airport", city:"Santa Cruz", country:"Bolivia", continent:"south_america", lat:-17.6448, lon:-63.1354, size:"medium", difficulty:4, tags:["hub","international"] },
  { iata:"CBB", name:"Jorge Wilstermann International", city:"Cochabamba", country:"Bolivia", continent:"south_america", lat:-17.4211, lon:-66.1771, size:"small", difficulty:5, tags:["hub","international","mountain"] },

  // Peru (additional)
  { iata:"CUZ", name:"Alejandro Velasco Astete International", city:"Cusco", country:"Peru", continent:"south_america", lat:-13.5357, lon:-71.9388, size:"medium", difficulty:4, tags:["hub","international","mountain","difficult-approach","featured"], aliases:["Cusco Airport","Velasco Astete","Machu Picchu Airport"] },
  { iata:"AQP", name:"Rodríguez Ballón International Airport", city:"Arequipa", country:"Peru", continent:"south_america", lat:-16.3411, lon:-71.5830, size:"medium", difficulty:4, tags:["hub","international","mountain"] },

  // Colombia (additional)
  { iata:"CTG", name:"Rafael Núñez International Airport", city:"Cartagena", country:"Colombia", continent:"south_america", lat:10.4424, lon:-75.5130, size:"medium", difficulty:4, tags:["hub","international","coastal","holiday"] },

  // Other South America
  { iata:"ASU", name:"Silvio Pettirossi International Airport", city:"Asunción", country:"Paraguay", continent:"south_america", lat:-25.2400, lon:-57.5191, size:"medium", difficulty:4, tags:["hub","international","capital"] },
  { iata:"GPS", name:"Seymour Airport", city:"Baltra", country:"Ecuador", continent:"south_america", lat:-0.4538, lon:-90.2659, size:"small", difficulty:4, tags:["international","island","remote","featured"], aliases:["Baltra Airport","Galapagos Airport","Seymour Airport"] },

  // ── AFRICA EXPANSION ──────────────────────────────────────────────────────

  // North Africa (additional)
  { iata:"KRT", name:"Khartoum International Airport", city:"Khartoum", country:"Sudan", continent:"africa", lat:15.5895, lon:32.5532, size:"medium", difficulty:5, tags:["hub","international","capital"] },

  // Morocco (additional)
  { iata:"RAK", name:"Marrakech Menara Airport", city:"Marrakech", country:"Morocco", continent:"africa", lat:31.6069, lon:-8.0363, size:"medium", difficulty:3, tags:["hub","international","holiday"], aliases:["Marrakech","Marrakesh","Menara"] },
  { iata:"AGA", name:"Al Massira Airport", city:"Agadir", country:"Morocco", continent:"africa", lat:30.3250, lon:-9.4130, size:"medium", difficulty:4, tags:["hub","international","holiday","coastal"] },
  { iata:"FEZ", name:"Fès-Saïss Airport", city:"Fès", country:"Morocco", continent:"africa", lat:33.9273, lon:-4.9779, size:"small", difficulty:5, tags:["international"] },

  // West Africa (additional)
  { iata:"BKO", name:"Modibo Keïta International Airport", city:"Bamako", country:"Mali", continent:"africa", lat:12.5335, lon:-7.9499, size:"medium", difficulty:5, tags:["hub","international","capital"] },
  { iata:"OUA", name:"Ouagadougou Airport", city:"Ouagadougou", country:"Burkina Faso", continent:"africa", lat:12.3532, lon:-1.5124, size:"medium", difficulty:5, tags:["hub","international","capital"] },
  { iata:"LFW", name:"Lomé-Tokoin International Airport", city:"Lomé", country:"Togo", continent:"africa", lat:6.1657, lon:1.2545, size:"medium", difficulty:5, tags:["hub","international","capital","coastal"] },

  // Nigeria (additional)
  { iata:"ABV", name:"Nnamdi Azikiwe International Airport", city:"Abuja", country:"Nigeria", continent:"africa", lat:9.0068, lon:7.2632, size:"large", difficulty:3, tags:["hub","international","capital"], aliases:["Abuja","Abuja International","Nnamdi Azikiwe"] },

  // East Africa (additional)
  { iata:"MBA", name:"Moi International Airport", city:"Mombasa", country:"Kenya", continent:"africa", lat:-4.0348, lon:39.5942, size:"medium", difficulty:4, tags:["hub","international","coastal","holiday"] },
  { iata:"DAR", name:"Julius Nyerere International Airport", city:"Dar es Salaam", country:"Tanzania", continent:"africa", lat:-6.8781, lon:39.2026, size:"medium", difficulty:3, tags:["hub","international","coastal"], aliases:["Dar es Salaam","Julius Nyerere"] },
  { iata:"ZNZ", name:"Abeid Amani Karume International", city:"Zanzibar", country:"Tanzania", continent:"africa", lat:-6.2220, lon:39.2249, size:"medium", difficulty:4, tags:["hub","international","island","coastal","holiday"] },
  { iata:"KGL", name:"Kigali International Airport", city:"Kigali", country:"Rwanda", continent:"africa", lat:-1.9686, lon:30.1395, size:"medium", difficulty:4, tags:["hub","international","capital"] },
  { iata:"EBB", name:"Entebbe International Airport", city:"Kampala", country:"Uganda", continent:"africa", lat:0.0424, lon:32.4433, size:"medium", difficulty:4, tags:["hub","international","capital"] },

  // Southern Africa (additional)
  { iata:"DUR", name:"King Shaka International Airport", city:"Durban", country:"South Africa", continent:"africa", lat:-29.6144, lon:31.1197, size:"large", difficulty:3, tags:["hub","international","coastal"], aliases:["Durban","King Shaka"] },
  { iata:"PLZ", name:"Chief Dawid Stuurman International", city:"Port Elizabeth", country:"South Africa", continent:"africa", lat:-33.9849, lon:25.6173, size:"medium", difficulty:4, tags:["hub","international","coastal"] },
  { iata:"LUN", name:"Kenneth Kaunda International Airport", city:"Lusaka", country:"Zambia", continent:"africa", lat:-15.3308, lon:28.4526, size:"medium", difficulty:4, tags:["hub","international","capital"] },
  { iata:"HRE", name:"Robert Gabriel Mugabe International", city:"Harare", country:"Zimbabwe", continent:"africa", lat:-17.9318, lon:31.0928, size:"medium", difficulty:4, tags:["hub","international","capital"] },
  { iata:"MRU", name:"Sir Seewoosagur Ramgoolam International", city:"Port Louis", country:"Mauritius", continent:"africa", lat:-20.4302, lon:57.6836, size:"medium", difficulty:3, tags:["hub","international","island","coastal","holiday","remote","featured"], aliases:["Mauritius","Port Louis","Plaisance"] },
  { iata:"SEZ", name:"Seychelles International Airport", city:"Victoria", country:"Seychelles", continent:"africa", lat:-4.6743, lon:55.5218, size:"medium", difficulty:4, tags:["hub","international","island","coastal","holiday","remote","capital"] },

  // Central Africa
  { iata:"DLA", name:"Douala International Airport", city:"Douala", country:"Cameroon", continent:"africa", lat:4.0061, lon:9.7195, size:"medium", difficulty:5, tags:["hub","international","coastal","cargo"] },
  { iata:"NSI", name:"Yaoundé Nsimalen International", city:"Yaoundé", country:"Cameroon", continent:"africa", lat:3.7226, lon:11.5533, size:"medium", difficulty:5, tags:["hub","international","capital"] },
  { iata:"FIH", name:"N'djili International Airport", city:"Kinshasa", country:"DR Congo", continent:"africa", lat:-4.3858, lon:15.4446, size:"medium", difficulty:5, tags:["hub","international","capital"] },
  { iata:"LBV", name:"Léon-M'ba International Airport", city:"Libreville", country:"Gabon", continent:"africa", lat:0.4586, lon:9.4123, size:"medium", difficulty:5, tags:["hub","international","capital","coastal"] },

  // ── OCEANIA EXPANSION ─────────────────────────────────────────────────────

  // Australia (additional)
  { iata:"BNE", name:"Brisbane Airport", city:"Brisbane", country:"Australia", continent:"oceania", lat:-27.3842, lon:153.1175, size:"large", difficulty:2, tags:["hub","international","coastal","featured"], aliases:["Brisbane","Brisbane Intl"] },
  { iata:"PER", name:"Perth Airport", city:"Perth", country:"Australia", continent:"oceania", lat:-31.9403, lon:115.9669, size:"large", difficulty:2, tags:["hub","international","coastal"], aliases:["Perth","Perth Intl"] },
  { iata:"ADL", name:"Adelaide Airport", city:"Adelaide", country:"Australia", continent:"oceania", lat:-34.9457, lon:138.5303, size:"large", difficulty:3, tags:["hub","international","coastal"], aliases:["Adelaide","Adelaide Intl"] },
  { iata:"OOL", name:"Gold Coast Airport", city:"Gold Coast", country:"Australia", continent:"oceania", lat:-28.1644, lon:153.5043, size:"medium", difficulty:4, tags:["hub","international","holiday","coastal"] },
  { iata:"CNS", name:"Cairns Airport", city:"Cairns", country:"Australia", continent:"oceania", lat:-16.8858, lon:145.7555, size:"medium", difficulty:4, tags:["hub","international","holiday","coastal"] },
  { iata:"HBA", name:"Hobart International Airport", city:"Hobart", country:"Australia", continent:"oceania", lat:-42.8361, lon:147.5103, size:"medium", difficulty:5, tags:["hub","international","coastal"] },
  { iata:"DRW", name:"Darwin International Airport", city:"Darwin", country:"Australia", continent:"oceania", lat:-12.4150, lon:130.8765, size:"medium", difficulty:4, tags:["hub","international","capital","coastal","military-history"] },
  { iata:"TSV", name:"Townsville Airport", city:"Townsville", country:"Australia", continent:"oceania", lat:-19.2525, lon:146.7652, size:"small", difficulty:5, tags:["hub","domestic","coastal","military-history"] },
  { iata:"MKY", name:"Mackay Airport", city:"Mackay", country:"Australia", continent:"oceania", lat:-21.1717, lon:149.1797, size:"small", difficulty:5, tags:["hub","domestic","coastal"] },
  { iata:"ROK", name:"Rockhampton Airport", city:"Rockhampton", country:"Australia", continent:"oceania", lat:-23.3819, lon:150.4753, size:"small", difficulty:5, tags:["hub","domestic","coastal"] },

  // New Zealand
  { iata:"AKL", name:"Auckland Airport", city:"Auckland", country:"New Zealand", continent:"oceania", lat:-37.0082, lon:174.7917, size:"large", difficulty:2, tags:["hub","international","coastal","featured"], aliases:["Auckland","Auckland Intl"] },
  { iata:"CHC", name:"Christchurch International Airport", city:"Christchurch", country:"New Zealand", continent:"oceania", lat:-43.4894, lon:172.5322, size:"medium", difficulty:3, tags:["hub","international","coastal"], aliases:["Christchurch","Christchurch Intl"] },
  { iata:"WLG", name:"Wellington International Airport", city:"Wellington", country:"New Zealand", continent:"oceania", lat:-41.3272, lon:174.8050, size:"medium", difficulty:3, tags:["hub","international","capital","coastal","difficult-approach"], aliases:["Wellington","Wellington Intl"] },
  { iata:"ZQN", name:"Queenstown Airport", city:"Queenstown", country:"New Zealand", continent:"oceania", lat:-45.0211, lon:168.7392, size:"small", difficulty:4, tags:["hub","international","mountain","difficult-approach","holiday","featured"], aliases:["Queenstown","Queenstown Intl"] },
  { iata:"DUD", name:"Dunedin Airport", city:"Dunedin", country:"New Zealand", continent:"oceania", lat:-45.9281, lon:170.1983, size:"small", difficulty:5, tags:["hub","international","coastal"] },

  // Pacific Islands
  { iata:"GUM", name:"Antonio B. Won Pat International", city:"Hagåtña", country:"Guam", continent:"oceania", lat:13.4834, lon:144.7960, size:"medium", difficulty:3, tags:["hub","international","island","coastal","capital","military-history","remote"], aliases:["Guam","Won Pat","Hagatna"] },
  { iata:"PPT", name:"Faa'a International Airport", city:"Papeete", country:"French Polynesia", continent:"oceania", lat:-17.5534, lon:-149.6063, size:"medium", difficulty:4, tags:["hub","international","island","coastal","capital","remote","holiday"] },
  { iata:"NAN", name:"Nadi International Airport", city:"Nadi", country:"Fiji", continent:"oceania", lat:-17.7554, lon:177.4432, size:"medium", difficulty:3, tags:["hub","international","island","coastal","holiday","remote","featured"], aliases:["Nadi","Fiji","Nadi Intl"] },
  { iata:"APW", name:"Faleolo International Airport", city:"Apia", country:"Samoa", continent:"oceania", lat:-13.8300, lon:-172.0081, size:"small", difficulty:4, tags:["hub","international","island","coastal","capital","remote"] },
  { iata:"TBU", name:"Fua'amotu International Airport", city:"Nukualofa", country:"Tonga", continent:"oceania", lat:-21.2412, lon:-175.1497, size:"small", difficulty:5, tags:["hub","international","island","coastal","capital","remote"] },
  { iata:"HIR", name:"Honiara International Airport", city:"Honiara", country:"Solomon Islands", continent:"oceania", lat:-9.4280, lon:160.0546, size:"small", difficulty:5, tags:["hub","international","island","coastal","capital","remote","military-history"] },
  { iata:"INU", name:"Nauru International Airport", city:"Yaren", country:"Nauru", continent:"oceania", lat:-0.5478, lon:166.9192, size:"small", difficulty:5, tags:["hub","international","island","remote","coastal"] },
];
