# 09. Autosave

- **Source category:** `forms`
- **Official source:** [https://designmotionhq.com/patterns/autosave-ux](https://designmotionhq.com/patterns/autosave-ux)
- **Related skill:** `forms-inputs`

> This document is an original technical summary of the linked public page, not a verbatim reproduction. Treat specific numbers and examples as source-informed heuristics and validate them against the product context, accessibility requirements, real data, and user testing.

## Key insights

- Autosave is a state machine, not a badge: typing, saving, saved, offline and error must be distinct.
- Debounce writes after a pause (the source suggests roughly 800ms), queue offline edits and replay them in order.
- Protect against concurrent edits and unsaved exit.

## Do / Don't

### Do
- Debounce writes
- show truthful save status
- queue offline changes and handle conflicts explicitly.

### Don't
- Show “Saved” before server confirmation
- overwrite concurrent changes silently
- write on every keystroke or close with unsaved work without warning.

## Verification checklist

- [ ] The default state and all relevant alternate states are defined.
- [ ] Mouse, keyboard, and touch interactions have been considered where applicable.
- [ ] The interface communicates what happened and what the user can do next.
- [ ] Errors and reversible actions have a predictable recovery path.
- [ ] The implementation has been tested on mobile and desktop viewports.
- [ ] The recommendation has been adapted to context rather than applied blindly.
