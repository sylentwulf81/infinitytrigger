"use client";

import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { setLocale } from "@/lib/locale_utils";
import { Locale, Languages } from "@/types/locale";
import { useTranslations } from "next-intl";
import { Globe } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
} from "@/components/ui/dropdown-menu";

export default function Languageselector({
  className,
}: {
  className?: string;
}) {
  const currentLocale = useLocale() as Locale;
  const translateHeader = useTranslations("header");
  const router = useRouter();

  const handleLanguageChange = (newLocale: string): void => {
    if (newLocale === currentLocale) return;

    setLocale(newLocale as Locale);

    router.refresh();
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Globe size={25} className={`${className ?? ""} cursor-pointer`} />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>
          {translateHeader("changeLanguage")}
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup
          value={currentLocale}
          onValueChange={handleLanguageChange}>
          {Languages.map((lang) => (
            <DropdownMenuRadioItem
              key={lang.code}
              value={lang.code}
              className="cursor-pointer">
              {lang.name}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
