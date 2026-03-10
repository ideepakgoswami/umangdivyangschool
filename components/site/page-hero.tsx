import { Section } from "@/components/site/section";

export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <Section className="py-20 sm:py-28 bg-brand-yellow/10 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-orange/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-blue/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {eyebrow ? (
          <p className="text-sm sm:text-base font-bold text-brand-orange uppercase tracking-wider mb-4">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="text-balance text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight text-slate-900 mb-6 leading-[1.1]">
          {title}
        </h1>
        {description ? (
          <p className="mt-6 text-pretty text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto font-medium">
            {description}
          </p>
        ) : null}
        <div className="flex justify-center gap-2 mt-10">
          <div className="h-1.5 w-16 rounded-full bg-brand-blue" />
          <div className="h-1.5 w-8 rounded-full bg-brand-orange" />
          <div className="h-1.5 w-4 rounded-full bg-brand-green" />
        </div>
      </div>
    </Section>
  );
}
