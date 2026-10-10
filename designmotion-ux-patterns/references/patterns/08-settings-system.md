# 08. Settings System

- **Source category:** `forms`
- **Official source:** [https://designmotionhq.com/patterns/settings-system](https://designmotionhq.com/patterns/settings-system)
- **Related skill:** `forms-inputs`

> This document is an original technical summary of the linked public page, not a verbatim reproduction. Treat specific numbers and examples as source-informed heuristics and validate them against the product context, accessibility requirements, real data, and user testing.

## Key insights

- Match save behavior to risk: low-risk toggles can apply immediately, while identity-sensitive values need explicit Save/Cancel.
- Organize by user task, make settings searchable, show modified state and per-setting reset, and isolate irreversible actions.

## Do / Don't

### Do
- Group by intent
- add search and per-setting reset
- require a typed resource name for irreversible deletion.

### Don't
- Dump settings in schema order
- fire deletion on one unguarded click
- hide common controls behind nested menus.

## Verification checklist

- [ ] The default state and all relevant alternate states are defined.
- [ ] Mouse, keyboard, and touch interactions have been considered where applicable.
- [ ] The interface communicates what happened and what the user can do next.
- [ ] Errors and reversible actions have a predictable recovery path.
- [ ] The implementation has been tested on mobile and desktop viewports.
- [ ] The recommendation has been adapted to context rather than applied blindly.
