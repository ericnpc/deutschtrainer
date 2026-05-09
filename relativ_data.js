// Relativsätze Drill Data
// Coverage: Relative pronouns in Nom, Akk, Dat, Gen — covering all genders and plural
// Format: User sees two simple sentences and a target structure with blanks for the relative pronoun
//         Sometimes also blanks for the verb position
// Total: 30 items
//
// Each item:
//   prompt_en: meaning context
//   sentence_1: the main clause (will be kept)
//   sentence_2: the second sentence to be subordinated as relative clause
//   scaffold: combined sentence with ___ for the relative pronoun (and other blanks if needed)
//   answers: filled-in values for each blank
//   alternatives: per-blank accepted variants
//   case: nom | akk | dat | gen
//   gender: m | f | n | pl
//   hint: rule explanation
//   full: complete correct sentence
//
// Pronoun reference table:
//        m       f       n       pl
//   Nom: der     die     das     die
//   Akk: den     die     das     die
//   Dat: dem    der    dem     denen
//   Gen: dessen  deren   dessen  deren

const RELATIV_ITEMS = [
  // ============ NOMINATIV (relative pronoun = subject of relative clause) ============
  {
    id: "rel_001",
    prompt_en: "Max is a colleague who can listen well.",
    sentence_1: "Max ist ein Kollege.",
    sentence_2: "Er kann gut zuhören.",
    scaffold: "Max ist ein Kollege, ___ gut zuhören kann.",
    answers: ["der"],
    alternatives: [["der"]],
    case: "nom",
    gender: "m",
    hint: "Antecedent 'Kollege' is mask., relative pronoun is the SUBJECT of the relative clause → Nom. mask. = der.",
    full: "Max ist ein Kollege, der gut zuhören kann."
  },
  {
    id: "rel_002",
    prompt_en: "Julia is a student who always does her homework.",
    sentence_1: "Julia ist eine Studentin.",
    sentence_2: "Sie erledigt immer ihre Aufgaben.",
    scaffold: "Julia ist eine Studentin, ___ immer ihre Aufgaben erledigt.",
    answers: ["die"],
    alternatives: [["die"]],
    case: "nom",
    gender: "f",
    hint: "Studentin is fem.; relative pronoun = subject → Nom. fem. = die.",
    full: "Julia ist eine Studentin, die immer ihre Aufgaben erledigt."
  },
  {
    id: "rel_003",
    prompt_en: "Pia is a stubborn child who never listens.",
    sentence_1: "Pia ist ein eigensinniges Kind.",
    sentence_2: "Es hört nie zu.",
    scaffold: "Pia ist ein eigensinniges Kind, ___ nie zuhört.",
    answers: ["das"],
    alternatives: [["das"]],
    case: "nom",
    gender: "n",
    hint: "Kind is neut.; relative pronoun = subject → Nom. neut. = das.",
    full: "Pia ist ein eigensinniges Kind, das nie zuhört."
  },
  {
    id: "rel_004",
    prompt_en: "Theo and Eva are old friends who always help me.",
    sentence_1: "Theo und Eva sind alte Freunde.",
    sentence_2: "Sie helfen mir immer.",
    scaffold: "Theo und Eva sind alte Freunde, ___ mir immer helfen.",
    answers: ["die"],
    alternatives: [["die"]],
    case: "nom",
    gender: "pl",
    hint: "Plural antecedent → Nom. Pl. = die.",
    full: "Theo und Eva sind alte Freunde, die mir immer helfen."
  },
  {
    id: "rel_005",
    prompt_en: "Hatem is a talented programmer who works for a software company.",
    sentence_1: "Hatem ist ein begabter Programmierer.",
    sentence_2: "Er arbeitet für eine Softwarefirma.",
    scaffold: "Hatem ist ein begabter Programmierer, ___ für eine Softwarefirma arbeitet.",
    answers: ["der"],
    alternatives: [["der"]],
    case: "nom",
    gender: "m",
    hint: "Programmierer is mask.; subject of rel. clause → der.",
    full: "Hatem ist ein begabter Programmierer, der für eine Softwarefirma arbeitet."
  },

  // ============ AKKUSATIV (relative pronoun = direct object of relative clause) ============
  {
    id: "rel_006",
    prompt_en: "That's a colleague (whom) I helped.",
    sentence_1: "Das ist eine Kollegin.",
    sentence_2: "Ich habe ihr geholfen.",
    scaffold: "Das ist eine Kollegin, ___ ich geholfen habe.",
    answers: ["der"],
    alternatives: [["der"]],
    case: "dat",
    gender: "f",
    hint: "TRICK: helfen takes Dativ! Kollegin is fem. → Dat. fem. = der.",
    full: "Das ist eine Kollegin, der ich geholfen habe."
  },
  {
    id: "rel_007",
    prompt_en: "That's a scarf (which) I would like to buy.",
    sentence_1: "Das ist ein Schal.",
    sentence_2: "Ich möchte ihn kaufen.",
    scaffold: "Das ist ein Schal, ___ ich kaufen möchte.",
    answers: ["den"],
    alternatives: [["den"]],
    case: "akk",
    gender: "m",
    hint: "Schal is mask.; rel. pronoun = direct object → Akk. mask. = den.",
    full: "Das ist ein Schal, den ich kaufen möchte."
  },
  {
    id: "rel_008",
    prompt_en: "I'm reading a book that I can recommend.",
    sentence_1: "Ich lese ein Buch.",
    sentence_2: "Ich kann es empfehlen.",
    scaffold: "Ich lese ein Buch, ___ ich empfehlen kann.",
    answers: ["das"],
    alternatives: [["das"]],
    case: "akk",
    gender: "n",
    hint: "Buch is neut.; rel. pronoun = direct object → Akk. neut. = das.",
    full: "Ich lese ein Buch, das ich empfehlen kann."
  },
  {
    id: "rel_009",
    prompt_en: "Are these the colleagues (whom) I helped recently?",
    sentence_1: "Sind das die Kollegen?",
    sentence_2: "Ich habe ihnen geholfen.",
    scaffold: "Sind das die Kollegen, ___ ich geholfen habe?",
    answers: ["denen"],
    alternatives: [["denen"]],
    case: "dat",
    gender: "pl",
    hint: "TRICK: helfen + Dativ. Plural → Dat. Pl. = denen (NOT den!).",
    full: "Sind das die Kollegen, denen ich geholfen habe?"
  },
  {
    id: "rel_010",
    prompt_en: "There are days that I would prefer to forget.",
    sentence_1: "Es gibt Tage.",
    sentence_2: "Ich würde sie am liebsten vergessen.",
    scaffold: "Es gibt Tage, ___ ich am liebsten vergessen würde.",
    answers: ["die"],
    alternatives: [["die"]],
    case: "akk",
    gender: "pl",
    hint: "Tage is plural; rel. pronoun = direct object → Akk. Pl. = die.",
    full: "Es gibt Tage, die ich am liebsten vergessen würde."
  },
  {
    id: "rel_011",
    prompt_en: "Don't buy things that you don't need.",
    sentence_1: "Kaufen Sie keine Dinge.",
    sentence_2: "Sie brauchen sie nicht.",
    scaffold: "Kaufen Sie keine Dinge, ___ Sie nicht brauchen.",
    answers: ["die"],
    alternatives: [["die"]],
    case: "akk",
    gender: "pl",
    hint: "Dinge is plural; rel. pronoun = direct object → Akk. Pl. = die.",
    full: "Kaufen Sie keine Dinge, die Sie nicht brauchen."
  },

  // ============ DATIV ============
  {
    id: "rel_012",
    prompt_en: "Those are people (whom) you should listen to.",
    sentence_1: "Das sind Leute.",
    sentence_2: "Du solltest ihnen zuhören.",
    scaffold: "Das sind Leute, ___ du zuhören solltest.",
    answers: ["denen"],
    alternatives: [["denen"]],
    case: "dat",
    gender: "pl",
    hint: "zuhören + Dat. Plural → denen.",
    full: "Das sind Leute, denen du zuhören solltest."
  },
  {
    id: "rel_013",
    prompt_en: "Max is a person (whom) my style doesn't appeal to.",
    sentence_1: "Max ist ein Mensch.",
    sentence_2: "Meine Art gefällt ihm nicht.",
    scaffold: "Max ist ein Mensch, ___ meine Art nicht gefällt.",
    answers: ["dem"],
    alternatives: [["dem"]],
    case: "dat",
    gender: "m",
    hint: "gefallen + Dat. (the thing that pleases sb is the subject). Mensch mask. → Dat. mask. = dem.",
    full: "Max ist ein Mensch, dem meine Art nicht gefällt."
  },
  {
    id: "rel_014",
    prompt_en: "There comes my uncle, whom I'd like to congratulate.",
    sentence_1: "Dort kommt mein Onkel.",
    sentence_2: "Ich möchte ihm gratulieren.",
    scaffold: "Dort kommt mein Onkel, ___ ich gratulieren möchte.",
    answers: ["dem"],
    alternatives: [["dem"]],
    case: "dat",
    gender: "m",
    hint: "gratulieren + Dat. Onkel mask. → Dat. mask. = dem.",
    full: "Dort kommt mein Onkel, dem ich gratulieren möchte."
  },
  {
    id: "rel_015",
    prompt_en: "I know people who like horror films.",
    sentence_1: "Ich kenne Leute.",
    sentence_2: "Horrorfilme gefallen ihnen.",
    scaffold: "Ich kenne Leute, ___ Horrorfilme gefallen.",
    answers: ["denen"],
    alternatives: [["denen"]],
    case: "dat",
    gender: "pl",
    hint: "gefallen + Dat. Plural → denen.",
    full: "Ich kenne Leute, denen Horrorfilme gefallen."
  },
  {
    id: "rel_016",
    prompt_en: "Hanna is a person (whom) I have known for a long time.",
    sentence_1: "Hanna ist ein Mensch.",
    sentence_2: "Ich kenne sie schon lange.",
    scaffold: "Hanna ist ein Mensch, ___ ich schon lange kenne.",
    answers: ["den"],
    alternatives: [["den"]],
    case: "akk",
    gender: "m",
    hint: "TRICK: 'Mensch' is grammatically masc. even for a woman. kennen + Akk. → Akk. mask. = den.",
    full: "Hanna ist ein Mensch, den ich schon lange kenne."
  },

  // ============ NOM/AKK contrast pairs (same antecedent, different role) ============
  {
    id: "rel_017",
    prompt_en: "Is that the computer that doesn't work properly?",
    sentence_1: "Ist das der Computer?",
    sentence_2: "Er funktioniert nicht richtig.",
    scaffold: "Ist das der Computer, ___ nicht richtig funktioniert?",
    answers: ["der"],
    alternatives: [["der"]],
    case: "nom",
    gender: "m",
    hint: "Subject of relative clause → Nom. mask. = der.",
    full: "Ist das der Computer, der nicht richtig funktioniert?"
  },
  {
    id: "rel_018",
    prompt_en: "Is that the computer (which) I'm supposed to repair?",
    sentence_1: "Ist das der Computer?",
    sentence_2: "Ich soll ihn reparieren.",
    scaffold: "Ist das der Computer, ___ ich reparieren soll?",
    answers: ["den"],
    alternatives: [["den"]],
    case: "akk",
    gender: "m",
    hint: "Direct object (ihn → den) → Akk. mask. = den.",
    full: "Ist das der Computer, den ich reparieren soll?"
  },
  {
    id: "rel_019",
    prompt_en: "I'm buying a car that uses very little fuel.",
    sentence_1: "Ich kaufe ein Auto.",
    sentence_2: "Es ist sehr sparsam.",
    scaffold: "Ich kaufe ein Auto, ___ sehr sparsam ist.",
    answers: ["das"],
    alternatives: [["das"]],
    case: "nom",
    gender: "n",
    hint: "Subject of rel. clause → Nom. neut. = das.",
    full: "Ich kaufe ein Auto, das sehr sparsam ist."
  },
  {
    id: "rel_020",
    prompt_en: "I'm buying a car that I want to use daily.",
    sentence_1: "Ich kaufe ein Auto.",
    sentence_2: "Ich möchte es täglich benutzen.",
    scaffold: "Ich kaufe ein Auto, ___ ich täglich benutzen möchte.",
    answers: ["das"],
    alternatives: [["das"]],
    case: "akk",
    gender: "n",
    hint: "Direct object → Akk. neut. = das (same form as Nom. neut.).",
    full: "Ich kaufe ein Auto, das ich täglich benutzen möchte."
  },

  // ============ GENITIV: dessen / deren ============
  {
    id: "rel_021",
    prompt_en: "I'm visiting my aunt whose cat is sick.",
    sentence_1: "Ich besuche meine Tante.",
    sentence_2: "Ihre Katze ist krank.",
    scaffold: "Ich besuche meine Tante, ___ Katze krank ist.",
    answers: ["deren"],
    alternatives: [["deren"]],
    case: "gen",
    gender: "f",
    hint: "Possessive 'her cat' → Genitiv. Tante is fem. → Gen. fem. = deren.",
    full: "Ich besuche meine Tante, deren Katze krank ist."
  },
  {
    id: "rel_022",
    prompt_en: "I'm helping my colleague whose computer is broken.",
    sentence_1: "Ich helfe meinem Kollegen.",
    sentence_2: "Sein Computer ist kaputt.",
    scaffold: "Ich helfe meinem Kollegen, ___ Computer kaputt ist.",
    answers: ["dessen"],
    alternatives: [["dessen"]],
    case: "gen",
    gender: "m",
    hint: "Possessive 'his computer' → Genitiv. Kollege is mask. → Gen. mask. = dessen.",
    full: "Ich helfe meinem Kollegen, dessen Computer kaputt ist."
  },
  {
    id: "rel_023",
    prompt_en: "I'm giving away this laptop whose camera is defective.",
    sentence_1: "Ich verschenke diesen Laptop.",
    sentence_2: "Seine Kamera ist defekt.",
    scaffold: "Ich verschenke diesen Laptop, ___ Kamera defekt ist.",
    answers: ["dessen"],
    alternatives: [["dessen"]],
    case: "gen",
    gender: "m",
    hint: "Laptop is mask. Possessive → Gen. mask. = dessen.",
    full: "Ich verschenke diesen Laptop, dessen Kamera defekt ist."
  },
  {
    id: "rel_024",
    prompt_en: "I like this spice whose smell is very intense.",
    sentence_1: "Ich mag dieses Gewürz.",
    sentence_2: "Sein Geruch ist sehr intensiv.",
    scaffold: "Ich mag dieses Gewürz, ___ Geruch sehr intensiv ist.",
    answers: ["dessen"],
    alternatives: [["dessen"]],
    case: "gen",
    gender: "n",
    hint: "Gewürz is neut. Possessive → Gen. neut. = dessen (same form as masc.).",
    full: "Ich mag dieses Gewürz, dessen Geruch sehr intensiv ist."
  },
  {
    id: "rel_025",
    prompt_en: "I'm buying this jacket whose colour I really like.",
    sentence_1: "Ich kaufe diese Jacke.",
    sentence_2: "Ihre Farbe gefällt mir sehr.",
    scaffold: "Ich kaufe diese Jacke, ___ Farbe mir sehr gefällt.",
    answers: ["deren"],
    alternatives: [["deren"]],
    case: "gen",
    gender: "f",
    hint: "Jacke is fem. Possessive → Gen. fem. = deren.",
    full: "Ich kaufe diese Jacke, deren Farbe mir sehr gefällt."
  },

  // ============ Embedded relative clauses (Hauptsatz - Relativsatz - Hauptsatz) ============
  {
    id: "rel_026",
    prompt_en: "The student whose jacket is still hanging here has already left.",
    sentence_1: "Die Studentin ist schon gegangen.",
    sentence_2: "Ihre Jacke hängt noch hier.",
    scaffold: "Die Studentin, ___ Jacke noch hier hängt, ist schon gegangen.",
    answers: ["deren"],
    alternatives: [["deren"]],
    case: "gen",
    gender: "f",
    hint: "Embedded rel. clause splits the main clause. Studentin fem. + possessive → deren.",
    full: "Die Studentin, deren Jacke noch hier hängt, ist schon gegangen."
  },
  {
    id: "rel_027",
    prompt_en: "The author who wrote this story is very famous.",
    sentence_1: "Die Autorin ist sehr berühmt.",
    sentence_2: "Sie hat diese Geschichte geschrieben.",
    scaffold: "Die Autorin, ___ diese Geschichte geschrieben hat, ist sehr berühmt.",
    answers: ["die"],
    alternatives: [["die"]],
    case: "nom",
    gender: "f",
    hint: "Embedded. Autorin fem. + subject of rel. clause → Nom. fem. = die.",
    full: "Die Autorin, die diese Geschichte geschrieben hat, ist sehr berühmt."
  },
  {
    id: "rel_028",
    prompt_en: "The film, which I saw on TV yesterday, was boring.",
    sentence_1: "Der Film war langweilig.",
    sentence_2: "Ich habe ihn gestern im Fernsehen gesehen.",
    scaffold: "Der Film, ___ ich gestern im Fernsehen gesehen habe, war langweilig.",
    answers: ["den"],
    alternatives: [["den"]],
    case: "akk",
    gender: "m",
    hint: "Film mask. + direct object → Akk. mask. = den.",
    full: "Der Film, den ich gestern im Fernsehen gesehen habe, war langweilig."
  },
  {
    id: "rel_029",
    prompt_en: "The guests, to whom the food didn't taste good, complained.",
    sentence_1: "Die Gäste haben sich beschwert.",
    sentence_2: "Das Essen hat ihnen nicht geschmeckt.",
    scaffold: "Die Gäste, ___ das Essen nicht geschmeckt hat, haben sich beschwert.",
    answers: ["denen"],
    alternatives: [["denen"]],
    case: "dat",
    gender: "pl",
    hint: "schmecken + Dat. Plural → denen.",
    full: "Die Gäste, denen das Essen nicht geschmeckt hat, haben sich beschwert."
  },
  {
    id: "rel_030",
    prompt_en: "My friend whose dog ran away placed an ad in the newspaper.",
    sentence_1: "Mein Freund hat eine Zeitungsanzeige aufgegeben.",
    sentence_2: "Sein Hund ist weggelaufen.",
    scaffold: "Mein Freund, ___ Hund weggelaufen ist, hat eine Zeitungsanzeige aufgegeben.",
    answers: ["dessen"],
    alternatives: [["dessen"]],
    case: "gen",
    gender: "m",
    hint: "Freund mask. + possessive → Gen. mask. = dessen.",
    full: "Mein Freund, dessen Hund weggelaufen ist, hat eine Zeitungsanzeige aufgegeben."
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = RELATIV_ITEMS;
}
