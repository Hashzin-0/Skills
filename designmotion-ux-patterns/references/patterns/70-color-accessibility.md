# 70. Color Accessibility

- **Source category:** `visual-design`
- **Official source:** [https://designmotionhq.com/patterns/color-accessibility](https://designmotionhq.com/patterns/color-accessibility)
- **Related skill:** `visual-design-systems`

> This document is an original technical summary of the linked public page, not a verbatim reproduction. Treat specific numbers and examples as source-informed heuristics and validate them against the product context, accessibility requirements, real data, and user testing.

## Key insights

- Contrast is a relationship between foreground and background, not a property of a color alone.
- WCAG thresholds cited by the page are 4.5:1 for normal text and 3:1 for large text.
- Muted labels and secondary links are common failure points.

## Do / Don't

### Do
- Measure contrast for each theme/state
- test muted text and controls
- combine color with shape, text or icon for status.

### Don't
- Assume a palette is accessible in every background
- use color as the only status signal
- ignore secondary text contrast.

## Verification checklist

- [ ] The default state and all relevant alternate states are defined.
- [ ] Mouse, keyboard, and touch interactions have been considered where applicable.
- [ ] The interface communicates what happened and what the user can do next.
- [ ] Errors and reversible actions have a predictable recovery path.
- [ ] The implementation has been tested on mobile and desktop viewports.
- [ ] The recommendation has been adapted to context rather than applied blindly.
