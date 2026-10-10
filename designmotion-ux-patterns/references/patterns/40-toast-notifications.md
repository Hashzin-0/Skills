# 40. Toast Notifications

- **Source category:** `feedback`
- **Official source:** [https://designmotionhq.com/patterns/toast-notifications](https://designmotionhq.com/patterns/toast-notifications)
- **Related skill:** `feedback-loading-errors`

> This document is an original technical summary of the linked public page, not a verbatim reproduction. Treat specific numbers and examples as source-informed heuristics and validate them against the product context, accessibility requirements, real data, and user testing.

## Key insights

- Toasts should confirm lightweight events without blocking work.
- Keep copy concise, position consistently, avoid rapid stacking and provide an undo/action when the result is reversible.
- Important messages must remain available if a transient toast disappears.

## Do / Don't

### Do
- Say what happened and offer an action where useful
- make duration sensible
- ensure screen-reader announcement.

### Don't
- Use toast for critical blocking errors
- dismiss before text can be read
- stack so many notifications that they cover controls.

## Verification checklist

- [ ] The default state and all relevant alternate states are defined.
- [ ] Mouse, keyboard, and touch interactions have been considered where applicable.
- [ ] The interface communicates what happened and what the user can do next.
- [ ] Errors and reversible actions have a predictable recovery path.
- [ ] The implementation has been tested on mobile and desktop viewports.
- [ ] The recommendation has been adapted to context rather than applied blindly.
