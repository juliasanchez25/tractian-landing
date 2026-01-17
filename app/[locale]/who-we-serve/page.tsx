import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { WhyChooseSection } from "./components/why-choose/why-choose";
import { HeroSection } from "./components/hero";
import { HowItWorksSection } from "./components/how-it-works/how-it-works";
import { TestimonialsSection } from "./components/testimonials";
import { StepsSection } from "./components/steps";
import { CtaSection } from "./components/cta";
import { FaqSection } from "./components/faq";
import { YouControlSection } from "./components/you-control";
import { TrustedBySection } from "./components/trusted-by";
import { Footer } from "../../../components/custom/footer";
import { SITE_URL } from "@/lib/config";

export async function generateStaticParams() {
  return [{ locale: "en" }, { locale: "es" }, { locale: "pt" }];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Hero" });

  const localePaths: Record<string, string> = {
    en: "/en/who-we-serve",
    es: "/es/who-we-serve",
    pt: "/solucoes-para-gerentes-industriais",
  };

  const currentPath = localePaths[locale] || localePaths.en;

  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: `${SITE_URL}${currentPath}`,
      languages: {
        en: `${SITE_URL}/en/who-we-serve`,
        es: `${SITE_URL}/es/who-we-serve`,
        pt: `${SITE_URL}/solucoes-para-gerentes-industriais`,
      },
    },
    openGraph: {
      title: t("title"),
      description: t("description"),
      url: `${SITE_URL}${currentPath}`,
      siteName: "Tractian",
      images: [
        {
          url: "https://tractian-webpage.s3.us-east-1.amazonaws.com/website/pages/who-we-serve/plant-manager/pt/header-image.png",
          width: 2560,
          height: 1980,
          alt: t("title"),
        },
      ],
      locale: locale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("description"),
      images: [
        "https://tractian-webpage.s3.us-east-1.amazonaws.com/website/pages/who-we-serve/plant-manager/pt/header-image.png",
      ],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export default function WhoWeServePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  return (
    <>
      <HeroSection />
      <WhyChooseSection />
      <HowItWorksSection />
      <YouControlSection />
      <TestimonialsSection />
      <TrustedBySection />
      <StepsSection />
      <CtaSection />
      <FaqSection />
      <Footer />
    </>
  );
}
