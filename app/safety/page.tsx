import type { Metadata } from "next";
import {
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
      />
      <PreviewOnlyNotice />
      <ProfessionalReviewStatus />
      <SourceRegisterStatus />
      <SafetyBoundary />
    </FoundationPageShell>
  );
}
