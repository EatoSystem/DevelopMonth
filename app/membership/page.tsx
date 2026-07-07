import type { Metadata } from "next";
import {
  FoundationPageShell,
  FoundingFamilyMembership,
  PageHero,
  SafetyBoundary,
} from "@/components/foundation/MonthMapFoundation";

export const metadata: Metadata = {
  title: "Founding Family Membership preview — DevelopMonth",
  description:
    "A static preview of the proposed DevelopMonth Founding Family Membership.",
};

export default function MembershipPage() {
  return (
    <FoundationPageShell>
      <PageHero
        body="A proposed founding-family mission for people who want to help shape better pregnancy, child-development, and parenting support before a paid product exists."
        eyebrow="FOUNDING FAMILIES"
        primaryHref="/#waitlist"
        primaryLabel="Preview founding-family interest"
        secondaryHref="/research"
        secondaryLabel="Read the research mission"
        title="Help shape DevelopMonth from the beginning."
      />
      <FoundingFamilyMembership />
      <SafetyBoundary />
    </FoundationPageShell>
  );
}
