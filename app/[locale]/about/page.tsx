import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ArrowRight,
  Heart,
  Users,
  Lightbulb,
  Sparkles,
  Target,
} from "lucide-react";

export default function About() {
  const translateAbout = useTranslations("about");
  const translateCommon = useTranslations("common");
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-16 bg-transparent dark:bg-transparent">
          <div className="max-w-7xl mx-auto px-4 md:px-6 flex flex-col items-center text-center gap-8">
            <h1 className="text-5xl md:text-6xl font-extrabold text-brand-dark dark:text-brand-mint leading-tight">
              {translateAbout("title")}
            </h1>
            <p className="max-w-3xl mx-auto text-lg md:text-xl text-brand-dark/80 dark:text-white font-medium">
              {translateAbout("descriptionParagraph1")}
            </p>
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-brand-dark/80 dark:text-white font-medium">
              {translateAbout("descriptionParagraph2")}
            </p>
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-brand-dark/80 dark:text-white font-medium">
              {translateAbout("descriptionParagraph3")}
            </p>
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-brand-dark/80 dark:text-white font-medium">
              {translateAbout("descriptionParagraph4")}
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="w-full py-16 bg-transparent dark:bg-transparent">
          <div className="container px-4 md:px-6">
            <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-2 items-center">
              <Card className="bg-brand-dark/60 rounded-2xl shadow-lg p-8 border-2 border-brand-gray dark:border-brand-mint">
                <CardHeader>
                  <CardTitle className="text-3xl md:text-4xl font-bold text-brand-mint">
                    {translateAbout("identity.title")}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-white/80 leading-relaxed">
                    {translateAbout("identity.descriptionParagraph1")}
                  </p>
                  <p className="text-lg text-white/80 leading-relaxed mt-4">
                    {translateAbout("identity.descriptionParagraph2")}
                  </p>
                </CardContent>
              </Card>
              <Image
                src="/images/pexels-abby-chung-371167-1106468.jpg"
                alt="A Japanese young woman, facing away from the camera,browsing books in a library, symbolizing curated creativity."
                width={600}
                height={400}
                className="rounded-2xl shadow-lg object-cover w-full h-full"
              />
              <Image
                src="/images/pexels-dsd-143941-1829980.jpg"
                alt="Matsumoto Castle in Japan, reflecting the company's roots."
                width={600}
                height={400}
                className="rounded-2xl shadow-lg object-cover w-full h-full"
              />
              <Card className="bg-brand-dark/60 rounded-2xl shadow-lg p-8 border-2 border-brand-gray dark:border-brand-mint">
                <CardHeader>
                  <CardTitle className="text-3xl md:text-4xl font-bold text-brand-mint">
                    {translateAbout("story.title")}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-white/80 leading-relaxed">
                    {translateAbout("story.descriptionParagraph1")}
                  </p>
                  <p className="text-lg text-white/80 leading-relaxed mt-4">
                    {translateAbout("story.descriptionParagraph2")}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="w-full py-16 bg-transparent dark:bg-transparent">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-dark dark:text-brand-mint mb-2">
                {translateAbout("values.title")}
              </h2>
              <p className="max-w-xl mx-auto text-brand-dark/80 dark:text-white/80 text-lg">
                {translateAbout("values.description")}
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
              <div className="bg-brand-dark/60 rounded-2xl shadow-lg p-8 flex flex-col gap-4 items-start border-2 border-brand-gray dark:border-brand-mint">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-3 rounded-full bg-brand-dark/60">
                    <Users className="h-7 w-7 text-brand-mint" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-brand-mint">
                      {translateAbout("values.humanCentered.title")}
                    </h3>
                  </div>
                </div>
                <p className="text-white">
                  {translateAbout("values.humanCentered.description")}
                </p>
              </div>

              <div className="bg-brand-dark/60 rounded-2xl shadow-lg p-8 flex flex-col gap-4 items-start border-2 border-brand-gray dark:border-brand-mint">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-3 rounded-full bg-brand-dark/60">
                    <Lightbulb className="h-7 w-7 text-brand-mint" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-brand-mint">
                      {translateAbout("values.celebrateCreativity.title")}
                    </h3>
                  </div>
                </div>
                <p className="text-white">
                  {translateAbout("values.celebrateCreativity.description")}
                </p>
              </div>

              <div className="bg-brand-dark/60 rounded-2xl shadow-lg p-8 flex flex-col gap-4 items-start border-2 border-brand-gray dark:border-brand-mint">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-3 rounded-full bg-brand-dark/60">
                    <Heart className="h-7 w-7 text-brand-mint" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-brand-mint">
                      {translateAbout("values.authenticContent.title")}
                    </h3>
                  </div>
                </div>
                <p className="text-white">
                  {translateAbout("values.authenticContent.description")}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="w-full py-16 bg-transparent dark:bg-transparent">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-dark dark:text-brand-mint mb-2">
                {translateAbout("team.title")}
              </h2>
              <p className="max-w-xl mx-auto text-brand-dark/80 dark:text-white/80 text-lg">
                {translateAbout("team.description")}
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
              <div className="bg-brand-dark/60 rounded-2xl shadow-lg p-8 flex flex-col items-center text-center gap-4 border-2 border-brand-gray dark:border-brand-mint">
                <div className="p-4 rounded-full bg-brand-dark/60">
                  <Users className="h-8 w-8 text-brand-mint" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-brand-mint">
                    {translateAbout("team.roles.developers")}
                  </h3>
                </div>
              </div>

              <div className="bg-brand-dark/60 rounded-2xl shadow-lg p-8 flex flex-col items-center text-center gap-4 border-2 border-brand-gray dark:border-brand-mint">
                <div className="p-4 rounded-full bg-brand-dark/60">
                  <Heart className="h-8 w-8 text-brand-mint" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-brand-mint">
                    {translateAbout("team.roles.creators")}
                  </h3>
                </div>
              </div>

              <div className="bg-brand-dark/60 rounded-2xl shadow-lg p-8 flex flex-col items-center text-center gap-4 border-2 border-brand-gray dark:border-brand-mint">
                <div className="p-4 rounded-full bg-brand-dark/60">
                  <Sparkles className="h-8 w-8 text-brand-mint" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-brand-mint">
                    {translateAbout("team.roles.designers")}
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
