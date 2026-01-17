import { ArrowsIcon } from "@/components/icons/you-control/arrows";
import { FileIcon } from "@/components/icons/you-control/file";
import { PhoneIcon } from "@/components/icons/you-control/phone";
import { useTranslations } from "next-intl";

const icons = [
  <ArrowsIcon key="arrows" />,
  <PhoneIcon key="phone" />,
  <FileIcon key="file" />,
];

export function YouControlSection() {
  const t = useTranslations("YouControl");

  const items = t.raw("items") as Array<{ title: string; description: string }>;

  return (
    <section className="w-full bg-slate-100 px-4 py-12 lg:py-16">
      <div className="mx-auto flex w-full max-w-2xl flex-col items-center gap-8 lg:max-w-6xl lg:gap-12">
        <h2 className="font-bold tracking-tight text-slate-700 text-2xl lg:text-center lg:text-[32px] whitespace-pre-wrap">
          {t("title")}
        </h2>
        <div className="flex h-auto w-full flex-col items-stretch gap-8 lg:flex-row lg:justify-between lg:gap-16">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex w-full flex-row items-start gap-4 lg:flex-col lg:items-center"
            >
              <figure className="flex items-center justify-center rounded-sm bg-white p-3.5 lg:h-24 lg:w-24 lg:p-0">
                {icons[index]}
              </figure>
              <article className="flex w-full flex-col gap-1 sm:gap-1 lg:items-center lg:gap-4">
                <h3 className="text-left font-bold text-slate-700 text-lg lg:text-center lg:text-xl">
                  {item.title}
                </h3>
                <p className="text-left text-slate-500 text-base lg:text-center">
                  {item.description}
                </p>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
