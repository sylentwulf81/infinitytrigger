import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";

export function Footer() {
  const translateFooter = useTranslations("footer");
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
            &copy; {new Date().getFullYear()} {translateFooter("copyWrite")}
          </p>
        </div>
        <nav className="flex gap-4 sm:gap-6 dark:text-white">
          <Link
            href="/team"
            className="text-sm font-medium text-brand-dark dark:text-brand-mint hover:text-brand-teal dark:hover:text-white transition-colors duration-300"
          >
            Team
          </Link>
          <span className="text-sm text-gray-400 dark:text-gray-500">|</span>
          <Link
            href="/privacy-policy"
            className="text-sm font-medium text-brand-dark dark:text-brand-mint hover:text-brand-teal dark:hover:text-white transition-colors duration-300">
            {translateFooter("links.privacyPolicy")}
          </Link>
          <span className="text-sm text-gray-400 dark:text-gray-500">|</span>
          <Link
            href="/terms-of-service"
            className="text-sm font-medium text-brand-dark dark:text-brand-mint hover:text-brand-teal dark:hover:text-white transition-colors duration-300">
            {translateFooter("links.termsOfService")}
          </Link>
        </nav>
      </div>
    </footer>
  );
}
