import Link from "next/link";
import type { ReactNode } from "react";
import { GrowthMapIcon } from "@/components/GrowthMapIcon";
import type {
  DevelopmentMonth,
  MonthEvidenceSource,
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
  visual?: HeroVisualKind;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
};

export type HeroVisualKind =
  | "month-map"
  | "year-one"
  | "month-six"
  | "aion"
  | "membership"
  | "research"
  | "safety"
  | "validation";

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
        <details className={styles.mobileNav}>
          <summary>Menu</summary>
          <div>
            <Link href="/months">Year One</Link>
            <Link href="/aion">Meet Aion</Link>
            <Link href="/membership">Membership</Link>
            <Link href="/research">Research</Link>
            <Link href="/validation/month-6">Validation</Link>
            <Link href="/safety">Safety</Link>
            <Link href="/prototype">Month 6 prototype</Link>
          </div>
        </details>
      </header>
      <main>{children}</main>
      <footer className={styles.footer}>
        <div className={styles.footerBrand}>
          <GrowthMapIcon className={styles.footerIcon} />
          <div>
            <strong>DevelopMonth</strong>
            <span>Child development and parenting, month by month.</span>
          </div>
        </div>
        <nav className={styles.footerNav} aria-label="Footer navigation">
          <div>
            <span>EXPLORE</span>
            <Link href="/months">Year One</Link>
            <Link href="/months/month-6">Month 6</Link>
            <Link href="/aion">Aion</Link>
          </div>
          <div>
            <span>PROJECT</span>
            <Link href="/membership">Membership</Link>
            <Link href="/research">Research</Link>
            <Link href="/safety">Safety</Link>
          </div>
        </nav>
        <div className={styles.footerBridge}>
          <span>PregMonth → DevelopMonth</span>
          <strong>
            From pregnancy to your child&apos;s development, month by month.
          </strong>
        </div>
        <div className={styles.footerBottom}>
          <p>
            DevelopMonth provides educational and organisational support only.
            It does not diagnose, assess, treat, or replace professional care.
          </p>
          <span>© 2026 DevelopMonth</span>
        </div>
      </footer>
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  body,
  visual = "month-map",
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
      <HeroVisual kind={visual} />
    </section>
  );
}

