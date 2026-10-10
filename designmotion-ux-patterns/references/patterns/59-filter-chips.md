# 59. Filter Chips

- **Source category:** `interactions`
- **Official source:** [https://designmotionhq.com/patterns/filter-chips](https://designmotionhq.com/patterns/filter-chips)
- **Related skill:** `interaction-patterns`

> This document is an original technical summary of the linked public page, not a verbatim reproduction. Treat specific numbers and examples as source-informed heuristics and validate them against the product context, accessibility requirements, real data, and user testing.

## Key insights

- Chips need distinct idle, active and disabled states.
- Explain boolean logic: OR within one group can broaden results while AND across groups narrows them.
- Show active filters and result counts so users can understand why the set changed.

## Do / Don't

### Do
- Differentiate selected state with more than subtle color
- expose clear-all and result count
- preserve filter state predictably.

### Don't
- Make active chips look idle
- hide filter logic
- leave users unable to remove an applied filter.

## Verification checklist

- [ ] The default state and all relevant alternate states are defined.
- [ ] Mouse, keyboard, and touch interactions have been considered where applicable.
- [ ] The interface communicates what happened and what the user can do next.
- [ ] Errors and reversible actions have a predictable recovery path.
- [ ] The implementation has been tested on mobile and desktop viewports.
- [ ] The recommendation has been adapted to context rather than applied blindly.
