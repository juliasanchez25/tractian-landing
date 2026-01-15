"use client";

import * as React from "react";
import { useTranslations, useLocale } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import { Logo } from "../icons/logo";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";
import { Button } from "../ui/button";
import { GlobeIcon } from "lucide-react";

export function Navbar() {
  const t = useTranslations("Navbar");
  const locale = useLocale();
  const pathname = usePathname();

  const solutions = t.raw("Solutions.categories") as {
    title: string;
    items: {
      title: string;
      subtitle: string;
    }[];
  }[];

  const whoWeServe = t.raw("Who We Serve.categories") as {
    title: string;
    items: string[];
  }[];

  const resources = t.raw("Resources.categories") as {
    title: string;
    items: string[];
  }[];

  const company = t.raw("Company.categories") as {
    title: string;
    items: string[];
  }[];

  const pricing = t.raw("Pricing.categories") as {
    title: string;
  }[];

  return (
    <header className="sticky top-0 z-40 flex w-full flex-col items-center justify-center transition-colors duration-default ease-in-out bg-slate-100 border-b border-slate-200">
      <div className="flex w-full max-w-screen-2xl items-center justify-between px-4 py-2 lg:px-8 lg:py-0">
        <div className="hidden h-full w-full items-center justify-between lg:flex">
          <div className="flex items-center gap-x-4">
            <Logo />
            <div className="flex items-center h-18 pl-3">
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem className="flex h-full items-center pl-4 xl:pl-5">
                    <NavigationMenuTrigger>
                      {t("Solutions.title")}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent></NavigationMenuContent>
                  </NavigationMenuItem>

                  <NavigationMenuItem className="flex h-full items-center pl-4 xl:pl-5">
                    <NavigationMenuTrigger>
                      {t("Who We Serve.title")}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent></NavigationMenuContent>
                  </NavigationMenuItem>

                  <NavigationMenuItem className="flex h-full items-center pl-4 xl:pl-5">
                    <NavigationMenuTrigger>
                      {t("Resources.title")}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent></NavigationMenuContent>
                  </NavigationMenuItem>

                  <NavigationMenuItem className="flex h-full items-center pl-4 xl:pl-5">
                    <NavigationMenuTrigger>
                      {t("Company.title")}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent></NavigationMenuContent>
                  </NavigationMenuItem>

                  <NavigationMenuItem className="flex h-full items-center pl-4 xl:pl-5">
                    <NavigationMenuTrigger>
                      {t("Pricing.title")}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent></NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>
          <div className="flex items-center gap-x-8 lg:gap-4 xl:gap-x-8">
            <div className="relative inline-flex w-full flex-col py-4 lg:w-auto lg:max-w-none lg:flex-row lg:px-0 lg:py-2">
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem className="flex h-full items-center pl-4 xl:pl-5">
                    <NavigationMenuTrigger>
                      <GlobeIcon className="size-5" />
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="border-slate-300">
                      <div className="w-44">
                        <NavigationMenuLink asChild>
                          <Link
                            className={cn(
                              "text-accent-foreground px-3 py-2",
                              locale === "pt" &&
                                "bg-slate-200 hover:bg-slate-200 text-accent-foreground"
                            )}
                            href={pathname}
                            locale="pt"
                          >
                            Português (Brasil)
                          </Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                          <Link
                            className={cn(
                              "text-accent-foreground px-3 py-2",

                              locale === "en" &&
                                "bg-slate-200 hover:bg-slate-200 text-accent-foreground"
                            )}
                            href={pathname}
                            locale="en"
                          >
                            English (United States)
                          </Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                          <Link
                            className={cn(
                              "text-accent-foreground px-3 py-2",
                              locale === "es" &&
                                "bg-slate-200 hover:bg-slate-200 text-accent-foreground"
                            )}
                            href={pathname}
                            locale="es"
                          >
                            Español (México)
                          </Link>
                        </NavigationMenuLink>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>
            <Link
              className="block text-center lg:hidden xl:block font-medium text-accent-foreground hover:text-primary group-hover:text-primary"
              href={"/who-we-serve"}
            >
              Login
            </Link>
            <Button variant={"outline"}>{t("Demo")}</Button>
          </div>
        </div>
      </div>
    </header>
  );
}
