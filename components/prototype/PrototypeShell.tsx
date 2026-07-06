import Link from "next/link";
import { GrowthMapIcon } from "@/components/GrowthMapIcon";
import {
  calendarEvents,
  checkInAreas,
  journalEntries,
  monthSixPack,
  prototypeViews,
  type PrototypeView,
} from "@/lib/prototype-data";
import styles from "./prototype.module.css";

type PrototypeShellProps = {
  view: PrototypeView;
};

function viewHref(view: PrototypeView) {
  return view === "this-month" ? "/prototype" : `/prototype/${view}`;
}

function PrototypeHeader() {
  return (
    <header className={styles.header}>
      <Link className={styles.brand} href="/" aria-label="DevelopMonth home">
        <GrowthMapIcon className={styles.brandIcon} />
        <span>
          <strong>DevelopMonth</strong>
          <small>Static research prototype</small>
        </span>
      </Link>
      <div className={styles.headerActions}>
        <span>Month 6 preview</span>
        <Link href="/">Back to homepage</Link>
      </div>
    </header>
  );
}

function ChildProfile() {
  return (
    <section className={styles.childProfile} aria-label="Example child profile">
      <span className={styles.avatar} aria-hidden="true">
        R
      </span>
      <div>
        <p>EXAMPLE PROFILE</p>
        <h2>Rory</h2>
        <span>6 months · Parent-controlled preview</span>
      </div>
    </section>
  );
}

function PrototypeNavigation({ view }: PrototypeShellProps) {
  return (
    <nav className={styles.navigation} aria-label="Product preview">
      {prototypeViews.map((item) => (
        <Link
          className={view === item.slug ? styles.activeNavItem : styles.navItem}
          href={viewHref(item.slug)}
          key={item.slug}
          aria-current={view === item.slug ? "page" : undefined}
        >
          <span>{item.number}</span>
          {item.label}
        </Link>
      ))}
    </nav>
  );
}

function ContextBar({ view }: PrototypeShellProps) {
  const currentView = prototypeViews.find((item) => item.slug === view);

  return (
    <div className={styles.contextBar}>
      <div>
        <span>DEVELOPMONTH YEAR ONE</span>
        <strong>{currentView?.label}</strong>
      </div>
      <p>
        Fictional Month 6 content · Nothing entered here is saved or sent.
      </p>
    </div>
  );
}

function PrototypeDisclosure() {
  return (
    <section
      className={styles.prototypeDisclosure}
      aria-labelledby="prototype-disclosure-title"
    >
      <div>
        <span>RESEARCH AND FEEDBACK ONLY</span>
        <strong id="prototype-disclosure-title">Static prototype</strong>
      </div>
      <div className={styles.prototypeDisclosureLabels}>
        <span>Fictional content</span>
        <span>Saves nothing</span>
        <span>Parent-controlled concept</span>
      </div>
      <p>
        Educational support only. This prototype is not medical advice or a
        developmental assessment and does not replace professional guidance.
      </p>
    </section>
  );
}

function MonthSixReviewStatus() {
  return (
    <aside
      className={styles.reviewStatus}
      aria-label="Month 6 internal content status"
    >
      <strong>Month 6 · Draft content</strong>
      <div>
        <span>Requires professional review</span>
        <span>Source register required</span>
        <span>Jurisdiction to be confirmed</span>
        <span>Not for parent reliance yet</span>
      </div>
    </aside>
  );
}

