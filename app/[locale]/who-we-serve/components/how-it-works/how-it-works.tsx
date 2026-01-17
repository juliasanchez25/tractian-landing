import { useTranslations } from "next-intl";
import { HowItWorksTabs } from "./how-it-works-tabs";

export function HowItWorksSection() {
  const t = useTranslations("HowItWorks");
  const items = t.raw("items") as Array<{
    tabTitle: string;
    contentTitle: string;
    description: string;
    listItem: string[];
  }>;

  return (
    <section className="relative w-full bg-white px-4 py-12 lg:px-16 lg:py-20">
      <div className="mx-auto flex max-w-xl flex-col items-center gap-8 text-slate-700 lg:max-w-6xl lg:gap-12">
        <article className="flex w-full flex-col items-start gap-4 lg:items-center">
          <h2 className="heading-h2 mt-4 w-full text-left text-slate-700 lg:text-center">
            {t("title")}
          </h2>
        </article>

        <HowItWorksTabs items={items} />
      </div>
    </section>
  );
}
