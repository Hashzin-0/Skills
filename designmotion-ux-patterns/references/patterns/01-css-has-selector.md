# 01. CSS Has Selector

- **Source category:** `interactions`
- **Official source:** [https://designmotionhq.com/patterns/css-has-selector](https://designmotionhq.com/patterns/css-has-selector)
- **Related skill:** `interaction-patterns`

> This document is an original technical summary of the linked public page, not a verbatim reproduction. Treat specific numbers and examples as source-informed heuristics and validate them against the product context, accessibility requirements, real data, and user testing.

## Key insights

- Use `:has()` to style a parent from meaningful descendant state: checked, open, invalid or child count.
- Prefer CSS when the state already exists in the DOM
- `:user-invalid` avoids showing errors before user interaction.
- Layout can respond to the presence of a sidebar or modal without prop plumbing.

## Do / Don't

### Do
- Use `:has()` for DOM-derived states
- keep container, label and icon styling in one rule
- test browser support and selector cost.

### Don't
- Mirror DOM state into React only to toggle classes
- use `:invalid` if it creates premature errors
- count children in JavaScript when CSS can express the rule.

## Verification checklist

- [ ] The default state and all relevant alternate states are defined.
- [ ] Mouse, keyboard, and touch interactions have been considered where applicable.
- [ ] The interface communicates what happened and what the user can do next.
- [ ] Errors and reversible actions have a predictable recovery path.
- [ ] The implementation has been tested on mobile and desktop viewports.
- [ ] The recommendation has been adapted to context rather than applied blindly.
