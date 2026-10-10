# 64. Card Hover Anatomy

- **Source category:** `motion`
- **Official source:** [https://designmotionhq.com/patterns/card-hover-anatomy](https://designmotionhq.com/patterns/card-hover-anatomy)
- **Related skill:** `motion-animation`

> This document is an original technical summary of the linked public page, not a verbatim reproduction. Treat specific numbers and examples as source-informed heuristics and validate them against the product context, accessibility requirements, real data, and user testing.

## Key insights

- A card can feel interactive through a modest lift, shadow change, border accent and staggered action reveal.
- Keep the card’s outer footprint stable
- scale an image inside a clipped frame instead of scaling the whole card and shifting neighbors.

## Do / Don't

### Do
- Use a restrained ~200ms ease-out lift
- stagger secondary actions
- scale media inside an overflow-hidden frame.

### Don't
- Scale the entire card
- let actions cover the title or spill outside
- use twitchy or sluggish timing.

## Verification checklist

- [ ] The default state and all relevant alternate states are defined.
- [ ] Mouse, keyboard, and touch interactions have been considered where applicable.
- [ ] The interface communicates what happened and what the user can do next.
- [ ] Errors and reversible actions have a predictable recovery path.
- [ ] The implementation has been tested on mobile and desktop viewports.
- [ ] The recommendation has been adapted to context rather than applied blindly.
