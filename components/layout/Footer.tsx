import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="w-full border-t border-brand-lavender/20 py-6 md:py-0 bg-gradient-to-br from-brand-lavender/5 to-brand-mint/5">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <div className="flex items-center gap-2">
          <Image
            src="/Assets/logo-no-background.png"
            alt="Infinity Trigger Logo"
            width={100} 
            height={27} 
            className="object-contain" 
          />
          <p className="text-sm text-gray-600 dark:text-white">
            © {new Date().getFullYear()} Infinity Trigger. All rights reserved.
          </p>
        </div>
        <nav className="flex gap-4 sm:gap-6 dark:text-white">
          <Link
            href="/privacy-policy"
            className="text-sm font-medium text-brand-dark dark:text-brand-mint hover:text-brand-teal dark:hover:text-white transition-colors duration-300"
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms-of-service"
            className="text-sm font-medium text-brand-dark dark:text-brand-mint hover:text-brand-teal dark:hover:text-white transition-colors duration-300"
          >
            Terms of Service
          </Link>
        </nav>
      </div>
    </footer>
  );
}
