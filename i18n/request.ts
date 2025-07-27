import { getRequestConfig } from "next-intl/server";
import { cookies, headers } from "next/headers";
import { isValidLocale } from "@/lib/locale_utils";

export default getRequestConfig(async () => {
  // Get locale from cookie server request
  const cookieStore = await cookies();
  let locale: string | undefined = cookieStore.get("locale")?.value;

  // Fallback to Accept-Language header if no cookie is found
  if (!locale) {
    const headersList = await headers();
    const acceptLanguage = headersList.get("accept-language");
    locale = acceptLanguage?.split(",")[0]?.split("-")[0] || "en";
  }

  if (!isValidLocale(locale)) {
    locale = "en";
  }

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
