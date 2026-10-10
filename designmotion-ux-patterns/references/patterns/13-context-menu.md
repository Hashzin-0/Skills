# 13. Context Menu

- **Source category:** `interactions`
- **Official source:** [https://designmotionhq.com/patterns/context-menu](https://designmotionhq.com/patterns/context-menu)
- **Related skill:** `interaction-patterns`

> This document is an original technical summary of the linked public page, not a verbatim reproduction. Treat specific numbers and examples as source-informed heuristics and validate them against the product context, accessibility requirements, real data, and user testing.

## Key insights

- A context menu must stay within the viewport and group actions by intent.
- Submenus need hover-intent tolerance so diagonal cursor movement does not close them.
- Keyboard navigation and a mobile long-press/bottom-sheet equivalent are part of the same system.

## Do / Don't

### Do
- Flip menu placement at viewport edges
- group with dividers
- support arrows, type-to-select and Escape
- provide mobile access.

### Don't
- Render a flat list of a dozen actions
- close submenus on every pointer exit
- make right-click the only trigger.

## Verification checklist

- [ ] The default state and all relevant alternate states are defined.
- [ ] Mouse, keyboard, and touch interactions have been considered where applicable.
- [ ] The interface communicates what happened and what the user can do next.
- [ ] Errors and reversible actions have a predictable recovery path.
- [ ] The implementation has been tested on mobile and desktop viewports.
- [ ] The recommendation has been adapted to context rather than applied blindly.
