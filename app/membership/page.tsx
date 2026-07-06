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
        body="Not a normal app subscription: a proposed founding membership to help build better pregnancy and child-development support."
        eyebrow="FOUNDING FAMILIES"
        primaryHref="/#waitlist"
        primaryLabel="Preview the waitlist"
        secondaryHref="/research"
        secondaryLabel="Read the research mission"
        title="Help shape a calmer month-by-month support system."
      />
      <FoundingFamilyMembership />
      <SafetyBoundary />
    </FoundationPageShell>
  );
}

