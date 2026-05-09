// Declension Reference (Adjektiv-Endungen + Artikel)
// A study reference. Renders as a 4 cases × 4 genders matrix,
// with three sub-rows per cell showing the three declension patterns:
//   1. With definite article (der/die/das) — Tab. 2 weak endings
//   2. No article (zero) — Tab. 1 strong endings
//   3. With ein/kein/possessive — mixed
//
// For every cell, we provide:
//   - The ending pattern (e.g. "-er")
//   - A canonical example phrase
//   - A full example sentence using that phrase

const DECLENSION_REFERENCE = {
  title: "Deklination auf einen Blick",
  subtitle: "Artikel + Adjektiv-Endungen für alle Kasus und Genera",

  legend: {
    intro: "Drei Muster pro Zelle:",
    patterns: [
      { id: "def",   label: "der/die/das",        color: "blue",   note: "Artikel trägt Kasus → Adjektiv schwach" },
      { id: "zero",  label: "ohne Artikel",       color: "amber",  note: "Adjektiv trägt Kasus → starke Endung" },
      { id: "ein",   label: "ein/kein/mein",      color: "purple", note: "Mixed: Artikel teils endungslos" }
    ]
  },

  // For each (case, gender) cell, three example phrases
  // Phrases use the same anchor nouns throughout (Hund / Kino / Lampe / Freunde)
  // so the user can scan vertically and see only the endings change
  matrix: {
    nominativ: {
      maskulin: {
        anchor: "Hund",
        def:  { ending: "-e",   phrase: "der neue Hund",       sentence: "Der neue Hund meines Nachbarn bellt jede Nacht." },
        zero: { ending: "-er",  phrase: "schwarzer Hund",      sentence: "Schwarzer Hund sucht ein liebevolles Zuhause." },
        ein:  { ending: "-er",  phrase: "ein schwarzer Hund",  sentence: "Ein schwarzer Hund sitzt vor der Haustür." }
      },
      neutrum: {
        anchor: "Kino",
        def:  { ending: "-e",   phrase: "das neue Kino",       sentence: "Das neue Kino am Alex hat zehn Säle." },
        zero: { ending: "-es",  phrase: "blaues Kino",         sentence: "Blaues Kino ist ein bekanntes Programmkino in Berlin." },
        ein:  { ending: "-es",  phrase: "ein blaues Kino",     sentence: "Ein blaues Kino — das klingt sehr ungewöhnlich!" }
      },
      feminin: {
        anchor: "Lampe",
        def:  { ending: "-e",   phrase: "die neue Lampe",      sentence: "Die neue Lampe macht das WG-Zimmer viel gemütlicher." },
        zero: { ending: "-e",   phrase: "weiße Lampe",         sentence: "Weiße Lampe passt gut zu minimalistischen Wohnungen." },
        ein:  { ending: "-e",   phrase: "eine weiße Lampe",    sentence: "Eine weiße Lampe steht auf dem Schreibtisch." }
      },
      plural: {
        anchor: "Freunde",
        def:  { ending: "-en",  phrase: "die neuen Freunde",   sentence: "Die neuen Freunde von Tom kommen alle aus Neukölln." },
        zero: { ending: "-e",   phrase: "gute Freunde",        sentence: "Gute Freunde sind im Leben sehr wichtig." },
        ein:  { ending: "-en",  phrase: "keine guten Freunde", sentence: "Keine guten Freunde zu haben ist sehr einsam." }
      }
    },

    akkusativ: {
      maskulin: {
        anchor: "Hund",
        def:  { ending: "-en",  phrase: "den neuen Hund",          sentence: "Ich sehe den neuen Hund jeden Morgen im Görlitzer Park." },
        zero: { ending: "-en",  phrase: "weißen Zucker",           sentence: "Ich nehme keinen weißen Zucker in meinen Kaffee." },
        ein:  { ending: "-en",  phrase: "einen schwarzen Hund",    sentence: "Ich möchte einen schwarzen Hund adoptieren." }
      },
      neutrum: {
        anchor: "Kino",
        def:  { ending: "-e",   phrase: "das neue Kino",           sentence: "Wir besuchen das neue Kino am Freitagabend." },
        zero: { ending: "-es",  phrase: "kaltes Wasser",           sentence: "Er trinkt jeden Morgen kaltes Wasser." },
        ein:  { ending: "-es",  phrase: "ein blaues Kino",         sentence: "Wir suchen ein blaues Kino für das Fotoprojekt." }
      },
      feminin: {
        anchor: "Lampe",
        def:  { ending: "-e",   phrase: "die weiße Lampe",         sentence: "Er kauft die weiße Lampe bei IKEA in Tempelhof." },
        zero: { ending: "-e",   phrase: "wenige Lampe",            sentence: "Ich brauche wenige Lampe — eine reicht mir." },
        ein:  { ending: "-e",   phrase: "eine weiße Lampe",        sentence: "Sie hat eine weiße Lampe für ihr Schlafzimmer gekauft." }
      },
      plural: {
        anchor: "Freunde",
        def:  { ending: "-en",  phrase: "die guten Freunde",       sentence: "Sie trifft die guten Freunde am Späti um die Ecke." },
        zero: { ending: "-e",   phrase: "weiße Freunde",           sentence: "Er hat weiße Freunde aus der ganzen Welt." },
        ein:  { ending: "-en",  phrase: "keine guten Freunde",     sentence: "Er hat leider keine guten Freunde in der neuen Stadt." }
      }
    },

    dativ: {
      maskulin: {
        anchor: "Hund",
        def:  { ending: "-en",  phrase: "dem schwarzen Hund",       sentence: "Ich gebe dem schwarzen Hund ein Leckerli." },
        zero: { ending: "-em",  phrase: "schwarzem Hund",           sentence: "Mit schwarzem Hund darf man hier nicht rein." },
        ein:  { ending: "-en",  phrase: "einem schwarzen Hund",     sentence: "Er wohnt mit einem schwarzen Hund in Prenzlauer Berg." }
      },
      neutrum: {
        anchor: "Kino",
        def:  { ending: "-en",  phrase: "dem blauen Kino",          sentence: "Wir treffen uns vor dem blauen Kino um 20 Uhr." },
        zero: { ending: "-em",  phrase: "blauem Kino",              sentence: "Mit blauem Kino als Treffpunkt kann nichts schiefgehen." },
        ein:  { ending: "-en",  phrase: "einem blauen Kino",        sentence: "Sie arbeitet in einem blauen Kino in Mitte." }
      },
      feminin: {
        anchor: "Lampe",
        def:  { ending: "-en",  phrase: "der weißen Lampe",         sentence: "Er steht neben der weißen Lampe für das Foto." },
        zero: { ending: "-er",  phrase: "weißer Lampe",             sentence: "Bei weißer Lampe lese ich am liebsten." },
        ein:  { ending: "-en",  phrase: "einer weißen Lampe",       sentence: "Das Zimmer wirkt mit einer weißen Lampe größer." }
      },
      plural: {
        anchor: "Freunden",
        def:  { ending: "-en",  phrase: "den weißen Freunden",      sentence: "Sie dankt den weißen Freunden für ihre Hilfe." },
        zero: { ending: "-en",  phrase: "guten Freunden",           sentence: "Mit guten Freunden macht Berlin mehr Spaß." },
        ein:  { ending: "-en",  phrase: "keinen guten Freunden",    sentence: "Ohne keinen guten Freunden fühlt man sich in Berlin verloren." }
      }
    },

    genitiv: {
      maskulin: {
        anchor: "Hundes",
        def:  { ending: "-en",  phrase: "des neuen Hundes",         sentence: "Das Bellen des neuen Hundes stört die ganze Nachbarschaft." },
        zero: { ending: "-en",  phrase: "neuen Hundes",             sentence: "Wegen neuen Hundes beschwerten sich die Nachbarn." },
        ein:  { ending: "-en",  phrase: "eines neuen Hundes",       sentence: "Die Pflege eines neuen Hundes kostet viel Zeit." }
      },
      neutrum: {
        anchor: "Kinos",
        def:  { ending: "-en",  phrase: "des neuen Kinos",          sentence: "Die Adresse des neuen Kinos finde ich nicht online." },
        zero: { ending: "-en",  phrase: "neuen Kinos",              sentence: "Trotz neuen Kinos gehen viele Leute lieber streamen." },
        ein:  { ending: "-en",  phrase: "eines neuen Kinos",        sentence: "Die Eröffnung eines neuen Kinos ist immer ein Ereignis." }
      },
      feminin: {
        anchor: "Lampe",
        def:  { ending: "-en",  phrase: "der neuen Lampe",          sentence: "Das Licht der neuen Lampe ist sehr angenehm." },
        zero: { ending: "-er",  phrase: "neuer Lampe",              sentence: "Trotz neuer Lampe ist das Zimmer noch zu dunkel." },
        ein:  { ending: "-en",  phrase: "einer neuen Lampe",        sentence: "Der Kauf einer neuen Lampe hat das Zimmer verändert." }
      },
      plural: {
        anchor: "Freunde",
        def:  { ending: "-en",  phrase: "der neuen Freunde",        sentence: "Die Namen der neuen Freunde habe ich schon vergessen." },
        zero: { ending: "-er",  phrase: "neuer Freunde",            sentence: "Wegen neuer Freunde fühlt er sich in Berlin endlich wohl." },
        ein:  { ending: "-en",  phrase: "keiner neuen Freunde",     sentence: "Trotz keiner neuen Freunde bleibt er optimistisch." }
      }
    }
  },

  // Quick-reference summary tables — what the user should screenshot
  summary: {
    title: "Endungs-Übersicht (zum Auswendiglernen)",
    table_def: {
      label: "Tab. 1: Mit bestimmtem Artikel (schwache Endungen)",
      header: ["", "mask.", "fem.", "neut.", "Pl."],
      rows: [
        ["Nom.", "-e",  "-e",  "-e",  "-en"],
        ["Akk.", "-en", "-e",  "-e",  "-en"],
        ["Dat.", "-en", "-en", "-en", "-en"],
        ["Gen.", "-en", "-en", "-en", "-en"]
      ]
    },
    table_zero: {
      label: "Tab. 2: Ohne Artikel (starke Endungen — Adjektiv trägt den Kasus)",
      header: ["", "mask.", "fem.", "neut.", "Pl."],
      rows: [
        ["Nom.", "-er", "-e",  "-es", "-e"],
        ["Akk.", "-en", "-e",  "-es", "-e"],
        ["Dat.", "-em", "-er", "-em", "-en"],
        ["Gen.", "-en*", "-er", "-en*", "-er"]
      ],
      note: "* Im Genitiv mask./neut.: Adjektiv = -en, weil das Nomen -s trägt."
    },
    table_ein: {
      label: "Tab. 3: ein / kein / mein etc. (Mixed)",
      header: ["", "mask.", "fem.", "neut.", "Pl."],
      rows: [
        ["Nom.", "-er ⚠", "-e",  "-es ⚠", "-en"],
        ["Akk.", "-en",   "-e",  "-es ⚠", "-en"],
        ["Dat.", "-en",   "-en", "-en",   "-en"],
        ["Gen.", "-en",   "-en", "-en",   "-en"]
      ],
      note: "⚠ Hier hat ein/kein/mein keine Endung → Adjektiv übernimmt die starke Endung (Tab. 2)."
    }
  },

  // Memory hooks
  rules_of_thumb: [
    {
      title: "Die 5-en-Regel",
      text: "Im Dativ und Genitiv ist die Adjektiv-Endung fast immer -en (außer im Dativ Plural ohne Artikel: dort ist -en sowieso die starke Form)."
    },
    {
      title: "Wer hat den Kasus?",
      text: "Nur EINER zeigt den Kasus an — entweder der Artikel ODER das Adjektiv. Wenn der Artikel die Endung schon trägt (der/die/das), darf das Adjektiv schwach (-e oder -en) bleiben."
    },
    {
      title: "Die drei ein-Lücken",
      text: "ein/kein/mein/dein/sein/ihr/unser/euer haben in genau 3 Zellen KEINE Endung: Nom. mask., Nom. neut., Akk. neut. Dort übernimmt das Adjektiv die starke Endung."
    },
    {
      title: "Plural Dativ = Pflicht-n",
      text: "Im Dativ Plural endet das Nomen IMMER auf -n (außer es endet schon auf -n oder -s). Mit den Freunden, mit guten Freunden — niemals *mit guten Freunde."
    }
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = DECLENSION_REFERENCE;
}
