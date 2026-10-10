# 19. Drag and Drop

- **Source category:** `interactions`
- **Official source:** [https://designmotionhq.com/patterns/drag-and-drop](https://designmotionhq.com/patterns/drag-and-drop)
- **Related skill:** `interaction-patterns`

> This document is an original technical summary of the linked public page, not a verbatim reproduction. Treat specific numbers and examples as source-informed heuristics and validate them against the product context, accessibility requirements, real data, and user testing.

## Key insights

- A grabbed item should visibly lift
- the destination should be shown before release.
- Use insertion lines for between-item placement and highlighted containers for dropping inside a group.
- Snap structured boards to valid slots and provide undo.

## Do / Don't

### Do
- Signal pickup with scale/shadow/tilt
- preview the target
- offer a short undo after a drop.

### Don't
- Allow ambiguous destinations
- demand pixel-perfect positioning when slots exist
- make accidental drops permanent.

## Verification checklist

- [ ] The default state and all relevant alternate states are defined.
- [ ] Mouse, keyboard, and touch interactions have been considered where applicable.
- [ ] The interface communicates what happened and what the user can do next.
- [ ] Errors and reversible actions have a predictable recovery path.
- [ ] The implementation has been tested on mobile and desktop viewports.
- [ ] The recommendation has been adapted to context rather than applied blindly.
