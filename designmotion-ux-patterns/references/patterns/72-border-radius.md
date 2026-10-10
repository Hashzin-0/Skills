# 72. Border Radius

- **Source category:** `visual-design`
- **Official source:** [https://designmotionhq.com/patterns/border-radius](https://designmotionhq.com/patterns/border-radius)
- **Related skill:** `visual-design-systems`

> This document is an original technical summary of the linked public page, not a verbatim reproduction. Treat specific numbers and examples as source-informed heuristics and validate them against the product context, accessibility requirements, real data, and user testing.

## Key insights

- Nested corners look coherent when the inner radius relates to the outer radius and padding.
- Use a shared radius scale and let larger surfaces carry larger radii.
- The scale should express hierarchy rather than random component-by-component choices.

## Do / Don't

### Do
- Define a radius token scale
- account for padding in nested corners
- match radius to component size.

### Don't
- Choose a new radius for every component
- use inner corners larger than the outer curve allows
- mix rounded and sharp styles without a rule.

## Verification checklist

- [ ] The default state and all relevant alternate states are defined.
- [ ] Mouse, keyboard, and touch interactions have been considered where applicable.
- [ ] The interface communicates what happened and what the user can do next.
- [ ] Errors and reversible actions have a predictable recovery path.
- [ ] The implementation has been tested on mobile and desktop viewports.
- [ ] The recommendation has been adapted to context rather than applied blindly.
