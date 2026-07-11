import Link from "next/link";
import Image from "next/image";
import { getTranslations } from "next-intl/server";

export async function Footer() {
  const translateFooter = await getTranslations("footer");

  return (
    <footer className="w-full border-t border-chocolate_cosmos/10 dark:border-white_smoke/10 py-8">
      <div className="container flex flex-col items-center gap-5 text-center">
        <Image
          src="/Assets/logo/shinano labs logo and logotype.png"
          alt="Shinano Labs"
          width={140}
          height={38}
          className="object-contain opacity-90"
        />
        <nav className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm">
          <Link
            href="/privacy-policy"
            className="font-medium text-chocolate_cosmos/70 dark:text-white_smoke/70 hover:text-indian_red dark:hover:text-indian_red-600 transition-colors">
            {translateFooter("links.privacyPolicy")}
          </Link>
          <span className="text-chocolate_cosmos/30 dark:text-white_smoke/30">
            ·
          </span>
          <Link
            href="/terms-of-service"
            className="font-medium text-chocolate_cosmos/70 dark:text-white_smoke/70 hover:text-indian_red dark:hover:text-indian_red-600 transition-colors">
            {translateFooter("links.termsOfService")}
          </Link>
        </nav>
        <p className="text-sm text-chocolate_cosmos/55 dark:text-white_smoke/55">
          &copy; {new Date().getFullYear()} {translateFooter("copyWrite")}
        </p>
      </div>
    </footer>
  );
}
