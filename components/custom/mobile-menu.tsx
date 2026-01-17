"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "../ui/sheet";

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

  const handleDemoClick = () => {
    onOpenChange(false);
    onRequestDemoClick();
  };

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="right" className="w-full sm:w-96">
        <SheetHeader>
          <SheetTitle>{t("Menu")}</SheetTitle>
        </SheetHeader>

        <nav
          className="mt-8 flex flex-col gap-6"
          aria-label="Mobile navigation"
        >
          <div className="flex flex-col gap-4">
            <Link
              href="/who-we-serve"
              className="text-lg font-medium text-slate-700 hover:text-blue-600"
              onClick={() => onOpenChange(false)}
            >
              {t("Solutions.title")}
            </Link>
            <Link
              href="/who-we-serve"
              className="text-lg font-medium text-slate-700 hover:text-blue-600"
              onClick={() => onOpenChange(false)}
            >
              {t("WhoWeServe.title")}
            </Link>
            <Link
              href="/who-we-serve"
              className="text-lg font-medium text-slate-700 hover:text-blue-600"
              onClick={() => onOpenChange(false)}
            >
              {t("Resources.title")}
            </Link>
            <Link
              href="/who-we-serve"
              className="text-lg font-medium text-slate-700 hover:text-blue-600"
              onClick={() => onOpenChange(false)}
            >
              {t("Company.title")}
            </Link>
            <Link
              href="/who-we-serve"
              className="text-lg font-medium text-slate-700 hover:text-blue-600"
              onClick={() => onOpenChange(false)}
            >
              {t("Pricing.title")}
            </Link>
          </div>

          <div className="flex flex-col gap-4 border-t border-slate-200 pt-6">
            <Link
              href="/who-we-serve"
              className="text-base font-medium text-slate-700 hover:text-blue-600"
              onClick={() => onOpenChange(false)}
            >
              {t("Login")}
            </Link>
            <Button onClick={handleDemoClick} className="w-full">
              {t("Demo")}
            </Button>
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
