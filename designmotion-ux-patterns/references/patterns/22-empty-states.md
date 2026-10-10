# 22. Empty States

- **Source category:** `content`
- **Official source:** [https://designmotionhq.com/patterns/empty-states](https://designmotionhq.com/patterns/empty-states)
- **Related skill:** `content-conversion`

> This document is an original technical summary of the linked public page, not a verbatim reproduction. Treat specific numbers and examples as source-informed heuristics and validate them against the product context, accessibility requirements, real data, and user testing.

## Key insights

- A blank screen looks broken.
- Distinguish first-run, no-results, error and filtered-out states
- each should explain what happened and offer the next meaningful action.
- An illustrative preview can teach the shape of future content.

## Do / Don't

### Do
- Use contextual copy and one clear next action
- distinguish different kinds of emptiness
- make first-run states useful onboarding.

### Don't
- Show “No data” alone
- offer only a generic refresh action
- reuse one empty-state message for every cause.

## Verification checklist

- [ ] The default state and all relevant alternate states are defined.
- [ ] Mouse, keyboard, and touch interactions have been considered where applicable.
- [ ] The interface communicates what happened and what the user can do next.
- [ ] Errors and reversible actions have a predictable recovery path.
- [ ] The implementation has been tested on mobile and desktop viewports.
- [ ] The recommendation has been adapted to context rather than applied blindly.
