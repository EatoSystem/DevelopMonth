import Link from "next/link";
import { BumpMapIcon } from "./BumpMapIcon";
import { GrowthMapIcon } from "./GrowthMapIcon";
import { WaitlistForm } from "./WaitlistForm";

type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  body?: string;
  align?: "left" | "center";
};

function SectionHeader({
  eyebrow,
  title,
  body,
  align = "left",
}: SectionHeaderProps) {
  return (
    <div className={`section-heading section-heading-${align}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {body ? <p className="section-lead">{body}</p> : null}
    </div>
  );
}

function Wordmark({ footer = false }: { footer?: boolean }) {
  return (
    <span className={`brand-lockup ${footer ? "brand-lockup-footer" : ""}`}>
      <GrowthMapIcon className="brand-icon" />
      <span className="brand-words">
        <span className="brand-name">DevelopMonth</span>
        {footer ? (
          <span className="brand-tagline">
            Child development and parenting, month by month.
          </span>
        ) : null}
      </span>
    </span>
  );
}

function BlockMotif({ tone }: { tone: string }) {
  return (
    <span className={`block-motif block-motif-${tone}`} aria-hidden="true">
      <i />
      <i />
      <i />
      <i />
    </span>
  );
}

function PregnancyToParentingBridge() {
  return (
    <div className="motion-foundation-path" aria-hidden="true">
      <span className="motion-foundation-track" />
      {Array.from({ length: 5 }, (_, index) => (
        <i key={index} style={{ animationDelay: `${index * -0.7}s` }} />
      ))}
      <strong>→</strong>
    </div>
  );
}

export function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <a href="#top" aria-label="DevelopMonth home">
          <Wordmark />
        </a>
        <nav aria-label="Primary navigation">
          <a href="#vision">Vision</a>
          <a href="#year-one">Year One</a>
          <a href="#support-blocks">Support packs</a>
          <a href="#foundation">PregMonth</a>
          <a className="header-cta" href="#waitlist">
            Join waitlist <span aria-hidden="true">↗</span>
          </a>
        </nav>
      </div>
    </header>
  );
}

export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-block-field" aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
      </div>
      <div className="container hero-layout">
        <div className="hero-brand-object">
          <div className="hero-brand-media">
            <div className="hero-brand-static">
              <GrowthMapIcon
                className="hero-brand-icon"
                ariaLabel="DevelopMonth GrowthMap"
                priority
              />
            </div>
          </div>
          <div
            className="hero-brand-labels"
            aria-label="This month's DevelopMonth tools"
          >
            <span>This month</span>
            <span>Journal</span>
            <span>Calendar</span>
            <span>Check-in</span>
            <span>Activities</span>
            <span>Questions</span>
          </div>
        </div>
        <div className="hero-copy">
          <p className="eyebrow eyebrow-rule">DEVELOPMONTH</p>
          <h1>
            Support your child&apos;s development,
            <br />
            month by month.
          </h1>
          <p className="hero-intro">
            Every month after birth brings new ways your child may grow,
            connect, move, communicate, feed, sleep, play, and learn.
            DevelopMonth gives families positive monthly support packs
            personalised around the journal, calendar, and check-ins they
            choose to add.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#waitlist">
              Join the Waitlist <span aria-hidden="true">↗</span>
            </a>
            <a className="button button-text" href="#year-one">
              Explore Year One <span aria-hidden="true">↓</span>
            </a>
          </div>
          <p className="hero-microcopy">
            Parent-controlled. Educational support only. Built to complement
            professional guidance.
          </p>
        </div>

      </div>
      <div className="container hero-promise">
        <span>01</span>
        <p>
          One month at a time.
          <strong> Support growth through everyday moments.</strong>
        </p>
      </div>
    </section>
  );
}

const supportAreas = [
  "Growth and development",
  "Play and connection",
  "Movement",
  "Communication",
  "Feeding",
  "Sleep rhythms",
  "Bonding",
  "Parent confidence",
];

const monthlySupport = [
  "Growing through play",
  "Feeding and new textures",
  "Movement and strength",
  "Sleep and rhythm",
  "Bonding and confidence",
  "Questions to ask",
];

export function CorePromise() {
  return (
    <section className="section vision-section" id="vision">
      <div className="container vision-shell">
        <p className="eyebrow">THE DEVELOPMONTH APPROACH</p>
        <h2>
          Support their growth.
          <br />
          Understand this month.
          <br />
          Feel more confident.
        </h2>
        <p>
          DevelopMonth helps families focus on the stage they are in — with
          positive development guidance, practical activities, parent-friendly
          check-ins, and gentle signposting when extra support may be useful.
        </p>
      </div>
    </section>
  );
}

export function SupportPack() {
  return (
    <section className="section core-promise" id="support-pack">
      <div className="container promise-layout">
        <div className="promise-copy">
          <p className="eyebrow">DEVELOPMONTH YEAR ONE</p>
          <h2>A development support pack for every month.</h2>
          <p>
            Each month brings together positive development guidance, play and
            bonding ideas, feeding and sleep support, parent-friendly
            check-ins, and questions to ask when professional guidance may
            help.
          </p>
          <div className="assessment-domain-list" aria-label="Development areas">
            {supportAreas.map((area) => (
              <span key={area}>{area}</span>
            ))}
          </div>
        </div>
        <article className="month-support-pack development-check-in-card">
          <div className="month-support-pack-top">
            <span>MONTH 06</span>
            <small>DEVELOPMONTH</small>
          </div>
          <h3>Starting solids and movement</h3>
          <p>This month&apos;s support</p>
          <div className="month-support-pack-list">
            {monthlySupport.map((item, index) => (
              <span key={item}>
                <i>{String(index + 1).padStart(2, "0")}</i>
                {item}
              </span>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}

const supportFlags = [
  {
    level: "EVERYDAY SUPPORT",
    title: "Keep supporting",
    text: "Continue everyday play, bonding, feeding, sleep, and development support.",
    tone: "green",
  },
  {
    level: "PRACTICAL NEXT STEP",
    title: "Try this next",
    text: "Simple activities, routines, or questions may help you support this area.",
    tone: "amber",
  },
  {
    level: "PROFESSIONAL GUIDANCE",
    title: "Ask for guidance",
    text: "If something continues to concern you, or if your child loses skills or seems unwell, contact your GP, public health nurse, paediatrician, therapist, or local healthcare provider.",
    tone: "urgent",
  },
];

export function SupportFlags() {
  return (
    <section className="section support-flags-section">
      <div className="container">
        <SectionHeader
          eyebrow="GENTLE SIGNPOSTING"
          title="Gentle guidance when extra support may help."
          body="Most of DevelopMonth is about supporting positive growth. If something in a check-in may need extra support, DevelopMonth helps parents understand what to observe, what to try, and what to ask a professional."
        />
        <div className="support-flags-grid">
          {supportFlags.map((flag) => (
            <article
              className={`support-flag support-flag-${flag.tone}`}
              key={flag.level}
            >
              <span>{flag.level}</span>
              <h3>{flag.title}</h3>
              <p>{flag.text}</p>
            </article>
          ))}
        </div>
        <p className="support-flags-note">
          This guidance is educational only. It does not diagnose or replace
          professional advice, developmental assessment, or care.
        </p>
      </div>
    </section>
  );
}

const supportBlocks = [
  {
    number: "01",
    title: "Development guidance",
    text: "Understand what may be emerging this month.",
    tone: "aqua",
  },
  {
    number: "02",
    title: "Play and connection",
    text: "Simple ways to support learning, bonding, and confidence.",
    tone: "sage",
  },
  {
    number: "03",
    title: "Movement and communication",
    text: "Support strength, coordination, sounds, gestures, and early language.",
    tone: "aqua-light",
  },
  {
    number: "04",
    title: "Feeding and sleep",
    text: "Gentle support for changing rhythms, feeding, weaning, and rest.",
    tone: "lime",
  },
  {
    number: "05",
    title: "Parent confidence",
    text: "Feel calmer and more supported in daily routines.",
    tone: "teal",
  },
  {
    number: "06",
    title: "Questions to ask",
    text: "Prepare calm questions for your GP, public health nurse, paediatrician, therapist, or care team.",
    tone: "lime",
  },
];

export function SupportBlocks() {
  return (
    <section className="section support-blocks-section" id="support-blocks">
      <div className="container">
        <SectionHeader
          eyebrow="INSIDE EACH SUPPORT PACK"
          title="What comes inside each monthly support pack?"
          body="Warm, practical guidance for everyday development — organised around the month your child is in."
        />
        <div className="support-block-grid">
          {supportBlocks.map((block) => (
            <article
              className={`support-block support-block-${block.tone}`}
              key={block.title}
            >
              <div className="support-block-top">
                <span>{block.number}</span>
                <BlockMotif tone={block.tone} />
              </div>
              <h3>{block.title}</h3>
              <p>{block.text}</p>
            </article>
          ))}
        </div>
        <p className="support-growth-note">
          Extra support signposting and research updates grow into the platform
          over time.
        </p>
      </div>
    </section>
  );
}

const personalisedSupportFeatures = [
  {
    number: "01",
    title: "Journal",
    text: "Capture small wins, routines, questions, and changes that matter.",
    tone: "aqua",
  },
  {
    number: "02",
    title: "Calendar",
    text: "Keep health checks, appointments, reminders, and monthly check-ins together.",
    tone: "sage",
  },
  {
    number: "03",
    title: "Check-ins",
    text: "Reflect on development, feeding, sleep, bonding, communication, play, and family support.",
    tone: "lime",
  },
  {
    number: "04",
    title: "Personalised support",
    text: "Receive guidance shaped around your child’s month, your notes, and your family’s needs.",
    tone: "teal",
  },
];

/**
 * Static product-direction concept only.
 *
 * Future domain boundaries may include ChildProfile, Journal, Calendar,
 * MonthlyCheckIn, SupportPack, DevelopmentSummary, QuestionsForProfessional,
 * and DevelopMonthCompanion. No account, persistence, or personalisation
 * infrastructure is implemented in this homepage preview.
 */
export function PersonalisedSupport() {
  return (
    <section className="section personalised-support-section">
      <div className="container">
        <SectionHeader
          eyebrow="PERSONALISED SUPPORT"
          title="Personalised around your child."
          body="As your family uses DevelopMonth, your child’s journal, calendar, monthly check-ins, and saved support packs help shape the guidance you see. You choose what to add, and DevelopMonth uses that information to make support more relevant to your child and family."
        />
        <div className="personalised-support-grid">
          {personalisedSupportFeatures.map((feature) => (
            <article
              className={`personalised-support-card personalised-support-card-${feature.tone}`}
              key={feature.title}
            >
              <span>{feature.number}</span>
              <h3>{feature.title}</h3>
              <p>{feature.text}</p>
            </article>
          ))}
        </div>
        <div className="companion-panel">
          <div className="companion-intro">
            <GrowthMapIcon
              className="companion-growth-map-icon"
              ariaLabel="DevelopMonth GrowthMap"
            />
            <p className="eyebrow">DEVELOPMONTH COMPANION</p>
            <p className="companion-control-note">
              Parent-controlled <span aria-hidden="true">·</span> You choose
              what to add
            </p>
            <h3>
              A calm companion that helps organise your child&apos;s
              development journey month by month.
            </h3>
            <p>
              Always educational, parent-controlled, and designed to complement
              professional guidance.
            </p>
          </div>
          <div className="companion-capabilities">
            <p>Summarise journal notes and positive development patterns.</p>
            <p>Personalise support packs and everyday activities.</p>
            <p>Prepare questions and monthly development summaries.</p>
            <p>Gently signpost when extra support may be useful.</p>
          </div>
        </div>
        <p className="personalised-support-note">
          Parents choose what they add. DevelopMonth uses that information to
          personalise educational support and should never replace professional
          medical or developmental assessment.
        </p>
        <div className="personalised-preview-action">
          <Link className="button button-primary" href="/prototype">
            Explore the Month 6 product preview{" "}
            <span aria-hidden="true">→</span>
          </Link>
          <span>
            Static concept · Fictional profile · Nothing is saved
          </span>
        </div>
      </div>
    </section>
  );
}

const months = [
  ["01", "Bonding and recovery"],
  ["02", "Feeding and rhythm"],
  ["03", "Sleep patterns"],
  ["04", "Tummy time and connection"],
  ["05", "Curiosity and interaction"],
  ["06", "Starting solids"],
  ["07", "Movement"],
  ["08", "Exploration"],
  ["09", "Communication"],
  ["10", "Confidence"],
  ["11", "First steps forward"],
  ["12", "First year foundations"],
];

export function MonthJourney() {
  return (
    <section className="section month-journey-section" id="year-one">
      <div className="container">
        <SectionHeader
          eyebrow="DEVELOPMONTH YEAR ONE"
          title="Year One. One supported journey."
          body="DevelopMonth organises the first year after birth into monthly development support packs, helping families celebrate growth, support each stage, and feel calmer about what comes next."
        />
        <div className="monthmap" aria-label="DevelopMonth Year One journey">
          {months.map(([number, title], index) => (
            <article
              className={`month-pack month-pack-${index + 1} ${
                index === months.length - 1 ? "month-pack-final" : ""
              }`}
              key={number}
            >
              <span className="month-pack-number">{number}</span>
              <div>
                <small>MONTH {Number(number)}</small>
                <h3>{title}</h3>
              </div>
              {index === months.length - 1 ? (
                <GrowthMapIcon
                  className="month-pack-final-icon"
                  ariaLabel="Month 12 DevelopMonth GrowthMap"
                />
              ) : null}
            </article>
          ))}
        </div>
        <div className="medical-note">
          <span aria-hidden="true">+</span>
          <p>
            Every child develops differently. Month-by-month support offers
            context and questions to ask — not a checklist or comparison.
          </p>
        </div>
      </div>
    </section>
  );
}

export function AdditionalNeeds() {
  return (
    <section className="section additional-needs-section">
      <div className="container additional-needs-shell">
        <div className="additional-needs-copy">
          <p className="eyebrow">POSITIVE SUPPORT FOR EVERY CHILD</p>
          <h2>Every child develops differently.</h2>
          <h3>Support without pressure. Signposting without panic.</h3>
          <p>
            DevelopMonth is designed to help families support development
            positively while noticing patterns calmly. When extra support may
            be useful, it helps parents prepare better questions and seek
            guidance without fear, comparison, or judgement.
          </p>
          <p className="additional-needs-detail">
            If a check-in suggests an area may need extra support, DevelopMonth
            can help prepare questions for a GP, public health nurse,
            paediatrician, speech and language therapist, occupational
            therapist, physiotherapist, dietitian, or other relevant
            professional.
          </p>
        </div>
        <div className="additional-needs-principles" aria-label="Our approach">
          <p>
            <span>01</span>
            <strong>Notice calmly</strong>
          </p>
          <p>
            <span>02</span>
            <strong>Ask better questions</strong>
          </p>
          <p>
            <span>03</span>
            <strong>Seek guidance when needed</strong>
          </p>
        </div>
      </div>
    </section>
  );
}

export function TrustSection() {
  return (
    <section className="section trust-section">
      <div className="container">
        <div className="trust-layout">
          <SectionHeader
            eyebrow="CONFIDENT FAMILY SUPPORT"
            title="Built for confident support, not comparison."
            body="Parenting information can feel fragmented, overwhelming, and comparison-driven. DevelopMonth is being built around positive development support, parent-controlled personalisation, responsible signposting, and family confidence."
          />
          <div className="trust-statements">
            <p>
              <span>Not more pressure.</span>
              <strong>More support.</strong>
            </p>
            <p>
              <span>Not more comparison.</span>
              <strong>More confidence.</strong>
            </p>
            <p>
              <span>Not more panic.</span>
              <strong>Clearer next steps.</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function PregMonthBridge() {
  return (
    <section className="section foundation-section" id="foundation">
      <div className="container foundation-shell">
        <div className="foundation-copy">
          <p className="eyebrow">PREGMONTH → DEVELOPMONTH</p>
          <h2>
            Development starts before birth.
            <br />
            Support continues after birth.
          </h2>
          <p>
            PregMonth helps families build the foundation before birth.
            DevelopMonth continues the journey after birth with monthly
            development check-ins, parenting support, and child development
            guidance.
          </p>
        </div>
        <div className="foundation-visual" aria-label="PregMonth to DevelopMonth">
          <div className="foundation-brand foundation-brand-preg">
            <BumpMapIcon
              className="foundation-icon"
              ariaLabel="PregMonth BumpMap"
            />
            <div>
              <span>PregMonth</span>
              <small>Pregnancy, month by month.</small>
            </div>
          </div>
          <PregnancyToParentingBridge />
          <div className="foundation-brand foundation-brand-develop">
            <GrowthMapIcon
              className="foundation-icon"
              ariaLabel="DevelopMonth GrowthMap"
            />
            <div>
              <span>DevelopMonth</span>
              <small>Child development and parenting, month by month.</small>
            </div>
          </div>
          <p>From pregnancy to your child’s development, month by month.</p>
        </div>
      </div>
    </section>
  );
}

export function ResearchFund() {
  return (
    <section className="section research-mission-section" id="research">
      <div className="container research-mission-layout">
        <div className="research-mission-copy">
          <p className="eyebrow">RESEARCH AND IMPACT</p>
          <h2>Research for every stage of early development.</h2>
          <p className="research-mission-body">
            As DevelopMonth grows, a share of future profits will support child
            development research, family health, early support, and children
            with additional needs.
          </p>
          <div className="research-pillars" aria-label="Research priorities">
            <p><span>01</span> Child development</p>
            <p><span>02</span> Parenting and family support</p>
            <p><span>03</span> Additional needs and early support</p>
          </div>
        </div>
        <div className="research-mission-object">
          <GrowthMapIcon
            className="research-mission-icon"
            ariaLabel="DevelopMonth GrowthMap"
          />
          <div>
            <span>OUR LONG-TERM AMBITION</span>
            <strong>
              Three priorities.
              <br />
              One research mission.
            </strong>
          </div>
        </div>
      </div>
    </section>
  );
}

const membershipBenefits = [
  ["01", "Early access to Year One support packs"],
  ["02", "Shape personalised family guidance"],
  ["03", "Research updates and platform previews"],
];

const membershipLevels = [
  ["€50/month", "Mission supporter"],
  ["€25/month", "Family support member"],
  ["€10/month", "Research supporter"],
];

export function FoundingMembership() {
  return (
    <section className="section membership-section">
      <div className="container membership-layout">
        <div className="membership-copy">
          <p className="eyebrow">FOUNDING MEMBERSHIP PREVIEW</p>
          <h2>Become a founding family.</h2>
          <p>
            Founding families help shape DevelopMonth from the beginning —
            supporting Year One development packs, personalised family
            guidance, research updates, and the wider PregMonth → DevelopMonth
            journey.
          </p>
          <small>
            Final membership details may evolve before launch. DevelopMonth is
            educational and supportive only and does not provide diagnosis,
            treatment, or developmental assessment.
          </small>
        </div>
        <div className="membership-card">
          <div className="membership-card-heading">
            <span>FOUNDING FAMILY MEMBERSHIP</span>
            <i>01</i>
          </div>
          <strong>€50</strong>
          <p>per month for the first 12 months</p>
          <div className="membership-divider" />
          <h3>Your founding access includes:</h3>
          <div className="membership-tiers">
            {membershipBenefits.map(([number, label]) => (
              <p key={label}>
                <strong>{number}</strong>
                <span>{label}</span>
              </p>
            ))}
          </div>
          <h4>After 12 months, choose your level:</h4>
          <div className="membership-levels">
            {membershipLevels.map(([price, label]) => (
              <p key={label}>
                <strong>{price}</strong>
                <span>{label}</span>
              </p>
            ))}
          </div>
          <a className="button button-primary" href="#waitlist">
            Register your interest <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export function WaitlistSection() {
  return (
    <section className="section waitlist-section" id="waitlist">
      <div className="container waitlist-shell">
        <div className="waitlist-copy">
          <p className="eyebrow">JOIN THE FOUNDING GROUP</p>
          <h2>Join the DevelopMonth waitlist.</h2>
          <p>
            Help shape a meaningful family-development platform and be first
            to hear about Year One support packs, early access, research
            updates, and founding membership.
          </p>
          <div className="waitlist-points">
            <p><span aria-hidden="true">✓</span> Monthly support packs</p>
            <p><span aria-hidden="true">✓</span> Personalised family support</p>
            <p><span aria-hidden="true">✓</span> Research updates</p>
            <p><span aria-hidden="true">✓</span> DevelopMonth early access</p>
          </div>
        </div>
        <WaitlistForm />
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <a href="#top" aria-label="DevelopMonth home">
            <Wordmark footer />
          </a>
          <nav aria-label="Footer navigation">
            <a href="#vision">Vision</a>
            <a href="#year-one">Year One</a>
            <a href="#support-blocks">Support blocks</a>
            <a href="#research">Research Fund</a>
            <a href="#waitlist">Waitlist</a>
            <a href="#foundation">Foundation</a>
            <Link href="/prototype">Product preview</Link>
          </nav>
        </div>
        <div className="footer-bridge">
          <span>DevelopMonth</span>
          <i aria-hidden="true" />
          <span>Month by month</span>
          <strong>
            Child development and parenting, month by month.
          </strong>
        </div>
        <div className="footer-bottom">
          <p>
            DevelopMonth provides educational and supportive information only
            and does not replace professional medical advice, diagnosis,
            developmental assessment, or treatment. For concerns about a
            child’s health, development, feeding, sleep, movement,
            communication, or wellbeing, families should contact their GP,
            public health nurse, paediatrician, therapist, emergency services,
            or local healthcare provider.
          </p>
          <span>© {new Date().getFullYear()} DevelopMonth</span>
        </div>
      </div>
    </footer>
  );
}