function ThisMonthView() {
  return (
    <>
      <section className={styles.monthHero}>
        <div>
          <p className={styles.eyebrow}>THIS MONTH · MONTH 06</p>
          <h1>{monthSixPack.title}</h1>
          <p>{monthSixPack.introduction}</p>
          <div className={styles.themeChips} aria-label="Month 6 themes">
            <span>Play</span>
            <span>Feeding</span>
            <span>Movement</span>
            <span>Connection</span>
          </div>
        </div>
        <div className={styles.monthHeroVisual}>
          <GrowthMapIcon
            className={styles.monthGrowthMap}
            ariaLabel="DevelopMonth Month 6 GrowthMap"
            priority
          />
          <span>Support what is growing this month.</span>
        </div>
      </section>

      <section className={styles.sectionBlock}>
        <div className={styles.sectionHeading}>
          <div>
            <p className={styles.eyebrow}>YOUR CALM FAMILY SYSTEM</p>
            <h2>Everything for this month, together.</h2>
          </div>
          <p>
            Add only what feels useful. DevelopMonth organises the month around
            your family, without asking you to track every moment.
          </p>
        </div>
        <div className={styles.quickGrid}>
          <Link href="/prototype/journal" className={styles.quickCard}>
            <span>01</span>
            <h3>Journal</h3>
            <p>Two small wins captured this month.</p>
            <strong>Open journal →</strong>
          </Link>
          <Link href="/prototype/calendar" className={styles.quickCard}>
            <span>02</span>
            <h3>Calendar</h3>
            <p>Your next family reminder is 12 July.</p>
            <strong>View calendar →</strong>
          </Link>
          <Link href="/prototype/check-in" className={styles.quickCard}>
            <span>03</span>
            <h3>Check-in</h3>
            <p>A short monthly reflection, never a test.</p>
            <strong>Preview check-in →</strong>
          </Link>
          <Link href="/prototype/support-pack" className={styles.quickCard}>
            <span>04</span>
            <h3>Support pack</h3>
            <p>Six warm, practical areas for Month 6.</p>
            <strong>Explore the pack →</strong>
          </Link>
        </div>
      </section>

      <section className={styles.todayLayout}>
        <article className={styles.todayCard}>
          <p className={styles.eyebrow}>AN IDEA FOR TODAY</p>
          <h2>Reach, roll, laugh, repeat.</h2>
          <p>
            Place a soft toy slightly to one side during floor play. Give Rory
            time to look, turn, reach, or simply enjoy the game with you.
          </p>
          <span>PLAY · MOVEMENT · CONNECTION</span>
        </article>
        <article className={styles.nextMoment}>
          <p className={styles.eyebrow}>NEXT FAMILY MOMENT</p>
          <strong>12</strong>
          <span>JULY</span>
          <h3>Try a new texture at lunch</h3>
          <p>A gentle family reminder—not a target or deadline.</p>
        </article>
      </section>
    </>
  );
}

function JournalView() {
  return (
    <>
      <section className={styles.viewIntro}>
        <p className={styles.eyebrow}>JOURNAL</p>
        <h1>Keep the moments that matter.</h1>
        <p>
          Capture small wins, changing routines, questions, and ordinary family
          moments. You choose what belongs here.
        </p>
      </section>
      <div className={styles.journalLayout}>
        <section className={styles.journalPrompt}>
          <span>NEW NOTE · STATIC PREVIEW</span>
          <h2>What stood out today?</h2>
          <div className={styles.fakeTextArea}>
            A small win, a funny moment, a question, or something that changed…
          </div>
          <div className={styles.promptChips}>
            <span>Small win</span>
            <span>Play</span>
            <span>Feeding</span>
            <span>Sleep</span>
            <span>Question</span>
          </div>
          <button disabled type="button">
            Save note
          </button>
          <small>Disabled in this static concept. No information is saved.</small>
        </section>
        <section className={styles.entries} aria-label="Example journal entries">
          {journalEntries.map((entry) => (
            <article key={entry.title}>
              <span>{entry.date}</span>
              <h3>{entry.title}</h3>
              <p>{entry.body}</p>
              <div>
                {entry.tags.map((tag) => (
                  <small key={tag}>{tag}</small>
                ))}
              </div>
            </article>
          ))}
        </section>
      </div>
    </>
  );
}

