# 61. Pagination

- **Source category:** `navigation`
- **Official source:** [https://designmotionhq.com/patterns/pagination](https://designmotionhq.com/patterns/pagination)
- **Related skill:** `navigation-information-architecture`

> This document is an original technical summary of the linked public page, not a verbatim reproduction. Treat specific numbers and examples as source-informed heuristics and validate them against the product context, accessibility requirements, real data, and user testing.

## Key insights

- Offset pagination can duplicate or skip records when data changes
- cursor pagination is more stable for frequently changing datasets.
- Choose numbered pages for direct jumps, load-more for explicit continuation and infinite scroll for continuous feeds.
- Persist location in URL and restore scroll.

## Do / Don't

### Do
- Use cursor pagination for volatile lists
- keep page state shareable
- truncate long ranges and restore scroll.

### Don't
- Render hundreds of page links
- lose the current page on refresh
- return users to the top after opening a detail item.

## Verification checklist

- [ ] The default state and all relevant alternate states are defined.
- [ ] Mouse, keyboard, and touch interactions have been considered where applicable.
- [ ] The interface communicates what happened and what the user can do next.
- [ ] Errors and reversible actions have a predictable recovery path.
- [ ] The implementation has been tested on mobile and desktop viewports.
- [ ] The recommendation has been adapted to context rather than applied blindly.
