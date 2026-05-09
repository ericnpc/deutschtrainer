// Präpositionen Lokal Drill Data
// Coverage:
//   - Wechselpräpositionen (an/auf/hinter/in/neben/über/unter/vor/zwischen) Akk vs Dat
//   - Direction system: wo? (Dat) vs wohin? (Akk) vs woher? (aus/von + Dat)
//   - Country/place patterns: in die Türkei, in der Türkei, aus der Türkei
// Total: 45 items
//
// Each item has a scaffold with one or more ___ blanks. User fills each blank.
// Blanks may be: full preposition+article (im, ins, am, ans), article alone (den, dem, der),
// or adjective endings tied to article choice.

const PRAEPOSITION_LOKAL_ITEMS = [
  // ============ Wechselpräpositionen: WO? (Dativ) ============
  {
    id: "lok_001",
    prompt_en: "On the sofa sat a small dog. (location)",
    scaffold: "Auf d__ Sofa saß ein kleiner Hund.",
    answers: ["em"],
    alternatives: [["em"]],
    type: "wo-dativ",
    hint: "wo? → Dativ. auf + Dat. neutrum: dem Sofa.",
    full: "Auf dem Sofa saß ein kleiner Hund."
  },
  {
    id: "lok_002",
    prompt_en: "Behind the house there's a beautiful garden.",
    scaffold: "Hinter d__ Haus gibt es einen schönen Garten.",
    answers: ["em"],
    alternatives: [["em"]],
    type: "wo-dativ",
    hint: "wo? → Dativ. hinter + Dat. neutrum: dem Haus.",
    full: "Hinter dem Haus gibt es einen schönen Garten."
  },
  {
    id: "lok_003",
    prompt_en: "The cat is sleeping under the table.",
    scaffold: "Die Katze schläft unter d__ Tisch.",
    answers: ["em"],
    alternatives: [["em"]],
    type: "wo-dativ",
    hint: "schlafen = state, no movement → wo? → Dativ. unter dem Tisch.",
    full: "Die Katze schläft unter dem Tisch."
  },
  {
    id: "lok_004",
    prompt_en: "We're sitting in the kitchen.",
    scaffold: "Wir sitzen in d__ Küche.",
    answers: ["er"],
    alternatives: [["er"]],
    type: "wo-dativ",
    hint: "sitzen = state → wo? → Dativ. in der Küche (fem.).",
    full: "Wir sitzen in der Küche."
  },
  {
    id: "lok_005",
    prompt_en: "Between the two countries flows a river.",
    scaffold: "Zwischen d__ beiden Ländern fließt ein Fluss.",
    answers: ["en"],
    alternatives: [["en"]],
    type: "wo-dativ",
    hint: "wo? → Dativ Plural: den Ländern (Plural Dativ ends in -n).",
    full: "Zwischen den beiden Ländern fließt ein Fluss."
  },
  {
    id: "lok_006",
    prompt_en: "Many tourists are standing in front of the cathedral.",
    scaffold: "Viele Touristen stehen vor d__ Dom.",
    answers: ["em"],
    alternatives: [["em"]],
    type: "wo-dativ",
    hint: "stehen = state → wo? → Dativ. vor dem Dom (mask.).",
    full: "Viele Touristen stehen vor dem Dom."
  },
  {
    id: "lok_007",
    prompt_en: "Above the bed hangs a picture.",
    scaffold: "Über d__ Bett hängt ein Bild.",
    answers: ["em"],
    alternatives: [["em"]],
    type: "wo-dativ",
    hint: "hängen (intransitive, location) → wo? → Dativ. über dem Bett.",
    full: "Über dem Bett hängt ein Bild."
  },
  {
    id: "lok_008",
    prompt_en: "Next to me stood my brother.",
    scaffold: "Neben m__ stand mein Bruder.",
    answers: ["ir"],
    alternatives: [["ir"]],
    type: "wo-dativ",
    hint: "wo? → Dativ. Personal pronoun: neben mir (1.Sg. Dat = mir).",
    full: "Neben mir stand mein Bruder."
  },
  {
    id: "lok_009",
    prompt_en: "On this island there are many rare animals.",
    scaffold: "Auf dies__ Insel gibt es viele seltene Tiere.",
    answers: ["er"],
    alternatives: [["er"]],
    type: "wo-dativ",
    hint: "wo? → Dativ. auf dieser Insel (fem.).",
    full: "Auf dieser Insel gibt es viele seltene Tiere."
  },
  {
    id: "lok_010",
    prompt_en: "In this area it rains often.",
    scaffold: "In dies__ Gegend regnet es oft.",
    answers: ["er"],
    alternatives: [["er"]],
    type: "wo-dativ",
    hint: "wo? → Dativ. in dieser Gegend (fem.).",
    full: "In dieser Gegend regnet es oft."
  },

  // ============ Wechselpräpositionen: WOHIN? (Akkusativ) ============
  {
    id: "lok_011",
    prompt_en: "Please put the chair into the hallway.",
    scaffold: "Stell den Stuhl bitte in d__ Flur.",
    answers: ["en"],
    alternatives: [["en"]],
    type: "wohin-akk",
    hint: "stellen = movement (wohin?) → Akkusativ. in den Flur (mask.).",
    full: "Stell den Stuhl bitte in den Flur."
  },
  {
    id: "lok_012",
    prompt_en: "Please hang the jacket in the wardrobe.",
    scaffold: "Häng bitte die Jacke in d__ Schrank.",
    answers: ["en"],
    alternatives: [["en"]],
    type: "wohin-akk",
    hint: "hängen (transitive, putting somewhere) → wohin? → Akk. in den Schrank.",
    full: "Häng bitte die Jacke in den Schrank."
  },
  {
    id: "lok_013",
    prompt_en: "We went into the big hall.",
    scaffold: "Wir gingen in d__ groß__ Saal.",
    answers: ["en", "en"],
    alternatives: [["en"], ["en"]],
    type: "wohin-akk",
    hint: "gehen + in (wohin?) → Akk. in den großen Saal.",
    full: "Wir gingen in den großen Saal."
  },
  {
    id: "lok_014",
    prompt_en: "Jonas put his slippers under the sofa.",
    scaffold: "Jonas stellte seine Hausschuhe unter d__ Sofa.",
    answers: ["s"],
    alternatives: [["s"]],
    type: "wohin-akk",
    hint: "stellen → movement → Akk. unter das Sofa (neut.). Combined: unters or unter das.",
    full: "Jonas stellte seine Hausschuhe unter das Sofa."
  },
  {
    id: "lok_015",
    prompt_en: "Put the hat on your head!",
    scaffold: "Setz die Mütze auf d__ Kopf!",
    answers: ["en"],
    alternatives: [["en"]],
    type: "wohin-akk",
    hint: "setzen → movement → Akk. auf den Kopf (mask.).",
    full: "Setz die Mütze auf den Kopf!"
  },
  {
    id: "lok_016",
    prompt_en: "The boy hid under the blanket.",
    scaffold: "Der Junge versteckte sich unter d__ Decke.",
    answers: ["ie"],
    alternatives: [["ie"]],
    type: "wohin-akk",
    hint: "sich verstecken = movement to a place → Akk. unter die Decke (fem.).",
    full: "Der Junge versteckte sich unter die Decke."
  },
  {
    id: "lok_017",
    prompt_en: "Watch out when you cross the street!",
    scaffold: "Pass auf, wenn du über d__ Straße gehst!",
    answers: ["ie"],
    alternatives: [["ie"]],
    type: "wohin-akk",
    hint: "über + Akk. for crossing. die Straße (fem.).",
    full: "Pass auf, wenn du über die Straße gehst!"
  },
  {
    id: "lok_018",
    prompt_en: "We sat down in the shade of a tree.",
    scaffold: "Wir setzten uns in d__ Schatten eines Baumes.",
    answers: ["en"],
    alternatives: [["en"]],
    type: "wohin-akk",
    hint: "sich setzen = movement → Akk. in den Schatten (mask.).",
    full: "Wir setzten uns in den Schatten eines Baumes."
  },
  {
    id: "lok_019",
    prompt_en: "Paul placed himself between Rita and me.",
    scaffold: "Paul stellte sich zwischen Rita und m__.",
    answers: ["ich"],
    alternatives: [["ich"]],
    type: "wohin-akk",
    hint: "sich stellen = movement → Akk. zwischen ... und mich (1.Sg. Akk = mich).",
    full: "Paul stellte sich zwischen Rita und mich."
  },
  {
    id: "lok_020",
    prompt_en: "Can you write the address on a small piece of paper for me?",
    scaffold: "Kannst du mir die Adresse auf ein__ klein__ Zettel schreiben?",
    answers: ["en", "en"],
    alternatives: [["en"], ["en"]],
    type: "wohin-akk",
    hint: "schreiben auf + Akk. (writing onto). einen kleinen Zettel (mask. Akk.).",
    full: "Kannst du mir die Adresse auf einen kleinen Zettel schreiben?"
  },

  // ============ Direction system: in / nach / zu / auf — wohin? ============
  {
    id: "lok_021",
    prompt_en: "I'm going to the cinema.",
    scaffold: "Ich gehe ___ Kino.",
    answers: ["ins"],
    alternatives: [["ins", "in das"]],
    type: "wohin-direction",
    hint: "Buildings you go INTO → in + Akk. ins = in das.",
    full: "Ich gehe ins Kino."
  },
  {
    id: "lok_022",
    prompt_en: "I'm flying to England.",
    scaffold: "Ich fliege ___ England.",
    answers: ["nach"],
    alternatives: [["nach"]],
    type: "wohin-direction",
    hint: "Most countries (no article) → nach. nach England.",
    full: "Ich fliege nach England."
  },
  {
    id: "lok_023",
    prompt_en: "I'm going abroad.",
    scaffold: "Ich gehe ___ Ausland.",
    answers: ["ins"],
    alternatives: [["ins", "in das"]],
    type: "wohin-direction",
    hint: "Ausland takes the article (das Ausland) → ins Ausland.",
    full: "Ich gehe ins Ausland."
  },
  {
    id: "lok_024",
    prompt_en: "I'm going to the doctor.",
    scaffold: "Ich gehe ___ Arzt.",
    answers: ["zum"],
    alternatives: [["zum", "zu dem"]],
    type: "wohin-direction",
    hint: "People/professions → zu + Dat. zum = zu dem.",
    full: "Ich gehe zum Arzt."
  },
  {
    id: "lok_025",
    prompt_en: "I'm going to the supermarket.",
    scaffold: "Ich fahre ___ Supermarkt.",
    answers: ["zum"],
    alternatives: [["zum", "zu dem", "in den"]],
    type: "wohin-direction",
    hint: "zum Supermarkt (heading to) or in den Supermarkt (going inside) — both common.",
    full: "Ich fahre zum Supermarkt."
  },
  {
    id: "lok_026",
    prompt_en: "I'm going to (the) university.",
    scaffold: "Ich gehe ___ Universität.",
    answers: ["zur"],
    alternatives: [["zur", "zu der", "an die"]],
    type: "wohin-direction",
    hint: "zur Universität (heading to) or an die Uni (typical for studying).",
    full: "Ich gehe zur Universität."
  },
  {
    id: "lok_027",
    prompt_en: "I'm flying to Turkey.",
    scaffold: "Ich fliege ___ Türkei.",
    answers: ["in die"],
    alternatives: [["in die"]],
    type: "wohin-direction",
    hint: "Countries WITH article (die Türkei, die Schweiz, die USA) → in + Akk.",
    full: "Ich fliege in die Türkei."
  },
  {
    id: "lok_028",
    prompt_en: "I'm going to the town hall.",
    scaffold: "Ich gehe ___ Rathaus.",
    answers: ["zum"],
    alternatives: [["zum", "zu dem", "ins"]],
    type: "wohin-direction",
    hint: "zum Rathaus (heading to) or ins Rathaus (going inside).",
    full: "Ich gehe zum Rathaus."
  },
  {
    id: "lok_029",
    prompt_en: "I'm flying to the USA.",
    scaffold: "Ich fliege ___ USA.",
    answers: ["in die"],
    alternatives: [["in die"]],
    type: "wohin-direction",
    hint: "die USA is plural with article → in die USA.",
    full: "Ich fliege in die USA."
  },
  {
    id: "lok_030",
    prompt_en: "I'm going home.",
    scaffold: "Ich gehe ___ Hause.",
    answers: ["nach"],
    alternatives: [["nach"]],
    type: "wohin-direction",
    hint: "Fixed expression: nach Hause (to home).",
    full: "Ich gehe nach Hause."
  },
  {
    id: "lok_031",
    prompt_en: "I'm going into the mountains.",
    scaffold: "Ich fahre ___ Berge.",
    answers: ["in die"],
    alternatives: [["in die"]],
    type: "wohin-direction",
    hint: "Berge (Plural with article) → in die Berge.",
    full: "Ich fahre in die Berge."
  },
  {
    id: "lok_032",
    prompt_en: "I'm going to Berlin.",
    scaffold: "Ich fahre ___ Berlin.",
    answers: ["nach"],
    alternatives: [["nach"]],
    type: "wohin-direction",
    hint: "Cities (no article) → nach.",
    full: "Ich fahre nach Berlin."
  },
  {
    id: "lok_033",
    prompt_en: "I'm going to Klaus's place.",
    scaffold: "Ich gehe ___ Klaus.",
    answers: ["zu"],
    alternatives: [["zu"]],
    type: "wohin-direction",
    hint: "People (names) → zu + Dat. zu Klaus.",
    full: "Ich gehe zu Klaus."
  },

  // ============ Direction system: WO? (location) ============
  {
    id: "lok_034",
    prompt_en: "I am at the cinema.",
    scaffold: "Ich bin ___ Kino.",
    answers: ["im"],
    alternatives: [["im", "in dem"]],
    type: "wo-direction",
    hint: "wo? in + Dat. im = in dem.",
    full: "Ich bin im Kino."
  },
  {
    id: "lok_035",
    prompt_en: "I was in Turkey.",
    scaffold: "Ich war ___ Türkei.",
    answers: ["in der"],
    alternatives: [["in der"]],
    type: "wo-direction",
    hint: "Countries with article: wo? → in + Dat. in der Türkei.",
    full: "Ich war in der Türkei."
  },
  {
    id: "lok_036",
    prompt_en: "I am at home.",
    scaffold: "Ich bin ___ Hause.",
    answers: ["zu"],
    alternatives: [["zu"]],
    type: "wo-direction",
    hint: "Fixed expression: zu Hause (at home). Mirror of nach Hause.",
    full: "Ich bin zu Hause."
  },
  {
    id: "lok_037",
    prompt_en: "I am at the doctor's.",
    scaffold: "Ich bin ___ Arzt.",
    answers: ["beim"],
    alternatives: [["beim", "bei dem"]],
    type: "wo-direction",
    hint: "wo? at a person/professional → bei + Dat. beim Arzt.",
    full: "Ich bin beim Arzt."
  },
  {
    id: "lok_038",
    prompt_en: "I was in Berlin.",
    scaffold: "Ich war ___ Berlin.",
    answers: ["in"],
    alternatives: [["in"]],
    type: "wo-direction",
    hint: "Cities: wo? → in + (no article). in Berlin.",
    full: "Ich war in Berlin."
  },
  {
    id: "lok_039",
    prompt_en: "I am in the mountains.",
    scaffold: "Ich bin ___ Berg__.",
    answers: ["in den", "en"],
    alternatives: [["in den"], ["en"]],
    type: "wo-direction",
    hint: "Berge (Plural) wo? → in + Dat. Pl. = in den Bergen (Pl. Dat. ends -n).",
    full: "Ich bin in den Bergen."
  },
  {
    id: "lok_040",
    prompt_en: "I am at Klaus's place.",
    scaffold: "Ich bin ___ Klaus.",
    answers: ["bei"],
    alternatives: [["bei"]],
    type: "wo-direction",
    hint: "wo? at someone's place → bei + Dat. bei Klaus.",
    full: "Ich bin bei Klaus."
  },

  // ============ Direction system: WOHER? (origin) ============
  {
    id: "lok_041",
    prompt_en: "I'm coming from the cinema.",
    scaffold: "Ich komme ___ Kino.",
    answers: ["aus dem"],
    alternatives: [["aus dem"]],
    type: "woher-direction",
    hint: "woher? out of a building/enclosed space → aus + Dat.",
    full: "Ich komme aus dem Kino."
  },
  {
    id: "lok_042",
    prompt_en: "I'm coming from Turkey.",
    scaffold: "Ich komme ___ Türkei.",
    answers: ["aus der"],
    alternatives: [["aus der"]],
    type: "woher-direction",
    hint: "Countries with article: woher? → aus + Dat. aus der Türkei.",
    full: "Ich komme aus der Türkei."
  },
  {
    id: "lok_043",
    prompt_en: "I'm coming from England.",
    scaffold: "Ich komme ___ England.",
    answers: ["aus"],
    alternatives: [["aus"]],
    type: "woher-direction",
    hint: "Countries without article: woher? → aus + (no article). aus England.",
    full: "Ich komme aus England."
  },
  {
    id: "lok_044",
    prompt_en: "I'm coming from the doctor's.",
    scaffold: "Ich komme ___ Arzt.",
    answers: ["vom"],
    alternatives: [["vom", "von dem"]],
    type: "woher-direction",
    hint: "woher? from a person/professional → von + Dat. vom = von dem.",
    full: "Ich komme vom Arzt."
  },
  {
    id: "lok_045",
    prompt_en: "I'm coming from Klaus's place.",
    scaffold: "Ich komme ___ Klaus.",
    answers: ["von"],
    alternatives: [["von"]],
    type: "woher-direction",
    hint: "woher? from someone's place → von + Dat. von Klaus.",
    full: "Ich komme von Klaus."
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = PRAEPOSITION_LOKAL_ITEMS;
}
