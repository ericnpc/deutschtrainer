// 15-Tage-Ergänzungsplan — Grammatik + Vokabeln (für Erics Prüfung)
// 21. Juli – 8. August 2026 · ~20-25 Min/Tag
//
// Datenmodell:
//   days[]:  { n, week, tag(kurz), topic, lessonNum, erklaerung{lead,rules?,examples?,note?}, ex[] }
//   ex item types:
//     { t:'fill',   q:'… {b} …',  a:[ 'antwort' | ['alt1','alt2'] ],  tip? }
//     { t:'choice', q:'…',        opts:['a','b'],  a: <indexRichtig>,  tip? }
//     { t:'open',   q:'…',        sol:'Musterlösung (HTML, \\n = Umbruch)',  tip? }
//   q / sol / lead / rules / examples / note / tip enthalten bewusst HTML (<b>,<i>) — statische Autorendaten.
window.DAILY_PLAN = {
  title: "Erics Ergänzungsplan",
  subtitle: "21. Juli – 8. August · 15 Tage",
  // Vokabel-Lektionen außerhalb des Plans — als „Extra“-Tage präsentiert
  extras: [
    { num: 10, tag: "Connectors" },
    { num: 11, tag: "Storytelling" },
    { num: 12, tag: "Media & Tech" },
    { num: 16, tag: "Haushalt" },
    { num: 20, tag: "Integration" }
  ],
  weekTitles: ["Grammatik-Fundament", "Verben & Strukturen", "Konsolidierung"],
  days: [
    // ---------------- Woche 1 ----------------
    {
      n: 1, week: 1, tag: "Deklination", topic: "Adjektivdeklination", lessonNum: 1,
      erklaerung: {
        lead: "Adjektivendungen hängen von <b>Artikel + Kasus + Genus</b> ab. Die gute Nachricht: es gibt nur <b>drei Muster</b> — nach <i>der/die/das</i>, nach <i>ein/eine</i>, und ohne Artikel.",
        rules: [
          "Nach <b>ein-</b> zeigt die Endung das Genus: <i>ein gut<b>er</b> Mann</i>, <i>eine gut<b>e</b> Frau</i>, <i>ein gut<b>es</b> Kind</i>.",
          "Im <b>Dativ</b> enden fast alle Adjektive auf <b>-en</b>: <i>einem gut<b>en</b> Mann</i>."
        ],
        examples: [
          ["Nom.", "ein <b>großzügiger</b> Freund"],
          ["Akk.", "einen <b>großzügigen</b> Freund"],
          ["Dat.", "einem <b>großzügigen</b> Freund"]
        ],
        note: "Nach <i>sein</i> / <i>werden</i> steht das Adjektiv <b>ohne Endung</b>: <i>Mein Chef ist großzügig.</i>"
      },
      ex: [
        { t: 'fill', q: "ein {b} Freund <i>(Nom.)</i>, einen {b} Freund <i>(Akk.)</i>, einem {b} Freund <i>(Dat.)</i>", a: ['großzügiger', 'großzügigen', 'großzügigen'], tip: "Nach <i>ein-</i>: Nom. -er, Akk. -en, Dat. -en." },
        { t: 'fill', q: "die {b} Frau <i>(Nom.)</i>, die {b} Frau <i>(Akk.)</i>, der {b} Frau <i>(Dat.)</i>", a: ['ehrgeizige', 'ehrgeizige', 'ehrgeizigen'], tip: "Nach <i>die</i>: Nom./Akk. -e, Dat. -en." },
        { t: 'choice', q: "Mein Chef ist sehr ___.", opts: ['großzügig', 'großzügiger'], a: 0, tip: "Nach <i>sein</i> steht das Adjektiv <b>ohne Endung</b>." },
        { t: 'open', q: "Bilde 3 Sätze über deine Freunde — je ein Adjektiv (z. B. <i>zuverlässig, witzig, neugierig</i>).", sol: "z. B.:\n• Mein bester Freund ist sehr <b>zuverlässig</b>.\n• Ich habe eine <b>witzige</b> Kollegin.\n• Meine <b>neugierige</b> Schwester fragt alles." }
      ]
    },
    {
      n: 2, week: 1, tag: "Pronomen", topic: "Personalpronomen (Akk. / Dat.)", lessonNum: 2,
      erklaerung: {
        lead: "Personalpronomen ändern die Form je nach <b>Kasus</b>: <i>ich → mich → mir</i>. <b>Dativ-Pronomen</b> brauchst du ständig nach Verben wie <i>helfen, gefallen, gehören, vertrauen, danken</i>.",
        rules: [
          "Akkusativ: <b>mich, dich, ihn/sie/es, uns, euch, sie/Sie</b>",
          "Dativ: <b>mir, dir, ihm/ihr/ihm, uns, euch, ihnen/Ihnen</b>"
        ],
        note: "<i>helfen</i>, <i>vertrauen</i>, <i>danken</i> verlangen den <b>Dativ</b>: <i>Ich vertraue <b>dir</b>.</i>"
      },
      ex: [
        { t: 'choice', q: "Ich vertraue ___.", opts: ['dir', 'dich'], a: 0, tip: "<i>vertrauen</i> + <b>Dativ</b>." },
        { t: 'fill', q: "Meine Schwester hilft {b} immer. <i>(ich)</i>", a: ['mir'], tip: "<i>helfen</i> + <b>Dativ</b> → mir." },
        { t: 'fill', q: "Ich streite mich oft mit {b}. <i>(sie – meine Schwester)</i>", a: ['ihr'], tip: "<i>mit</i> + <b>Dativ</b> → ihr." },
        { t: 'open', q: "Übersetze: „My siblings support me a lot.“", sol: "<b>Meine Geschwister unterstützen mich sehr.</b>" }
      ]
    },
    {
      n: 3, week: 1, tag: "dass / der-die-das", topic: "dass vs. Relativpronomen", lessonNum: 3,
      erklaerung: {
        lead: "<b>dass</b> vs. <b>der/die/das</b> — merk dir die Herkunft, das ist dein häufigster Fehler.",
        rules: [
          "<b>dass</b> (Konjunktion) folgt oft auf ein <b>Verb des Denkens/Sagens</b>: <i>Ich glaube, <b>dass</b> …</i>",
          "<b>der/die/das</b> (Relativpronomen) folgt auf ein <b>Nomen</b> und richtet sich nach dessen Genus: <i>Leute, <b>die</b> …</i>"
        ],
        examples: [
          ["❌", "Ich kenne Leute, <b>dass</b> hier wohnen."],
          ["✅", "Ich kenne Leute, <b>die</b> hier wohnen."]
        ]
      },
      ex: [
        { t: 'choice', q: "Ich kenne Leute, ___ in der Großstadt wohnen.", opts: ['die', 'dass'], a: 0, tip: "Nach dem Nomen <i>Leute</i> → Relativpronomen <b>die</b>." },
        { t: 'choice', q: "Ich glaube, ___ es dort zu laut ist.", opts: ['dass', 'die'], a: 0, tip: "Nach <i>Ich glaube</i> → Konjunktion <b>dass</b>." },
        { t: 'open', q: "Bilde einen Satz: <i>Ich bin in einer Familie aufgewachsen, die …</i>", sol: "z. B.: <b>Ich bin in einer Familie aufgewachsen, die immer zusammengehalten hat.</b>" },
        { t: 'open', q: "Bilde einen <i>dass</i>-Satz (nach <i>Ich finde</i>) über Stadt vs. Land.", sol: "z. B.: <b>Ich finde, dass das Leben auf dem Land ruhiger ist.</b>" }
      ]
    },
    {
      n: 4, week: 1, tag: "viel / viele", topic: "viel vs. viele", lessonNum: 7,
      erklaerung: {
        lead: "<b>viel</b> steht bei <b>nicht zählbaren</b> Nomen (Singular): <i>viel Zeit, viel Geld, viel Erfolg</i>. <b>viele</b> steht bei <b>zählbaren</b> Nomen (Plural): <i>viele Träume, viele Ziele</i>.",
        note: "Test: Kannst du „1, 2, 3 …“ zählen? → <b>viele</b>. Sonst → <b>viel</b>."
      },
      ex: [
        { t: 'choice', q: "Ich habe ___ Träume für die Zukunft.", opts: ['viele', 'viel'], a: 0, tip: "Träume = zählbar (Plural) → <b>viele</b>." },
        { t: 'choice', q: "Ich brauche ___ Motivation für mein Ziel.", opts: ['viel', 'viele'], a: 0, tip: "Motivation = nicht zählbar → <b>viel</b>." },
        { t: 'open', q: "Bilde einen Satz mit <i>sich ein Ziel setzen</i> im Perfekt.", sol: "z. B.: <b>Ich habe mir ein klares Ziel gesetzt.</b>" },
        { t: 'open', q: "Übersetze: „I have many hopes but not much time.“", sol: "<b>Ich habe viele Hoffnungen, aber nicht viel Zeit.</b>" }
      ]
    },
    {
      n: 5, week: 1, tag: "Wiederholung 1", topic: "Wiederholung Woche 1", lessonNum: 4,
      erklaerung: {
        lead: "Alles zusammen: <b>Deklination + Pronomen + Relativsätze + viel/viele</b>. Der Mix macht's schwerer — genau wie in der Prüfung.",
        note: "Fehlerdetektor an: Zähle ich das Nomen? Steht das Verb im Nebensatz hinten? Nomen → der/die/das, Verb → dass."
      },
      ex: [
        { t: 'choice', q: "Ich habe ___ Freunde.", opts: ['viele', 'viel'], a: 0, tip: "Freunde = zählbar → <b>viele</b> (+ Plural <i>Freunde</i>, nicht <i>Freunden</i>)." },
        { t: 'choice', q: "… Freunde, ___ mir helfen.", opts: ['die', 'dass'], a: 0, tip: "Nach dem Nomen → Relativpronomen <b>die</b>." },
        { t: 'fill', q: "Ich freue mich auf {b} Urlaub. <i>(mein)</i>", a: ['meinen'], tip: "<i>sich freuen auf</i> + <b>Akkusativ</b> → meinen." },
        { t: 'open', q: "Bilde einen Satz über die Natur in Uruguay mit einem Relativsatz (<i>die/der/das</i>).", sol: "z. B.: <b>Uruguay hat Strände, die wunderschön sind.</b>" }
      ]
    },
    // ---------------- Woche 2 ----------------
    {
      n: 6, week: 2, tag: "sein · Hilfsverben", topic: "sein/seid/sind + haben/sein im Perfekt", lessonNum: 17,
      erklaerung: {
        lead: "<b>seid</b> = nur <i>ihr</i>. <b>sind</b> = <i>wir / sie / Sie</i>. Im <b>Perfekt</b> gilt: <b>sein</b> bei Bewegungs-/Zustandsverben (<i>gehen, kommen, fahren, aufstehen</i>), sonst <b>haben</b>.",
        examples: [
          ["✅", "Ihr <b>seid</b> zu spät gekommen."],
          ["✅", "Wir <b>sind</b> müde."],
          ["✅", "Ich <b>habe</b> mich beworben."]
        ]
      },
      ex: [
        { t: 'choice', q: "Ihr ___ heute spät zur Arbeit gekommen.", opts: ['seid', 'sind'], a: 0, tip: "<i>ihr</i> → <b>seid</b>." },
        { t: 'choice', q: "Ich ___ mich für den Job beworben.", opts: ['habe', 'bin'], a: 0, tip: "<i>sich bewerben</i> → Hilfsverb <b>haben</b>." },
        { t: 'choice', q: "Wir ___ nach der Besprechung sehr müde.", opts: ['sind', 'seid'], a: 0, tip: "<i>wir</i> → <b>sind</b>." },
        { t: 'open', q: "Bilde einen Perfekt-Satz mit einem Bewegungsverb (<i>gehen/kommen/fahren</i>).", sol: "z. B.: <b>Ich bin gestern zur Arbeit gefahren.</b>" }
      ]
    },
    {
      n: 7, week: 2, tag: "werden / würden", topic: "wird / werden / würden", lessonNum: 18,
      erklaerung: {
        lead: "<b>werden</b> = Futur (<i>ich werde …</i>). <b>würde(n)</b> = Konjunktiv II — höfliche Bitten & Hypothesen (<i>ich würde gern …</i>). <b>wird</b> = er/sie/es-Form.",
        rules: [
          "Futur: <i>ich <b>werde</b>, du wirst, er <b>wird</b>, wir/sie <b>werden</b></i>",
          "Konjunktiv II: <i>ich <b>würde</b>, du würdest, wir/sie <b>würden</b></i>"
        ]
      },
      ex: [
        { t: 'fill', q: "Ich {b} morgen über meine Meinung sprechen. <i>(Futur)</i>", a: ['werde'], tip: "<i>ich</i> + Futur → <b>werde</b>." },
        { t: 'choice', q: "___ du mir zustimmen? <i>(höfliche Frage)</i>", opts: ['Würdest', 'Wirst'], a: 0, tip: "Höflich/hypothetisch → Konjunktiv II <b>würdest</b>." },
        { t: 'open', q: "Übersetze: „He will disagree with the plan.“", sol: "<b>Er wird dem Plan widersprechen.</b>" },
        { t: 'open', q: "Bilde einen <i>würde</i>-Satz über einen Wunsch.", sol: "z. B.: <b>Ich würde gern mehr reisen.</b>" }
      ]
    },
    {
      n: 8, week: 2, tag: "Nebensatz", topic: "Nebensatz-Wortstellung", lessonNum: 19,
      erklaerung: {
        lead: "Dein Dauerthema! Konjunktionen wie <b>dass, weil, obwohl, wenn</b> schicken das <b>konjugierte Verb ans Satzende</b>.",
        examples: [
          ["✅", "… <b>weil</b> es ein Feiertag <b>ist</b>."],
          ["❌", "… weil es <b>ist</b> ein Feiertag."]
        ],
        note: "Modalverben stehen ganz am <b>Ende</b>: <i>…, dass wir anstoßen <b>sollten</b>.</i>"
      },
      ex: [
        { t: 'fill', q: "Wir feiern, weil es ein Feiertag {b}. <i>(sein)</i>", a: ['ist'], tip: "Verb im <i>weil</i>-Satz steht <b>am Ende</b>." },
        { t: 'fill', q: "Ich komme zur Feier, obwohl ich müde {b}. <i>(sein)</i>", a: ['bin'], tip: "Verb im <i>obwohl</i>-Satz steht <b>am Ende</b>." },
        { t: 'fill', q: "Ich glaube, dass wir auf Weihnachten anstoßen {b}. <i>(sollen)</i>", a: [['sollten', 'sollen']], tip: "Modalverb ans <b>Ende</b>: <i>… anstoßen sollten.</i>" },
        { t: 'open', q: "Bilde einen <i>wenn</i>-Satz über eine Familientradition aus Uruguay.", sol: "z. B.: <b>Wenn wir Weihnachten feiern, kochen wir immer zusammen.</b>" }
      ]
    },
    {
      n: 9, week: 2, tag: "Präpositionen", topic: "Präpositionen (Wechsel · temporal · fix)", lessonNum: 5,
      erklaerung: {
        lead: "Drei Gruppen: <b>Wechselpräpositionen</b> (wo? → Dativ / wohin? → Akkusativ), <b>temporale</b> (an, in, vor, seit) und feste <b>Dativ-Präpositionen</b> (aus, bei, mit, nach, von, zu).",
        examples: [
          ["wo?", "Das Plastik liegt <b>auf dem</b> Tisch. <i>(Dativ)</i>"],
          ["wohin?", "Ich gehe <b>in die</b> Stadt. <i>(Akkusativ)</i>"]
        ]
      },
      ex: [
        { t: 'choice', q: "Wir kämpfen ___ die Umweltverschmutzung.", opts: ['gegen', 'für'], a: 0, tip: "Kampf gegen etwas → <b>gegen</b>." },
        { t: 'fill', q: "{b} einem Jahr recycle ich mehr. <i>(temporal, seit …)</i>", a: ['Seit'], tip: "Dauer bis heute → <b>seit</b> + Dativ." },
        { t: 'choice', q: "Das Plastik liegt ___ Tisch. <i>(wo?)</i>", opts: ['auf dem', 'auf den'], a: 0, tip: "wo? → <b>Dativ</b> (dem)." },
        { t: 'choice', q: "Ich gehe ___ Stadt, um plastikfrei einzukaufen. <i>(wohin?)</i>", opts: ['in die', 'in der'], a: 0, tip: "wohin? → <b>Akkusativ</b> (die)." }
      ]
    },
    {
      n: 10, week: 2, tag: "Wiederholung 2", topic: "Wiederholung Woche 2", lessonNum: 6,
      erklaerung: {
        lead: "<b>Verben + Nebensatz + Präpositionen</b> zusammen. Heute schreibst du einen Mini-Text (nur für dich) mit möglichst vielen dieser Strukturen.",
        note: "Achte am Satzende auf die richtige Verbform: <i>… dass ich die Prüfung <b>bestehen werde</b>.</i>"
      },
      ex: [
        { t: 'fill', q: "Ich hoffe, dass ich die Prüfung {b} werde. <i>(bestehen)</i>", a: ['bestehen'], tip: "Infinitiv vor dem konjugierten Verb: <i>… bestehen werde.</i>" },
        { t: 'open', q: "Schreib 3–4 Sätze über deine Ausbildung/Karriere — nutze <b>weil</b>, <b>dass</b> und mindestens 2 Präpositionen.", sol: "z. B.: <b>Ich habe eine Ausbildung gemacht, weil ich praktische Erfahrung wollte. Ich glaube, dass ich viel gelernt habe. Seit einem Jahr arbeite ich bei einer Firma in Berlin.</b>" },
        { t: 'open', q: "Nenne 3 Grammatikthemen aus Woche 2, die noch wackelig sind.", sol: "Nur für dich — kein „richtig/falsch“. Schick die Liste zur Korrektur." }
      ]
    },
    // ---------------- Woche 3 ----------------
    {
      n: 11, week: 3, tag: "Genus", topic: "Genus-Drill (der/die/das)", lessonNum: 8,
      erklaerung: {
        lead: "Muster, die fast immer stimmen — dein Genus-Bottleneck:",
        rules: [
          "<b>-ung, -heit, -keit, -schaft, -tion, -tät, -ie</b> → immer <b>die</b>",
          "<b>-chen, -lein</b> → immer <b>das</b>",
          "<b>-er</b> (Personen/Geräte) → meist <b>der</b>",
          "Komposita → Genus vom <b>letzten</b> Wortteil"
        ]
      },
      ex: [
        { t: 'choice', q: "___ Gesundheit", opts: ['die', 'der', 'das'], a: 0, tip: "-heit → <b>die</b>." },
        { t: 'choice', q: "___ Ernährung", opts: ['die', 'das', 'der'], a: 0, tip: "-ung → <b>die</b>." },
        { t: 'choice', q: "___ Training", opts: ['das', 'die', 'der'], a: 0, tip: "Kein Suffix-Muster — merken: <b>das</b> Training." },
        { t: 'open', q: "Warum <i>die</i> Gesundheit? Erkläre die Regel.", sol: "Weil Nomen auf <b>-heit</b> immer <b>feminin</b> sind → <b>die</b>." },
        { t: 'open', q: "Bilde 3 Sätze mit den Vokabeln — auf Genus achten!", sol: "z. B.: <b>Die Gesundheit ist wichtig. Das Training macht Spaß. Die Ernährung spielt eine große Rolle.</b>" }
      ]
    },
    {
      n: 12, week: 3, tag: "Inversion", topic: "Inversion (Verb an Position 2)", lessonNum: 9,
      erklaerung: {
        lead: "Beginnt ein Satz mit einer <b>Zeitangabe</b> oder mit <b>deshalb/trotzdem/dann/danach</b>, steht das <b>Verb an Position 2</b> — das Subjekt kommt danach.",
        examples: [
          ["✅", "<b>Heute gehe ich</b> essen."],
          ["❌", "Heute ich gehe essen."]
        ]
      },
      ex: [
        { t: 'choice', q: "Wähle die richtige Wortstellung:", opts: ['Heute möchte ich in einem Restaurant essen.', 'Heute ich möchte in einem Restaurant essen.'], a: 0, tip: "Nach der Zeitangabe steht das Verb an <b>Position 2</b>." },
        { t: 'choice', q: "Wähle richtig:", opts: ['Deshalb habe ich einen Tisch reserviert.', 'Deshalb ich habe einen Tisch reserviert.'], a: 0, tip: "<i>Deshalb</i> zählt als Position 1 → Verb an Position 2." },
        { t: 'open', q: "Bilde einen Satz, der mit <b>Danach</b> beginnt (Inversion!).", sol: "z. B.: <b>Danach haben wir die Rechnung bezahlt.</b>" },
        { t: 'open', q: "Bilde einen Satz mit <b>Trotzdem</b> am Anfang.", sol: "z. B.: <b>Trotzdem war das Essen lecker.</b>" }
      ]
    },
    {
      n: 13, week: 3, tag: "Review", topic: "Gemischtes Review", lessonNum: 13,
      erklaerung: {
        lead: "Alles gemischt: <b>Deklination, Präpositionen, Nebensatz, Genus</b>. Kein neues Thema — nur Fitness-Training fürs Gehirn. 🧠",
        note: "Länder ohne Artikel bekommen <b>nach</b>: <i>Ich fahre nach Italien.</i>"
      },
      ex: [
        { t: 'choice', q: "Ich habe eine Reise gebucht, ___ drei Wochen dauerte.", opts: ['die', 'das', 'dass'], a: 0, tip: "Nomen <i>Reise</i> (feminin) → Relativpronomen <b>die</b>." },
        { t: 'fill', q: "Wir sind {b} Italien gefahren. <i>(Land ohne Artikel)</i>", a: ['nach'], tip: "Länder ohne Artikel → <b>nach</b>." },
        { t: 'open', q: "Schreib 4–5 Sätze über eine Reise: mit einem Relativsatz, einer Präposition und einem Perfekt-Satz.", sol: "z. B.: <b>Letztes Jahr bin ich nach Spanien geflogen. Ich habe eine Stadt besucht, die sehr alt ist. Trotz einer Verspätung war die Reise toll.</b>" }
      ]
    },
    {
      n: 14, week: 3, tag: "Schwachstellen", topic: "Schwachstellen-Diagnose", lessonNum: 14,
      erklaerung: {
        lead: "Diagnose-Tag: Was war diese Woche am schwersten? Kein neuer Stoff — nutze die Zeit, um Unsicheres gezielt zu wiederholen.",
        note: "<i>sich freuen <b>auf</b></i> (Zukunft) + Akkusativ · <i>sich freuen <b>über</b></i> (Vergangenes) + Akkusativ."
      },
      ex: [
        { t: 'choice', q: "Ich freue mich schon ___ den Urlaub.", opts: ['auf', 'über'], a: 0, tip: "Vorfreude (Zukunft) → <b>sich freuen auf</b>." },
        { t: 'fill', q: "Ich bin sehr {b}, dass ich bestanden habe. <i>(proud)</i>", a: ['stolz'], tip: "proud → <b>stolz</b>." },
        { t: 'open', q: "Wähl 2 unsichere Themen (W1–W3) und bilde je 2 Sätze mit einem Emotions-Adjektiv (<i>dankbar, stolz, enttäuscht …</i>).", sol: "z. B.: <b>Ich bin dankbar, dass du mir hilfst. Ich war überrascht, weil der Test leicht war.</b>" }
      ]
    },
    {
      n: 15, week: 3, tag: "Freie Wahl", topic: "Freie Wahl / was noch sitzt", lessonNum: 15,
      erklaerung: {
        lead: "Letzter Tag dieses Plans! 💪 Wähl selbst, was du nochmal brauchst — Deklination, Genus, Nebensatz oder Präpositionen. Kurzer Tag, viel geschafft.",
        note: "-ung → <b>die</b> · -heit/-keit → <b>die</b> · -chen → <b>das</b>. Diese Muster retten dich im Genus-Notfall."
      },
      ex: [
        { t: 'choice', q: "___ Regierung", opts: ['die', 'der', 'das'], a: 0, tip: "-ung → <b>die</b>." },
        { t: 'open', q: "Bilde 3 Sätze zum Thema Politik mit <b>weil / obwohl / dass</b>.", sol: "z. B.: <b>Ich glaube, dass die Wahl wichtig ist. Ich gehe wählen, weil jede Stimme zählt. Obwohl Politik kompliziert ist, interessiert sie mich.</b>" },
        { t: 'open', q: "Rückblick: Was hat sich in 3 Wochen am meisten verbessert?", sol: "Nur für dich — feier deinen Fortschritt! 🎉" }
      ]
    }
  ]
};
