# 63. Data Table

- **Source category:** `interactions`
- **Official source:** [https://designmotionhq.com/patterns/data-table](https://designmotionhq.com/patterns/data-table)
- **Related skill:** `interaction-patterns`

> This document is an original technical summary of the linked public page, not a verbatim reproduction. Treat specific numbers and examples as source-informed heuristics and validate them against the product context, accessibility requirements, real data, and user testing.

## Key insights

- Sorting should support ascending, descending and original order.
- Right-align numeric columns with tabular figures, keep headers and key columns visible during scroll, and expose density as a controlled token.
- Row selection should have a generous target and clear partial-select state.

## Do / Don't

### Do
- Use semantic table structure
- right-align numbers
- sticky headers/key column
- offer consistent density and selection.

### Don't
- Provide a binary sort with no reset
- rely on tiny checkboxes alone
- let numeric digits jitter with proportional fonts.

## Verification checklist

- [ ] The default state and all relevant alternate states are defined.
- [ ] Mouse, keyboard, and touch interactions have been considered where applicable.
- [ ] The interface communicates what happened and what the user can do next.
- [ ] Errors and reversible actions have a predictable recovery path.
- [ ] The implementation has been tested on mobile and desktop viewports.
- [ ] The recommendation has been adapted to context rather than applied blindly.
