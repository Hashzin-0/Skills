# 52. Optimistic UI

- **Source category:** `feedback`
- **Official source:** [https://designmotionhq.com/patterns/optimistic-ui](https://designmotionhq.com/patterns/optimistic-ui)
- **Related skill:** `feedback-loading-errors`

> This document is an original technical summary of the linked public page, not a verbatim reproduction. Treat specific numbers and examples as source-informed heuristics and validate them against the product context, accessibility requirements, real data, and user testing.

## Key insights

- Optimistic UI updates immediately and reconciles with the server in the background.
- It works best for high-confidence, reversible actions
- if the request fails, roll back state cleanly and tell the user.
- Avoid optimistic assumptions for financial or irreversible actions.

## Do / Don't

### Do
- Update immediately for low-risk actions
- track pending operations
- restore prior state and explain failures.

### Don't
- Use optimism for irreversible/high-stakes writes
- ignore server rejection
- leave counters or UI inconsistent after rollback.

## Verification checklist

- [ ] The default state and all relevant alternate states are defined.
- [ ] Mouse, keyboard, and touch interactions have been considered where applicable.
- [ ] The interface communicates what happened and what the user can do next.
- [ ] Errors and reversible actions have a predictable recovery path.
- [ ] The implementation has been tested on mobile and desktop viewports.
- [ ] The recommendation has been adapted to context rather than applied blindly.
