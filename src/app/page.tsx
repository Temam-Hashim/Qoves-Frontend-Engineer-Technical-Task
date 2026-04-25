import { BeforeAfterSection } from "@/components/BeforeAfterSection/BeforeAfterSection";
import { CompleteFacialAnalysisSection } from "@/components/CompleteFacialAnalysisSection/CompleteFacialAnalysisSection";
import { FrequentlyAskedQuestionsSection } from "@/components/FrequentlyAskedQuestionsSection/FrequentlyAskedQuestionsSection";
import { PerspectiveSection } from "@/components/PerspectiveSection/PerspectiveSection";

export default function Home() {
  return (
    <main>
      <BeforeAfterSection />
      <CompleteFacialAnalysisSection />
      <FrequentlyAskedQuestionsSection />
      <PerspectiveSection />
    </main>
  );
}
