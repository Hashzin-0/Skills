# 68. Scroll-Driven Animations

- **Source category:** `motion`
- **Official source:** [https://designmotionhq.com/patterns/scroll-driven-animations](https://designmotionhq.com/patterns/scroll-driven-animations)
- **Related skill:** `motion-animation`

> This document is an original technical summary of the linked public page, not a verbatim reproduction. Treat specific numbers and examples as source-informed heuristics and validate them against the product context, accessibility requirements, real data, and user testing.

## Key insights

- CSS scroll timelines can bind animation progress to scrolling without JavaScript.
- `animation-range` controls when the animation runs and `view()` can target elements entering the viewport.
- Feature support and reduced-motion behavior must be checked.

## Do / Don't

### Do
- Use CSS timelines when appropriate
- tune trigger ranges
- provide fallback and reduced-motion behavior.

### Don't
- Assume every browser supports the same timeline features
- animate essential content so it is inaccessible without motion
- add JS when CSS is sufficient.

## Verification checklist

- [ ] The default state and all relevant alternate states are defined.
- [ ] Mouse, keyboard, and touch interactions have been considered where applicable.
- [ ] The interface communicates what happened and what the user can do next.
- [ ] Errors and reversible actions have a predictable recovery path.
- [ ] The implementation has been tested on mobile and desktop viewports.
- [ ] The recommendation has been adapted to context rather than applied blindly.
