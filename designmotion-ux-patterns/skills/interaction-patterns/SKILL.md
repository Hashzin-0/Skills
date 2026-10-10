---
name: interaction-patterns
description: Use for bulk actions, menus, editing, drag-and-drop, hover, swipes, filters, command palettes, tables, ratings and disclosures. Define states, input modalities, scope, keyboard behavior and reversibility.
---

# Interaction Patterns

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

- [CSS Has Selector](../../references/patterns/01-css-has-selector.md) — [official source](https://designmotionhq.com/patterns/css-has-selector)
- [Bulk Actions](../../references/patterns/04-bulk-actions.md) — [official source](https://designmotionhq.com/patterns/bulk-actions)
- [Disabled Buttons](../../references/patterns/05-disabled-buttons.md) — [official source](https://designmotionhq.com/patterns/disabled-buttons)
- [Hover Trap](../../references/patterns/06-hover-trap.md) — [official source](https://designmotionhq.com/patterns/hover-trap)
- [Behind the Button](../../references/patterns/07-behind-the-button.md) — [official source](https://designmotionhq.com/patterns/behind-the-button)
- [Inline Editing](../../references/patterns/10-inline-editing.md) — [official source](https://designmotionhq.com/patterns/inline-editing)
- [Live Cursors](../../references/patterns/11-live-cursors.md) — [official source](https://designmotionhq.com/patterns/live-cursors)
- [Destructive Actions](../../references/patterns/12-destructive-actions.md) — [official source](https://designmotionhq.com/patterns/destructive-actions)
- [Context Menu](../../references/patterns/13-context-menu.md) — [official source](https://designmotionhq.com/patterns/context-menu)
- [Drag and Drop](../../references/patterns/19-drag-and-drop.md) — [official source](https://designmotionhq.com/patterns/drag-and-drop)
- [Search Experience System](../../references/patterns/34-search-experience-system.md) — [official source](https://designmotionhq.com/patterns/search-experience-system)
- [Star Rating](../../references/patterns/37-star-rating.md) — [official source](https://designmotionhq.com/patterns/star-rating)
- [Tooltip Design](../../references/patterns/42-tooltip-design.md) — [official source](https://designmotionhq.com/patterns/tooltip-design)
- [Swipe Actions](../../references/patterns/47-swipe-actions.md) — [official source](https://designmotionhq.com/patterns/swipe-actions)
- [Bottom Sheets](../../references/patterns/49-bottom-sheets.md) — [official source](https://designmotionhq.com/patterns/bottom-sheets)
- [Command Palette](../../references/patterns/58-command-palette.md) — [official source](https://designmotionhq.com/patterns/command-palette)
- [Filter Chips](../../references/patterns/59-filter-chips.md) — [official source](https://designmotionhq.com/patterns/filter-chips)
- [Accordion Disclosure](../../references/patterns/62-accordion-disclosure.md) — [official source](https://designmotionhq.com/patterns/accordion-disclosure)
- [Data Table](../../references/patterns/63-data-table.md) — [official source](https://designmotionhq.com/patterns/data-table)
- [Modal Hierarchy](../../references/patterns/65-modal-hierarchy.md) — [official source](https://designmotionhq.com/patterns/modal-hierarchy)

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
