import createMiddleware from "next-intl/middleware";
import { Supported_Locales } from "@/types/locale";

export default createMiddleware({
  locales: Supported_Locales,
  defaultLocale: "en",
  localePrefix: "never",
});

// Skip API, Next internals, metadata images, and static files.
export const config = {
  matcher: [
    "/((?!api|_next|_vercel|opengraph-image|twitter-image|favicon.ico|.*\\..*).*)",
  ],
};
