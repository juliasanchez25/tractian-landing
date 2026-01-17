"use client";

import { useState, useEffect, useRef } from "react";
import { Check } from "lucide-react";
import Image from "next/image";
import { getCDNUrl } from "@/lib/config";

const IMAGES = [
  getCDNUrl("/website/pages/who-we-serve/plant-manager/en/prove-the-roi.png", {
    auto: "format,compress",
    cs: "origin",
    fit: "max",
    q: "75",
    w: "3840",
  }),
  getCDNUrl("/website/pages/who-we-serve/plant-manager/en/get-ahead.png", {
    auto: "format,compress",
    cs: "origin",
    fit: "max",
    q: "75",
    w: "3840",
  }),
  getCDNUrl("/website/pages/who-we-serve/plant-manager/en/run-a-leaner.png", {
    auto: "format,compress",
    cs: "origin",
    fit: "max",
    q: "75",
    w: "3840",
  }),
  getCDNUrl(
    "/website/pages/who-we-serve/plant-manager/en/keeps-audit-simple.png",
    {
      auto: "format,compress",
      cs: "origin",
      fit: "max",
      q: "75",
      w: "3840",
    },
  ),
];

interface WhyChooseTabsProps {
  items: Array<{ title: string; description: string }>;
}

export function WhyChooseTabs({ items }: WhyChooseTabsProps) {
  const [activeFeature, setActiveFeature] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 },
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev >= items.length - 1 ? 0 : prev + 1));
    }, 6000);

    return () => clearInterval(interval);
  }, [items.length, isVisible]);

  return (
    <div
      className="flex w-full flex-col items-start gap-8 lg:min-h-90 lg:flex-row lg:justify-between"
      ref={containerRef}
    >
      <nav
        className="flex w-full flex-col gap-4 border-l-2 border-slate-300 lg:gap-6 lg:h-79"
        aria-label="Features"
      >
        {items.map((item, index) => (
          <button
            key={item.title}
            onClick={() => setActiveFeature(index)}
            aria-pressed={activeFeature === index}
            className={`group -ml-0.5 w-full border-l-2 bg-transparent px-4 transition-all duration-300 ${
              activeFeature === index ? "border-blue-500" : "border-transparent"
            }`}
          >
            <div className="mb-2 flex w-full items-center gap-3 transition-all duration-500 lg:justify-between">
              <figure
                className={`flex h-6 w-6 items-center justify-center transition-all duration-300 ease-in-out ${
                  activeFeature === index ? "bg-primary" : "bg-slate-400"
                }`}
                aria-hidden="true"
              >
                <Check className="h-4 w-4 text-white" />
              </figure>
              <h3
                className={`heading-h3 w-full flex-1 text-left tracking-tight transition-all duration-500 group-hover:brightness-110 ${
                  activeFeature === index ? "text-slate-700" : "text-slate-400"
                }`}
              >
                {item.title}
              </h3>
            </div>
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                activeFeature === index
                  ? "max-h-60 opacity-100 md:max-h-32"
                  : "max-h-0 opacity-0"
              }`}
            >
              <p className="flex flex-col gap-1 text-left text-slate-500 text-body-md">
                {item.description}
              </p>
            </div>
          </button>
        ))}
      </nav>

      <div
        className="relative w-full justify-center rounded-sm mt-4 h-64 md:h-72 lg:mt-0 lg:h-80 lg:flex"
        key={activeFeature}
      >
        <Image
          src={IMAGES[activeFeature]}
          alt={items[activeFeature]?.title || "Feature demonstration"}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
          className="h-full w-full rounded-sm object-contain transition-all ease-in-out md:object-cover lg:object-contain animate-in fade-in slide-in-from-right-4 duration-700"
        />
      </div>
    </div>
  );
}
