# 14. Animation Timing

- **Source category:** `motion`
- **Official source:** [https://designmotionhq.com/patterns/animation-timing](https://designmotionhq.com/patterns/animation-timing)
- **Related skill:** `motion-animation`

> This document is an original technical summary of the linked public page, not a verbatim reproduction. Treat specific numbers and examples as source-informed heuristics and validate them against the product context, accessibility requirements, real data, and user testing.

## Key insights

- Timing communicates responsiveness.
- The source recommends entrances around 200–300ms, faster exits around 150ms, interaction feedback under 100ms, and ~50ms stagger for lists.
- Longer motion should be reserved for events that genuinely need attention.

## Do / Don't

### Do
- Use ease-out for entrances
- make dismissal faster than arrival
- respect reduced-motion preferences and keep timing consistent.

### Don't
- Stretch routine entrances past ~300ms
- use identical entrance/exit duration by default
- delay basic press feedback.

## Verification checklist

- [ ] The default state and all relevant alternate states are defined.
- [ ] Mouse, keyboard, and touch interactions have been considered where applicable.
- [ ] The interface communicates what happened and what the user can do next.
- [ ] Errors and reversible actions have a predictable recovery path.
- [ ] The implementation has been tested on mobile and desktop viewports.
- [ ] The recommendation has been adapted to context rather than applied blindly.
