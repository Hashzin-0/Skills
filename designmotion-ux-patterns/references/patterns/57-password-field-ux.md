# 57. Password Field UX

- **Source category:** `forms`
- **Official source:** [https://designmotionhq.com/patterns/password-field-ux](https://designmotionhq.com/patterns/password-field-ux)
- **Related skill:** `forms-inputs`

> This document is an original technical summary of the linked public page, not a verbatim reproduction. Treat specific numbers and examples as source-informed heuristics and validate them against the product context, accessibility requirements, real data, and user testing.

## Key insights

- Password strength depends on entropy and length, not merely counting symbols.
- Show requirements and feedback while typing, and let users reveal the password to catch typos.
- Feedback should coach without exposing passwords or weakening server-side rules.

## Do / Don't

### Do
- Explain requirements early
- provide show/hide control
- evaluate realistic strength and use accessible labels.

### Don't
- Demand arbitrary complexity without context
- reveal requirements only after submit
- use an opaque meter with no explanation.

## Verification checklist

- [ ] The default state and all relevant alternate states are defined.
- [ ] Mouse, keyboard, and touch interactions have been considered where applicable.
- [ ] The interface communicates what happened and what the user can do next.
- [ ] Errors and reversible actions have a predictable recovery path.
- [ ] The implementation has been tested on mobile and desktop viewports.
- [ ] The recommendation has been adapted to context rather than applied blindly.
