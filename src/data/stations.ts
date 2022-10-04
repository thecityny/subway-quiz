export type Borough = "M" | "Bx" | "Bk" | "Q" | "SI";

export const MTA_BOROUGHS: Borough[] = ["M", "Bx", "Bk", "Q", "SI"];

export const getFullBoroughName = (b: Borough) =>
  b === "M"
    ? "Manhattan"
    : b === "Bx"
    ? "Bronx"
    : b === "Bk"
    ? "Brooklyn"
    : b === "Q"
    ? "Queens"
    : b === "SI"
    ? "Staten Island"
    : "";

export type Station = {
  stationId: number;
  name: string;
  lines: string;
  borough: string;
};

export const MTA_LINES: string[] = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "A",
  "C",
  "E",
  "G",
  "B",
  "D",
  "F",
  "M",
  "J",
  "Z",
  "N",
  "Q",
  "R",
  "W",
  "L",
  "S",
  "SIR",
];

export const MTA_STATIONS: Station[] = [
  { stationId: 1, name: "Astoria-Ditmars Blvd", lines: "N W", borough: "Q" },
  { stationId: 2, name: "Astoria Blvd", lines: "N W", borough: "Q" },
  { stationId: 3, name: "30 Av", lines: "N W", borough: "Q" },
  { stationId: 4, name: "Broadway", lines: "N W", borough: "Q" },
  { stationId: 5, name: "36 Av", lines: "N W", borough: "Q" },
  { stationId: 6, name: "39 Av-Dutch Kills", lines: "N W", borough: "Q" },
  { stationId: 8, name: "5 Av/59 St", lines: "N W R", borough: "M" },
  { stationId: 9, name: "57 St-7 Av", lines: "N Q R W", borough: "M" },
  { stationId: 10, name: "49 St", lines: "N R W", borough: "M" },
  { stationId: 13, name: "28 St", lines: "R W", borough: "M" },
  { stationId: 14, name: "23 St", lines: "R W", borough: "M" },
  { stationId: 16, name: "8 St-NYU", lines: "R W", borough: "M" },
  { stationId: 17, name: "Prince St", lines: "R W", borough: "M" },
  { stationId: 20, name: "City Hall", lines: "R W", borough: "M" },
  { stationId: 22, name: "Rector St", lines: "R W", borough: "M" },
  { stationId: 26, name: "DeKalb Av", lines: "B Q R", borough: "Bk" },
  { stationId: 28, name: "Union St", lines: "R", borough: "Bk" },
  { stationId: 30, name: "Prospect Av", lines: "R", borough: "Bk" },
  { stationId: 31, name: "25 St", lines: "R", borough: "Bk" },
  { stationId: 32, name: "36 St", lines: "D N R", borough: "Bk" },
  { stationId: 33, name: "45 St", lines: "R", borough: "Bk" },
  { stationId: 34, name: "53 St", lines: "R", borough: "Bk" },
  { stationId: 35, name: "59 St", lines: "N R", borough: "Bk" },
  { stationId: 36, name: "Bay Ridge Av", lines: "R", borough: "Bk" },
  { stationId: 37, name: "77 St", lines: "R", borough: "Bk" },
  { stationId: 38, name: "86 St", lines: "R", borough: "Bk" },
  { stationId: 39, name: "Bay Ridge-95 St", lines: "R", borough: "Bk" },
  { stationId: 41, name: "7 Av", lines: "B Q", borough: "Bk" },
  { stationId: 42, name: "Prospect Park", lines: "B Q S", borough: "Bk" },
  { stationId: 43, name: "Parkside Av", lines: "B Q", borough: "Bk" },
  { stationId: 44, name: "Church Av", lines: "B Q", borough: "Bk" },
  { stationId: 45, name: "Beverley Rd", lines: "Q", borough: "Bk" },
  { stationId: 46, name: "Cortelyou Rd", lines: "Q", borough: "Bk" },
  { stationId: 47, name: "Newkirk Plaza", lines: "B Q", borough: "Bk" },
  { stationId: 48, name: "Avenue H", lines: "Q", borough: "Bk" },
  { stationId: 49, name: "Avenue J", lines: "Q", borough: "Bk" },
  { stationId: 50, name: "Avenue M", lines: "Q", borough: "Bk" },
  { stationId: 51, name: "Kings Hwy", lines: "B Q", borough: "Bk" },
  { stationId: 52, name: "Avenue U", lines: "Q", borough: "Bk" },
  { stationId: 53, name: "Neck Rd", lines: "Q", borough: "Bk" },
  { stationId: 54, name: "Sheepshead Bay", lines: "B Q", borough: "Bk" },
  { stationId: 55, name: "Brighton Beach", lines: "B Q", borough: "Bk" },
  { stationId: 56, name: "Ocean Pkwy", lines: "Q", borough: "Bk" },
  { stationId: 57, name: "W 8 St-NY Aquarium", lines: "F Q", borough: "Bk" },
  {
    stationId: 58,
    name: "Coney Island-Stillwell Av",
    lines: "D F N Q",
    borough: "Bk",
  },
  { stationId: 59, name: "9 Av", lines: "D", borough: "Bk" },
  { stationId: 60, name: "Fort Hamilton Pkwy", lines: "D", borough: "Bk" },
  { stationId: 61, name: "50 St", lines: "D", borough: "Bk" },
  { stationId: 62, name: "55 St", lines: "D", borough: "Bk" },
  { stationId: 64, name: "71 St", lines: "D", borough: "Bk" },
  { stationId: 65, name: "79 St", lines: "D", borough: "Bk" },
  { stationId: 66, name: "18 Av", lines: "D", borough: "Bk" },
  { stationId: 67, name: "20 Av", lines: "D", borough: "Bk" },
  { stationId: 68, name: "Bay Pkwy", lines: "D", borough: "Bk" },
  { stationId: 69, name: "25 Av", lines: "D", borough: "Bk" },
  { stationId: 70, name: "Bay 50 St", lines: "D", borough: "Bk" },
  { stationId: 71, name: "8 Av", lines: "N", borough: "Bk" },
  { stationId: 72, name: "Fort Hamilton Pkwy", lines: "N", borough: "Bk" },
  { stationId: 74, name: "18 Av", lines: "N", borough: "Bk" },
  { stationId: 75, name: "20 Av", lines: "N", borough: "Bk" },
  { stationId: 76, name: "Bay Pkwy", lines: "N", borough: "Bk" },
  { stationId: 77, name: "Kings Hwy", lines: "N", borough: "Bk" },
  { stationId: 78, name: "Avenue U", lines: "N", borough: "Bk" },
  { stationId: 79, name: "86 St", lines: "N", borough: "Bk" },
  { stationId: 80, name: "121 St", lines: "J Z", borough: "Q" },
  { stationId: 81, name: "111 St", lines: "J", borough: "Q" },
  { stationId: 82, name: "104 St", lines: "J Z", borough: "Q" },
  { stationId: 83, name: "Woodhaven Blvd", lines: "J Z", borough: "Q" },
  { stationId: 84, name: "85 St-Forest Pkwy", lines: "J", borough: "Q" },
  { stationId: 85, name: "75 St-Elderts Ln", lines: "J Z", borough: "Q" },
  { stationId: 86, name: "Cypress Hills", lines: "J", borough: "Bk" },
  { stationId: 87, name: "Crescent St", lines: "J Z", borough: "Bk" },
  { stationId: 88, name: "Norwood Av", lines: "J Z", borough: "Bk" },
  { stationId: 89, name: "Cleveland St", lines: "J", borough: "Bk" },
  { stationId: 90, name: "Van Siclen Av", lines: "J Z", borough: "Bk" },
  { stationId: 91, name: "Alabama Av", lines: "J", borough: "Bk" },
  { stationId: 93, name: "Chauncey St", lines: "J Z", borough: "Bk" },
  { stationId: 94, name: "Halsey St", lines: "J", borough: "Bk" },
  { stationId: 95, name: "Gates Av", lines: "J Z", borough: "Bk" },
  { stationId: 96, name: "Kosciuszko St", lines: "J", borough: "Bk" },
  { stationId: 97, name: "Myrtle Av", lines: "J M Z", borough: "Bk" },
  { stationId: 98, name: "Flushing Av", lines: "J M", borough: "Bk" },
  { stationId: 99, name: "Lorimer St", lines: "J M", borough: "Bk" },
  { stationId: 100, name: "Hewes St", lines: "J M", borough: "Bk" },
  { stationId: 101, name: "Marcy Av", lines: "J M Z", borough: "Bk" },
  { stationId: 103, name: "Bowery", lines: "J Z", borough: "M" },
  { stationId: 107, name: "Broad St", lines: "J Z", borough: "M" },
  {
    stationId: 108,
    name: "Middle Village-Metropolitan Av",
    lines: "M",
    borough: "Q",
  },
  { stationId: 109, name: "Fresh Pond Rd", lines: "M", borough: "Q" },
  { stationId: 110, name: "Forest Av", lines: "M", borough: "Q" },
  { stationId: 111, name: "Seneca Av", lines: "M", borough: "Q" },
  { stationId: 113, name: "Knickerbocker Av", lines: "M", borough: "Bk" },
  { stationId: 114, name: "Central Av", lines: "M", borough: "Bk" },
  { stationId: 118, name: "3 Av", lines: "L", borough: "M" },
  { stationId: 119, name: "1 Av", lines: "L", borough: "M" },
  { stationId: 120, name: "Bedford Av", lines: "L", borough: "Bk" },
  { stationId: 122, name: "Graham Av", lines: "L", borough: "Bk" },
  { stationId: 123, name: "Grand St", lines: "L", borough: "Bk" },
  { stationId: 124, name: "Montrose Av", lines: "L", borough: "Bk" },
  { stationId: 125, name: "Morgan Av", lines: "L", borough: "Bk" },
  { stationId: 126, name: "Jefferson St", lines: "L", borough: "Bk" },
  { stationId: 127, name: "DeKalb Av", lines: "L", borough: "Bk" },
  { stationId: 129, name: "Halsey St", lines: "L", borough: "Q" },
  { stationId: 130, name: "Wilson Av", lines: "L", borough: "Bk" },
  {
    stationId: 131,
    name: "Bushwick Av-Aberdeen St",
    lines: "L",
    borough: "Bk",
  },
  { stationId: 133, name: "Atlantic Av", lines: "L", borough: "Bk" },
  { stationId: 134, name: "Sutter Av", lines: "L", borough: "Bk" },
  { stationId: 135, name: "Livonia Av", lines: "L", borough: "Bk" },
  { stationId: 136, name: "New Lots Av", lines: "L", borough: "Bk" },
  { stationId: 137, name: "East 105 St", lines: "L", borough: "Bk" },
  {
    stationId: 138,
    name: "Canarsie-Rockaway Pkwy",
    lines: "L",
    borough: "Bk",
  },
  { stationId: 141, name: "Park Pl", lines: "S", borough: "Bk" },
  { stationId: 143, name: "Inwood-207 St", lines: "A", borough: "M" },
  { stationId: 144, name: "Dyckman St", lines: "A", borough: "M" },
  { stationId: 145, name: "190 St", lines: "A", borough: "M" },
  { stationId: 146, name: "181 St", lines: "A", borough: "M" },
  { stationId: 147, name: "175 St", lines: "A", borough: "M" },
  { stationId: 149, name: "163 St-Amsterdam Av", lines: "C", borough: "M" },
  { stationId: 150, name: "155 St", lines: "C", borough: "M" },
  { stationId: 151, name: "145 St", lines: "A C B D", borough: "M" },
  { stationId: 152, name: "135 St", lines: "B C", borough: "M" },
  { stationId: 153, name: "125 St", lines: "A B C D", borough: "M" },
  { stationId: 154, name: "116 St", lines: "B C", borough: "M" },
  {
    stationId: 155,
    name: "Cathedral Pkwy (110 St)",
    lines: "B C",
    borough: "M",
  },
  { stationId: 156, name: "103 St", lines: "B C", borough: "M" },
  { stationId: 157, name: "96 St", lines: "B C", borough: "M" },
  { stationId: 158, name: "86 St", lines: "B C", borough: "M" },
  {
    stationId: 159,
    name: "81 St-Museum of Natural History",
    lines: "B C",
    borough: "M",
  },
  { stationId: 160, name: "72 St", lines: "B C", borough: "M" },
  { stationId: 162, name: "50 St", lines: "C E", borough: "M" },
  { stationId: 164, name: "34 St-Penn Station", lines: "A C E", borough: "M" },
  { stationId: 165, name: "23 St", lines: "C E", borough: "M" },
  {
    stationId: 167,
    name: "W 4 St-Wash Sq",
    lines: "A C E B D F M",
    borough: "M",
  },
  { stationId: 168, name: "Spring St", lines: "C E", borough: "M" },
  { stationId: 169, name: "Canal St", lines: "A C E", borough: "M" },
  { stationId: 173, name: "High St", lines: "A C", borough: "Bk" },
  {
    stationId: 175,
    name: "Hoyt-Schermerhorn Sts",
    lines: "A C G",
    borough: "Bk",
  },
  { stationId: 176, name: "Lafayette Av", lines: "C", borough: "Bk" },
  {
    stationId: 177,
    name: "Clinton-Washington Avs",
    lines: "C",
    borough: "Bk",
  },
  { stationId: 179, name: "Nostrand Av", lines: "A C", borough: "Bk" },
  { stationId: 180, name: "Kingston-Throop Avs", lines: "C", borough: "Bk" },
  { stationId: 181, name: "Utica Av", lines: "A C", borough: "Bk" },
  { stationId: 182, name: "Ralph Av", lines: "C", borough: "Bk" },
  { stationId: 183, name: "Rockaway Av", lines: "C", borough: "Bk" },
  { stationId: 185, name: "Liberty Av", lines: "C", borough: "Bk" },
  { stationId: 186, name: "Van Siclen Av", lines: "C", borough: "Bk" },
  { stationId: 187, name: "Shepherd Av", lines: "C", borough: "Bk" },
  { stationId: 188, name: "Euclid Av", lines: "A C", borough: "Bk" },
  { stationId: 189, name: "Grant Av", lines: "A", borough: "Bk" },
  { stationId: 190, name: "80 St", lines: "A", borough: "Q" },
  { stationId: 191, name: "88 St", lines: "A", borough: "Q" },
  { stationId: 192, name: "Rockaway Blvd", lines: "A", borough: "Q" },
  { stationId: 193, name: "104 St", lines: "A", borough: "Q" },
  { stationId: 194, name: "111 St", lines: "A", borough: "Q" },
  {
    stationId: 195,
    name: "Ozone Park-Lefferts Blvd",
    lines: "A",
    borough: "Q",
  },
  { stationId: 196, name: "Aqueduct Racetrack", lines: "A", borough: "Q" },
  { stationId: 197, name: "Aqueduct-N Conduit Av", lines: "A", borough: "Q" },
  {
    stationId: 198,
    name: "Howard Beach-JFK Airport",
    lines: "A",
    borough: "Q",
  },
  { stationId: 199, name: "Broad Channel", lines: "A S", borough: "Q" },
  { stationId: 200, name: "Beach 90 St", lines: "A S", borough: "Q" },
  { stationId: 201, name: "Beach 98 St", lines: "A S", borough: "Q" },
  { stationId: 202, name: "Beach 105 St", lines: "A S", borough: "Q" },
  {
    stationId: 203,
    name: "Rockaway Park-Beach 116 St",
    lines: "A S",
    borough: "Q",
  },
  { stationId: 204, name: "Beach 67 St", lines: "A", borough: "Q" },
  { stationId: 205, name: "Beach 60 St", lines: "A", borough: "Q" },
  { stationId: 206, name: "Beach 44 St", lines: "A", borough: "Q" },
  { stationId: 207, name: "Beach 36 St", lines: "A", borough: "Q" },
  { stationId: 208, name: "Beach 25 St", lines: "A", borough: "Q" },
  { stationId: 209, name: "Far Rockaway-Mott Av", lines: "A", borough: "Q" },
  { stationId: 210, name: "Norwood-205 St", lines: "D", borough: "Bx" },
  { stationId: 211, name: "Bedford Park Blvd", lines: "B D", borough: "Bx" },
  { stationId: 212, name: "Kingsbridge Rd", lines: "B D", borough: "Bx" },
  { stationId: 213, name: "Fordham Rd", lines: "B D", borough: "Bx" },
  { stationId: 214, name: "182-183 Sts", lines: "B D", borough: "Bx" },
  { stationId: 215, name: "Tremont Av", lines: "B D", borough: "Bx" },
  { stationId: 216, name: "174-175 Sts", lines: "B D", borough: "Bx" },
  { stationId: 217, name: "170 St", lines: "B D", borough: "Bx" },
  { stationId: 218, name: "167 St", lines: "B D", borough: "Bx" },
  { stationId: 220, name: "155 St", lines: "B D", borough: "M" },
  { stationId: 221, name: "21 St-Queensbridge", lines: "F", borough: "Q" },
  { stationId: 222, name: "Roosevelt Island", lines: "F", borough: "M" },
  { stationId: 223, name: "Lexington Av/63 St", lines: "F Q", borough: "M" },
  { stationId: 224, name: "57 St", lines: "F", borough: "M" },
  {
    stationId: 225,
    name: "47-50 Sts-Rockefeller Ctr",
    lines: "B D F M",
    borough: "M",
  },
  { stationId: 228, name: "23 St", lines: "F M", borough: "M" },
  { stationId: 231, name: "Grand St", lines: "B D", borough: "M" },
  { stationId: 232, name: "2 Av", lines: "F", borough: "M" },
  { stationId: 234, name: "East Broadway", lines: "F", borough: "M" },
  { stationId: 235, name: "York St", lines: "F", borough: "Bk" },
  { stationId: 236, name: "Bergen St", lines: "F G", borough: "Bk" },
  { stationId: 237, name: "Carroll St", lines: "F G", borough: "Bk" },
  { stationId: 238, name: "Smith-9 Sts", lines: "F G", borough: "Bk" },
  { stationId: 240, name: "7 Av", lines: "F G", borough: "Bk" },
  { stationId: 241, name: "15 St-Prospect Park", lines: "F G", borough: "Bk" },
  { stationId: 242, name: "Fort Hamilton Pkwy", lines: "F G", borough: "Bk" },
  { stationId: 243, name: "Church Av", lines: "F", borough: "Bk" },
  { stationId: 244, name: "Ditmas Av", lines: "F", borough: "Bk" },
  { stationId: 245, name: "18 Av", lines: "F", borough: "Bk" },
  { stationId: 246, name: "Avenue I", lines: "F", borough: "Bk" },
  { stationId: 247, name: "Bay Pkwy", lines: "F", borough: "Bk" },
  { stationId: 248, name: "Avenue N", lines: "F", borough: "Bk" },
  { stationId: 249, name: "Avenue P", lines: "F", borough: "Bk" },
  { stationId: 250, name: "Kings Hwy", lines: "F", borough: "Bk" },
  { stationId: 251, name: "Avenue U", lines: "F", borough: "Bk" },
  { stationId: 252, name: "Avenue X", lines: "F", borough: "Bk" },
  { stationId: 253, name: "Neptune Av", lines: "F", borough: "Bk" },
  { stationId: 254, name: "Jamaica-179 St", lines: "F", borough: "Q" },
  { stationId: 255, name: "169 St", lines: "F", borough: "Q" },
  { stationId: 256, name: "Parsons Blvd", lines: "F", borough: "Q" },
  { stationId: 257, name: "Sutphin Blvd", lines: "F", borough: "Q" },
  { stationId: 258, name: "Briarwood", lines: "E F", borough: "Q" },
  {
    stationId: 259,
    name: "Kew Gardens-Union Tpke",
    lines: "E F",
    borough: "Q",
  },
  { stationId: 260, name: "75 Av", lines: "E F", borough: "Q" },
  {
    stationId: 261,
    name: "Forest Hills-71 Av",
    lines: "E F M R",
    borough: "Q",
  },
  { stationId: 262, name: "67 Av", lines: "M R", borough: "Q" },
  { stationId: 263, name: "63 Dr-Rego Park", lines: "M R", borough: "Q" },
  { stationId: 264, name: "Woodhaven Blvd", lines: "M R", borough: "Q" },
  { stationId: 265, name: "Grand Av-Newtown", lines: "M R", borough: "Q" },
  { stationId: 266, name: "Elmhurst Av", lines: "M R", borough: "Q" },
  { stationId: 268, name: "65 St", lines: "M R", borough: "Q" },
  { stationId: 269, name: "Northern Blvd", lines: "M R", borough: "Q" },
  { stationId: 270, name: "46 St", lines: "M R", borough: "Q" },
  { stationId: 271, name: "Steinway St", lines: "M R", borough: "Q" },
  { stationId: 272, name: "36 St", lines: "M R", borough: "Q" },
  { stationId: 273, name: "Queens Plaza", lines: "E M R", borough: "Q" },
  { stationId: 276, name: "5 Av/53 St", lines: "E M", borough: "M" },
  { stationId: 277, name: "7 Av", lines: "B D E", borough: "M" },
  {
    stationId: 278,
    name: "Jamaica Center-Parsons/Archer",
    lines: "E J Z",
    borough: "Q",
  },
  {
    stationId: 279,
    name: "Sutphin Blvd-Archer Av-JFK Airport",
    lines: "E J Z",
    borough: "Q",
  },
  { stationId: 280, name: "Jamaica-Van Wyck", lines: "E", borough: "Q" },
  { stationId: 282, name: "21 St", lines: "G", borough: "Q" },
  { stationId: 283, name: "Greenpoint Av", lines: "G", borough: "Bk" },
  { stationId: 284, name: "Nassau Av", lines: "G", borough: "Bk" },
  { stationId: 286, name: "Broadway", lines: "G", borough: "Bk" },
  { stationId: 287, name: "Flushing Av", lines: "G", borough: "Bk" },
  { stationId: 288, name: "Myrtle-Willoughby Avs", lines: "G", borough: "Bk" },
  { stationId: 289, name: "Bedford-Nostrand Avs", lines: "G", borough: "Bk" },
  { stationId: 290, name: "Classon Av", lines: "G", borough: "Bk" },
  {
    stationId: 291,
    name: "Clinton-Washington Avs",
    lines: "G",
    borough: "Bk",
  },
  { stationId: 292, name: "Fulton St", lines: "G", borough: "Bk" },
  {
    stationId: 293,
    name: "Van Cortlandt Park-242 St",
    lines: "1",
    borough: "Bx",
  },
  { stationId: 294, name: "238 St", lines: "1", borough: "Bx" },
  { stationId: 295, name: "231 St", lines: "1", borough: "Bx" },
  { stationId: 296, name: "Marble Hill-225 St", lines: "1", borough: "M" },
  { stationId: 297, name: "215 St", lines: "1", borough: "M" },
  { stationId: 298, name: "207 St", lines: "1", borough: "M" },
  { stationId: 299, name: "Dyckman St", lines: "1", borough: "M" },
  { stationId: 300, name: "191 St", lines: "1", borough: "M" },
  { stationId: 301, name: "181 St", lines: "1", borough: "M" },
  { stationId: 303, name: "157 St", lines: "1", borough: "M" },
  { stationId: 304, name: "145 St", lines: "1", borough: "M" },
  { stationId: 305, name: "137 St-City College", lines: "1", borough: "M" },
  { stationId: 306, name: "125 St", lines: "1", borough: "M" },
  {
    stationId: 307,
    name: "116 St-Columbia University",
    lines: "1",
    borough: "M",
  },
  {
    stationId: 308,
    name: "Cathedral Pkwy (110 St)",
    lines: "1",
    borough: "M",
  },
  { stationId: 309, name: "103 St", lines: "1", borough: "M" },
  { stationId: 310, name: "96 St", lines: "1 2 3", borough: "M" },
  { stationId: 311, name: "86 St", lines: "1", borough: "M" },
  { stationId: 312, name: "79 St", lines: "1", borough: "M" },
  { stationId: 313, name: "72 St", lines: "1 2 3", borough: "M" },
  { stationId: 314, name: "66 St-Lincoln Center", lines: "1", borough: "M" },
  { stationId: 316, name: "50 St", lines: "1", borough: "M" },
  { stationId: 318, name: "34 St-Penn Station", lines: "1 2 3", borough: "M" },
  { stationId: 319, name: "28 St", lines: "1", borough: "M" },
  { stationId: 320, name: "23 St", lines: "1", borough: "M" },
  { stationId: 321, name: "18 St", lines: "1", borough: "M" },
  {
    stationId: 323,
    name: "Christopher St-Sheridan Sq",
    lines: "1",
    borough: "M",
  },
  { stationId: 324, name: "Houston St", lines: "1", borough: "M" },
  { stationId: 325, name: "Canal St", lines: "1", borough: "M" },
  { stationId: 326, name: "Franklin St", lines: "1", borough: "M" },
  { stationId: 327, name: "Chambers St", lines: "1 2 3", borough: "M" },
  { stationId: 328, name: "WTC Cortlandt", lines: "1", borough: "M" },
  { stationId: 329, name: "Rector St", lines: "1", borough: "M" },
  { stationId: 333, name: "Wall St", lines: "2 3", borough: "M" },
  { stationId: 334, name: "Clark St", lines: "2 3", borough: "Bk" },
  { stationId: 336, name: "Hoyt St", lines: "2 3", borough: "Bk" },
  { stationId: 337, name: "Nevins St", lines: "2 3 4 5", borough: "Bk" },
  { stationId: 339, name: "Bergen St", lines: "2 3", borough: "Bk" },
  { stationId: 340, name: "Grand Army Plaza", lines: "2 3", borough: "Bk" },
  {
    stationId: 341,
    name: "Eastern Pkwy-Brooklyn Museum",
    lines: "2 3",
    borough: "Bk",
  },
  { stationId: 343, name: "Nostrand Av", lines: "3", borough: "Bk" },
  { stationId: 344, name: "Kingston Av", lines: "3", borough: "Bk" },
  { stationId: 345, name: "Crown Hts-Utica Av", lines: "3 4", borough: "Bk" },
  { stationId: 346, name: "Sutter Av-Rutland Rd", lines: "3", borough: "Bk" },
  { stationId: 347, name: "Saratoga Av", lines: "3", borough: "Bk" },
  { stationId: 348, name: "Rockaway Av", lines: "3", borough: "Bk" },
  { stationId: 349, name: "Junius St", lines: "3", borough: "Bk" },
  { stationId: 350, name: "Pennsylvania Av", lines: "3", borough: "Bk" },
  { stationId: 351, name: "Van Siclen Av", lines: "3", borough: "Bk" },
  { stationId: 352, name: "New Lots Av", lines: "3", borough: "Bk" },
  {
    stationId: 353,
    name: "President Street-Medgar Evers College",
    lines: "2 5",
    borough: "Bk",
  },
  { stationId: 354, name: "Sterling St", lines: "2 5", borough: "Bk" },
  { stationId: 355, name: "Winthrop St", lines: "2 5", borough: "Bk" },
  { stationId: 356, name: "Church Av", lines: "2 5", borough: "Bk" },
  { stationId: 357, name: "Beverly Rd", lines: "2 5", borough: "Bk" },
  {
    stationId: 358,
    name: "Newkirk Av - Little Haiti",
    lines: "2 5",
    borough: "Bk",
  },
  {
    stationId: 359,
    name: "Flatbush Av-Brooklyn College",
    lines: "2 5",
    borough: "Bk",
  },
  { stationId: 360, name: "Pelham Bay Park", lines: "6", borough: "Bx" },
  { stationId: 361, name: "Buhre Av", lines: "6", borough: "Bx" },
  { stationId: 362, name: "Middletown Rd", lines: "6", borough: "Bx" },
  {
    stationId: 363,
    name: "Westchester Sq-E Tremont Av",
    lines: "6",
    borough: "Bx",
  },
  { stationId: 364, name: "Zerega Av", lines: "6", borough: "Bx" },
  { stationId: 365, name: "Castle Hill Av", lines: "6", borough: "Bx" },
  { stationId: 366, name: "Parkchester", lines: "6", borough: "Bx" },
  { stationId: 367, name: "St Lawrence Av", lines: "6", borough: "Bx" },
  { stationId: 368, name: "Morrison Av-Soundview", lines: "6", borough: "Bx" },
  { stationId: 369, name: "Elder Av", lines: "6", borough: "Bx" },
  { stationId: 370, name: "Whitlock Av", lines: "6", borough: "Bx" },
  { stationId: 371, name: "Hunts Point Av", lines: "6", borough: "Bx" },
  { stationId: 372, name: "Longwood Av", lines: "6", borough: "Bx" },
  { stationId: 373, name: "E 149 St", lines: "6", borough: "Bx" },
  { stationId: 374, name: "E 143 St-St Mary's St", lines: "6", borough: "Bx" },
  { stationId: 375, name: "Cypress Av", lines: "6", borough: "Bx" },
  { stationId: 376, name: "Brook Av", lines: "6", borough: "Bx" },
  { stationId: 377, name: "3 Av-138 St", lines: "6", borough: "Bx" },
  { stationId: 378, name: "Woodlawn", lines: "4", borough: "Bx" },
  { stationId: 379, name: "Mosholu Pkwy", lines: "4", borough: "Bx" },
  {
    stationId: 380,
    name: "Bedford Park Blvd-Lehman College",
    lines: "4",
    borough: "Bx",
  },
  { stationId: 381, name: "Kingsbridge Rd", lines: "4", borough: "Bx" },
  { stationId: 382, name: "Fordham Rd", lines: "4", borough: "Bx" },
  { stationId: 383, name: "183 St", lines: "4", borough: "Bx" },
  { stationId: 384, name: "Burnside Av", lines: "4", borough: "Bx" },
  { stationId: 385, name: "176 St", lines: "4", borough: "Bx" },
  { stationId: 386, name: "Mt Eden Av", lines: "4", borough: "Bx" },
  { stationId: 387, name: "170 St", lines: "4", borough: "Bx" },
  { stationId: 388, name: "167 St", lines: "4", borough: "Bx" },
  {
    stationId: 391,
    name: "138 St-Grand Concourse",
    lines: "4 5",
    borough: "Bx",
  },
  { stationId: 392, name: "125 St", lines: "4 5 6", borough: "M" },
  { stationId: 393, name: "116 St", lines: "6", borough: "M" },
  { stationId: 394, name: "110 St", lines: "6", borough: "M" },
  { stationId: 395, name: "103 St", lines: "6", borough: "M" },
  { stationId: 396, name: "96 St", lines: "6", borough: "M" },
  { stationId: 397, name: "86 St", lines: "4 5 6", borough: "M" },
  { stationId: 398, name: "77 St", lines: "6", borough: "M" },
  { stationId: 399, name: "68 St-Hunter College", lines: "6", borough: "M" },
  { stationId: 403, name: "33 St", lines: "6", borough: "M" },
  { stationId: 404, name: "28 St", lines: "6", borough: "M" },
  { stationId: 405, name: "23 St", lines: "6", borough: "M" },
  { stationId: 407, name: "Astor Pl", lines: "6", borough: "M" },
  { stationId: 409, name: "Spring St", lines: "6", borough: "M" },
  { stationId: 413, name: "Wall St", lines: "4 5", borough: "M" },
  { stationId: 414, name: "Bowling Green", lines: "4 5", borough: "M" },
  { stationId: 416, name: "Wakefield-241 St", lines: "2", borough: "Bx" },
  { stationId: 417, name: "Nereid Av", lines: "2 5", borough: "Bx" },
  { stationId: 418, name: "233 St", lines: "2 5", borough: "Bx" },
  { stationId: 419, name: "225 St", lines: "2 5", borough: "Bx" },
  { stationId: 420, name: "219 St", lines: "2 5", borough: "Bx" },
  { stationId: 421, name: "Gun Hill Rd", lines: "2 5", borough: "Bx" },
  { stationId: 422, name: "Burke Av", lines: "2 5", borough: "Bx" },
  { stationId: 423, name: "Allerton Av", lines: "2 5", borough: "Bx" },
  { stationId: 424, name: "Pelham Pkwy", lines: "2 5", borough: "Bx" },
  { stationId: 425, name: "Bronx Park East", lines: "2 5", borough: "Bx" },
  { stationId: 426, name: "E 180 St", lines: "2 5", borough: "Bx" },
  {
    stationId: 427,
    name: "West Farms Sq-E Tremont Av",
    lines: "2 5",
    borough: "Bx",
  },
  { stationId: 428, name: "174 St", lines: "2 5", borough: "Bx" },
  { stationId: 429, name: "Freeman St", lines: "2 5", borough: "Bx" },
  { stationId: 430, name: "Simpson St", lines: "2 5", borough: "Bx" },
  { stationId: 431, name: "Intervale Av", lines: "2 5", borough: "Bx" },
  { stationId: 432, name: "Prospect Av", lines: "2 5", borough: "Bx" },
  { stationId: 433, name: "Jackson Av", lines: "2 5", borough: "Bx" },
  { stationId: 434, name: "3 Av-149 St", lines: "2 5", borough: "Bx" },
  { stationId: 436, name: "Harlem-148 St", lines: "3", borough: "M" },
  { stationId: 437, name: "145 St", lines: "3", borough: "M" },
  { stationId: 438, name: "135 St", lines: "2 3", borough: "M" },
  { stationId: 439, name: "125 St", lines: "2 3", borough: "M" },
  { stationId: 440, name: "116 St", lines: "2 3", borough: "M" },
  {
    stationId: 441,
    name: "Central Park North (110 St)",
    lines: "2 3",
    borough: "M",
  },
  { stationId: 442, name: "Eastchester-Dyre Av", lines: "5", borough: "Bx" },
  { stationId: 443, name: "Baychester Av", lines: "5", borough: "Bx" },
  { stationId: 444, name: "Gun Hill Rd", lines: "5", borough: "Bx" },
  { stationId: 445, name: "Pelham Pkwy", lines: "5", borough: "Bx" },
  { stationId: 446, name: "Morris Park", lines: "5", borough: "Bx" },
  { stationId: 447, name: "Flushing-Main St", lines: "7", borough: "Q" },
  { stationId: 448, name: "Mets-Willets Point", lines: "7", borough: "Q" },
  { stationId: 449, name: "111 St", lines: "7", borough: "Q" },
  { stationId: 450, name: "103 St-Corona Plaza", lines: "7", borough: "Q" },
  { stationId: 451, name: "Junction Blvd", lines: "7", borough: "Q" },
  { stationId: 452, name: "90 St-Elmhurst Av", lines: "7", borough: "Q" },
  { stationId: 453, name: "82 St-Jackson Hts", lines: "7", borough: "Q" },
  { stationId: 455, name: "69 St", lines: "7", borough: "Q" },
  { stationId: 456, name: "Woodside-61 St", lines: "7", borough: "Q" },
  { stationId: 457, name: "52 St", lines: "7", borough: "Q" },
  { stationId: 458, name: "46 St-Bliss St", lines: "7", borough: "Q" },
  { stationId: 459, name: "40 St-Lowery St", lines: "7", borough: "Q" },
  { stationId: 460, name: "33 St-Rawson St", lines: "7", borough: "Q" },
  { stationId: 461, name: "Queensboro Plaza", lines: "7 N W", borough: "Q" },
  { stationId: 463, name: "Hunters Point Av", lines: "7", borough: "Q" },
  { stationId: 464, name: "Vernon Blvd-Jackson Av", lines: "7", borough: "Q" },
  { stationId: 471, name: "34 St-Hudson Yards", lines: "7", borough: "M" },
  { stationId: 475, name: "96 St", lines: "Q", borough: "M" },
  { stationId: 476, name: "86 St", lines: "Q", borough: "M" },
  { stationId: 477, name: "72 St", lines: "Q", borough: "M" },
  { stationId: 501, name: "St George", lines: "SIR", borough: "SI" },
  { stationId: 502, name: "Tompkinsville", lines: "SIR", borough: "SI" },
  { stationId: 503, name: "Stapleton", lines: "SIR", borough: "SI" },
  { stationId: 504, name: "Clifton", lines: "SIR", borough: "SI" },
  { stationId: 505, name: "Grasmere", lines: "SIR", borough: "SI" },
  { stationId: 506, name: "Old Town", lines: "SIR", borough: "SI" },
  { stationId: 507, name: "Dongan Hills", lines: "SIR", borough: "SI" },
  { stationId: 508, name: "Jefferson Av", lines: "SIR", borough: "SI" },
  { stationId: 509, name: "Grant City", lines: "SIR", borough: "SI" },
  { stationId: 510, name: "New Dorp", lines: "SIR", borough: "SI" },
  { stationId: 511, name: "Oakwood Heights", lines: "SIR", borough: "SI" },
  { stationId: 512, name: "Bay Terrace", lines: "SIR", borough: "SI" },
  { stationId: 513, name: "Great Kills", lines: "SIR", borough: "SI" },
  { stationId: 514, name: "Eltingville", lines: "SIR", borough: "SI" },
  { stationId: 515, name: "Annadale", lines: "SIR", borough: "SI" },
  { stationId: 516, name: "Huguenot", lines: "SIR", borough: "SI" },
  { stationId: 517, name: "Prince's Bay", lines: "SIR", borough: "SI" },
  { stationId: 518, name: "Pleasant Plains", lines: "SIR", borough: "SI" },
  { stationId: 519, name: "Richmond Valley", lines: "SIR", borough: "SI" },
  { stationId: 522, name: "Tottenville", lines: "SIR", borough: "SI" },
  { stationId: 523, name: "Arthur Kill", lines: "SIR", borough: "SI" },
  { stationId: 601, name: "14 St / 6 Av", lines: "L F M 1 2 3", borough: "M" },
  {
    stationId: 602,
    name: "14 St - Union Sq",
    lines: "N Q R W L 4 5 6",
    borough: "M",
  },
  {
    stationId: 603,
    name: "149 St - Grand Concourse",
    lines: "4 2 5",
    borough: "Bx",
  },
  {
    stationId: 604,
    name: "161 St - Yankee Stadium",
    lines: "B D 4",
    borough: "Bx",
  },
  {
    stationId: 605,
    name: "168 St - Washington Hts",
    lines: "A C 1",
    borough: "M",
  },
  { stationId: 606, name: "Court Sq - 23 St", lines: "E M G 7", borough: "Q" },
  {
    stationId: 607,
    name: "34 St - Herald Sq",
    lines: "N Q R W B D F M",
    borough: "M",
  },
  { stationId: 608, name: "4 Av - 9 St", lines: "R F G", borough: "Bk" },
  {
    stationId: 609,
    name: "42 St - Bryant Pk / 5 Av",
    lines: "B D F M 7",
    borough: "M",
  },
  {
    stationId: 610,
    name: "Grand Central - 42 St",
    lines: "4 5 6 7 S",
    borough: "M",
  },
  {
    stationId: 611,
    name: "Times Sq - 42 St / Port Authority Bus Terminal",
    lines: "N Q R W A C E 1 2 3 7 S",
    borough: "M",
  },
  {
    stationId: 612,
    name: "51 St - Lexington Av / 53 St",
    lines: "E M 6",
    borough: "M",
  },
  {
    stationId: 613,
    name: "Lexington Av / 59 St",
    lines: "N W R 4 5 6",
    borough: "M",
  },
  {
    stationId: 614,
    name: "59 St - Columbus Circle",
    lines: "A B C D 1",
    borough: "M",
  },
  {
    stationId: 615,
    name: "62 St / New Utrecht Av",
    lines: "D N",
    borough: "Bk",
  },
  {
    stationId: 616,
    name: "Jackson Hts-Roosevelt Av / 74 St",
    lines: "E F M R 7",
    borough: "Q",
  },
  {
    stationId: 617,
    name: "Atlantic Av-Barclays Ctr",
    lines: "D N R B Q 2 3 4 5",
    borough: "Bk",
  },
  { stationId: 618, name: "14 St / 8 Av", lines: "L A C E", borough: "M" },
  {
    stationId: 619,
    name: "Broadway-Lafayette St / Bleecker St",
    lines: "B D F M 6",
    borough: "M",
  },
  {
    stationId: 620,
    name: "Borough Hall / Court St",
    lines: "R 2 3 4 5",
    borough: "Bk",
  },
  {
    stationId: 621,
    name: "Broadway Junction",
    lines: "J Z L A C",
    borough: "Bk",
  },
  {
    stationId: 622,
    name: "Brooklyn Bridge-City Hall / Chambers St",
    lines: "J Z 4 5 6",
    borough: "M",
  },
  { stationId: 623, name: "Canal St", lines: "R W N Q J Z 6", borough: "M" },
  {
    stationId: 624,
    name: "Chambers St / WTC / Park Place / Cortlandt St",
    lines: "R W A C E 2 3",
    borough: "M",
  },
  {
    stationId: 625,
    name: "Delancey St / Essex St",
    lines: "J M Z F",
    borough: "M",
  },
  {
    stationId: 626,
    name: "Franklin Av-Medgar Evers College / Botanic Garden",
    lines: "S 2 3 4 5",
    borough: "Bk",
  },
  { stationId: 627, name: "Franklin Av", lines: "S C", borough: "Bk" },
  {
    stationId: 628,
    name: "Fulton St",
    lines: "J Z A C 2 3 4 5",
    borough: "M",
  },
  {
    stationId: 629,
    name: "Metropolitan Av / Lorimer St",
    lines: "L G",
    borough: "Bk",
  },
  {
    stationId: 630,
    name: "Myrtle - Wyckoff Avs",
    lines: "M L",
    borough: "Bk",
  },
  {
    stationId: 635,
    name: "South Ferry / Whitehall",
    lines: "R W 1",
    borough: "M",
  },
  {
    stationId: 636,
    name: "Jay St - MetroTech",
    lines: "R A C F",
    borough: "Bk",
  },
];
