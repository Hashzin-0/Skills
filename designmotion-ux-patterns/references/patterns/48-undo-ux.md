# 48. Undo UX

- **Source category:** `feedback`
- **Official source:** [https://designmotionhq.com/patterns/undo-ux](https://designmotionhq.com/patterns/undo-ux)
- **Related skill:** `feedback-loading-errors`

> This document is an original technical summary of the linked public page, not a verbatim reproduction. Treat specific numbers and examples as source-informed heuristics and validate them against the product context, accessibility requirements, real data, and user testing.

## Key insights

- Undo is often better than asking every user to confirm.
- A soft-delete model keeps records recoverable for a retention period
- friction belongs on actions that truly cannot be reversed.
- Make the undo window clear and the underlying operation genuinely reversible.

## Do / Don't

### Do
- Prefer reversible state transitions
- keep deleted data in recoverable trash when appropriate
- reserve typed confirmation for irreversible actions.

### Don't
- Use confirmation modals for every small mistake
- permanently delete before the undo window closes
- promise undo without retaining enough state.

## Verification checklist

- [ ] The default state and all relevant alternate states are defined.
- [ ] Mouse, keyboard, and touch interactions have been considered where applicable.
- [ ] The interface communicates what happened and what the user can do next.
- [ ] Errors and reversible actions have a predictable recovery path.
- [ ] The implementation has been tested on mobile and desktop viewports.
- [ ] The recommendation has been adapted to context rather than applied blindly.
