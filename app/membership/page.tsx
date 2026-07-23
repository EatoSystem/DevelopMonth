import type { Metadata } from "next";
import {
  FeatureBand,
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
        visual="membership"
      />
      <FeatureBand
        body="The founding group exists to improve the product before it becomes a product offer. Participation should feel meaningful, transparent, and optional."
        eyebrow="THE FOUNDING ROLE"
        items={[
          {
            number: "01",
            title: "Shape the support packs",
            body: "Tell us what feels useful, missing, overwhelming, or worth returning to each month.",
          },
          {
            number: "02",
            title: "Test the experience",
            body: "Explore static concepts before accounts, payments, or personal child data exist.",
          },
          {
            number: "03",
            title: "Influence the standards",
            body: "Help set expectations for parent control, calm language, and visible professional review.",
          },
          {
            number: "04",
            title: "Follow the mission",
            body: "See how research, product decisions, and future family-support programmes develop.",
          },
        ]}
        title="Founding families help make the first version wiser."
        tone="lime"
      />
      <FoundingFamilyMembership />
      <SafetyBoundary />
    </FoundationPageShell>
  );
}
