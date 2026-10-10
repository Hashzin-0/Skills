# 69. Design Tokens

- **Source category:** `visual-design`
- **Official source:** [https://designmotionhq.com/patterns/design-tokens](https://designmotionhq.com/patterns/design-tokens)
- **Related skill:** `visual-design-systems`

> This document is an original technical summary of the linked public page, not a verbatim reproduction. Treat specific numbers and examples as source-informed heuristics and validate them against the product context, accessibility requirements, real data, and user testing.

## Key insights

- Name tokens by meaning rather than literal value.
- Organize primitives, semantic tokens and component tokens so a single primitive change can propagate safely.
- Token names should remain truthful through rebrands and theme changes.

## Do / Don't

### Do
- Separate raw values from semantic intent and component usage
- centralize shared values
- validate token references.

### Don't
- Use names like `blue-500` for semantic intent
- hardcode repeated values in components
- create duplicate tokens with inconsistent meanings.

## Verification checklist

- [ ] The default state and all relevant alternate states are defined.
- [ ] Mouse, keyboard, and touch interactions have been considered where applicable.
- [ ] The interface communicates what happened and what the user can do next.
- [ ] Errors and reversible actions have a predictable recovery path.
- [ ] The implementation has been tested on mobile and desktop viewports.
- [ ] The recommendation has been adapted to context rather than applied blindly.
