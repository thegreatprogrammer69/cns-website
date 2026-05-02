import { Metadata } from "next";

import { BenefitsSection } from "@/components/home/benefits-section";
import { DirectionsSection } from "@/components/home/directions-section";
import { FaqSection } from "@/components/home/faq-section";
import { HeroSection } from "@/components/home/hero-section";
import { LessonFormatSection } from "@/components/home/lesson-format-section";
import { PlansSection } from "@/components/home/plans-section";
import { ResultsSection } from "@/components/home/results-section";
import { ScheduleSection } from "@/components/home/schedule-section";

export const metadata: Metadata = {
  title: "Детский развивающий центр | ЦСН",
  description:
    "Английский, дошколята, актёрское мастерство и робототехника. Игровой подход, мягкая атмосфера и результат каждый месяц.",
};

export default function HomePage() {
  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-8">
      <HeroSection />
      <DirectionsSection />
      <BenefitsSection />
      <LessonFormatSection />
      <ResultsSection />
      <ScheduleSection />
      <PlansSection />
      <FaqSection />
    </div>
  );
}
