# DevelopMonth development status and recommended evolution

**Report date:** 6 July 2026  
**Code baseline:** `1534fe6` — Replace DevelopMonth icon across site  
**Current stage:** Deployed, password-gated pre-MVP concept  
**Primary market assumption:** Ireland-first, not yet formally approved  

## 1. Executive summary

DevelopMonth has progressed well beyond a generic holding page. It now has a
clear brand, a positive parent-first proposition, a live homepage, a
password-gated Month 6 product prototype, a reusable support-pack content
structure, and unusually thoughtful early governance documentation.

The strongest strategic decision has been to define DevelopMonth as positive
family-development support rather than a milestone tracker, clinical
assessment tool, or problem-finding service. The product concept is coherent:
monthly support packs are supported by an optional journal, calendar,
reflection-style check-ins, parent-prepared questions, summaries, and a
parent-controlled Companion.

However, DevelopMonth is not yet a functioning MVP and should not be described
as one. The current product does not have accounts, persistent data,
authentication, a database, live personalisation, AI, payments, analytics, or
a real waitlist endpoint. The interface now truthfully labels the waitlist as a
non-persistent preview. Month 6 remains a draft and has not been approved by
qualified reviewers. No parent or professional research sessions have yet been
recorded.

The next phase should therefore be validation-led, not infrastructure-led.
DevelopMonth should prove that parents understand it, trust it, find it useful,
and want to return monthly—and that qualified professionals consider its
boundaries and content safe—before child or family data is collected.

## 2. Overall maturity assessment

| Area | Current status | Assessment |
| --- | --- | --- |
| Brand and proposition | Strong | Distinct, warm, positive, and clearly related to PregMonth |
| Public homepage | Advanced concept | Complete and deployed, but still password-gated |
| Static product prototype | Strong for research | Seven coherent Month 6 views; no persistence |
| Product definition | Strong | MVP boundaries and product areas are documented |
| Month 6 content | Draft | Suitable for prototype testing, not parent reliance |
| Year One content | Early | Twelve-month journey is framed; eleven full packs are not written |
| Parent research | Not started | Target 6–8; completed 0 |
| Professional review | Not started | Target 5–7 scoped reviewers; completed 0 |
| Safety/content governance | Good foundation | Framework exists; owners and reviewers are unassigned |
| Privacy/data governance | Early foundation | Principles exist; DPIA and legal review are outstanding |
| Production engineering | Pre-MVP | Stable static deployment, no product backend |
| Automated quality assurance | Weak | Lint/build pass; no automated application tests |
| Commercial model | Concept only | Founding membership and pricing are not validated |

In plain terms: DevelopMonth is ready to be tested as a proposition and product
experience. It is not ready to store real child information or provide
published health/development guidance at scale.

## 3. What has been built

### 3.1 PregMonth-derived foundation

DevelopMonth correctly began from the approved PregMonth foundation rather
than a fresh generic application. Shared patterns include:

- MonthMap/GrowthMap visual thinking
- Monthly support-pack architecture
- Parent-first editorial tone
- Password-gated preview
- Founding-family model
- Research and impact framing
- PregMonth-to-DevelopMonth bridge
- White-space-led layouts and deliberate brand-colour sections
- Clear educational and professional-care disclaimers

PregMonth remains visible only where it explains the strategic bridge from
pregnancy into child development after birth.

### 3.2 Brand and homepage

The live homepage now leads with:

- Positive child development
- Growth, connection, play, movement, communication, feeding, sleep, and
  parent confidence
- Optional, parent-controlled personalisation
- Monthly support packs
- A supportive Year One journey
- Secondary, calm signposting

The current GrowthMap icon has been synchronised across:

- Header and footer
- Hero
- Month 12
- Personalised-support and Companion sections
- PregMonth bridge
- Research section
- Password gate
- Static prototype
- Public brand asset
- Favicon and Apple touch icon

### 3.3 Static Month 6 product prototype

The password-gated `/prototype` journey contains seven views:

1. **This Month** — the calm monthly starting point
2. **Journal** — fictional notes and optional prompts
3. **Calendar** — family reminders and appointments
4. **Check-in** — reflection rather than scoring
5. **Support Pack** — the full Month 6 content structure
6. **Companion** — a static parent-controlled personalisation concept
7. **Summary** — a warm monthly record rather than an assessment

