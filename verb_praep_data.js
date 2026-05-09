// Verben mit Präpositionalobjekt Drill Data
// Coverage: 40 high-frequency B1 verb+preposition pairs
// Format: cloze sentence with the preposition (and sometimes article) blanked out
//
// Each item:
//   prompt_en: English meaning for context
//   scaffold: German sentence with ___ for the preposition (+ article if needed)
//   answers: correct preposition(s) for each blank
//   alternatives: per-blank accepted variants
//   verb: the verb being drilled (shown as a small label)
//   verb_pattern: e.g. "denken an + Akk." — the rule the user must learn
//   hint: explanation shown on miss

const VERB_PRAEP_ITEMS = [
  // ============ AN + Akk. ============
  {
    id: "vp_001",
    prompt_en: "Are you thinking about our meeting tomorrow?",
    scaffold: "Denkst du ___ unsere Verabredung morgen?",
    answers: ["an"],
    alternatives: [["an"]],
    verb: "denken",
    verb_pattern: "denken an + Akk.",
    hint: "denken an + Akk. — to think about/of something."
  },
  {
    id: "vp_002",
    prompt_en: "She wrote a letter to her insurance.",
    scaffold: "Sie hat einen Brief ___ ihre Versicherung geschrieben.",
    answers: ["an"],
    alternatives: [["an"]],
    verb: "schreiben",
    verb_pattern: "schreiben an + Akk.",
    hint: "schreiben an + Akk. — to write to someone/something."
  },
  {
    id: "vp_003",
    prompt_en: "How many people took part in the seminar?",
    scaffold: "Wie viele Leute haben ___ dem Seminar teilgenommen?",
    answers: ["an"],
    alternatives: [["an"]],
    verb: "teilnehmen",
    verb_pattern: "teilnehmen an + Dat.",
    hint: "teilnehmen an + Dat. — to take part in. Note: Dativ, not Akk."
  },
  {
    id: "vp_004",
    prompt_en: "I think you have to pay more attention to your health.",
    scaffold: "Ich denke, du musst mehr ___ deine Gesundheit achten.",
    answers: ["auf"],
    alternatives: [["auf"]],
    verb: "achten",
    verb_pattern: "achten auf + Akk.",
    hint: "achten auf + Akk. — to pay attention to."
  },

  // ============ AUF + Akk. ============
  {
    id: "vp_005",
    prompt_en: "Can you watch my bag for a moment?",
    scaffold: "Kannst du bitte kurz ___ meine Tasche aufpassen?",
    answers: ["auf"],
    alternatives: [["auf"]],
    verb: "aufpassen",
    verb_pattern: "aufpassen auf + Akk.",
    hint: "aufpassen auf + Akk. — to look after, to watch over."
  },
  {
    id: "vp_006",
    prompt_en: "You don't have to wait for me if you have no time.",
    scaffold: "Du musst nicht ___ mich warten, wenn du keine Zeit hast.",
    answers: ["auf"],
    alternatives: [["auf"]],
    verb: "warten",
    verb_pattern: "warten auf + Akk.",
    hint: "warten auf + Akk. — to wait for."
  },
  {
    id: "vp_007",
    prompt_en: "You can really rely on me.",
    scaffold: "Du kannst dich wirklich ___ mich verlassen.",
    answers: ["auf"],
    alternatives: [["auf"]],
    verb: "sich verlassen",
    verb_pattern: "sich verlassen auf + Akk.",
    hint: "sich verlassen auf + Akk. — to rely on. Reflexive."
  },
  {
    id: "vp_008",
    prompt_en: "Are you looking forward to the holidays?",
    scaffold: "Freust du dich ___ die Ferien?",
    answers: ["auf"],
    alternatives: [["auf"]],
    verb: "sich freuen",
    verb_pattern: "sich freuen auf + Akk. (future event)",
    hint: "sich freuen AUF + Akk. — looking forward to (future). Compare: sich freuen ÜBER (already happened)."
  },

  // ============ ÜBER + Akk. ============
  {
    id: "vp_009",
    prompt_en: "My cousin was very surprised about this story.",
    scaffold: "Mein Cousin wunderte sich sehr ___ diese Geschichte.",
    answers: ["über"],
    alternatives: [["über"]],
    verb: "sich wundern",
    verb_pattern: "sich wundern über + Akk.",
    hint: "sich wundern über + Akk. — to be surprised about/at."
  },
  {
    id: "vp_010",
    prompt_en: "Can you stop this silly discussion already?",
    scaffold: "Könnt ihr nicht endlich ___ dieser dummen Diskussion aufhören?",
    answers: ["mit"],
    alternatives: [["mit"]],
    verb: "aufhören",
    verb_pattern: "aufhören mit + Dat.",
    hint: "aufhören mit + Dat. — to stop (doing) something."
  },
  {
    id: "vp_011",
    prompt_en: "Are you laughing at me?",
    scaffold: "Sag mal, lachst du ___ mich?",
    answers: ["über"],
    alternatives: [["über"]],
    verb: "lachen",
    verb_pattern: "lachen über + Akk.",
    hint: "lachen über + Akk. — to laugh at/about."
  },
  {
    id: "vp_012",
    prompt_en: "She's happy about the gift.",
    scaffold: "Sie freut sich ___ das Geschenk.",
    answers: ["über"],
    alternatives: [["über"]],
    verb: "sich freuen",
    verb_pattern: "sich freuen über + Akk. (something received)",
    hint: "sich freuen ÜBER = something already happened or received. Compare: sich freuen AUF (future)."
  },
  {
    id: "vp_013",
    prompt_en: "I'm angry about the delay.",
    scaffold: "Ich ärgere mich ___ die Verspätung.",
    answers: ["über"],
    alternatives: [["über"]],
    verb: "sich ärgern",
    verb_pattern: "sich ärgern über + Akk.",
    hint: "sich ärgern über + Akk. — to get annoyed about."
  },
  {
    id: "vp_014",
    prompt_en: "Think about this offer for a bit.",
    scaffold: "Denk doch mal ___ dieses Angebot nach.",
    answers: ["über"],
    alternatives: [["über"]],
    verb: "nachdenken",
    verb_pattern: "nachdenken über + Akk.",
    hint: "nachdenken über + Akk. — to think over, ponder."
  },

  // ============ ÜBER (split: über vs sprechen) ============
  {
    id: "vp_015",
    prompt_en: "Can I speak with you briefly?",
    scaffold: "Kann ich kurz ___ Ihnen sprechen?",
    answers: ["mit"],
    alternatives: [["mit"]],
    verb: "sprechen",
    verb_pattern: "sprechen mit + Dat. (person)",
    hint: "sprechen MIT + Dat. = with someone. sprechen ÜBER + Akk. = about a topic."
  },
  {
    id: "vp_016",
    prompt_en: "I have a problem. Can I talk to you about it?",
    scaffold: "Ich habe ein Problem. Kann ich mit dir ___ sprechen?",
    answers: ["darüber"],
    alternatives: [["darüber"]],
    verb: "sprechen",
    verb_pattern: "sprechen über + Akk. (topic) → da+r+über",
    hint: "Sache (problem) + über → Pronominaladverb darüber."
  },

  // ============ MIT + Dat. ============
  {
    id: "vp_017",
    prompt_en: "We're working on a very important project at the moment.",
    scaffold: "Wir arbeiten momentan ___ einem sehr wichtigen Projekt.",
    answers: ["an"],
    alternatives: [["an"]],
    verb: "arbeiten",
    verb_pattern: "arbeiten an + Dat.",
    hint: "arbeiten an + Dat. — to work on (a project). Note: Dativ here, not Akk."
  },
  {
    id: "vp_018",
    prompt_en: "Are you meeting your friends tomorrow?",
    scaffold: "Trefft ihr euch morgen ___ euren Freunden?",
    answers: ["mit"],
    alternatives: [["mit"]],
    verb: "sich treffen",
    verb_pattern: "sich treffen mit + Dat.",
    hint: "sich treffen mit + Dat. — to meet (up) with."
  },
  {
    id: "vp_019",
    prompt_en: "We want to start the new project tomorrow.",
    scaffold: "Wir wollen morgen ___ dem neuen Projekt beginnen.",
    answers: ["mit"],
    alternatives: [["mit"]],
    verb: "beginnen",
    verb_pattern: "beginnen mit + Dat.",
    hint: "beginnen mit + Dat. — to start with/begin doing."
  },
  {
    id: "vp_020",
    prompt_en: "I don't expect his call before next week.",
    scaffold: "Ich rechne nicht vor nächster Woche ___ seinem Anruf.",
    answers: ["mit"],
    alternatives: [["mit"]],
    verb: "rechnen",
    verb_pattern: "rechnen mit + Dat.",
    hint: "rechnen mit + Dat. — to count on, to expect."
  },

  // ============ FÜR + Akk. ============
  {
    id: "vp_021",
    prompt_en: "Eva would like to thank for the help.",
    scaffold: "Eva möchte sich noch herzlich ___ die Hilfe bedanken.",
    answers: ["für"],
    alternatives: [["für"]],
    verb: "sich bedanken",
    verb_pattern: "sich bedanken für + Akk.",
    hint: "sich bedanken für + Akk. — to thank for."
  },
  {
    id: "vp_022",
    prompt_en: "Parents care for their children.",
    scaffold: "Eltern sorgen ___ ihre Kinder.",
    answers: ["für"],
    alternatives: [["für"]],
    verb: "sorgen",
    verb_pattern: "sorgen für + Akk.",
    hint: "sorgen für + Akk. — to care for/take care of."
  },
  {
    id: "vp_023",
    prompt_en: "I'm interested in this topic.",
    scaffold: "Ich interessiere mich ___ dieses Thema.",
    answers: ["für"],
    alternatives: [["für"]],
    verb: "sich interessieren",
    verb_pattern: "sich interessieren für + Akk.",
    hint: "sich interessieren für + Akk. — to be interested in."
  },

  // ============ UM + Akk. ============
  {
    id: "vp_024",
    prompt_en: "I had to take care of nothing.",
    scaffold: "Ich musste mich ___ nichts kümmern.",
    answers: ["um"],
    alternatives: [["um"]],
    verb: "sich kümmern",
    verb_pattern: "sich kümmern um + Akk.",
    hint: "sich kümmern um + Akk. — to take care of."
  },
  {
    id: "vp_025",
    prompt_en: "I asked him for the way.",
    scaffold: "Ich fragte ihn ___ dem Weg.",
    answers: ["nach"],
    alternatives: [["nach"]],
    verb: "fragen",
    verb_pattern: "fragen nach + Dat.",
    hint: "fragen nach + Dat. — to ask about/for."
  },
  {
    id: "vp_026",
    prompt_en: "I'm asking you for patience.",
    scaffold: "Ich bitte dich ___ Geduld.",
    answers: ["um"],
    alternatives: [["um"]],
    verb: "bitten",
    verb_pattern: "bitten um + Akk.",
    hint: "bitten um + Akk. — to ask for, to request. (Different from fragen nach.)"
  },

  // ============ VON + Dat. ============
  {
    id: "vp_027",
    prompt_en: "He says goodbye to me.",
    scaffold: "Er verabschiedet sich ___ mir.",
    answers: ["von"],
    alternatives: [["von"]],
    verb: "sich verabschieden",
    verb_pattern: "sich verabschieden von + Dat.",
    hint: "sich verabschieden von + Dat. — to say goodbye to."
  },
  {
    id: "vp_028",
    prompt_en: "The cake tastes of honey and nuts.",
    scaffold: "Der Kuchen schmeckt ___ Honig und Nüssen.",
    answers: ["nach"],
    alternatives: [["nach"]],
    verb: "schmecken",
    verb_pattern: "schmecken nach + Dat.",
    hint: "schmecken nach + Dat. — to taste of/like."
  },
  {
    id: "vp_029",
    prompt_en: "I'm dreaming of a long holiday.",
    scaffold: "Ich träume ___ einem langen Urlaub.",
    answers: ["von"],
    alternatives: [["von"]],
    verb: "träumen",
    verb_pattern: "träumen von + Dat.",
    hint: "träumen von + Dat. — to dream of."
  },

  // ============ BEI / GEGEN + ... ============
  {
    id: "vp_030",
    prompt_en: "I wanted to apologize to you.",
    scaffold: "Ich wollte mich ___ Ihnen entschuldigen.",
    answers: ["bei"],
    alternatives: [["bei"]],
    verb: "sich entschuldigen",
    verb_pattern: "sich entschuldigen bei + Dat. (person)",
    hint: "sich entschuldigen BEI someone (Dat.) — apologize TO someone. Use FÜR for what you apologize for."
  },
  {
    id: "vp_031",
    prompt_en: "I want to apologize for the delay.",
    scaffold: "Ich wollte mich ___ die Verspätung entschuldigen.",
    answers: ["für"],
    alternatives: [["für"]],
    verb: "sich entschuldigen",
    verb_pattern: "sich entschuldigen für + Akk. (reason)",
    hint: "sich entschuldigen FÜR + Akk. — apologize FOR something."
  },
  {
    id: "vp_032",
    prompt_en: "The workers are protesting against these bad conditions.",
    scaffold: "Die Arbeiter protestieren ___ diese schlechten Arbeitsbedingungen.",
    answers: ["gegen"],
    alternatives: [["gegen"]],
    verb: "protestieren",
    verb_pattern: "protestieren gegen + Akk.",
    hint: "protestieren gegen + Akk. — to protest against."
  },
  {
    id: "vp_033",
    prompt_en: "He wasn't afraid of spiders.",
    scaffold: "Er fürchtete sich nicht ___ Spinnen.",
    answers: ["vor"],
    alternatives: [["vor"]],
    verb: "sich fürchten",
    verb_pattern: "sich fürchten vor + Dat.",
    hint: "sich fürchten vor + Dat. — to be afraid of."
  },
  {
    id: "vp_034",
    prompt_en: "I'm allergic to nuts.",
    scaffold: "Ich bin allergisch ___ Nüsse.",
    answers: ["gegen"],
    alternatives: [["gegen"]],
    verb: "allergisch sein",
    verb_pattern: "allergisch sein gegen + Akk.",
    hint: "allergisch gegen + Akk. — allergic to."
  },

  // ============ AN + Dat. (location/state) ============
  {
    id: "vp_035",
    prompt_en: "She suffers from headaches.",
    scaffold: "Sie leidet ___ Kopfschmerzen.",
    answers: ["an"],
    alternatives: [["an"]],
    verb: "leiden",
    verb_pattern: "leiden an + Dat.",
    hint: "leiden an + Dat. — to suffer from (illness)."
  },
  {
    id: "vp_036",
    prompt_en: "Many people are taking part in the demonstration.",
    scaffold: "Viele Menschen nehmen ___ der Demonstration teil.",
    answers: ["an"],
    alternatives: [["an"]],
    verb: "teilnehmen",
    verb_pattern: "teilnehmen an + Dat.",
    hint: "teilnehmen an + Dat. (already practiced). Note Dativ form: an der ...."
  },

  // ============ Pronominaladverbien (da+r+prep) ============
  // When the object is a thing/concept, use the da-prep merger
  {
    id: "vp_037",
    prompt_en: "Did you remember those people? — Of course I remembered them. (people)",
    scaffold: "Hast du dich ___ diese Leute erinnert?",
    answers: ["an"],
    alternatives: [["an"]],
    verb: "sich erinnern",
    verb_pattern: "sich erinnern an + Akk.",
    hint: "sich erinnern an + Akk. — to remember. (For things, use daran.)"
  },
  {
    id: "vp_038",
    prompt_en: "Did you complain about the noise? (thing)",
    scaffold: "Hast du dich ___ den Krach beschwert?",
    answers: ["über"],
    alternatives: [["über"]],
    verb: "sich beschweren",
    verb_pattern: "sich beschweren über + Akk. (thing)",
    hint: "sich beschweren über + Akk. — to complain about (something). Use BEI for the person you complain to."
  },
  {
    id: "vp_039",
    prompt_en: "He won money but isn't happy about it. (use a pronominaladverb)",
    scaffold: "Er hat Geld gewonnen, aber er freut sich nicht ___.",
    answers: ["darüber"],
    alternatives: [["darüber"]],
    verb: "sich freuen",
    verb_pattern: "sich freuen über + Akk. → darüber",
    hint: "Sache + über → Pronominaladverb DARÜBER. (Person would be: über ihn/sie.)"
  },
  {
    id: "vp_040",
    prompt_en: "What does the soup taste of? (use a pronominal question word)",
    scaffold: "___ schmeckt die Suppe?",
    answers: ["Wonach"],
    alternatives: [["Wonach", "wonach"]],
    verb: "schmecken",
    verb_pattern: "schmecken nach + Dat. → Frage: wo+nach",
    hint: "Sache + nach → Fragewort WONACH? (For people: nach wem?)"
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = VERB_PRAEP_ITEMS;
}
