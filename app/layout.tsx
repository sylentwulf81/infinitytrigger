import type React from "react";
import "@/app/globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getLocale, getTranslations } from "next-intl/server";
import { Syne, Figtree, Noto_Sans_JP } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-jp",
  display: "swap",
});

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
        {
          url: "/Assets/logo/shinano labs logo.png",
          sizes: "16x16",
          type: "image/png",
        },
        {
          url: "/Assets/logo/shinano labs logo.png",
          sizes: "32x32",
          type: "image/png",
        },
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
  const messages = await getMessages();
  const locale = await getLocale();

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <link
          rel="icon"
          type="image/png"
          href="/Assets/logo/shinano labs logo.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/Assets/logo/shinano labs logo.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/Assets/logo/shinano labs logo.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/Assets/logo/shinano labs logo.png"
        />
      </head>
      <body
        className={`${syne.variable} ${figtree.variable} ${notoSansJP.variable} font-sans flex flex-col min-h-screen`}>
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
