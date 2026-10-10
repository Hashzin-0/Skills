# 15. Charts That Lie

- **Source category:** `data-visualization`
- **Official source:** [https://designmotionhq.com/patterns/charts-that-lie](https://designmotionhq.com/patterns/charts-that-lie)
- **Related skill:** `visual-design-systems`

> This document is an original technical summary of the linked public page, not a verbatim reproduction. Treat specific numbers and examples as source-informed heuristics and validate them against the product context, accessibility requirements, real data, and user testing.

## Key insights

- Chart form and axes change the story.
- Bar charts should generally start at zero
- lines show temporal change, bars compare values, and pie charts become hard to read with many slices.
- Aspect ratio, color encoding and chart titles influence interpretation.

## Do / Don't

### Do
- Choose chart type from the question
- label important series directly
- title the takeaway and keep axes honest.

### Don't
- Truncate a bar baseline to exaggerate change
- add decorative 3D/shadows
- use pie charts for many categories or color without semantic meaning.

## Verification checklist

- [ ] The default state and all relevant alternate states are defined.
- [ ] Mouse, keyboard, and touch interactions have been considered where applicable.
- [ ] The interface communicates what happened and what the user can do next.
- [ ] Errors and reversible actions have a predictable recovery path.
- [ ] The implementation has been tested on mobile and desktop viewports.
- [ ] The recommendation has been adapted to context rather than applied blindly.
