import { useTranslations } from "next-intl";

export function StepsSection() {
  const t = useTranslations("StepByStep");
  const items = t.raw("items") as Array<{ title: string; description: string }>;

  return (
    <section className="bg-slate-100 px-4 py-12 lg:py-16">
      <div className="mx-auto flex w-full max-w-2xl flex-col items-start gap-8 lg:max-w-6xl lg:items-center lg:gap-12">
        <span className="uppercase tracking-wide text-primary">
          {t("subtitle")}
        </span>
        <h2 className="text-left font-bold text-2xl lg:mb-4 lg:text-center lg:text-3xl">
          {t("title")}
        </h2>
        <ol className="flex w-full flex-col gap-8 lg:flex-row lg:justify-between lg:gap-12 xl:gap-16">
          {items.map((item, index) => (
            <li key={item.title} className="flex h-full w-full flex-col gap-4">
              <span
                className="flex h-7 w-7 items-center justify-center rounded-xs bg-primary font-semibold text-white text-lg lg:h-8 lg:w-8"
                aria-label={`Step ${index + 1}`}
              >
                {index + 1}
              </span>
              <article className="flex w-full flex-col gap-1 lg:gap-4">
                <h3 className="font-bold text-lg lg:text-xl">{item.title}</h3>
                <p className="text-slate-500 text-base">{item.description}</p>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
