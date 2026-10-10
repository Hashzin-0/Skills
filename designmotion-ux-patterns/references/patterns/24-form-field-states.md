# 24. Form Field States

- **Source category:** `forms`
- **Official source:** [https://designmotionhq.com/patterns/form-field-states](https://designmotionhq.com/patterns/form-field-states)
- **Related skill:** `forms-inputs`

> This document is an original technical summary of the linked public page, not a verbatim reproduction. Treat specific numbers and examples as source-informed heuristics and validate them against the product context, accessibility requirements, real data, and user testing.

## Key insights

- A field should explicitly design default, focus, error, success, disabled and loading states.
- Keep labels persistent outside the input, combine color with icons and text for errors, and keep loading distinct from disabled.

## Do / Don't

### Do
- Use a visible label and helper text
- signal errors redundantly
- show focus contrast and async state.

### Don't
- Use placeholder as the only label
- rely on red border alone
- make disabled and loading visually indistinguishable.

## Verification checklist

- [ ] The default state and all relevant alternate states are defined.
- [ ] Mouse, keyboard, and touch interactions have been considered where applicable.
- [ ] The interface communicates what happened and what the user can do next.
- [ ] Errors and reversible actions have a predictable recovery path.
- [ ] The implementation has been tested on mobile and desktop viewports.
- [ ] The recommendation has been adapted to context rather than applied blindly.
