import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

type AppHighlightProps = {
  title: string;
  subtitle: string;
  description: string;
  href: string;
  cta: string;
  accent?: "red" | "blue";
};

export function AppHighlight({
  title,
  subtitle,
  description,
  href,
  cta,
  accent = "red",
}: AppHighlightProps) {
  const accentBar =
    accent === "red" ? "bg-indian_red" : "bg-cerulean";

  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group relative flex flex-col gap-4 rounded-2xl p-6 md:p-8",
        "bg-white/60 dark:bg-chocolate_cosmos-600/40",
        "border border-chocolate_cosmos/10 dark:border-white_smoke/10",
        "transition-all duration-300 ease-out",
        "hover:-translate-y-1 hover:border-chocolate_cosmos/20 dark:hover:border-white_smoke/20",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indian_red"
      )}>
      <span
        className={cn(
          "absolute left-0 top-6 bottom-6 w-1 rounded-full opacity-80 transition-opacity group-hover:opacity-100",
          accentBar
        )}
        aria-hidden
      />
      <div className="pl-3">
        <p className="text-sm font-medium tracking-wide text-cerulean dark:text-cerulean-700">
          {subtitle}
        </p>
        <h3 className="mt-1 font-display text-2xl md:text-3xl font-semibold text-chocolate_cosmos dark:text-white_smoke">
          {title}
        </h3>
        <p className="mt-3 text-base text-chocolate_cosmos/70 dark:text-white_smoke/70 leading-relaxed max-w-md">
          {description}
        </p>
        <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-indian_red dark:text-indian_red-600">
          {cta}
          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </div>
    </Link>
  );
}
