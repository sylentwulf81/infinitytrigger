import Image from "next/image";
import { useTranslations } from "next-intl";

export function Footer() {
  const translateFooter = useTranslations("footer");
  return (
    <footer className="w-full py-6 md:py-8">
      <div className="container flex flex-col items-center justify-center gap-4">
        <div className="flex items-center gap-2">
          <Image
            src="/Assets/logo/shinano labs logo and logotype.png"
            alt="Shinano Labs Logo"
            width={140}
            height={38}
            className="object-contain"
          />
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
          &copy; {new Date().getFullYear()} {translateFooter("copyWrite")}
        </p>
      </div>
    </footer>
  );
}
