// Konjunktiv II Wenn-Sätze Drill Data
// Coverage: hätte/wäre KII forms (10), würde + infinitive (10), mixed wenn-clauses (5)
// Total: 25 items
//
// Each item has a scaffold with ___ blanks. User fills each blank.
// Common pattern: Wenn ich ___ hätte, ___ ich ___ . (würde-form or simple KII)
//
// Standard B1 KII forms by class:
//   haben → hätte, hättest, hätte, hätten, hättet, hätten
//   sein  → wäre, wärst, wäre, wären, wärt, wären
//   werden → würde, würdest, würde, würden, würdet, würden
//   können → könnte (etc.)
//   müssen → müsste
//   sollen → sollte
//   dürfen → dürfte
//   wissen → wüsste
//
// At B1, learners typically use würde + infinitive for most other verbs.

const KONJUNKTIV_ITEMS = [
  // ========== hätte / wäre + würde patterns (10) ==========
  {
    id: "kii_001",
    prompt_en: "If I had time, I would call you.",
    scaffold: "Wenn ich Zeit ___, ___ ich dich ___.",
    answers: ["hätte", "würde", "anrufen"],
    alternatives: [["hätte"], ["würde"], ["anrufen"]],
    hint: "Wenn-clause: KII of haben (hätte). Main clause: würde + infinitive at the end."
  },
  {
    id: "kii_002",
    prompt_en: "If I were rich, I would buy a house.",
    scaffold: "Wenn ich reich ___, ___ ich ein Haus ___.",
    answers: ["wäre", "würde", "kaufen"],
    alternatives: [["wäre"], ["würde"], ["kaufen"]],
    hint: "Wenn-clause: KII of sein (wäre). Main clause: würde + infinitive."
  },
  {
    id: "kii_003",
    prompt_en: "If she had more money, she would travel a lot.",
    scaffold: "Wenn sie mehr Geld ___, ___ sie viel ___.",
    answers: ["hätte", "würde", "reisen"],
    alternatives: [["hätte"], ["würde"], ["reisen"]],
    hint: "hätte (KII of haben) + würde-form."
  },
  {
    id: "kii_004",
    prompt_en: "If we were younger, we would dance all night.",
    scaffold: "Wenn wir jünger ___, ___ wir die ganze Nacht ___.",
    answers: ["wären", "würden", "tanzen"],
    alternatives: [["wären"], ["würden"], ["tanzen"]],
    hint: "wir + sein-KII = wären; wir + würden + infinitive."
  },
  {
    id: "kii_005",
    prompt_en: "If you had a car, you would drive to work.",
    scaffold: "Wenn du ein Auto ___, ___ du zur Arbeit ___.",
    answers: ["hättest", "würdest", "fahren"],
    alternatives: [["hättest"], ["würdest"], ["fahren"]],
    hint: "du-form: hättest, würdest."
  },
  {
    id: "kii_006",
    prompt_en: "If he were here, he would help us.",
    scaffold: "Wenn er hier ___, ___ er uns ___.",
    answers: ["wäre", "würde", "helfen"],
    alternatives: [["wäre"], ["würde"], ["helfen"]],
    hint: "wäre + würde + infinitive."
  },
  {
    id: "kii_007",
    prompt_en: "If I had a dog, I would go for a walk every day.",
    scaffold: "Wenn ich einen Hund ___, ___ ich jeden Tag spazieren ___.",
    answers: ["hätte", "würde", "gehen"],
    alternatives: [["hätte"], ["würde"], ["gehen"]],
    hint: "hätte + würde-form. Note: spazieren gehen — infinitive at the end."
  },
  {
    id: "kii_008",
    prompt_en: "If you were my brother, I would always help you.",
    scaffold: "Wenn du mein Bruder ___, ___ ich dir immer ___.",
    answers: ["wärst", "würde", "helfen"],
    alternatives: [["wärst", "wärest"], ["würde"], ["helfen"]],
    hint: "du + sein-KII = wärst (or wärest)."
  },
  {
    id: "kii_009",
    prompt_en: "If we had time, we would visit you.",
    scaffold: "Wenn wir Zeit ___, ___ wir euch ___.",
    answers: ["hätten", "würden", "besuchen"],
    alternatives: [["hätten"], ["würden"], ["besuchen"]],
    hint: "wir-forms: hätten, würden."
  },
  {
    id: "kii_010",
    prompt_en: "If they were here, they would understand.",
    scaffold: "Wenn sie hier ___, ___ sie es ___.",
    answers: ["wären", "würden", "verstehen"],
    alternatives: [["wären"], ["würden"], ["verstehen"]],
    hint: "sie-pl forms: wären, würden."
  },

  // ========== würde + infinitive (pure 'would do X' patterns) (10) ==========
  {
    id: "kii_011",
    prompt_en: "If it didn't rain, we would play football.",
    scaffold: "Wenn es nicht ___, ___ wir Fußball ___.",
    answers: ["regnen würde", "würden", "spielen"],
    alternatives: [["regnen würde", "regnete"], ["würden"], ["spielen"]],
    hint: "Wenn-clause can use würde + infinitive too (regnen würde) or the simple KII (regnete)."
  },
  {
    id: "kii_012",
    prompt_en: "What would you do if you won the lottery?",
    scaffold: "Was ___ du ___, wenn du im Lotto ___?",
    answers: ["würdest", "machen", "gewinnen würdest"],
    alternatives: [["würdest"], ["machen", "tun"], ["gewinnen würdest", "gewännest"]],
    hint: "Question: Was würdest du machen? + wenn-clause with würde + infinitive."
  },
  {
    id: "kii_013",
    prompt_en: "If I knew the answer, I would tell you.",
    scaffold: "Wenn ich die Antwort ___, ___ ich es dir ___.",
    answers: ["wüsste", "würde", "sagen"],
    alternatives: [["wüsste"], ["würde"], ["sagen"]],
    hint: "wissen has its own KII form: wüsste. Then würde-form in the main clause."
  },
  {
    id: "kii_014",
    prompt_en: "If she could come, she would be happy.",
    scaffold: "Wenn sie kommen ___, ___ sie sich ___.",
    answers: ["könnte", "würde", "freuen"],
    alternatives: [["könnte"], ["würde"], ["freuen"]],
    hint: "können → könnte (modal KII). sich freuen — reflexive verb."
  },
  {
    id: "kii_015",
    prompt_en: "If we had to work, we wouldn't come.",
    scaffold: "Wenn wir arbeiten ___, ___ wir nicht ___.",
    answers: ["müssten", "würden", "kommen"],
    alternatives: [["müssten"], ["würden"], ["kommen"]],
    hint: "müssen → müssten (modal KII)."
  },
  {
    id: "kii_016",
    prompt_en: "If I were you, I would learn German.",
    scaffold: "Wenn ich du ___, ___ ich Deutsch ___.",
    answers: ["wäre", "würde", "lernen"],
    alternatives: [["wäre"], ["würde"], ["lernen"]],
    hint: "Classic 'if I were you' construction: wäre + würde-form."
  },
  {
    id: "kii_017",
    prompt_en: "If he had a job, he would move to Berlin.",
    scaffold: "Wenn er einen Job ___, ___ er nach Berlin ___.",
    answers: ["hätte", "würde", "ziehen"],
    alternatives: [["hätte"], ["würde"], ["ziehen"]],
    hint: "hätte + würde + infinitive."
  },
  {
    id: "kii_018",
    prompt_en: "If you had asked me, I would have helped you.",
    scaffold: "Wenn du mich ___ ___, ___ ich dir ___ ___.",
    answers: ["gefragt", "hättest", "hätte", "geholfen"],
    alternatives: [["gefragt"], ["hättest"], ["hätte"], ["geholfen"]],
    hint: "Past KII (Vergangenheit): hätte/wäre + Partizip II in BOTH clauses. Hardest pattern!"
  },
  {
    id: "kii_019",
    prompt_en: "If I were you, I wouldn't do that.",
    scaffold: "Wenn ich du ___, ___ ich das nicht ___.",
    answers: ["wäre", "würde", "machen"],
    alternatives: [["wäre"], ["würde"], ["machen", "tun"]],
    hint: "wäre + würde + infinitive."
  },
  {
    id: "kii_020",
    prompt_en: "Would you come if I invited you?",
    scaffold: "___ du kommen, wenn ich dich ___ ___?",
    answers: ["Würdest", "einladen", "würde"],
    alternatives: [["Würdest"], ["einladen"], ["würde"]],
    hint: "Question form starts with Würdest. wenn-clause uses würde + infinitive (einladen würde)."
  },

  // ========== Mixed / Trickier (5) ==========
  {
    id: "kii_021",
    prompt_en: "If only I had more time!",
    scaffold: "Wenn ich nur mehr Zeit ___!",
    answers: ["hätte"],
    alternatives: [["hätte"]],
    hint: "Wishful 'wenn nur' construction with hätte. No main clause needed."
  },
  {
    id: "kii_022",
    prompt_en: "I wish I were on holiday.",
    scaffold: "Ich ___, ich ___ im Urlaub.",
    answers: ["wünschte", "wäre"],
    alternatives: [["wünschte"], ["wäre"]],
    hint: "Ich wünschte + KII clause. wünschen → wünschte. sein → wäre."
  },
  {
    id: "kii_023",
    prompt_en: "If we had known that, we wouldn't have come.",
    scaffold: "Wenn wir das ___ ___, ___ wir nicht ___ ___.",
    answers: ["gewusst", "hätten", "wären", "gekommen"],
    alternatives: [["gewusst"], ["hätten"], ["wären"], ["gekommen"]],
    hint: "Past KII: hätten + Partizip II in wenn-clause; wären + Partizip II in main clause (kommen → sein)."
  },
  {
    id: "kii_024",
    prompt_en: "Could you help me, please?",
    scaffold: "___ du mir bitte ___?",
    answers: ["Könntest", "helfen"],
    alternatives: [["Könntest"], ["helfen"]],
    hint: "Polite request with KII of können (könntest) + infinitive."
  },
  {
    id: "kii_025",
    prompt_en: "If she came tomorrow, we would be happy.",
    scaffold: "Wenn sie morgen ___ ___, ___ wir uns ___.",
    answers: ["kommen", "würde", "würden", "freuen"],
    alternatives: [["kommen"], ["würde"], ["würden"], ["freuen"]],
    hint: "Both clauses use würde + infinitive. sich freuen — reflexive."
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = KONJUNKTIV_ITEMS;
}
