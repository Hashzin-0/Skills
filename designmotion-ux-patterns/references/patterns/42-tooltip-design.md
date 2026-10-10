# 42. Tooltip Design

- **Source category:** `interactions`
- **Official source:** [https://designmotionhq.com/patterns/tooltip-design](https://designmotionhq.com/patterns/tooltip-design)
- **Related skill:** `interaction-patterns`

> This document is an original technical summary of the linked public page, not a verbatim reproduction. Treat specific numbers and examples as source-informed heuristics and validate them against the product context, accessibility requirements, real data, and user testing.

## Key insights

- A tooltip should appear after a short delay (the source suggests ~300ms), point clearly to its trigger and flip near viewport edges.
- Dismiss on pointer leave, Escape, blur or outside tap.
- Keep copy short
- longer instructions belong elsewhere.

## Do / Don't

### Do
- Add a small delay and pointer/keyboard dismissal
- anchor with an arrow
- constrain width and reposition at edges.

### Don't
- Fire on every accidental cursor pass
- clip off-screen
- pack documentation into a tooltip.

## Verification checklist

- [ ] The default state and all relevant alternate states are defined.
- [ ] Mouse, keyboard, and touch interactions have been considered where applicable.
- [ ] The interface communicates what happened and what the user can do next.
- [ ] Errors and reversible actions have a predictable recovery path.
- [ ] The implementation has been tested on mobile and desktop viewports.
- [ ] The recommendation has been adapted to context rather than applied blindly.
