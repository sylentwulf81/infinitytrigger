import { useTranslations } from "next-intl";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BrandButton, BrandButtonAlt } from "@/components/BrandButton";
import {
  ArrowRight,
  Calendar,
  Check,
  Edit3,
  Smartphone,
  Star,
  Zap,
} from "lucide-react";

export default function MeanwhileProjectPage() {
  const translateMeanwhile = useTranslations("products.meanwhilePage");
  const translateCommon = useTranslations("common");

  return (
    <div className="flex flex-col">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-brand-mint/10 to-transparent dark:from-brand-teal/20">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-flex items-center rounded-full bg-brand-mint/20 border border-brand-teal/20 px-3 py-1 text-sm text-brand-teal dark:text-brand-mint">
                    <Smartphone className="w-4 h-4 mr-2" />
                    {translateCommon("avaliblityIOS")}
                  </div>
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl text-brand-dark dark:text-brand-mint">
                    {translateMeanwhile("hero.title")}
                  </h1>
                  <p className="max-w-[600px] text-gray-600 dark:text-brand-lavender/80 md:text-xl/relaxed lg:text-2xl/relaxed">
                    {translateMeanwhile("hero.description")}
                  </p>
                </div>
                <div className="flex flex-col gap-3 min-[400px]:flex-row items-center">
                  <Link
                    href="https://apps.apple.com/us/app/meanwhile-daily-writing/id6742810856"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block">
                    <div className="bg-brand-dark hover:bg-brand-dark/90 text-white dark:bg-white dark:text-brand-dark dark:hover:bg-white/90 px-6 py-3 rounded-lg flex items-center gap-2 transition-colors shadow-lg hover:shadow-xl">
                      <svg
                        className="w-6 h-6"
                        viewBox="0 0 24 24"
                        fill="currentColor">
                        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                      </svg>
                      <span>{translateCommon("downloadOnAppStore")}</span>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative w-[300px] h-[600px] bg-brand-dark rounded-[55px] border-[14px] border-brand-dark shadow-2xl dark:shadow-brand-mint/20 overflow-hidden">
                  <div className="absolute top-0 w-[120px] h-[25px] bg-brand-dark left-1/2 transform -translate-x-1/2 rounded-b-[18px] z-10"></div>
                  <div className="absolute top-[8px] w-[8px] h-[8px] bg-brand-dark right-[28px] rounded-full z-10"></div>
                  <div className="absolute top-[11px] w-[40px] h-[4px] bg-brand-dark right-[40px] rounded-full z-10"></div>
                  <Image
                    src="/images/meanwhile-screen1.png"
                    alt="Meanwhile App Screenshot - Journal View"
                    fill
                    className="object-cover rounded-[42px]"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="w-full py-12 md:py-24 bg-white dark:bg-transparent">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl text-brand-dark dark:text-brand-mint">
                  {translateMeanwhile("about.title")}
                </h2>
                <p className="max-w-[700px] text-gray-600 dark:text-brand-lavender/80 md:text-xl">
                  {translateMeanwhile("about.description")}
                </p>
              </div>
            </div>

            <div className="grid gap-12 lg:grid-cols-2">
              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-brand-dark dark:text-brand-mint">
                    {translateMeanwhile("about.inspiration.title")}
                  </h3>
                  <p className="text-gray-700 dark:text-brand-lavender/80 leading-relaxed">
                    {translateMeanwhile(
                      "about.inspiration.descriptionParagraph1"
                    )}
                  </p>
                  <p className="text-gray-700 dark:text-brand-lavender/80 leading-relaxed">
                    {translateMeanwhile(
                      "about.inspiration.descriptionParagraph2"
                    )}
                  </p>
                </div>

                <div className="space-y-4 mt-8">
                  <h3 className="text-2xl font-bold text-brand-dark dark:text-brand-mint">
                    {translateMeanwhile("about.approach.title")}
                  </h3>
                  <p className="text-gray-700 dark:text-brand-lavender/80 leading-relaxed">
                    {translateMeanwhile("about.approach.description")}
                  </p>
                  <ul className="space-y-3 text-gray-700 dark:text-brand-lavender/80 leading-relaxed">
                    <li className="flex items-start gap-3">
                      <Check className="h-6 w-6 text-brand-teal dark:text-brand-mint mt-0.5 flex-shrink-0" />
                      <span>
                        {translateMeanwhile(
                          "about.approach.bulletPoints.writingEnvironment"
                        )}
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="h-6 w-6 text-brand-teal dark:text-brand-mint mt-0.5 flex-shrink-0" />
                      <span>
                        {translateMeanwhile(
                          "about.approach.bulletPoints.reminders"
                        )}
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="h-6 w-6 text-brand-teal dark:text-brand-mint mt-0.5 flex-shrink-0" />
                      <span>
                        {translateMeanwhile(
                          "about.approach.bulletPoints.writingPrompts"
                        )}
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="h-6 w-6 text-brand-teal dark:text-brand-mint mt-0.5 flex-shrink-0" />
                      <span>
                        {translateMeanwhile(
                          "about.approach.bulletPoints.interfaceDesign"
                        )}
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex items-center justify-center">
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative w-[180px] h-[360px] bg-brand-dark rounded-[45px] border-[10px] border-brand-dark shadow-xl dark:shadow-brand-mint/10 overflow-hidden">
                    <Image
                      src="/images/meanwhile-screen2.png"
                      alt="Meanwhile App - Writing Guides"
                      fill
                      className="object-cover rounded-[35px]"
                    />
                  </div>
                  <div className="relative w-[180px] h-[360px] bg-brand-dark rounded-[45px] border-[10px] border-brand-dark shadow-xl dark:shadow-brand-mint/10 overflow-hidden">
                    <Image
                      src="/images/meanwhile-screen3.png"
                      alt="Meanwhile App - Progress Tracking"
                      fill
                      className="object-cover rounded-[35px]"
                    />
                  </div>
                  <div className="relative w-[180px] h-[360px] bg-brand-dark rounded-[45px] border-[10px] border-brand-dark shadow-xl dark:shadow-brand-mint/10 overflow-hidden">
                    <Image
                      src="/images/meanwhile-screen4.png"
                      alt="Meanwhile App - Collection View"
                      fill
                      className="object-cover rounded-[35px]"
                    />
                  </div>
                  <div className="relative w-[180px] h-[360px] bg-brand-dark rounded-[45px] border-[10px] border-brand-dark shadow-xl dark:shadow-brand-mint/10 overflow-hidden">
                    <Image
                      src="/images/meanwhile-screen5.png"
                      alt="Meanwhile App - Writing Benefits"
                      fill
                      className="object-cover rounded-[35px]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="w-full py-12 md:py-24 bg-brand-mint/5 dark:bg-brand-teal/10">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl text-brand-dark dark:text-brand-mint">
                  {translateMeanwhile("features.title")}
                </h2>
                <p className="max-w-[700px] text-gray-600 dark:text-brand-lavender/80 md:text-xl">
                  {translateMeanwhile("features.description")}
                </p>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card className="bg-white/50 dark:bg-brand-dark/50 border-brand-teal/20 dark:border-brand-mint/20">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-2 rounded-full bg-brand-mint/20 dark:bg-brand-mint/10">
                      <Edit3 className="h-6 w-6 text-brand-teal dark:text-brand-mint" />
                    </div>
                    <h3 className="text-xl font-semibold text-brand-dark dark:text-brand-mint">
                      {translateMeanwhile("features.dailyPrompts.title")}
                    </h3>
                  </div>
                  <p className="text-gray-600 dark:text-brand-lavender/80">
                    {translateMeanwhile("features.dailyPrompts.description")}
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/50 dark:bg-brand-dark/50 border-brand-teal/20 dark:border-brand-mint/20">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-2 rounded-full bg-brand-mint/20 dark:bg-brand-mint/10">
                      <Calendar className="h-6 w-6 text-brand-teal dark:text-brand-mint" />
                    </div>
                    <h3 className="text-xl font-semibold text-brand-dark dark:text-brand-mint">
                      {translateMeanwhile("features.streakTracking.title")}
                    </h3>
                  </div>
                  <p className="text-gray-600 dark:text-brand-lavender/80">
                    {translateMeanwhile("features.streakTracking.description")}
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/50 dark:bg-brand-dark/50 border-brand-teal/20 dark:border-brand-mint/20">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-2 rounded-full bg-brand-mint/20 dark:bg-brand-mint/10">
                      <Star className="h-6 w-6 text-brand-teal dark:text-brand-mint" />
                    </div>
                    <h3 className="text-xl font-semibold text-brand-dark dark:text-brand-mint">
                      {translateMeanwhile("features.focusMode.title")}
                    </h3>
                  </div>
                  <p className="text-gray-600 dark:text-brand-lavender/80">
                    {translateMeanwhile("features.focusMode.description")}
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/50 dark:bg-brand-dark/50 border-brand-teal/20 dark:border-brand-mint/20">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-2 rounded-full bg-brand-mint/20 dark:bg-brand-mint/10">
                      <Zap className="h-6 w-6 text-brand-teal dark:text-brand-mint" />
                    </div>
                    <h3 className="text-xl font-semibold text-brand-dark dark:text-brand-mint">
                      {translateMeanwhile("features.quickEntry.title")}
                    </h3>
                  </div>
                  <p className="text-gray-600 dark:text-brand-lavender/80">
                    {translateMeanwhile("features.quickEntry.description")}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 bg-gradient-to-b from-transparent to-brand-mint/10 dark:to-brand-teal/20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-brand-dark dark:text-brand-mint">
                  {translateMeanwhile("cta.title")}
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-600 dark:text-brand-lavender/80 md:text-xl">
                  {translateMeanwhile("cta.description")}
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                <Link
                  href="https://apps.apple.com/us/app/meanwhile-daily-writing/id6742810856"
                  target="_blank"
                  rel="noopener noreferrer">
                  <BrandButton>
                    {translateCommon("downloadNow")}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </BrandButton>
                </Link>
                <Link href="/products">
                  <BrandButtonAlt>
                    {translateCommon("viewAllProducts")}
                  </BrandButtonAlt>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
