import type { Metadata } from "next";
import {
  FeatureBand,
  FoundationPageShell,
  PageHero,
  PreviewOnlyNotice,
  ProfessionalReviewStatus,
  SafetyBoundary,
  SourceRegisterStatus,
} from "@/components/foundation/MonthMapFoundation";

export const metadata: Metadata = {
  title: "Safety and professional boundaries — DevelopMonth",
  description:
    "DevelopMonth’s educational, organisational, professional-review, and source-governance boundaries.",
};

export default function SafetyPage() {
  return (
    <FoundationPageShell>
      <PageHero
        body="DevelopMonth is designed to make support easier to understand while staying clear about its limits, its draft status, and when families should speak with a relevant professional."
        eyebrow="SAFETY BY DESIGN"
        primaryHref="/months/month-6"
        primaryLabel="See draft content status"
        secondaryHref="/"
        secondaryLabel="Return to the homepage"
        title="Clear boundaries. Calm support."
        visual="safety"
      />
      <PreviewOnlyNotice />
      <ProfessionalReviewStatus />
      <SourceRegisterStatus />
      <FeatureBand
        body="Safety is not a disclaimer added at the end. It shapes the information, the visual status, the action language, and the route to appropriate professional help."
        eyebrow="FOUR CLEAR BOUNDARIES"
        items={[
          {
            number: "01",
            title: "Education",
            body: "DevelopMonth can explain reviewed information and organise practical questions.",
          },
          {
            number: "02",
            title: "Parent control",
            body: "Families choose what to read, what to add, and which suggestions feel useful.",
          },
          {
            number: "03",
            title: "Professional guidance",
            body: "Individual concerns belong with a GP, public health nurse, paediatrician, therapist, or care team.",
          },
          {
            number: "04",
            title: "Urgent help",
            body: "Life-threatening emergencies must route clearly to 112 or 999 in Ireland.",
          },
        ]}
        title="Support stays useful when its limits stay visible."
        tone="teal"
      />
      <SafetyBoundary />
    </FoundationPageShell>
  );
}
