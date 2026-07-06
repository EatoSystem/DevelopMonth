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

const growthThemes = [
  {
    title: "Movement",
    body: "Reaching, rolling, sitting practice, and more floor play.",
  },
  {
    title: "Feeding",
    body: "New tastes, textures, routines, and family food confidence.",
  },
  {
    title: "Connection",
    body: "More eye contact, laughter, back-and-forth play, and shared attention.",
  },
  {
    title: "Curiosity",
    body: "More interest in objects, sounds, faces, and everyday routines.",
  },
] as const;

const questionsToSave = [
  "How can I make starting solids feel calm?",
  "What should I ask if feeding feels stressful?",
  "How much floor play is useful at this stage?",
  "What should I mention at the next health check?",
] as const;

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
          <h1>Rory’s Month 6 Support Pack</h1>
          <h2 className={styles.monthHeroSubtitle}>
            Starting solids, movement, and connection
          </h2>
          <p>
            Month 6 can bring new tastes, stronger movement, growing curiosity,
            and more back-and-forth connection. This support pack brings
            together calm ideas, journal prompts, check-ins, reminders, and
            questions for this stage.
          </p>
          <div className={styles.themeChips} aria-label="Month 6 themes">
            <span>Feeding</span>
            <span>Movement</span>
            <span>Play</span>
            <span>Connection</span>
          </div>
          <div className={styles.monthHeroActions}>
            <Link href="/prototype/check-in">Start check-in</Link>
            <Link href="/prototype/journal">Add journal note</Link>
          </div>
          <p className={styles.monthHeroPreviewNote}>
            This is a static concept. Nothing entered here is saved or sent
            anywhere.
          </p>
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

      <section
        className={styles.growthSection}
        aria-labelledby="month-growth-title"
      >
        <div className={styles.growthHeading}>
          <div>
            <p className={styles.eyebrow}>POSITIVE DEVELOPMENT</p>
            <h2 id="month-growth-title">What’s growing this month?</h2>
          </div>
          <p>
            Every child develops differently, but Month 6 may bring new ways
            to explore, connect, move, feed, and play.
          </p>
        </div>
        <div className={styles.growthGrid}>
          {growthThemes.map((theme, index) => (
            <article key={theme.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{theme.title}</h3>
              <p>{theme.body}</p>
            </article>
          ))}
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
            your child and family, without asking you to track every moment.
          </p>
        </div>
        <div className={styles.quickGrid}>
          <Link href="/prototype/journal" className={styles.quickCard}>
            <span>01</span>
            <h3>Journal</h3>
            <p>2 small wins captured this month.</p>
            <strong>Add a note →</strong>
          </Link>
          <Link href="/prototype/calendar" className={styles.quickCard}>
            <span>02</span>
            <h3>Calendar</h3>
            <p>Next family reminder: 12 July.</p>
            <strong>View reminders →</strong>
          </Link>
          <Link href="/prototype/check-in" className={styles.quickCard}>
            <span>03</span>
            <h3>Check-in</h3>
            <p>A short monthly reflection, never a test.</p>
            <strong>Start check-in →</strong>
          </Link>
          <Link href="/prototype/support-pack" className={styles.quickCard}>
            <span>04</span>
            <h3>Support pack</h3>
            <p>Six warm, practical ideas for Month 6.</p>
            <strong>Explore support →</strong>
          </Link>
        </div>
      </section>

      <section className={styles.todayLayout}>
        <article className={styles.todayCard}>
          <p className={styles.eyebrow}>TODAY’S SUPPORT IDEA</p>
          <span className={styles.todayDuration}>Today’s 5-minute idea</span>
          <h2>Reach, roll, laugh, repeat.</h2>
          <p>
            Place a soft toy slightly to one side during floor play. Give Rory
            time to look, turn, reach, or simply enjoy the game with you.
          </p>
          <div className={styles.todayTags} aria-label="Support idea themes">
            <span>Play</span>
            <span>Movement</span>
            <span>Connection</span>
          </div>
        </article>
        <article className={styles.nextMoment}>
          <p className={styles.eyebrow}>NEXT FAMILY MOMENT</p>
          <strong>12</strong>
          <span>JULY</span>
          <h3>Try a new texture at lunch</h3>
          <p>A gentle family reminder—not a target or deadline.</p>
        </article>
      </section>

      <section
        className={styles.questionsSection}
        aria-labelledby="questions-title"
      >
        <div className={styles.questionsHeading}>
          <div>
            <p className={styles.eyebrow}>PARENT-CONTROLLED NOTES</p>
            <h2 id="questions-title">Questions you may want to save</h2>
          </div>
          <div className={styles.questionsAction}>
            <button type="button" disabled>
              Save to questions
            </button>
            <span>Preview only — nothing is saved.</span>
          </div>
        </div>
        <div className={styles.questionsList}>
          {questionsToSave.map((question, index) => (
            <article key={question}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{question}</p>
            </article>
          ))}
        </div>
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
          <p>Four fictional moments</p>
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
      <section className={`${styles.viewIntro} ${styles.companionIntro}`}>
        <p className={styles.eyebrow}>DEVELOPMONTH COMPANION</p>
        <h1>DevelopMonth Companion</h1>
        <h2>A calm companion for the month you are in.</h2>
        <p>
          The Companion is designed to organise the journal notes, check-ins,
          reminders, and support ideas parents choose to add — helping prepare
          summaries, questions, and practical next steps.
        </p>
      </section>
      <section className={styles.companionConcept}>
        <div className={styles.companionSources}>
          <p className={styles.eyebrow}>HOW IT COULD HELP</p>
          <h2>Built around your choices.</h2>
          <ul className={styles.companionCapabilityList}>
            <li>Organising notes</li>
            <li>Preparing questions</li>
            <li>Summarising the month</li>
            <li>Suggesting support ideas from the support pack</li>
          </ul>
          <small>
            Future concept only. Parents would choose what to include, leave
            out, or remove.
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
            Illustrative future summary for product testing only. No automated
            personalisation is implemented.
          </small>
        </div>
      </section>
      <p className={styles.companionResponsibleNote}>
        Parent-controlled. Educational only. Not a diagnosis, assessment, or
        replacement for professional guidance.
      </p>
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
