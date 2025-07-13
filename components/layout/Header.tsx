"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X, Cpu } from "lucide-react";
import { ThemeSwitch } from "@/components/ui/theme-switch";
import { usePathname } from "next/navigation";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isDevelopment = process.env.NODE_ENV === 'development';

  return (
    <header className="sticky top-0 z-50 w-full border-b border-brand-lavender/20 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="flex-1 basis-[200px]">
          <Link href="/" className="flex items-center gap-2">
            {isDevelopment && (
              <Cpu className="w-5 h-5 text-brand-dark dark:text-brand-mint animate-pulse" />
            )}
            <Image
              src="/Assets/logo-no-background.png"
              alt="Infinity Trigger Logo"
              width={150}
              height={40}
              className="object-contain"
              priority
            />
          </Link>
        </div>
        <nav className="hidden md:flex gap-8 flex-1 justify-center">
          <Link
            href="/products" 
            className="text-sm font-medium relative group text-brand-dark dark:text-brand-mint hover:text-brand-teal dark:hover:text-white transition-colors duration-300"
          >
            <span className="block">Products</span>
            <span className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-brand-teal to-brand-mint transition-all duration-300 ${pathname === "/products" ? "w-full" : "w-0 group-hover:w-full"}`}></span>
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium relative group text-brand-dark dark:text-brand-mint hover:text-brand-teal dark:hover:text-white transition-colors duration-300"
          >
            <span className="block">About</span>
            <span className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-brand-teal to-brand-mint transition-all duration-300 ${pathname === "/about" ? "w-full" : "w-0 group-hover:w-full"}`}></span>
          </Link>
          <Link
            href="/values" 
            className="text-sm font-medium relative group text-brand-dark dark:text-brand-mint hover:text-brand-teal dark:hover:text-white transition-colors duration-300"
          >
            <span className="block">Values</span>
            <span className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-brand-teal to-brand-mint transition-all duration-300 ${pathname === "/values" ? "w-full" : "w-0 group-hover:w-full"}`}></span>
          </Link>
        </nav>
        <div className="flex items-center gap-4 justify-end flex-1 basis-[200px]">
          {/* Desktop theme switch only */}
          <ThemeSwitch className="hidden md:flex" />
          <Link href="/contact" className="hidden md:block">
            <Button className="bg-brand-teal hover:bg-brand-mint text-white hover:text-brand-dark shadow-lg hover:shadow-xl transition-all duration-300">
              Get In Touch
            </Button>
          </Link>
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="md:hidden border-brand-teal/30 text-brand-teal hover:bg-brand-teal hover:text-white"
                aria-expanded={mobileMenuOpen}
              >
                <span className="sr-only">Toggle menu</span>
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 bg-white dark:bg-gray-900 border-l border-brand-lavender/20 dark:border-gray-700 text-brand-dark dark:text-white">
              <SheetHeader className="p-4 border-b border-brand-lavender/20 dark:border-gray-700">
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                <div className="flex items-center">
                  <Link href="/" className="flex items-center gap-2" onClick={() => setMobileMenuOpen(false)}>
                    <Image
                      src="/Assets/logo-no-background.png"
                      alt="Infinity Trigger Logo"
                      width={120}
                      height={32}
                      className="object-contain"
                    />
                  </Link>
                </div>
              </SheetHeader>
              {/* Mobile theme switch only */}
              <ThemeSwitch className="mb-4 md:hidden mx-auto" />
              <div className="p-4 space-y-2">
                <Link
                  href="/products"
                  className="flex items-center px-3 py-2 text-sm font-medium text-brand-dark dark:text-white hover:text-brand-teal dark:hover:text-brand-mint hover:bg-brand-lavender/10 dark:hover:bg-brand-lavender/20 rounded-md transition-colors duration-300"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Products
                </Link>
                <Link
                  href="/about"
                  className="flex items-center px-3 py-2 text-sm font-medium text-brand-dark dark:text-white hover:text-brand-teal dark:hover:text-brand-mint hover:bg-brand-lavender/10 dark:hover:bg-brand-lavender/20 rounded-md transition-colors duration-300"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About
                </Link>
                <Link
                  href="/values"
                  className="flex items-center px-3 py-2 text-sm font-medium text-brand-dark dark:text-white hover:text-brand-teal dark:hover:text-brand-mint hover:bg-brand-lavender/10 dark:hover:bg-brand-lavender/20 rounded-md transition-colors duration-300"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Values
                </Link>
              </div>
              <div className="p-4 border-t border-brand-lavender/20 dark:border-gray-700">
                <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                  <Button className="w-full bg-gradient-to-r from-brand-teal to-brand-mint hover:from-brand-teal/90 hover:to-brand-mint/90 text-white dark:text-gray-900 dark:bg-brand-mint dark:hover:bg-brand-mint/80 shadow-lg hover:shadow-xl transition-all duration-300">
                    Contact Us
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
