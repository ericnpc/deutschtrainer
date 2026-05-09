# B1 Deutsch Trainer

A single-page, no-build B1 German trainer covering vocabulary, grammar, reference, and exam composition (Schreiben + Sprechen).

The dashboard is a 4-card hub: **Vokabeln**, **Grammatik**, **Schreiben & Sprechen**, **Referenz**. Each card opens a section view; the back arrow returns to the hub. Last-visited section is restored on refresh within 30 minutes.

- **Vokabeln** — 20 themed lessons. Learn (German → English) and Drill (English → German with article).
- **Nebensatz** — drag word tokens into the right verb-final order.
- **haben/sein** — pick the right Perfekt-auxiliary. Practice mode with full feedback, or 30-item / 90-second Blitz.
- **Konjunktiv II** — fill blanks in `wenn`-clause scaffolds (hätte / wäre / würde + infinitive).
- **Adjektiv-Endungen** — fill the article and adjective endings (Tab. 1 / Tab. 2 / mixed).
- **Präpositionen lokal** — Wechselpräpositionen + Wo / Wohin / Woher direction system.
- **Verb + Präposition** — fixed verb+preposition pairs (denken an, warten auf, sich freuen über/auf …).
- **Modal · Perfekt** — the double-infinitive pattern in Hauptsatz and Nebensatz.
- **Relativsätze** — relative pronouns across Nom/Akk/Dat/Gen including dessen/deren.
- **Mixed Review** — pulls due cards across vocab + all 8 grammar modules in one session.
- **Referenz** — three non-drilled study cards: *Verb-Position* (Nebensatz / Hauptsatz / Inversion comparison), *Artikel-Patterns* (der/die/das suffix rules + exceptions + compound rule), and *Deklination* (4×4 case×gender matrix with three article patterns per cell + summary tables + faustregeln). Callable inline from drills as slide-overs: vocab noun Drill → Artikel-Patterns; Nebensatz Drill → Verb-Position; Adjektiv-Endungen Drill → Deklination, with a contextual mini-cell tip pulled from the matrix that matches the missed item's case + gender + table.
- **Schreiben editor** — Brief / E-Mail / Forum task types with auto-saved drafts, Redemittel sidebar (tap a phrase to insert at cursor), Vorlagen library (per-task saved templates with seeded B1 examples).
- **Sprechen editor** — Teil 2 (Gemeinsam etwas planen, scenario chooser) and Teil 3 (Präsentation, 5 slides with per-slide Redemittel toolbars). Vorlesen mode with a timer and optional speech-synthesis playback if the browser supports `de-DE`.
- **Export** — bundle all Vorlagen across both editors into a single Markdown download from the dashboard footer.

SM-2 lite spaced repetition, day-streak tracking, no backend, no accounts. Progress is stored in `localStorage` under the single key `b1trainer_state`.

## Run locally

Open `index.html` directly in a browser, or serve the folder:

```bash
python -m http.server 8000
# then open http://localhost:8000
```

(Tailwind and Sortable.js are loaded from CDN, so an internet connection is required on first load.)

## Deploy to GitHub Pages

1. Push the project files (`index.html`, `README.md`, plus all `*_data.js` data files) to a GitHub repo on the `main` branch.
2. In the repo: **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to *Deploy from a branch*.
4. Select **Branch: `main`** and **Folder: `/ (root)`**, then **Save**.
5. Wait ~1 minute, then visit `https://<your-username>.github.io/<repo-name>/`.

## Add more vocabulary

Edit `vocab_data.js`. Append a new lesson to the `LESSONS` array, matching the existing shape:

```js
{
  lesson: 21,
  title: "Your Topic",
  words: [
    {
      german: "die Freundschaft",   // include article for nouns
      article: "die",                // null for non-nouns
      english: "friendship",
      genderTip: "-schaft words are always feminine → die",  // null if no rule
      pos: "noun"   // "noun" | "verb" | "adj" | "adv" | "conj" | "phrase"
    },
    // ...
  ]
}
```

Reload the page — the dashboard picks up new lessons automatically.

## Reset progress

Clear site data in your browser, or in DevTools console:

```js
localStorage.removeItem('b1trainer_state');
```

(Or use the **Reset all progress** button at the bottom of the dashboard.)

## Keyboard shortcuts

- **Vocab Learn**: `Space` to reveal · `1` missed · `2` got it
- **Vocab Drill / Mixed Review**: `Enter` to check / continue
- **Nebensatz**: drag tokens or tap to move · `Enter` to check (when build slot is full)
- **haben/sein** (Practice & Blitz): `1` for left button · `2` for right button · `Enter` to continue
- **Konjunktiv II / Adjektiv / Präpositionen / Verb+Präp / Modal·Perfekt / Relativsätze**: `Tab` between blanks · `Enter` to check
- **Reference slide-over** (in noun Drill / Nebensatz Drill): `Esc` closes
- **Editors**: drafts auto-save 1s after typing stops · `Esc` closes the Vorlagen library
