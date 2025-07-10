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

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-20 bg-gradient-to-b from-brand-mint/20 to-white dark:from-brand-dark dark:to-brand-teal/20">
          <div className="container px-4 md:px-6 flex flex-col items-center text-center gap-8">
            <div className="flex items-center gap-2 mb-2">
              <BookOpen className="h-6 w-6 text-brand-teal dark:text-brand-mint" />
              <span className="text-sm font-medium text-brand-teal dark:text-brand-mint">Welcome to Infinity Trigger</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold text-brand-dark dark:text-brand-mint leading-tight">
              Where Human Creativity<br />Takes Center Stage
            </h1>
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-brand-dark/80 dark:text-white/80 font-medium">
              We're crafting tools that celebrate and amplify your creative voice. Our mission is simple: put powerful, 
              human-centered creative tools in your hands, then step back and let your imagination soar.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
              <Link href="/products">
                <BrandButton>
                  Explore Our Products
                  <ArrowRight className="ml-2 h-5 w-5" />
                </BrandButton>
              </Link>
              <Link href="/contact">
                <BrandButtonAlt>
                  Get In Touch
                </BrandButtonAlt>
              </Link>
            </div>
            <div className="mt-8 flex items-center gap-4 text-sm text-brand-dark/60 dark:text-white/60">
              <div className="flex items-center gap-1">
                <Heart className="h-4 w-4" />
                <span>Made with love in Nagano Prefecture, Japan</span>
              </div>
              <div className="h-1 w-1 rounded-full bg-brand-dark/60 dark:bg-white/60" />
              <div className="flex items-center gap-1">
                <Users className="h-4 w-4" />
                <span>Built for creators like you</span>
              </div>
            </div>
          </div>
        </section>

        {/* Products/Features Section */}
        <section className="w-full py-16 bg-white dark:bg-brand-teal/70">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center mb-12">
              <span className="text-brand-teal dark:text-brand-mint text-sm font-medium mb-2">Our Creative Tools</span>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-dark dark:text-brand-mint mb-2">
                Tools That Inspire
              </h2>
              <p className="max-w-xl mx-auto text-brand-dark/80 dark:text-white/80 text-lg">
                Thoughtfully designed apps that help you write, create, and tell your stories. Whether you're a writer, 
                artist, filmmaker, or someone who loves to create, we're here to support your creative journey.
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
                      Meanwhile
                    </h3>
                    <span className="inline-block text-xs font-semibold bg-brand-mint dark:bg-brand-mint text-brand-teal dark:text-brand-dark px-3 py-1 rounded-full ml-2">
                      Available Now
                    </span>
                  </div>
                </div>
                <p className="text-brand-dark/80 dark:text-white/80 mb-2">
                  A thoughtfully designed daily writing companion that helps you develop a consistent writing practice through human-crafted prompts, streak tracking, and privacy-focused design.
                </p>
                <ul className="text-sm text-brand-dark/70 dark:text-white/70 mb-4 list-disc list-inside">
                  <li>Human-crafted daily writing prompts</li>
                  <li>Privacy-focused, distraction-free writing</li>
                  <li>Streak tracking and progress insights</li>
                  <li>Beautiful, minimalist iOS design</li>
                </ul>
                <div className="flex gap-3 mt-auto">
                  <Link href="/products/meanwhile">
                    <BrandButton>
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </BrandButton>
                  </Link>
                  <Link href="https://apps.apple.com/us/app/meanwhile-daily-writing/id6742810856" target="_blank" rel="noopener noreferrer">
                    <BrandButtonAlt>
                      App Store
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
                      Myriad Worlds
                    </h3>
                    <span className="inline-block text-xs font-semibold bg-brand-pink dark:bg-brand-lavender text-brand-teal dark:text-brand-teal px-3 py-1 rounded-full ml-2">
                      Coming Soon
                    </span>
                  </div>
                </div>
                <p className="text-brand-dark/80 dark:text-white/80 mb-2">
                  A creative storytelling app featuring Creative Commons licensed content. Use our human-generated stories as starting points for your own creative adventures.
                </p>
                <ul className="text-sm text-brand-dark/70 dark:text-white/70 mb-4 list-disc list-inside">
                  <li>Human-crafted stories and characters</li>
                  <li>Creative Commons commercial licensing</li>
                  <li>Rich storytelling worlds to explore</li>
                  <li>Tools to build your own characters, narratives, and worlds</li>
                </ul>
                <div className="flex gap-3 mt-auto">
                  <Link href="/products/myriad-worlds">
                    <BrandButton>
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </BrandButton>
                  </Link>
                  <Link href="https://testflight.apple.com/join/uJVk52wq" target="_blank" rel="noopener noreferrer">
                    <BrandButtonAlt>
                      TestFlight
                    </BrandButtonAlt>
                  </Link>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="w-full py-16 bg-brand-lavender/10 dark:bg-brand-teal/40">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-dark dark:text-brand-mint mb-2">
                Our Values
              </h2>
              <p className="max-w-xl mx-auto text-brand-dark/80 dark:text-white/80 text-lg">
                The principles that guide everything we do.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
              {/* Value Card 1 */}
              <Card className="bg-brand-mint/30 dark:bg-brand-mint/10 rounded-2xl shadow-lg dark:shadow-gray-900/50 p-8 flex flex-col items-center text-center gap-4 border-2 border-brand-mint/20 dark:border-brand-mint/10">
                <div className="p-4 rounded-full bg-brand-dark dark:bg-brand-lavender/70">
                  <Users className="h-8 w-8 text-brand-mint dark:text-brand-teal" />
                </div>
                <h3 className="text-xl font-bold text-brand-dark dark:text-brand-mint">
                  Human-Centered
                </h3>
                <p className="text-brand-dark/80 dark:text-white/80">
                  Technology should enable creativity, not take over the process. We make tools that help you generate ideas and stimulate your imagination.
                </p>
              </Card>
              {/* Value Card 2 */}
              <Card className="bg-brand-mint/30 dark:bg-brand-mint/10 rounded-2xl shadow-lg dark:shadow-gray-900/50 p-8 flex flex-col items-center text-center gap-4 border-2 border-brand-mint/20 dark:border-brand-mint/10">
                <div className="p-4 rounded-full bg-brand-dark dark:bg-brand-lavender/70">
                  <Lightbulb className="h-8 w-8 text-brand-mint dark:text-brand-teal" />
                </div>
                <h3 className="text-xl font-bold text-brand-dark dark:text-brand-mint">
                  Celebrate Diversity
                </h3>
                <p className="text-brand-dark/80 dark:text-white/80">
                  Every person has a unique creative voice. We build tools that amplify it.
                </p>
              </Card>
              {/* Value Card 3 */}
              <Card className="bg-brand-mint/30 dark:bg-brand-mint/10 rounded-2xl shadow-lg dark:shadow-gray-900/50 p-8 flex flex-col items-center text-center gap-4 border-2 border-brand-mint/20 dark:border-brand-mint/10">
                <div className="p-4 rounded-full bg-brand-dark dark:bg-brand-lavender/70">
                  <Heart className="h-8 w-8 text-brand-mint dark:text-brand-teal" />
                </div>
                <h3 className="text-xl font-bold text-brand-dark dark:text-brand-mint">
                  Authentic Content
                </h3>
                <p className="text-brand-dark/80 dark:text-white/80">
                  All our creative content is made by humans, for humans.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-16 bg-brand-teal dark:bg-brand-dark">
          <div className="container px-4 md:px-6 flex flex-col items-center text-center gap-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-2 text-white dark:text-brand-mint">
              Ready to Create?
            </h2>
            <p className="max-w-xl mx-auto text-lg text-white/90 dark:text-white md:text-xl">
              Join our TestFlight to get early access to our creative tools and be part of our community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-2">
              <Link href="https://testflight.apple.com/join/uJVk52wq" target="_blank" rel="noopener noreferrer">
                <BrandButton>
                  Join TestFlight
                  <ArrowRight className="ml-2 h-5 w-5" />
                </BrandButton>
              </Link>
              <Link href="/products">
                <BrandButtonAlt>
                  Explore Products
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
