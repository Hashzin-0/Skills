---
name: ux-audit-orchestrator
description: Use when auditing or implementing a UI/UX feature end-to-end, selecting the relevant design patterns, and turning findings into actionable acceptance criteria.
---

# UX Audit Orchestrator

## Workflow

1. Map the screen, user goal, dominant action, device contexts and high-risk operations.
2. Review the 76-pattern catalogue at `references/../CATALOG-76-UX-PATTERNS.md`; select only relevant patterns and explain why each applies.
3. Separate findings into critical usability/accessibility defects, behavioral inconsistencies, visual-system drift and optional polish.
4. For each finding record: evidence, user impact, source pattern, recommended change, acceptance test and regression risk.
5. Implement the smallest reusable change consistent with the current architecture.
6. Verify empty/loading/error/success states, keyboard and touch paths, responsive layouts, and failure recovery.
7. Summarize completed work and unverified items without overstating results.

## Required output

- **Key insights:** the most consequential design decisions.
- **Do / Don't:** concrete implementation rules.
- **Prioritized findings:** severity, impact, evidence and suggested fix.
- **Acceptance criteria:** observable and testable.
- **Validation:** commands/tests actually run and remaining gaps.
