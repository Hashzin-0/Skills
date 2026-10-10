# 30. Notification System

- **Source category:** `feedback`
- **Official source:** [https://designmotionhq.com/patterns/notification-system](https://designmotionhq.com/patterns/notification-system)
- **Related skill:** `feedback-loading-errors`

> This document is an original technical summary of the linked public page, not a verbatim reproduction. Treat specific numbers and examples as source-informed heuristics and validate them against the product context, accessibility requirements, real data, and user testing.

## Key insights

- Notifications are a family of surfaces: toast, banner, modal and badge.
- Event severity and persistence determine the right surface.
- Toasts can disappear
- banners persist until cleared
- modals block
- badges quietly count unresolved items.

## Do / Don't

### Do
- Choose surface by severity
- keep persistence behavior predictable
- avoid stacking blocking dialogs.

### Don't
- Show every event as a toast
- queue multiple modals
- dismiss persistent critical warnings automatically.

## Verification checklist

- [ ] The default state and all relevant alternate states are defined.
- [ ] Mouse, keyboard, and touch interactions have been considered where applicable.
- [ ] The interface communicates what happened and what the user can do next.
- [ ] Errors and reversible actions have a predictable recovery path.
- [ ] The implementation has been tested on mobile and desktop viewports.
- [ ] The recommendation has been adapted to context rather than applied blindly.
