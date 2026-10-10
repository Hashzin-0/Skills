# 05. Disabled Buttons

- **Source category:** `interactions`
- **Official source:** [https://designmotionhq.com/patterns/disabled-buttons](https://designmotionhq.com/patterns/disabled-buttons)
- **Related skill:** `interaction-patterns`

> This document is an original technical summary of the linked public page, not a verbatim reproduction. Treat specific numbers and examples as source-informed heuristics and validate them against the product context, accessibility requirements, real data, and user testing.

## Key insights

- A disabled control may be skipped by keyboard navigation and cannot reliably explain itself through hover.
- Distinguish disabled from loading.
- For form submission, validating on click and focusing the first blocking field can reveal the path forward
- async actions should expose a busy state.

## Do / Don't

### Do
- Explain blockers in reachable text
- keep focus stable during loading and expose `aria-busy`
- use clear field-level validation.

### Don't
- Leave a disabled submit button unexplained
- attach the only explanation to a tooltip on a disabled control
- represent loading as a greyed-out disabled button.

## Verification checklist

- [ ] The default state and all relevant alternate states are defined.
- [ ] Mouse, keyboard, and touch interactions have been considered where applicable.
- [ ] The interface communicates what happened and what the user can do next.
- [ ] Errors and reversible actions have a predictable recovery path.
- [ ] The implementation has been tested on mobile and desktop viewports.
- [ ] The recommendation has been adapted to context rather than applied blindly.
