"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import Image from "next/image";

export function HeroSection() {
  const t = useTranslations("Hero");

  return (
    <section className="relative w-full md:bg-cover md:bg-right md:bg-no-repeat 2xl:bg-top-right 3xl:min-h-[675px] 4xl:min-h-[695px] md:bg-[url('https://tractian-webpage.s3.us-east-1.amazonaws.com/website/pages/who-we-serve/plant-manager/pt/header-image.png')]">
      {/* Content container - full blue on mobile, 50% overlay on desktop */}
      <div className="md:pr-0 relative z-10 flex w-full max-w-full md:bg-blue-950/80 bg-blue-950 px-4 pb-12 pt-14 md:max-w-[50%] md:items-center lg:py-16 xl:py-20 xl:pl-16 3xl:min-h-[675px] 4xl:min-h-[695px]">
        <div className="flex w-full flex-col items-center gap-8 max-w-xl md:w-fit md:items-start lg:ml-auto">
          <article className="relative z-20 flex w-full flex-col items-center gap-4 md:items-start">
            <p className="text-center font-light text-white text-xs uppercase tracking-wider md:text-base">
              {t("subtitle")}
            </p>
            <h1 className="text-center font-bold text-white text-[28px] leading-tight md:text-4xl lg:text-[40px] md:text-left text-balance">
              {t("title")}
            </h1>
            <p className="text-center font-light text-white text-sm md:text-base md:text-left max-w-lg">
              {t("description")}
            </p>
          </article>
          <Button className="bg-blue-600 hover:bg-blue-900 active:bg-blue-950 text-white font-medium px-6 py-3 rounded-sm flex items-center justify-center gap-2 mx-auto md:mx-0">
            <span>{t("button")}</span>
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <figure className="flex h-85 w-full sm:h-72.5 max-sm:hidden md:hidden md:h-77.5">
        <Image
          height="1980"
          width="2560"
          loading="lazy"
          decoding="async"
          src="https://tractian-webpage.s3.us-east-1.amazonaws.com/website/pages/who-we-serve/plant-manager/pt/header-image.png?q=75&w=3840"
          alt="Industrial worker"
          className="flex h-full w-full object-cover object-center"
        />
      </figure>

      {/* Mobile image - only visible on mobile */}
      <figure className="flex h-85 w-full max-sm:h-72.5 sm:hidden md:hidden md:h-77.5">
        <Image
          height="1980"
          width="2560"
          loading="lazy"
          decoding="async"
          src="https://tractian-webpage.s3.us-east-1.amazonaws.com/website/pages/who-we-serve/plant-manager/pt/header-image-mobile.png?q=75&w=3840"
          alt="Industrial worker"
          className="flex h-full w-full object-cover object-center"
        />
      </figure>

      {/* Desktop testimonial card - only visible on desktop */}
      <div className="absolute inset-0 mx-auto hidden w-full items-center justify-end lg:flex 2xl:right-8 2xl:mr-0">
        <div className="flex w-full max-w-[240px] flex-col gap-4 rounded-l-sm bg-white px-4 py-4 lg:py-6 2xl:max-w-[280px] 2xl:rounded-sm 2xl:px-5 3xl:max-w-[320px] 3xl:px-6 3xl:py-7 4xl:max-w-[335px]">
          <p className="text-slate-500 text-body-sm 2xl:text-body-md 4xl:text-body-lg">
            A solução da Tractian nos proporciona maior visibilidade e
            confiabilidade operacional, além de contribuir significativamente
            para o aumento da disponibilidade dos ativos e a assertividade no
            planejamento.
          </p>
          <article className="flex w-full flex-col">
            <p className="text-[13px] font-bold 2xl:text-body-sm 4xl:text-body-md">
              Jari S.
            </p>
            <p className="text-[13px] 2xl:text-body-sm 4xl:text-body-md">
              Diretor Agroindustrial
            </p>
            <p className="text-[13px] font-bold 2xl:text-body-sm 4xl:text-body-md">
              UISA
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
