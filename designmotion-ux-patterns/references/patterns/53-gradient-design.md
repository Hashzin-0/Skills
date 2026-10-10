# 53. Gradient Design

- **Source category:** `visual-design`
- **Official source:** [https://designmotionhq.com/patterns/gradient-design](https://designmotionhq.com/patterns/gradient-design)
- **Related skill:** `visual-design-systems`

> This document is an original technical summary of the linked public page, not a verbatim reproduction. Treat specific numbers and examples as source-informed heuristics and validate them against the product context, accessibility requirements, real data, and user testing.

## Key insights

- Gradients look muddy when hues travel too far apart or lightness reverses direction.
- Neighboring hues and a consistent lightness progression create cleaner transitions.
- A subtle radial glow behind content is often more effective than a saturated wash over the whole surface.

## Do / Don't

### Do
- Keep hue transitions controlled
- move lightness in one direction
- use gradients to support hierarchy rather than obscure content.

### Don't
- Mix opposite hues without testing the midpoint
- create uneven lightness bands
- use gradients as a substitute for real product content.

## Verification checklist

- [ ] The default state and all relevant alternate states are defined.
- [ ] Mouse, keyboard, and touch interactions have been considered where applicable.
- [ ] The interface communicates what happened and what the user can do next.
- [ ] Errors and reversible actions have a predictable recovery path.
- [ ] The implementation has been tested on mobile and desktop viewports.
- [ ] The recommendation has been adapted to context rather than applied blindly.
