// Nebensatz Word Order Drill Data
// Coverage: weil (8), dass (6), obwohl (6), wenn (4), als (4), nachdem (4), Perfekt-in-Nebensatz (8)
// Total: 40 items
//
// For each item:
//   - main_clause: shown to user as fixed text (the part before the conjunction)
//   - conjunction: the subordinating conjunction, shown right after main_clause
//   - tokens: the scrambled words the user must arrange
//   - correct_order: the right order of tokens (verb-final for Nebensatz)
//   - perfekt: true when the item tests Partizip II + Hilfsverb at the end

const NEBENSATZ_ITEMS = [
  // ========== WEIL (8) — verb-final, basic ==========
  {
    id: "neb_001",
    prompt_en: "I'm staying home because I'm sick.",
    main_clause: "Ich bleibe zu Hause,",
    conjunction: "weil",
    tokens: ["ich", "krank", "bin"],
    correct_order: ["ich", "krank", "bin"],
    type: "weil",
    hint: "In a weil-clause, the conjugated verb goes to the very end.",
    perfekt: false
  },
  {
    id: "neb_002",
    prompt_en: "She's learning German because she wants to live in Berlin.",
    main_clause: "Sie lernt Deutsch,",
    conjunction: "weil",
    tokens: ["sie", "in", "Berlin", "wohnen", "möchte"],
    correct_order: ["sie", "in", "Berlin", "wohnen", "möchte"],
    type: "weil",
    hint: "Modal verb (möchte) goes last; the infinitive (wohnen) just before it.",
    perfekt: false
  },
  {
    id: "neb_003",
    prompt_en: "He can't come because he has no time.",
    main_clause: "Er kann nicht kommen,",
    conjunction: "weil",
    tokens: ["er", "keine", "Zeit", "hat"],
    correct_order: ["er", "keine", "Zeit", "hat"],
    type: "weil",
    hint: "Verb (hat) at the end of the weil-clause.",
    perfekt: false
  },
  {
    id: "neb_004",
    prompt_en: "We're taking the train because it's faster.",
    main_clause: "Wir nehmen den Zug,",
    conjunction: "weil",
    tokens: ["er", "schneller", "ist"],
    correct_order: ["er", "schneller", "ist"],
    type: "weil",
    hint: "Predicate adjective comes before the verb at the end.",
    perfekt: false
  },
  {
    id: "neb_005",
    prompt_en: "I love her because she's honest.",
    main_clause: "Ich liebe sie,",
    conjunction: "weil",
    tokens: ["sie", "ehrlich", "ist"],
    correct_order: ["sie", "ehrlich", "ist"],
    type: "weil",
    hint: "Verb-final.",
    perfekt: false
  },
  {
    id: "neb_006",
    prompt_en: "We're moving because the rent is too expensive.",
    main_clause: "Wir ziehen um,",
    conjunction: "weil",
    tokens: ["die", "Miete", "zu", "teuer", "ist"],
    correct_order: ["die", "Miete", "zu", "teuer", "ist"],
    type: "weil",
    hint: "Subject + adverbial + adjective + verb. Verb dead last.",
    perfekt: false
  },
  {
    id: "neb_007",
    prompt_en: "He's tired because he's working a lot.",
    main_clause: "Er ist müde,",
    conjunction: "weil",
    tokens: ["er", "viel", "arbeitet"],
    correct_order: ["er", "viel", "arbeitet"],
    type: "weil",
    hint: "Verb-final.",
    perfekt: false
  },
  {
    id: "neb_008",
    prompt_en: "I have to study because I'm taking an exam tomorrow.",
    main_clause: "Ich muss lernen,",
    conjunction: "weil",
    tokens: ["ich", "morgen", "eine", "Prüfung", "habe"],
    correct_order: ["ich", "morgen", "eine", "Prüfung", "habe"],
    type: "weil",
    hint: "Subject + time + object + verb. Verb at the end.",
    perfekt: false
  },

  // ========== DASS (6) ==========
  {
    id: "neb_009",
    prompt_en: "I think that he's right.",
    main_clause: "Ich denke,",
    conjunction: "dass",
    tokens: ["er", "recht", "hat"],
    correct_order: ["er", "recht", "hat"],
    type: "dass",
    hint: "dass-clauses are subordinate — verb to the end.",
    perfekt: false
  },
  {
    id: "neb_010",
    prompt_en: "She knows that I live in Munich.",
    main_clause: "Sie weiß,",
    conjunction: "dass",
    tokens: ["ich", "in", "München", "wohne"],
    correct_order: ["ich", "in", "München", "wohne"],
    type: "dass",
    hint: "Verb-final.",
    perfekt: false
  },
  {
    id: "neb_011",
    prompt_en: "It's important that we listen carefully.",
    main_clause: "Es ist wichtig,",
    conjunction: "dass",
    tokens: ["wir", "gut", "zuhören"],
    correct_order: ["wir", "gut", "zuhören"],
    type: "dass",
    hint: "Separable verb stays together at the end of the clause.",
    perfekt: false
  },
  {
    id: "neb_012",
    prompt_en: "I hope that you can come.",
    main_clause: "Ich hoffe,",
    conjunction: "dass",
    tokens: ["du", "kommen", "kannst"],
    correct_order: ["du", "kommen", "kannst"],
    type: "dass",
    hint: "Modal at the very end; infinitive just before.",
    perfekt: false
  },
  {
    id: "neb_013",
    prompt_en: "I'm sorry that I'm late.",
    main_clause: "Es tut mir leid,",
    conjunction: "dass",
    tokens: ["ich", "zu", "spät", "bin"],
    correct_order: ["ich", "zu", "spät", "bin"],
    type: "dass",
    hint: "Verb-final.",
    perfekt: false
  },
  {
    id: "neb_014",
    prompt_en: "I'm glad that you're here.",
    main_clause: "Ich freue mich,",
    conjunction: "dass",
    tokens: ["du", "da", "bist"],
    correct_order: ["du", "da", "bist"],
    type: "dass",
    hint: "Verb-final.",
    perfekt: false
  },

  // ========== OBWOHL (6) ==========
  {
    id: "neb_015",
    prompt_en: "We're going for a walk although it's raining.",
    main_clause: "Wir gehen spazieren,",
    conjunction: "obwohl",
    tokens: ["es", "regnet"],
    correct_order: ["es", "regnet"],
    type: "obwohl",
    hint: "obwohl is subordinating — verb to the end.",
    perfekt: false
  },
  {
    id: "neb_016",
    prompt_en: "He's coming to the party although he's tired.",
    main_clause: "Er kommt zur Party,",
    conjunction: "obwohl",
    tokens: ["er", "müde", "ist"],
    correct_order: ["er", "müde", "ist"],
    type: "obwohl",
    hint: "Verb-final.",
    perfekt: false
  },
  {
    id: "neb_017",
    prompt_en: "I bought the book although it's expensive.",
    main_clause: "Ich habe das Buch gekauft,",
    conjunction: "obwohl",
    tokens: ["es", "teuer", "ist"],
    correct_order: ["es", "teuer", "ist"],
    type: "obwohl",
    hint: "Verb at the end.",
    perfekt: false
  },
  {
    id: "neb_018",
    prompt_en: "She's still working although it's already late.",
    main_clause: "Sie arbeitet noch,",
    conjunction: "obwohl",
    tokens: ["es", "schon", "spät", "ist"],
    correct_order: ["es", "schon", "spät", "ist"],
    type: "obwohl",
    hint: "Adverbs come before the final verb.",
    perfekt: false
  },
  {
    id: "neb_019",
    prompt_en: "I understand it although I don't speak German very well.",
    main_clause: "Ich verstehe es,",
    conjunction: "obwohl",
    tokens: ["ich", "nicht", "so", "gut", "Deutsch", "spreche"],
    correct_order: ["ich", "nicht", "so", "gut", "Deutsch", "spreche"],
    type: "obwohl",
    hint: "Object before verb; verb dead last.",
    perfekt: false
  },
  {
    id: "neb_020",
    prompt_en: "He doesn't want to eat although he's hungry.",
    main_clause: "Er will nicht essen,",
    conjunction: "obwohl",
    tokens: ["er", "Hunger", "hat"],
    correct_order: ["er", "Hunger", "hat"],
    type: "obwohl",
    hint: "Verb-final.",
    perfekt: false
  },

  // ========== WENN (4) ==========
  {
    id: "neb_021",
    prompt_en: "Call me if you have time.",
    main_clause: "Ruf mich an,",
    conjunction: "wenn",
    tokens: ["du", "Zeit", "hast"],
    correct_order: ["du", "Zeit", "hast"],
    type: "wenn",
    hint: "wenn = if/whenever — subordinating, verb-final.",
    perfekt: false
  },
  {
    id: "neb_022",
    prompt_en: "I always drink coffee when I get up.",
    main_clause: "Ich trinke immer Kaffee,",
    conjunction: "wenn",
    tokens: ["ich", "aufstehe"],
    correct_order: ["ich", "aufstehe"],
    type: "wenn",
    hint: "Separable verb reunited at the end.",
    perfekt: false
  },
  {
    id: "neb_023",
    prompt_en: "We'll come if the weather is good.",
    main_clause: "Wir kommen,",
    conjunction: "wenn",
    tokens: ["das", "Wetter", "gut", "ist"],
    correct_order: ["das", "Wetter", "gut", "ist"],
    type: "wenn",
    hint: "Verb dead last.",
    perfekt: false
  },
  {
    id: "neb_024",
    prompt_en: "I'm happy when I see you.",
    main_clause: "Ich freue mich,",
    conjunction: "wenn",
    tokens: ["ich", "dich", "sehe"],
    correct_order: ["ich", "dich", "sehe"],
    type: "wenn",
    hint: "Verb-final.",
    perfekt: false
  },

  // ========== ALS (4) — single past event ==========
  {
    id: "neb_025",
    prompt_en: "When I was a child, I lived in Hamburg.",
    main_clause: "Als ich ein Kind war,",
    conjunction: "",
    tokens: ["wohnte", "ich", "in", "Hamburg"],
    correct_order: ["wohnte", "ich", "in", "Hamburg"],
    type: "als",
    hint: "When the als-clause comes first, the main clause uses inverted order: verb-subject.",
    perfekt: false
  },
  {
    id: "neb_026",
    prompt_en: "I was happy when I got the news.",
    main_clause: "Ich war glücklich,",
    conjunction: "als",
    tokens: ["ich", "die", "Nachricht", "bekam"],
    correct_order: ["ich", "die", "Nachricht", "bekam"],
    type: "als",
    hint: "als = when (single past event) — verb at end.",
    perfekt: false
  },
  {
    id: "neb_027",
    prompt_en: "She cried when she heard the song.",
    main_clause: "Sie weinte,",
    conjunction: "als",
    tokens: ["sie", "das", "Lied", "hörte"],
    correct_order: ["sie", "das", "Lied", "hörte"],
    type: "als",
    hint: "Verb-final.",
    perfekt: false
  },
  {
    id: "neb_028",
    prompt_en: "It was already dark when we arrived.",
    main_clause: "Es war schon dunkel,",
    conjunction: "als",
    tokens: ["wir", "ankamen"],
    correct_order: ["wir", "ankamen"],
    type: "als",
    hint: "Separable verb fused at the end.",
    perfekt: false
  },

  // ========== NACHDEM (4) — sequence with past perfect ==========
  {
    id: "neb_029",
    prompt_en: "After we had eaten, we went to the cinema.",
    main_clause: "Nachdem wir gegessen hatten,",
    conjunction: "",
    tokens: ["gingen", "wir", "ins", "Kino"],
    correct_order: ["gingen", "wir", "ins", "Kino"],
    type: "nachdem",
    hint: "When nachdem comes first, the main clause inverts: verb-subject.",
    perfekt: false
  },
  {
    id: "neb_030",
    prompt_en: "After he had slept, he felt better.",
    main_clause: "Nachdem er geschlafen hatte,",
    conjunction: "",
    tokens: ["fühlte", "er", "sich", "besser"],
    correct_order: ["fühlte", "er", "sich", "besser"],
    type: "nachdem",
    hint: "Inverted main clause after a leading nachdem-clause.",
    perfekt: false
  },
  {
    id: "neb_031",
    prompt_en: "I called her after I had read the email.",
    main_clause: "Ich rief sie an,",
    conjunction: "nachdem",
    tokens: ["ich", "die", "E-Mail", "gelesen", "hatte"],
    correct_order: ["ich", "die", "E-Mail", "gelesen", "hatte"],
    type: "nachdem",
    hint: "Past perfect: Partizip II + hatte at the very end.",
    perfekt: true
  },
  {
    id: "neb_032",
    prompt_en: "We went home after the film had ended.",
    main_clause: "Wir gingen nach Hause,",
    conjunction: "nachdem",
    tokens: ["der", "Film", "zu", "Ende", "war"],
    correct_order: ["der", "Film", "zu", "Ende", "war"],
    type: "nachdem",
    hint: "Verb-final.",
    perfekt: false
  },

  // ========== PERFEKT-IN-NEBENSATZ (8) — your specific weak point ==========
  // Pattern: Partizip II + conjugated Hilfsverb, both at the very end, Hilfsverb LAST
  {
    id: "neb_033",
    prompt_en: "I was tired because I had worked a long time.",
    main_clause: "Ich war müde,",
    conjunction: "weil",
    tokens: ["ich", "lange", "gearbeitet", "habe"],
    correct_order: ["ich", "lange", "gearbeitet", "habe"],
    type: "weil-perfekt",
    hint: "Perfekt in Nebensatz: Partizip II (gearbeitet) + Hilfsverb (habe). Hilfsverb DEAD LAST.",
    perfekt: true
  },
  {
    id: "neb_034",
    prompt_en: "She's happy that we came.",
    main_clause: "Sie freut sich,",
    conjunction: "dass",
    tokens: ["wir", "gekommen", "sind"],
    correct_order: ["wir", "gekommen", "sind"],
    type: "dass-perfekt",
    hint: "Hilfsverb sind comes after Partizip II gekommen. Hilfsverb is the very last word.",
    perfekt: true
  },
  {
    id: "neb_035",
    prompt_en: "He thinks that I bought the book.",
    main_clause: "Er denkt,",
    conjunction: "dass",
    tokens: ["ich", "das", "Buch", "gekauft", "habe"],
    correct_order: ["ich", "das", "Buch", "gekauft", "habe"],
    type: "dass-perfekt",
    hint: "Object → Partizip II → Hilfsverb. The auxiliary always comes last.",
    perfekt: true
  },
  {
    id: "neb_036",
    prompt_en: "I'm sorry that I forgot it.",
    main_clause: "Es tut mir leid,",
    conjunction: "dass",
    tokens: ["ich", "es", "vergessen", "habe"],
    correct_order: ["ich", "es", "vergessen", "habe"],
    type: "dass-perfekt",
    hint: "Object pronoun → Partizip II → habe.",
    perfekt: true
  },
  {
    id: "neb_037",
    prompt_en: "Although she didn't sleep well, she's not tired.",
    main_clause: "Obwohl sie nicht gut geschlafen hat,",
    conjunction: "",
    tokens: ["ist", "sie", "nicht", "müde"],
    correct_order: ["ist", "sie", "nicht", "müde"],
    type: "obwohl-perfekt",
    hint: "When the obwohl-clause leads (with Perfekt), the main clause inverts: verb-subject.",
    perfekt: true
  },
  {
    id: "neb_038",
    prompt_en: "He didn't come even though I had invited him.",
    main_clause: "Er kam nicht,",
    conjunction: "obwohl",
    tokens: ["ich", "ihn", "eingeladen", "habe"],
    correct_order: ["ich", "ihn", "eingeladen", "habe"],
    type: "obwohl-perfekt",
    hint: "eingeladen + habe. Auxiliary last.",
    perfekt: true
  },
  {
    id: "neb_039",
    prompt_en: "I know that he has gone to Berlin.",
    main_clause: "Ich weiß,",
    conjunction: "dass",
    tokens: ["er", "nach", "Berlin", "gefahren", "ist"],
    correct_order: ["er", "nach", "Berlin", "gefahren", "ist"],
    type: "dass-perfekt",
    hint: "Motion verb → sein. gefahren + ist, with ist as the final word.",
    perfekt: true
  },
  {
    id: "neb_040",
    prompt_en: "We were happy because we had won.",
    main_clause: "Wir waren glücklich,",
    conjunction: "weil",
    tokens: ["wir", "gewonnen", "haben"],
    correct_order: ["wir", "gewonnen", "haben"],
    type: "weil-perfekt",
    hint: "Partizip II (gewonnen) + Hilfsverb (haben) at the end. Auxiliary last.",
    perfekt: true
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = NEBENSATZ_ITEMS;
}
