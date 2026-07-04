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
          <a href="#support-blocks">Support blocks</a>
          <a href="#months">Month journey</a>
          <a href="#research">Research Fund</a>
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
            <span>Calm</span>
            <span>Nutrition</span>
            <span>Questions</span>
          </div>
        </div>
        <div className="hero-copy">
          <p className="eyebrow eyebrow-rule">DEVELOPMONTH</p>
          <h1>
            Pregnancy,
            <br />
            month by month.
          </h1>
          <p className="hero-intro">
            Every month brings new questions. DevelopMonth gives you a calm
            support pack for the stage you are in — with guidance for what to
            understand, what to eat, what to prepare, and what to ask.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#waitlist">
              Join the Waitlist <span aria-hidden="true">↗</span>
            </a>
            <a className="button button-text" href="#support-blocks">
              Explore Support Packs <span aria-hidden="true">↓</span>
            </a>
          </div>
          <p className="hero-audience">
            <span aria-hidden="true">
              <i />
              <i />
              <i />
            </span>
            Early access for parents, partners, families, healthcare
            professionals, and researchers.
          </p>
        </div>

      </div>
      <div className="container hero-promise">
        <span>01</span>
        <p>
          You do not need all the information at once.
          <strong> You need the right support for this month.</strong>
        </p>
      </div>
    </section>
  );
}

const monthPackContents = [
  "Calm",
  "Knowledge",
  "Nutrition",
  "Preparation",
  "Questions",
  "Family",
];

export function CorePromise() {
  return (
    <section className="section core-promise" id="vision">
      <div className="container promise-layout">
        <div className="promise-copy">
          <p className="eyebrow">THE MONTHLY SUPPORT PACK</p>
          <h2>A support pack for every month before birth.</h2>
          <p>
            DevelopMonth turns pregnancy into calm monthly support packs, so
            families can focus on what matters now instead of trying to absorb
            everything at once.
          </p>
        </div>
        <article className="month-support-pack">
          <div className="month-support-pack-top">
            <span>MONTH 01</span>
            <small>DEVELOPMONTH</small>
          </div>
          <h3>Foundations</h3>
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
    title: "Calm",
    text: "Reassurance without overwhelm.",
    tone: "pink",
  },
  {
    number: "02",
    title: "Knowledge",
    text: "Understand what is changing this month.",
    tone: "aqua-light",
  },
  {
    number: "03",
    title: "Nutrition",
    text: "Food-first support for energy, digestion, key nutrients, hydration, cravings, nausea, and food safety.",
    tone: "aqua",
  },
  {
    number: "04",
    title: "Preparation",
    text: "Appointments, questions, scans, birth planning, and next-stage prompts.",
    tone: "lime",
  },
  {
    number: "05",
    title: "Questions",
    text: "Know what to ask your healthcare team.",
    tone: "pink-light",
  },
  {
    number: "06",
    title: "Family",
    text: "Support for partners, family members, and the wider care circle.",
    tone: "sage",
  },
];

export function SupportBlocks() {
  return (
    <section className="section support-blocks-section" id="support-blocks">
      <div className="container">
        <SectionHeader
          eyebrow="INSIDE EACH SUPPORT PACK"
          title="What comes inside each support pack?"
          body="Each month brings together the support families need for that stage."
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
          Expert-informed guidance, community support, and research updates
          will grow into the platform over time.
        </p>
      </div>
    </section>
  );
}

const months = [
  ["01", "Foundations"],
  ["02", "Early changes"],
  ["03", "First trimester support"],
  ["04", "Energy and growth"],
  ["05", "Movement and connection"],
  ["06", "Preparation begins"],
  ["07", "Third trimester support"],
  ["08", "Getting ready"],
  ["09", "Birth and beyond"],
];

export function MonthJourney() {
  return (
    <section className="section month-journey-section" id="months">
      <div className="container">
        <SectionHeader
          eyebrow="THE MONTHMAP JOURNEY"
          title="Nine months. One supported journey."
          body="Each month has its own support pack, building toward birth and the transition into DevelopMonth."
        />
        <div className="monthmap" aria-label="Nine month DevelopMonth journey">
          {months.map(([number, title], index) => (
            <article
              className={`month-pack month-pack-${index + 1}`}
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
                  ariaLabel="Month 9 DevelopMonth GrowthMap"
                />
              ) : null}
            </article>
          ))}
        </div>
        <div className="medical-note">
          <span aria-hidden="true">+</span>
          <p>
            DevelopMonth is designed to complement, not replace, doctors,
            midwives, maternity teams, dietitians, or other healthcare
            professionals.
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
            body="A calmer way to understand this month, prepare for the next, and know when professional support matters."
          />
          <div className="trust-statements">
            <p>
              <span>Not more scrolling.</span>
              <strong>More clarity.</strong>
            </p>
            <p>
              <span>Not more fear.</span>
              <strong>More preparation.</strong>
            </p>
            <p>
              <span>Not more noise.</span>
              <strong>More support.</strong>
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
          <h2>A child’s development starts before birth.</h2>
          <p>
            PregMonth helps families build the foundation before birth.
            DevelopMonth continues the journey after birth with child
            development and parenting support, month by month.
          </p>
          <strong>
            Build the foundation before birth. Support development after birth.
          </strong>
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
          <p className="eyebrow">THE MONTH RESEARCH FUND</p>
          <h2>
            Supporting families today.
            <br />
            Funding better answers for tomorrow.
          </h2>
          <p>
            DevelopMonth is being built with a long-term commitment to support
            pregnancy research, maternal health, child development, and
            children with additional needs as the platform grows.
          </p>
        </div>
        <div className="research-mission-object">
          <GrowthMapIcon
            className="research-mission-icon"
            ariaLabel="DevelopMonth GrowthMap"
          />
          <div>
            <span>OUR LONG-TERM AMBITION</span>
            <strong>
              Nine stages.
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
  ["01", "Early product access"],
  ["02", "Shape the monthly support packs"],
  ["03", "Research updates and DevelopMonth priority"],
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
            supporting the development of monthly support packs, research
            updates, and the bridge into DevelopMonth.
          </p>
          <small>
            Final membership benefits and pricing may evolve before launch.
            Membership supports early access, guidance tools, product updates,
            and mission participation—not clinical care.
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
            Be first to hear about early access, monthly support packs,
            founding membership, research updates, and DevelopMonth.
          </p>
          <div className="waitlist-points">
            <p><span aria-hidden="true">✓</span> Monthly support packs</p>
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
            <a href="#support-blocks">Support blocks</a>
            <a href="#months">Month journey</a>
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
