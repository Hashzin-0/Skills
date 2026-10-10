# 17. Design System Kit

- **Source category:** `visual-design`
- **Official source:** [https://designmotionhq.com/patterns/design-system-kit](https://designmotionhq.com/patterns/design-system-kit)
- **Related skill:** `visual-design-systems`

> This document is an original technical summary of the linked public page, not a verbatim reproduction. Treat specific numbers and examples as source-informed heuristics and validate them against the product context, accessibility requirements, real data, and user testing.

## Key insights

- Replace arbitrary values with semantic tokens, numbered color scales, type scales and a spacing scale.
- Standardize component variants, sizes and states
- connect motion timing to interaction intent.
- A design system is a set of reusable decisions, not a component gallery alone.

## Do / Don't

### Do
- Name tokens by purpose
- define color/type/spacing scales
- standardize variants and states.

### Don't
- Hardcode hex and pixel values throughout components
- improvise every gap
- use identical weight and size for all text.

## Verification checklist

- [ ] The default state and all relevant alternate states are defined.
- [ ] Mouse, keyboard, and touch interactions have been considered where applicable.
- [ ] The interface communicates what happened and what the user can do next.
- [ ] Errors and reversible actions have a predictable recovery path.
- [ ] The implementation has been tested on mobile and desktop viewports.
- [ ] The recommendation has been adapted to context rather than applied blindly.
