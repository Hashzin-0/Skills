# 11. Live Cursors

- **Source category:** `interactions`
- **Official source:** [https://designmotionhq.com/patterns/live-cursors](https://designmotionhq.com/patterns/live-cursors)
- **Related skill:** `interaction-patterns`

> This document is an original technical summary of the linked public page, not a verbatim reproduction. Treat specific numbers and examples as source-informed heuristics and validate them against the product context, accessibility requirements, real data, and user testing.

## Key insights

- Interpolate network cursor positions for smooth display
- use stable per-user colors and an avatar stack to communicate presence.
- Lock an element when a collaborator selects it to prevent conflicting edits
- follow mode can mirror another user’s viewport.

## Do / Don't

### Do
- Interpolate between server updates
- derive color from a stable user identifier
- show locks and ownership clearly.

### Don't
- Render raw network ticks as jumps
- assign random colors every session
- allow simultaneous edits to corrupt the same object.

## Verification checklist

- [ ] The default state and all relevant alternate states are defined.
- [ ] Mouse, keyboard, and touch interactions have been considered where applicable.
- [ ] The interface communicates what happened and what the user can do next.
- [ ] Errors and reversible actions have a predictable recovery path.
- [ ] The implementation has been tested on mobile and desktop viewports.
- [ ] The recommendation has been adapted to context rather than applied blindly.
