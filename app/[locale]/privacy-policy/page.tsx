import { getLocale, getTranslations } from "next-intl/server";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default async function PrivacyPolicyPage() {
  const locale = await getLocale();
  const t = await getTranslations({ locale, namespace: "privacyPolicy" });
  const common = await getTranslations({ locale, namespace: "common" });

  const sections = [
    "introduction",
    "dataWeCollect",
    "howWeUse",
    "yourRights",
    "contact",
  ] as const;

  return (
    <section className="w-full py-16 md:py-24">
      <div className="container px-4 md:px-6 max-w-3xl mx-auto">
        <h1 className="font-display text-4xl md:text-5xl font-semibold text-chocolate_cosmos dark:text-white_smoke">
          {t("title")}
        </h1>
        <p className="mt-3 text-sm text-chocolate_cosmos/55 dark:text-white_smoke/55">
          {common("updatedDate")}
          {new Date().toLocaleDateString(locale, {
            month: "long",
            day: "numeric",
            year: "numeric",
          })}
        </p>

        <div className="mt-12 space-y-10">
          {sections.map((key) => (
            <div key={key}>
              <h2 className="font-display text-xl font-semibold text-chocolate_cosmos dark:text-white_smoke">
                {t(`sections.${key}.title`)}
              </h2>
              <p className="mt-3 text-base leading-relaxed text-chocolate_cosmos/75 dark:text-white_smoke/75 whitespace-pre-line">
                {t(`sections.${key}.body`)}
              </p>
              {key === "contact" && (
                <p className="mt-3">
                  <a
                    href="mailto:support@infinitytrigger.com"
                    className="font-medium text-cerulean hover:text-indian_red transition-colors underline underline-offset-2">
                    {common("email.address")}
                  </a>
                </p>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-chocolate_cosmos/70 dark:text-white_smoke/70 hover:text-indian_red transition-colors">
            <ArrowLeft className="h-4 w-4" />
            {common("backToHome")}
          </Link>
        </div>
      </div>
    </section>
  );
}
