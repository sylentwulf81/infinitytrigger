import Link from "next/link";
import Image from "next/image";
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
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-16 bg-brand-mint/20 dark:bg-brand-dark">
          <div className="container px-4 md:px-6 flex flex-col items-center text-center gap-8">
            <h1 className="text-5xl md:text-6xl font-extrabold text-brand-dark dark:text-brand-lavender leading-tight">
              About Infinity Trigger
            </h1>
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-brand-dark/80 dark:text-brand-lavender/80 font-medium">
              We're a small team passionate about building creative tools that
              put humans first. We celebrate and help foster creativity in all
              its forms.
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="w-full py-16 bg-brand-lavender dark:bg-gradient-to-b dark:from-brand-dark dark:to-brand-teal">
          <div className="container px-4 md:px-6">
            <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-2 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-dark dark:text-brand-mint">
                  Our Identity
                </h2>
                <p className="text-lg text-brand-dark/80 dark:text-white/80 leading-relaxed">
                  At Infinity Trigger, we believe that technology should serve
                  creativity, not replace it. Humans should always be in the
                  driver's seat, telling the stories that move us. We build
                  tools that amplify the human creative voice, celebrating the
                  unique perspective that each of us brings to the world.
                </p>
                <p className="text-lg text-brand-dark/80 dark:text-white/80 leading-relaxed">
                  Every piece of creative content in our apps is
                  human-generated. Every story, every prompt, every element is
                  crafted by real people who understand the creative process and
                  the challenges and victories that come with it.
                </p>
              </div>
              <div className="bg-brand-dark/60 rounded-2xl shadow-lg p-8 flex flex-col gap-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-3 rounded-full bg-brand-dark/60 dark:bg-brand-mint/60">
                    <Target className="h-7 w-7 text-brand-mint dark:text-brand-dark" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-brand-mint">
                      Curated Creativity
                    </h3>
                  </div>
                </div>
                <p className="text-white">
                  We prioritize human creativity and intuition in everything we
                  build.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="w-full py-16 bg-gradient-to-b from-brand-lavender to-brand-mint/20 dark:bg-gradient-to-b dark:from-brand-teal dark:to-brand-dark/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-dark dark:text-brand-lavender mb-2">
                Our Values
              </h2>
              <p className="max-w-xl mx-auto text-brand-dark/80 dark:text-white/80 text-lg">
                The principles that guide everything we do.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
              <div className="bg-brand-dark/60 rounded-2xl shadow-lg p-8 flex flex-col gap-4 items-start">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-3 rounded-full bg-brand-dark/60">
                    <Users className="h-7 w-7 text-brand-mint" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-brand-mint">
                      Human-Centered
                    </h3>
                  </div>
                </div>
                <p className="text-white">
                  Technology should serve creativity, not replace it. We put
                  humans in control of their creative process and provide tools
                  that enhance rather than dictate.
                </p>
              </div>

              <div className="bg-brand-dark/60 rounded-2xl shadow-lg p-8 flex flex-col gap-4 items-start">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-3 rounded-full bg-brand-dark/60">
                    <Lightbulb className="h-7 w-7 text-brand-mint" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-brand-mint">
                      Celebrate Creativity
                    </h3>
                  </div>
                </div>
                <p className="text-white">
                  Every person has a unique creative voice. We build tools that
                  amplify it, celebrate it, and help it grow stronger with each
                  use.
                </p>
              </div>

              <div className="bg-brand-dark/60 rounded-2xl shadow-lg p-8 flex flex-col gap-4 items-start">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-3 rounded-full bg-brand-dark/60">
                    <Heart className="h-7 w-7 text-brand-mint" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-brand-mint">
                      Authentic Content
                    </h3>
                  </div>
                </div>
                <p className="text-white">
                  All our creative content is made by humans, for humans. No
                  AI-generated prompts or stories—just authentic, thoughtful
                  content crafted with care.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="w-full py-16 bg-gradient-to-b from-brand-mint/20 to-brand-dark/40 dark:bg-black dark:bg-none">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-dark dark:text-brand-mint mb-2">
                Our Team
              </h2>
              <p className="max-w-xl mx-auto text-brand-dark/80 dark:text-white/80 text-lg">
                We are a small team with big dreams for the future of digital
                creative tools. We are a team of developers, designers, and
                content creators who are passionate about creating tools that
                help people create. Many of the are creative hobbyists or
                professionals ourselves, and we strive to build the tools that we want to
                use ourselves.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
              <div className="bg-brand-dark/60 rounded-2xl shadow-lg p-8 flex flex-col items-center text-center gap-4">
                <div className="p-4 rounded-full bg-brand-dark/60">
                  <Users className="h-8 w-8 text-brand-mint" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-brand-mint">
                    Creative Developers
                  </h3>
                </div>
              </div>

              <div className="bg-brand-dark/60 rounded-2xl shadow-lg p-8 flex flex-col items-center text-center gap-4">
                <div className="p-4 rounded-full bg-brand-dark/60">
                  <Heart className="h-8 w-8 text-brand-mint" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-brand-mint">
                    Content Creators
                  </h3>
                </div>
              </div>

              <div className="bg-brand-dark/60 rounded-2xl shadow-lg p-8 flex flex-col items-center text-center gap-4">
                <div className="p-4 rounded-full bg-brand-dark/60">
                  <Sparkles className="h-8 w-8 text-brand-mint" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-brand-mint">
                    Design Thinkers
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-16 bg-brand-lavender dark:bg-brand-dark text-brand-dark dark:text-brand-mint">
          <div className="container px-4 md:px-6 flex flex-col items-center text-center gap-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              Join Our Journey
            </h2>
            <p className="max-w-xl mx-auto text-lg text-brand-dark/90 dark:text-white/90">
              Be part of our mission to celebrate human creativity and build
              tools that inspire.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-2">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-brand-teal text-white font-semibold px-8 py-4 rounded-lg hover:bg-brand-mint hover:text-brand-dark transition-all duration-200"
                >
                  Get In Touch
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/products">
                <Button
                  size="lg"
                  className="border-1 border-brand-mint text-brand-dark font-semibold px-8 py-4 rounded-lg hover:bg-brand-mint hover:text-[#416165] transition-all duration-200"
                >
                  Explore Our Products
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
