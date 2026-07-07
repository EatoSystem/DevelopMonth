import type { Metadata } from "next";
import {
  CompanionCard,
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
      />
      <PreviewOnlyNotice />
      <CompanionCard prompts={monthSixDevelopmentMonth.companionPrompts} />
      <SafetyBoundary />
    </FoundationPageShell>
  );
}
