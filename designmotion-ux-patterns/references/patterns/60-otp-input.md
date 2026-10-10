# 60. OTP Input

- **Source category:** `forms`
- **Official source:** [https://designmotionhq.com/patterns/otp-input](https://designmotionhq.com/patterns/otp-input)
- **Related skill:** `forms-inputs`

> This document is an original technical summary of the linked public page, not a verbatim reproduction. Treat specific numbers and examples as source-informed heuristics and validate them against the product context, accessibility requirements, real data, and user testing.

## Key insights

- Treat a one-time code as a single value spread across visual cells.
- Pasting the full code should populate all cells
- focus should advance as digits arrive and backspace should move backward predictably.
- Use semantic input/accessible announcements and allow autofill.

## Do / Don't

### Do
- Support paste/autofill
- auto-advance and backspace naturally
- keep one coherent accessible label and error state.

### Don't
- Require manual entry into every cell
- trap focus on an empty cell
- block paste or mobile OTP autofill.

## Verification checklist

- [ ] The default state and all relevant alternate states are defined.
- [ ] Mouse, keyboard, and touch interactions have been considered where applicable.
- [ ] The interface communicates what happened and what the user can do next.
- [ ] Errors and reversible actions have a predictable recovery path.
- [ ] The implementation has been tested on mobile and desktop viewports.
- [ ] The recommendation has been adapted to context rather than applied blindly.
