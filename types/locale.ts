export type Locale = "en" | "ja";

export interface Language {
  code: Locale;
  name: string;
}

export const Supported_Locales: Locale[] = ["en", "ja"];

export const Languages: Language[] = [
  { code: "en", name: "English" },
  { code: "ja", name: "日本語" },
];
