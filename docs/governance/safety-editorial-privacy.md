# Safety, editorial, privacy, and signposting framework

Status: working governance specification for product and professional review.
It is not legal, clinical, or regulatory advice.

## 1. Non-negotiable product boundaries

DevelopMonth may:

- Provide educational child-development and parenting information
- Offer practical ideas for play, connection, movement, communication, feeding,
  sleep rhythms, and family support
- Help parents organise information they choose to add
- Summarise parent-authored notes with clear source attribution
- Help parents prepare questions
- Link to reviewed professional and public-health guidance
- Signpost calmly when professional support may be useful

DevelopMonth must not:

- Diagnose or suggest a diagnosis
- Provide treatment or a treatment plan
- Present an automated medical or developmental assessment
- Replace a GP, public health nurse, paediatrician, therapist, emergency
  service, or care team
- Predict an individual child’s outcome
- Guarantee “normal” development
- Score, rank, or compare children
- Infer sensitive facts the parent did not provide
- Create surveillance-style timelines or hidden profiles
- Present generated content as clinician-authored

## 2. Content states

Every content item should have one of four visible internal states:

1. **Draft:** being written; not publishable.
2. **Editorial review:** checked for clarity, tone, accessibility, and product
   consistency.
3. **Professional review:** checked by appropriately qualified reviewers for
   claims and signposting.
4. **Published:** approved, versioned, sourced, and assigned a review date.

Content becomes unpublished when its review date expires or an authoritative
source changes materially.

## 3. Required content record

For every published guidance item, record:

- Unique content identifier
- Month and topic
- Parent-facing copy
- Claim type
- Source links and access dates
- Jurisdiction
- Author and editorial reviewer
- Professional reviewer and scope of review
- Approval date
- Version
- Next review date
- Known limitations
- Related signposting and emergency content

## 4. Editorial tone rules

Lead with:

- Growth, connection, play, and curiosity
- Everyday family life
- Parent confidence
- Variation and possibility
- Optional, practical support

Avoid:

- “Your child should…”
- “Normal” versus “abnormal”
- Fear-led framing
- Achievement language
- Guarantees
- Implying that diligent tracking prevents developmental difficulty
- Treating missed entries as a failure

Use “may”, “might”, “some children”, and “families may wish to ask” where
appropriate. Plain language must not remove important safety nuance.

## 5. Signposting model

### Keep supporting

Positive everyday guidance for play, connection, routines, and parent
confidence.

### Try this next

A low-risk practical idea, a question to reflect on, or a topic to observe.
This is not treatment.

### Ask for guidance

Suggest contacting an appropriate professional when something persists,
changes, worries the parent, or falls outside safe general guidance.

### Urgent help

Urgent-care content must:

- Come from current authoritative local sources
- Be reviewed by appropriately qualified professionals
- State the relevant service and jurisdiction
- Avoid attempting automated triage
- Make uncertainty explicit
- Be maintained separately from general monthly content

## 6. Personalisation and Companion rules

The parent must know:

- What information is being used
- Why it is being used
- Which output came from parent notes, published guidance, or generation
- How to exclude a source
- How to correct, delete, export, or stop personalisation

The Companion must:

- Use only information the parent deliberately supplies or selects
- Prefer summaries and organisation over inference
- Cite the relevant DevelopMonth pack when offering guidance
- Preserve uncertainty and variation
- Never manufacture a professional opinion
- Never hide safety information because personalisation predicts low concern
- Route high-risk language to approved signposting rather than improvise

Any future automated system requires documented evaluation for accuracy,
harmful omission, false reassurance, unnecessary anxiety, bias, privacy
leakage, and age/jurisdiction mismatch.

## 7. Child and family privacy principles

Child information is especially sensitive. Before technical implementation:

- Complete a data protection impact assessment.
- Obtain jurisdiction-specific legal advice.
- Define the lawful basis and roles of all processors/controllers.
- Collect the minimum data required for a named user benefit.
- Keep optional information genuinely optional.
- Do not use child data for advertising.
- Do not sell child or family data.
- Do not train external models on family content without a separate, explicit,
  informed decision and appropriate safeguards.
- Use short, justified retention periods.
- Provide deletion and export controls that are understandable to parents.
- Separate product analytics from family content.
- Protect backups, logs, support tooling, and administrative access.

The static prototype stores nothing and uses fictional content.

## 8. Safety event workflow

When potentially harmful or incorrect content is reported:

1. Record the exact content version and context.
2. Assess whether publication should be paused.
3. Escalate to the named editorial and professional owners.
4. Correct the content and related derivative outputs.
5. Record the rationale, reviewers, and release date.
6. Notify affected users when appropriate and legally required.
7. Review whether process or automated safeguards also failed.

## 9. Approval gates before live personal data

- Product boundary approved
- Privacy impact assessment completed
- Data map and retention schedule approved
- Security threat model completed
- Consent and parent controls tested
- Content governance operating with named owners
- Professional-review network established
- Incident response tested
- Companion evaluation plan approved
- Accessibility review completed

