import {
  CorePromise,
  Footer,
  FoundingMembership,
  Header,
  Hero,
  MonthJourney,
  PregMonthBridge,
  ResearchFund,
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
        <SupportBlocks />
        <MonthJourney />
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
