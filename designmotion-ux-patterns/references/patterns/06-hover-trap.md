# 06. Hover Trap

- **Source category:** `interactions`
- **Official source:** [https://designmotionhq.com/patterns/hover-trap](https://designmotionhq.com/patterns/hover-trap)
- **Related skill:** `interaction-patterns`

> This document is an original technical summary of the linked public page, not a verbatim reproduction. Treat specific numbers and examples as source-informed heuristics and validate them against the product context, accessibility requirements, real data, and user testing.

## Key insights

- Touch interfaces have no true hover
- the first tap may leave a sticky hover state.
- Hover should reveal secondary extras only, never a primary action.
- Query input capabilities with media features rather than user-agent sniffing, and give touch targets sufficient hit area.

## Do / Don't

### Do
- Gate hover styles with `@media (hover: hover)`
- keep primary actions tap-accessible
- aim for about 44px hit targets even when icons are smaller.

### Don't
- Hide essential actions behind hover
- infer interaction capability from user-agent strings
- make the clickable target only as large as the glyph.

## Verification checklist

- [ ] The default state and all relevant alternate states are defined.
- [ ] Mouse, keyboard, and touch interactions have been considered where applicable.
- [ ] The interface communicates what happened and what the user can do next.
- [ ] Errors and reversible actions have a predictable recovery path.
- [ ] The implementation has been tested on mobile and desktop viewports.
- [ ] The recommendation has been adapted to context rather than applied blindly.
