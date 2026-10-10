---
name: ux-fundamentals
description: Use when auditing hierarchy, cognition, content structure, empty/error states and general behavior. Start from the user task, identify the governing principle, and verify that the pattern is context-appropriate.
---

# UX Fundamentals

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

- [Empty States](../../references/patterns/22-empty-states.md) — [official source](https://designmotionhq.com/patterns/empty-states)
- [Proximity Rule](../../references/patterns/32-proximity-rule.md) — [official source](https://designmotionhq.com/patterns/proximity-rule)
- [Peak-End Rule](../../references/patterns/31-peak-end-rule.md) — [official source](https://designmotionhq.com/patterns/peak-end-rule)
- [Serial Position](../../references/patterns/35-serial-position.md) — [official source](https://designmotionhq.com/patterns/serial-position)
- [Zeigarnik Effect](../../references/patterns/45-zeigarnik-effect.md) — [official source](https://designmotionhq.com/patterns/zeigarnik-effect)
- [Microcopy](../../references/patterns/51-microcopy.md) — [official source](https://designmotionhq.com/patterns/microcopy)
- [Landing Page Skeleton](../../references/patterns/67-landing-page-skeleton.md) — [official source](https://designmotionhq.com/patterns/landing-page-skeleton)

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
