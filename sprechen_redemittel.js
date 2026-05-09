// Sprechen Redemittel Data
// Two B1 oral exam parts:
//   1. planning: Gemeinsam etwas planen (Teil 2) — dialogic, partner conversation
//   2. presentation: Präsentation (Teil 3) — monologic, 5-slide structured talk

const SPRECHEN_REDEMITTEL = [
  {
    id: "planning",
    title: "Gemeinsam etwas planen",
    subtitle: "B1 Sprechen Teil 2 — Dialog mit Partner",
    icon: "🤝",
    description: "Termin und Aktivität gemeinsam vereinbaren. Vorschlagen, akzeptieren, ablehnen, Alternativen anbieten.",
    sections: [
      {
        title: "Fragen zur Planung",
        phrases: [
          "Wann sollen wir uns verabreden?",
          "Um wie viel Uhr sollten wir uns treffen?",
          "Wie sollen wir verbleiben?",
          "Was meinst du?",
          "Was sagst du dazu?"
        ]
      },
      {
        title: "Vorschläge machen — Termin",
        phrases: [
          "Wie sieht es bei dir am Mittwoch aus?",
          "Hättest du am Freitag um 17:00 Uhr Zeit?",
          "Wäre es für dich in Ordnung, wenn wir uns am Donnerstag treffen?",
          "Passt es dir am Samstag?",
          "Können wir uns am Sonntag um 15 Uhr treffen?"
        ]
      },
      {
        title: "Vorschläge machen — Aktivität",
        phrases: [
          "Was könnten wir machen?",
          "Was hältst du davon, wenn wir …?",
          "Findest du es eine gute Idee, wenn wir …?",
          "Wir könnten …!",
          "Wie wäre es, wenn wir …?",
          "Sollen wir vielleicht …?"
        ]
      },
      {
        title: "Termine bestätigen / zusagen",
        phrases: [
          "Donnerstag klingt gut!",
          "Das ist eine super Idee! Prima!",
          "Das passt für mich perfekt!",
          "Einverstanden!",
          "Ja, das machen wir so.",
          "Super, dann treffen wir uns am …"
        ]
      },
      {
        title: "Termine absagen",
        phrases: [
          "Am Freitag kann ich leider nicht, ich habe bereits einen anderen Termin.",
          "Mittwoch sieht bei mir schlecht aus. Haben wir vielleicht eine Alternative?",
          "Leider habe ich am Freitag schon eine andere Verabredung.",
          "Da kann ich leider nicht, weil …",
          "Tut mir leid, das geht bei mir nicht."
        ]
      },
      {
        title: "Flexibilität zeigen",
        phrases: [
          "Am Mittwoch ist super, aber ich kann nur am Vormittag von 10:00 bis 12:00 Uhr. Ist das okay?",
          "Ich bin flexibel, du kannst entscheiden.",
          "Mir ist es eigentlich egal — wann passt es dir am besten?",
          "Beides geht für mich."
        ]
      },
      {
        title: "Präpositionen mit Zeitangabe",
        phrases: [
          "Am Mittwoch",
          "Um 17:00 Uhr (exakt)",
          "Gegen 15:00 Uhr (ungefähr)",
          "Von 14:00 bis 18:00 Uhr",
          "Ab 16 Uhr",
          "Bis spätestens 20 Uhr"
        ]
      },
      {
        title: "Details klären",
        phrases: [
          "Wo treffen wir uns?",
          "Was bringen wir mit?",
          "Wer kümmert sich um …?",
          "Brauchen wir noch etwas?",
          "Soll ich … mitbringen?"
        ]
      },
      {
        title: "Abschließen",
        phrases: [
          "Gut, dann sind wir uns einig.",
          "Perfekt, also bis Freitag!",
          "Alles klar, ich freue mich!",
          "Bis dann!",
          "Wir sehen uns am …"
        ]
      }
    ],

    practice_scenarios: [
      "Sie wollen mit Ihrem Freund ins Kino gehen. Vereinbaren Sie Tag, Uhrzeit und Treffpunkt.",
      "Ein Freund hat Geburtstag. Planen Sie gemeinsam mit einem anderen Freund ein Geschenk.",
      "Sie wollen zusammen kochen. Besprechen Sie, was Sie kochen, wer einkauft und wann.",
      "Sie planen eine Wochenendreise zu zweit. Klären Sie Ziel, Verkehrsmittel und Unterkunft.",
      "Sie wollen für eine Prüfung lernen. Vereinbaren Sie Lernzeiten und einen Treffpunkt."
    ]
  },

  {
    id: "presentation",
    title: "Präsentation",
    subtitle: "B1 Sprechen Teil 3 — 5-Folien-Vortrag",
    icon: "🎤",
    description: "Strukturierter Vortrag über ein Thema. Fünf Folien: Einleitung, Erfahrungen, Heimatland, Vor-/Nachteile, Schluss.",
    sections: [
      {
        title: "Folie 1: Einleitung",
        phrases: [
          "In meiner Präsentation werde ich über … sprechen.",
          "Heute möchte ich euch das Thema … vorstellen.",
          "Mein Thema ist …",
          "Zuerst werde ich meine Erfahrungen besprechen.",
          "Dann werde ich über die Situation in meinem Heimatland sprechen.",
          "Danach werde ich Vor- und Nachteile analysieren.",
          "Schließlich werde ich meine Meinung dazu sagen."
        ]
      },
      {
        title: "Folie 2: Persönliche Erfahrungen",
        phrases: [
          "Ich persönlich …",
          "Aus meiner Erfahrung …",
          "Ich habe schon oft …",
          "In meinem Alltag …",
          "Bei mir ist es so, dass …",
          "Ich erinnere mich, dass …",
          "Letztes Jahr habe ich …"
        ]
      },
      {
        title: "Folie 3: Situation im Heimatland",
        phrases: [
          "In meiner Heimat …",
          "In meinem Heimatland …",
          "Bei uns in [Land] …",
          "Im Vergleich zu Deutschland …",
          "Anders als hier …",
          "In [Land] ist es üblich, dass …",
          "Bei uns gibt es … nicht / auch …"
        ]
      },
      {
        title: "Folie 4: Vor- und Nachteile",
        phrases: [
          "Auf der einen Seite …, auf der anderen Seite …",
          "Einerseits …, andererseits …",
          "Ein Vorteil von … ist, dass …",
          "Ein Nachteil von … ist, dass …",
          "Ein großer Vorteil ist …",
          "Allerdings gibt es auch Probleme, denn …",
          "Trotzdem überwiegen für mich die Vorteile."
        ]
      },
      {
        title: "Folie 5: Abschluss",
        phrases: [
          "Mein Vortrag ist jetzt zu Ende.",
          "Meine Präsentation ist jetzt zu Ende.",
          "Vielen Dank für Ihre Aufmerksamkeit.",
          "Vielen Dank fürs Zuhören.",
          "Habt ihr noch Fragen?",
          "Ich freue mich auf eure Fragen."
        ]
      },
      {
        title: "Auf Fragen antworten",
        phrases: [
          "Das ist eine gute Frage.",
          "Vielen Dank für die Frage.",
          "Wenn ich richtig verstanden habe, …",
          "Können Sie die Frage bitte wiederholen?",
          "Das weiß ich leider nicht genau, aber ich denke, …",
          "Ich glaube, dass …"
        ]
      },
      {
        title: "Übergänge zwischen Folien",
        phrases: [
          "Kommen wir nun zu …",
          "Als Nächstes möchte ich über … sprechen.",
          "Auf der nächsten Folie sehen wir …",
          "Damit komme ich zum nächsten Punkt.",
          "Nun zur Frage der Vor- und Nachteile."
        ]
      }
    ],

    practice_topics: [
      "Soziale Medien im Alltag",
      "Reisen — mit oder ohne Plan",
      "Leben in der Stadt vs. auf dem Land",
      "Online lernen vs. Präsenzunterricht",
      "Haustiere in der Wohnung",
      "Fast Food und gesunde Ernährung",
      "Auto fahren oder öffentliche Verkehrsmittel",
      "Sprachen lernen im Erwachsenenalter",
      "Hausaufgaben in der Schule",
      "Smartphones für Kinder"
    ]
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = SPRECHEN_REDEMITTEL;
}
