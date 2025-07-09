import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ArrowRight,
  Heart,
  Palette,
  Smartphone,
  Users,
  Lightbulb,
  Monitor,
} from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-16 bg-gradient-to-b from-brand-lavender/60 to-brand-mint/20 dark:from-brand-lavender/20 dark:to-brand-mint/10">
          <div className="container px-4 md:px-6 flex flex-col items-center text-center gap-8">
            <h1 className="text-5xl md:text-6xl font-extrabold text-brand-dark dark:text-white leading-tight">
              Human-Driven Creativity
            </h1>
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-brand-dark/80 dark:text-white/80 font-medium">
              At Infinity Trigger, we believe human creativity should be
              celebrated, fostered, and encouraged.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-4">
              <Link href="/products">
                <Button
                  size="lg"
                  className="bg-brand-pink text-brand-dark dark:bg-brand-pink/80 dark:text-white font-semibold px-8 py-4 rounded-lg shadow-lg hover:bg-brand-mint hover:text-brand-dark dark:hover:bg-brand-mint/80 transition-all duration-200"
                >
                  Explore Our Products
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-brand-teal text-white font-semibold px-8 py-4 rounded-lg hover:bg-brand-mint hover:text-brand-dark dark:hover:bg-brand-mint/80 transition-all duration-200"
                >
                  Get In Touch
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Products/Features Section */}
        <section className="w-full py-16 bg-white dark:bg-gray-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-dark dark:text-white mb-2">
                Our Products
              </h2>
              <p className="max-w-xl mx-auto text-brand-dark/80 dark:text-white/80 text-lg">
                Creative tools designed to inspire and support your creative
                process.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
              {/* Meanwhile Card */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg dark:shadow-gray-900/50 p-8 flex flex-col gap-4 items-start border border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-3 rounded-full bg-brand-mint/20 dark:bg-brand-mint/10">
                    <Heart className="h-7 w-7 text-brand-teal dark:text-brand-mint" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-brand-dark dark:text-white">
                      Meanwhile
                    </h3>
                    <span className="inline-block text-xs font-semibold bg-brand-mint/30 dark:bg-brand-mint/20 text-brand-teal dark:text-brand-mint px-3 py-1 rounded-full ml-2">
                      Available Now
                    </span>
                  </div>
                </div>
                <p className="text-brand-dark/80 dark:text-white/80 mb-2">
                  A thoughtfully designed daily writing companion that helps you
                  develop a consistent writing practice through human-crafted
                  prompts, streak tracking, and privacy-focused design.
                </p>
                <ul className="text-sm text-brand-dark/70 dark:text-white/70 mb-4 list-disc list-inside">
                  <li>Human-crafted daily writing prompts</li>
                  <li>Privacy-focused, distraction-free writing</li>
                  <li>Streak tracking and progress insights</li>
                  <li>Beautiful, minimalist iOS design</li>
                </ul>
                <div className="flex gap-3 mt-auto">
                  <Link href="/products/meanwhile">
                    <Button className="bg-gradient-to-r from-[#416165] to-[#b1e69b] text-white font-semibold px-6 py-2 rounded-lg shadow hover:from-[#416165]/90 hover:to-[#b1e69b]/90 transition-all duration-200">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link
                    href="https://apps.apple.com/us/app/meanwhile-daily-writing/id6742810856"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant="outline"
                      className="border-2 border-[#416165] text-[#416165] dark:border-brand-mint dark:text-brand-mint bg-white dark:bg-gray-800 font-semibold px-6 py-2 rounded-lg hover:bg-[#416165] hover:text-white dark:hover:bg-brand-mint dark:hover:text-gray-900 transition-all duration-200"
                    >
                      App Store
                    </Button>
                  </Link>
                </div>
              </div>
              {/* Myriad Worlds Card */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg dark:shadow-gray-900/50 p-8 flex flex-col gap-4 items-start border border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-3 rounded-full bg-brand-lavender/20 dark:bg-brand-lavender/10">
                    <Palette className="h-7 w-7 text-brand-teal dark:text-brand-mint" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-brand-dark dark:text-white">
                      Myriad Worlds
                    </h3>
                    <span className="inline-block text-xs font-semibold bg-brand-lavender/30 dark:bg-brand-lavender/20 text-brand-teal dark:text-brand-mint px-3 py-1 rounded-full ml-2">
                      Coming Soon
                    </span>
                  </div>
                </div>
                <p className="text-brand-dark/80 dark:text-white/80 mb-2">
                  A creative storytelling app featuring Creative Commons
                  licensed content. Use our human-generated stories as starting
                  points for your own creative adventures.
                </p>
                <ul className="text-sm text-brand-dark/70 dark:text-white/70 mb-4 list-disc list-inside">
                  <li>Human-crafted stories and characters</li>
                  <li>Creative Commons commercial licensing</li>
                  <li>Rich storytelling worlds to explore</li>
                  <li>
                    Tools to build your own characters, narratives, and worlds
                  </li>
                </ul>
                <div className="flex gap-3 mt-auto">
                  <Link href="/products/myriad-worlds">
                    <Button className="bg-gradient-to-r from-[#416165] to-[#b1e69b] text-white font-semibold px-6 py-2 rounded-lg shadow hover:from-[#416165]/90 hover:to-[#b1e69b]/90 transition-all duration-200">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/contact">
                    <Button
                      variant="outline"
                      className="border-2 border-[#416165] text-[#416165] dark:border-brand-mint dark:text-brand-mint bg-white dark:bg-gray-800 font-semibold px-6 py-2 rounded-lg hover:bg-[#416165] hover:text-white dark:hover:bg-brand-mint dark:hover:text-gray-900 transition-all duration-200"
                    >
                      TestFlight
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="w-full py-16 bg-brand-lavender/10 dark:bg-gray-800/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-dark dark:text-white mb-2">
                Our Values
              </h2>
              <p className="max-w-xl mx-auto text-brand-dark/80 dark:text-white/80 text-lg">
                The principles that guide everything we do.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
              {/* Value Card 1 */}
              <div className="bg-brand-mint/30 dark:bg-brand-mint/10 rounded-2xl shadow-lg dark:shadow-gray-900/50 p-8 flex flex-col items-center text-center gap-4 border border-brand-mint/20 dark:border-brand-mint/10">
                <div className="p-4 rounded-full bg-brand-lavender/30 dark:bg-brand-lavender/70">
                  <Users className="h-8 w-8 text-brand-teal dark:text-brand-mint" />
                </div>
                <h3 className="text-xl font-bold text-brand-dark dark:text-white">
                  Human-Centered
                </h3>
                <p className="text-brand-dark/80 dark:text-white/80">
                  Technology should serve creativity, not replace it. We put
                  humans in control.
                </p>
              </div>
              {/* Value Card 2 */}
              <div className="bg-brand-mint/30 dark:bg-brand-mint/10 rounded-2xl shadow-lg dark:shadow-gray-900/50 p-8 flex flex-col items-center text-center gap-4 border border-brand-mint/20 dark:border-brand-mint/10">
                <div className="p-4 rounded-full bg-brand-lavender/30 dark:bg-brand-lavender/70">
                  <Lightbulb className="h-8 w-8 text-brand-teal dark:text-brand-mint" />
                </div>
                <h3 className="text-xl font-bold text-brand-dark dark:text-white">
                  Celebrate Creativity
                </h3>
                <p className="text-brand-dark/80 dark:text-white/80">
                  Every person has a unique creative voice. We build tools that
                  amplify it.
                </p>
              </div>
              {/* Value Card 3 */}
              <div className="bg-brand-mint/30 dark:bg-brand-mint/10 rounded-2xl shadow-lg dark:shadow-gray-900/50 p-8 flex flex-col items-center text-center gap-4 border border-brand-mint/20 dark:border-brand-mint/10">
                <div className="p-4 rounded-full bg-brand-lavender/30 dark:bg-brand-lavender/70">
                  <Heart className="h-8 w-8 text-brand-teal dark:text-brand-mint" />
                </div>
                <h3 className="text-xl font-bold text-brand-dark dark:text-white">
                  Authentic Content
                </h3>
                <p className="text-brand-dark/80 dark:text-white/80">
                  All our creative content is made by humans, for humans.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-16 bg-gradient-to-t from-[#416165] to-[#b1e69b] dark:from-[#2a3f42] dark:to-[#8fd17a] text-white">
          <div className="container px-4 md:px-6 flex flex-col items-center text-center gap-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              Ready to Create?
            </h2>
            <p className="max-w-xl mx-auto text-lg text-white/90">
              Join our TestFlight to get early access to our creative tools and
              be part of our community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-2">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-brand-mint text-brand-dark dark:bg-brand-mint/90 dark:text-gray-900 font-semibold px-8 py-4 rounded-lg shadow hover:bg-brand-dark hover:text-brand-mint dark:hover:bg-white dark:hover:text-gray-900 transition-all duration-200"
                >
                  Join TestFlight
                  <Smartphone className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/products">
                <Button
                  size="lg"
                  className="bg-brand-mint text-brand-dark dark:bg-brand-mint/90 dark:text-gray-900 font-semibold px-8 py-4 rounded-lg hover:bg-brand-dark hover:text-brand-mint dark:hover:bg-white dark:hover:text-gray-900 transition-all duration-200"
                >
                  Explore Products
                  <Monitor className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
