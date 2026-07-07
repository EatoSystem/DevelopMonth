import type { Metadata } from "next";
import {
  CalendarIdeas,
  CompanionCard,
  FoundationPageShell,
  JournalPrompts,
  MonthlyKnowledgeGrid,
  MonthlySupportPack,
  PageHero,
  PreviewOnlyNotice,
  ProfessionalReviewStatus,
  QuestionsToAsk,
  SafetyBoundary,
  SourceRegisterStatus,
} from "@/components/foundation/MonthMapFoundation";
import {
  monthSixDevelopmentMonth,
  monthSixKnowledgeItems,
  monthSixSupportPack,
} from "@/lib/month-content";

export const metadata: Metadata = {
  title: "Month 6 support pack preview — DevelopMonth",
  description:
    "A static, fictional Month 6 child-development support pack for research and professional review.",
};

export default function MonthSixPage() {
  return (
    <FoundationPageShell>
      <PageHero
        body={monthSixDevelopmentMonth.overview}
        eyebrow="MONTH 06 · DRAFT SUPPORT PACK"
        primaryHref="/prototype"
        primaryLabel="Explore the static Month 6 prototype"
        secondaryHref="/aion"
        secondaryLabel="Meet the future Aion concept"
        title="Starting solids and movement."
      />
      <PreviewOnlyNotice />
      <ProfessionalReviewStatus month={monthSixDevelopmentMonth} />
      <MonthlyKnowledgeGrid items={monthSixKnowledgeItems} />
      <MonthlySupportPack pack={monthSixSupportPack} />
      <QuestionsToAsk items={monthSixDevelopmentMonth.questionsToSave} />
      <JournalPrompts items={monthSixDevelopmentMonth.journalPrompts} />
      <CalendarIdeas items={monthSixDevelopmentMonth.calendarIdeas} />
      <CompanionCard
        compact
        prompts={monthSixDevelopmentMonth.companionPrompts}
      />
      <SourceRegisterStatus />
      <SafetyBoundary />
    </FoundationPageShell>
  );
}
