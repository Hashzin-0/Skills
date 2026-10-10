# 44. Z-Index Mastery

- **Source category:** `visual-design`
- **Official source:** [https://designmotionhq.com/patterns/z-index-mastery](https://designmotionhq.com/patterns/z-index-mastery)
- **Related skill:** `visual-design-systems`

> This document is an original technical summary of the linked public page, not a verbatim reproduction. Treat specific numbers and examples as source-informed heuristics and validate them against the product context, accessibility requirements, real data, and user testing.

## Key insights

- `z-index` only orders elements within the relevant stacking context and generally needs a positioned element.
- A child cannot escape a parent stacking context by using a larger number.
- Use `isolation: isolate` to contain component layers and inspect the Layers panel in DevTools.

## Do / Don't

### Do
- Understand stacking-context ancestors
- use local isolation when appropriate
- inspect the actual layer tree.

### Don't
- Escalate z-index values endlessly
- assume 9999 beats every other context
- use z-index without understanding positioning/stacking.

## Verification checklist

- [ ] The default state and all relevant alternate states are defined.
- [ ] Mouse, keyboard, and touch interactions have been considered where applicable.
- [ ] The interface communicates what happened and what the user can do next.
- [ ] Errors and reversible actions have a predictable recovery path.
- [ ] The implementation has been tested on mobile and desktop viewports.
- [ ] The recommendation has been adapted to context rather than applied blindly.
