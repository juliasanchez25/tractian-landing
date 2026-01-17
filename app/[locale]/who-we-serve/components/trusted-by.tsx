"use client";

import { BerryIcon } from "@/components/icons/trusted-by/berry";
import { CargillIcon } from "@/components/icons/trusted-by/cargill";
import { CarrierIcon } from "@/components/icons/trusted-by/carrier";
import { CatIcon } from "@/components/icons/trusted-by/cat";
import { HyundaiIcon } from "@/components/icons/trusted-by/hyundai";
import { InNOutIcon } from "@/components/icons/trusted-by/in-n-out";
import { KraftHeinzIcon } from "@/components/icons/trusted-by/kraft-heinz";
import { LdcIcon } from "@/components/icons/trusted-by/ldc";
import { OneSubseaIcon } from "@/components/icons/trusted-by/one-subsea";
import { OwensIcon } from "@/components/icons/trusted-by/owens";
import { QuakerIcon } from "@/components/icons/trusted-by/quaker";
import { TateLyleIcon } from "@/components/icons/trusted-by/tate-lyle";
import { VoestalpineIcon } from "@/components/icons/trusted-by/voestalpine";
import { WeyerhaeuserIcon } from "@/components/icons/trusted-by/weyerhaeuser";
import { useTranslations } from "next-intl";

export function TrustedBySection() {
  const t = useTranslations();

  const logos = [
    <WeyerhaeuserIcon key="weyerhaeuser" />,
    <BerryIcon key="berry" />,
    <InNOutIcon key="in-n-out" />,
    <CargillIcon key="cargill" />,
    <CarrierIcon key="carrier" />,
    <KraftHeinzIcon key="kraft-heinz" />,
    <OneSubseaIcon key="one-subsea" />,
    <HyundaiIcon key="hyundai" />,
    <QuakerIcon key="quaker" />,
    <TateLyleIcon key="tate-lyle" />,
    <CatIcon key="cat" />,
    <VoestalpineIcon key="voestalpine" />,
    <OwensIcon key="owens" />,
    <LdcIcon key="ldc" />,
  ];

  return (
    <div className="w-full items-center justify-center bg-white py-8 border-y border-slate-100 flex flex-col gap-y-12">
      <p className="text-slate-400 font-medium text-center px-4">
        {t("TrustedBy")}
      </p>

      {/* Desktop grid */}
      <div className="hidden md:grid w-fit grid-cols-7 gap-12 justify-items-center">
        {logos}
      </div>

      {/* Mobile carousel */}
      <div className="md:hidden w-full overflow-hidden relative">
        <div className="flex animate-scroll gap-12">
          {/* Duplicate logos for seamless loop */}
          {logos}
          {logos}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 50s linear infinite;
          width: fit-content;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}
