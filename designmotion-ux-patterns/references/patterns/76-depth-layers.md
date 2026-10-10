# 76. Depth Layers

- **Source category:** `visual-design`
- **Official source:** [https://designmotionhq.com/patterns/depth-layers](https://designmotionhq.com/patterns/depth-layers)
- **Related skill:** `visual-design-systems`

> This document is an original technical summary of the linked public page, not a verbatim reproduction. Treat specific numbers and examples as source-informed heuristics and validate them against the product context, accessibility requirements, real data, and user testing.

## Key insights

- Depth can be built with layered shadows and motion parallax rather than a layout redesign.
- Contact, mid and ambient shadows suggest different light scales
- parallax uses different movement rates to imply distance.
- Apply sparingly so depth reinforces hierarchy.

## Do / Don't

### Do
- Use multiple subtle shadow layers
- vary parallax speeds intentionally
- maintain readable contrast and reduced-motion support.

### Don't
- Apply one exaggerated shadow everywhere
- move layers so much that content becomes hard to read
- rely on parallax for essential information.

## Verification checklist

- [ ] The default state and all relevant alternate states are defined.
- [ ] Mouse, keyboard, and touch interactions have been considered where applicable.
- [ ] The interface communicates what happened and what the user can do next.
- [ ] Errors and reversible actions have a predictable recovery path.
- [ ] The implementation has been tested on mobile and desktop viewports.
- [ ] The recommendation has been adapted to context rather than applied blindly.
