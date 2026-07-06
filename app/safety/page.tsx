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
        body="Trust starts with being clear about what DevelopMonth can support, what it cannot do, and when families should speak with a relevant professional."
        eyebrow="SAFETY BY DESIGN"
        primaryHref="/months/month-6"
        primaryLabel="See draft content status"
        secondaryHref="/"
        secondaryLabel="Return to the homepage"
        title="Human support first. Clear boundaries always."
      />
      <PreviewOnlyNotice />
      <ProfessionalReviewStatus />
      <SourceRegisterStatus />
      <SafetyBoundary />
    </FoundationPageShell>
  );
}

