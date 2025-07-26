import { getLocale, getTranslations } from "next-intl/server";
import Link from "next/link";
import Image from "next/image";
import { BrandButton, BrandButtonAlt } from "@/components/BrandButton";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ArrowRight,
  Heart,
  Palette,
  Smartphone,
  Users,
  Lightbulb,
  Monitor,
  BookOpen,
} from "lucide-react";

export default async function Home() {
  const locale = await getLocale();
  const translateHero = await getTranslations({ locale, namespace: "hero" });
  const translateTools = await getTranslations({ locale, namespace: "tools" });
  const translateProducts = await getTranslations({
    locale,
    namespace: "products",
  });
  const translateValues = await getTranslations({
    locale,
    namespace: "ourValuesHomePage",
  });
  const translateCommon = await getTranslations({
    locale,
    namespace: "common",
  });

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-20 bg-gradient-to-b from-brand-mint/20 to-white dark:from-brand-dark dark:to-brand-teal/20">
          <div className="container px-4 md:px-6 flex flex-col items-center text-center gap-8">
            <div className="flex items-center gap-2 mb-2">
              <BookOpen className="h-6 w-6 text-brand-teal dark:text-brand-mint" />
              <span className="text-sm font-medium text-brand-teal dark:text-brand-mint">
                {translateHero("title")}
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold text-brand-dark dark:text-brand-mint leading-tight">
              {translateHero("headline.part1")}
              <br />
              {translateHero("headline.part2")}
            </h1>
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-brand-dark/80 dark:text-white/80 font-medium">
              {translateHero("description")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
              <Link href="/products">
                <BrandButton>
                  {translateCommon("exploreProducts")}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </BrandButton>
              </Link>
              <Link href="/contact">
                <BrandButtonAlt>{translateCommon("getInTouch")}</BrandButtonAlt>
              </Link>
            </div>
            <div className="mt-8 flex items-center gap-4 text-sm text-brand-dark/60 dark:text-white/60">
              <div className="flex items-center gap-1">
                <Heart className="h-4 w-4" />
                <span>{translateHero("footerLove")}</span>
              </div>
              <div className="h-1 w-1 rounded-full bg-brand-dark/60 dark:bg-white/60" />
              <div className="flex items-center gap-1">
                <Users className="h-4 w-4" />
                <span>{translateHero("footerCreators")}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Products/Features Section */}
        <section className="w-full py-16 bg-gradient-to-b from-white to-brand-lavender/10 dark:bg-gradient-to-b dark:from-brand-teal/70 dark:to-brand-teal/40">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center mb-12">
              <span className="text-brand-teal dark:text-brand-mint text-sm font-medium mb-2">
                {translateTools("title")}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-dark dark:text-brand-mint mb-2">
                {translateTools("header")}
              </h2>
              <p className="max-w-xl mx-auto text-brand-dark/80 dark:text-white/80 text-lg">
                {translateTools("description")}
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
              {/* Meanwhile Card */}
              <Card className="bg-brand-gray/70 dark:bg-brand-teal shadow-lg dark:shadow-gray-900/50 p-8 flex flex-col gap-4 items-start border-2 border-brand-teal dark:border-brand-mint">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-3 rounded-full bg-brand-mint dark:bg-brand-mint/30">
                    <Heart className="h-7 w-7 text-brand-teal dark:text-brand-mint" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-brand-dark dark:text-brand-mint">
                      {translateProducts("meanwhileCard.title")}
                    </h3>
                    <span className="inline-block text-xs font-semibold bg-brand-mint dark:bg-brand-mint text-brand-teal dark:text-brand-dark px-3 py-1 rounded-full ml-2">
                      {translateCommon("avaliblity")}
                    </span>
                  </div>
                </div>
                <p className="text-brand-dark/80 dark:text-white/80 mb-2">
                  {translateProducts("meanwhileCard.description")}
                </p>
                <ul className="text-sm text-brand-dark/70 dark:text-white/70 mb-4 list-disc list-inside">
                  <li>
                    {translateProducts(
                      "meanwhileCard.features.humanCraftedPrompts"
                    )}
                  </li>
                  <li>
                    {translateProducts("meanwhileCard.features.privacyFocused")}
                  </li>
                  <li>
                    {translateProducts("meanwhileCard.features.streakTracking")}
                  </li>
                  <li>{translateProducts("meanwhileCard.features.design")}</li>
                </ul>
                <div className="flex gap-3 mt-auto">
                  <Link href="/products/meanwhile">
                    <BrandButton>
                      {translateCommon("learnMore")}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </BrandButton>
                  </Link>
                  <Link
                    href="https://apps.apple.com/us/app/meanwhile-daily-writing/id6742810856"
                    target="_blank"
                    rel="noopener noreferrer">
                    <BrandButtonAlt>
                      {translateCommon("appStore")}
                    </BrandButtonAlt>
                  </Link>
                </div>
              </Card>
              {/* Myriad Worlds Card */}
              <Card className="bg-brand-gray/70 dark:bg-brand-teal shadow-lg dark:shadow-gray-900/50 p-8 flex flex-col gap-4 items-start border-2 border-brand-teal dark:border-brand-mint">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-3 rounded-full bg-brand-lavender dark:bg-brand-lavender/10">
                    <Palette className="h-7 w-7 text-brand-teal dark:text-brand-mint" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-brand-dark dark:text-brand-mint">
                      {translateProducts("myriadWorldsCard.title")}
                    </h3>
                    <span className="inline-block text-xs font-semibold bg-brand-mint dark:bg-brand-mint text-brand-teal dark:text-brand-dark px-3 py-1 rounded-full ml-2">
                      {translateCommon("avaliblity")}
                    </span>
                  </div>
                </div>
                <p className="text-brand-dark/80 dark:text-white/80 mb-2">
                  {translateProducts("myriadWorldsCard.description")}
                </p>
                <ul className="text-sm text-brand-dark/70 dark:text-white/70 mb-4 list-disc list-inside">
                  <li>
                    {translateProducts(
                      "myriadWorldsCard.features.humanCraftedStories"
                    )}
                  </li>
                  <li>
                    {translateProducts(
                      "myriadWorldsCard.features.creativeCommons"
                    )}
                  </li>
                  <li>
                    {translateProducts(
                      "myriadWorldsCard.features.storytelling"
                    )}
                  </li>
                  <li>
                    {translateProducts(
                      "myriadWorldsCard.features.storyBuildingTools"
                    )}
                  </li>
                </ul>
                <div className="flex gap-3 mt-auto">
                  <Link href="/products/myriad-worlds">
                    <BrandButton>
                      {translateCommon("learnMore")}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </BrandButton>
                  </Link>
                  <Link
                    href="https://apps.apple.com/us/app/myriad-worlds/id6748325367"
                    target="_blank"
                    rel="noopener noreferrer">
                    <BrandButtonAlt>
                      {translateCommon("appStore")}
                    </BrandButtonAlt>
                  </Link>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="w-full py-16 bg-gradient-to-b from-brand-lavender/10 to-brand-teal dark:bg-gradient-to-b dark:from-brand-teal/40 dark:to-brand-dark">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-dark dark:text-brand-mint mb-2">
                {translateValues("title")}
              </h2>
              <p className="max-w-xl mx-auto text-brand-dark/80 dark:text-white/80 text-lg">
                {translateValues("description")}
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
              {/* Value Card 1 */}
              <Card className="bg-brand-mint/30 dark:bg-brand-mint/10 rounded-2xl shadow-lg dark:shadow-gray-900/50 p-8 flex flex-col items-center text-center gap-4 border-2 border-brand-mint/20 dark:border-brand-mint/10">
                <div className="p-4 rounded-full bg-brand-dark dark:bg-brand-lavender/70">
                  <Users className="h-8 w-8 text-brand-mint dark:text-brand-teal" />
                </div>
                <h3 className="text-xl font-bold text-brand-dark dark:text-brand-mint">
                  {translateValues("values.humanCentered.title")}
                </h3>
                <p className="text-brand-dark/80 dark:text-white/80">
                  {translateValues("values.humanCentered.description")}
                </p>
              </Card>
              {/* Value Card 2 */}
              <Card className="bg-brand-mint/30 dark:bg-brand-mint/10 rounded-2xl shadow-lg dark:shadow-gray-900/50 p-8 flex flex-col items-center text-center gap-4 border-2 border-brand-mint/20 dark:border-brand-mint/10">
                <div className="p-4 rounded-full bg-brand-dark dark:bg-brand-lavender/70">
                  <Lightbulb className="h-8 w-8 text-brand-mint dark:text-brand-teal" />
                </div>
                <h3 className="text-xl font-bold text-brand-dark dark:text-brand-mint">
                  {translateValues("values.celebrateDiversity.title")}
                </h3>
                <p className="text-brand-dark/80 dark:text-white/80">
                  {translateValues("values.celebrateDiversity.description")}
                </p>
              </Card>
              {/* Value Card 3 */}
              <Card className="bg-brand-mint/30 dark:bg-brand-mint/10 rounded-2xl shadow-lg dark:shadow-gray-900/50 p-8 flex flex-col items-center text-center gap-4 border-2 border-brand-mint/20 dark:border-brand-mint/10">
                <div className="p-4 rounded-full bg-brand-dark dark:bg-brand-lavender/70">
                  <Heart className="h-8 w-8 text-brand-mint dark:text-brand-teal" />
                </div>
                <h3 className="text-xl font-bold text-brand-dark dark:text-brand-mint">
                  {translateValues("values.authenticContent.title")}
                </h3>
                <p className="text-brand-dark/80 dark:text-white/80">
                  {translateValues("values.authenticContent.description")}
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-16 bg-gradient-to-b from-brand-teal to-brand-lavender dark:bg-gradient-to-b dark:from-brand-dark dark:to-brand-dark">
          <div className="container px-4 md:px-6 flex flex-col items-center text-center gap-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-2 text-white dark:text-brand-mint">
              {translateCommon("cta.title")}
            </h2>
            <p className="max-w-xl mx-auto text-lg text-white/90 dark:text-white md:text-xl">
              {translateCommon("cta.description")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-2">
              <Link
                href="https://apps.apple.com/us/app/myriad-worlds/id6748325367"
                target="_blank"
                rel="noopener noreferrer">
                <BrandButton>
                  {translateCommon("downloadOnAppStore")}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </BrandButton>
              </Link>
              <Link href="/products">
                <BrandButtonAlt>
                  {translateCommon("exploreProducts")}
                  <Monitor className="ml-2 h-5 w-5" />
                </BrandButtonAlt>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
