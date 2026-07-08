# Accessibility and visual QA checklist

## Status

This checklist is ready for the Month 6 research build. Code-level lint and
production-build checks do not constitute a completed accessibility audit.
Record the deployed commit, browsers, devices, assistive technology, findings,
and retest evidence for every run.

## Required environments

### Desktop

- Current Chrome on Windows
- Current Edge on Windows
- Current Safari on macOS
- Current Firefox

### Mobile

- Safari on a current iPhone
- Chrome on a current Android device
- At least one smaller viewport around 320–360 CSS pixels
- At least one larger phone viewport

### Assistive technology

- Keyboard only
- Windows screen reader such as NVDA
- VoiceOver on iPhone or macOS
- Browser zoom at 200%
- Increased text size on mobile
- Reduced-motion preference
- High-contrast/forced-colour mode where available

## Global prototype checks

- [ ] “Static prototype” is visible without scrolling excessively.
- [ ] “Fictional content” is visible.
- [ ] “Saves nothing” is visible.
- [ ] “Research and feedback only” is visible.
- [ ] Educational/professional-guidance boundary is understandable.
- [ ] Month 6 draft/review labels are readable and not colour-dependent.
- [ ] Keyboard focus is visible.
- [ ] Navigation order follows the visual order.
- [ ] No keyboard trap exists.
- [ ] Headings describe the page hierarchy.
- [ ] Links and buttons have understandable names.
- [ ] Disabled prototype controls are visibly and programmatically disabled.
- [ ] GrowthMap artwork is fully visible and not cropped.
- [ ] Content remains readable at 200% zoom.
- [ ] Horizontal scrolling is limited to the intentional mobile product nav.
- [ ] Colour contrast is checked with a recognised contrast tool.
- [ ] Information is not communicated by colour alone.

## Homepage and waitlist-preview checks

- [ ] Every waitlist CTA says preview.
- [ ] The form tells users to use fictional details.
- [ ] Browser autofill does not encourage real personal information.
- [ ] The form says nothing is saved or sent.
- [ ] The acknowledgement does not pretend to be marketing consent.
- [ ] The confirmation says the live waitlist will open later.
- [ ] The confirmation does not promise future contact.
- [ ] Error, focus, and confirmation states work with a screen reader.

## Prototype route checks

Test:

- `/prototype`
- `/prototype/journal`
- `/prototype/calendar`
- `/prototype/check-in`
- `/prototype/support-pack`
- `/prototype/companion`
- `/prototype/summary`

For each route:

- [ ] Research disclosure remains visible.
- [ ] Draft status remains visible.
- [ ] Mobile navigation identifies the active route.
- [ ] Fictional profile is not mistaken for real saved data.
- [ ] Cards do not clip at narrow widths.
- [ ] Long headings and disclaimers wrap without overlap.
- [ ] GrowthMap placements remain fully visible.
- [ ] Footer safety statement is readable.

## Content and emotional-safety review

- [ ] Positive development appears before signposting.
- [ ] Check-ins feel reflective, not scored or evaluative.
- [ ] No wording promises an outcome.
- [ ] No wording implies diagnosis, treatment, or automated assessment.
- [ ] Aion language is conditional and clearly conceptual.
- [ ] Parent control and optionality are explicit.
- [ ] Signposting is calm and does not create false reassurance.
- [ ] Draft content is not presented for parent reliance.

## Findings record

Log each issue in `docs/research/findings-register.md` with:

- Route and viewport/device
- Browser/assistive technology
- Reproduction steps
- Screenshot or recording reference where consent allows
- Severity
- Accessibility criterion or product principle
- Owner
- Fix
- Retest result

## Exit condition

Do not mark visual/accessibility QA complete until:

- Critical and high issues are resolved.
- Core routes pass keyboard and screen-reader review.
- Small-screen and 200% zoom layouts are usable.
- Contrast has been measured.
- Fixes have been retested on the affected environments.
