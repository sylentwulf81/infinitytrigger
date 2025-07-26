import { Locale, Supported_Locales } from "@/types/locale";

export function setLocale(locale: Locale): void {
  // Set cookie that expires in 1 month
  document.cookie = `locale=${locale}; path=/; max-age=${30 * 24 * 60 * 60}`;
}

// Get locale from cookie and return locale code. Default to english (en)
export function getClientLocale(): Locale {
  if (typeof window !== "undefined") {
    const stored = document.cookie
      .split("; ")
      .find((row) => row.startsWith("locale="))
      ?.split("=")[1];

    return stored && Supported_Locales.includes(stored as Locale)
      ? (stored as Locale)
      : "en";
  }
  return "en";
}

export function isValidLocale(locale: string): locale is Locale {
  return Supported_Locales.includes(locale as Locale);
}
