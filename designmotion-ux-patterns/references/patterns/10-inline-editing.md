# 10. Inline Editing

- **Source category:** `interactions`
- **Official source:** [https://designmotionhq.com/patterns/inline-editing](https://designmotionhq.com/patterns/inline-editing)
- **Related skill:** `interaction-patterns`

> This document is an original technical summary of the linked public page, not a verbatim reproduction. Treat specific numbers and examples as source-informed heuristics and validate them against the product context, accessibility requirements, real data, and user testing.

## Key insights

- Make editable text discoverable with a subtle pencil or surface tint, but keep geometry stable when swapping text for an input.
- Enter commits and Escape cancels
- blur behavior must be consistent.
- Optimistic saves should retain the draft if the server rejects it.

## Do / Don't

### Do
- Keep font, size and padding stable
- define one commit/cancel contract
- roll back failed saves without losing the draft.

### Don't
- Make editable regions invisible
- vary blur behavior between screens
- discard the draft silently after a failed request.

## Verification checklist

- [ ] The default state and all relevant alternate states are defined.
- [ ] Mouse, keyboard, and touch interactions have been considered where applicable.
- [ ] The interface communicates what happened and what the user can do next.
- [ ] Errors and reversible actions have a predictable recovery path.
- [ ] The implementation has been tested on mobile and desktop viewports.
- [ ] The recommendation has been adapted to context rather than applied blindly.
