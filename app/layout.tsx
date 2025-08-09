import type React from "react";
import "@/app/globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getLocale, getTranslations } from "next-intl/server";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata() {
  const locale = await getLocale();
  const translateMetadata = await getTranslations({
    locale,
    namespace: "metadata",
  });

  return {
    title: translateMetadata("tabTitle"),
    description: translateMetadata("description"),
    icons: {
      icon: [
        { url: "/Assets/logo/shinano labs logo.png" },
        { url: "/Assets/logo/shinano labs logo.png", sizes: "16x16", type: "image/png" },
        { url: "/Assets/logo/shinano labs logo.png", sizes: "32x32", type: "image/png" },
      ],
      apple: [
        {
          url: "/Assets/logo/shinano labs logo.png",
          sizes: "180x180",
          type: "image/png",
        },
      ],
    },
  };
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // messages are the translations files used for the current locale
  const messages = await getMessages();
  const locale = await getLocale();

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <link rel="icon" type="image/png" href="/Assets/logo/shinano labs logo.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/Assets/logo/shinano labs logo.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/Assets/logo/shinano labs logo.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/Assets/logo/shinano labs logo.png" />
      </head>
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange>
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
