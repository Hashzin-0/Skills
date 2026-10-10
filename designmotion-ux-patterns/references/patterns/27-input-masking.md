# 27. Input Masking

- **Source category:** `forms`
- **Official source:** [https://designmotionhq.com/patterns/input-masking](https://designmotionhq.com/patterns/input-masking)
- **Related skill:** `forms-inputs`

> This document is an original technical summary of the linked public page, not a verbatim reproduction. Treat specific numbers and examples as source-informed heuristics and validate them against the product context, accessibility requirements, real data, and user testing.

## Key insights

- Masks should make structured values readable without fighting editing.
- Preserve caret position when inserting separators, accept and normalize pasted values, validate after the user finishes a field, and store normalized raw values rather than presentation formatting.

## Do / Don't

### Do
- Format long numbers into readable groups
- normalize pasted input
- store canonical raw values.

### Don't
- Jump the caret to the end after formatting
- reject valid paste because of separators
- store formatting characters as canonical data.

## Verification checklist

- [ ] The default state and all relevant alternate states are defined.
- [ ] Mouse, keyboard, and touch interactions have been considered where applicable.
- [ ] The interface communicates what happened and what the user can do next.
- [ ] Errors and reversible actions have a predictable recovery path.
- [ ] The implementation has been tested on mobile and desktop viewports.
- [ ] The recommendation has been adapted to context rather than applied blindly.
