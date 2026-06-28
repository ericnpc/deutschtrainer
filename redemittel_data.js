// Redemittel Data (A2/B1)
// Source: Redemittel_A2_B1.md — fixed phrases for the three most common B1 tasks:
//   1. freundschaftlich: informelle/freundschaftliche E-Mail
//   2. hoeflich:         höfliche/formelle E-Mail
//   3. meinung:          Meinung äußern (Forum, Diskussion, mündlich)
//
// Each category powers TWO things:
//   • the Referenz lookup card  → REDEMITTEL_REF  (every phrase, by section)
//   • the gap-fill minigame     → REDEMITTEL_LESSONS[].items (one blank per drillable phrase)
//
// A phrase in a section is authored as:
//   "full string"                                  → reference only (not drilled)
//   { t: "full phrase", b: "blankWord", alt:[…] }  → cloze; first occurrence of b is blanked
//   { t: "full phrase", s: "scaffold ____", a:[…], alts:[[…]] } → explicit scaffold (slashes etc.)
//
// Scaffold blanks are written as four underscores (____); index.html splits on /_{2,}/.

const REDEMITTEL_CATEGORIES = [
  {
    id: "freundschaftlich",
    title: "Freundschaftliche E-Mail",
    icon: "✉️",
    accent: "flag-red",
    sections: [
      {
        title: "Anrede",
        phrases: [
          "Liebe(r) …,",
          "Hallo, liebe(r) …!",
        ],
      },
      {
        title: "Einleitung",
        phrases: [
          { t: "Wie geht es dir/euch?", b: "geht" },
          { t: "Mir geht es sehr gut.", b: "geht" },
          { t: "Ich habe lange nichts von dir gehört.", b: "gehört" },
          "Ich hoffe, dass es dir gut geht!",
        ],
      },
      {
        title: "Von einem Event erzählen",
        phrases: [
          { t: "In dieser E-Mail möchte ich dir gerne erzählen, dass/wie …", b: "erzählen" },
          { t: "Ich schreibe dir heute, weil …", b: "weil" },
          { t: "Stell dir vor, was mir passiert ist!", b: "vor" },
          "Insgesamt war es …",
          { t: "Es hat alles sehr viel Spaß gemacht.", b: "Spaß" },
          { t: "Es war wirklich schrecklich.", b: "schrecklich" },
        ],
      },
      {
        title: "Struktur",
        phrases: [
          "zuerst / zunächst",
          "dann / danach",
          "inzwischen / nun",
          "vorher / danach",
          "deshalb / aus diesem Grund",
          "zuletzt / zum Schluss",
        ],
      },
      {
        title: "Einladung",
        phrases: [
          { t: "Hast du Lust, dich mal wieder mit mir zu treffen?", b: "Lust" },
          { t: "Sollen wir uns mal wieder treffen?", b: "treffen" },
          { t: "Komm doch mal wieder zu mir/uns.", b: "wieder" },
          { t: "Möchtest du mit mir zusammen … teilnehmen?", b: "teilnehmen" },
        ],
      },
      {
        title: "Schluss",
        phrases: [
          { t: "Ich warte auf deine Antwort.", b: "auf" },
          { t: "Schreib mir bald wieder.", b: "bald" },
          "Viele Grüße",
          "Liebe Grüße",
          "Herzliche Grüße",
        ],
      },
    ],
  },

  {
    id: "hoeflich",
    title: "Höfliche E-Mail",
    icon: "📋",
    accent: "blue",
    sections: [
      {
        title: "Anrede",
        phrases: [
          { t: "Sehr geehrter Herr …", b: "geehrter" },
          { t: "Sehr geehrte Frau …", b: "geehrte" },
          { t: "Sehr geehrte Damen und Herren", b: "Damen" },
        ],
      },
      {
        title: "Einleitung",
        phrases: [
          { t: "Ich schreibe Ihnen heute, weil …", b: "Ihnen" },
          { t: "Ich muss Ihnen leider mitteilen, dass …", b: "mitteilen" },
          { t: "Es tut mir sehr leid, dass …", b: "leid" },
          { t: "Ich möchte mich dafür entschuldigen, dass …", b: "entschuldigen" },
        ],
      },
      {
        title: "Nach Informationen fragen",
        phrases: [
          { t: "Könnten Sie mir bitte sagen, wann/wie/ob/wo …?", b: "Könnten" },
          { t: "Ich würde gerne wissen, wann/wie/ob/wo …?", b: "wissen" },
          { t: "Ich interessiere mich für …", b: "für" },
          { t: "Wäre es möglich, …?", b: "möglich" },
        ],
      },
      {
        title: "Schluss",
        phrases: [
          { t: "Über eine kurze Rückmeldung würde ich mich freuen.", b: "freuen" },
          { t: "Für eine Information wäre ich Ihnen sehr dankbar.", b: "dankbar" },
          { t: "Im Voraus vielen Dank.", b: "Dank" },
          { t: "Mit freundlichen Grüßen", b: "freundlichen" },
        ],
      },
    ],
  },

  {
    id: "meinung",
    title: "Meinung äußern",
    icon: "💬",
    accent: "purple",
    sections: [
      {
        title: "Eigene Meinung",
        phrases: [
          { t: "Ich denke/glaube/finde/meine, dass …", s: "Ich ____, dass …", a: ["denke"], alts: [["glaube", "finde", "meine"]] },
          { t: "Ich bin der Meinung, dass …", b: "Meinung" },
          { t: "Meiner Meinung nach …", b: "nach" },
        ],
      },
      {
        title: "Zustimmen",
        phrases: [
          { t: "Ich finde auch, dass …", b: "auch" },
          { t: "Mit der Meinung von XY bin ich einverstanden.", b: "einverstanden" },
        ],
      },
      {
        title: "Ablehnen",
        phrases: [
          { t: "Ich bin ganz anderer Meinung.", b: "anderer" },
          { t: "Ich kann der Meinung von XY nicht zustimmen.", b: "zustimmen" },
          { t: "Das stimmt überhaupt nicht.", b: "überhaupt" },
        ],
      },
      {
        title: "Vorschläge machen",
        phrases: [
          { t: "Es wäre besser, wenn …", b: "besser" },
          "Wir sollten …",
          { t: "Ich schlage vor, dass …", b: "vor" },
          { t: "Stattdessen würde ich … machen.", b: "Stattdessen" },
        ],
      },
      {
        title: "Unsicherheit ausdrücken",
        phrases: [
          { t: "Es ist möglich, dass …", b: "möglich" },
          { t: "Es kann sein, dass …", b: "sein" },
          "Vielleicht …",
          { t: "Das weiß ich leider nicht.", b: "weiß" },
        ],
      },
      {
        title: "Gefühle ausdrücken",
        phrases: [
          { t: "Es überrascht mich, dass …", b: "überrascht" },
          { t: "Ich hätte nicht gedacht, dass …", b: "gedacht" },
          { t: "Das kann ich mir überhaupt nicht vorstellen.", b: "vorstellen" },
        ],
      },
      {
        title: "Nach einer Meinung fragen",
        phrases: [
          { t: "Was hältst du davon?", b: "hältst" },
          { t: "Was meinen Sie dazu?", b: "dazu" },
          { t: "Haben Sie eine bessere Idee?", b: "bessere" },
        ],
      },
    ],
  },
];

