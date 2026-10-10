# 39. Tabs System

- **Source category:** `navigation`
- **Official source:** [https://designmotionhq.com/patterns/tabs-system](https://designmotionhq.com/patterns/tabs-system)
- **Related skill:** `navigation-information-architecture`

> This document is an original technical summary of the linked public page, not a verbatim reproduction. Treat specific numbers and examples as source-informed heuristics and validate them against the product context, accessibility requirements, real data, and user testing.

## Key insights

- Tabs are a system for switching peer content, not a decorative row.
- Keep selection and panel synchronized, preserve a stable order, support keyboard navigation and avoid jumping the layout.
- On small screens, overflow should remain discoverable.

## Do / Don't

### Do
- Use tabs for peer sections
- maintain consistent ordering and active state
- support arrow-key navigation and proper ARIA semantics.

### Don't
- Use tabs for unrelated navigation or sequential steps
- reset content unexpectedly
- let tabs shift position between views.

## Verification checklist

- [ ] The default state and all relevant alternate states are defined.
- [ ] Mouse, keyboard, and touch interactions have been considered where applicable.
- [ ] The interface communicates what happened and what the user can do next.
- [ ] Errors and reversible actions have a predictable recovery path.
- [ ] The implementation has been tested on mobile and desktop viewports.
- [ ] The recommendation has been adapted to context rather than applied blindly.
