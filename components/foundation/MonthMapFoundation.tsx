import Link from "next/link";
import type { ReactNode } from "react";
import { GrowthMapIcon } from "@/components/GrowthMapIcon";
import type {
  DevelopmentMonth,
  MonthlyContentItem,
  MonthlySupportPack as MonthlySupportPackData,
} from "@/lib/month-content";
import styles from "./foundation.module.css";

type FoundationPageShellProps = {
  children: ReactNode;
};

type PageHeroProps = {
  eyebrow: string;
  title: string;
  body: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
};

export function FoundationPageShell({
  children,
}: FoundationPageShellProps) {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <Link className={styles.brand} href="/" aria-label="DevelopMonth home">
          <GrowthMapIcon className={styles.brandIcon} />
          <span>
            <strong>DevelopMonth</strong>
            <small>Child development and parenting, month by month.</small>
          </span>
        </Link>
        <nav aria-label="DevelopMonth product navigation">
          <Link href="/months">Year One</Link>
          <Link href="/aion">Meet Aion</Link>
          <Link href="/membership">Membership</Link>
          <Link href="/research">Research</Link>
          <Link href="/validation/month-6">Validation</Link>
          <Link href="/safety">Safety</Link>
          <Link className={styles.headerCta} href="/prototype">
            Month 6 prototype
          </Link>
        </nav>
      </header>
      <main>{children}</main>
      <footer className={styles.footer}>
        <div>
          <strong>DevelopMonth</strong>
          <span>Child development and parenting, month by month.</span>
        </div>
        <p>
          DevelopMonth provides educational and organisational support only. It
          does not diagnose, assess, treat, or replace professional care.
        </p>
      </footer>
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  body,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
}: PageHeroProps) {
  return (
    <section className={styles.hero}>
      <div className={styles.heroCopy}>
        <p className={styles.eyebrow}>{eyebrow}</p>
        <h1>{title}</h1>
        <p>{body}</p>
        {primaryHref && primaryLabel ? (
          <div className={styles.heroActions}>
            <Link className={styles.primaryButton} href={primaryHref}>
              {primaryLabel}
            </Link>
            {secondaryHref && secondaryLabel ? (
              <Link className={styles.secondaryButton} href={secondaryHref}>
                {secondaryLabel}
              </Link>
            ) : null}
          </div>
        ) : null}
      </div>
      <MonthMapVisual />
    </section>
  );
}

export function MonthMapVisual() {
  const labels = [
    "This month",
    "Development",
    "Play",
    "Journal",
    "Calendar",
    "Questions",
    "Check-in",
    "Support pack",
    "Aion",
  ];

  return (
    <div className={styles.monthMap} aria-label="DevelopMonth MonthMap">
      <GrowthMapIcon className={styles.monthMapIcon} />
      <div aria-hidden="true">
        {labels.map((label) => (
          <span key={label}>{label}</span>
        ))}
      </div>
    </div>
  );
}

export function PreviewOnlyNotice() {
  return (
    <aside className={styles.previewNotice} aria-label="Preview status">
      <strong>Static preview</strong>
      <p>
        This is a fictional product concept for research and feedback. Nothing
        is saved or sent, and no live personalisation or AI is running.
      </p>
    </aside>
  );
}

export function ProfessionalReviewStatus({
  month,
}: {
  month?: DevelopmentMonth;
}) {
  return (
    <aside
      className={styles.statusPanel}
      aria-label="Content review and source status"
    >
      <strong>
        {month ? `Month ${month.monthNumber}` : "Content"} · Draft content
      </strong>
      <div>
        <span>Requires professional review</span>
        <span>Source register required</span>
        <span>Jurisdiction unconfirmed</span>
        <span>Educational support only</span>
      </div>
    </aside>
  );
}

export function SourceRegisterStatus() {
  return (
    <div className={styles.sourceStatus}>
      <span>Source register</span>
      <strong>Required and incomplete</strong>
      <p>No monthly claim is approved for parent reliance yet.</p>
    </div>
  );
}

export function MonthlyKnowledgeGrid({
  items,
}: {
  items: MonthlyContentItem[];
}) {
  return (
    <section className={styles.section} aria-labelledby="knowledge-title">
      <div className={styles.sectionHeading}>
        <p className={styles.eyebrow}>MONTHLY KNOWLEDGE</p>
        <h2 id="knowledge-title">Positive support for the month you are in.</h2>
        <p>
          Calm, stage-aware information organised around everyday family life.
          Every item remains draft content until sourced and reviewed.
        </p>
      </div>
      <div className={styles.knowledgeGrid}>
        {items.map((item, index) => (
          <article key={item.id}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <p>{item.category}</p>
            <h3>{item.title}</h3>
            <div>{item.summary}</div>
          </article>
        ))}
      </div>
    </section>
  );
}

