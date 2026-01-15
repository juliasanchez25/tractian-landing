import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "es", "pt"],
  defaultLocale: "pt",
  localePrefix: "as-needed",
  pathnames: {
    "/who-we-serve": {
      pt: "/solucoes-para-gerentes-industriais",
      en: "/who-we-serve/plant-manager",
      es: "/who-we-serve/gerente-de-planta",
    },
  },
});
