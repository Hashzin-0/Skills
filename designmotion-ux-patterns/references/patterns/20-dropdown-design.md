# 20. Dropdown Design

- **Source category:** `inputs`
- **Official source:** [https://designmotionhq.com/patterns/dropdown-design](https://designmotionhq.com/patterns/dropdown-design)
- **Related skill:** `forms-inputs`

> This document is an original technical summary of the linked public page, not a verbatim reproduction. Treat specific numbers and examples as source-informed heuristics and validate them against the product context, accessibility requirements, real data, and user testing.

## Key insights

- The trigger needs a clear caret, adequate target size and hover/focus feedback.
- Menus should flip at viewport edges, support arrow/Enter/Escape keys, and add search for long lists.
- Motion should be short enough not to delay selection.

## Do / Don't

### Do
- Use a generous target
- keep the menu in the viewport
- add keyboard support and search for long options.

### Don't
- Use a tiny low-contrast trigger
- clip the menu off-screen
- make keyboard users tab through every item without menu navigation.

## Verification checklist

- [ ] The default state and all relevant alternate states are defined.
- [ ] Mouse, keyboard, and touch interactions have been considered where applicable.
- [ ] The interface communicates what happened and what the user can do next.
- [ ] Errors and reversible actions have a predictable recovery path.
- [ ] The implementation has been tested on mobile and desktop viewports.
- [ ] The recommendation has been adapted to context rather than applied blindly.
