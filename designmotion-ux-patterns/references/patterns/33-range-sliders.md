# 33. Range Sliders

- **Source category:** `inputs`
- **Official source:** [https://designmotionhq.com/patterns/range-sliders](https://designmotionhq.com/patterns/range-sliders)
- **Related skill:** `forms-inputs`

> This document is an original technical summary of the linked public page, not a verbatim reproduction. Treat specific numbers and examples as source-informed heuristics and validate them against the product context, accessibility requirements, real data, and user testing.

## Key insights

- Finger input is imprecise, so show the selected track, make the full row easy to grab and display the exact value near the thumb.
- Snap to meaningful increments when fractional values are not useful, and provide another precise input path when necessary.

## Do / Don't

### Do
- Show filled progress and current value
- enlarge hit area
- use visible ticks and step snapping for discrete values.

### Don't
- Use a hairline hit target
- hide the value
- force users to drag when a numeric field is more precise.

## Verification checklist

- [ ] The default state and all relevant alternate states are defined.
- [ ] Mouse, keyboard, and touch interactions have been considered where applicable.
- [ ] The interface communicates what happened and what the user can do next.
- [ ] Errors and reversible actions have a predictable recovery path.
- [ ] The implementation has been tested on mobile and desktop viewports.
- [ ] The recommendation has been adapted to context rather than applied blindly.
