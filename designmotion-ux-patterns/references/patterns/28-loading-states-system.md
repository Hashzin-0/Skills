# 28. Loading States System

- **Source category:** `feedback`
- **Official source:** [https://designmotionhq.com/patterns/loading-states-system](https://designmotionhq.com/patterns/loading-states-system)
- **Related skill:** `feedback-loading-errors`

> This document is an original technical summary of the linked public page, not a verbatim reproduction. Treat specific numbers and examples as source-informed heuristics and validate them against the product context, accessibility requirements, real data, and user testing.

## Key insights

- Choose loading UI based on what is known: skeletons when content shape is known and wait is meaningful, spinners for short unknown waits, and progress bars when long-running work has measurable progress.
- A single skeleton everywhere is not a system.

## Do / Don't

### Do
- Match pattern to duration/known progress
- show real progress and time estimates where available
- preserve context.

### Don't
- Use skeletons for every operation
- show an endless full-page spinner with no explanation
- invent percentage progress.

## Verification checklist

- [ ] The default state and all relevant alternate states are defined.
- [ ] Mouse, keyboard, and touch interactions have been considered where applicable.
- [ ] The interface communicates what happened and what the user can do next.
- [ ] Errors and reversible actions have a predictable recovery path.
- [ ] The implementation has been tested on mobile and desktop viewports.
- [ ] The recommendation has been adapted to context rather than applied blindly.
