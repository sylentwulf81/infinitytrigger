import createMiddleware from "next-intl/middleware";
import { Supported_Locales } from "@/types/locale";

export default createMiddleware({
  locales: Supported_Locales,
  defaultLocale: "en",
  localePrefix: "never",
});

// This matcher ensures that the middleware applies to all routes except API routes, Next.js internals, and static files.
export const config = {
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
