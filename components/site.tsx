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
          <div className="hero-brand-labels" aria-label="Support themes">
            <span>Check in</span>
            <span>Support</span>
            <span>Signpost</span>
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
            DevelopMonth gives families calm monthly support packs — and, over
            time, personalises guidance around the journal, check-ins, and
            calendar you choose to add.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#waitlist">
              Join the Waitlist <span aria-hidden="true">↗</span>
            </a>
            <a className="button button-text" href="#year-one">
              Explore Year One <span aria-hidden="true">↓</span>
            </a>
          </div>
          <p className="hero-audience">
            <span aria-hidden="true">
              <i />
              <i />
              <i />
            </span>
            Early access for parents, families, healthcare professionals,
            educators, therapists, and researchers.
          </p>
        </div>

      </div>
      <div className="container hero-promise">
        <span>01</span>
        <p>
          You do not need to track everything.
          <strong> You need to know what matters this month.</strong>
        </p>
      </div>
    </section>
  );
}

const assessmentDomains = [
  "Movement",
  "Feeding",
  "Sleep",
  "Bonding",
  "Communication",
  "Play",
  "Parenting",
  "Health questions",
  "Additional needs",
];

const checkInQuestions = [
  "What may be changing?",
  "How is your child moving?",
  "How are feeding and sleep changing?",
  "How are they communicating?",
  "What would you like to ask?",
];

export function CorePromise() {
  return (
    <section className="section vision-section" id="vision">
      <div className="container vision-shell">
        <p className="eyebrow">THE DEVELOPMONTH APPROACH</p>
        <h2>
          Monthly check-ins.
          <br />
          Calm support.
          <br />
          Clear next steps.
        </h2>
        <p>
          DevelopMonth helps families notice what may be emerging each month,
          support development through everyday routines and play, and prepare
          thoughtful questions when professional guidance may help.
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
          <h2>A development check-in for every month.</h2>
          <p>
            Monthly support packs include positive development guidance,
            parent-friendly check-ins, practical activities, family support,
            and gentle signposting when extra help may be useful.
          </p>
          <div className="assessment-domain-list" aria-label="Development areas">
            {assessmentDomains.map((domain) => (
              <span key={domain}>{domain}</span>
            ))}
          </div>
        </div>
        <article className="month-support-pack development-check-in-card">
          <div className="month-support-pack-top">
            <span>MONTH 06</span>
            <small>DEVELOPMONTH</small>
          </div>
          <h3>Starting solids and movement</h3>
          <p>This month&apos;s check-in</p>
          <div className="month-support-pack-list">
            {checkInQuestions.map((question, index) => (
              <span key={question}>
                <i>{String(index + 1).padStart(2, "0")}</i>
                {question}
              </span>
            ))}
          </div>
          <div className="check-in-next-steps">
            <span>Keep supporting</span>
            <span>Try these activities</span>
            <span>Consider asking a professional</span>
            <span>Seek urgent help for severe or sudden symptoms</span>
          </div>
        </article>
      </div>
    </section>
  );
}

const supportFlags = [
  {
    level: "GREEN",
    title: "Keep supporting",
    text: "Your child may be developing as expected for this stage. Continue everyday play, feeding, sleep, and bonding support.",
    tone: "green",
  },
  {
    level: "AMBER",
    title: "Ask and observe",
    text: "Something may be worth discussing with your GP, public health nurse, paediatrician, or therapist, especially if it continues or concerns you.",
    tone: "amber",
  },
  {
    level: "RED",
    title: "Seek guidance quickly",
    text: "If your child loses skills, has sudden changes, appears very unwell, or you are seriously concerned, contact your healthcare provider or emergency services.",
    tone: "urgent",
  },
];

export function SupportFlags() {
  return (
    <section className="section support-flags-section">
      <div className="container">
        <SectionHeader
          eyebrow="CALM REFERRAL SIGNPOSTING"
          title="Support flags, not pressure."
          body="DevelopMonth can help parents understand whether something may simply need support at home, a question for a professional, or more urgent guidance."
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
          A support flag is not a diagnosis. It is an educational prompt to
          help families prepare questions and seek professional advice when
          appropriate.
        </p>
      </div>
    </section>
  );
}

const supportBlocks = [
  {
    number: "01",
    title: "Development check-in",
    text: "Simple questions for the stage your child is in.",
    tone: "aqua",
  },
  {
    number: "02",
    title: "Support activities",
    text: "Play, movement, bonding, feeding, and routine ideas to support development.",
    tone: "sage",
  },
  {
    number: "03",
    title: "Feeding and sleep",
    text: "Practical guidance for changing rhythms.",
    tone: "aqua-light",
  },
  {
    number: "04",
    title: "Questions to ask",
    text: "Prompts for your GP, public health nurse, paediatrician, therapist, or care team.",
    tone: "lime",
  },
  {
    number: "05",
    title: "Support flags",
    text: "Calm signposting when extra help may be useful.",
    tone: "teal",
  },
  {
    number: "06",
    title: "Family support",
    text: "Ways partners, grandparents, and carers can help.",
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
          body="Monthly support packs include positive development guidance, parent-friendly check-ins, practical activities, family support, and gentle signposting when extra help may be useful."
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
          Educational support only. DevelopMonth does not diagnose, treat, or
          replace professional developmental assessment.
        </p>
      </div>
    </section>
  );
}

const personalisedSupportFeatures = [
  {
    number: "01",
    title: "Journal",
    text: "Capture the small wins, questions, routines, and changes that matter.",
    tone: "aqua",
  },
  {
    number: "02",
    title: "Calendar",
    text: "Keep health checks, appointments, reminders, and monthly check-ins in one place.",
    tone: "sage",
  },
  {
    number: "03",
    title: "Check-ins",
    text: "Reflect on development, feeding, sleep, bonding, movement, communication, and family support.",
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
          body="As your family uses DevelopMonth, your child’s journal, monthly check-ins, calendar, and saved support packs help personalise the guidance you see. DevelopMonth can help you notice progress, prepare better questions, choose practical activities, and understand when extra support may be useful — always as educational support, not medical diagnosis."
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
              DevelopMonth learns from the information you choose to add — your
              journal, check-ins, calendar, and support goals — to personalise
              monthly guidance for your child and family.
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
          body="DevelopMonth organises the first year after birth into monthly development check-ins and support packs, so each stage feels clearer, calmer, and more manageable."
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
          <p className="eyebrow">EVERY CHILD DEVELOPS DIFFERENTLY</p>
          <h2>
            Support without pressure.
            <br />
            Signposting without panic.
          </h2>
          <p>
            Every child develops differently. DevelopMonth is designed to help
            families notice patterns calmly, ask better questions, and seek
            professional support when needed — without fear, comparison, or
            judgement.
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
            eyebrow="EARLY SUPPORT, WITHOUT COMPARISON"
            title="Built for early support, not comparison."
            body="Parenting information can feel fragmented, overwhelming, and comparison-driven. DevelopMonth is being built around calm developmental monitoring, responsible signposting, and practical family support."
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
  ["01", "Early access to Year One check-ins"],
  ["02", "Shape support packs and referral signposting"],
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
            supporting Year One development check-ins, monthly support packs,
            referral signposting, research updates, and the wider PregMonth →
            DevelopMonth journey.
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
            <p><span aria-hidden="true">✓</span> Monthly development check-ins</p>
            <p><span aria-hidden="true">✓</span> Calm support flags</p>
            <p><span aria-hidden="true">✓</span> Referral signposting</p>
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
