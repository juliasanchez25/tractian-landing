"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { getS3Url } from "@/lib/config";

const DESKTOP_BG_IMAGE = getS3Url(
  "/website/pages/who-we-serve/plant-manager/pt/header-image.png",
);
const MOBILE_IMAGE = getS3Url(
  "/website/pages/who-we-serve/plant-manager/pt/header-image-mobile.png",
);
const TABLET_IMAGE = getS3Url(
  "/website/pages/who-we-serve/plant-manager/pt/header-image.png",
);

function DesktopTestimonialCard() {
  const t = useTranslations("HeroTestimonial");

  return (
    <div className="absolute inset-0 mx-auto hidden w-full items-center justify-end lg:flex 2xl:right-8 2xl:mr-0">
      <aside
        className="flex w-full max-w-60 flex-col gap-4 rounded-l-sm bg-white px-4 py-4 lg:py-6 2xl:max-w-70 2xl:rounded-xs 2xl:px-5 3xl:max-w-80 3xl:px-6 3xl:py-7 4xl:max-w-[335px]"
        aria-label="Customer testimonial"
      >
        <p className="text-slate-500">&quot;{t("quote")}&quot;</p>
        <article className="flex w-full flex-col space-y-1">
          <p className="text-sm font-bold">{t("name")}</p>
          <p className="text-sm">{t("role")}</p>
          <p className="text-sm font-bold">{t("company")}</p>
        </article>
      </aside>
    </div>
  );
}

export function HeroSection() {
  const t = useTranslations("Hero");

  return (
    <section className="relative w-full">
      <div className="absolute inset-0 -z-10 hidden md:block">
        <Image
          src={DESKTOP_BG_IMAGE}
          alt="Background image of industrial worker"
          fill
          priority
          sizes="100vw"
          className="object-cover object-top-right"
        />
      </div>

      <div className="relative z-10 flex w-full max-w-full bg-blue-950 px-4 pb-12 pt-14 md:max-w-[50%] md:items-center lg:pr-12 md:bg-blue-950/80 lg:py-20">
        <div className="flex w-full max-w-xl flex-col items-center gap-8 md:ml-auto md:w-fit md:items-start pr-2">
          <article className="relative z-20 flex w-full flex-col items-center gap-4 md:items-start">
            <span className="uppercase font-light max-lg:text-sm text-center md:text-left lg:text-balance text-white">
              {t("subtitle")}
            </span>
            <h1 className="heading-h1 text-balance text-center text-white md:text-left whitespace-pre-wrap">
              {t("title")}
            </h1>
            <p className="text-body-md max-w-lg text-center font-light text-white md:text-left">
              {t("description")}
            </p>
          </article>
          <Button>
            {t("button")}
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <figure className="hidden h-72.5 w-full max-sm:hidden sm:flex md:hidden">
        <Image
          src={TABLET_IMAGE}
          alt="Industrial worker"
          width={2560}
          height={1980}
          priority
          sizes="100vw"
          className="h-full w-full object-cover object-center"
        />
      </figure>

      <figure className="flex h-72.5 w-full sm:hidden">
        <Image
          src={MOBILE_IMAGE}
          alt="Industrial worker"
          width={2560}
          height={1980}
          priority
          sizes="100vw"
          className="h-full w-full object-cover object-center"
        />
      </figure>

      <DesktopTestimonialCard />
    </section>
  );
}
