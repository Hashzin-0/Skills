# 47. Swipe Actions

- **Source category:** `interactions`
- **Official source:** [https://designmotionhq.com/patterns/swipe-actions](https://designmotionhq.com/patterns/swipe-actions)
- **Related skill:** `interaction-patterns`

> This document is an original technical summary of the linked public page, not a verbatim reproduction. Treat specific numbers and examples as source-informed heuristics and validate them against the product context, accessibility requirements, real data, and user testing.

## Key insights

- Swipe actions are hidden affordances and need discovery hints.
- Destructive actions should not commit accidentally on a full swipe
- use a reveal-then-tap or a clear undo.
- Keep left/right semantics consistent and provide a visible alternative for accessibility.

## Do / Don't

### Do
- Offer a visible fallback
- keep directional meanings consistent
- provide undo for reversible swipe actions.

### Don't
- Make swipe the only route to an action
- hide too many actions on each side
- instantly delete on a casual swipe.

## Verification checklist

- [ ] The default state and all relevant alternate states are defined.
- [ ] Mouse, keyboard, and touch interactions have been considered where applicable.
- [ ] The interface communicates what happened and what the user can do next.
- [ ] Errors and reversible actions have a predictable recovery path.
- [ ] The implementation has been tested on mobile and desktop viewports.
- [ ] The recommendation has been adapted to context rather than applied blindly.
