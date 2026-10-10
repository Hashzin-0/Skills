# 38. Stepper Wizard

- **Source category:** `forms`
- **Official source:** [https://designmotionhq.com/patterns/stepper-wizard](https://designmotionhq.com/patterns/stepper-wizard)
- **Related skill:** `forms-inputs`

> This document is an original technical summary of the linked public page, not a verbatim reproduction. Treat specific numbers and examples as source-informed heuristics and validate them against the product context, accessibility requirements, real data, and user testing.

## Key insights

- Multi-step forms reduce the wall of fields into a guided path.
- Show progress and current step, group fields by task, validate before advancing and preserve prior answers when navigating back.
- Let users understand whether steps can be revisited.

## Do / Don't

### Do
- Use meaningful step labels
- validate locally before moving forward
- persist progress and allow review when appropriate.

### Don't
- Split a form into arbitrary steps
- erase inputs when navigating back
- make progress misleading or prevent correction.

## Verification checklist

- [ ] The default state and all relevant alternate states are defined.
- [ ] Mouse, keyboard, and touch interactions have been considered where applicable.
- [ ] The interface communicates what happened and what the user can do next.
- [ ] Errors and reversible actions have a predictable recovery path.
- [ ] The implementation has been tested on mobile and desktop viewports.
- [ ] The recommendation has been adapted to context rather than applied blindly.
