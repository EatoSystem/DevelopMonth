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
            <span>Development</span>
            <span>Feeding</span>
            <span>Support</span>
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
            Every month after birth brings new changes, questions, and
            decisions. DevelopMonth gives families a calm support pack for the
            stage they are in — with guidance for development, feeding, sleep,
            bonding, parenting, and what to ask.
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

const monthPackContents = [
  "Development",
  "Feeding",
  "Sleep",
  "Bonding",
  "Parenting",
  "Health questions",
];

export function CorePromise() {
  return (
    <section className="section vision-section" id="vision">
      <div className="container vision-shell">
        <p className="eyebrow">CALM SUPPORT, NOT COMPARISON</p>
        <h2>
          You do not need to track everything.
          <br />
          You need to know what matters this month.
        </h2>
        <p>
          DevelopMonth helps families focus on the stage they are in — with
          calm guidance, practical support, and clear questions to ask when
          professional advice may help.
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
          <h2>A support pack for every month after birth.</h2>
          <p>
            DevelopMonth turns the first year into calm monthly support packs,
            so families can focus on what matters now instead of trying to
            absorb everything at once.
          </p>
        </div>
        <article className="month-support-pack">
          <div className="month-support-pack-top">
            <span>MONTH 01</span>
            <small>DEVELOPMONTH</small>
          </div>
          <h3>Bonding and recovery</h3>
          <p>This month&apos;s support</p>
          <div className="month-support-pack-list">
            {monthPackContents.map((label, index) => (
              <span key={label}>
                <i>{String(index + 1).padStart(2, "0")}</i>
                {label}
              </span>
            ))}
          </div>
          <div className="month-support-pack-mark">
            <GrowthMapIcon ariaLabel="DevelopMonth GrowthMap" />
          </div>
        </article>
      </div>
    </section>
  );
}

const supportBlocks = [
  {
    number: "01",
    title: "Development",
    text: "Understand what may be emerging this month.",
    tone: "aqua",
  },
  {
    number: "02",
    title: "Feeding",
    text: "Support feeding, weaning, variety, hydration, and family food confidence.",
    tone: "sage",
  },
  {
    number: "03",
    title: "Sleep",
    text: "Understand changing sleep rhythms without pressure.",
    tone: "aqua-light",
  },
  {
    number: "04",
    title: "Bonding",
    text: "Support connection, attachment, and emotional security.",
    tone: "lime",
  },
  {
    number: "05",
    title: "Parenting",
    text: "Feel calmer and more confident in daily routines.",
    tone: "teal",
  },
  {
    number: "06",
    title: "Health questions",
    text: "Know what to ask your GP, public health nurse, paediatrician, therapist, or care team.",
    tone: "lime",
  },
];

export function SupportBlocks() {
  return (
    <section className="section support-blocks-section" id="support-blocks">
      <div className="container">
        <SectionHeader
          eyebrow="INSIDE EACH SUPPORT PACK"
          title="What comes inside each support pack?"
          body="Each month brings together the support families need for that stage — not everything, not all at once, just what matters now."
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
          Movement, language, play, family support, additional-needs
          signposting, and research updates grow into the platform over time.
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
          body="DevelopMonth organises the first year after birth into monthly support packs, so each stage feels clearer, calmer, and more manageable."
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

const monthPrompts = [
  "What may be changing?",
  "How can I support development?",
  "What should feeding look like?",
  "How is sleep changing?",
  "What should I ask?",
  "When should I seek guidance?",
  "How can family help?",
];

export function InsideMonth() {
  return (
    <section className="section inside-month-section">
      <div className="container">
        <SectionHeader
          eyebrow="STAGE-SPECIFIC SUPPORT"
          title="What comes inside each month?"
          body="Each month brings together support for what families need now — practical, calm, and stage-specific."
        />
        <div className="inside-month-cluster">
          <article className="inside-month-centre">
            <span>DEVELOPMONTH</span>
            <strong>This month</strong>
            <p>Calm support for the stage you are in.</p>
          </article>
          {monthPrompts.map((prompt, index) => (
            <article
              className={`inside-block inside-block-${index + 1}`}
              key={prompt}
            >
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{prompt}</p>
            </article>
          ))}
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
            eyebrow="THE OUTCOME ECONOMY"
            title="Built for better outcomes, not more attention."
            body="Parenting information can feel fragmented, overwhelming, and comparison-driven. DevelopMonth is being built around clarity, calm support, responsible signposting, and family confidence."
          />
          <div className="trust-statements">
            <p>
              <span>Not more scrolling.</span>
              <strong>More clarity.</strong>
            </p>
            <p>
              <span>Not more pressure.</span>
              <strong>More support.</strong>
            </p>
            <p>
              <span>Not more comparison.</span>
              <strong>More confidence.</strong>
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
            DevelopMonth continues the journey after birth with child
            development and parenting support, month by month.
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
            development research, family health, and support for children with
            additional needs.
          </p>
          <div className="research-pillars" aria-label="Research priorities">
            <p><span>01</span> Child development</p>
            <p><span>02</span> Parenting and family support</p>
            <p><span>03</span> Additional needs</p>
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
  ["02", "Shape parenting tools and signposting"],
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
            supporting Year One development packs, parenting tools,
            additional-needs signposting, research updates, and the wider
            PregMonth → DevelopMonth journey.
          </p>
          <small>
            Final membership benefits and pricing may evolve before launch.
            Membership supports early access, guidance tools, product updates,
            and mission participation—not medical care or developmental
            assessment services.
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
          <p className="eyebrow">JOIN THE MISSION</p>
          <h2>Join the DevelopMonth waitlist.</h2>
          <p>
            Be first to hear about Year One support packs, early access,
            research updates, founding membership, and the future DevelopMonth
            family platform.
          </p>
          <div className="waitlist-points">
            <p><span aria-hidden="true">✓</span> Year One support packs</p>
            <p><span aria-hidden="true">✓</span> Evidence-informed guidance</p>
            <p><span aria-hidden="true">✓</span> Research Fund updates</p>
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
