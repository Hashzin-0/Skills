# 04. Bulk Actions

- **Source category:** `interactions`
- **Official source:** [https://designmotionhq.com/patterns/bulk-actions](https://designmotionhq.com/patterns/bulk-actions)
- **Related skill:** `interaction-patterns`

> This document is an original technical summary of the linked public page, not a verbatim reproduction. Treat specific numbers and examples as source-informed heuristics and validate them against the product context, accessibility requirements, real data, and user testing.

## Key insights

- A select-all checkbox needs empty, indeterminate and checked states.
- Make the scope explicit (“Select all 247 matching”), keep selected IDs in application state across pagination, and update counts when filters change.
- Reversible bulk deletion can use an undo window rather than routine confirmation.

## Do / Don't

### Do
- Show the exact count and scope
- preserve selection across pages
- provide an undo path and an honest countdown for reversible destructive actions.

### Don't
- Use a two-state header checkbox
- label scope merely “all”
- store selection only in the DOM or silently clear it on page changes.

## Verification checklist

- [ ] The default state and all relevant alternate states are defined.
- [ ] Mouse, keyboard, and touch interactions have been considered where applicable.
- [ ] The interface communicates what happened and what the user can do next.
- [ ] Errors and reversible actions have a predictable recovery path.
- [ ] The implementation has been tested on mobile and desktop viewports.
- [ ] The recommendation has been adapted to context rather than applied blindly.