// ---- Fold in the Sprechen Redemittel (reused from sprechen_redemittel.js) ----
// The phrase text stays single-sourced in SPRECHEN_REDEMITTEL (also used by the
// Sprechen editor). Here we only choose which word to blank for the gap-fill drill;
// any phrase not listed below is reference-only. Keyed by exact phrase string —
// if a phrase is edited there, it simply drops back to reference-only (no crash).
const SPRECHEN_BLANKS = {
  // — Gemeinsam etwas planen —
  "Wann sollen wir uns verabreden?": "verabreden",
  "Um wie viel Uhr sollten wir uns treffen?": "treffen",
  "Wie sollen wir verbleiben?": "verbleiben",
  "Was meinst du?": "meinst",
  "Was sagst du dazu?": "sagst",
  "Wie sieht es bei dir am Mittwoch aus?": "aus",
  "Hättest du am Freitag um 17:00 Uhr Zeit?": "Hättest",
  "Wäre es für dich in Ordnung, wenn wir uns am Donnerstag treffen?": "Ordnung",
  "Passt es dir am Samstag?": "Passt",
  "Können wir uns am Sonntag um 15 Uhr treffen?": "Können",
  "Was könnten wir machen?": "könnten",
  "Was hältst du davon, wenn wir …?": "hältst",
  "Findest du es eine gute Idee, wenn wir …?": "Findest",
  "Wie wäre es, wenn wir …?": "wäre",
  "Donnerstag klingt gut!": "klingt",
  "Das ist eine super Idee! Prima!": "super",
  "Das passt für mich perfekt!": "passt",
  "Am Freitag kann ich leider nicht, ich habe bereits einen anderen Termin.": "Termin",
  "Mittwoch sieht bei mir schlecht aus. Haben wir vielleicht eine Alternative?": "Alternative",
  "Leider habe ich am Freitag schon eine andere Verabredung.": "Verabredung",
  "Da kann ich leider nicht, weil …": "weil",
  "Tut mir leid, das geht bei mir nicht.": "geht",
  "Ich bin flexibel, du kannst entscheiden.": "flexibel",
  "Mir ist es eigentlich egal — wann passt es dir am besten?": "egal",
  "Wo treffen wir uns?": "Wo",
  "Was bringen wir mit?": "mit",
  "Wer kümmert sich um …?": "kümmert",
  "Brauchen wir noch etwas?": "Brauchen",
  "Soll ich … mitbringen?": "mitbringen",
  "Gut, dann sind wir uns einig.": "einig",
  "Alles klar, ich freue mich!": "freue",
  // — Präsentation —
  "In meiner Präsentation werde ich über … sprechen.": "über",
  "Heute möchte ich euch das Thema … vorstellen.": "vorstellen",
  "Zuerst werde ich meine Erfahrungen besprechen.": "Zuerst",
  "Dann werde ich über die Situation in meinem Heimatland sprechen.": "Dann",
  "Danach werde ich Vor- und Nachteile analysieren.": "Danach",
  "Schließlich werde ich meine Meinung dazu sagen.": "Schließlich",
  "Aus meiner Erfahrung …": "Erfahrung",
  "Ich habe schon oft …": "oft",
  "In meinem Alltag …": "Alltag",
  "Bei mir ist es so, dass …": "so",
  "Ich erinnere mich, dass …": "erinnere",
  "Letztes Jahr habe ich …": "Letztes",
  "In meiner Heimat …": "Heimat",
  "In meinem Heimatland …": "Heimatland",
  "Im Vergleich zu Deutschland …": "Vergleich",
  "Anders als hier …": "Anders",
  "In [Land] ist es üblich, dass …": "üblich",
  "Auf der einen Seite …, auf der anderen Seite …": "Seite",
  "Einerseits …, andererseits …": "andererseits",
  "Ein Vorteil von … ist, dass …": "Vorteil",
  "Ein Nachteil von … ist, dass …": "Nachteil",
  "Allerdings gibt es auch Probleme, denn …": "Probleme",
  "Trotzdem überwiegen für mich die Vorteile.": "überwiegen",
  "Mein Vortrag ist jetzt zu Ende.": "Ende",
  "Vielen Dank für Ihre Aufmerksamkeit.": "Aufmerksamkeit",
  "Vielen Dank fürs Zuhören.": "Zuhören",
  "Habt ihr noch Fragen?": "Fragen",
  "Ich freue mich auf eure Fragen.": "auf",
  "Das ist eine gute Frage.": "Frage",
  "Wenn ich richtig verstanden habe, …": "verstanden",
  "Können Sie die Frage bitte wiederholen?": "wiederholen",
  "Das weiß ich leider nicht genau, aber ich denke, …": "weiß",
  "Kommen wir nun zu …": "nun",
  "Als Nächstes möchte ich über … sprechen.": "Nächstes",
  "Auf der nächsten Folie sehen wir …": "Folie",
  "Damit komme ich zum nächsten Punkt.": "Punkt",
};

