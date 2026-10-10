---
name: motion-animation
description: Use when adding transitions, easing, hover motion, scroll-driven effects and animated disclosure. Motion should communicate state, be consistent, fast enough for task flow, and respect reduced-motion preferences.
---

# Motion and Animation

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

- [Animation Timing](../../references/patterns/14-animation-timing.md) — [official source](https://designmotionhq.com/patterns/animation-timing)
- [Easing Curves](../../references/patterns/21-easing-curves.md) — [official source](https://designmotionhq.com/patterns/easing-curves)
- [Card Hover Anatomy](../../references/patterns/64-card-hover-anatomy.md) — [official source](https://designmotionhq.com/patterns/card-hover-anatomy)
- [Scroll-Driven Animations](../../references/patterns/68-scroll-driven-animations.md) — [official source](https://designmotionhq.com/patterns/scroll-driven-animations)

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
