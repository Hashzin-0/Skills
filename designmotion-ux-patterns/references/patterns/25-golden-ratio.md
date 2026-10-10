# 25. Golden Ratio

- **Source category:** `visual-design`
- **Official source:** [https://designmotionhq.com/patterns/golden-ratio](https://designmotionhq.com/patterns/golden-ratio)
- **Related skill:** `visual-design-systems`

> This document is an original technical summary of the linked public page, not a verbatim reproduction. Treat specific numbers and examples as source-informed heuristics and validate them against the product context, accessibility requirements, real data, and user testing.

## Key insights

- The 1.618 ratio can be used as a proportional starting point for spacing, typography and panel splits (roughly 62/38).
- The source proposes scales derived from a base unit, but the ratio is a heuristic and must yield to content and the established grid.

## Do / Don't

### Do
- Use proportional scales as an exploratory system
- round to practical values
- keep primary content in the larger region when appropriate.

### Don't
- Choose all values arbitrarily
- force the ratio where content does not fit
- break an established spacing system just to follow a formula.

## Verification checklist

- [ ] The default state and all relevant alternate states are defined.
- [ ] Mouse, keyboard, and touch interactions have been considered where applicable.
- [ ] The interface communicates what happened and what the user can do next.
- [ ] Errors and reversible actions have a predictable recovery path.
- [ ] The implementation has been tested on mobile and desktop viewports.
- [ ] The recommendation has been adapted to context rather than applied blindly.
