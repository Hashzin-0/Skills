# 03. Reverse-Engineered Linear

- **Source category:** `visual-design`
- **Official source:** [https://designmotionhq.com/patterns/reverse-engineered-linear](https://designmotionhq.com/patterns/reverse-engineered-linear)
- **Related skill:** `visual-design-systems`

> This document is an original technical summary of the linked public page, not a verbatim reproduction. Treat specific numbers and examples as source-informed heuristics and validate them against the product context, accessibility requirements, real data, and user testing.

## Key insights

- Perceived product quality comes from disciplined density, alignment, restrained color and motion.
- A compact interface can expose more useful information without feeling cluttered when a consistent grid and type hierarchy carry the load.
- Surface-value changes can create depth without excessive shadows.

## Do / Don't

### Do
- Use a 4px spacing grid
- align labels left and numeric values right
- make shortcuts discoverable
- keep transitions short and consistent.

### Don't
- Use shadows as the main separator
- encode every status with bright pills
- use bounce/overshoot indiscriminately or inconsistent spacing.

## Verification checklist

- [ ] The default state and all relevant alternate states are defined.
- [ ] Mouse, keyboard, and touch interactions have been considered where applicable.
- [ ] The interface communicates what happened and what the user can do next.
- [ ] Errors and reversible actions have a predictable recovery path.
- [ ] The implementation has been tested on mobile and desktop viewports.
- [ ] The recommendation has been adapted to context rather than applied blindly.
