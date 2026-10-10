# 37. Star Rating

- **Source category:** `interactions`
- **Official source:** [https://designmotionhq.com/patterns/star-rating](https://designmotionhq.com/patterns/star-rating)
- **Related skill:** `interaction-patterns`

> This document is an original technical summary of the linked public page, not a verbatim reproduction. Treat specific numbers and examples as source-informed heuristics and validate them against the product context, accessibility requirements, real data, and user testing.

## Key insights

- Rating controls need a clear preview state, a committed value and an honest aggregate.
- Hover should preview before click
- pointer leave should restore the committed value.
- Half-stars, averages and keyboard interaction must be deliberate rather than improvised.

## Do / Don't

### Do
- Separate preview from saved value
- communicate scale and aggregate sample size
- support keyboard and touch.

### Don't
- Leave the last hovered star selected without a click
- imply precision that data does not support
- show an average without context.

## Verification checklist

- [ ] The default state and all relevant alternate states are defined.
- [ ] Mouse, keyboard, and touch interactions have been considered where applicable.
- [ ] The interface communicates what happened and what the user can do next.
- [ ] Errors and reversible actions have a predictable recovery path.
- [ ] The implementation has been tested on mobile and desktop viewports.
- [ ] The recommendation has been adapted to context rather than applied blindly.
