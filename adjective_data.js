// Adjective Endings Drill Data
// Coverage: Tabelle 1 (no article, "starke Endungen"), Tabelle 2 (with definite article, "schwache Endungen"),
//           Mixed (ein/kein/possessive — Tab 1 OR Tab 2 depending on case)
// Total: 50 items across all main case/gender/number combinations
//
// Each item:
//   prompt: the phrase shown with ___ for blanks (article ending and/or adjective ending)
//   answers: array of correct endings for each blank (in order). "" = no ending (zero).
//   alternatives: per-blank list of accepted answers (for cases where multiple endings work)
//   case: nominativ | akkusativ | dativ | genitiv
//   gender: m | f | n | pl
//   table: 1 | 2 | mixed   (which table the blanks pull from)
//   hint: rule explanation shown on miss
//   full: the complete correct phrase (shown after grading)

const ADJECTIVE_ITEMS = [
  // ============ TABELLE 1: No article, strong endings ============
  // The adjective itself carries the case marking
  {
    id: "adj_001",
    prompt: "frisch__ Brot",
    answers: ["es"],
    alternatives: [["es"]],
    case: "nominativ",
    gender: "n",
    table: 1,
    hint: "No article → adjective takes the strong ending. Nominativ neutrum = -es.",
    full: "frisches Brot"
  },
  {
    id: "adj_002",
    prompt: "kalt__ Wasser",
    answers: ["es"],
    alternatives: [["es"]],
    case: "nominativ",
    gender: "n",
    table: 1,
    hint: "Kein Artikel → -es im Nom./Akk. neutrum.",
    full: "kaltes Wasser"
  },
  {
    id: "adj_003",
    prompt: "stark__ Kaffee",
    answers: ["er"],
    alternatives: [["er"]],
    case: "nominativ",
    gender: "m",
    table: 1,
    hint: "No article → adjective shows the gender. Nominativ maskulin = -er.",
    full: "starker Kaffee"
  },
  {
    id: "adj_004",
    prompt: "süß__ Schokolade",
    answers: ["e"],
    alternatives: [["e"]],
    case: "nominativ",
    gender: "f",
    table: 1,
    hint: "Nominativ feminin = -e (same in both tables).",
    full: "süße Schokolade"
  },
  {
    id: "adj_005",
    prompt: "leer__ Flaschen",
    answers: ["e"],
    alternatives: [["e"]],
    case: "nominativ",
    gender: "pl",
    table: 1,
    hint: "Plural ohne Artikel → -e im Nom./Akk.",
    full: "leere Flaschen"
  },
  {
    id: "adj_006",
    prompt: "mit grün__ Tee",
    answers: ["em"],
    alternatives: [["em"]],
    case: "dativ",
    gender: "m",
    table: 1,
    hint: "mit + Dativ. Dativ maskulin ohne Artikel = -em.",
    full: "mit grünem Tee"
  },
  {
    id: "adj_007",
    prompt: "für alt__ Leute",
    answers: ["e"],
    alternatives: [["e"]],
    case: "akkusativ",
    gender: "pl",
    table: 1,
    hint: "für + Akkusativ. Plural ohne Artikel = -e.",
    full: "für alte Leute"
  },
  {
    id: "adj_008",
    prompt: "vor lang__ Zeit",
    answers: ["er"],
    alternatives: [["er"]],
    case: "dativ",
    gender: "f",
    table: 1,
    hint: "vor (temporal) + Dativ. Dativ feminin ohne Artikel = -er.",
    full: "vor langer Zeit"
  },
  {
    id: "adj_009",
    prompt: "aus dünn__ Papier",
    answers: ["em"],
    alternatives: [["em"]],
    case: "dativ",
    gender: "n",
    table: 1,
    hint: "aus + Dativ. Dativ neutrum ohne Artikel = -em.",
    full: "aus dünnem Papier"
  },
  {
    id: "adj_010",
    prompt: "trotz schlecht__ Wetters",
    answers: ["en"],
    alternatives: [["en"]],
    case: "genitiv",
    gender: "n",
    table: 1,
    hint: "Genitiv mask./neutr.: Adjektiv IMMER -en (the noun's -s carries the case).",
    full: "trotz schlechten Wetters"
  },
  {
    id: "adj_011",
    prompt: "wegen stark__ Regens",
    answers: ["en"],
    alternatives: [["en"]],
    case: "genitiv",
    gender: "m",
    table: 1,
    hint: "Genitiv mask. ohne Artikel: Adjektiv -en (Regens hat -s).",
    full: "wegen starken Regens"
  },
  {
    id: "adj_012",
    prompt: "während lang__ Reisen",
    answers: ["er"],
    alternatives: [["er"]],
    case: "genitiv",
    gender: "pl",
    table: 1,
    hint: "Genitiv Plural ohne Artikel = -er.",
    full: "während langer Reisen"
  },
  {
    id: "adj_013",
    prompt: "herzlich__ Grüße",
    answers: ["e"],
    alternatives: [["e"]],
    case: "akkusativ",
    gender: "pl",
    table: 1,
    hint: "Akkusativ Plural ohne Artikel = -e.",
    full: "herzliche Grüße"
  },
  {
    id: "adj_014",
    prompt: "bei schön__ Wetter",
    answers: ["em"],
    alternatives: [["em"]],
    case: "dativ",
    gender: "n",
    table: 1,
    hint: "bei + Dativ. Dativ neutrum ohne Artikel = -em.",
    full: "bei schönem Wetter"
  },
  {
    id: "adj_015",
    prompt: "frisch__ Luft",
    answers: ["e"],
    alternatives: [["e"]],
    case: "nominativ",
    gender: "f",
    table: 1,
    hint: "Nominativ feminin = -e.",
    full: "frische Luft"
  },

  // ============ TABELLE 2: With definite article (der/die/das) ============
  // Article carries the case; adjective takes -e or -en
  {
    id: "adj_016",
    prompt: "das frisch__ Brot",
    answers: ["e"],
    alternatives: [["e"]],
    case: "nominativ",
    gender: "n",
    table: 2,
    hint: "Mit bestimmtem Artikel → schwache Endung. Nom./Akk. Sing. = -e.",
    full: "das frische Brot"
  },
  {
    id: "adj_017",
    prompt: "der letzt__ Bus",
    answers: ["e"],
    alternatives: [["e"]],
    case: "nominativ",
    gender: "m",
    table: 2,
    hint: "der → Adjektiv -e im Nominativ Singular.",
    full: "der letzte Bus"
  },
  {
    id: "adj_018",
    prompt: "die neu__ Idee",
    answers: ["e"],
    alternatives: [["e"]],
    case: "nominativ",
    gender: "f",
    table: 2,
    hint: "die + Nom./Akk. Sing. fem. → Adjektiv -e.",
    full: "die neue Idee"
  },
  {
    id: "adj_019",
    prompt: "die neu__ Ideen",
    answers: ["en"],
    alternatives: [["en"]],
    case: "nominativ",
    gender: "pl",
    table: 2,
    hint: "Plural mit Artikel → Adjektiv IMMER -en.",
    full: "die neuen Ideen"
  },
  {
    id: "adj_020",
    prompt: "den letzt__ Bus",
    answers: ["en"],
    alternatives: [["en"]],
    case: "akkusativ",
    gender: "m",
    table: 2,
    hint: "den (Akk. mask.) → Adjektiv -en.",
    full: "den letzten Bus"
  },
  {
    id: "adj_021",
    prompt: "mit dem neu__ E-Bike",
    answers: ["en"],
    alternatives: [["en"]],
    case: "dativ",
    gender: "n",
    table: 2,
    hint: "mit dem (Dativ) → Adjektiv -en. Dativ ist immer -en in Tab. 2.",
    full: "mit dem neuen E-Bike"
  },
  {
    id: "adj_022",
    prompt: "von den ander__ Leuten",
    answers: ["en"],
    alternatives: [["en"]],
    case: "dativ",
    gender: "pl",
    table: 2,
    hint: "Dativ Plural mit Artikel → -en.",
    full: "von den anderen Leuten"
  },
  {
    id: "adj_023",
    prompt: "an dies__ sonnig__ Tag",
    answers: ["em", "en"],
    alternatives: [["em"], ["en"]],
    case: "dativ",
    gender: "m",
    table: 2,
    hint: "an + Dativ (Zeitpunkt). diesem (Tab.1: -em), sonnigen (Tab.2: -en).",
    full: "an diesem sonnigen Tag"
  },
  {
    id: "adj_024",
    prompt: "wegen des schlecht__ Essens",
    answers: ["en"],
    alternatives: [["en"]],
    case: "genitiv",
    gender: "n",
    table: 2,
    hint: "Genitiv mit Artikel: Artikel hat -es, Adjektiv hat -en.",
    full: "wegen des schlechten Essens"
  },
  {
    id: "adj_025",
    prompt: "nach dem nächst__ Sonntag",
    answers: ["en"],
    alternatives: [["en"]],
    case: "dativ",
    gender: "m",
    table: 2,
    hint: "nach dem (Dativ) → Adjektiv -en.",
    full: "nach dem nächsten Sonntag"
  },
  {
    id: "adj_026",
    prompt: "während der groß__ Ferien",
    answers: ["en"],
    alternatives: [["en"]],
    case: "genitiv",
    gender: "pl",
    table: 2,
    hint: "während + Genitiv. Genitiv Plural mit Artikel → -en.",
    full: "während der großen Ferien"
  },
  {
    id: "adj_027",
    prompt: "trotz des hoh__ Preises",
    answers: ["en"],
    alternatives: [["en"]],
    case: "genitiv",
    gender: "m",
    table: 2,
    hint: "trotz + Gen. mask. Adjektiv -en. (Note: hoh-, not hoch-, before endings.)",
    full: "trotz des hohen Preises"
  },
  {
    id: "adj_028",
    prompt: "diese gut__ Nachricht",
    answers: ["e"],
    alternatives: [["e"]],
    case: "nominativ",
    gender: "f",
    table: 2,
    hint: "diese (Nom. fem.) → Adjektiv -e.",
    full: "diese gute Nachricht"
  },
  {
    id: "adj_029",
    prompt: "alle wichtig__ Fragen",
    answers: ["en"],
    alternatives: [["en"]],
    case: "nominativ",
    gender: "pl",
    table: 2,
    hint: "alle wirkt wie der bestimmte Artikel → Adjektiv -en.",
    full: "alle wichtigen Fragen"
  },
  {
    id: "adj_030",
    prompt: "für diese schwierig__ Arbeit",
    answers: ["e"],
    alternatives: [["e"]],
    case: "akkusativ",
    gender: "f",
    table: 2,
    hint: "für + Akk. fem. mit Artikel → Adjektiv -e.",
    full: "für diese schwierige Arbeit"
  },

  // ============ MIXED: ein / kein / possessive (Tab 1 in 3 cells, else Tab 2) ============
  // ein/kein/mein/dein/sein/ihr/unser/euer have NO ending in:
  //   Nom mask, Nom neut, Akk neut → adjective uses Tab 1 (strong)
  // Everywhere else → adjective uses Tab 2 (weak, -en)
  {
    id: "adj_031",
    prompt: "ein lang__ Brief",
    answers: ["er"],
    alternatives: [["er"]],
    case: "nominativ",
    gender: "m",
    table: "mixed",
    hint: "ein (Nom. mask.) hat keine Endung → Adjektiv übernimmt: -er (Tab. 1).",
    full: "ein langer Brief"
  },
  {
    id: "adj_032",
    prompt: "ein neu__ Hemd",
    answers: ["es"],
    alternatives: [["es"]],
    case: "nominativ",
    gender: "n",
    table: "mixed",
    hint: "ein (Nom./Akk. neut.) hat keine Endung → Adjektiv: -es (Tab. 1).",
    full: "ein neues Hemd"
  },
  {
    id: "adj_033",
    prompt: "kein frisch__ Fisch",
    answers: ["er"],
    alternatives: [["er"]],
    case: "nominativ",
    gender: "m",
    table: "mixed",
    hint: "kein verhält sich wie ein → Nom. mask. ohne Endung, Adjektiv -er.",
    full: "kein frischer Fisch"
  },
  {
    id: "adj_034",
    prompt: "mein neu__ Fahrrad",
    answers: ["es"],
    alternatives: [["es"]],
    case: "nominativ",
    gender: "n",
    table: "mixed",
    hint: "mein (Nom./Akk. neut.) endungslos → Adjektiv -es.",
    full: "mein neues Fahrrad"
  },
  {
    id: "adj_035",
    prompt: "einen lang__ Brief",
    answers: ["en"],
    alternatives: [["en"]],
    case: "akkusativ",
    gender: "m",
    table: "mixed",
    hint: "einen hat -en (Akk. mask.) → Adjektiv -en (Tab. 2).",
    full: "einen langen Brief"
  },
  {
    id: "adj_036",
    prompt: "eine gut__ Idee",
    answers: ["e"],
    alternatives: [["e"]],
    case: "nominativ",
    gender: "f",
    table: "mixed",
    hint: "eine hat -e → Adjektiv -e (Tab. 2).",
    full: "eine gute Idee"
  },
  {
    id: "adj_037",
    prompt: "mit einem klein__ Hund",
    answers: ["en"],
    alternatives: [["en"]],
    case: "dativ",
    gender: "m",
    table: "mixed",
    hint: "einem (Dat. mask.) hat -em → Adjektiv -en (Tab. 2).",
    full: "mit einem kleinen Hund"
  },
  {
    id: "adj_038",
    prompt: "seit einer halb__ Stunde",
    answers: ["en"],
    alternatives: [["en"]],
    case: "dativ",
    gender: "f",
    table: "mixed",
    hint: "einer (Dat. fem.) hat -er → Adjektiv -en.",
    full: "seit einer halben Stunde"
  },
  {
    id: "adj_039",
    prompt: "wegen seines krank__ Onkels",
    answers: ["en"],
    alternatives: [["en"]],
    case: "genitiv",
    gender: "m",
    table: "mixed",
    hint: "Genitiv mask.: Possessiv hat -es, Adjektiv -en.",
    full: "wegen seines kranken Onkels"
  },
  {
    id: "adj_040",
    prompt: "für seine klein__ Schwester",
    answers: ["e"],
    alternatives: [["e"]],
    case: "akkusativ",
    gender: "f",
    table: "mixed",
    hint: "seine (Akk. fem.) hat -e → Adjektiv -e.",
    full: "für seine kleine Schwester"
  },
  {
    id: "adj_041",
    prompt: "ohne ein nett__ Wort",
    answers: ["es"],
    alternatives: [["es"]],
    case: "akkusativ",
    gender: "n",
    table: "mixed",
    hint: "ein (Akk. neut.) endungslos → Adjektiv -es (Tab. 1).",
    full: "ohne ein nettes Wort"
  },
  {
    id: "adj_042",
    prompt: "für unser lieb__ Kind",
    answers: ["es"],
    alternatives: [["es"]],
    case: "akkusativ",
    gender: "n",
    table: "mixed",
    hint: "unser (Akk. neut.) endungslos → Adjektiv -es.",
    full: "für unser liebes Kind"
  },
  {
    id: "adj_043",
    prompt: "meine türkisch__ Freunde",
    answers: ["en"],
    alternatives: [["en"]],
    case: "nominativ",
    gender: "pl",
    table: "mixed",
    hint: "meine (Plural) hat -e → Adjektiv -en. Plural mit Possessiv = immer -en.",
    full: "meine türkischen Freunde"
  },
  {
    id: "adj_044",
    prompt: "vor einem halb__ Jahr",
    answers: ["en"],
    alternatives: [["en"]],
    case: "dativ",
    gender: "n",
    table: "mixed",
    hint: "einem (Dat. neut.) hat -em → Adjektiv -en.",
    full: "vor einem halben Jahr"
  },
  {
    id: "adj_045",
    prompt: "an seinem siebzigst__ Geburtstag",
    answers: ["en"],
    alternatives: [["en"]],
    case: "dativ",
    gender: "m",
    table: "mixed",
    hint: "seinem (Dat. mask.) hat -em → Adjektiv -en.",
    full: "an seinem siebzigsten Geburtstag"
  },

  // ============ Multi-blank: article + adjective together ============
  {
    id: "adj_046",
    prompt: "in d__ groß__ Saal",
    answers: ["en", "en"],
    alternatives: [["en"], ["en"]],
    case: "akkusativ",
    gender: "m",
    table: 2,
    hint: "in + Akk. (wohin?). den großen Saal.",
    full: "in den großen Saal"
  },
  {
    id: "adj_047",
    prompt: "auf d__ Sofa saß ein__ klein__ Junge",
    answers: ["em", "", "er"],
    alternatives: [["em"], [""], ["er"]],
    case: "nominativ",
    gender: "m",
    table: "mixed",
    hint: "auf dem Sofa (Dat. neut.); ein kleiner Junge (Nom. mask., ein endungslos → Adj. -er).",
    full: "auf dem Sofa saß ein kleiner Junge"
  },
  {
    id: "adj_048",
    prompt: "bei jung__ Leuten",
    answers: ["en"],
    alternatives: [["en"]],
    case: "dativ",
    gender: "pl",
    table: 1,
    hint: "Dativ Plural ohne Artikel → -en (the only Tab.1 cell that's -en).",
    full: "bei jungen Leuten"
  },
  {
    id: "adj_049",
    prompt: "ein__ schön__, neu__ Wohnung",
    answers: ["e", "e", "e"],
    alternatives: [["e"], ["e"], ["e"]],
    case: "nominativ",
    gender: "f",
    table: "mixed",
    hint: "eine schöne, neue Wohnung. Nom. fem.: alle drei = -e.",
    full: "eine schöne, neue Wohnung"
  },
  {
    id: "adj_050",
    prompt: "dies__ schwierig__ und komplex__ Aufgaben",
    answers: ["e", "en", "en"],
    alternatives: [["e"], ["en"], ["en"]],
    case: "nominativ",
    gender: "pl",
    table: 2,
    hint: "diese (Nom. Pl.); zwei Adjektive parallel → beide -en.",
    full: "diese schwierigen und komplexen Aufgaben"
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = ADJECTIVE_ITEMS;
}
