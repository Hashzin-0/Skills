# 73. Dark Mode

- **Source category:** `visual-design`
- **Official source:** [https://designmotionhq.com/patterns/dark-mode](https://designmotionhq.com/patterns/dark-mode)
- **Related skill:** `visual-design-systems`

> This document is an original technical summary of the linked public page, not a verbatim reproduction. Treat specific numbers and examples as source-informed heuristics and validate them against the product context, accessibility requirements, real data, and user testing.

## Key insights

- Dark mode is not simply black backgrounds with inverted text.
- Near-black surfaces preserve visible depth
- elevated layers can become lighter
- highly saturated accents may need adjustment.
- Recheck contrast, shadows, charts and semantic colors in both themes.

## Do / Don't

### Do
- Design semantic tokens for both themes
- distinguish elevations with surface values
- test contrast and data visualization.

### Don't
- Invert colors mechanically
- use pure black for every surface
- reuse saturated light-theme accents without validation.

## Verification checklist

- [ ] The default state and all relevant alternate states are defined.
- [ ] Mouse, keyboard, and touch interactions have been considered where applicable.
- [ ] The interface communicates what happened and what the user can do next.
- [ ] Errors and reversible actions have a predictable recovery path.
- [ ] The implementation has been tested on mobile and desktop viewports.
- [ ] The recommendation has been adapted to context rather than applied blindly.
