# 62. Accordion Disclosure

- **Source category:** `interactions`
- **Official source:** [https://designmotionhq.com/patterns/accordion-disclosure](https://designmotionhq.com/patterns/accordion-disclosure)
- **Related skill:** `interaction-patterns`

> This document is an original technical summary of the linked public page, not a verbatim reproduction. Treat specific numbers and examples as source-informed heuristics and validate them against the product context, accessibility requirements, real data, and user testing.

## Key insights

- Do not expect `height:auto` to transition.
- Animate grid rows or measured height
- synchronize chevron and panel timing.
- Decide whether one or many panels can stay open based on content.
- Use a real button with `aria-expanded` and `aria-controls`.

## Do / Don't

### Do
- Use semantic buttons and ARIA state
- choose single/multiple open intentionally
- anchor the expanded header to avoid scroll jumps.

### Don't
- Animate `height:auto` expecting smoothness
- let icon and panel timing drift
- use a div as a button without keyboard support.

## Verification checklist

- [ ] The default state and all relevant alternate states are defined.
- [ ] Mouse, keyboard, and touch interactions have been considered where applicable.
- [ ] The interface communicates what happened and what the user can do next.
- [ ] Errors and reversible actions have a predictable recovery path.
- [ ] The implementation has been tested on mobile and desktop viewports.
- [ ] The recommendation has been adapted to context rather than applied blindly.
