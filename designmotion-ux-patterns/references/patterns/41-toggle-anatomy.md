# 41. Toggle Anatomy

- **Source category:** `inputs`
- **Official source:** [https://designmotionhq.com/patterns/toggle-anatomy](https://designmotionhq.com/patterns/toggle-anatomy)
- **Related skill:** `forms-inputs`

> This document is an original technical summary of the linked public page, not a verbatim reproduction. Treat specific numbers and examples as source-informed heuristics and validate them against the product context, accessibility requirements, real data, and user testing.

## Key insights

- A toggle should morph its track, knob, shadow and label together, not snap abruptly.
- It needs keyboard support, visible focus and an announced checked state.
- For async toggles, optimistic feedback must show pending status and roll back on failure.

## Do / Don't

### Do
- Animate related properties together
- support Space and `aria-checked`
- show pending and failure states.

### Don't
- Snap between states
- leave the switch ambiguous during a request
- make it mouse-only.

## Verification checklist

- [ ] The default state and all relevant alternate states are defined.
- [ ] Mouse, keyboard, and touch interactions have been considered where applicable.
- [ ] The interface communicates what happened and what the user can do next.
- [ ] Errors and reversible actions have a predictable recovery path.
- [ ] The implementation has been tested on mobile and desktop viewports.
- [ ] The recommendation has been adapted to context rather than applied blindly.
