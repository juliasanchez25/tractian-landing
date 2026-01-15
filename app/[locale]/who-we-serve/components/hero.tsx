import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations("Hero");

  return (
    <section className="relative w-full md:bg-cover md:bg-right md:bg-no-repeat 2xl:bg-top-right 3xl:min-h-[675px] 4xl:min-h-[695px] md:bg-[url('https://tractian-webpage.s3.us-east-1.amazonaws.com/website/pages/who-we-serve/plant-manager/pt/header-image.png')]">
      <div className="relative z-10 flex w-full max-w-full justify-end bg-blue-950 bg-opacity-100 px-4 pb-12 pt-14 md:max-w-[50%] md:items-center md:bg-opacity-80 lg:px-12 lg:py-16 xl:py-20 xl:pl-16 xl:pr-24 3xl:min-h-[675px] 4xl:min-h-[695px]">
        <div className="flex w-full flex-col items-center gap-8 md:w-fit md:items-start">
          <article className="relative z-20 flex w-full flex-col items-center gap-4 md:items-start">
            <span className="text-center font-light text-white uppercase md:text-center">
              {t("subtitle")}
            </span>
            <h1 className="text-center font-bold text-white md:text-left">
              {t("title")}
            </h1>
            <p className="text-center font-light text-white md:text-left">
              {t("description")}
            </p>
          </article>
          <Button>
            {t("button")}
            <ArrowRight className="mr-2" />
          </Button>
        </div>
      </div>
    </section>
  );
}
