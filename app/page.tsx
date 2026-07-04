import {
  AdditionalNeeds,
  CorePromise,
  Footer,
  FoundingMembership,
  Header,
  Hero,
  MonthJourney,
  PregMonthBridge,
  ResearchFund,
  SupportFlags,
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
        <SupportFlags />
        <SupportBlocks />
        <MonthJourney />
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