function HeroVisual({ kind }: { kind: HeroVisualKind }) {
  if (kind === "year-one") {
    return (
      <div className={`${styles.heroVisual} ${styles.yearOneVisual}`}>
        <div className={styles.visualTopline}>
          <span>DEVELOPMONTH YEAR ONE</span>
          <strong>Month 00–12</strong>
        </div>
        <div className={styles.yearOnePath} aria-label="Year One MonthMap">
          {Array.from({ length: 13 }, (_, month) => (
            <span
              className={month === 6 ? styles.activeMonthNode : ""}
              key={month}
            >
              <small>{String(month).padStart(2, "0")}</small>
              <i aria-hidden="true" />
            </span>
          ))}
        </div>
        <div className={styles.visualFeature}>
          <span>FIRST DETAILED PROTOTYPE</span>
          <strong>Month 6</strong>
          <p>Starting solids, movement, play, and connection.</p>
        </div>
      </div>
    );
  }

  if (kind === "month-six") {
    return (
      <div className={`${styles.heroVisual} ${styles.monthSixVisual}`}>
        <div className={styles.visualTopline}>
          <span>MONTH 06</span>
          <strong>IRELAND · DRAFT 0.2</strong>
        </div>
        <div className={styles.packCover}>
          <span>MONTHLY SUPPORT PACK</span>
          <h2>Starting solids and movement</h2>
          <div>
            <small>01</small>
            <p>Starting solids, calmly</p>
          </div>
          <div>
            <small>02</small>
            <p>Movement through play</p>
          </div>
          <div>
            <small>03</small>
            <p>Sounds, faces, and connection</p>
          </div>
        </div>
        <div className={styles.visualFootnote}>
          <span>Sources assembled</span>
          <span>Review pending</span>
        </div>
      </div>
    );
  }

  if (kind === "aion") {
    return (
      <div className={`${styles.heroVisual} ${styles.aionVisual}`}>
        <div className={styles.visualTopline}>
          <span>AION · FUTURE CONCEPT</span>
          <strong>PARENT CONTROLLED</strong>
        </div>
        <div className={styles.aionPrompt}>
          <span>QUESTION FOR THIS MONTH</span>
          <p>What play ideas could support movement?</p>
        </div>
        <div className={styles.aionAnswer}>
          <div className={styles.aionIdentity}>
            <GrowthMapIcon className={styles.aionIcon} />
            <div>
              <strong>Aion</strong>
              <span>Educational support</span>
            </div>
          </div>
          <p>
            Try a few calm minutes of supervised floor play with something
            interesting just within comfortable reach.
          </p>
          <div>
            <span>Reviewed monthly content</span>
            <span>No live AI</span>
          </div>
        </div>
      </div>
    );
  }

  if (kind === "membership") {
    return (
      <div className={`${styles.heroVisual} ${styles.membershipVisual}`}>
        <div className={styles.visualTopline}>
          <span>FOUNDING FAMILY</span>
          <strong>PREVIEW ONLY</strong>
        </div>
        <div className={styles.memberNumber}>
          <span>FOUNDING PLACE</span>
          <strong>01</strong>
          <small>of the first families shaping DevelopMonth</small>
        </div>
        <div className={styles.memberBenefits}>
          <span>Shape the first support packs</span>
          <span>Join parent research</span>
          <span>See progress first</span>
        </div>
      </div>
    );
  }

  if (kind === "research") {
    return (
      <div className={`${styles.heroVisual} ${styles.researchVisual}`}>
        <div className={styles.visualTopline}>
          <span>MONTH 6 EVIDENCE</span>
          <strong>IRELAND FIRST</strong>
        </div>
        <div className={styles.researchMetrics}>
          <div>
            <strong>14</strong>
            <span>claims mapped</span>
          </div>
          <div>
            <strong>13</strong>
            <span>HSE sources</span>
          </div>
          <div>
            <strong>0</strong>
            <span>claims approved</span>
          </div>
        </div>
        <div className={styles.reviewRoute}>
          <span>Parent research</span>
          <i aria-hidden="true" />
          <span>Scoped review</span>
          <i aria-hidden="true" />
          <span>Release decision</span>
        </div>
        <p>Transparency first. Professional approval still required.</p>
      </div>
    );
  }

  if (kind === "safety") {
    return (
      <div className={`${styles.heroVisual} ${styles.safetyVisual}`}>
        <div className={styles.visualTopline}>
          <span>SAFETY BY DESIGN</span>
          <strong>CLEAR BOUNDARIES</strong>
        </div>
        <div className={styles.safetyLayers}>
          <div>
            <span>01</span>
            <strong>Parent choice</strong>
            <small>You decide what support to use.</small>
          </div>
          <div>
            <span>02</span>
            <strong>Reviewed content</strong>
            <small>Drafts stay visibly unapproved.</small>
          </div>
          <div>
            <span>03</span>
            <strong>Professional guidance</strong>
            <small>Clear routes when individual help matters.</small>
          </div>
        </div>
        <p>Educational support. Never diagnosis or assessment.</p>
      </div>
    );
  }

  if (kind === "validation") {
    return (
      <div className={`${styles.heroVisual} ${styles.validationVisual}`}>
        <div className={styles.visualTopline}>
          <span>PROOF MONTH</span>
          <strong>MONTH 06</strong>
        </div>
        <div className={styles.validationSteps}>
          {[
            ["01", "Parents", "Usefulness and trust"],
            ["02", "Professionals", "Accuracy within scope"],
            ["03", "Sources", "Evidence and freshness"],
            ["04", "Decision", "Build, revise, or stop"],
          ].map(([number, label, detail]) => (
            <div key={number}>
              <span>{number}</span>
              <strong>{label}</strong>
              <small>{detail}</small>
            </div>
          ))}
        </div>
        <div className={styles.visualFootnote}>
          <span>Ireland first</span>
          <span>Infrastructure waits</span>
        </div>
      </div>
    );
  }

  return <MonthMapVisual />;
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
        <span>
          {month?.sourceStatus === "sources-in-review"
            ? "Sources assembled · review pending"
            : "Source register required"}
        </span>
        <span>
          {month?.jurisdiction === "Ireland"
            ? "Ireland-first jurisdiction"
            : "Ireland-first planning"}
        </span>
        <span>Educational support only</span>
        {month ? <span>Not for parent reliance</span> : null}
      </div>
    </aside>
  );
}

