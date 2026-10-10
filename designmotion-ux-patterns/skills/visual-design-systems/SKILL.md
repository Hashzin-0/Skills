---
name: visual-design-systems
description: Use when reviewing typography, color, grids, tokens, spacing, depth, icons, radius, dark mode and visual hierarchy. Prefer reusable tokens, measurable contrast and consistent rules over isolated polish.
---

# Visual Design Systems

## Objective

Apply UX patterns with an emphasis on observable behavior, accessibility, consistency, and maintainability. Do not redesign based on aesthetic preference alone: tie each change to an identifiable user need, state, or risk.

## Required workflow

1. **Establish context:** identify the primary task, audience, device, frequency, reversibility, and failure impact.
2. **Inspect:** review the existing implementation, design tokens, components, states, responsive layout, semantics, and tests before changing anything.
3. **Map states:** document default, hover, focus, active, selected, loading, success, empty, error, disabled, and offline states when relevant.
4. **Apply a pattern:** treat the patterns below as design hypotheses; preserve existing behavior when it already meets the criteria.
5. **Implement:** reuse components and tokens; avoid duplicated CSS, redundant state, and unnecessary new dependencies.
6. **Verify:** test keyboard and touch paths, screen readers where applicable, mobile and desktop viewports, contrast, network failure, and recovery.
7. **Report:** list changed files, evidence, limitations, and tests actually run. Never claim a test was run when it was not.

## Patterns covered by this skill

- [De-AI Landing Hero](../../references/patterns/02-de-ai-landing-hero.md) — [official source](https://designmotionhq.com/patterns/de-ai-landing-hero)
- [Reverse-Engineered Linear](../../references/patterns/03-reverse-engineered-linear.md) — [official source](https://designmotionhq.com/patterns/reverse-engineered-linear)
- [Charts That Lie](../../references/patterns/15-charts-that-lie.md) — [official source](https://designmotionhq.com/patterns/charts-that-lie)
- [Design System Kit](../../references/patterns/17-design-system-kit.md) — [official source](https://designmotionhq.com/patterns/design-system-kit)
- [Golden Ratio](../../references/patterns/25-golden-ratio.md) — [official source](https://designmotionhq.com/patterns/golden-ratio)
- [Grid System](../../references/patterns/26-grid-system.md) — [official source](https://designmotionhq.com/patterns/grid-system)
- [Proximity Rule](../../references/patterns/32-proximity-rule.md) — [official source](https://designmotionhq.com/patterns/proximity-rule)
- [Shadow Elevation](../../references/patterns/36-shadow-elevation.md) — [official source](https://designmotionhq.com/patterns/shadow-elevation)
- [Visual Hierarchy](../../references/patterns/43-visual-hierarchy.md) — [official source](https://designmotionhq.com/patterns/visual-hierarchy)
- [Z-Index Mastery](../../references/patterns/44-z-index-mastery.md) — [official source](https://designmotionhq.com/patterns/z-index-mastery)
- [Gradient Design](../../references/patterns/53-gradient-design.md) — [official source](https://designmotionhq.com/patterns/gradient-design)
- [Icon Design Rules](../../references/patterns/66-icon-design-rules.md) — [official source](https://designmotionhq.com/patterns/icon-design-rules)
- [Design Tokens](../../references/patterns/69-design-tokens.md) — [official source](https://designmotionhq.com/patterns/design-tokens)
- [Color Accessibility](../../references/patterns/70-color-accessibility.md) — [official source](https://designmotionhq.com/patterns/color-accessibility)
- [Gestalt Laws](../../references/patterns/71-gestalt-laws.md) — [official source](https://designmotionhq.com/patterns/gestalt-laws)
- [Border Radius](../../references/patterns/72-border-radius.md) — [official source](https://designmotionhq.com/patterns/border-radius)
- [Dark Mode](../../references/patterns/73-dark-mode.md) — [official source](https://designmotionhq.com/patterns/dark-mode)
- [Von Restorff Effect](../../references/patterns/74-von-restorff.md) — [official source](https://designmotionhq.com/patterns/von-restorff)
- [Perfect Card](../../references/patterns/75-perfect-card.md) — [official source](https://designmotionhq.com/patterns/perfect-card)
- [Depth Layers](../../references/patterns/76-depth-layers.md) — [official source](https://designmotionhq.com/patterns/depth-layers)

## Acceptance criteria

- The change addresses an observable need without introducing unnecessary friction.
- States and transitions are predictable and communicated.
- The solution does not rely exclusively on hover, color, or a mouse.
- Displayed data reflects the system’s actual state.
- A recovery path exists for failures and reversible actions.
- The implementation reuses the design system and does not introduce inconsistencies.
- The result has been validated with tests, or outstanding validation work is explicitly documented.

## Safety and quality rules

- Do not copy entire third-party components or visual identities; use the principles to create an original implementation.
- Do not sacrifice accessibility, security, privacy, or clarity for conversion or aesthetics.
- Do not treat conversion percentages, timings, or proportions as causal promises; validate them with product data.
