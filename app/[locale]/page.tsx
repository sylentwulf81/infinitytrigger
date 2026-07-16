import { getLocale, getTranslations } from "next-intl/server";
import Image from "next/image";
import { AppHighlight } from "@/components/AppHighlight";

export default async function Home() {
  const locale = await getLocale();
  const t = await getTranslations({ locale, namespace: "home" });

  return (
    <div className="flex flex-col">
      {/* Hero — one composition: brand, headline, line, atmosphere */}
      <section className="relative isolate min-h-[calc(100svh-5rem)] flex items-end md:items-center overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/nagano-landscape.png"
            alt=""
            fill
            priority
            className="object-cover object-[center_40%] animate-slow-zoom"
            sizes="100vw"
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-chocolate_cosmos/95 via-chocolate_cosmos/45 to-chocolate_cosmos/20"
            aria-hidden
          />
          <div
            className="absolute inset-0 bg-gradient-to-r from-chocolate_cosmos/40 via-transparent to-transparent"
            aria-hidden
          />
        </div>

        <div className="container px-4 md:px-6 pb-20 pt-28 md:py-32 w-full">
          <div className="max-w-3xl">
            <p className="animate-fade-in font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold tracking-tight text-white_smoke leading-[0.95] drop-shadow-sm">
              {t("brand")}
            </p>
            <h1 className="animate-fade-up mt-6 md:mt-8 font-display text-xl sm:text-2xl md:text-3xl font-medium text-white_smoke leading-snug [animation-delay:120ms]">
              {t("headline")}
            </h1>
            <p className="animate-fade-up mt-4 md:mt-5 max-w-xl text-base md:text-lg text-white_smoke/85 leading-relaxed [animation-delay:240ms]">
              {t("description")}
            </p>
            <a
              href="#apps"
              className="animate-fade-up mt-10 inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-white_smoke hover:text-indian_red-700 transition-colors [animation-delay:360ms]">
              {t("scrollCta")}
              <span
                className="inline-block h-px w-8 bg-current opacity-70"
                aria-hidden
              />
            </a>
          </div>
        </div>
      </section>

      {/* App highlights — store badges link out, no subpages */}
      <section id="apps" className="w-full py-20 md:py-28">
        <div className="container px-4 md:px-6">
          <div className="max-w-2xl mb-12 md:mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-semibold leading-snug pb-1 text-chocolate_cosmos dark:text-white_smoke">
              {t("apps.title")}
            </h2>
            <p className="mt-3 text-lg text-chocolate_cosmos/70 dark:text-white_smoke/70">
              {t("apps.description")}
            </p>
          </div>

          <div className="grid gap-5 md:gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl">
            <AppHighlight
              title={t("apps.meanwhile.title")}
              description={t("apps.meanwhile.description")}
              accent="red"
              locale={locale}
              isAvailOnAppStore
              appStoreUrl="https://apps.apple.com/us/app/meanwhile-daily-writing/id6742810856"
              appStoreBadgeAlt={t("apps.badges.appStore")}
              playStoreBadgeAlt={t("apps.badges.playStore")}
              webLabel={t("apps.badges.web")}
            />
            <AppHighlight
              title={t("apps.myriadWorlds.title")}
              description={t("apps.myriadWorlds.description")}
              accent="blue"
              locale={locale}
              isAvailOnAppStore
              appStoreUrl="https://apps.apple.com/us/app/myriad-worlds/id6748325367"
              appStoreBadgeAlt={t("apps.badges.appStore")}
              playStoreBadgeAlt={t("apps.badges.playStore")}
              webLabel={t("apps.badges.web")}
            />
            <AppHighlight
              title={t("apps.bard.title")}
              description={t("apps.bard.description")}
              accent="navy"
              locale={locale}
              isComingSoon
              comingSoonLabel={t("apps.badges.comingSoon")}
              appStoreBadgeAlt={t("apps.badges.appStore")}
              playStoreBadgeAlt={t("apps.badges.playStore")}
              webLabel={t("apps.badges.web")}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
