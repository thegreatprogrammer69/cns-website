import { BenefitsSection } from "@/components/home/benefits-section";
import { DirectionsSection } from "@/components/home/directions-section";
import { FaqSection } from "@/components/home/faq-section";
import { HeroSection } from "@/components/home/hero-section";
import { LessonFormatSection } from "@/components/home/lesson-format-section";
import { PlansSection } from "@/components/home/plans-section";
import { ResultsSection } from "@/components/home/results-section";
import { ScheduleSection } from "@/components/home/schedule-section";

export default function Home() {
  return (
    <div className="flex flex-1 justify-center bg-zinc-50 px-4 py-16 font-sans dark:bg-black sm:px-8">
      <main className="flex w-full max-w-4xl flex-col gap-10 rounded-2xl bg-white p-8 shadow-sm dark:bg-zinc-950 sm:p-12">
        <HeroSection />
        <DirectionsSection />
        <BenefitsSection />
        <LessonFormatSection />
        <ResultsSection />
        <ScheduleSection />
        <PlansSection />
        <FaqSection />
      </main>
    </div>
  );
}
