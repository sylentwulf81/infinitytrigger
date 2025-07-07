import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="w-full border-t py-6 md:py-0">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <div className="flex items-center gap-2">
          <Image
            src="/assets/logo-no-background.png"
            alt="Infinity Trigger Logo"
            width={100} 
            height={27} 
            className="object-contain" 
          />
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} Infinity Trigger. All rights reserved.
          </p>
        </div>
        <nav className="flex gap-4 sm:gap-6">
          <Link
            href="/privacy-policy"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms-of-service"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Terms of Service
          </Link>
        </nav>
      </div>
    </footer>
  );
}
