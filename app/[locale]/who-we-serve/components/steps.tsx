import { useTranslations } from "next-intl";

export function StepsSection() {
  const t = useTranslations("StepByStep");
  const items = t.raw("items") as Array<{ title: string; description: string }>;

  return (
    <section className="bg-slate-100 px-4 py-12 lg:py-16">
      <div className="mx-auto flex w-full max-w-2xl flex-col items-start gap-8 lg:max-w-6xl lg:items-center lg:gap-12">
        <span className="section-label">{t("subtitle")}</span>
        <h2 className="heading-h2 lg:whitespace-break-spaces text-left text-slate-700 lg:mb-4 lg:text-center">
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
                <h3 className="text-xl tracking-tight font-bold text-slate-700">
                  {item.title}
                </h3>
                <p className="text-body-md text-slate-500">
                  {item.description}
                </p>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
