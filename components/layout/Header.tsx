"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-brand-lavender/20 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/assets/logo-no-background.png"
            alt="Infinity Trigger Logo"
            width={150}
            height={40}
            className="object-contain"
            priority
          />
        </Link>
        <nav className="hidden md:flex gap-6">
          <Link
            href="/about"
            className="text-sm font-medium relative group text-brand-dark hover:text-brand-teal transition-colors duration-300"
          >
            <span className="block">About</span>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-brand-teal to-brand-mint transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link 
            href="/products" 
            className="text-sm font-medium relative group text-brand-dark hover:text-brand-teal transition-colors duration-300"
          >
            <span className="block">Products</span>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-brand-teal to-brand-mint transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link 
            href="/contact" 
            className="text-sm font-medium relative group text-brand-dark hover:text-brand-teal transition-colors duration-300"
          >
            <span className="block">Contact</span>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-brand-teal to-brand-mint transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Link href="/contact" className="hidden md:block">
            <Button className="bg-brand-teal hover:bg-brand-mint text-white hover:text-brand-dark shadow-lg hover:shadow-xl transition-all duration-300">
              Get In Touch
            </Button>
          </Link>
          <Button
            variant="outline"
            size="icon"
            className="md:hidden border-brand-teal/30 text-brand-teal hover:bg-brand-teal hover:text-white"
            onClick={toggleMobileMenu}
            aria-expanded={mobileMenuOpen}
          >
            <span className="sr-only">Toggle menu</span>
            {mobileMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-brand-lavender/20 bg-white/95 backdrop-blur">
          <div className="container py-4 space-y-4">
            <nav className="flex flex-col space-y-4">
              <Link
                href="/about"
                className="text-sm font-medium py-2 text-brand-dark hover:text-brand-teal transition-colors duration-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/products"
                className="text-sm font-medium py-2 text-brand-dark hover:text-brand-teal transition-colors duration-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                Products
              </Link>
              <Link
                href="/contact"
                className="text-sm font-medium py-2 text-brand-dark hover:text-brand-teal transition-colors duration-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </nav>
            <div className="pt-4">
              <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                <Button className="w-full bg-gradient-to-r from-brand-teal to-brand-mint hover:from-brand-teal/90 hover:to-brand-mint/90 text-white shadow-lg hover:shadow-xl transition-all duration-300">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