function CalendarView() {
  return (
    <>
      <section className={styles.viewIntro}>
        <p className={styles.eyebrow}>CALENDAR</p>
        <h1>Family moments, without the clutter.</h1>
        <p>
          Keep appointments, reminders, check-ins, and things you would like to
          try in one calm monthly view.
        </p>
      </section>
      <section className={styles.calendarShell}>
        <div className={styles.calendarTop}>
          <div>
            <span>JULY</span>
            <strong>Month 6</strong>
          </div>
          <p>Four moments saved</p>
        </div>
        <div className={styles.eventList}>
          {calendarEvents.map((event) => (
            <article key={event.title}>
              <div>
                <strong>{event.day}</strong>
                <span>{event.month}</span>
              </div>
              <section>
                <small>{event.type}</small>
                <h2>{event.title}</h2>
              </section>
              <span aria-hidden="true">→</span>
            </article>
          ))}
        </div>
        <p className={styles.calmNote}>
          Calendar reminders support family organisation. They are not
          developmental deadlines.
        </p>
      </section>
    </>
  );
}

function CheckInView() {
  return (
    <>
      <section className={styles.viewIntro}>
        <p className={styles.eyebrow}>MONTHLY CHECK-IN</p>
        <h1>A reflection, not a test.</h1>
        <p>
          Notice what is growing, what your family is enjoying, and where a
          little more support might feel useful.
        </p>
      </section>
      <section className={styles.checkInShell}>
        <div className={styles.checkInHeader}>
          <span>MONTH 06</span>
          <p>About 5 calm questions · Parent-controlled</p>
        </div>
        <div className={styles.checkInAreas}>
          {checkInAreas.map((area, index) => (
            <article key={area.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div>
                <h2>{area.title}</h2>
                <p>{area.prompt}</p>
              </div>
              <small>Reflect →</small>
            </article>
          ))}
        </div>
        <div className={styles.checkInFooter}>
          <p>
            Every child develops differently. You can skip any question and
            return later.
          </p>
          <button disabled type="button">
            Begin reflection
          </button>
        </div>
      </section>
    </>
  );
}

function SupportPackView() {
  return (
    <>
      <section className={styles.viewIntro}>
        <p className={styles.eyebrow}>MONTH 06 SUPPORT PACK</p>
        <h1>{monthSixPack.title}</h1>
        <p>{monthSixPack.introduction}</p>
      </section>
      <div className={styles.packGrid}>
        {monthSixPack.themes.map((theme, index) => (
          <article
            className={`${styles.packTheme} ${styles[`theme_${theme.colour}`]}`}
            key={theme.title}
          >
            <span>{String(index + 1).padStart(2, "0")}</span>
            <h2>{theme.title}</h2>
            <p>{theme.summary}</p>
            <ul>
              {theme.ideas.map((idea) => (
                <li key={idea}>{idea}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
      <p className={styles.safetyPanel}>{monthSixPack.safetyNote}</p>
    </>
  );
}

function CompanionView() {
  return (
    <>
      <section className={styles.viewIntro}>
        <p className={styles.eyebrow}>DEVELOPMONTH COMPANION</p>
        <h1>Calm support, shaped by your choices.</h1>
        <p>
          The Companion concept organises information a parent chooses to add.
          It offers educational summaries and prompts—not surveillance,
          diagnosis, or medical assessment.
        </p>
      </section>
      <section className={styles.companionConcept}>
        <div className={styles.companionSources}>
          <p className={styles.eyebrow}>YOU CONTROL THE SOURCES</p>
          <h2>Included in this example</h2>
          <div>
            <span>✓ Month 6 support pack</span>
            <span>✓ Two journal notes</span>
            <span>✓ Calendar reminders</span>
            <span>○ Monthly check-in not added</span>
          </div>
          <small>
            Parents can leave information out, remove it, or stop using
            personalisation.
          </small>
        </div>
        <div className={styles.companionOutput}>
          <div className={styles.companionHeading}>
            <GrowthMapIcon
              className={styles.companionIcon}
              ariaLabel="DevelopMonth GrowthMap"
            />
            <span>
              <small>EXAMPLE COMPANION SUMMARY</small>
              <strong>Month 6 is full of playful exploration.</strong>
            </span>
          </div>
          <p>
            Your journal notes celebrate reaching during floor play and growing
            interest in food. This month’s pack could prioritise movement,
            playful connection, and relaxed texture exploration.
          </p>
          <div className={styles.companionSuggestions}>
            <span>Try: a reaching game on both sides</span>
            <span>Save: your question about new textures</span>
            <span>Prepare: notes for the public health nurse visit</span>
          </div>
          <small>
            Generated-style copy shown for product testing only. No automated
            personalisation is implemented.
          </small>
        </div>
      </section>
    </>
  );
}

function SummaryView() {
  return (
    <>
      <section className={styles.viewIntro}>
        <p className={styles.eyebrow}>MONTHLY DEVELOPMENT SUMMARY</p>
        <h1>A warm record of Month 6.</h1>
        <p>
          Bring together the moments a parent chose to save—without scoring,
          comparison, or declaring whether development is “normal”.
        </p>
      </section>
      <section className={styles.summaryCard}>
        <div className={styles.summaryCover}>
          <GrowthMapIcon
            className={styles.summaryIcon}
            ariaLabel="DevelopMonth GrowthMap"
          />
          <div>
            <span>RORY · MONTH 06</span>
            <h2>Starting solids and movement</h2>
            <p>July 2026</p>
          </div>
        </div>
        <div className={styles.summaryBody}>
          <article>
            <span>01</span>
            <h3>Moments we celebrated</h3>
            <p>
              Reaching further during floor play, shared laughter at lunch, and
              curious exploration of a spoon and pear.
            </p>
          </article>
          <article>
            <span>02</span>
            <h3>What supported our family</h3>
            <p>
              Short floor-play moments, relaxed food exploration, and keeping
              reminders together in the family calendar.
            </p>
          </article>
          <article>
            <span>03</span>
            <h3>Questions we may ask</h3>
            <p>
              Which textures could we try next, and what everyday play best
              supports comfortable movement?
            </p>
          </article>
        </div>
        <p className={styles.summaryDisclaimer}>
          A development summary organises parent-provided notes. It is not a
          clinical record, diagnosis, assessment, or substitute for
          professional care.
        </p>
      </section>
    </>
  );
}

function CurrentView({ view }: PrototypeShellProps) {
  switch (view) {
    case "journal":
      return <JournalView />;
    case "calendar":
      return <CalendarView />;
    case "check-in":
      return <CheckInView />;
    case "support-pack":
      return <SupportPackView />;
    case "companion":
      return <CompanionView />;
    case "summary":
      return <SummaryView />;
    default:
      return <ThisMonthView />;
  }
}

export function PrototypeShell({ view }: PrototypeShellProps) {
  return (
    <div className={styles.page}>
      <PrototypeHeader />
      <div className={styles.shell}>
        <aside className={styles.sidebar}>
          <ChildProfile />
          <PrototypeNavigation view={view} />
          <div className={styles.sidebarNote}>
            <strong>Private by design</strong>
            <p>
              This concept uses fictional example content. No account exists
              and nothing is stored.
            </p>
          </div>
        </aside>
        <main className={styles.main}>
          <ContextBar view={view} />
          <PrototypeDisclosure />
          <MonthSixReviewStatus />
          <CurrentView view={view} />
        </main>
      </div>
      <footer className={styles.footer}>
        <p>
          Static prototype with fictional content for research and feedback
          only. Nothing is saved. DevelopMonth provides educational support and
          does not replace professional medical advice, diagnosis,
          developmental assessment, or treatment.
        </p>
        <span>Static Month 6 product concept · DevelopMonth</span>
      </footer>
    </div>
  );
}
