// haben vs. sein Drill Data
// Coverage: motion (15), state-change (10), sein/bleiben/werden (5), regular haben (20)
// Total: 50 items
//
// Each item:
//   - sentence: with ___ where the auxiliary goes
//   - subject_form: which forms are valid for this subject (used to show 2 button options)
//     "ich" → ["habe", "bin"]
//     "du" → ["hast", "bist"]
//     "er/sie/es" → ["hat", "ist"]
//     "wir" → ["haben", "sind"]
//     "ihr" → ["habt", "seid"]
//     "sie/Sie" → ["haben", "sind"]
//   - answer: the correct form
//   - rule: explanation shown on miss
//   - category: motion | state-change | sein-bleiben-werden | regular

const HABEN_SEIN_ITEMS = [
  // ========== MOTION VERBS (15) — take SEIN ==========
  {
    id: "hs_001",
    sentence: "Ich ___ gestern ins Kino gegangen.",
    subject_form: "ich",
    answer: "bin",
    full_sentence: "Ich bin gestern ins Kino gegangen.",
    rule: "Motion verbs (gehen) take sein.",
    category: "motion"
  },
  {
    id: "hs_002",
    sentence: "Wir ___ nach Berlin gefahren.",
    subject_form: "wir",
    answer: "sind",
    full_sentence: "Wir sind nach Berlin gefahren.",
    rule: "Motion verbs (fahren) take sein.",
    category: "motion"
  },
  {
    id: "hs_003",
    sentence: "Sie ___ nach Hause gelaufen.",
    subject_form: "er/sie/es",
    answer: "ist",
    full_sentence: "Sie ist nach Hause gelaufen.",
    rule: "Motion verbs (laufen) take sein.",
    category: "motion"
  },
  {
    id: "hs_004",
    sentence: "Du ___ zu spät gekommen.",
    subject_form: "du",
    answer: "bist",
    full_sentence: "Du bist zu spät gekommen.",
    rule: "Motion verbs (kommen) take sein.",
    category: "motion"
  },
  {
    id: "hs_005",
    sentence: "Wir ___ nach Italien geflogen.",
    subject_form: "wir",
    answer: "sind",
    full_sentence: "Wir sind nach Italien geflogen.",
    rule: "Motion verbs (fliegen) take sein.",
    category: "motion"
  },
  {
    id: "hs_006",
    sentence: "Ich ___ ins Wasser gesprungen.",
    subject_form: "ich",
    answer: "bin",
    full_sentence: "Ich bin ins Wasser gesprungen.",
    rule: "Motion verbs (springen) take sein.",
    category: "motion"
  },
  {
    id: "hs_007",
    sentence: "Er ___ schnell aus dem Haus gerannt.",
    subject_form: "er/sie/es",
    answer: "ist",
    full_sentence: "Er ist schnell aus dem Haus gerannt.",
    rule: "Motion verbs (rennen) take sein.",
    category: "motion"
  },
  {
    id: "hs_008",
    sentence: "Ihr ___ gestern in die Stadt gefahren.",
    subject_form: "ihr",
    answer: "seid",
    full_sentence: "Ihr seid gestern in die Stadt gefahren.",
    rule: "Motion verbs (fahren) take sein.",
    category: "motion"
  },
  {
    id: "hs_009",
    sentence: "Die Kinder ___ in den Garten gelaufen.",
    subject_form: "sie/Sie",
    answer: "sind",
    full_sentence: "Die Kinder sind in den Garten gelaufen.",
    rule: "Motion verbs (laufen) take sein.",
    category: "motion"
  },
  {
    id: "hs_010",
    sentence: "Ich ___ mit dem Bus gekommen.",
    subject_form: "ich",
    answer: "bin",
    full_sentence: "Ich bin mit dem Bus gekommen.",
    rule: "Motion verbs (kommen) take sein.",
    category: "motion"
  },
  {
    id: "hs_011",
    sentence: "Sie ___ durch den Park gewandert.",
    subject_form: "er/sie/es",
    answer: "ist",
    full_sentence: "Sie ist durch den Park gewandert.",
    rule: "Motion verbs (wandern) take sein.",
    category: "motion"
  },
  {
    id: "hs_012",
    sentence: "Wir ___ den Berg hochgestiegen.",
    subject_form: "wir",
    answer: "sind",
    full_sentence: "Wir sind den Berg hochgestiegen.",
    rule: "Motion verbs (steigen) take sein.",
    category: "motion"
  },
  {
    id: "hs_013",
    sentence: "Du ___ nach London geflogen.",
    subject_form: "du",
    answer: "bist",
    full_sentence: "Du bist nach London geflogen.",
    rule: "Motion verbs (fliegen) take sein.",
    category: "motion"
  },
  {
    id: "hs_014",
    sentence: "Er ___ über die Straße gegangen.",
    subject_form: "er/sie/es",
    answer: "ist",
    full_sentence: "Er ist über die Straße gegangen.",
    rule: "Motion verbs (gehen) take sein.",
    category: "motion"
  },
  {
    id: "hs_015",
    sentence: "Ich ___ ins Büro gefahren.",
    subject_form: "ich",
    answer: "bin",
    full_sentence: "Ich bin ins Büro gefahren.",
    rule: "Motion verbs (fahren) take sein.",
    category: "motion"
  },

  // ========== STATE-CHANGE VERBS (10) — take SEIN ==========
  {
    id: "hs_016",
    sentence: "Ich ___ um sieben Uhr aufgestanden.",
    subject_form: "ich",
    answer: "bin",
    full_sentence: "Ich bin um sieben Uhr aufgestanden.",
    rule: "Change of state (aufstehen — from sleeping to awake) takes sein.",
    category: "state-change"
  },
  {
    id: "hs_017",
    sentence: "Das Kind ___ schnell eingeschlafen.",
    subject_form: "er/sie/es",
    answer: "ist",
    full_sentence: "Das Kind ist schnell eingeschlafen.",
    rule: "Change of state (einschlafen — from awake to asleep) takes sein.",
    category: "state-change"
  },
  {
    id: "hs_018",
    sentence: "Sein Großvater ___ letztes Jahr gestorben.",
    subject_form: "er/sie/es",
    answer: "ist",
    full_sentence: "Sein Großvater ist letztes Jahr gestorben.",
    rule: "Change of state (sterben — from alive to dead) takes sein.",
    category: "state-change"
  },
  {
    id: "hs_019",
    sentence: "Sie ___ Lehrerin geworden.",
    subject_form: "er/sie/es",
    answer: "ist",
    full_sentence: "Sie ist Lehrerin geworden.",
    rule: "werden (to become) always takes sein.",
    category: "state-change"
  },
  {
    id: "hs_020",
    sentence: "Wir ___ um sechs aufgewacht.",
    subject_form: "wir",
    answer: "sind",
    full_sentence: "Wir sind um sechs aufgewacht.",
    rule: "Change of state (aufwachen) takes sein.",
    category: "state-change"
  },
  {
    id: "hs_021",
    sentence: "Die Blumen ___ schnell gewachsen.",
    subject_form: "sie/Sie",
    answer: "sind",
    full_sentence: "Die Blumen sind schnell gewachsen.",
    rule: "Change of state (wachsen — to grow) takes sein.",
    category: "state-change"
  },
  {
    id: "hs_022",
    sentence: "Ich ___ vor Müdigkeit fast eingeschlafen.",
    subject_form: "ich",
    answer: "bin",
    full_sentence: "Ich bin vor Müdigkeit fast eingeschlafen.",
    rule: "einschlafen = change of state, takes sein.",
    category: "state-change"
  },
  {
    id: "hs_023",
    sentence: "Er ___ krank geworden.",
    subject_form: "er/sie/es",
    answer: "ist",
    full_sentence: "Er ist krank geworden.",
    rule: "werden takes sein.",
    category: "state-change"
  },
  {
    id: "hs_024",
    sentence: "Du ___ groß geworden!",
    subject_form: "du",
    answer: "bist",
    full_sentence: "Du bist groß geworden!",
    rule: "werden takes sein.",
    category: "state-change"
  },
  {
    id: "hs_025",
    sentence: "Das Wetter ___ schlechter geworden.",
    subject_form: "er/sie/es",
    answer: "ist",
    full_sentence: "Das Wetter ist schlechter geworden.",
    rule: "werden takes sein.",
    category: "state-change"
  },

  // ========== SEIN / BLEIBEN (5) — irregular: take SEIN ==========
  {
    id: "hs_026",
    sentence: "Ich ___ noch nie in Italien gewesen.",
    subject_form: "ich",
    answer: "bin",
    full_sentence: "Ich bin noch nie in Italien gewesen.",
    rule: "sein takes sein as its own auxiliary (gewesen).",
    category: "sein-bleiben-werden"
  },
  {
    id: "hs_027",
    sentence: "Wir ___ zu Hause geblieben.",
    subject_form: "wir",
    answer: "sind",
    full_sentence: "Wir sind zu Hause geblieben.",
    rule: "bleiben takes sein, even though it expresses no movement.",
    category: "sein-bleiben-werden"
  },
  {
    id: "hs_028",
    sentence: "Er ___ in München gewesen.",
    subject_form: "er/sie/es",
    answer: "ist",
    full_sentence: "Er ist in München gewesen.",
    rule: "sein → ist gewesen.",
    category: "sein-bleiben-werden"
  },
  {
    id: "hs_029",
    sentence: "Ihr ___ lange wach geblieben.",
    subject_form: "ihr",
    answer: "seid",
    full_sentence: "Ihr seid lange wach geblieben.",
    rule: "bleiben → seid geblieben.",
    category: "sein-bleiben-werden"
  },
  {
    id: "hs_030",
    sentence: "Sie ___ gestern krank gewesen.",
    subject_form: "er/sie/es",
    answer: "ist",
    full_sentence: "Sie ist gestern krank gewesen.",
    rule: "sein → ist gewesen.",
    category: "sein-bleiben-werden"
  },

  // ========== REGULAR HABEN (20) — to keep you honest ==========
  {
    id: "hs_031",
    sentence: "Ich ___ einen Brief geschrieben.",
    subject_form: "ich",
    answer: "habe",
    full_sentence: "Ich habe einen Brief geschrieben.",
    rule: "Transitive verbs (with a direct object) take haben.",
    category: "regular"
  },
  {
    id: "hs_032",
    sentence: "Sie ___ ein Buch gelesen.",
    subject_form: "er/sie/es",
    answer: "hat",
    full_sentence: "Sie hat ein Buch gelesen.",
    rule: "Transitive verb (lesen + object) → haben.",
    category: "regular"
  },
  {
    id: "hs_033",
    sentence: "Wir ___ den Film gesehen.",
    subject_form: "wir",
    answer: "haben",
    full_sentence: "Wir haben den Film gesehen.",
    rule: "Transitive verb (sehen + object) → haben.",
    category: "regular"
  },
  {
    id: "hs_034",
    sentence: "Du ___ deine Hausaufgaben gemacht.",
    subject_form: "du",
    answer: "hast",
    full_sentence: "Du hast deine Hausaufgaben gemacht.",
    rule: "Transitive verb (machen + object) → haben.",
    category: "regular"
  },
  {
    id: "hs_035",
    sentence: "Er ___ den ganzen Tag gearbeitet.",
    subject_form: "er/sie/es",
    answer: "hat",
    full_sentence: "Er hat den ganzen Tag gearbeitet.",
    rule: "arbeiten doesn't express motion or state change → haben.",
    category: "regular"
  },
  {
    id: "hs_036",
    sentence: "Ich ___ Pizza gegessen.",
    subject_form: "ich",
    answer: "habe",
    full_sentence: "Ich habe Pizza gegessen.",
    rule: "Transitive verb (essen + object) → haben.",
    category: "regular"
  },
  {
    id: "hs_037",
    sentence: "Wir ___ Wasser getrunken.",
    subject_form: "wir",
    answer: "haben",
    full_sentence: "Wir haben Wasser getrunken.",
    rule: "Transitive verb (trinken + object) → haben.",
    category: "regular"
  },
  {
    id: "hs_038",
    sentence: "Sie ___ lange geschlafen.",
    subject_form: "er/sie/es",
    answer: "hat",
    full_sentence: "Sie hat lange geschlafen.",
    rule: "schlafen = state, not change of state → haben. (einschlafen IS change → sein.)",
    category: "regular"
  },
  {
    id: "hs_039",
    sentence: "Ihr ___ gut Deutsch gelernt.",
    subject_form: "ihr",
    answer: "habt",
    full_sentence: "Ihr habt gut Deutsch gelernt.",
    rule: "Transitive verb (lernen + object) → haben.",
    category: "regular"
  },
  {
    id: "hs_040",
    sentence: "Ich ___ den ganzen Abend telefoniert.",
    subject_form: "ich",
    answer: "habe",
    full_sentence: "Ich habe den ganzen Abend telefoniert.",
    rule: "telefonieren is an activity, no motion → haben.",
    category: "regular"
  },
  {
    id: "hs_041",
    sentence: "Er ___ mir geholfen.",
    subject_form: "er/sie/es",
    answer: "hat",
    full_sentence: "Er hat mir geholfen.",
    rule: "helfen takes a dative object → haben.",
    category: "regular"
  },
  {
    id: "hs_042",
    sentence: "Wir ___ über den Witz gelacht.",
    subject_form: "wir",
    answer: "haben",
    full_sentence: "Wir haben über den Witz gelacht.",
    rule: "lachen → haben.",
    category: "regular"
  },
  {
    id: "hs_043",
    sentence: "Ich ___ das Auto repariert.",
    subject_form: "ich",
    answer: "habe",
    full_sentence: "Ich habe das Auto repariert.",
    rule: "Transitive verb → haben.",
    category: "regular"
  },
  {
    id: "hs_044",
    sentence: "Du ___ alles vergessen.",
    subject_form: "du",
    answer: "hast",
    full_sentence: "Du hast alles vergessen.",
    rule: "Transitive verb (vergessen + object) → haben.",
    category: "regular"
  },
  {
    id: "hs_045",
    sentence: "Sie ___ gut gekocht.",
    subject_form: "er/sie/es",
    answer: "hat",
    full_sentence: "Sie hat gut gekocht.",
    rule: "kochen → haben.",
    category: "regular"
  },
  {
    id: "hs_046",
    sentence: "Wir ___ das Spiel gewonnen.",
    subject_form: "wir",
    answer: "haben",
    full_sentence: "Wir haben das Spiel gewonnen.",
    rule: "Transitive verb (gewinnen + object) → haben.",
    category: "regular"
  },
  {
    id: "hs_047",
    sentence: "Ihr ___ die Tür zugemacht.",
    subject_form: "ihr",
    answer: "habt",
    full_sentence: "Ihr habt die Tür zugemacht.",
    rule: "Transitive verb → haben.",
    category: "regular"
  },
  {
    id: "hs_048",
    sentence: "Ich ___ ihn nicht gehört.",
    subject_form: "ich",
    answer: "habe",
    full_sentence: "Ich habe ihn nicht gehört.",
    rule: "Transitive verb (hören + object) → haben.",
    category: "regular"
  },
  {
    id: "hs_049",
    sentence: "Er ___ viel Geld verdient.",
    subject_form: "er/sie/es",
    answer: "hat",
    full_sentence: "Er hat viel Geld verdient.",
    rule: "Transitive verb → haben.",
    category: "regular"
  },
  {
    id: "hs_050",
    sentence: "Sie ___ das Lied gesungen.",
    subject_form: "er/sie/es",
    answer: "hat",
    full_sentence: "Sie hat das Lied gesungen.",
    rule: "Transitive verb (singen + object) → haben.",
    category: "regular"
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = HABEN_SEIN_ITEMS;
}