The prototype uses fictional content, is marked as static, saves nothing, and
is excluded from search indexing. This is appropriate for formative research.

### 3.4 Content system

Content work currently includes:

- A complete Month 6 draft: “Starting solids and movement”
- A reusable monthly support-pack template
- Positive development, play, feeding, movement, sleep, bonding, confidence,
  and questions-to-ask sections
- A three-level signposting model:
  - Keep supporting
  - Try this next
  - Ask for guidance

The content structure is strong. The claims and safety-sensitive areas still
require sourcing, localisation, and qualified review.

### 3.5 Governance and research preparation

The repository contains:

- MVP blueprint
- Safety, editorial, privacy, and signposting framework
- Month 6 approval record
- Prototype testing plan
- Recruitment and consent pack
- Findings register

This is a major strength. Governance has been considered before collecting
child data, rather than added after launch.

## 4. Current technical architecture

### Application

- Next.js 15.5
- React 19
- TypeScript with strict checking
- App Router
- CSS-based visual system
- Vercel deployment

### Current server functionality

- Preview password endpoint
- Shared access cookie derived from a preview secret
- Middleware protecting all non-static routes

### Deliberately absent

- Managed user authentication
- Accounts or organisations
- Database
- File storage
- Live journal or calendar data
- AI/LLM integration
- Payments or subscriptions
- Supabase or Stripe
- Clinical messaging or professional portal

### Deployment

The production site is live and healthy on Vercel. Recent Git pushes have
created Preview deployments that required manual promotion to Production. The
Vercel Production Branch setting should be corrected so approved `master`
commits deploy consistently without an extra manual step.

## 5. What is working particularly well

### 5.1 The emotional positioning is differentiated

DevelopMonth does not begin by telling parents what might be wrong. It starts
with what a child may be enjoying, learning, exploring, and communicating.
This is more humane and likely more trustworthy than a milestone-pressure
product.

### 5.2 The monthly unit is understandable

“What matters this month?” is a simple organising principle. It gives the
product a repeatable content rhythm and makes a potentially overwhelming
subject feel manageable.

### 5.3 Parent control is central

The product language consistently says that parents choose what to add. That
principle should remain architectural, not merely editorial.

### 5.4 The Companion is framed cautiously

The Companion is currently an organisational concept rather than an
all-knowing agent. This is the right direction. Its value should come from
summarising, organising, and preparing questions—not inferring diagnoses.

### 5.5 Safety is present without dominating

Disclaimers and signposting exist, but the product does not emotionally centre
fear. That balance is worth protecting.

## 6. Most important gaps and risks

### 6.1 No participant evidence yet — critical strategic gap

The interface currently represents internal product judgement. There are no
recorded parent sessions and no completed professional reviews.

Until research occurs, the team does not know:

- Whether parents understand the product
- Whether check-ins feel supportive or evaluative
- Whether the Companion feels useful or intrusive
- Which feature creates repeat monthly value
- Whether the language unintentionally creates anxiety
- Whether professionals consider the boundaries and signposting safe

### 6.2 Month 6 is not professionally approved — critical content gap

Feeding, allergens, choking prevention, safer sleep, movement, communication,
and urgent-care boundaries require qualified, jurisdiction-specific review.

The draft should remain clearly marked as prototype content until:

- Sources are recorded
- Ireland is confirmed as the initial jurisdiction
- Scoped reviewers sign off
- Changes are resolved
- A next-review date is assigned

### 6.3 The waitlist is a truthful preview, not an acquisition channel

The previous non-persistent form incorrectly claimed that a visitor had joined
the waitlist. This was corrected on 6 July 2026. The section, fields, consent
acknowledgement, button, and confirmation now say that the form is a preview,
uses fictional details, and saves or sends nothing.

The trust issue is resolved, but DevelopMonth still has no live waitlist or
research-recruitment endpoint. Keep the preview wording until a minimal,
secure, consent-aware persistence route is explicitly approved.

### 6.4 Preview security is not product security

The repository contains preview-only password and secret fallbacks. There is
no rate limiting, account recovery, identity management, or user-level
authorisation.

