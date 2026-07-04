import {
  AdditionalNeeds,
  CorePromise,
  Footer,
  FoundingMembership,
  Header,
  Hero,
  InsideMonth,
  MonthJourney,
  PregMonthBridge,
  ResearchFund,
  SupportPack,
  SupportBlocks,
  TrustSection,
  WaitlistSection,
} from "@/components/site";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <CorePromise />
        <SupportPack />
        <SupportBlocks />
        <MonthJourney />
        <InsideMonth />
        <AdditionalNeeds />
        <TrustSection />
        <PregMonthBridge />
        <ResearchFund />
        <FoundingMembership />
        <WaitlistSection />
      </main>
      <Footer />
    </>
  );
}
