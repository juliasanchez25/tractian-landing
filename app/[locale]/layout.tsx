import type { Metadata } from "next";
import { NextIntlClientProvider, useTranslations } from "next-intl";
import { Inter } from "next/font/google";
import { hasLocale } from "next-intl";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import "./globals.css";
import { NavRoot } from "@/components/custom/nav";
import { getTranslations } from "next-intl/server";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Hero" });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body className={`${inter.variable} antialiased`}>
        <NextIntlClientProvider>
          <NavRoot />
          <main className="min-h-screen flex-1">{children}</main>
          {/* <Footer /> */}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