export function SourceRegisterStatus({
  month,
}: {
  month?: DevelopmentMonth;
}) {
  return (
    <div className={styles.sourceStatus}>
      <span>Source register</span>
      <strong>
        {month?.sourceStatus === "sources-in-review"
          ? "Ireland sources assembled · professional review pending"
          : "Required and incomplete"}
      </strong>
      <p>
        {month?.sourceStatus === "sources-in-review"
          ? "Claims have source IDs, but no Month 6 claim is approved for parent reliance yet."
          : "No monthly claim is approved for parent reliance yet."}
      </p>
    </div>
  );
}

export function EvidenceRegister({
  sources,
}: {
  sources: MonthEvidenceSource[];
}) {
  const verificationCount = sources.filter(
    (source) => source.status === "verification-required",
  ).length;

  return (
    <section className={styles.evidenceSection} aria-labelledby="evidence-title">
      <div className={styles.sectionHeading}>
        <p className={styles.eyebrow}>IRELAND EVIDENCE REGISTER</p>
        <h2 id="evidence-title">Official guidance behind this draft.</h2>
        <p>
          These HSE sources are mapped to individual Month 6 claims. They are
          provided for transparent review, not as an approval badge.
        </p>
      </div>
      <div className={styles.evidenceSummary}>
        <strong>{sources.length} HSE sources assembled</strong>
        <span>{verificationCount} require freshness verification</span>
        <span>0 claims professionally approved</span>
      </div>
      <div className={styles.evidenceGrid}>
        {sources.map((source) => (
          <article key={source.id}>
            <div>
              <span>{source.id}</span>
              <span>
                {source.status === "verification-required"
                  ? "Verify before approval"
                  : "Review pending"}
              </span>
            </div>
            <h3>{source.title}</h3>
            <p>Supports {source.supports.join(", ")}</p>
            <a href={source.url} rel="noreferrer" target="_blank">
              Read on HSE.ie <span aria-hidden="true">↗</span>
            </a>
          </article>
        ))}
      </div>
    </section>
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

export function FeatureBand({
  eyebrow,
  title,
  body,
  items,
  tone = "aqua",
}: {
  eyebrow: string;
  title: string;
  body: string;
  items: Array<{ number: string; title: string; body: string }>;
  tone?: "aqua" | "sage" | "lime" | "teal";
}) {
  return (
    <section
      className={`${styles.featureBand} ${styles[`featureTone_${tone}`]}`}
      aria-labelledby={`feature-${eyebrow.toLowerCase().replaceAll(" ", "-")}`}
    >
      <div className={styles.featureBandIntro}>
        <p className={styles.eyebrow}>{eyebrow}</p>
        <h2 id={`feature-${eyebrow.toLowerCase().replaceAll(" ", "-")}`}>
          {title}
        </h2>
        <p>{body}</p>
      </div>
      <div className={styles.featureBandGrid}>
        {items.map((item) => (
          <article key={item.number}>
            <span>{item.number}</span>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </article>
        ))}
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
