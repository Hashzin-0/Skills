# 46. Focus States

- **Source category:** `navigation`
- **Official source:** [https://designmotionhq.com/patterns/focus-states](https://designmotionhq.com/patterns/focus-states)
- **Related skill:** `navigation-information-architecture`

> This document is an original technical summary of the linked public page, not a verbatim reproduction. Treat specific numbers and examples as source-informed heuristics and validate them against the product context, accessibility requirements, real data, and user testing.

## Key insights

- Keyboard focus must always be visible.
- Use `:focus-visible` to distinguish keyboard navigation from pointer clicks, keep DOM and visual order aligned, trap focus within modal dialogs and return focus to the opener.
- A skip link should be the first focusable element.

## Do / Don't

### Do
- Use a high-contrast custom focus ring
- maintain logical tab order
- implement modal focus management and skip links.

### Don't
- Remove outlines without replacement
- let focus leak behind modals
- reorder visually with CSS while DOM order diverges.

## Verification checklist

- [ ] The default state and all relevant alternate states are defined.
- [ ] Mouse, keyboard, and touch interactions have been considered where applicable.
- [ ] The interface communicates what happened and what the user can do next.
- [ ] Errors and reversible actions have a predictable recovery path.
- [ ] The implementation has been tested on mobile and desktop viewports.
- [ ] The recommendation has been adapted to context rather than applied blindly.
