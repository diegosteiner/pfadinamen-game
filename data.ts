export type QuestionAnswer = {
  value: 0 | 1;
  weight: number;
  text: string;
};

export type Question = {
  id: number;
  text: string;
  answers: [QuestionAnswer, QuestionAnswer];
};

export const questions: Question[] = [
  {
    id: 1,
    text: "Bist du gross oder klein?",
    answers: [
     { value: 1, weight: Math.pow(2, 6), text: "gross" },
     { value: 0, weight: Math.pow(2, 6), text: "klein" },
    ],
  },
  {
    id: 2,
    text: "Läufst du schnell wie der Wind oder eher gemächlich?",
    answers: [
     { value: 1, weight: Math.pow(2, 5), text: "schnell" },
     { value: 0, weight: Math.pow(2, 5), text: "gemächlich" },
    ],
  },
  {
    id: 3,
    text: "Was isst du lieber? Schlangenbrot oder Schoggibanane?",
    answers: [
     { value: 1, weight: Math.pow(2, 4), text: "Schlangenbrot" },
     { value: 0, weight: Math.pow(2, 4), text: "Schoggibanane" },
    ],
  },
  {
    id: 4,
    text: "Wo singst du lauter mit? «Alpenrose» oder «Country roads»?",
    answers: [
     { value: 1, weight: Math.pow(2, 3), text: "«Alpenrose»" },
     { value: 0, weight: Math.pow(2, 3), text: "«Country roads»" },
    ],
  },
  {
    id: 5,
    text: "Wo machst du lieber mit? Wanderung zum Sonnenaufgang oder Nacht-Geländespiel?",
    answers: [
     { value: 1, weight: Math.pow(2, 2), text: "Wanderung zum Sonnenaufgang" },
     { value: 0, weight: Math.pow(2, 2), text: "Nacht-Geländespiel" },
    ],
  },
  {
    id: 6,
    text: "Schläfst du lieber im  Spatzzelt oder Blachenzelt?",
    answers: [
     { value: 1, weight: Math.pow(2, 1), text: "Spatzzelt" },
     { value: 0, weight: Math.pow(2, 1), text: "Blachenzelt" },
    ],
  },
  {
    id: 7,
    text: "Orientierst du dich lieber mit Hilfe von Karte/Kompass oder mit Hilfe eines GPS?",
    answers: [
     { value: 1, weight: Math.pow(2, 0), text: "Karte/Kompass" },
     { value: 0, weight: Math.pow(2, 0), text: "GPS" },
    ],
  },
];

export const names: { [key: string]: string } = {
  "127": "Puma",
  "126": "Akku",
  "125": "Hydro",
  "124": "Adler",
  "123": "Hirsch",
  "122": "Akela",
  "121": "Aal",
  "120": "Eule",
  "119": "Delphin",
  "118": "Delta",
  "117": "Tarzan",
  "116": "Jupiter",
  "115": "Cervo",
  "114": "Carbonara",
  "113": "Spaghetti",
  "112": "Klick",
  "111": "Albatros",
  "110": "Nandu",
  "109": "Capri",
  "108": "Forelle",
  "107": "Neptun ",
  "106": "Crescendo",
  "105": "Abakus",
  "104": "Fuchs",
  "103": "Dampf",
  "102": "Ajax",
  "101": "Spurt",
  "100": "Farfalla",
  "99": "Aetna",
  "98": "Achat",
  "97": "Cappuccino",
  "96": "Panther",
  "95": "Zwääg",
  "94": "Falk",
  "93": "Fortuna",
  "92": "Fresco",
  "91": "Bär",
  "90": "Mutz",
  "89": "Fuoco",
  "88": "Dimitri",
  "87": "Pelikan",
  "86": "Schwan",
  "85": "Sioux",
  "84": "Fjord",
  "83": "Peperoni",
  "82": "Speiche",
  "81": "Bagheera",
  "80": "Saphir",
  "79": "Kondor",
  "78": "Känguruh",
  "77": "Mammut",
  "76": "Himalaya",
  "75": "Sperber",
  "74": "Storch",
  "73": "Pedes",
  "72": "Tiger",
  "71": "Flamingo",
  "70": "Cembalo",
  "69": "Strick",
  "68": "Efeu",
  "67": "Vulkan",
  "66": "Schlingel",
  "65": "Tukan",
  "64": "Baloo",
  "63": "Eidechs",
  "62": "Gemse",
  "61": "Archimedes",
  "60": "Jaguar",
  "59": "Dynamo",
  "58": "Wiesel",
  "57": "Salto",
  "56": "Reh",
  "55": "Flipper",
  "54": "Schwalbe",
  "53": "Hörnli",
  "52": "Murmeli",
  "51": "Allegro",
  "50": "Iltis",
  "49": "Samba",
  "48": "Luchs",
  "47": "Mowgli",
  "46": "Libelle",
  "45": "Erbsli",
  "44": "Habicht",
  "43": "Punkt",
  "42": "Fiamma",
  "41": "Gecko",
  "40": "Hecht",
  "39": "Piccolo",
  "38": "Gnu",
  "37": "Komma",
  "36": "Hermelin",
  "35": "Disco",
  "34": "Twist",
  "33": "Express",
  "32": "Fackle",
  "31": "Kajak",
  "30": "Otter",
  "29": "Kristall",
  "28": "Okapi",
  "27": "Igel",
  "26": "Fips",
  "25": "Pinguin",
  "24": "Ozelot",
  "23": "Dolce",
  "22": "Azimut",
  "21": "Sesam",
  "20": "Radisli",
  "19": "Kiwi",
  "18": "Marroni",
  "17": "Salsa",
  "16": "Happy",
  "15": "Kiebitz",
  "14": "Safran",
  "13": "Kolibri",
  "12": "Merlin",
  "11": "Wichtel",
  "10": "Nautilus",
  "9": "Papillon",
  "8": "Luna",
  "7": "Lerche",
  "6": "Salamander",
  "5": "Specht",
  "4": "Purzel",
  "3": "Marder",
  "2": "Schildchrott",
  "1": "Fennek",
  "0": "Merkur",
  "420": "Snoop D.",
  "1337": "Cosinus"
}
