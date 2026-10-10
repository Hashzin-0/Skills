# 58. Command Palette

- **Source category:** `interactions`
- **Official source:** [https://designmotionhq.com/patterns/command-palette](https://designmotionhq.com/patterns/command-palette)
- **Related skill:** `interaction-patterns`

> This document is an original technical summary of the linked public page, not a verbatim reproduction. Treat specific numbers and examples as source-informed heuristics and validate them against the product context, accessibility requirements, real data, and user testing.

## Key insights

- A command palette is a navigation/action system, not a plain search box.
- Fuzzy matching tolerates abbreviations
- grouped results provide structure
- keyboard navigation and shortcuts make the workflow efficient.
- Include recents and clear empty states.

## Do / Don't

### Do
- Support fuzzy matching, labeled groups, arrows/Enter/Escape and a discoverable shortcut.

### Don't
- Require exact substrings
- show a flat list of unrelated matches
- force mouse use.

## Verification checklist

- [ ] The default state and all relevant alternate states are defined.
- [ ] Mouse, keyboard, and touch interactions have been considered where applicable.
- [ ] The interface communicates what happened and what the user can do next.
- [ ] Errors and reversible actions have a predictable recovery path.
- [ ] The implementation has been tested on mobile and desktop viewports.
- [ ] The recommendation has been adapted to context rather than applied blindly.