const SPRECHEN_ACCENTS = { planning: "emerald", presentation: "amber" };
const SPRECHEN_DERIVED = (typeof SPRECHEN_REDEMITTEL !== "undefined" ? SPRECHEN_REDEMITTEL : []).map((task) => ({
  id: "sp_" + task.id,
  title: task.title,
  icon: task.icon,
  accent: SPRECHEN_ACCENTS[task.id] || "neutral",
  speaking: true,
  sections: task.sections.map((sec) => ({
    title: sec.title,
    phrases: sec.phrases.map((p) => (SPRECHEN_BLANKS[p] ? { t: p, b: SPRECHEN_BLANKS[p] } : p)),
  })),
}));

// All themes: 3 authored (E-Mail / Meinung) + 2 derived from Sprechen.
const REDEMITTEL_ALL = REDEMITTEL_CATEGORIES.concat(SPRECHEN_DERIVED);

// ---- Derive the drill lessons (cloze items) from the combined source ----
const REDEMITTEL_LESSONS = REDEMITTEL_ALL.map((cat, ci) => {
  const items = [];
  let n = 0;
  cat.sections.forEach((sec) => {
    sec.phrases.forEach((p) => {
      if (typeof p === "string") return; // reference-only
      n += 1;
      let scaffold, answers, altLists;
      if (p.s) {
        scaffold = p.s;
        answers = p.a;
        altLists = p.alts || answers.map(() => []);
      } else {
        scaffold = p.t.replace(p.b, "____");
        answers = [p.b];
        altLists = [p.alt || []];
      }
      const alternatives = answers.map((a, i) => [a, ...(altLists[i] || [])]);
      items.push({
        id: `rm_${cat.id}_${String(n).padStart(3, "0")}`,
        category: cat.title,
        section: sec.title,
        full: p.t,
        scaffold,
        answers,
        alternatives,
      });
    });
  });
  return {
    lesson: ci + 1,
    id: cat.id,
    title: cat.title,
    icon: cat.icon,
    accent: cat.accent,
    speaking: !!cat.speaking,
    items,
  };
});

// ---- Reference structure: full phrases per section (drill blanks filled in) ----
const REDEMITTEL_REF = REDEMITTEL_ALL.map((cat) => ({
  id: cat.id,
  title: cat.title,
  icon: cat.icon,
  accent: cat.accent,
  speaking: !!cat.speaking,
  sections: cat.sections.map((sec) => ({
    title: sec.title,
    phrases: sec.phrases.map((p) => (typeof p === "string" ? p : p.t)),
  })),
}));

if (typeof module !== "undefined" && module.exports) {
  module.exports = { REDEMITTEL_LESSONS, REDEMITTEL_REF };
}
