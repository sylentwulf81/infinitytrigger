import type React from "react";
import "@/app/globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Infinity Trigger | Creative Tools for Creatives",
  description:
    "We make creative tools that celebrate human creativity. Discover Meanwhile and Myriad Worlds - apps designed to inspire your creative journey.",
  icons: {
    icon: [
      { url: '/Assets/favicon.ico' },
      { url: '/Assets/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/Assets/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/Assets/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" type="image/x-icon" href="/Assets/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/Assets/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/Assets/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/Assets/apple-touch-icon.png" />
      </head>
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
