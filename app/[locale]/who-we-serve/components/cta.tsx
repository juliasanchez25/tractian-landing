import { useTranslations } from "next-intl";
import Image from "next/image";
import { getS3Url } from "@/lib/config";
import { Button } from "@/components/ui/button";

const CTA_BG_IMAGE = getS3Url(
  "/website/pages/who-we-serve/maintenance-engineer/en/more-than-machines.png",
);

export function CtaSection() {
  const t = useTranslations("CTA");

  return (
    <section className="relative w-full">
      <div className="absolute inset-0 -z-10">
        <Image
          src={CTA_BG_IMAGE}
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-right"
        />
      </div>

      <div className="relative z-10 flex w-full max-w-full justify-center bg-blue-950/95 px-4 py-12 md:max-w-[50%] md:justify-end md:bg-blue-950/80 lg:px-12 lg:py-16 xl:px-0 xl:py-20 xl:pl-16 2xl:min-h-118.75 2xl:items-center">
        <div className="flex w-full max-w-full flex-col items-center gap-8 md:max-w-79.5 md:items-start lg:max-w-full xl:max-w-xl">
          <article className="relative z-20 flex w-full flex-col items-center gap-4 md:items-start">
            <h2 className="heading-h2 whitespace-pre-line text-center text-white md:text-left">
              {t("title")}
            </h2>
          </article>
          <Button className="rounded-xs" type="button">
            {t("button")}
          </Button>
        </div>
      </div>
    </section>
  );
}
