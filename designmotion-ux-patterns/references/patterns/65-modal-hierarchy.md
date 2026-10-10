# 65. Modal Hierarchy

- **Source category:** `overlays`
- **Official source:** [https://designmotionhq.com/patterns/modal-hierarchy](https://designmotionhq.com/patterns/modal-hierarchy)
- **Related skill:** `interaction-patterns`

> This document is an original technical summary of the linked public page, not a verbatim reproduction. Treat specific numbers and examples as source-informed heuristics and validate them against the product context, accessibility requirements, real data, and user testing.

## Key insights

- Ask whether the action blocks the user before choosing an overlay.
- Modals are for critical decisions
- bottom sheets preserve mobile context
- drawers suit navigation
- popovers suit small contextual actions.
- Match interruption to intent.

## Do / Don't

### Do
- Use the lightest surface that satisfies the task
- reserve modal dialogs for critical blockers
- anchor popovers to triggers.

### Don't
- Use a full-screen scrim for routine actions
- put navigation inside blocking dialogs
- make every overlay behave the same.

## Verification checklist

- [ ] The default state and all relevant alternate states are defined.
- [ ] Mouse, keyboard, and touch interactions have been considered where applicable.
- [ ] The interface communicates what happened and what the user can do next.
- [ ] Errors and reversible actions have a predictable recovery path.
- [ ] The implementation has been tested on mobile and desktop viewports.
- [ ] The recommendation has been adapted to context rather than applied blindly.
