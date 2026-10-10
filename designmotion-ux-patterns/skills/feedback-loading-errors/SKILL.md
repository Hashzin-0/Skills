---
name: feedback-loading-errors
description: Use for loading, optimistic UI, undo, notifications, toasts, error states and latency. Choose feedback based on duration, severity, confidence and recoverability; never fake system truth.
---

# Feedback, Loading and Errors

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

- [Doherty Threshold](../../references/patterns/18-doherty-threshold.md) — [official source](https://designmotionhq.com/patterns/doherty-threshold)
- [Error States](../../references/patterns/23-error-states.md) — [official source](https://designmotionhq.com/patterns/error-states)
- [Loading States System](../../references/patterns/28-loading-states-system.md) — [official source](https://designmotionhq.com/patterns/loading-states-system)
- [Notification System](../../references/patterns/30-notification-system.md) — [official source](https://designmotionhq.com/patterns/notification-system)
- [Toast Notifications](../../references/patterns/40-toast-notifications.md) — [official source](https://designmotionhq.com/patterns/toast-notifications)
- [Undo UX](../../references/patterns/48-undo-ux.md) — [official source](https://designmotionhq.com/patterns/undo-ux)
- [Optimistic UI](../../references/patterns/52-optimistic-ui.md) — [official source](https://designmotionhq.com/patterns/optimistic-ui)
- [Skeleton Loading](../../references/patterns/54-skeleton-loading.md) — [official source](https://designmotionhq.com/patterns/skeleton-loading)

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
