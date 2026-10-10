# 49. Bottom Sheets

- **Source category:** `overlays`
- **Official source:** [https://designmotionhq.com/patterns/bottom-sheets](https://designmotionhq.com/patterns/bottom-sheets)
- **Related skill:** `interaction-patterns`

> This document is an original technical summary of the linked public page, not a verbatim reproduction. Treat specific numbers and examples as source-informed heuristics and validate them against the product context, accessibility requirements, real data, and user testing.

## Key insights

- Bottom sheets keep actions near the thumb and preserve context by leaving the underlying screen partly visible.
- They are especially useful on mobile for menus, filters and contextual tasks
- the sheet should have clear dismissal and appropriate snap/scroll behavior.

## Do / Don't

### Do
- Anchor frequent mobile actions within reach
- preserve visible context
- support drag/close and keyboard alternatives where relevant.

### Don't
- Shrink a desktop popover onto mobile
- block the whole app for a lightweight task
- let the sheet cover its own primary action.

## Verification checklist

- [ ] The default state and all relevant alternate states are defined.
- [ ] Mouse, keyboard, and touch interactions have been considered where applicable.
- [ ] The interface communicates what happened and what the user can do next.
- [ ] Errors and reversible actions have a predictable recovery path.
- [ ] The implementation has been tested on mobile and desktop viewports.
- [ ] The recommendation has been adapted to context rather than applied blindly.
