import { LucideProps } from "lucide-react";
import React from "react";

export interface NavbarMenuItemProps {
  itemTitle: string;
  isActive?: boolean;
  onClick?: () => void;
}

export enum NavbarMenu {
  Solutions = "Solutions",
  WhoWeServe = "WhoWeServe",
  Resources = "Resources",
  Company = "Company",
  Pricing = "Pricing",
}

export interface NavbarItem {
  title: string;
  subtitle?: string;
}

export interface NavbarActiveMenuItemProps {
  item: NavbarItem;
  itemIndex: number;
  Icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >;
}

export interface NavbarCommonProps {
  activeMenu: NavbarMenu | null;
  setActiveMenu: React.Dispatch<React.SetStateAction<NavbarMenu | null>>;
}

export enum NavbarAvailableLanguages {
  "Português (Brasil)" = "pt",
  "English (United States)" = "en",
  "Español (México)" = "es",
}

export type NavbarLanguageOptions = (keyof typeof NavbarAvailableLanguages)[];

export interface NavbarCategories {
  title: string;
  items: NavbarItem[];
}
