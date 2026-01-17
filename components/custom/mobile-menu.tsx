"use client";

import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetTitle } from "../ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { Logo } from "../icons/logo";
import {
  Activity,
  TabletSmartphone,
  Sparkles,
  Cog,
  Clock,
  User,
  UserCheck,
  UserCog,
  Car,
  Truck,
  FlaskConical,
  Sprout,
  Utensils,
  FileText,
  Building2,
  BookOpen,
  LayoutTemplate,
  Wrench,
  Megaphone,
  GraduationCap,
  CircleHelp,
  MessageSquare,
  Users,
  ShieldCheck,
  MonitorSmartphone,
  Globe,
  ArrowRight,
  X,
} from "lucide-react";
import Image from "next/image";
import { BrazilFlag } from "../icons/brazil-flag";
import { USAFlag } from "../icons/usa-flag";
import { ESFlag } from "../icons/es-flag";

interface MobileMenuProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onRequestDemoClick: () => void;
}

export function MobileMenu({
  open,
  onOpenChange,
  onRequestDemoClick,
}: MobileMenuProps) {
  const t = useTranslations("Navbar");
  const locale = useLocale();

  const handleDemoClick = () => {
    onOpenChange(false);
    onRequestDemoClick();
  };

  const languageOptions = [
    { code: "pt", label: "Português (Brasil)", flag: <BrazilFlag /> },
    { code: "en", label: "English (US)", flag: <USAFlag /> },
    { code: "es", label: "Español", flag: <ESFlag /> },
  ];

  const currentLanguage = languageOptions.find((lang) => lang.code === locale);

  const solutions = t.raw("Solutions.categories");
  const whoWeServe = t.raw("WhoWeServe.categories");
  const resources = t.raw("Resources.categories");
  const company = t.raw("Company.categories");
  const pricing = t.raw("Pricing.categories");

  const solutionIcons = [
    [TabletSmartphone, Activity, Sparkles, Cog, Clock],
    [TabletSmartphone, Activity, Sparkles, Cog, Clock],
    [TabletSmartphone, Activity, Sparkles, Cog, Clock],
  ];

  const whoWeServeIcons = [
    [User, UserCheck, UserCog],
    [Car, Truck, FlaskConical, Sprout, Utensils, FileText],
  ];

  const resourcesIcons = [
    [Building2, BookOpen, LayoutTemplate, FileText, Wrench, Sparkles],
    [Megaphone, GraduationCap, CircleHelp],
  ];

  const companyImages = [
    "https://imgix.tractian.com/website/components/navbar/general/about.png?auto=format%2Ccompress&cs=origin&fit=max&q=75&w=3840",
    "https://imgix.tractian.com/website/components/navbar/general/careers.png?auto=format%2Ccompress&cs=origin&fit=max&q=75&w=3840",
    "https://imgix.tractian.com/website/components/navbar/general/newsroom.png?auto=format%2Ccompress&cs=origin&fit=max&q=75&w=3840",
  ];

  const companyIcons = [MessageSquare, Users, ShieldCheck];
  const pricingIcons = [Activity, MonitorSmartphone];

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent
        side="right"
        className="w-full flex flex-col [&>button]:hidden"
      >
        <SheetTitle className="hidden" />
        <div className="flex w-full items-center justify-between py-3.5 px-4 border-slate-200 bg-slate-100">
          <div className="h-6">
            <Logo />
          </div>
          <button
            onClick={() => onOpenChange(false)}
            className="text-slate-500 hover:text-slate-700"
          >
            <X className="h-7 w-7" strokeWidth={1} />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto" aria-label="Mobile navigation">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="solutions" className="border-none">
              <AccordionTrigger className="flex w-full items-center justify-between px-4 py-3 hover:brightness-125">
                <p className="text-body-sm font-normal text-slate-500">
                  {t("Solutions.title")}
                </p>
              </AccordionTrigger>
              <AccordionContent className="space-y-6 bg-slate-100 relative flex flex-col px-4 py-4">
                <div className="flex flex-col gap-y-2 pb-4">
                  <div className="flex w-full flex-col gap-8">
                    {solutions.map((category: any, categoryIndex: number) => (
                      <div
                        key={categoryIndex}
                        className="flex w-full flex-col gap-4"
                      >
                        <Link
                          href={"/who-we-serve"}
                          className="group flex w-full items-center gap-2"
                        >
                          <div className="flex h-8 w-8 items-center justify-center rounded-xs border border-neutral-200 bg-white">
                            <Activity
                              className="w-5 h-5 text-slate-400"
                              strokeWidth={1.5}
                            />
                          </div>
                          <div className="text-slate-500 transition-all duration-150 group-hover:text-blue-600 group-active:text-blue-600 text-sm font-normal flex items-center gap-1">
                            <h4>
                              {category.title}
                              <ArrowRight
                                className="hidden group-active:inline-block w-4 h-4 text-blue-600"
                                strokeWidth={1.5}
                              />
                            </h4>
                          </div>
                        </Link>
                        <div className="flex w-full flex-col gap-3 ml-4">
                          {category.items.map(
                            (item: any, itemIndex: number) => {
                              const Icon =
                                solutionIcons[categoryIndex]?.[itemIndex] ||
                                TabletSmartphone;
                              return (
                                <Link
                                  key={itemIndex}
                                  href="/who-we-serve"
                                  className="group flex items-start gap-3 hover:bg-slate-50 transition-colors"
                                  onClick={() => onOpenChange(false)}
                                >
                                  <div className="flex h-8 w-8 items-center justify-center rounded-xs border border-neutral-200 bg-white">
                                    <Icon
                                      className="w-5 h-5 text-slate-400"
                                      strokeWidth={1.5}
                                    />
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <div className="text-slate-500 transition-all duration-150 group-hover:text-blue-600 group-active:text-blue-600 text-body-sm flex items-center gap-1">
                                      {item.title}
                                      <ArrowRight
                                        className="hidden group-active:inline-block w-4 h-4 text-blue-600"
                                        strokeWidth={1.5}
                                      />
                                    </div>
                                    {item.subtitle && (
                                      <div className="text-slate-500 text-xs pr-1">
                                        {item.subtitle}
                                      </div>
                                    )}
                                  </div>
                                </Link>
                              );
                            },
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="industries" className="border-none">
              <AccordionTrigger className="flex w-full items-center justify-between px-4 py-3 hover:brightness-125">
                <p className="text-body-sm font-normal text-slate-500">
                  {t("WhoWeServe.title")}
                </p>
              </AccordionTrigger>
              <AccordionContent className="bg-slate-100 relative flex flex-col px-4 py-4">
                <div className="flex w-full flex-col gap-8 pb-4">
                  {whoWeServe.map((category: any, categoryIndex: number) => (
                    <div
                      key={categoryIndex}
                      className="flex w-full flex-col gap-4"
                    >
                      <h4 className="uppercase text-slate-500 text-body-sm">
                        {category.title}
                      </h4>
                      <div className="flex w-full flex-col gap-4">
                        {category.items.map((item: any, itemIndex: number) => {
                          const Icon =
                            whoWeServeIcons[categoryIndex]?.[itemIndex] || User;
                          return (
                            <Link
                              key={itemIndex}
                              href="/who-we-serve"
                              className="group flex w-full items-center gap-2"
                              onClick={() => onOpenChange(false)}
                            >
                              <div className="flex h-8 w-8 items-center justify-center rounded-xs border border-neutral-200 bg-white">
                                <Icon
                                  className="w-5 h-5 text-slate-400"
                                  strokeWidth={1.5}
                                />
                              </div>
                              <div className="text-slate-500 transition-all duration-150 group-hover:text-blue-600 group-active:text-blue-600 text-body-sm flex items-center gap-1">
                                {item.title}
                                <ArrowRight
                                  className="hidden group-active:inline-block w-4 h-4 text-blue-600"
                                  strokeWidth={1.5}
                                />
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="resources" className="border-none">
              <AccordionTrigger className="flex w-full items-center justify-between px-4 py-3 hover:brightness-125">
                <p className="text-body-sm font-normal text-slate-500">
                  {t("Resources.title")}
                </p>
              </AccordionTrigger>
              <AccordionContent className="bg-slate-100 relative flex flex-col px-4 py-4">
                <div className="flex w-full flex-col gap-8 pb-4">
                  {resources.map((category: any, categoryIndex: number) => (
                    <div
                      key={categoryIndex}
                      className="flex w-full flex-col gap-4"
                    >
                      <h4 className="uppercase text-slate-500 text-body-sm">
                        {category.title}
                      </h4>
                      <div className="flex w-full flex-col gap-4">
                        {category.items.map((item: any, itemIndex: number) => {
                          const Icon =
                            resourcesIcons[categoryIndex]?.[itemIndex] ||
                            FileText;
                          return (
                            <Link
                              key={itemIndex}
                              href="/who-we-serve"
                              className="group flex w-full items-center gap-2"
                              onClick={() => onOpenChange(false)}
                            >
                              <div className="flex h-8 w-8 items-center justify-center rounded-xs border border-neutral-200 bg-white">
                                <Icon
                                  className="w-5 h-5 text-slate-400"
                                  strokeWidth={1.5}
                                />
                              </div>
                              <div className="text-slate-500 transition-all duration-150 group-hover:text-blue-600 group-active:text-blue-600 text-body-sm flex items-center gap-1">
                                {item.title}
                                <ArrowRight
                                  className="hidden group-active:inline-block w-4 h-4 text-blue-600"
                                  strokeWidth={1.5}
                                />
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="about" className="border-none">
              <AccordionTrigger className="flex w-full items-center justify-between px-4 py-3 hover:brightness-125">
                <p className="text-body-sm font-normal text-slate-500">
                  {t("Company.title")}
                </p>
              </AccordionTrigger>
              <AccordionContent className="bg-slate-100 relative flex flex-col px-4 py-4">
                <div className="flex flex-col gap-8 pb-4">
                  {company.map((category: any, categoryIndex: number) => (
                    <div
                      key={categoryIndex}
                      className="flex w-full flex-col gap-4"
                    >
                      <h4 className="uppercase text-slate-500 text-body-sm">
                        {category.title}
                      </h4>
                      <div className="space-y-4">
                        {category.items.map((item: any, itemIndex: number) => {
                          if (categoryIndex === 0) {
                            const imageSrc = companyImages[itemIndex];
                            return (
                              <Link
                                key={itemIndex}
                                href="/who-we-serve"
                                className="group flex items-center gap-3 hover:bg-slate-50 transition-colors"
                                onClick={() => onOpenChange(false)}
                              >
                                <div className="group ml-4 flex flex-row items-center gap-4">
                                  <Image
                                    src={imageSrc}
                                    alt={item.title}
                                    width={48}
                                    height={48}
                                    className="h-22.5 w-40 rounded-xs"
                                  />
                                </div>
                                <div className="text-slate-500 text-body-sm flex items-center gap-1 group-active:text-blue-600 group-hover:text-blue-600">
                                  {item.title}
                                  <ArrowRight
                                    className="hidden group-active:inline-block w-4 h-4 text-blue-600"
                                    strokeWidth={1.5}
                                  />
                                </div>
                              </Link>
                            );
                          }
                          const Icon = companyIcons[itemIndex] || MessageSquare;
                          return (
                            <Link
                              key={itemIndex}
                              href="/who-we-serve"
                              className="group flex items-center gap-2"
                              onClick={() => onOpenChange(false)}
                            >
                              <div className="flex h-8 w-8 items-center justify-center rounded-xs border border-neutral-200 bg-white">
                                <Icon
                                  className="w-5 h-5 text-slate-400"
                                  strokeWidth={1.5}
                                />
                              </div>
                              <div className="text-slate-500 transition-all duration-150 group-hover:text-blue-600 group-active:text-blue-600text-body-sm flex items-center gap-1">
                                {item.title}
                                <ArrowRight
                                  className="hidden group-active:inline-block w-4 h-4 text-blue-600"
                                  strokeWidth={1.5}
                                />
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="pricing" className="border-none">
              <AccordionTrigger className="flex w-full items-center justify-between px-4 py-3 hover:brightness-125">
                <p className="text-body-sm font-normal text-slate-500">
                  {t("Pricing.title")}
                </p>
              </AccordionTrigger>
              <AccordionContent className="bg-slate-100 relative flex flex-col px-4 py-4">
                <div className="flex flex-col gap-y-4 pb-4">
                  {pricing.map((item: any, index: number) => {
                    const Icon = pricingIcons[index] || Activity;
                    return (
                      <Link
                        key={index}
                        href="/who-we-serve"
                        className="group flex items-center gap-2 hover:bg-slate-50 transition-colors"
                        onClick={() => onOpenChange(false)}
                      >
                        <div className="flex h-8 w-8 items-center justify-center rounded-xs border border-neutral-200 bg-white">
                          <Icon
                            className="w-5 h-5 text-slate-400"
                            strokeWidth={1.5}
                          />
                        </div>
                        <div className="text-slate-500 transition-all duration-150 group-hover:text-blue-600 group-active:text-blue-600 text-body-sm flex items-center gap-1">
                          {item.title}
                          <ArrowRight
                            className="hidden group-active:inline-block w-4 h-4 text-blue-600"
                            strokeWidth={1.5}
                          />
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="translation" className="border-none">
              <AccordionTrigger className="group flex w-full items-center justify-between px-4 py-3 hover:brightness-125 data-[state=open]:text-blue-600!">
                <div className="flex items-center gap-4 mt-2">
                  <Globe className="h-5 w-5" />
                  <span>{currentLanguage?.label}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="space-y-6 relative flex flex-col px-4">
                <div className="w-full">
                  {languageOptions.map((lang) => (
                    <div key={lang.code}>
                      <Link
                        href="/who-we-serve"
                        locale={lang.code as "pt" | "en" | "es"}
                        className={`flex w-full items-center gap-x-4 px-2 py-2 text-body-md cursor-default ${lang.code === locale ? "bg-slate-200 rounded-xs" : ""}`}
                      >
                        <span>{lang.flag}</span>
                        <span className="text-slate-500 text-body-sm">
                          {lang.label}
                        </span>
                      </Link>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <div className="flex items-center justify-between gap-4 px-4 py-6 w-full mt-2">
            <Button
              variant="outline"
              onClick={() => {
                onOpenChange(false);
                window.location.href = "/login";
              }}
              className="flex-1 text-sm"
            >
              {t("Login")}
            </Button>
            <Button onClick={handleDemoClick} className="flex-1 text-sm">
              {t("Demo")}
            </Button>
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
