# 07. Behind the Button

- **Source category:** `interactions`
- **Official source:** [https://designmotionhq.com/patterns/behind-the-button](https://designmotionhq.com/patterns/behind-the-button)
- **Related skill:** `interaction-patterns`

> This document is an original technical summary of the linked public page, not a verbatim reproduction. Treat specific numbers and examples as source-informed heuristics and validate them against the product context, accessibility requirements, real data, and user testing.

## Key insights

- Client validation improves speed but is not security
- the server must repeat checks and compute prices from trusted data.
- Related writes such as order, inventory and payment should be transactional.
- Reconcile the interface with server truth after completion
- optimistic updates are best for cheap, reversible actions.

## Do / Don't

### Do
- Validate on client and server
- wrap dependent writes in a transaction
- replace temporary UI data with authoritative server response.

### Don't
- Trust client-provided totals
- leave partially written orders after a failure
- show a guessed ID as if it came from the server.

## Verification checklist

- [ ] The default state and all relevant alternate states are defined.
- [ ] Mouse, keyboard, and touch interactions have been considered where applicable.
- [ ] The interface communicates what happened and what the user can do next.
- [ ] Errors and reversible actions have a predictable recovery path.
- [ ] The implementation has been tested on mobile and desktop viewports.
- [ ] The recommendation has been adapted to context rather than applied blindly.
