# 36. Shadow Elevation

- **Source category:** `visual-design`
- **Official source:** [https://designmotionhq.com/patterns/shadow-elevation](https://designmotionhq.com/patterns/shadow-elevation)
- **Related skill:** `visual-design-systems`

> This document is an original technical summary of the linked public page, not a verbatim reproduction. Treat specific numbers and examples as source-informed heuristics and validate them against the product context, accessibility requirements, real data, and user testing.

## Key insights

- Shadows encode depth and hierarchy rather than decoration.
- Layer contact, mid-distance and ambient shadows to produce more believable elevation
- use consistent levels so surfaces communicate the same spatial logic across screens.

## Do / Don't

### Do
- Define a small elevation scale
- use layered subtle shadows
- test shadows against light and dark surfaces.

### Don't
- Apply one large black blur to every card
- use shadows where a border or surface contrast is clearer
- assign inconsistent shadow strength.

## Verification checklist

- [ ] The default state and all relevant alternate states are defined.
- [ ] Mouse, keyboard, and touch interactions have been considered where applicable.
- [ ] The interface communicates what happened and what the user can do next.
- [ ] Errors and reversible actions have a predictable recovery path.
- [ ] The implementation has been tested on mobile and desktop viewports.
- [ ] The recommendation has been adapted to context rather than applied blindly.
