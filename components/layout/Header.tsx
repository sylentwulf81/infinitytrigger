"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu, X, Cpu, Info, Boxes, Heart } from "lucide-react";
import { ThemeSwitch } from "@/components/ui/theme-switch";
import { usePathname } from "next/navigation";
import { GlowButton } from "@/components/GlowButton";
import Languageselector from "@/components/LanguageSelector";

export function Header() {
  const translateHeader = useTranslations("header");
  const translateCommon = useTranslations("common");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isDevelopment = process.env.NODE_ENV === "development";

  return (
    <header className="sticky top-0 z-50 w-full border-b border-brand-lavender/30 dark:border-brand-mint/20 bg-brand-accent/80 dark:bg-brand-logo/20 backdrop-blur-md">
      <div className="container flex h-20 items-center">
        <div className="flex-1 basis-[200px]">
          <Link href="/" className="flex items-center justify-center gap-4">
            {isDevelopment && (
              <Cpu className="w-5 h-5 text-brand-dark dark:text-brand-mint animate-pulse" />
            )}
            {/* Desktop/tablet: full logo + logotype */}
            <Image
              src="/Assets/logo/shinano labs logo and logotype.png"
              alt="Shinano Labs Logo"
              width={200}
              height={52}
              className="hidden md:block object-contain"
              priority
            />
            {/* Mobile: compact logo mark only */}
            <Image
              src="/Assets/logo/shinano labs logo.png"
              alt="Shinano Labs Logo"
              width={44}
              height={44}
              className="block md:hidden object-contain"
              priority
            />
          </Link>
        </div>
        <nav className="hidden md:flex gap-6 flex-1 justify-center">
          <Link
            href="/products"
            className={`relative flex items-center justify-center gap-1 px-4 py-2 rounded-full transition-all duration-300 font-semibold tracking-wide
              text-brand-dark dark:text-brand-mint
              hover:bg-brand-lavender/40 dark:hover:bg-brand-mint/25 dark:hover:text-brand-mint/90 hover:shadow-md
              ${pathname === "/products" ? "bg-brand-lavender/60 dark:bg-brand-mint/20" : ""} min-w-[140px]`}>
            <Boxes className="w-4 h-4 opacity-70" />
            {translateHeader("navigation.products")}
          </Link>
          <Link
            href="/about"
            className={`relative flex items-center justify-center gap-1 px-4 py-2 rounded-full transition-all duration-300 font-semibold tracking-wide
              text-brand-dark dark:text-brand-mint
              hover:bg-brand-lavender/40 dark:hover:bg-brand-mint/25 dark:hover:text-brand-mint/90 hover:shadow-md
              ${pathname === "/about" ? "bg-brand-lavender/60 dark:bg-brand-mint/20" : ""} min-w-[170px]`}>
            <Info className="w-4 h-4 opacity-70" />
            {translateHeader("navigation.about")}
          </Link>
          <Link
            href="/values"
            className={`relative flex items-center justify-center gap-1 px-4 py-2 rounded-full transition-all duration-300 font-semibold tracking-wide
              text-brand-dark dark:text-brand-mint
              hover:bg-brand-lavender/40 dark:hover:bg-brand-mint/25 dark:hover:text-brand-mint/90 hover:shadow-md
              ${pathname === "/values" ? "bg-brand-lavender/60 dark:bg-brand-mint/20" : ""} min-w-[120px]`}>
            <Heart className="w-4 h-4 opacity-70" />
            {translateHeader("navigation.values")}
          </Link>

        </nav>
        <div className="flex items-center gap-4 justify-end flex-1 basis-[200px]">
          {/* Desktop theme switch only */}
          <div className="hidden md:flex items-center gap-2">
            <Languageselector className="mx-4" />
            <ThemeSwitch />
          </div>
          <Link href="/contact" className="hidden md:block">
            <GlowButton variant="primary" className="shadow-lg hover:shadow-xl">
              {translateCommon("getInTouch")}
            </GlowButton>
          </Link>
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="md:hidden border-brand-teal/30 text-brand-teal hover:bg-brand-teal hover:text-white"
                aria-expanded={mobileMenuOpen}>
                <span className="sr-only">{translateHeader("toggleMenu")}</span>
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-80 bg-white dark:bg-gray-900 border-l border-brand-lavender/20 dark:border-gray-700 text-brand-dark dark:text-white">
              <SheetHeader className="p-4 border-b border-brand-lavender/20 dark:border-gray-700">
                <SheetTitle className="sr-only">
                  {translateHeader("navigationMenu")}
                </SheetTitle>
                <div className="flex items-center">
                  <Link
                    href="/"
                    className="flex items-center gap-2"
                    onClick={() => setMobileMenuOpen(false)}>
                    {/* Mobile sheet header uses compact logo mark */}
                    <Image
                      src="/Assets/logo/shinano labs logo.png"
                      alt="Shinano Labs Logo"
                      width={40}
                      height={40}
                      className="object-contain"
                    />
                  </Link>
                </div>
              </SheetHeader>
              {/* Mobile theme switch only */}
              <div className="flex justify-between px-2">
                <ThemeSwitch className="mt-4 md:hidden" />
                {/* Mobile Language switch */}
                <Languageselector className="mt-4 md:hidden" />
              </div>
              <div className="p-4 space-y-2">
                <Link
                  href="/products"
                  className="flex items-center px-3 py-2 text-sm font-medium text-brand-dark dark:text-white hover:text-brand-teal dark:hover:text-brand-mint hover:bg-brand-lavender/10 dark:hover:bg-brand-lavender/20 rounded-md transition-colors duration-300"
                  onClick={() => setMobileMenuOpen(false)}>
                  {translateHeader("navigation.products")}
                </Link>
                <Link
                  href="/about"
                  className="flex items-center px-3 py-2 text-sm font-medium text-brand-dark dark:text-white hover:text-brand-teal dark:hover:text-brand-mint hover:bg-brand-lavender/10 dark:hover:bg-brand-lavender/20 rounded-md transition-colors duration-300"
                  onClick={() => setMobileMenuOpen(false)}>
                  {translateHeader("navigation.about")}
                </Link>
                <Link
                  href="/values"
                  className="flex items-center px-3 py-2 text-sm font-medium text-brand-dark dark:text-white hover:text-brand-teal dark:hover:text-brand-mint hover:bg-brand-lavender/10 dark:hover:bg-brand-lavender/20 rounded-md transition-colors duration-300"
                  onClick={() => setMobileMenuOpen(false)}>
                  {translateHeader("navigation.values")}
                </Link>

              </div>
              <div className="p-4 border-t border-brand-lavender/20 dark:border-gray-700">
                <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                  <Button className="w-full bg-gradient-to-r from-brand-teal to-brand-mint hover:from-brand-teal/90 hover:to-brand-mint/90 text-white dark:text-gray-900 dark:bg-brand-mint dark:hover:bg-brand-mint/80 shadow-lg hover:shadow-xl transition-all duration-300">
                    {translateCommon("contactUs")}
                  </Button>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
