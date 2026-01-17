import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://tractian.com";
  const locales = ["en", "es", "pt"];

  const pages = locales.flatMap((locale) => [
    {
      url: `${baseUrl}/${locale === "pt" ? "" : locale}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 1,
      alternates: {
        languages: {
          en: `${baseUrl}/en`,
          es: `${baseUrl}/es`,
          pt: `${baseUrl}`,
        },
      },
    },
    {
      url:
        locale === "pt"
          ? `${baseUrl}/solucoes-para-gerentes-industriais`
          : `${baseUrl}/${locale}/who-we-serve`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
  ]);

  return pages;
}
