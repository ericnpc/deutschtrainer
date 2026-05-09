// Modalverben im Perfekt Drill Data
// Coverage: The double-infinitive pattern in Perfekt and in Nebensatz
//
// Two sub-types:
//   transform: Convert Präteritum modal sentence → Perfekt with double infinitive
//              "Ich musste viel lernen." → "Ich habe viel lernen müssen."
//   nebensatz: Build a Nebensatz with modal in Perfekt (auxiliary BEFORE the two infinitives)
//              "Ich weiß, dass er hat arbeiten müssen." (note: hat moves to position 1 of the verb cluster)
//
// Total: 30 items
//
// Each item has scaffold(s) with ___ blanks. Sub-types use the same fill-in UI but test different patterns.
//
// Critical pattern reminders for double infinitive:
//   Main clause: Subject + haben + ... + Vollverb-Inf + Modal-Inf
//      "Ich habe gestern lange arbeiten müssen."
//   Nebensatz: Subject + ... + Vollverb-Inf + Modal-Inf + haben (auxiliary jumps BEFORE the cluster)
//      "..., weil ich gestern lange habe arbeiten müssen."

const MODAL_PERFEKT_ITEMS = [
  // ============ TRANSFORM: Präteritum → Perfekt double-infinitive ============
  {
    id: "mp_001",
    prompt_en: "Did you really have to learn a lot? (Perfekt with double infinitive)",
    base: "Ich musste viel lernen.",
    scaffold: "___ du wirklich viel ___ ___?",
    answers: ["Hast", "lernen", "müssen"],
    alternatives: [["Hast"], ["lernen"], ["müssen"]],
    type: "transform",
    pattern: "Hauptsatz: Hilfsverb (haben) + ... + Vollverb-Infinitiv + Modal-Infinitiv",
    hint: "Modal in Perfekt: NOT Partizip II, but DOUBLE INFINITIVE. Order: lernen + müssen at the end."
  },
  {
    id: "mp_002",
    prompt_en: "Did you really want to call us? (Perfekt)",
    base: "Ich wollte euch anrufen.",
    scaffold: "___ du uns wirklich ___ ___?",
    answers: ["Hast", "anrufen", "wollen"],
    alternatives: [["Hast"], ["anrufen"], ["wollen"]],
    type: "transform",
    pattern: "haben + Vollverb-Inf + Modal-Inf",
    hint: "Double infinitive at the end: anrufen wollen."
  },
  {
    id: "mp_003",
    prompt_en: "Were you not allowed to stay? (Perfekt)",
    base: "Ich durfte nicht bleiben.",
    scaffold: "___ du nicht ___ ___?",
    answers: ["Hast", "bleiben", "dürfen"],
    alternatives: [["Hast"], ["bleiben"], ["dürfen"]],
    type: "transform",
    pattern: "haben + Vollverb-Inf + Modal-Inf",
    hint: "bleiben dürfen at the end (despite bleiben normally taking sein in Perfekt)."
  },
  {
    id: "mp_004",
    prompt_en: "Did you have to work longer? (Perfekt)",
    base: "Ich musste länger arbeiten.",
    scaffold: "___ du länger ___ ___?",
    answers: ["Hast", "arbeiten", "müssen"],
    alternatives: [["Hast"], ["arbeiten", "arbeiten "], ["müssen"]],
    type: "transform",
    pattern: "haben + Vollverb-Inf + Modal-Inf",
    hint: "arbeiten müssen at the end."
  },
  {
    id: "mp_005",
    prompt_en: "Were you not able to help? (Perfekt)",
    base: "Ich konnte nicht helfen.",
    scaffold: "___ du nicht ___ ___?",
    answers: ["Hast", "helfen", "können"],
    alternatives: [["Hast"], ["helfen"], ["können"]],
    type: "transform",
    pattern: "haben + Vollverb-Inf + Modal-Inf",
    hint: "helfen können at the end."
  },
  {
    id: "mp_006",
    prompt_en: "Did you really have to clean everything? (Perfekt)",
    base: "Ich musste alles aufräumen.",
    scaffold: "___ du wirklich alles ___ ___?",
    answers: ["Hast", "aufräumen", "müssen"],
    alternatives: [["Hast"], ["aufräumen"], ["müssen"]],
    type: "transform",
    pattern: "haben + Vollverb-Inf + Modal-Inf",
    hint: "Separable verb stays together as one infinitive: aufräumen."
  },
  {
    id: "mp_007",
    prompt_en: "Were you not allowed to tell anything? (Perfekt)",
    base: "Ich durfte nichts erzählen.",
    scaffold: "___ du nichts ___ ___?",
    answers: ["Hast", "erzählen", "dürfen"],
    alternatives: [["Hast"], ["erzählen"], ["dürfen"]],
    type: "transform",
    pattern: "haben + Vollverb-Inf + Modal-Inf",
    hint: "erzählen dürfen at the end."
  },
  {
    id: "mp_008",
    prompt_en: "Did you want to say goodbye? (Perfekt)",
    base: "Ich wollte mich verabschieden.",
    scaffold: "___ du dich ___ ___?",
    answers: ["Hast", "verabschieden", "wollen"],
    alternatives: [["Hast"], ["verabschieden"], ["wollen"]],
    type: "transform",
    pattern: "haben + reflexive Pronomen + Vollverb-Inf + Modal-Inf",
    hint: "Reflexive pronoun stays in mid-field: dich. Then verabschieden wollen."
  },
  {
    id: "mp_009",
    prompt_en: "Were you not able to understand anything? (Perfekt)",
    base: "Ich konnte nichts verstehen.",
    scaffold: "___ du nichts ___ ___?",
    answers: ["Hast", "verstehen", "können"],
    alternatives: [["Hast"], ["verstehen"], ["können"]],
    type: "transform",
    pattern: "haben + Vollverb-Inf + Modal-Inf",
    hint: "verstehen können at the end."
  },
  {
    id: "mp_010",
    prompt_en: "Did you not want to eat anything? (Perfekt)",
    base: "Ich wollte nichts essen.",
    scaffold: "___ du nichts ___ ___?",
    answers: ["Hast", "essen", "wollen"],
    alternatives: [["Hast"], ["essen"], ["wollen"]],
    type: "transform",
    pattern: "haben + Vollverb-Inf + Modal-Inf",
    hint: "essen wollen at the end."
  },
  {
    id: "mp_011",
    prompt_en: "Did you have to take a taxi? (Perfekt)",
    base: "Wir mussten ein Taxi nehmen.",
    scaffold: "___ ihr ein Taxi ___ ___?",
    answers: ["Habt", "nehmen", "müssen"],
    alternatives: [["Habt"], ["nehmen"], ["müssen"]],
    type: "transform",
    pattern: "haben + Vollverb-Inf + Modal-Inf",
    hint: "ihr-form: Habt. Then nehmen müssen at the end."
  },
  {
    id: "mp_012",
    prompt_en: "Was she allowed to drive the car? (Perfekt)",
    base: "Sie durfte das Auto fahren.",
    scaffold: "___ sie das Auto ___ ___?",
    answers: ["Hat", "fahren", "dürfen"],
    alternatives: [["Hat"], ["fahren"], ["dürfen"]],
    type: "transform",
    pattern: "haben + Vollverb-Inf + Modal-Inf",
    hint: "Even motion verbs (fahren, normally sein) take HABEN with modals. fahren dürfen."
  },
  {
    id: "mp_013",
    prompt_en: "Did the children have to go to bed? (Perfekt)",
    base: "Die Kinder mussten ins Bett gehen.",
    scaffold: "___ die Kinder ins Bett ___ ___?",
    answers: ["Haben", "gehen", "müssen"],
    alternatives: [["Haben"], ["gehen"], ["müssen"]],
    type: "transform",
    pattern: "haben + Vollverb-Inf + Modal-Inf",
    hint: "Plural: Haben. Even gehen + modal → haben (not sind). gehen müssen at end."
  },
  {
    id: "mp_014",
    prompt_en: "He couldn't sleep last night. (Perfekt)",
    base: "Er konnte letzte Nacht nicht schlafen.",
    scaffold: "Er ___ letzte Nacht nicht ___ ___.",
    answers: ["hat", "schlafen", "können"],
    alternatives: [["hat"], ["schlafen"], ["können"]],
    type: "transform",
    pattern: "haben + Vollverb-Inf + Modal-Inf",
    hint: "Statement (not question). schlafen können at the end."
  },
  {
    id: "mp_015",
    prompt_en: "I have always wanted to learn German.",
    base: "Ich wollte schon immer Deutsch lernen.",
    scaffold: "Ich ___ schon immer Deutsch ___ ___.",
    answers: ["habe", "lernen", "wollen"],
    alternatives: [["habe"], ["lernen"], ["wollen"]],
    type: "transform",
    pattern: "haben + Vollverb-Inf + Modal-Inf",
    hint: "lernen wollen at the end."
  },
  {
    id: "mp_016",
    prompt_en: "We weren't able to come yesterday.",
    base: "Wir konnten gestern nicht kommen.",
    scaffold: "Wir ___ gestern nicht ___ ___.",
    answers: ["haben", "kommen", "können"],
    alternatives: [["haben"], ["kommen"], ["können"]],
    type: "transform",
    pattern: "haben + Vollverb-Inf + Modal-Inf",
    hint: "kommen + modal → haben kommen können (not sind gekommen)."
  },
  {
    id: "mp_017",
    prompt_en: "She had to wait a long time.",
    base: "Sie musste lange warten.",
    scaffold: "Sie ___ lange ___ ___.",
    answers: ["hat", "warten", "müssen"],
    alternatives: [["hat"], ["warten"], ["müssen"]],
    type: "transform",
    pattern: "haben + Vollverb-Inf + Modal-Inf",
    hint: "warten müssen at the end."
  },
  {
    id: "mp_018",
    prompt_en: "I wasn't allowed to say anything about it.",
    base: "Ich durfte nichts darüber sagen.",
    scaffold: "Ich ___ nichts darüber ___ ___.",
    answers: ["habe", "sagen", "dürfen"],
    alternatives: [["habe"], ["sagen"], ["dürfen"]],
    type: "transform",
    pattern: "haben + Vollverb-Inf + Modal-Inf",
    hint: "sagen dürfen at the end."
  },

  // ============ NEBENSATZ: modal Perfekt in subordinate clauses ============
  // The double infinitive pattern flips: aux moves BEFORE the two infinitives
  // Standard Nebensatz: ..., weil ich gestern habe arbeiten müssen.  (NOT *gearbeitet müssen, NOT arbeiten müssen habe)
  {
    id: "mp_019",
    prompt_en: "I'm tired because I had to work a lot.",
    main_clause: "Ich bin müde,",
    conjunction: "weil",
    scaffold: "ich viel ___ ___ ___.",
    answers: ["habe", "arbeiten", "müssen"],
    alternatives: [["habe"], ["arbeiten"], ["müssen"]],
    type: "nebensatz",
    pattern: "Nebensatz mit Doppelinfinitiv: HILFSVERB rückt VOR die zwei Infinitive",
    hint: "Nebensatz with double infinitive: habe BEFORE the cluster (not at the end!). Order: habe + arbeiten + müssen."
  },
  {
    id: "mp_020",
    prompt_en: "She knows that I had to leave early.",
    main_clause: "Sie weiß,",
    conjunction: "dass",
    scaffold: "ich früh ___ ___ ___.",
    answers: ["habe", "gehen", "müssen"],
    alternatives: [["habe"], ["gehen"], ["müssen"]],
    type: "nebensatz",
    pattern: "Nebensatz mit Doppelinfinitiv: habe + Inf + Modal-Inf",
    hint: "Hilfsverb habe steht VOR dem Doppelinfinitiv: habe gehen müssen."
  },
  {
    id: "mp_021",
    prompt_en: "I'm sorry that I couldn't come.",
    main_clause: "Es tut mir leid,",
    conjunction: "dass",
    scaffold: "ich nicht ___ ___ ___.",
    answers: ["habe", "kommen", "können"],
    alternatives: [["habe"], ["kommen"], ["können"]],
    type: "nebensatz",
    pattern: "Nebensatz mit Doppelinfinitiv",
    hint: "habe kommen können — auxiliary FIRST in the verb cluster."
  },
  {
    id: "mp_022",
    prompt_en: "Although I had to work, I came to the party.",
    main_clause: "Obwohl",
    conjunction: "",
    scaffold: "ich ___ ___ ___, kam ich zur Party.",
    answers: ["habe", "arbeiten", "müssen"],
    alternatives: [["habe"], ["arbeiten"], ["müssen"]],
    type: "nebensatz",
    pattern: "Obwohl-clause leading: NS with double infinitive, then inverted main clause",
    hint: "Obwohl ich habe arbeiten müssen, ... — habe leads, then arbeiten müssen."
  },
  {
    id: "mp_023",
    prompt_en: "He says that he wasn't allowed to talk about it.",
    main_clause: "Er sagt,",
    conjunction: "dass",
    scaffold: "er nicht darüber ___ ___ ___.",
    answers: ["hat", "sprechen", "dürfen"],
    alternatives: [["hat"], ["sprechen"], ["dürfen"]],
    type: "nebensatz",
    pattern: "Nebensatz mit Doppelinfinitiv",
    hint: "er-form: hat. Order: hat sprechen dürfen."
  },
  {
    id: "mp_024",
    prompt_en: "I think that they had to leave early.",
    main_clause: "Ich glaube,",
    conjunction: "dass",
    scaffold: "sie früh ___ ___ ___.",
    answers: ["haben", "gehen", "müssen"],
    alternatives: [["haben"], ["gehen"], ["müssen"]],
    type: "nebensatz",
    pattern: "Nebensatz mit Doppelinfinitiv",
    hint: "sie (Plural): haben. Order: haben gehen müssen."
  },
  {
    id: "mp_025",
    prompt_en: "Because I had to wait a long time, I'm angry now.",
    main_clause: "Weil",
    conjunction: "",
    scaffold: "ich lange ___ ___ ___, bin ich jetzt sauer.",
    answers: ["habe", "warten", "müssen"],
    alternatives: [["habe"], ["warten"], ["müssen"]],
    type: "nebensatz",
    pattern: "Weil-clause leading: NS with double infinitive, then inverted main clause",
    hint: "Weil ich habe warten müssen, ... — note inversion in main clause: bin ich (not ich bin)."
  },
  {
    id: "mp_026",
    prompt_en: "I'm happy that I was able to help you.",
    main_clause: "Ich bin froh,",
    conjunction: "dass",
    scaffold: "ich dir ___ ___ ___.",
    answers: ["habe", "helfen", "können"],
    alternatives: [["habe"], ["helfen"], ["können"]],
    type: "nebensatz",
    pattern: "Nebensatz mit Doppelinfinitiv",
    hint: "habe helfen können — auxiliary first."
  },
  {
    id: "mp_027",
    prompt_en: "He admits that he should have called.",
    main_clause: "Er gibt zu,",
    conjunction: "dass",
    scaffold: "er ___ ___ ___.",
    answers: ["hätte", "anrufen", "sollen"],
    alternatives: [["hätte"], ["anrufen"], ["sollen"]],
    type: "nebensatz",
    pattern: "Konjunktiv II + Doppelinfinitiv (would/should have done X)",
    hint: "Past Konjunktiv II of modal: hätte + Inf + Modal-Inf. 'should have called' = hätte anrufen sollen."
  },
  {
    id: "mp_028",
    prompt_en: "I regret that I didn't want to listen.",
    main_clause: "Ich bedauere,",
    conjunction: "dass",
    scaffold: "ich nicht ___ ___ ___.",
    answers: ["habe", "zuhören", "wollen"],
    alternatives: [["habe"], ["zuhören"], ["wollen"]],
    type: "nebensatz",
    pattern: "Nebensatz mit Doppelinfinitiv",
    hint: "Separable verb zuhören stays together as one infinitive. habe zuhören wollen."
  },
  {
    id: "mp_029",
    prompt_en: "I'm angry because I had to wait so long.",
    main_clause: "Ich bin sauer,",
    conjunction: "weil",
    scaffold: "ich so lange ___ ___ ___.",
    answers: ["habe", "warten", "müssen"],
    alternatives: [["habe"], ["warten"], ["müssen"]],
    type: "nebensatz",
    pattern: "Nebensatz mit Doppelinfinitiv",
    hint: "habe warten müssen — auxiliary BEFORE the cluster."
  },
  {
    id: "mp_030",
    prompt_en: "She says she would have liked to come.",
    main_clause: "Sie sagt,",
    conjunction: "dass",
    scaffold: "sie gern ___ ___ ___.",
    answers: ["hätte", "kommen", "wollen"],
    alternatives: [["hätte"], ["kommen"], ["wollen"]],
    type: "nebensatz",
    pattern: "Konjunktiv II + Doppelinfinitiv",
    hint: "Would have wanted to: hätte + kommen + wollen. Past KII with double infinitive."
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = MODAL_PERFEKT_ITEMS;
}
