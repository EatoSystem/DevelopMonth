import type { Metadata } from "next";
import Link from "next/link";
import {
  FoundationPageShell,
  PageHero,
  PreviewOnlyNotice,
  ProfessionalReviewStatus,
  SafetyBoundary,
  SourceRegisterStatus,
} from "@/components/foundation/MonthMapFoundation";
import styles from "@/components/foundation/foundation.module.css";
import { monthSixDevelopmentMonth } from "@/lib/month-content";

export const metadata: Metadata = {
  title: "Month 6 validation pack — DevelopMonth",
  description:
    "A static DevelopMonth validation hub for testing the Month 6 support-pack concept with parents and scoped professionals.",
};

const packContents = [
  {
    label: "01",
    type: "Parent research",
    title: "Test usefulness, trust, and emotional tone",
    body:
      "Sessions use the fictional Rory profile and ask parents whether Month 6 feels calm, positive, understandable, and worth returning to each month.",
  },
  {
    label: "02",
    type: "Professional review",
    title: "Review only within named scope",
    body:
      "Feeding, movement, sleep, communication, signposting, privacy, and editorial clarity each require appropriate scoped review before parent reliance.",
  },
  {
    label: "03",
    type: "Source register",
    title: "Ireland sources assembled, review pending",
    body:
      "Each material claim now maps to an HSE source ID, access date, freshness status, and review route. Mapping is not professional approval.",
  },
  {
    label: "04",
    type: "Product decision",
    title: "Infrastructure waits for validation",
    body:
      "Accounts, real child profiles, live Aion, storage, analytics, and payments should wait until the static concept proves useful and safe.",
  },
];

const parentTasks = [
  "Explain what DevelopMonth is for after seeing the Month 6 page.",
  "Find one play, movement, or feeding idea that feels practical.",
  "Preview journal, calendar, check-in, support pack, Aion, and summary.",
  "Explain what is optional, what is fictional, and what is not saved.",
  "Describe when they would seek professional guidance.",
  "Explain that Ireland is the first jurisdiction and identify the HSE source links.",
];

const professionalTasks = [
  "Mark any claim needing evidence, qualification, localisation, or removal.",
  "Review only the domains within the reviewer’s professional scope.",
  "Identify risks of false reassurance, unnecessary anxiety, or overreach.",
  "Check that Aion examples do not imply diagnosis, monitoring, or assessment.",
  "Record required sources, changes, decision, scope, and next review date.",
];

const releaseGates = [
  "No unresolved critical safety, privacy, or accessibility issue.",
  "Parents understand the concept as supportive, optional, and educational.",
  "Core prototype tasks can be completed comfortably on mobile.",
  "Scoped professionals approve or revise the relevant Month 6 domains.",
  "Source register, approval record, jurisdiction, and content version match.",
];

export default function MonthSixValidationPage() {
  return (
    <FoundationPageShell>
      <PageHero
        body="Month 6 is the proof month: one focused support-pack prototype for parent research, scoped professional review, source registration, and safety governance before any infrastructure is built."
        eyebrow="MONTH 6 VALIDATION PACK"
        primaryHref="/prototype"
        primaryLabel="Open the static prototype"
        secondaryHref="/months/month-6"
        secondaryLabel="Review the Month 6 pack"
        title="Validate one excellent month before building the system."
        visual="validation"
      />
      <PreviewOnlyNotice />
      <ProfessionalReviewStatus month={monthSixDevelopmentMonth} />

      <section className={styles.section} aria-labelledby="validation-contents">
        <div className={styles.sectionHeading}>
          <p className={styles.eyebrow}>VALIDATION CONTENTS</p>
          <h2 id="validation-contents">What the Month 6 pack must prove.</h2>
          <p>
            The aim is not to look bigger than the product is. The aim is to
            make one month credible enough to test with parents and scoped
            professionals, while keeping every draft boundary visible.
          </p>
        </div>
        <div className={styles.knowledgeGrid}>
          {packContents.map((item) => (
            <article key={item.title}>
              <span>{item.label}</span>
              <p>{item.type}</p>
              <h3>{item.title}</h3>
              <div>{item.body}</div>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.promptSection} aria-labelledby="parent-tasks">
        <div>
          <p className={styles.eyebrow}>PARENT RESEARCH</p>
          <h2 id="parent-tasks">What parents should help us learn.</h2>
        </div>
        <ol>
          {parentTasks.map((task) => (
            <li key={task}>{task}</li>
          ))}
        </ol>
      </section>

      <section
        className={styles.promptSection}
        aria-labelledby="professional-tasks"
      >
        <div>
          <p className={styles.eyebrow}>PROFESSIONAL REVIEW</p>
          <h2 id="professional-tasks">What scoped reviewers should check.</h2>
        </div>
        <ol>
          {professionalTasks.map((task) => (
            <li key={task}>{task}</li>
          ))}
        </ol>
      </section>

      <section className={styles.promptSection} aria-labelledby="release-gates">
        <div>
          <p className={styles.eyebrow}>RELEASE GATES</p>
          <h2 id="release-gates">What must be true before MVP planning.</h2>
        </div>
        <ol>
          {releaseGates.map((gate) => (
            <li key={gate}>{gate}</li>
          ))}
        </ol>
      </section>

      <SourceRegisterStatus month={monthSixDevelopmentMonth} />

      <section className={styles.sourceStatus} aria-label="Internal documents">
        <span>Internal validation documents</span>
        <strong>Use the docs pack before recruiting participants.</strong>
        <p>
          See docs/validation/month-06-validation-pack.md,
          docs/research/parent-research-session-script.md,
          docs/research/professional-review-pack.md, and
          docs/content/developmonth-content-standard.md.
        </p>
      </section>

      <section className={styles.promptSection} aria-labelledby="next-actions">
        <div>
          <p className={styles.eyebrow}>NEXT ACTIONS</p>
          <h2 id="next-actions">Move from concept to evidence.</h2>
        </div>
        <ol>
          <li>
            <Link href="/prototype">Run the static Rory prototype with parents.</Link>
          </li>
          <li>
            <Link href="/months/month-6">Review the Month 6 support pack.</Link>
          </li>
          <li>
            <Link href="/safety">Check the safety and professional boundaries.</Link>
          </li>
        </ol>
      </section>

      <SafetyBoundary />
    </FoundationPageShell>
  );
}