This is acceptable only while the application contains fictional/static data.
It must be replaced before any private family information exists.

### 6.5 Child-data privacy work is incomplete

The principles are good, but the following do not yet exist:

- Data protection impact assessment
- Data map
- Retention schedule
- Deletion and export flows
- Consent and parental-control design
- Vendor/subprocessor review
- Threat model
- Incident response exercise
- Jurisdiction-specific legal advice

### 6.6 Engineering quality is adequate for a prototype, not a product

Current validation consists mainly of linting, TypeScript/build checks, and
manual structural review.

Missing:

- Unit tests
- Component tests
- End-to-end journey tests
- Accessibility audit
- Cross-browser/device test matrix
- Visual regression tests
- Security tests
- Performance budgets
- Error monitoring

The inherited global stylesheet is also large—approximately 5,700 lines—with a
further approximately 1,150 lines for the prototype. It contains multiple
historical override layers. This is workable during concept development but
will become expensive and unpredictable as product screens grow.

### 6.7 Commercial assumptions are unvalidated

The founding-family membership model and displayed pricing are strategic
concepts, not evidence-backed offers. Payments should not be implemented until
parents’ perceived value, affordability, access expectations, and willingness
to pay have been researched.

### 6.8 Research/impact commitments need governance

The research-fund ambition is compelling, but future profit allocation,
selection criteria, reporting, conflicts, and oversight should be defined
before it becomes a formal promise.

## 7. How DevelopMonth should evolve

### 7.1 Product thesis

DevelopMonth should become:

> A calm, parent-controlled monthly family-development system that turns
> trustworthy guidance and the information a parent chooses to save into
> practical support, meaningful memories, and better-prepared questions.

It should not become:

- A milestone compliance tracker
- An automated developmental screener presented as education
- A clinical dashboard
- A surveillance record of childhood
- A replacement for professional care
- An engagement-maximising parenting feed

### 7.2 Recommended first functional MVP

The first functional MVP should be intentionally smaller than the complete
vision.

Include:

- Parent account
- Minimal child profile
- This Month
- One professionally approved support pack
- Optional journal
- Optional calendar
- Short non-scored monthly reflection
- Questions-for-professional list
- Monthly summary assembled from parent-selected information
- Clear data export and deletion controls

Exclude initially:

- Generative Companion
- Automated signposting based on free text
- Payments
- Professional messaging
- Multi-child complexity unless research requires it
- All 12 months at once
- Predictive or comparative features

Month 6 should be the pilot content unit. A small, excellent, reviewed pilot is
safer and more informative than twelve shallow packs.

### 7.3 Companion evolution

The Companion should evolve in stages:

### Stage A — deterministic organisation

- Group saved notes by parent-selected topics
- Surface saved questions
- Assemble a transparent monthly summary
- Show exactly which information is being used

### Stage B — assisted summarisation

- Summarise parent-selected notes
- Separate parent words from DevelopMonth guidance
- Allow correction and exclusion
- Cite relevant support-pack content

### Stage C — evaluated personalisation

Only after a formal safety/evaluation programme:

- Suggest relevant activities
- Prepare questions
- Gently highlight content a parent may wish to review

The Companion should never silently infer a diagnosis, determine whether a
child is “normal”, or generate unsourced clinical instructions.

### 7.4 Content evolution

Recommended sequence:

1. Professionally approve Month 6.
2. Test and revise the reusable pack template.
3. Develop adjacent Months 5 and 7 to test continuity.
4. Expand to a small pilot range, such as Months 4–8.
5. Build the full Year One library only after the workflow is repeatable.
6. Consider post-Year-One expansion after Year One retention and value are
   proven.

Each content item should be versioned, sourced, jurisdiction-aware, assigned to
named owners, and automatically flagged for review expiry.

### 7.5 Business-model evolution

Commercial design should follow evidence, not precede it. Research should test:

- Which parts parents consider essential
- Whether support should be free, paid, sponsored, or mixed
- Appropriate founding-member value
- Affordability and exclusion risks
- Whether professionals or organisations could fund access
- Whether research-impact commitments increase trust

A plausible future model could combine free core monthly guidance with paid
family organisation/personalisation, while preserving a meaningful free and
accessible layer. This should remain a hypothesis until tested.

