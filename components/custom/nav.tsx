"use client";

import * as React from "react";
import { useTranslations, useLocale } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import { Logo } from "../icons/logo";
import { Button } from "../ui/button";
import { RequestDemoModal } from "./request-demo-modal";
import { MobileMenu } from "./mobile-menu";
import Image from "next/image";
import {
  Activity,
  ArrowRight,
  ChevronDown,
  Clock,
  Cog,
  Menu,
  Sparkles,
  TabletSmartphone,
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
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import {
  NavbarCategories,
  NavbarMenuItemProps,
  NavbarCommonProps,
  NavbarMenu,
  NavbarAvailableLanguages,
  NavbarLanguageOptions,
  NavbarActiveMenuItemProps,
} from "./nav.types";

export function NavRoot() {
  const [activeMenu, setActiveMenu] = React.useState<NavbarMenu | null>(null);
  const [requestDemoOpen, setRequestDemoOpen] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 flex w-full flex-col items-center justify-center border-b border-slate-200 bg-slate-100 transition-colors duration-default ease-in-out">
        <Navbar
          activeMenu={activeMenu}
          setActiveMenu={setActiveMenu}
          onRequestDemoClick={() => setRequestDemoOpen(true)}
          onMobileMenuClick={() => setMobileMenuOpen(true)}
        />
        {activeMenu && (
          <NavbarActiveMenu
            activeMenu={activeMenu}
            setActiveMenu={setActiveMenu}
          />
        )}
      </header>
      <RequestDemoModal
        open={requestDemoOpen}
        onOpenChange={setRequestDemoOpen}
      />
      <MobileMenu
        open={mobileMenuOpen}
        onOpenChange={setMobileMenuOpen}
        onRequestDemoClick={() => setRequestDemoOpen(true)}
      />
    </>
  );
}

