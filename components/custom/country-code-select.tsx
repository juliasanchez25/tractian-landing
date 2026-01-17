"use client";

import * as React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { BrazilFlag } from "@/components/icons/brazil-flag";
import { USAFlag } from "@/components/icons/usa-flag";
import { ESFlag } from "@/components/icons/es-flag";

interface CountryCodeSelectProps {
  value: string;
  onValueChange: (value: string) => void;
  countryCodes: Array<{ code: string; country: string }>;
}

const flagMap: Record<string, React.ComponentType<{ className?: string }>> = {
  "+1": USAFlag,
  "+55": BrazilFlag,
  "+34": ESFlag,
};

export function CountryCodeSelect({
  value,
  onValueChange,
  countryCodes,
}: CountryCodeSelectProps) {
  const FlagIcon = value ? flagMap[value] : null;

  return (
    <Select value={value} onValueChange={onValueChange}>
      <SelectTrigger className="w-12 border-0 bg-transparent shadow-none focus:ring-0 focus:ring-offset-0 p-0">
        <SelectValue>
          <div className="pl-2 flex items-center justify-center">
            {FlagIcon && <FlagIcon className="w-5 h-4" />}
          </div>
        </SelectValue>
      </SelectTrigger>
      <SelectContent>
        {countryCodes?.map((item: { code: string; country: string }) => {
          const Flag = flagMap[item.code];
          return (
            <SelectItem key={item.code} value={item.code}>
              <div className="flex items-center gap-2">
                {Flag && <Flag className="w-5 h-4" />}
                <span>{item.code}</span>
                <span className="text-slate-700">{item.country}</span>
              </div>
            </SelectItem>
          );
        })}
      </SelectContent>
    </Select>
  );
}
