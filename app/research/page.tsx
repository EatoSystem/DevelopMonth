import type { Metadata } from "next";
import {
  FeatureBand,
  FoundationPageShell,
  PageHero,
  PreviewOnlyNotice,
  ProfessionalReviewStatus,
  ResearchMission,
  SafetyBoundary,
  SourceRegisterStatus,
} from "@/components/foundation/MonthMapFoundation";
import { monthSixDevelopmentMonth } from "@/lib/month-content";

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
        primaryHref="/validation/month-6"
        primaryLabel="Open the Month 6 validation pack"
        secondaryHref="/safety"
        secondaryLabel="Read the safety boundaries"
        title="Every stage deserves better support."
        visual="research"
      />
      <PreviewOnlyNotice />
      <ProfessionalReviewStatus month={monthSixDevelopmentMonth} />
      <SourceRegisterStatus month={monthSixDevelopmentMonth} />
      <FeatureBand
        body="Credible parent support needs more than warm copy. It needs transparent evidence, clearly scoped review, and the confidence to keep content in draft when it is not ready."
        eyebrow="THE REVIEW SYSTEM"
        items={[
          {
            number: "01",
            title: "Listen to parents",
            body: "Test usefulness, emotional tone, comprehension, accessibility, and reasons to return.",
          },
          {
            number: "02",
            title: "Review within scope",
            body: "Feeding, sleep, movement, communication, safety, and signposting need appropriate reviewers.",
          },
          {
            number: "03",
            title: "Show the evidence",
            body: "Material claims map to named sources, freshness checks, jurisdiction, and review decisions.",
          },
          {
            number: "04",
            title: "Publish the status",
            body: "Draft, reviewed, outdated, and approved content must never look the same.",
          },
        ]}
        title="Trust should be designed into the content."
        tone="sage"
      />
      <ResearchMission />
      <SafetyBoundary />
    </FoundationPageShell>
  );
}