## 8. Recommended phased roadmap

### Phase 0 — truth, reliability, and research readiness (0–4 weeks)

- Keep the waitlist clearly labelled as a non-persistent preview
- Configure `master` as Vercel’s Production Branch
- Assign product, editorial, research, privacy, and professional-review owners
- Complete real-device and accessibility testing of the static prototype
- Recruit parent and professional participants
- Create a Month 6 source register
- Confirm initial jurisdiction

**Exit condition:** prototype and research operations are trustworthy and
ready for moderated sessions.

### Phase 1 — validate Month 6 (4–8 weeks)

- Conduct 6–8 parent sessions
- Conduct 5–7 scoped professional reviews
- Record findings and severity
- Resolve critical/high issues
- Retest revised journeys
- Finalise Month 6 content within each reviewer’s scope
- Test willingness to return monthly

**Exit condition:** no unresolved critical issue; core task and parent-control
comprehension meet the defined thresholds.

### Phase 2 — privacy and functional-MVP design (8–12 weeks)

- Complete DPIA and legal review
- Define minimum data model
- Prototype consent, export, deletion, and personalisation controls
- Produce a threat model
- Define authentication and authorisation requirements
- Write architecture decision records
- Select vendors only after requirements are clear

**Exit condition:** approved data, privacy, security, and architecture plan.

### Phase 3 — functional pilot (approximately 3–6 months)

- Build managed authentication
- Build minimal child profile
- Implement journal, calendar, reflection, pack, questions, and summary
- Add auditability and content versioning
- Add accessibility and automated test coverage
- Pilot with a small, consented cohort
- Monitor safety, trust, deletion, and support requests

**Exit condition:** families use the product safely and return for monthly
value.

### Phase 4 — adjacent months and careful personalisation

- Add professionally reviewed adjacent support packs
- Introduce deterministic personalisation first
- Evaluate assisted summarisation separately
- Expand only when safety and usefulness evidence justify it

### Phase 5 — Year One platform

- Complete professionally reviewed Year One packs
- Introduce sustainable membership only after pricing research
- Formalise research-impact governance
- Consider organisation/professional partnerships

## 9. Success measures

DevelopMonth should avoid optimising for time-on-site or volume of child data.
Better measures are:

### Product comprehension

- Parents can explain the product as positive monthly support
- Parents understand what check-ins and summaries are—and are not

### Emotional safety

- Parents describe the experience as calm and supportive
- Low reports of pressure, comparison, anxiety, or judgement

### Parent control

- Parents understand what is optional
- Parents can identify what information is used
- Export, correction, exclusion, and deletion are understandable

### Monthly value

- Families identify a reason to return next month
- Support-pack activities are considered practical
- Journal/calendar/summary features support real family routines

### Professional safety

- Content is approved within reviewer scope
- Signposting is clear without false reassurance or panic
- No unresolved critical content issue

### Technical trust

- Reliable deletion/export
- No unauthorised access
- High accessibility
- Low error rate
- Transparent content and Companion provenance

## 10. Immediate recommended actions

In order:

1. Keep the waitlist in truthful preview mode until secure persistence is
   explicitly approved.
2. Fix Vercel Production Branch configuration.
3. Assign named owners for product, editorial, research, privacy, and
   professional review.
4. Run a real-device accessibility and visual QA pass.
5. Recruit the first parent participants.
6. Recruit scoped Month 6 professional reviewers.
7. Add sources and review dates to Month 6.
8. Conduct sessions and populate the findings register.
9. Revise and retest the prototype.
10. Begin DPIA/data mapping only after the value and interaction model are
    validated.

## 11. Recommendation

DevelopMonth should continue. The concept has a meaningful strategic position,
a coherent relationship with PregMonth, and a stronger ethical foundation than
many early parenting products.

The next risk is not lack of features. It is moving too quickly from a polished
prototype into child-data infrastructure without evidence, professional
review, and privacy design.

The best evolution is therefore:

> Validate one month deeply, prove monthly family value, build parent control
> into the architecture, and expand carefully.

If DevelopMonth follows that sequence, it can become a genuinely useful family
development platform rather than another tracker that increases parental
pressure.
