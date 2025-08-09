import { useTranslations } from "next-intl";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ArrowLeft,
  Heart,
  BookOpen,
  Share2,
  ArrowRight,
  Sparkles,
  Palette,
  BookMarked,
} from "lucide-react";
import { BrandButton, BrandButtonAlt } from "@/components/BrandButton";

export default function MyriadWorldsPage() {
  const translateMyriadWorlds = useTranslations("products.myriadWorldsPage");
  const translateCommon = useTranslations("common");

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-transparent dark:bg-transparent">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-flex items-center rounded-full bg-brand-mint/20 border border-brand-teal/20 px-3 py-1 text-sm text-brand-teal dark:text-brand-mint">
                    <Sparkles className="w-4 h-4 mr-2" />
                    {translateCommon("avaliblity")}
                  </div>
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl text-brand-dark dark:text-brand-mint">
                    {translateMyriadWorlds("hero.title")}
                  </h1>
                  <p className="max-w-[600px] text-gray-600 dark:text-brand-lavender/80 md:text-xl/relaxed lg:text-2xl/relaxed">
                    {translateMyriadWorlds("hero.description")}
                  </p>
                </div>
                <div className="flex flex-col gap-3 min-[400px]:flex-row items-center">
                  <Link
                    href="https://apps.apple.com/us/app/myriad-worlds/id6748325367"
                    target="_blank"
                    rel="noopener noreferrer">
                    <BrandButton>
                      {translateCommon("downloadOnAppStore")}
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </BrandButton>
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/Assets/screens/myriadworlds11/01.png"
                  alt="Myriad Worlds App Preview"
                  width={300}
                  height={600}
                  className="rounded-lg shadow-2xl"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="w-full py-12 md:py-24 bg-white dark:bg-transparent">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-2">
              <div className="flex flex-col justify-center space-y-6">
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-brand-dark dark:text-brand-mint">
                    {translateMyriadWorlds("about.title")}
                  </h2>
                  <p className="text-gray-600 dark:text-brand-lavender/80 leading-relaxed">
                    {translateMyriadWorlds("about.description")}
                  </p>
                  <p className="text-gray-600 dark:text-brand-lavender/80 leading-relaxed">
                    {translateMyriadWorlds("about.creativeCommonsDescription")}
                  </p>
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-brand-dark dark:text-brand-mint">
                    {translateMyriadWorlds("about.vision.title")}
                  </h3>
                  <ul className="space-y-3 text-gray-600 dark:text-brand-lavender/80 leading-relaxed">
                    <li className="flex items-start gap-3">
                      <Heart className="h-6 w-6 text-brand-pink dark:text-brand-pink mt-0.5 flex-shrink-0" />
                      <span>
                        {translateMyriadWorlds(
                          "about.vision.bulletPoints.platform"
                        )}
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Share2 className="h-6 w-6 text-brand-pink dark:text-brand-pink mt-0.5 flex-shrink-0" />
                      <span>
                        {translateMyriadWorlds(
                          "about.vision.bulletPoints.community"
                        )}
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <BookOpen className="h-6 w-6 text-brand-pink dark:text-brand-pink mt-0.5 flex-shrink-0" />
                      <span>
                        {translateMyriadWorlds(
                          "about.vision.bulletPoints.engagingContent"
                        )}
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="grid grid-cols-2 gap-4">
                  <Image
                    src="/Assets/screens/myriadworlds11/02.png"
                    alt="Myriad Worlds Story View"
                    width={180}
                    height={360}
                    className="rounded-lg shadow-xl"
                  />
                  <Image
                    src="/Assets/screens/myriadworlds11/03.png"
                    alt="Myriad Worlds Character Creation"
                    width={180}
                    height={360}
                    className="rounded-lg shadow-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="w-full py-12 md:py-24 bg-transparent dark:bg-transparent">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-brand-dark dark:text-brand-mint">
                  {translateMyriadWorlds("features.title")}
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-600 dark:text-brand-lavender/80 md:text-xl">
                  {translateMyriadWorlds("features.description")}
                </p>
              </div>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card className="bg-white/50 dark:bg-brand-dark/50 border-brand-pink/20 dark:border-brand-purple/20">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-2 rounded-full bg-brand-pink/20 dark:bg-brand-pink/10">
                      <Heart className="h-6 w-6 text-brand-pink" />
                    </div>
                    <h3 className="text-xl font-semibold text-brand-dark dark:text-brand-mint">
                      {translateMyriadWorlds("features.humanCrafted.title")}
                    </h3>
                  </div>
                  <p className="text-gray-600 dark:text-brand-lavender/80">
                    {translateMyriadWorlds("features.humanCrafted.description")}
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/50 dark:bg-brand-dark/50 border-brand-pink/20 dark:border-brand-purple/20">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-2 rounded-full bg-brand-pink/20 dark:bg-brand-pink/10">
                      <Share2 className="h-6 w-6 text-brand-pink" />
                    </div>
                    <h3 className="text-xl font-semibold text-brand-dark dark:text-brand-mint">
                      {translateMyriadWorlds("features.creativeCommons.title")}
                    </h3>
                  </div>
                  <p className="text-gray-600 dark:text-brand-lavender/80">
                    {translateMyriadWorlds(
                      "features.creativeCommons.description"
                    )}
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/50 dark:bg-brand-dark/50 border-brand-pink/20 dark:border-brand-purple/20">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-2 rounded-full bg-brand-pink/20 dark:bg-brand-pink/10">
                      <BookOpen className="h-6 w-6 text-brand-pink" />
                    </div>
                    <h3 className="text-xl font-semibold text-brand-dark dark:text-brand-mint">
                      {translateMyriadWorlds("features.richStorytelling.title")}
                    </h3>
                  </div>
                  <p className="text-gray-600 dark:text-brand-lavender/80">
                    {translateMyriadWorlds(
                      "features.richStorytelling.description"
                    )}
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/50 dark:bg-brand-dark/50 border-brand-pink/20 dark:border-brand-purple/20">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-2 rounded-full bg-brand-pink/20 dark:bg-brand-pink/10">
                      <Palette className="h-6 w-6 text-brand-pink" />
                    </div>
                    <h3 className="text-xl font-semibold text-brand-dark dark:text-brand-mint">
                      {translateMyriadWorlds(
                        "features.characterCreation.title"
                      )}
                    </h3>
                  </div>
                  <p className="text-gray-600 dark:text-brand-lavender/80">
                    {translateMyriadWorlds(
                      "features.characterCreation.description"
                    )}
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/50 dark:bg-brand-dark/50 border-brand-pink/20 dark:border-brand-purple/20">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-2 rounded-full bg-brand-pink/20 dark:bg-brand-pink/10">
                      <BookMarked className="h-6 w-6 text-brand-pink" />
                    </div>
                    <h3 className="text-xl font-semibold text-brand-dark dark:text-brand-mint">
                      {translateMyriadWorlds("features.storyBuilding.title")}
                    </h3>
                  </div>
                  <p className="text-gray-600 dark:text-brand-lavender/80">
                    {translateMyriadWorlds(
                      "features.storyBuilding.description"
                    )}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 bg-transparent dark:bg-transparent">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-brand-dark dark:text-brand-mint">
                  {translateMyriadWorlds("cta.title")}
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-600 dark:text-brand-lavender/80 md:text-xl">
                  {translateMyriadWorlds("cta.description")}
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                <Link href="/products">
                  <BrandButtonAlt>
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    {translateCommon("backToProducts")}
                  </BrandButtonAlt>
                </Link>
                <Link
                  href="https://apps.apple.com/us/app/myriad-worlds/id6748325367"
                  target="_blank"
                  rel="noopener noreferrer">
                  <BrandButton>
                    {translateCommon("downloadOnAppStore")}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </BrandButton>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
