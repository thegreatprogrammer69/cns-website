import { AnimatedSection } from "@/components/home/animated-section";
import { plans } from "@/lib/data";
import { formatPrice } from "@/lib/format-price";

export function PlansSection() {
  return (
    <AnimatedSection id="plans" title="Plans">
      <div className="grid gap-3 sm:grid-cols-3">
        {plans.map((plan) => (
          <article
            key={plan.name}
            className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-800"
          >
            <h3 className="font-semibold">{plan.name}</h3>
            <p className="text-zinc-600 dark:text-zinc-400">{plan.details}</p>
            <p className="mt-2 text-lg font-medium">{formatPrice(plan.price)}</p>
          </article>
        ))}
      </div>
    </AnimatedSection>
  );
}
