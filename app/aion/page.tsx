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
        body="Aion helps parents understand their child’s month of development, save useful questions, and organise support around their family’s rhythm."
        eyebrow="AION · PRONOUNCED EYE-ON"
        primaryHref="/months/month-6"
        primaryLabel="Explore Month 6 examples"
        secondaryHref="/prototype/companion"
        secondaryLabel="Open the static companion concept"
        title="Your calm child-development companion, month by month."
      />
      <PreviewOnlyNotice />
      <CompanionCard prompts={monthSixDevelopmentMonth.companionPrompts} />
      <SafetyBoundary />
    </FoundationPageShell>
  );
}
