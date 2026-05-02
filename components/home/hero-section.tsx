import { hero } from "@/lib/data";

export function HeroSection() {
  return (
    <section className="space-y-4 text-center sm:text-left">
      <h1 className="text-4xl font-bold tracking-tight text-black dark:text-zinc-50">
        {hero.title}
      </h1>
      <p className="text-lg text-zinc-600 dark:text-zinc-400">{hero.description}</p>
    </section>
  );
}
