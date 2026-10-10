---
name: forms-inputs
description: Use when designing form fields, validation, dates, masks, sliders, toggles, OTP, uploads, passwords and settings. Specify all states, keyboard/touch paths, validation timing, persistence and recovery.
---

# Forms and Inputs

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

- [Settings System](../../references/patterns/08-settings-system.md) — [official source](https://designmotionhq.com/patterns/settings-system)
- [Autosave](../../references/patterns/09-autosave-ux.md) — [official source](https://designmotionhq.com/patterns/autosave-ux)
- [Date Pickers](../../references/patterns/16-date-pickers.md) — [official source](https://designmotionhq.com/patterns/date-pickers)
- [Dropdown Design](../../references/patterns/20-dropdown-design.md) — [official source](https://designmotionhq.com/patterns/dropdown-design)
- [Form Field States](../../references/patterns/24-form-field-states.md) — [official source](https://designmotionhq.com/patterns/form-field-states)
- [Input Masking](../../references/patterns/27-input-masking.md) — [official source](https://designmotionhq.com/patterns/input-masking)
- [Range Sliders](../../references/patterns/33-range-sliders.md) — [official source](https://designmotionhq.com/patterns/range-sliders)
- [Stepper Wizard](../../references/patterns/38-stepper-wizard.md) — [official source](https://designmotionhq.com/patterns/stepper-wizard)
- [Toggle Anatomy](../../references/patterns/41-toggle-anatomy.md) — [official source](https://designmotionhq.com/patterns/toggle-anatomy)
- [Form Validation Timing](../../references/patterns/50-form-validation-timing.md) — [official source](https://designmotionhq.com/patterns/form-validation-timing)
- [Color Picker UX](../../references/patterns/55-color-picker-ux.md) — [official source](https://designmotionhq.com/patterns/color-picker-ux)
- [File Upload UX](../../references/patterns/56-file-upload-ux.md) — [official source](https://designmotionhq.com/patterns/file-upload-ux)
- [Password Field UX](../../references/patterns/57-password-field-ux.md) — [official source](https://designmotionhq.com/patterns/password-field-ux)
- [OTP Input](../../references/patterns/60-otp-input.md) — [official source](https://designmotionhq.com/patterns/otp-input)

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
