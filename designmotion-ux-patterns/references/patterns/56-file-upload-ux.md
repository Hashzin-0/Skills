# 56. File Upload UX

- **Source category:** `forms`
- **Official source:** [https://designmotionhq.com/patterns/file-upload-ux](https://designmotionhq.com/patterns/file-upload-ux)
- **Related skill:** `forms-inputs`

> This document is an original technical summary of the linked public page, not a verbatim reproduction. Treat specific numbers and examples as source-informed heuristics and validate them against the product context, accessibility requirements, real data, and user testing.

## Key insights

- Upload flow includes drag feedback, progress, preview, queue and recovery.
- A dropzone should react when a file hovers over it
- progress should reflect real work.
- Users need clear file constraints and the ability to retry failed uploads.

## Do / Don't

### Do
- Show accepted formats/size
- report real progress
- preview and retry
- make drag-and-drop optional.

### Don't
- Use a bare dropzone with no hover response
- show a spinner when percent is known
- lose the queue on one file failure.

## Verification checklist

- [ ] The default state and all relevant alternate states are defined.
- [ ] Mouse, keyboard, and touch interactions have been considered where applicable.
- [ ] The interface communicates what happened and what the user can do next.
- [ ] Errors and reversible actions have a predictable recovery path.
- [ ] The implementation has been tested on mobile and desktop viewports.
- [ ] The recommendation has been adapted to context rather than applied blindly.
