// Article Gender Patterns Reference Card
// A study reference, not a drill.
// Rules are grouped by reliability — "always" patterns vs "usually" patterns

const ARTICLE_PATTERNS_REFERENCE = {
  title: "Artikel-Patterns: Wann ist es der/die/das?",
  subtitle: "Hochzuverlässige Regeln für Artikel-Vorhersage",

  groups: [
    {
      id: "always-der",
      label: "Immer Maskulin",
      article: "der",
      color: "blue",
      icon: "🔵",
      rule: "Diese Patterns sind verlässlich maskulin.",
      items: [
        { pattern: "Wochentage", examples: ["der Montag", "der Dienstag", "der Sonntag"] },
        { pattern: "Monate", examples: ["der Januar", "der Mai", "der Oktober"] },
        { pattern: "Jahreszeiten", examples: ["der Frühling", "der Sommer", "der Herbst", "der Winter"] },
        { pattern: "Männliche Personen / Berufe", examples: ["der Vater", "der König", "der Fischer"] },
        { pattern: "Suffix -er (Personen)", examples: ["der Läufer", "der Verkäufer", "der Lehrer"] },
        { pattern: "Suffix -ismus", examples: ["der Sozialismus", "der Tourismus", "der Optimismus"] },
        { pattern: "Suffix -ling", examples: ["der Säugling", "der Frühling", "der Lehrling"] },
        { pattern: "Berge", examples: ["der Mont Blanc", "der Brocken", "der Zugspitze (Ausnahme: die)"] },
        { pattern: "Himmelsrichtungen", examples: ["der Norden", "der Süden", "der Osten", "der Westen"] },
        { pattern: "Wetter / Niederschlag", examples: ["der Regen", "der Schnee", "der Wind", "der Nebel"] },
        { pattern: "Alkoholische Getränke (außer Bier)", examples: ["der Wein", "der Whisky", "der Cocktail"] }
      ]
    },
    {
      id: "always-die",
      label: "Immer Feminin",
      article: "die",
      color: "red",
      icon: "🔴",
      rule: "Diese Suffixe sind 100% verlässlich feminin. WICHTIGSTE Gruppe für B1.",
      items: [
        { pattern: "Suffix -ung", examples: ["die Prüfung", "die Regierung", "die Wohnung", "die Übung"] },
        { pattern: "Suffix -keit / -igkeit", examples: ["die Möglichkeit", "die Unabhängigkeit", "die Festigkeit"] },
        { pattern: "Suffix -heit", examples: ["die Freiheit", "die Krankheit", "die Gesundheit"] },
        { pattern: "Suffix -schaft", examples: ["die Freundschaft", "die Gesellschaft", "die Wissenschaft"] },
        { pattern: "Suffix -ion / -tion", examples: ["die Tradition", "die Nation", "die Diskussion"] },
        { pattern: "Suffix -ität", examples: ["die Produktivität", "die Universität", "die Realität"] },
        { pattern: "Suffix -ei", examples: ["die Konditorei", "die Bäckerei", "die Polizei"] },
        { pattern: "Suffix -ie", examples: ["die Tragödie", "die Theorie", "die Demokratie"] },
        { pattern: "Suffix -ik", examples: ["die Technik", "die Politik", "die Musik"] },
        { pattern: "Suffix -anz / -enz", examples: ["die Toleranz", "die Distanz", "die Konferenz"] },
        { pattern: "Suffix -ur", examples: ["die Natur", "die Kultur", "die Tastatur"] },
        { pattern: "Weibliche Personen / Suffix -in", examples: ["die Mutter", "die Lehrerin", "die Freundin"] },
        { pattern: "Länder mit Artikel (oft fem.)", examples: ["die Türkei", "die Schweiz", "die Slowakei"] },
        { pattern: "Flüsse (meist deutsch/europäisch)", examples: ["die Donau", "die Elbe", "die Themse"] },
        { pattern: "Zahlen (substantiviert)", examples: ["die Eins", "die Zwei", "die Hundert"] },
        { pattern: "Blumen / Bäume (meist)", examples: ["die Rose", "die Tulpe", "die Eiche"] }
      ],
      note: "Wenn ein Wort eines dieser Suffixe hat, ist es feminin — keine Ausnahmen lernen nötig."
    },
    {
      id: "always-das",
      label: "Immer Neutrum",
      article: "das",
      color: "gray",
      icon: "⚪",
      rule: "Diese Patterns sind verlässlich neutrum.",
      items: [
        { pattern: "Suffix -chen", examples: ["das Mädchen", "das Brötchen", "das Häuschen"] },
        { pattern: "Suffix -lein", examples: ["das Fräulein", "das Büchlein", "das Tischlein"] },
        { pattern: "Nominalisierte Verben (Infinitiv als Nomen)", examples: ["das Versprechen", "das Essen", "das Lernen"] },
        { pattern: "Präfix Ge- (oft kollektiv)", examples: ["das Gebäude", "das Gemüse", "das Gewitter"] },
        { pattern: "Suffix -ment", examples: ["das Parlament", "das Dokument", "das Instrument"] },
        { pattern: "Suffix -um", examples: ["das Datum", "das Museum", "das Zentrum"] },
        { pattern: "Suffix -ium", examples: ["das Stadium", "das Stipendium", "das Studium"] },
        { pattern: "Suffix -tum", examples: ["das Eigentum", "das Wachstum", "das Altertum"] },
        { pattern: "Englische Lehnwörter (oft)", examples: ["das Handy", "das Internet", "das Hotel"] },
        { pattern: "Farben (substantiviert)", examples: ["das Rot", "das Blau", "das Grün"] },
        { pattern: "Länder ohne Artikel (Standard)", examples: ["Deutschland", "Frankreich", "Italien (kein Artikel im Standard)"] },
        { pattern: "Adjektive als Nomen (mit das)", examples: ["das Gute", "das Schöne", "das Neue"] }
      ]
    }
  ],

  exceptions_to_remember: {
    title: "Wichtige Ausnahmen",
    items: [
      { word: "das Mädchen", note: "natürliches Geschlecht weiblich, aber -chen → das" },
      { word: "der Käse", note: "trotz -e endung maskulin" },
      { word: "die See", note: "= das Meer (Wasser)" },
      { word: "der See", note: "= ein See im Land (Lake)" },
      { word: "das Bier", note: "Ausnahme bei alkoholischen Getränken" },
      { word: "der Irak / der Iran", note: "Länder mit Artikel können auch maskulin sein" },
      { word: "die USA", note: "Plural mit Artikel" }
    ]
  },

  compound_rule: {
    title: "Komposita: das LETZTE Wort bestimmt",
    explanation: "Bei zusammengesetzten Nomen entscheidet das letzte Glied über den Artikel.",
    examples: [
      { compound: "die Haustür", parts: "das Haus + die Tür → die Tür wins → die Haustür" },
      { compound: "der Hauseingang", parts: "das Haus + der Eingang → der Eingang wins → der Hauseingang" },
      { compound: "das Hausdach", parts: "das Haus + das Dach → das Dach → das Hausdach" }
    ]
  }
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = ARTICLE_PATTERNS_REFERENCE;
}
