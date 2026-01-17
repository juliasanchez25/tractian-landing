import { useTranslations } from "next-intl";
import { WhyChooseTabs } from "./why-choose-tabs";

export function WhyChooseSection() {
  const t = useTranslations("WhyChoose");
  const items = t.raw("items") as Array<{ title: string; description: string }>;

  return (
    <section className="w-full bg-slate-100 px-4 py-12 lg:py-16">
      <div className="mx-auto flex w-full max-w-2xl flex-col gap-8 lg:max-w-6xl lg:gap-16">
        <article className="flex w-full flex-col gap-4">
          <p className="uppercase tracking-wide text-blue-600">
            {t("subtitle")}
          </p>
          <h2 className="font-bold tracking-tight text-slate-700 text-3xl md:text-[40px]">
            {t("title")}
          </h2>
        </article>

        <WhyChooseTabs items={items} />
      </div>
    </section>
  );
}
