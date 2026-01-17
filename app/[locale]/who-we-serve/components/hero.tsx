import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";

export function HeroSection() {
  const t = useTranslations("Hero");

  return (
    <section className="relative w-full">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://tractian-webpage.s3.us-east-1.amazonaws.com/website/pages/who-we-serve/plant-manager/pt/header-image.png')",
        }}
      />

      <div className="relative z-10 flex w-full h-full">
        <div className="flex w-full md:w-1/2 items-center justify-end bg-blue-950 md:bg-blue-950/80 px-4 py-12 lg:px-24 lg:py-20">
          <div className="flex w-full flex-col items-center gap-8 md:items-start lg:pl-20">
            <article className="flex w-full flex-col items-center gap-4 md:items-start">
              <p className="text-center font-light text-white text-sm md:text-base  md:text-center uppercase">
                {t("subtitle")}
              </p>
              <h1 className="text-center md:text-left text-3xl md:text-4xl lg:text-[40px] font-bold text-white leading-tight tracking-tight text-balance">
                {t("title")}
              </h1>
              <p className="text-center md:text-left font-light text-white md:text-base text-sm">
                {t("description")}
              </p>
            </article>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xs flex items-center gap-2 mx-auto md:mx-0">
              <span className="font-medium">{t("button")}</span>
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="hidden md:block md:w-1/2" />
      </div>
    </section>
  );
}
