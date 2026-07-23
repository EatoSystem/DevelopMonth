import type { Metadata } from "next";
import {
  CompanionCard,
  FeatureBand,
  FoundationPageShell,
  PageHero,
  PreviewOnlyNotice,
  SafetyBoundary,
} from "@/components/foundation/MonthMapFoundation";
import { monthSixDevelopmentMonth } from "@/lib/month-content";

export const metadata: Metadata = {
  title: "Meet Aion — DevelopMonth",
  description:
    "Meet Aion, the static concept for a calm child-development companion designed to use reviewed monthly content in the future.",
};

export default function AionPage() {
  return (
    <FoundationPageShell>
      <PageHero
        body="Aion is a future, parent-controlled companion concept. It would use reviewed monthly content and the information parents choose to add to organise calm guidance, useful questions, and monthly summaries."
        eyebrow="AION · PRONOUNCED EYE-ON"
        primaryHref="/months/month-6"
        primaryLabel="Explore Month 6 examples"
        secondaryHref="/prototype/companion"
        secondaryLabel="Open the static Aion concept"
        title="A calm companion for child development, month by month."
        visual="aion"
      />
      <PreviewOnlyNotice />
      <FeatureBand
        body="Aion should make reviewed monthly support easier to organise and understand. It should never turn family life into a data project."
        eyebrow="HOW AION SHOULD FEEL"
        items={[
          {
            number: "01",
            title: "Chosen by parents",
            body: "Guidance is shaped only by the information a parent actively chooses to add.",
          },
          {
            number: "02",
            title: "Grounded in the month",
            body: "Reviewed support-pack content gives every response a clear stage and source context.",
          },
          {
            number: "03",
            title: "Useful, not authoritative",
            body: "Aion can organise ideas and questions, but it does not decide what a child needs.",
          },
          {
            number: "04",
            title: "Calm by default",
            body: "No scores, comparisons, hidden monitoring, or pressure to record every moment.",
          },
        ]}
        title="Support that explains, organises, and gives control back."
        tone="aqua"
      />
      <CompanionCard prompts={monthSixDevelopmentMonth.companionPrompts} />
      <SafetyBoundary />
    </FoundationPageShell>
  );
}
