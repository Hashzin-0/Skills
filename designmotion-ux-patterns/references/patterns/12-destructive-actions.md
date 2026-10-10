# 12. Destructive Actions

- **Source category:** `interactions`
- **Official source:** [https://designmotionhq.com/patterns/destructive-actions](https://designmotionhq.com/patterns/destructive-actions)
- **Related skill:** `interaction-patterns`

> This document is an original technical summary of the linked public page, not a verbatim reproduction. Treat specific numbers and examples as source-informed heuristics and validate them against the product context, accessibility requirements, real data, and user testing.

## Key insights

- Destructive safety is a language and placement system, not merely a red button.
- Name the action (“Delete project”), reserve red for destructive consequences, separate danger zones and add friction proportional to irreversibility.
- A hold gesture or deletion grace period can help.

## Do / Don't

### Do
- Use explicit action verbs
- place destructive actions away from routine confirmation targets
- offer a cancellable cooldown where feasible.

### Don't
- Use generic Yes/No copy
- put Delete where the primary confirmation normally sits
- use red for unrelated actions until destructive meaning is diluted.

## Verification checklist

- [ ] The default state and all relevant alternate states are defined.
- [ ] Mouse, keyboard, and touch interactions have been considered where applicable.
- [ ] The interface communicates what happened and what the user can do next.
- [ ] Errors and reversible actions have a predictable recovery path.
- [ ] The implementation has been tested on mobile and desktop viewports.
- [ ] The recommendation has been adapted to context rather than applied blindly.
