"use client";

import { useState } from "react";
import Image from "next/image";
import { getCDNUrl } from "@/lib/config";

const IMAGES = [
  getCDNUrl(
    "/website/pages/who-we-serve/plant-manager/en/reports-for-scalability.png",
    {
      auto: "format,compress",
      cs: "origin",
      fit: "max",
      q: "75",
      w: "3840",
    },
  ),
  getCDNUrl(
    "/website/pages/who-we-serve/plant-manager/en/operational-oversight.png",
    {
      auto: "format,compress",
      cs: "origin",
      fit: "max",
      q: "75",
      w: "3840",
    },
  ),
  getCDNUrl(
    "/website/pages/who-we-serve/plant-manager/en/multisite-visibility.png",
    {
      auto: "format,compress",
      cs: "origin",
      fit: "max",
      q: "75",
      w: "3840",
    },
  ),
  getCDNUrl("/website/pages/who-we-serve/plant-manager/en/no-labor-gaps.png", {
    auto: "format,compress",
    cs: "origin",
    fit: "max",
    q: "75",
    w: "3840",
  }),
];

interface HowItWorksTabsProps {
  items: Array<{
    tabTitle: string;
    contentTitle: string;
    description: string;
    listItem: string[];
  }>;
}

export function HowItWorksTabs({ items }: HowItWorksTabsProps) {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <div className="w-full">
      <div className="mx-auto flex w-full flex-col gap-8 lg:gap-12">
        <nav
          className="relative mx-auto flex w-full flex-col overflow-hidden rounded-lg bg-slate-100 sm:flex-row sm:rounded-none sm:bg-transparent"
          aria-label="How it works tabs"
          role="tablist"
        >
          {items.map((item, index) => {
            const id = index + 1;
            return (
              <div
                key={id}
                className={`relative flex w-full items-center justify-center border-b px-1 py-1 transition-all duration-300 sm:px-0 sm:py-0 ${
                  activeTab === id
                    ? "bg-slate-100 sm:border-b-2 sm:border-b-blue-600 sm:bg-transparent"
                    : "border-transparent sm:border-b sm:border-b-slate-300 sm:bg-transparent"
                }`}
              >
                <button
                  onClick={() => setActiveTab(id)}
                  role="tab"
                  aria-selected={activeTab === id}
                  aria-controls={`tabpanel-${id}`}
                  id={`tab-${id}`}
                  className={`w-full rounded-sm px-4 py-2 transition-all duration-300 text-sm sm:w-auto sm:p-4 md:text-base ${
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
        </nav>

        <div
          className="flex w-full flex-col items-center justify-between gap-8 md:flex-row lg:gap-12"
          role="tabpanel"
          id={`tabpanel-${activeTab}`}
          aria-labelledby={`tab-${activeTab}`}
        >
          <div className="flex w-full flex-col gap-4 lg:max-w-95.5">
            <h3 className="font-bold tracking-tight text-xl">
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
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
                className="object-cover transition-all duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
