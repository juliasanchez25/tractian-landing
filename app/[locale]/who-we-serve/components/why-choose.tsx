"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";

const IMAGES = [
  "https://imgix.tractian.com/website/pages/who-we-serve/plant-manager/en/prove-the-roi.png?auto=format%2Ccompress&cs=origin&fit=max&q=75&w=3840",
  "https://imgix.tractian.com/website/pages/who-we-serve/plant-manager/en/get-ahead.png?auto=format%2Ccompress&cs=origin&fit=max&q=75&w=3840",
  "https://imgix.tractian.com/website/pages/who-we-serve/plant-manager/en/run-a-leaner.png?auto=format%2Ccompress&cs=origin&fit=max&q=75&w=3840",
  "https://imgix.tractian.com/website/pages/who-we-serve/plant-manager/en/keeps-audit-simple.png?auto=format%2Ccompress&cs=origin&fit=max&q=75&w=3840", // Placeholder for 4th
];

export function WhyChooseSection() {
  const [activeFeature, setActiveFeature] = useState(0);
  const t = useTranslations("WhyChoose");

  const items = t.raw("items") as Array<{ title: string; description: string }>;

  return (
    <section className="w-full bg-slate-100 px-4 py-12 lg:py-16">
      <div className="mx-auto flex w-full max-w-2xl flex-col gap-8 lg:max-w-6xl lg:gap-16">
        <article className="flex w-full flex-col gap-4">
          <p className="uppercase text-blue-600 tracking-wide">
            {t("subtitle")}
          </p>
          <h2 className="font-bold text-3xl md:text-[40px] text-slate-700 tracking-tight">
            {t("title")}
          </h2>
        </article>

        <div className="flex w-full flex-col items-start gap-8 lg:min-h-90 lg:flex-row lg:justify-between">
          <div className="flex h-79 w-full flex-col gap-4 border-l-2 border-slate-300 xs:h-auto lg:gap-6">
            {items.map((item, index) => (
              <button
                key={index}
                onClick={() => setActiveFeature(index)}
                className={`group h-full w-full bg-transparent px-4 transition-all duration-300 -ml-0.5 border-l-2 ${
                  activeFeature === index
                    ? "border-blue-500"
                    : "border-transparent"
                }`}
              >
                <div className="mb-2 flex w-full items-center gap-3 transition-all duration-500 lg:justify-between">
                  <figure
                    className={`flex h-6 w-6 items-center justify-center transition-all duration-300 ease-in-out ${
                      activeFeature === index ? "bg-blue-600" : "bg-slate-400"
                    }`}
                  >
                    <Check className="h-4 w-4 text-white" />
                  </figure>
                  <h3
                    className={`w-full flex-1 text-left font-medium transition-all duration-500 text-lg lg:font-semibold lg:text-xl tracking-tight group-hover:brightness-110 ${
                      activeFeature === index
                        ? "text-slate-700"
                        : "text-slate-400"
                    }`}
                  >
                    {item.title}
                  </h3>
                </div>
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    activeFeature === index
                      ? "max-h-32 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="flex flex-col gap-1 text-left text-slate-500 text-body-md">
                    {item.description}
                  </p>
                </div>
              </button>
            ))}
          </div>

          <div className="relative flex h-full w-full justify-center rounded-sm lg:h-80">
            <Image
              src={IMAGES[activeFeature]}
              alt={items[activeFeature]?.title || ""}
              fill
              className="h-full w-full rounded-sm object-contain transition-all duration-300 ease-in-out md:object-cover lg:object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
