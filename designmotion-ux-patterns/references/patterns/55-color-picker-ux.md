# 55. Color Picker UX

- **Source category:** `inputs`
- **Official source:** [https://designmotionhq.com/patterns/color-picker-ux](https://designmotionhq.com/patterns/color-picker-ux)
- **Related skill:** `forms-inputs`

> This document is an original technical summary of the linked public page, not a verbatim reproduction. Treat specific numbers and examples as source-informed heuristics and validate them against the product context, accessibility requirements, real data, and user testing.

## Key insights

- A color picker should support decisions in the context of the product, not merely expose a gradient.
- Pair familiar hex with perceptual controls such as OKLCH, keep recent swatches and saved palettes, and preview the effect across the UI.

## Do / Don't

### Do
- Show the selected value and live preview
- offer recent/saved colors
- make accessible text entry possible.

### Don't
- Force slider-only selection
- discard recent choices
- let a selected color silently destroy contrast or accessibility.

## Verification checklist

- [ ] The default state and all relevant alternate states are defined.
- [ ] Mouse, keyboard, and touch interactions have been considered where applicable.
- [ ] The interface communicates what happened and what the user can do next.
- [ ] Errors and reversible actions have a predictable recovery path.
- [ ] The implementation has been tested on mobile and desktop viewports.
- [ ] The recommendation has been adapted to context rather than applied blindly.
