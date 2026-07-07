import type { Metadata } from "next";
import Link from "next/link";
import {
  FoundationPageShell,
  PageHero,
  PreviewOnlyNotice,
  ProfessionalReviewStatus,
  SafetyBoundary,
} from "@/components/foundation/MonthMapFoundation";
import styles from "@/components/foundation/foundation.module.css";
import { developMonthYearOne } from "@/lib/month-content";

export const metadata: Metadata = {
  title: "DevelopMonth Year One — Month-by-month child development",
  description:
    "Explore the static DevelopMonth Year One architecture from newborn support through Month 12.",
};

export default function MonthsPage() {
  return (
    <FoundationPageShell>
      <PageHero
        body="You do not need every piece of child-development information at once. You need calm, useful support for the month your child is in now."
        eyebrow="DEVELOPMONTH YEAR ONE"
        primaryHref="/months/month-6"
        primaryLabel="Explore Month 6"
        secondaryHref="/prototype"
        secondaryLabel="Open the product prototype"
        title="Year One support, month by month."
      />
      <PreviewOnlyNotice />
      <ProfessionalReviewStatus />

      <section className={styles.monthOverview}>
        <div className={styles.monthOverviewHeading}>
          <p className={styles.eyebrow}>BIRTH TO 12 MONTHS</p>
          <h2>A gentle journey through Year One.</h2>
          <p>
            Each stage leads with positive development, practical family
            support, parent confidence, and professional guidance when needed.
            Month 6 is the first detailed content prototype.
          </p>
        </div>
        <div className={styles.monthGrid}>
          {developMonthYearOne.map((month) => {
            const isMonthSix = month.monthNumber === 6;
            const label =
              month.monthNumber === 0
                ? "Month 0 · Newborn"
                : `Month ${month.monthNumber}`;

            return (
              <article
                className={`${styles.monthCard} ${
                  isMonthSix ? styles.monthCardActive : ""
                }`}
                key={month.id}
              >
                <span>{label}</span>
                <h3>{month.title}</h3>
                <p>{month.overview}</p>
                <div className={styles.monthThemes}>
                  {month.whatIsGrowing.map((theme) => (
                    <small key={theme}>{theme}</small>
                  ))}
                </div>
                {isMonthSix ? (
                  <Link
                    className={styles.monthCardLink}
                    href="/months/month-6"
                  >
                    Explore the draft Month 6 support pack →
                  </Link>
                ) : (
                  <small className={styles.monthCardLink}>
                    Planned draft architecture
                  </small>
                )}
              </article>
            );
          })}
        </div>
      </section>
      <SafetyBoundary />
    </FoundationPageShell>
  );
}
