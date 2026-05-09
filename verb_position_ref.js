// Verb Position Reference Card
// A study reference, not a drill. Three groups:
//   1. Verb ans Ende (subordinating) — verb goes to the end
//   2. Verb in 2. Position (coordinating) — no word order change
//   3. Inversion (adverbial connectors) — verb stays at 2, subject pushed to 3

const VERB_POSITION_REFERENCE = {
  title: "Verb-Position auf einen Blick",
  subtitle: "Die drei Gruppen von Konjunktionen — und was sie mit dem Verb machen",

  groups: [
    {
      id: "verb-end",
      label: "Verb ans Ende",
      sublabel: "Nebensatz — Subordinierende Konjunktionen",
      color: "amber",
      icon: "→ ⏹",
      rule: "Komma + diese Wörter = Verb ans Ende. Immer.",
      items: [
        { conj: "dass", meaning: "that", example: "Ich glaube, dass er krank ist." },
        { conj: "weil", meaning: "because", example: "Ich bleibe zu Hause, weil ich müde bin." },
        { conj: "obwohl", meaning: "although", example: "Er geht aus, obwohl er krank ist." },
        { conj: "wenn", meaning: "when / if", example: "Ruf mich an, wenn du Zeit hast." },
        { conj: "als", meaning: "when (past, single event)", example: "Als ich klein war, wohnte ich in Wien." },
        { conj: "ob", meaning: "whether", example: "Ich weiß nicht, ob er kommt." },
        { conj: "damit", meaning: "so that (purpose)", example: "Ich helfe dir, damit du es schneller schaffst." },
        { conj: "bevor", meaning: "before", example: "Ruf mich an, bevor du gehst." },
        { conj: "nachdem", meaning: "after", example: "Nachdem ich gegessen hatte, ging ich schlafen." },
        { conj: "bis", meaning: "until", example: "Warte, bis ich fertig bin." },
        { conj: "seit / seitdem", meaning: "since (time)", example: "Seitdem er in Berlin wohnt, ist er glücklicher." },
        { conj: "während", meaning: "while", example: "Ich höre Musik, während ich lerne." },
        { conj: "falls", meaning: "in case / if", example: "Falls du Zeit hast, komm vorbei." },
        { conj: "sodass", meaning: "so that (result)", example: "Er lernt viel, sodass er die Prüfung besteht." },
        { conj: "da", meaning: "since / because", example: "Da es regnet, bleiben wir zu Hause." }
      ]
    },
    {
      id: "verb-second",
      label: "Verb in Position 2",
      sublabel: "Hauptsatz — Nebenordnende Konjunktionen",
      color: "blue",
      icon: "= ↔",
      rule: "Diese Wörter verbinden zwei Hauptsätze. Keine Änderung der Wortstellung.",
      items: [
        { conj: "und", meaning: "and", example: "Ich lerne Deutsch und ich gehe zur Schule." },
        { conj: "aber", meaning: "but", example: "Ich will kommen, aber ich habe keine Zeit." },
        { conj: "oder", meaning: "or", example: "Kommst du mit oder bleibst du zu Hause?" },
        { conj: "denn", meaning: "because (= weil, but main clause)", example: "Ich bleibe zu Hause, denn ich bin müde." },
        { conj: "sondern", meaning: "but rather (after negation)", example: "Er trinkt keinen Kaffee, sondern Tee." }
      ],
      note: "denn vs. weil: same meaning, but denn is coordinating (no verb to end), weil is subordinating (verb to end)."
    },
    {
      id: "inversion",
      label: "Inversion",
      sublabel: "Adverbiale Konnektoren — Verb 2, Subjekt 3",
      color: "purple",
      icon: "↻ V-S",
      rule: "Diese Wörter stehen am Anfang (Position 1). Verb bleibt Position 2. Subjekt rutscht auf Position 3.",
      items: [
        { conj: "deshalb", meaning: "therefore", example: "Ich bin krank, deshalb gehe ich nicht aus." },
        { conj: "deswegen", meaning: "for that reason", example: "Es regnet, deswegen nehme ich den Schirm." },
        { conj: "trotzdem", meaning: "nevertheless", example: "Es regnet, trotzdem fahre ich Fahrrad." },
        { conj: "außerdem", meaning: "furthermore, besides", example: "Außerdem habe ich keine Zeit." },
        { conj: "dann", meaning: "then", example: "Ich esse, dann gehe ich schlafen." },
        { conj: "danach", meaning: "after that", example: "Danach trinken wir einen Kaffee." },
        { conj: "jedoch", meaning: "however", example: "Jedoch bin ich nicht sicher." },
        { conj: "daher", meaning: "hence", example: "Daher müssen wir vorsichtig sein." },
        { conj: "stattdessen", meaning: "instead", example: "Stattdessen bleiben wir zu Hause." }
      ]
    }
  ],

  comparison_table: {
    title: "Schnellvergleich: drei Sätze, ein Inhalt",
    rows: [
      { type: "Nebensatz (verb-final)", example: "Ich bleibe zu Hause, weil ich müde bin." },
      { type: "Hauptsatz + Hauptsatz", example: "Ich bleibe zu Hause, denn ich bin müde." },
      { type: "Inversion", example: "Ich bin müde, deshalb bleibe ich zu Hause." }
    ]
  }
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = VERB_POSITION_REFERENCE;
}
