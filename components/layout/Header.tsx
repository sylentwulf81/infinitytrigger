"use client";

import Link from "next/link";
import Image from "next/image";
import { ThemeSwitch } from "@/components/ui/theme-switch";
import Languageselector from "@/components/LanguageSelector";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-chocolate_cosmos/10 dark:border-white_smoke/10 bg-white_smoke/80 dark:bg-chocolate_cosmos/80 backdrop-blur-md">
      <div className="container flex h-16 md:h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/Assets/logo/shinano labs logo and logotype.png"
            alt="Shinano Labs"
            width={180}
            height={48}
            className="hidden sm:block object-contain h-10 w-auto"
            priority
          />
          <Image
            src="/Assets/logo/shinano labs logo.png"
            alt="Shinano Labs"
            width={40}
            height={40}
            className="block sm:hidden object-contain"
            priority
          />
        </Link>
        <div className="flex items-center gap-3">
          <Languageselector />
          <ThemeSwitch />
        </div>
      </div>
    </header>
  );
}
