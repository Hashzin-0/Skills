# 29. Navigation Patterns

- **Source category:** `navigation`
- **Official source:** [https://designmotionhq.com/patterns/navigation-patterns](https://designmotionhq.com/patterns/navigation-patterns)
- **Related skill:** `navigation-information-architecture`

> This document is an original technical summary of the linked public page, not a verbatim reproduction. Treat specific numbers and examples as source-informed heuristics and validate them against the product context, accessibility requirements, real data, and user testing.

## Key insights

- Navigation should reflect device and information architecture.
- Bottom tabs work for a small set of top mobile destinations
- persistent sidebars suit hierarchical desktop applications.
- A hamburger is usually secondary navigation, not a substitute for discoverable primary destinations.

## Do / Don't

### Do
- Keep primary destinations visible
- adapt navigation to screen size and hierarchy
- indicate current location.

### Don't
- Hide core desktop navigation behind a hamburger
- overload bottom tabs
- use a navigation structure unrelated to user tasks.

## Verification checklist

- [ ] The default state and all relevant alternate states are defined.
- [ ] Mouse, keyboard, and touch interactions have been considered where applicable.
- [ ] The interface communicates what happened and what the user can do next.
- [ ] Errors and reversible actions have a predictable recovery path.
- [ ] The implementation has been tested on mobile and desktop viewports.
- [ ] The recommendation has been adapted to context rather than applied blindly.
