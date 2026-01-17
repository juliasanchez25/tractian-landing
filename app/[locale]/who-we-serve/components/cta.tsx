import { useTranslations } from "next-intl";
import Image from "next/image";
import { getS3Url } from "@/lib/config";

const CTA_BG_IMAGE = getS3Url(
  "/website/pages/who-we-serve/maintenance-engineer/en/more-than-machines.png",
);

export function CtaSection() {
  const t = useTranslations("CTA");

  return (
    <section className="relative w-full">
      {/* Background image */}
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
            <h2 className="whitespace-pre-line text-center font-bold text-white text-3xl md:text-left lg:text-4xl xl:text-5xl">
              {t("title")}
            </h2>
          </article>
          <button
            className="relative z-30 mx-auto w-full max-w-fit rounded-sm bg-blue-600 px-4 py-2 text-center font-medium text-white transition duration-150 ease-in-out hover:bg-blue-900 active:bg-blue-950 disabled:cursor-not-allowed disabled:bg-slate-300 md:mx-0"
            type="button"
          >
            {t("button")}
          </button>
        </div>
      </div>
    </section>
  );
}
