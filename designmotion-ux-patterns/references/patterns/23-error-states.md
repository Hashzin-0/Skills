# 23. Error States

- **Source category:** `feedback`
- **Official source:** [https://designmotionhq.com/patterns/error-states](https://designmotionhq.com/patterns/error-states)
- **Related skill:** `feedback-loading-errors`

> This document is an original technical summary of the linked public page, not a verbatim reproduction. Treat specific numbers and examples as source-informed heuristics and validate them against the product context, accessibility requirements, real data, and user testing.

## Key insights

- Match error surface to severity: field-level errors inline, transient network problems in a banner/toast, and truly blocking failures in a modal or dedicated region.
- Every error needs a recovery path and plain-language explanation.

## Do / Don't

### Do
- Explain what happened and how to recover
- validate early when useful
- use a surface proportionate to severity.

### Don't
- End with an “OK” dead end
- show only raw error codes
- interrupt minor input mistakes with a modal.

## Verification checklist

- [ ] The default state and all relevant alternate states are defined.
- [ ] Mouse, keyboard, and touch interactions have been considered where applicable.
- [ ] The interface communicates what happened and what the user can do next.
- [ ] Errors and reversible actions have a predictable recovery path.
- [ ] The implementation has been tested on mobile and desktop viewports.
- [ ] The recommendation has been adapted to context rather than applied blindly.