function Navbar({
  activeMenu,
  setActiveMenu,
  onRequestDemoClick,
  onMobileMenuClick,
}: NavbarCommonProps & { onMobileMenuClick?: () => void }) {
  const t = useTranslations("Navbar");

  const locale = useLocale();
  const pathname = usePathname();

  const handleMenuClick = (menuName: NavbarMenu) => {
    setActiveMenu(activeMenu === menuName ? null : menuName);
  };

  const menuOptions = Object.values(NavbarMenu);
  const languageOptions = Object.keys(
    NavbarAvailableLanguages,
  ) as NavbarLanguageOptions;

  return (
    <nav
      className="flex w-full max-w-screen-2xl items-center justify-between px-4 py-2 lg:px-8 lg:py-0"
      aria-label="Main navigation"
    >
      <div className="hidden h-full w-full items-center justify-between lg:flex">
        <div className="flex items-center gap-x-3">
          <Logo />
          <div className="flex h-18 items-center pl-2">
            {menuOptions.map((menu) => (
              <NavbarMenuItem
                key={menu}
                itemTitle={t(`${menu}.title`)}
                isActive={activeMenu === menu}
                onClick={() => handleMenuClick(menu)}
              />
            ))}
          </div>
        </div>
        <div className="flex items-center gap-8 lg:gap-4 xl:gap-8">
          <div className="relative inline-flex w-full flex-col py-4 lg:w-auto lg:max-w-none lg:flex-row lg:px-0 lg:py-2">
            <DropdownMenu>
              <DropdownMenuTrigger
                className="flex items-center"
                aria-label="Select language"
              >
                <Globe className="size-5 text-accent-foreground" />
                <ChevronDown
                  className="ml-1 size-5 text-accent-foreground"
                  strokeWidth={1}
                />
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="start"
                className="rounded-none border-2 border-slate-300 bg-slate-50 p-2 text-slate-500 text-sm lg:left-3 lg:top-8 lg:w-auto lg:border-2 xl:text-md"
              >
                {languageOptions.map((language) => (
                  <DropdownMenuItem asChild key={language}>
                    <Link
                      href={pathname}
                      locale={NavbarAvailableLanguages[language]}
                      className={cn(
                        "flex w-full cursor-pointer items-center gap-x-2 rounded-sm px-3 py-2 text-md hover:bg-slate-100 lg:py-2 lg:text-sm",
                        locale === NavbarAvailableLanguages[language] &&
                          "bg-slate-200 hover:bg-slate-200",
                      )}
                    >
                      {language}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <Link
            className="block text-center font-medium text-accent-foreground hover:text-primary group-hover:text-primary lg:hidden xl:block"
            href={"/who-we-serve"}
          >
            Login
          </Link>
          <Button
            variant={"outline"}
            className="hover:border-2"
            onClick={onRequestDemoClick}
          >
            {t("Demo")}
          </Button>
        </div>
      </div>
      <div className="w-full overflow-hidden py-2 lg:hidden">
        <div className="flex w-full items-center justify-between">
          <Logo />
          <button
            onClick={onMobileMenuClick}
            aria-label="Open menu"
            aria-expanded="false"
            className="text-primary"
          >
            <Menu className="size-6" />
          </button>
        </div>
      </div>
    </nav>
  );
}

function NavbarMenuItem({
  itemTitle,
  isActive = false,
  onClick,
}: NavbarMenuItemProps) {
  return (
    <div className="flex h-full items-center pl-4 xl:pl-7">
      <button
        className="group flex cursor-pointer items-center gap-x-1"
        onClick={onClick}
        aria-expanded={isActive}
        aria-label={`${itemTitle} menu`}
      >
        <span
          className={cn(
            "select-none font-medium transition-colors",
            isActive
              ? "text-primary"
              : "text-accent-foreground hover:text-primary group-hover:text-primary",
          )}
        >
          {itemTitle}
        </span>
        <ChevronDown
          className={cn(
            "size-5 transition-all",
            isActive
              ? "rotate-180 text-primary"
              : "text-accent-foreground group-hover:text-primary",
          )}
          strokeWidth={1}
          aria-hidden="true"
        />
      </button>
    </div>
  );
}

function NavbarActiveMenu({ activeMenu, setActiveMenu }: NavbarCommonProps) {
  const t = useTranslations("Navbar");

  const handleCloseMenu = ({}) => {
    setActiveMenu(null);
  };

  const solutions: NavbarCategories[] = t.raw("Solutions.categories");
  const whoWeServe: NavbarCategories[] = t.raw("WhoWeServe.categories");
  const resources: NavbarCategories[] = t.raw("Resources.categories");
  const company: NavbarCategories[] = t.raw("Company.categories");
  const pricing: NavbarCategories[] = t.raw("Pricing.categories");

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

  const smallMenus = [
    NavbarMenu.Resources,
    NavbarMenu.Company,
    NavbarMenu.Pricing,
  ];

  return (
    <>
      <div
        className="fixed inset-0 top-18.25 z-40 bg-black/40 backdrop-blur-sm"
        onClick={handleCloseMenu}
      />

      <div className="relative lg:px-2 shadow-lg">
        <div
          className={cn(
            "fixed top-18.25 z-40 bg-white border-b border-slate-200 shadow-lg",
            activeMenu && smallMenus.includes(activeMenu)
              ? "left-1/2 -translate-x-1/2 w-full max-w-242.5"
              : "left-0 right-0",
          )}
        >
          <div className="px-8 pb-12 pt-8 max-w-7xl mx-auto">
            {activeMenu === NavbarMenu.Solutions && (
              <div className="animate-in fade-in duration-300 flex w-full gap-2 lg:justify-between">
                {solutions.map((category, index) => (
                  <div
                    key={index}
                    className="flex flex-col gap-4 border-l border-slate-300 pl-4"
                  >
                    <div className="group/title flex items-center gap-2 cursor-pointer">
                      <div className="flex h-8 w-8 items-center justify-center rounded-xs border border-neutral-200 bg-white lg:bg-transparent">
                        <Activity
                          className="text-[#94A3B8] size-5"
                          strokeWidth={1}
                        />
                      </div>
                      <h3 className="text-slate-500 transition-all duration-150 hover:text-primary group-hover:text-primary lg:font-semibold lg:text-slate-700 text-lg">
                        {category.title}
                      </h3>
                      <ArrowRight className="size-5 text-primary group-hover/title:text-primary opacity-0 group-hover/title:opacity-100 transition-all" />
                    </div>

                    <div className="flex w-full flex-col gap-4 mt-2">
                      {category.items.map((item, itemIndex) => {
                        const Icon =
                          solutionIcons[index]?.[itemIndex] || TabletSmartphone;
                        return (
                          <NavbarActiveMenuItem
                            key={itemIndex}
                            item={item}
                            itemIndex={itemIndex}
                            Icon={Icon}
                          />
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeMenu === NavbarMenu.WhoWeServe && (
              <div className="animate-in fade-in duration-300 flex w-full gap-2 lg:justify-between">
                <div className="flex flex-col gap-4 border-l border-slate-300 pl-4 w-80">
                  <div className="group/title flex items-center gap-2 cursor-pointer">
                    <h3 className="text-slate-500 text-sm">
                      {whoWeServe[0].title}
                    </h3>
                  </div>
                  <div className="flex w-full flex-col gap-4 mt-2">
                    {whoWeServe[0].items.map((item, index) => {
                      const Icon = whoWeServeIcons[0][index];
                      return (
                        <NavbarActiveMenuItem
                          key={index}
                          item={item}
                          itemIndex={index}
                          Icon={Icon}
                        />
                      );
                    })}
                  </div>
                </div>

                <div className="flex flex-col gap-4 border-l border-slate-300 pl-4 flex-1">
                  <div className="group/title flex items-center gap-2 cursor-pointer">
                    <h3 className="text-slate-500 text-sm">
                      {whoWeServe[1].title}
                    </h3>
                  </div>
                  <div className="grid grid-cols-3 gap-y-4 gap-x-8 mt-2">
                    {whoWeServe[1].items.map((item, index) => {
                      const Icon = whoWeServeIcons[1][index];
                      return (
                        <NavbarActiveMenuItem
                          key={index}
                          item={item}
                          itemIndex={index}
                          Icon={Icon}
                        />
                      );
                    })}
                  </div>
                </div>
              </div>
            )}

            {activeMenu === NavbarMenu.Resources && (
              <div className="animate-in fade-in duration-300 flex w-full gap-4 lg:justify-between">
                <div className="flex flex-col gap-6 border-l border-slate-300 pl-4 w-full">
                  <h3 className="text-slate-500 text-sm">
                    {resources[0].title}
                  </h3>
                  <div className="w-full gap-4 grid grid-cols-3">
                    {resources[0].items.map((item, index) => {
                      const Icon = resourcesIcons[0][index] || FileText;
                      return (
                        <NavbarActiveMenuItem
                          key={index}
                          item={item}
                          itemIndex={index}
                          Icon={Icon}
                        />
                      );
                    })}
                  </div>
                </div>

                <div className="flex flex-col gap-6 border-l border-slate-300 pl-4 w-full max-w-[30%]">
                  <h3 className="text-slate-500 text-sm">
                    {resources[1].title}
                  </h3>
                  <div className="w-full gap-4 flex flex-col">
                    {resources[1].items.map((item, index) => {
                      const Icon = resourcesIcons[1][index] || CircleHelp;
                      return (
                        <NavbarActiveMenuItem
                          key={index}
                          item={item}
                          itemIndex={index}
                          Icon={Icon}
                        />
                      );
                    })}
                  </div>
                </div>
              </div>
            )}

            {activeMenu === NavbarMenu.Company && (
              <div className="animate-in fade-in duration-300 flex w-full gap-8 lg:justify-between">
                <div className="flex flex-col gap-6 border-l border-slate-300 pl-4 w-full">
                  <h3 className="text-slate-500 text-sm lg:text-base">
                    {company[0].title}
                  </h3>
                  <div className="grid grid-cols-3 gap-2">
                    {company[0].items.map((item, index) => {
                      const imageSrc = companyImages[index];
                      return (
                        <Link
                          key={index}
                          href="/who-we-serve"
                          className="group flex flex-col gap-3"
                        >
                          <div className="relative h-22.5 w-40 lg:h-27.5 lg:w-46.5 overflow-hidden">
                            <Image
                              src={imageSrc}
                              alt={item.title}
                              fill
                              className="object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                          </div>
                          <span className="font-medium text-slate-500 text-base lg:text-slate-700">
                            {item.title}
                          </span>
                        </Link>
                      );
                    })}
                  </div>
                </div>

                <div className="flex flex-col gap-6 border-l border-slate-300 pl-4 w-[40%]">
                  <h3 className="text-slate-500 text-sm lg:text-base">
                    {company[1].title}
                  </h3>
                  <div className="flex w-full flex-col gap-4">
                    {company[1].items.map((item, index) => {
                      const Icon = companyIcons[index] || CircleHelp;
                      return (
                        <NavbarActiveMenuItem
                          key={index}
                          item={item}
                          itemIndex={index}
                          Icon={Icon}
                        />
                      );
                    })}
                  </div>
                </div>
              </div>
            )}

            {activeMenu === NavbarMenu.Pricing && (
              <div className="animate-in fade-in duration-300 flex w-full gap-4 lg:justify-between">
                {pricing.map((item, index) => {
                  const Icon = pricingIcons[index] || Activity;
                  return (
                    <div
                      key={index}
                      className="flex flex-col gap-6 border-l border-slate-300 pl-4 w-[60%]"
                    >
                      <NavbarActiveMenuItem
                        item={item}
                        itemIndex={index}
                        Icon={Icon}
                      />
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

function NavbarActiveMenuItem({
  item,
  itemIndex,
  Icon,
}: NavbarActiveMenuItemProps) {
  return (
    <Link
      key={itemIndex}
      href="/who-we-serve"
      className="group flex w-full items-center gap-2"
    >
      <div className="flex h-8 w-8 items-center justify-center rounded-xs border border-neutral-200 bg-white lg:bg-transparent">
        <Icon className="size-5 text-[#94A3B8]" strokeWidth={1} />
      </div>
      <div className="flex w-full flex-1 flex-col">
        <div className="flex items-center gap-2">
          <h4 className="text-slate-500 transition-all duration-150 group-hover:text-primary lg:font-semibold lg:text-slate-700 text-sm">
            {item.title}
          </h4>
          <ArrowRight className="size-4 text-primary opacity-0 group-hover:opacity-100 transition-all shrink-0" />
        </div>
        <p className="text-slate-500 text-xs leading-5">{item.subtitle}</p>
      </div>
    </Link>
  );
}
