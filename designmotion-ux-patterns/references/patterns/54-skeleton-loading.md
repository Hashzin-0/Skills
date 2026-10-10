# 54. Skeleton Loading

- **Source category:** `feedback`
- **Official source:** [https://designmotionhq.com/patterns/skeleton-loading](https://designmotionhq.com/patterns/skeleton-loading)
- **Related skill:** `feedback-loading-errors`

> This document is an original technical summary of the linked public page, not a verbatim reproduction. Treat specific numbers and examples as source-informed heuristics and validate them against the product context, accessibility requirements, real data, and user testing.

## Key insights

- A spinner communicates activity but not the shape of the result.
- Skeletons preview the expected content layout
- subtle shimmer can signal progress.
- Use them when layout is known and wait is long enough to matter, not for every tiny action.

## Do / Don't

### Do
- Match skeleton geometry to the real content
- avoid layout shift
- honor reduced-motion settings.

### Don't
- Use a skeleton for an unknown/short operation
- show shapes that do not match final content
- animate aggressively.

## Verification checklist

- [ ] The default state and all relevant alternate states are defined.
- [ ] Mouse, keyboard, and touch interactions have been considered where applicable.
- [ ] The interface communicates what happened and what the user can do next.
- [ ] Errors and reversible actions have a predictable recovery path.
- [ ] The implementation has been tested on mobile and desktop viewports.
- [ ] The recommendation has been adapted to context rather than applied blindly.
