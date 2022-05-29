export type QuestionAnswer = {
  value: 0 | 1;
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
    text: "Bist du gross oder klein ?",
    answers: [
      { value: 0, text: "gross" },
      { value: 1, text: "klein" },
    ],
  },
  {
    id: 2,
    text: "Läufst du schnell wie der Wind oder eher gemächlich?",
    answers: [
      { value: 0, text: "schnell" },
      { text: "gemächlich", value: 1 },
    ],
  },
  {
    id: 3,
    text: "Was isst du lieber? Schlangenbrot oder Schoggibanane?",
    answers: [
      { value: 0, text: "Schlangenbrot" },
      { text: "Schoggibanane", value: 1 },
    ],
  },
  {
    id: 4,
    text: "Wo singst du lauter mit? Alpenrose oder country roads ?",
    answers: [
      { value: 0, text: "Alpenrose" },
      { text: "country roads", value: 1 },
    ],
  },
  {
    id: 5,
    text: "Wo machst du lieber mit? Wanderung zum Sonnenaufgang oder Nacht-Geländespiel?",
    answers: [
      { value: 0, text: "Wanderung zum Sonnenaufgang" },
      { text: "Nacht-Geländespiel", value: 1 },
    ],
  },
  {
    id: 6,
    text: "Schläfst du lieber im  Spatzzelt oder Blachenzelt?",
    answers: [
      { value: 0, text: "Spatzzelt" },
      { text: "Blachenzelt", value: 1 },
    ],
  },
  {
    id: 7,
    text: "Du orientierst dich lieber mit Hilfe von Karte/Kompass oder mit Hilfe des GPS.",
    answers: [
      { value: 0, text: "Hilfe von Karte/Kompass" },
      { text: "Hilfe des GPS", value: 1 },
    ],
  },
];
