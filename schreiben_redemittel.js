// Schreiben Redemittel Data
// Phrases organized by exam task type, then by structural section.
// Each phrase is tappable in the editor — clicking inserts it at the cursor.
//
// Three task types match the B1 Schreiben exam structure:
//   1. informal: Informeller Brief / E-Mail (an Freunde/Familie)
//   2. formal: (Halb-)Formeller Brief / E-Mail (an Behörden, Firmen, Lehrer)
//   3. forum: Diskussionsbeitrag / Meinung im Forum

const SCHREIBEN_REDEMITTEL = [
  {
    id: "informal",
    title: "Informeller Brief / E-Mail",
    subtitle: "An Freunde, Familie, gute Bekannte",
    icon: "✉️",
    description: "Du-Form. Locker, persönlich, herzlich.",
    sections: [
      {
        title: "Anrede",
        phrases: [
          "Liebe [Name],",
          "Lieber [Name],",
          "Hallo [Name],",
          "Hi [Name],"
        ]
      },
      {
        title: "Einleitung",
        phrases: [
          "ich hoffe, es geht dir gut!",
          "endlich habe ich mal Zeit, dir zu schreiben!",
          "vielen Dank für deinen letzten Brief!",
          "vielen Dank für deine E-Mail!",
          "vielen Dank für die Einladung zu …!",
          "wie geht es dir? Bei mir ist viel los."
        ]
      },
      {
        title: "Berichten / Beschreiben",
        phrases: [
          "Am Wochenende war ich …",
          "Zur Zeit lerne ich …",
          "Seit kurzem …",
          "Letzte Woche habe ich …",
          "Gestern bin ich …"
        ]
      },
      {
        title: "Freude / Bedauern ausdrücken",
        phrases: [
          "Ich freue mich sehr, dass du …",
          "Wie toll, dass du …",
          "Schade, dass wir …",
          "Es tut mir wirklich leid, dass …",
          "Ich finde es super, dass …"
        ]
      },
      {
        title: "Vorteile / Nachteile nennen",
        phrases: [
          "Ein (großer) Vorteil ist, …",
          "Ein Nachteil ist, …",
          "Einer der größten Vorteile ist, dass …",
          "Einer der größten Nachteile ist, dass …"
        ]
      },
      {
        title: "Begründen / Erklären",
        phrases: [
          "Besonders gefällt mir …, weil …",
          "Was ich gut finde, ist, dass …, denn …",
          "Gar nicht gefällt mir …, da …",
          "Deshalb kaufe ich jetzt nur noch …",
          "Deswegen habe ich mich entschieden, …",
          "Ich habe nämlich viel Stress zur Zeit.",
          "Obwohl ich keine Zeit habe, …"
        ]
      },
      {
        title: "Tipps geben",
        phrases: [
          "Du könntest …",
          "Ich empfehle dir, … zu …",
          "Es wäre gut, wenn du …",
          "An deiner Stelle würde ich …"
        ]
      },
      {
        title: "Vorschlag machen",
        phrases: [
          "Hast du Lust auf ein Treffen am … um … Uhr?",
          "Ich würde mich gern mal wieder mit dir treffen! Kannst du am … um … ?",
          "Wie wäre es mit Kino am Freitagabend?",
          "Was hältst du davon, wenn wir am Freitag ins Kino gehen?",
          "Sollen wir uns am Wochenende treffen?"
        ]
      },
      {
        title: "Schluss",
        phrases: [
          "Schreib mir bald.",
          "Bitte gib mir Bescheid, ob es dir passt.",
          "Ich würde mich freuen, wenn es klappt!",
          "Ich freue mich auf deine Antwort.",
          "Melde dich bald!"
        ]
      },
      {
        title: "Grußformel",
        phrases: [
          "Liebe Grüße,",
          "Viele Grüße,",
          "Bis Samstag!",
          "Bis bald!",
          "Alles Liebe,",
          "Dein/e [Vorname]"
        ]
      }
    ]
  },

  {
    id: "formal",
    title: "(Halb-)Formeller Brief / E-Mail",
    subtitle: "An Behörden, Firmen, Lehrer, fremde Personen",
    icon: "📋",
    description: "Sie-Form. Höflich, sachlich, klar strukturiert.",
    sections: [
      {
        title: "Anrede",
        phrases: [
          "Sehr geehrte Frau [Nachname],",
          "Sehr geehrter Herr [Nachname],",
          "Sehr geehrte Damen und Herren,"
        ]
      },
      {
        title: "Einleitung",
        phrases: [
          "ich schreibe Ihnen, weil …",
          "ich habe (in Ihrer Anzeige) gelesen, dass …",
          "ich habe mich zu Ihrem Kurs … angemeldet.",
          "mit großem Interesse habe ich Ihre Anzeige gelesen.",
          "vielen Dank für Ihre Nachricht vom …"
        ]
      },
      {
        title: "Sich entschuldigen",
        phrases: [
          "Leider …",
          "Entschuldigen Sie, aber …",
          "Ich möchte mich bei Ihnen entschuldigen, weil …",
          "Es tut mir sehr leid, dass …"
        ]
      },
      {
        title: "Sich bedanken",
        phrases: [
          "Vielen Dank für Ihre Einladung!",
          "Vielen Dank für Ihre Nachricht!",
          "Ich habe mich sehr über Ihre Einladung gefreut. Vielen Dank dafür!",
          "Ich danke Ihnen herzlich für …"
        ]
      },
      {
        title: "Interesse bekunden",
        phrases: [
          "Ihr Angebot hat mich sehr angesprochen.",
          "Ich interessiere mich sehr für Ihr Angebot, denn …",
          "Ihre Anzeige hat mein Interesse geweckt.",
          "Ich würde gerne mehr über … erfahren."
        ]
      },
      {
        title: "Begründen",
        phrases: [
          "Ich kann leider nicht kommen, weil …",
          "Der Grund dafür ist, dass …",
          "Das liegt daran, dass …",
          "Aus diesem Grund …"
        ]
      },
      {
        title: "Fragen stellen",
        phrases: [
          "Ich würde gerne wissen, ob …",
          "Ich möchte fragen, ob Sie auch am … um … Uhr Zeit hätten.",
          "Wäre es möglich, einen neuen Termin am … um … Uhr auszumachen?",
          "Können Sie mir bitte mitteilen, …?",
          "Könnten Sie mir bitte sagen, ob …?"
        ]
      },
      {
        title: "Um etwas bitten",
        phrases: [
          "Außerdem bitte ich Sie, mir eine Wegbeschreibung zu schicken.",
          "Wäre es möglich, mir … zu schicken?",
          "Ich möchte Sie bitten, …",
          "Könnten Sie mir bitte … zukommen lassen?"
        ]
      },
      {
        title: "Schluss",
        phrases: [
          "Bitte geben Sie mir Bescheid, ob es Ihnen passt.",
          "Vielen Dank im Voraus.",
          "Vielen Dank für Ihr Verständnis.",
          "Ich freue mich auf Ihre Antwort.",
          "Über eine baldige Rückmeldung würde ich mich freuen."
        ]
      },
      {
        title: "Grußformel",
        phrases: [
          "Mit freundlichen Grüßen,",
          "Freundliche Grüße,",
          "[Vorname Nachname]"
        ]
      }
    ]
  },

  {
    id: "forum",
    title: "Diskussionsbeitrag / Meinung",
    subtitle: "Forum, Kommentar, Meinungsartikel",
    icon: "💬",
    description: "Eigene Meinung äußern, begründen, mit Vor-/Nachteilen argumentieren.",
    sections: [
      {
        title: "Einleitung — auf das Thema beziehen",
        phrases: [
          "Ich finde … sehr interessant.",
          "Über das Thema … wird heutzutage viel diskutiert.",
          "Das Thema … ist heutzutage sehr relevant, weil …",
          "Ich sehe das genauso wie [Name].",
          "Ich bin da anderer Meinung als [Name].",
          "Ich kann mich der Meinung von [Name] nicht anschließen."
        ]
      },
      {
        title: "Meinung ausdrücken",
        phrases: [
          "Meiner Meinung nach …",
          "Ich bin der Meinung, dass …",
          "Ich denke, dass …",
          "Ich glaube, dass …",
          "Ich finde, dass …",
          "Ich bin davon überzeugt, dass …",
          "Für mich ist es wichtig, dass …"
        ]
      },
      {
        title: "Zustimmen",
        phrases: [
          "Ich stimme zu, dass …",
          "Ich sehe das genauso.",
          "Da bin ich völlig deiner Meinung.",
          "Das finde ich auch."
        ]
      },
      {
        title: "Ablehnen / Widersprechen",
        phrases: [
          "Ich bin anderer Meinung.",
          "Im Gegenteil …",
          "Das sehe ich anders.",
          "Da kann ich nicht zustimmen, weil …"
        ]
      },
      {
        title: "Gründe nennen",
        phrases: [
          "Ich bin für …, weil …",
          "Ich bin gegen …, weil …",
          "Deshalb …",
          "Deswegen …",
          "…, denn …"
        ]
      },
      {
        title: "Vor- und Nachteile",
        phrases: [
          "Auf der einen Seite …, auf der anderen Seite …",
          "Einerseits …, andererseits …",
          "Ein Vorteil ist, dass …",
          "Ein Nachteil ist, dass …",
          "Ich konnte zwar …, aber …"
        ]
      },
      {
        title: "Einschränken / Differenzieren",
        phrases: [
          "Allerdings ist es notwendig, …",
          "Trotzdem …",
          "Obwohl …",
          "Es kommt darauf an, …",
          "Das hängt davon ab, ob …"
        ]
      },
      {
        title: "Beispiel geben",
        phrases: [
          "Zum Beispiel …",
          "Ein Beispiel dafür ist …",
          "Das sieht man zum Beispiel daran, dass …",
          "In meinem Heimatland …"
        ]
      },
      {
        title: "Schluss / Fazit",
        phrases: [
          "Alles in allem denke ich, dass …",
          "Letztendlich denke ich, dass …",
          "Zusammenfassend kann man sagen, dass …",
          "Deshalb bin ich der Meinung, dass …",
          "Aus diesen Gründen …"
        ]
      }
    ]
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = SCHREIBEN_REDEMITTEL;
}
