# 21. Easing Curves

- **Source category:** `motion`
- **Official source:** [https://designmotionhq.com/patterns/easing-curves](https://designmotionhq.com/patterns/easing-curves)
- **Related skill:** `motion-animation`

> This document is an original technical summary of the linked public page, not a verbatim reproduction. Treat specific numbers and examples as source-informed heuristics and validate them against the product context, accessibility requirements, real data, and user testing.

## Key insights

- Easing defines the perceived character of movement even when distance and duration stay constant.
- Linear motion suits continuous movement
- ease-out is a safe entrance default
- springs can add liveliness when restrained.
- Reuse a small curve set across the product.

## Do / Don't

### Do
- Use ease-out for arrivals
- reserve linear for continuous movement
- reuse a coherent motion vocabulary.

### Don't
- Use linear easing for every UI entrance
- overdo spring bounce
- give similar components unrelated motion curves.

## Verification checklist

- [ ] The default state and all relevant alternate states are defined.
- [ ] Mouse, keyboard, and touch interactions have been considered where applicable.
- [ ] The interface communicates what happened and what the user can do next.
- [ ] Errors and reversible actions have a predictable recovery path.
- [ ] The implementation has been tested on mobile and desktop viewports.
- [ ] The recommendation has been adapted to context rather than applied blindly.
