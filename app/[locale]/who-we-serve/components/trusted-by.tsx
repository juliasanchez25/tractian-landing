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

const logoComponents = [
  { id: "weyerhaeuser", component: WeyerhaeuserIcon },
  { id: "berry", component: BerryIcon },
  { id: "in-n-out", component: InNOutIcon },
  { id: "cargill", component: CargillIcon },
  { id: "carrier", component: CarrierIcon },
  { id: "kraft-heinz", component: KraftHeinzIcon },
  { id: "one-subsea", component: OneSubseaIcon },
  { id: "hyundai", component: HyundaiIcon },
  { id: "quaker", component: QuakerIcon },
  { id: "tate-lyle", component: TateLyleIcon },
  { id: "cat", component: CatIcon },
  { id: "voestalpine", component: VoestalpineIcon },
  { id: "owens", component: OwensIcon },
  { id: "ldc", component: LdcIcon },
];

export function TrustedBySection() {
  const t = useTranslations();

  return (
    <section className="flex w-full flex-col items-center justify-center gap-y-12 border-y border-slate-100 bg-white py-8">
      <p className="px-4 text-center font-medium text-slate-400">
        {t("TrustedBy")}
      </p>

      {/* Desktop grid */}
      <div className="hidden w-fit grid-cols-7 justify-items-center gap-12 md:grid">
        {logoComponents.map(({ id, component: LogoComponent }) => (
          <LogoComponent key={id} />
        ))}
      </div>

      {/* Mobile carousel */}
      <div className="relative w-full overflow-hidden md:hidden">
        <div className="flex animate-scroll gap-12">
          {/* Duplicate logos for seamless loop */}
          {logoComponents.map(({ id, component: LogoComponent }) => (
            <LogoComponent key={`${id}-1`} />
          ))}
          {logoComponents.map(({ id, component: LogoComponent }) => (
            <LogoComponent key={`${id}-2`} />
          ))}
        </div>
      </div>
    </section>
  );
}
