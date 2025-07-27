import { useTranslations } from "next-intl";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, Brain, BookOpen, Earth } from "lucide-react";
import { BrandButton, BrandButtonAlt } from "@/components/BrandButton";
import { ProductCard } from "@/components/ProductCard";

export default function Products() {
  const translateProducts = useTranslations("products");
  const translateCommon = useTranslations("common");

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-brand-mint/10 to-white dark:bg-gradient-to-b dark:from-brand-teal/70 dark:to-brand-teal/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-8 text-center">
              <div className="space-y-6">
                {/* Hero Badge */}
                <div className="bg-brand-dark/60 inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-medium backdrop-blur-sm border-brand-dark/30 text-brand-mint">
                  <Brain className="w-4 h-4 mr-2 text-brand-mint" />
                  {translateProducts("badge")}
                </div>

                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-brand-dark dark:text-brand-mint">
                  {translateProducts("title")}
                </h1>
                <p className="mx-auto max-w-[700px] text-lg text-gray-600 md:text-xl dark:text-brand-lavender/80">
                  {translateProducts("description")}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-brand-pink/50 dark:bg-gradient-to-b dark:from-brand-teal/50 dark:to-brand-dark">
          <div className="container px-4 md:px-6">
            <div className="mx-auto grid max-w-5xl items-start gap-8 lg:grid-cols-2">
              {/* Meanwhile ProductCard */}
              <ProductCard
                imageSrc="/images/meanwhile-preview.png"
                imageAlt="Meanwhile daily writing app interface showing clean, minimalist design"
                badge={
                  <div className="inline-flex items-center rounded-full bg-brand-mint/80 px-3 py-1 text-xs font-medium text-brand-neon border border-brand-neon/30 dark:bg-brand-mint/60 dark:text-brand-dark">
                    {translateCommon("avaliblity")}
                  </div>
                }
                icon={<BookOpen className="h-8 w-8 text-brand-mint" />}
                title={translateProducts("meanwhileCard.title")}
                subtitle={translateProducts("meanwhileCard.subtitle")}
                description={translateProducts("meanwhileCard.description")}
                features={[
                  translateProducts(
                    "meanwhileCard.features.humanCraftedPrompts"
                  ),
                  translateProducts("meanwhileCard.features.privacyFocused"),
                  translateProducts("meanwhileCard.features.streakTracking"),
                  translateProducts("meanwhileCard.features.design"),
                ]}
                actions={
                  <>
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
                  </>
                }
              />

              {/* Myriad Worlds ProductCard */}
              <ProductCard
                imageSrc="/Assets/myriadworlds_mockup.png"
                imageAlt="Myriad Worlds creative storytelling app interface preview"
                badge={
                  <div className="inline-flex items-center rounded-full bg-brand-mint/80 px-3 py-1 text-xs font-medium text-brand-neon border border-brand-neon/30 dark:bg-brand-mint/60 dark:text-brand-dark">
                    {translateCommon("avaliblity")}
                  </div>
                }
                icon={<Earth className="h-8 w-8 text-brand-mint" />}
                title={translateProducts("myriadWorldsCard.title")}
                subtitle={translateProducts("myriadWorldsCard.subtitle")}
                description={translateProducts("myriadWorldsCard.description")}
                features={[
                  translateProducts(
                    "myriadWorldsCard.features.humanCraftedStories"
                  ),
                  translateProducts(
                    "myriadWorldsCard.features.creativeCommons"
                  ),
                  translateProducts("myriadWorldsCard.features.storytelling"),
                  translateProducts(
                    "myriadWorldsCard.features.storyBuildingTools"
                  ),
                ]}
                actions={
                  <>
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
                  </>
                }
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-brand-pink/50 to-brand-lavender dark:bg-gradient-to-b dark:from-brand-dark dark:to-brand-dark">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-brand-teal dark:text-brand-mint">
                  {translateCommon("cta.title")}
                </h2>
                <p className="mx-auto max-w-[700px] md:text-xl text-black dark:text-white">
                  {translateCommon("cta.description")}
                </p>
              </div>
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
                <Link href="/about">
                  <BrandButtonAlt>
                    {translateCommon("learnAboutUs")}
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
