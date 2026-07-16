import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

export type AppHighlightProps = {
  title: string;
  description: string;
  accent?: "red" | "blue" | "navy";
  /** Show a Coming Soon badge instead of store links */
  isComingSoon?: boolean;
  comingSoonLabel?: string;
  /** Show App Store badge when true; requires appStoreUrl */
  isAvailOnAppStore?: boolean;
  appStoreUrl?: string;
  /** Show Google Play badge when true; requires playStoreUrl */
  isAvailOnPlayStore?: boolean;
  playStoreUrl?: string;
  /** Show a custom web link when true; requires webUrl */
  isAvailOnWeb?: boolean;
  webUrl?: string;
  webLabel?: string;
  /** Locale for localized store badges (en | ja) */
  locale?: string;
  appStoreBadgeAlt?: string;
  playStoreBadgeAlt?: string;
};

const accentBarClass: Record<NonNullable<AppHighlightProps["accent"]>, string> =
  {
    red: "bg-indian_red",
    blue: "bg-cerulean",
    navy: "bg-navy",
  };

/** Shared slot for App Store / Play Store / Coming Soon badges (~120×40) */
const storeBadgeClass =
  "inline-flex h-10 w-[120px] shrink-0 items-center justify-center overflow-hidden rounded-[7px]";

export function AppHighlight({
  title,
  description,
  accent = "red",
  isComingSoon = false,
  comingSoonLabel = "Coming soon",
  isAvailOnAppStore = false,
  appStoreUrl,
  isAvailOnPlayStore = false,
  playStoreUrl,
  isAvailOnWeb = false,
  webUrl,
  webLabel = "Visit website",
  locale = "en",
  appStoreBadgeAlt = "Download on the App Store",
  playStoreBadgeAlt = "Get it on Google Play",
}: AppHighlightProps) {
  const playBadgeSrc =
    locale === "ja"
      ? "/badges/google-play-ja.png"
      : "/badges/google-play-en.png";

  const hasStoreLinks =
    !isComingSoon &&
    ((isAvailOnAppStore && appStoreUrl) ||
      (isAvailOnPlayStore && playStoreUrl) ||
      (isAvailOnWeb && webUrl));

  return (
    <article
      className={cn(
        "group relative flex flex-col gap-4 rounded-2xl p-6 md:p-8",
        "bg-white/60 dark:bg-chocolate_cosmos-600/40",
        "border border-chocolate_cosmos/10 dark:border-white_smoke/10",
        "shadow-sm shadow-chocolate_cosmos/5 dark:shadow-black/20",
        "transition-[box-shadow,border-color,background-color] duration-300 ease-out",
        "hover:shadow-md hover:shadow-chocolate_cosmos/15 dark:hover:shadow-black/40",
        "hover:border-chocolate_cosmos/25 dark:hover:border-white_smoke/25",
        "hover:bg-white/80 dark:hover:bg-chocolate_cosmos-600/55"
      )}>
      <span
        className={cn(
          "absolute left-0 top-6 bottom-6 w-1 rounded-full opacity-70 transition-opacity duration-300 group-hover:opacity-100",
          accentBarClass[accent]
        )}
        aria-hidden
      />
      <div className="pl-3 flex flex-col flex-1">
        <h3 className="font-display text-2xl md:text-3xl font-semibold leading-snug pb-0.5 text-chocolate_cosmos dark:text-white_smoke">
          {title}
        </h3>
        <p className="mt-3 text-base text-chocolate_cosmos/70 dark:text-white_smoke/70 leading-relaxed max-w-md">
          {description}
        </p>

        {isComingSoon && (
          <div className="mt-6">
            <span
              className={cn(
                storeBadgeClass,
                "border border-[#a6a6a6] bg-black px-3 text-center text-[11px] font-semibold uppercase tracking-[0.06em] text-white"
              )}>
              {comingSoonLabel}
            </span>
          </div>
        )}

        {hasStoreLinks && (
          <div className="mt-6 flex flex-wrap items-center gap-3">
            {isAvailOnAppStore && appStoreUrl && (
              <a
                href={appStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  storeBadgeClass,
                  "transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indian_red"
                )}>
                <Image
                  src="/badges/app-store-en.svg"
                  alt={appStoreBadgeAlt}
                  width={120}
                  height={40}
                  className="h-10 w-[120px] object-contain dark:hidden"
                />
                <Image
                  src="/badges/app-store-en-white.svg"
                  alt={appStoreBadgeAlt}
                  width={120}
                  height={40}
                  className="hidden h-10 w-[120px] object-contain dark:block"
                />
              </a>
            )}

            {isAvailOnPlayStore && playStoreUrl && (
              <a
                href={playStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  storeBadgeClass,
                  "transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indian_red"
                )}>
                <Image
                  src={playBadgeSrc}
                  alt={playStoreBadgeAlt}
                  width={135}
                  height={40}
                  className="h-10 w-[120px] object-contain"
                />
              </a>
            )}

            {isAvailOnWeb && webUrl && (
              <a
                href={webUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  storeBadgeClass,
                  "gap-1 border border-chocolate_cosmos/15 dark:border-white_smoke/20 bg-chocolate_cosmos dark:bg-white_smoke px-3 text-[11px] font-semibold uppercase tracking-[0.06em] text-white_smoke dark:text-chocolate_cosmos hover:opacity-90 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indian_red"
                )}>
                {webLabel}
                <ArrowUpRight className="h-3.5 w-3.5 shrink-0" aria-hidden />
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
