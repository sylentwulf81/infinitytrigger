import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Heart, BookOpen, Share2, ArrowRight, Sparkles, Palette, BookMarked } from "lucide-react";
import { BrandButton, BrandButtonAlt } from "@/components/BrandButton";

export default function MyriadWorldsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-brand-pink/10 to-transparent dark:from-brand-purple/20">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-flex items-center rounded-full bg-brand-pink/20 border border-brand-purple/20 px-3 py-1 text-sm text-brand-purple dark:text-brand-pink">
                    <Sparkles className="w-4 h-4 mr-2" />
                    Coming Soon
                  </div>
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl text-brand-dark dark:text-brand-mint">
                    Myriad Worlds
                  </h1>
                  <p className="max-w-[600px] text-gray-600 dark:text-brand-lavender/80 md:text-xl/relaxed lg:text-2xl/relaxed">
                    A creative storytelling app featuring Creative Commons licensed content. Use our human-generated stories as starting points for your own creative adventures.
                  </p>
                </div>
                <div className="flex flex-col gap-3 min-[400px]:flex-row items-center">
                  <Link href="https://apps.apple.com/us/app/myriad-worlds/id6748325367" target="_blank" rel="noopener noreferrer">
                    <BrandButton>
                      Download on App Store
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </BrandButton>
                  </Link>
                  <Link href="/products">
                    <BrandButtonAlt>
                      View All Products
                    </BrandButtonAlt>
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative w-[300px] h-[600px] bg-brand-dark rounded-[55px] border-[14px] border-brand-dark shadow-2xl dark:shadow-brand-mint/20 overflow-hidden">
                  <div className="absolute top-0 w-[120px] h-[25px] bg-brand-dark left-1/2 transform -translate-x-1/2 rounded-b-[18px] z-10"></div>
                  <div className="absolute top-[8px] w-[8px] h-[8px] bg-brand-dark right-[28px] rounded-full z-10"></div>
                  <div className="absolute top-[11px] w-[40px] h-[4px] bg-brand-dark right-[40px] rounded-full z-10"></div>
                  <Image
                    src="/Assets/myriadworlds_mockup.png"
                    alt="Myriad Worlds App Preview"
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
            <div className="grid gap-12 lg:grid-cols-2">
              <div className="flex flex-col justify-center space-y-6">
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-brand-dark dark:text-brand-mint">
                    Stories by Humans, for Humans
                  </h2>
                  <p className="text-gray-600 dark:text-brand-lavender/80 leading-relaxed">
                    Every story, character, and world in Myriad Worlds is crafted by human writers. 
                    We believe in the power of human imagination and creativity.
                  </p>
                  <p className="text-gray-600 dark:text-brand-lavender/80 leading-relaxed">
                    All content is released under Creative Commons licensing, so you can use our stories 
                    as inspiration, adapt them, or build upon them for your own creative projects.
                  </p>
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-brand-dark dark:text-brand-mint">Our Vision</h3>
                  <ul className="space-y-3 text-gray-600 dark:text-brand-lavender/80 leading-relaxed">
                    <li className="flex items-start gap-3">
                      <Heart className="h-6 w-6 text-brand-pink dark:text-brand-pink mt-0.5 flex-shrink-0" />
                      <span>Create a platform where human creativity thrives and inspires others</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Share2 className="h-6 w-6 text-brand-pink dark:text-brand-pink mt-0.5 flex-shrink-0" />
                      <span>Foster a community of storytellers who build upon each other's ideas</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <BookOpen className="h-6 w-6 text-brand-pink dark:text-brand-pink mt-0.5 flex-shrink-0" />
                      <span>Provide rich, engaging content that sparks imagination and creativity</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative w-[180px] h-[360px] bg-brand-dark rounded-[45px] border-[10px] border-brand-dark shadow-xl dark:shadow-brand-mint/10 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-brand-pink/20 to-transparent"></div>
                    <Image
                      src="/Assets/myriadworlds_mockup.png"
                      alt="Myriad Worlds Story View"
                      fill
                      className="object-cover rounded-[35px]"
                    />
                  </div>
                  <div className="relative w-[180px] h-[360px] bg-brand-dark rounded-[45px] border-[10px] border-brand-dark shadow-xl dark:shadow-brand-mint/10 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-brand-purple/20 to-transparent"></div>
                    <Image
                      src="/Assets/myriadworlds_mockup.png"
                      alt="Myriad Worlds Character Creation"
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
        <section className="w-full py-12 md:py-24 bg-brand-pink/5 dark:bg-brand-purple/10">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-brand-dark dark:text-brand-mint">
                  Built for Creative Freedom
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-600 dark:text-brand-lavender/80 md:text-xl">
                  Myriad Worlds is designed to inspire and support your creative journey.
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
                    <h3 className="text-xl font-semibold text-brand-dark dark:text-brand-mint">Human-Crafted</h3>
                  </div>
                  <p className="text-gray-600 dark:text-brand-lavender/80">
                    Every story is written by human authors who pour their creativity and passion into each piece.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/50 dark:bg-brand-dark/50 border-brand-pink/20 dark:border-brand-purple/20">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-2 rounded-full bg-brand-pink/20 dark:bg-brand-pink/10">
                      <Share2 className="h-6 w-6 text-brand-pink" />
                    </div>
                    <h3 className="text-xl font-semibold text-brand-dark dark:text-brand-mint">Creative Commons</h3>
                  </div>
                  <p className="text-gray-600 dark:text-brand-lavender/80">
                    Use our stories as starting points for your own creative works under Creative Commons licensing.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/50 dark:bg-brand-dark/50 border-brand-pink/20 dark:border-brand-purple/20">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-2 rounded-full bg-brand-pink/20 dark:bg-brand-pink/10">
                      <BookOpen className="h-6 w-6 text-brand-pink" />
                    </div>
                    <h3 className="text-xl font-semibold text-brand-dark dark:text-brand-mint">Rich Storytelling</h3>
                  </div>
                  <p className="text-gray-600 dark:text-brand-lavender/80">
                    Explore diverse worlds, characters, and narratives that spark your imagination.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/50 dark:bg-brand-dark/50 border-brand-pink/20 dark:border-brand-purple/20">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-2 rounded-full bg-brand-pink/20 dark:bg-brand-pink/10">
                      <Palette className="h-6 w-6 text-brand-pink" />
                    </div>
                    <h3 className="text-xl font-semibold text-brand-dark dark:text-brand-mint">Character Creation</h3>
                  </div>
                  <p className="text-gray-600 dark:text-brand-lavender/80">
                    Design and develop unique characters with our intuitive creation tools.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/50 dark:bg-brand-dark/50 border-brand-pink/20 dark:border-brand-purple/20">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-2 rounded-full bg-brand-pink/20 dark:bg-brand-pink/10">
                      <BookMarked className="h-6 w-6 text-brand-pink" />
                    </div>
                    <h3 className="text-xl font-semibold text-brand-dark dark:text-brand-mint">Story Building</h3>
                  </div>
                  <p className="text-gray-600 dark:text-brand-lavender/80">
                    Craft your narratives with powerful storytelling tools and templates.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 bg-gradient-to-b from-transparent to-brand-pink/10 dark:to-brand-purple/20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-brand-dark dark:text-brand-mint">
                  Ready to Explore?
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-600 dark:text-brand-lavender/80 md:text-xl">
                  Join our TestFlight to get early access to Myriad Worlds and start exploring human-crafted stories.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                <Link href="https://apps.apple.com/us/app/myriad-worlds/id6748325367" target="_blank" rel="noopener noreferrer">
                  <BrandButton>
                    Download on App Store
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </BrandButton>
                </Link>
                <Link href="/products">
                  <BrandButtonAlt>
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Products
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