export function MonthlySupportPack({
  pack,
}: {
  pack: MonthlySupportPackData;
}) {
  return (
    <section className={styles.section} aria-labelledby="support-pack-title">
      <div className={styles.sectionHeading}>
        <p className={styles.eyebrow}>MONTH {pack.month} SUPPORT PACK</p>
        <h2 id="support-pack-title">{pack.title}</h2>
        <p>{pack.introduction}</p>
      </div>
      <div className={styles.supportPackGrid}>
        {pack.themes.map((theme, index) => (
          <article
            className={styles[`tone_${theme.colour}`]}
            key={theme.title}
          >
            <span>{String(index + 1).padStart(2, "0")}</span>
            <h3>{theme.title}</h3>
            <p>{theme.summary}</p>
            <ul>
              {theme.ideas.map((idea) => (
                <li key={idea}>{idea}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

function PromptList({
  eyebrow,
  title,
  items,
  id,
}: {
  eyebrow: string;
  title: string;
  items: string[];
  id: string;
}) {
  return (
    <section className={styles.promptSection} aria-labelledby={id}>
      <div>
        <p className={styles.eyebrow}>{eyebrow}</p>
        <h2 id={id}>{title}</h2>
      </div>
      <ol>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ol>
    </section>
  );
}

export function QuestionsToAsk({ items }: { items: string[] }) {
  return (
    <PromptList
      eyebrow="QUESTIONS TO SAVE"
      id="questions-to-save-title"
      items={items}
      title="Questions you may want to keep together."
    />
  );
}

export function JournalPrompts({ items }: { items: string[] }) {
  return (
    <PromptList
      eyebrow="JOURNAL PROMPTS"
      id="journal-prompts-title"
      items={items}
      title="Small moments worth remembering."
    />
  );
}

export function CalendarIdeas({ items }: { items: string[] }) {
  return (
    <PromptList
      eyebrow="CALENDAR IDEAS"
      id="calendar-ideas-title"
      items={items}
      title="Gentle reminders, never deadlines."
    />
  );
}

export function CompanionCard({
  prompts,
  compact = false,
}: {
  prompts: string[];
  compact?: boolean;
}) {
  return (
    <section
      className={`${styles.companionCard} ${
        compact ? styles.companionCardCompact : ""
      }`}
      aria-labelledby="aion-title"
    >
      <div className={styles.companionIdentity}>
        <GrowthMapIcon className={styles.companionIcon} />
        <div>
          <p className={styles.eyebrow}>MEET AION · PRONOUNCED EYE-ON</p>
          <h2 id="aion-title">Your calm child-development companion.</h2>
          <strong>Parent-controlled. Future concept only.</strong>
        </div>
      </div>
      <div className={styles.companionBody}>
        <p>
          Aion is a future companion concept designed to explain the month you
          are in, organise parent-chosen information, and prepare useful
          questions from professionally reviewed content when available. It is
          not a chatbot replacing human judgement or professional guidance.
        </p>
        <div className={styles.exampleQuestions}>
          <span>Ask about this month</span>
          {prompts.map((prompt) => (
            <p key={prompt}>{prompt}</p>
          ))}
        </div>
        <small>
          Static examples only. Aion is not live and does not diagnose, assess,
          monitor, or replace professional guidance.
        </small>
      </div>
    </section>
  );
}

export function SafetyBoundary() {
  return (
    <section className={styles.safetyBoundary} aria-labelledby="safety-title">
      <div>
        <p className={styles.eyebrow}>SAFETY AND PROFESSIONAL GUIDANCE</p>
        <h2 id="safety-title">Educational support, with clear boundaries.</h2>
      </div>
      <div>
        <p>
          DevelopMonth and Aion provide educational and organisational support
          only. They do not diagnose, assess, treat, score, monitor, or replace
          professional care.
        </p>
        <p>
          If something concerns you, or if you need medical or developmental
          advice, speak with your GP, public health nurse, paediatrician,
          therapist, emergency services, or relevant professional.
        </p>
      </div>
    </section>
  );
}

export function FoundingFamilyMembership() {
  const benefits = [
    "Early access to monthly support packs",
    "Founder updates and prototype testing",
    "Research participation opportunities",
    "Priority access to future Aion features",
    "A contribution to future support and research programmes",
  ];

  return (
    <section className={styles.membership} aria-labelledby="membership-title">
      <div>
        <p className={styles.eyebrow}>FOUNDING FAMILY MEMBERSHIP · PREVIEW</p>
        <h2 id="membership-title">Become a Founding Family.</h2>
        <p>
          Help shape a calmer, wiser, month-by-month support system for
          pregnancy and child development.
        </p>
        <PreviewOnlyNotice />
      </div>
      <article>
        <span>FOUNDING CONTRIBUTION IDEA</span>
        <strong>€50</strong>
        <p>proposed monthly contribution for the first 12 months</p>
        <ul>
          {benefits.map((benefit) => (
            <li key={benefit}>{benefit}</li>
          ))}
        </ul>
        <small>
          This is not a payment offer. No checkout, subscription, or payment
          functionality exists.
        </small>
      </article>
    </section>
  );
}

export function ResearchMission() {
  return (
    <section className={styles.researchMission} aria-labelledby="research-title">
      <div>
        <p className={styles.eyebrow}>MONTH-BY-MONTH DEVELOPMENT RESEARCH</p>
        <h2 id="research-title">Every stage deserves better support.</h2>
      </div>
      <div>
        <p>
          The long-term mission is to reinvest a share of future profits into
          pregnancy, child development, maternal wellbeing, family support, and
          additional-needs research.
        </p>
        <p>
          No monthly content should be treated as parent-ready until its source
          register, jurisdiction, and professional review status are complete.
        </p>
        <div>
          <span>Child development</span>
          <span>Parent and family support</span>
          <span>Additional needs</span>
          <span>Maternal wellbeing</span>
          <span>Professional review</span>
          <span>Source registers</span>
        </div>
      </div>
    </section>
  );
}
