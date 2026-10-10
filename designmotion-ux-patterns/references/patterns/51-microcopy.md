# 51. Microcopy

- **Source category:** `content`
- **Official source:** [https://designmotionhq.com/patterns/microcopy](https://designmotionhq.com/patterns/microcopy)
- **Related skill:** `content-conversion`

> This document is an original technical summary of the linked public page, not a verbatim reproduction. Treat specific numbers and examples as source-informed heuristics and validate them against the product context, accessibility requirements, real data, and user testing.

## Key insights

- Words on buttons and in errors guide behavior.
- Name the user’s outcome rather than the interface mechanic, turn errors into useful next steps and use empty-state text as onboarding.
- Copy should be specific, concise and consistent with the product voice.

## Do / Don't

### Do
- Use action labels that explain the result
- explain the issue and next step
- match copy to context.

### Don't
- Use “Submit” or “Invalid input” where a specific label helps
- blame the user
- use jargon or a generic message for every state.

## Verification checklist

- [ ] The default state and all relevant alternate states are defined.
- [ ] Mouse, keyboard, and touch interactions have been considered where applicable.
- [ ] The interface communicates what happened and what the user can do next.
- [ ] Errors and reversible actions have a predictable recovery path.
- [ ] The implementation has been tested on mobile and desktop viewports.
- [ ] The recommendation has been adapted to context rather than applied blindly.
