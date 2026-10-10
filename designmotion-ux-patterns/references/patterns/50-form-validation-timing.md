# 50. Form Validation Timing

- **Source category:** `forms`
- **Official source:** [https://designmotionhq.com/patterns/form-validation-timing](https://designmotionhq.com/patterns/form-validation-timing)
- **Related skill:** `forms-inputs`

> This document is an original technical summary of the linked public page, not a verbatim reproduction. Treat specific numbers and examples as source-informed heuristics and validate them against the product context, accessibility requirements, real data, and user testing.

## Key insights

- Validation on submit can create a wall of errors
- validation on every keystroke can interrupt incomplete typing.
- Validate on blur as a useful default, then clear an existing error live as the user corrects the field.
- Adapt timing to the field and task.

## Do / Don't

### Do
- Validate after a field is completed
- clear errors promptly once fixed
- preserve user input and focus.

### Don't
- Show errors before the user has finished typing
- wait until submit to reveal every correctable issue
- repeatedly announce unchanged errors.

## Verification checklist

- [ ] The default state and all relevant alternate states are defined.
- [ ] Mouse, keyboard, and touch interactions have been considered where applicable.
- [ ] The interface communicates what happened and what the user can do next.
- [ ] Errors and reversible actions have a predictable recovery path.
- [ ] The implementation has been tested on mobile and desktop viewports.
- [ ] The recommendation has been adapted to context rather than applied blindly.
