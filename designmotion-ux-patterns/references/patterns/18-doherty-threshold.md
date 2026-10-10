# 18. Doherty Threshold

- **Source category:** `feedback`
- **Official source:** [https://designmotionhq.com/patterns/doherty-threshold](https://designmotionhq.com/patterns/doherty-threshold)
- **Related skill:** `feedback-loading-errors`

> This document is an original technical summary of the linked public page, not a verbatim reproduction. Treat specific numbers and examples as source-informed heuristics and validate them against the product context, accessibility requirements, real data, and user testing.

## Key insights

- The source uses 400ms as a perceived-response threshold: even if the work takes longer, the interface should acknowledge the action quickly.
- Skeletons, optimistic UI and progress feedback can make waiting legible.
- These are heuristics, not a guarantee for every task.

## Do / Don't

### Do
- Acknowledge interaction promptly
- show progress for long work
- optimistically update only actions that can be safely reconciled.

### Don't
- Leave the UI blank/frozen
- wait for a server round-trip before any visual response
- fake progress that does not reflect the operation.

## Verification checklist

- [ ] The default state and all relevant alternate states are defined.
- [ ] Mouse, keyboard, and touch interactions have been considered where applicable.
- [ ] The interface communicates what happened and what the user can do next.
- [ ] Errors and reversible actions have a predictable recovery path.
- [ ] The implementation has been tested on mobile and desktop viewports.
- [ ] The recommendation has been adapted to context rather than applied blindly.
