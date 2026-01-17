"use client";

import { useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

const IMAGES = [
  "https://imgix.tractian.com/website/pages/who-we-serve/plant-manager/en/reports-for-scalability.png?auto=format%2Ccompress&cs=origin&fit=max&q=75&w=3840",
  "https://imgix.tractian.com/website/pages/who-we-serve/plant-manager/en/operational-oversight.png?auto=format%2Ccompress&cs=origin&fit=max&q=75&w=3840",
  "https://imgix.tractian.com/website/pages/who-we-serve/plant-manager/en/multisite-visibility.png?auto=format%2Ccompress&cs=origin&fit=max&q=75&w=3840",
  "https://imgix.tractian.com/website/pages/who-we-serve/plant-manager/en/no-labor-gaps.png?auto=format%2Ccompress&cs=origin&fit=max&q=75&w=3840",
];

export function HowItWorksSection() {
  const [activeTab, setActiveTab] = useState(1);
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
          <h2 className="mt-4 w-full text-left font-bold text-xl md:text-3xl lg:text-center tracking-tight">
            {t("title")}
          </h2>
        </article>

        <div className="w-full">
          <div className="mx-auto flex w-full flex-col gap-8 lg:gap-12">
            <div className="relative mx-auto flex w-full flex-col bg-slate-100 sm:flex-row sm:bg-transparent rounded-lg sm:rounded-none overflow-hidden">
              {items.map((item, index) => {
                const id = index + 1;
                return (
                  <div
                    key={id}
                    className={`relative flex w-full items-center justify-center border-b px-1 py-1 transition-all duration-300 sm:px-0 sm:py-0 ${
                      activeTab === id
                        ? "bg-slate-100 sm:border-b-blue-600 sm:border-b-2 sm:bg-transparent"
                        : "border-transparent sm:border-b-slate-300 sm:border-b sm:bg-transparent"
                    }`}
                  >
                    <button
                      onClick={() => setActiveTab(id)}
                      className={`w-full rounded-sm px-4 py-2 transition-all duration-300 text-sm md:text-base sm:w-auto sm:p-4 ${
                        activeTab === id
                          ? "bg-white font-semibold text-slate-800 shadow-sm sm:bg-transparent sm:shadow-none"
                          : "text-slate-500 hover:text-slate-700"
                      }`}
                    >
                      {item.tabTitle}
                    </button>
                  </div>
                );
              })}
            </div>

            <div className="flex w-full flex-col md:flex-row justify-between items-center gap-8 lg:gap-12">
              <div className="flex w-full flex-col gap-4 lg:max-w-95.5">
                <h3 className="font-bold text-xl tracking-tight">
                  {items[activeTab - 1]?.contentTitle}
                </h3>
                {items[activeTab - 1]?.description && (
                  <p className="text-slate-500">
                    {items[activeTab - 1]?.description}
                  </p>
                )}
                <ul className="ml-4 flex w-full list-disc flex-col gap-1">
                  {items[activeTab - 1]?.listItem.map((text, i) => (
                    <li key={i} className="text-slate-500 text-base">
                      {text}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="w-full lg:w-3/5">
                <div className="relative aspect-16/10 w-full overflow-hidden rounded-xl shadow-xl">
                  <Image
                    src={IMAGES[activeTab - 1] || ""}
                    alt={items[activeTab - 1]?.contentTitle || ""}
                    fill
                    className="object-cover transition-all duration-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
