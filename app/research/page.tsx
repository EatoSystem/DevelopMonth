import type { Metadata } from "next";
import {
  FoundationPageShell,
  PageHero,
  PreviewOnlyNotice,
  ProfessionalReviewStatus,
  ResearchMission,
  SafetyBoundary,
  SourceRegisterStatus,
} from "@/components/foundation/MonthMapFoundation";

export const metadata: Metadata = {
  title: "Research mission — DevelopMonth",
  description:
    "The DevelopMonth vision for month-by-month child-development and family-support research.",
};

export default function ResearchPage() {
  return (
    <FoundationPageShell>
      <PageHero
        body="DevelopMonth is being shaped through parent research, scoped professional review, source registers, and visible content governance. Content remains draft until reviewed."
        eyebrow="RESEARCH AND IMPACT"
        primaryHref="/months/month-6"
        primaryLabel="Review the Month 6 draft"
        secondaryHref="/safety"
        secondaryLabel="Read the safety boundaries"
        title="Every stage deserves better support."
      />
      <PreviewOnlyNotice />
      <ProfessionalReviewStatus />
      <SourceRegisterStatus />
      <ResearchMission />
      <SafetyBoundary />
    </FoundationPageShell>
  );
}
