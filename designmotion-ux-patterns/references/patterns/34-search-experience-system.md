# 34. Search Experience System

- **Source category:** `interactions`
- **Official source:** [https://designmotionhq.com/patterns/search-experience-system](https://designmotionhq.com/patterns/search-experience-system)
- **Related skill:** `interaction-patterns`

> This document is an original technical summary of the linked public page, not a verbatim reproduction. Treat specific numbers and examples as source-informed heuristics and validate them against the product context, accessibility requirements, real data, and user testing.

## Key insights

- Search comprises discoverability, query entry, suggestions, results, empty/error states and refinement.
- Placeholder copy should specify searchable fields
- recent searches help at focus
- autocomplete should be ranked and categorized rather than alphabetical noise.

## Do / Don't

### Do
- Tell users what can be searched
- surface useful recents
- rank and categorize suggestions
- provide clear no-results recovery.

### Don't
- Use only “Search” as placeholder
- show arbitrary autocomplete
- leave zero-result states without suggestions or filter reset.

## Verification checklist

- [ ] The default state and all relevant alternate states are defined.
- [ ] Mouse, keyboard, and touch interactions have been considered where applicable.
- [ ] The interface communicates what happened and what the user can do next.
- [ ] Errors and reversible actions have a predictable recovery path.
- [ ] The implementation has been tested on mobile and desktop viewports.
- [ ] The recommendation has been adapted to context rather than applied blindly.
