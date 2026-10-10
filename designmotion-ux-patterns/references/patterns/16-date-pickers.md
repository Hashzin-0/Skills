# 16. Date Pickers

- **Source category:** `forms`
- **Official source:** [https://designmotionhq.com/patterns/date-pickers](https://designmotionhq.com/patterns/date-pickers)
- **Related skill:** `forms-inputs`

> This document is an original technical summary of the linked public page, not a verbatim reproduction. Treat specific numbers and examples as source-informed heuristics and validate them against the product context, accessibility requirements, real data, and user testing.

## Key insights

- Presets cover common date ranges and reduce clicks
- custom selection should preview the range and allow refinement.
- Two months side by side help boundary-crossing ranges.
- Keyboard support and a mobile full-screen sheet matter.

## Do / Don't

### Do
- Offer common presets
- support keyboard date entry/navigation
- make selected start/end and range preview clear.

### Don't
- Force repeated month navigation for nearby dates
- make the mobile UI a tiny desktop popover
- omit keyboard interaction.

## Verification checklist

- [ ] The default state and all relevant alternate states are defined.
- [ ] Mouse, keyboard, and touch interactions have been considered where applicable.
- [ ] The interface communicates what happened and what the user can do next.
- [ ] Errors and reversible actions have a predictable recovery path.
- [ ] The implementation has been tested on mobile and desktop viewports.
- [ ] The recommendation has been adapted to context rather than applied blindly.
