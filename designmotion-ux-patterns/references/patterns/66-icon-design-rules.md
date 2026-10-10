# 66. Icon Design Rules

- **Source category:** `visual-design`
- **Official source:** [https://designmotionhq.com/patterns/icon-design-rules](https://designmotionhq.com/patterns/icon-design-rules)
- **Related skill:** `visual-design-systems`

> This document is an original technical summary of the linked public page, not a verbatim reproduction. Treat specific numbers and examples as source-informed heuristics and validate them against the product context, accessibility requirements, real data, and user testing.

## Key insights

- Optical sizing matters: circular/organic shapes may need to be slightly larger than square ones.
- Align to a grid, keep stroke weight and bounding boxes consistent, and commit to a coherent fill/outline style across the set.

## Do / Don't

### Do
- Use a shared grid and stroke scale
- normalize optical size and container
- choose one coherent style strategy.

### Don't
- Size icons only by their bounding-box math
- mix stroke weights randomly
- let icons float in inconsistent containers.

## Verification checklist

- [ ] The default state and all relevant alternate states are defined.
- [ ] Mouse, keyboard, and touch interactions have been considered where applicable.
- [ ] The interface communicates what happened and what the user can do next.
- [ ] Errors and reversible actions have a predictable recovery path.
- [ ] The implementation has been tested on mobile and desktop viewports.
- [ ] The recommendation has been adapted to context rather than applied blindly.
