import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, Brain, BookOpen, Earth } from "lucide-react";
import { BrandButton, BrandButtonAlt } from "@/components/BrandButton";
import { ProductCard } from "@/components/ProductCard";

export default function Products() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-brand-mint/10 bg-none dark:bg-brand-teal/70">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-8 text-center">
              <div className="space-y-6">
                {/* Hero Badge */}
                <div className="bg-brand-dark/60 inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-medium backdrop-blur-sm border-brand-dark/30 text-brand-mint">
                  <Brain className="w-4 h-4 mr-2 text-brand-mint" />
                  Our Products
                </div>

                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-brand-dark dark:text-brand-mint">
                  Apps For Creatives
                </h1>
                <p className="mx-auto max-w-[700px] text-lg text-gray-600 md:text-xl dark:text-brand-lavender/80">
                  Discover our collection of human-crafted creative tools
                  designed to inspire, support, and amplify your creative
                  journey.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-brand-teal/50">
          <div className="container px-4 md:px-6">
            <div className="mx-auto grid max-w-5xl items-start gap-8 lg:grid-cols-2">
              {/* Meanwhile ProductCard */}
              <ProductCard
                imageSrc="/images/meanwhile-preview.png"
                imageAlt="Meanwhile daily writing app interface showing clean, minimalist design"
                badge={
                  <div className="inline-flex items-center rounded-full bg-brand-mint/80 px-3 py-1 text-xs font-medium text-brand-neon border border-brand-neon/30 dark:bg-brand-mint/60 dark:text-brand-dark">
                    Available Now
                  </div>
                }
                icon={<BookOpen className="h-8 w-8 text-brand-mint" />}
                title="Meanwhile"
                subtitle="Daily Writing Companion"
                description="A thoughtfully designed daily writing companion that helps you develop a consistent writing practice through human-crafted prompts, streak tracking, and privacy-focused design."
                features={[
                  "Human-crafted daily writing prompts",
                  "Privacy-focused, distraction-free writing",
                  "Streak tracking and progress insights",
                  "Beautiful, minimalist iOS design",
                ]}
                actions={
                  <>
                    <Link href="/products/meanwhile">
                      <BrandButton>
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </BrandButton>
                    </Link>
                    <Link
                      href="https://apps.apple.com/us/app/meanwhile-daily-writing/id6742810856"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <BrandButtonAlt>
                        App Store
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
                  <div className="inline-flex items-center rounded-full bg-brand-pink px-3 py-1 text-xs font-medium text-brand-purple border border-brand-purple/30 dark:bg-brand-pink dark:text-brand-dark">
                    Coming Soon
                  </div>
                }
                icon={<Earth className="h-8 w-8 text-brand-mint" />}
                title="Myriad Worlds"
                subtitle="Creative Storytelling"
                description="A creative storytelling app featuring Creative Commons licensed content. Use our human-generated stories as starting points for your own creative adventures."
                features={[
                  "Human-crafted stories and characters",
                  "Creative Commons commercial licensing",
                  "Rich storytelling worlds to explore",
                  "Tools to build your own characters, narratives, and worlds",
                ]}
                actions={
                  <>
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
                  </>
                }
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-brand-pink/50 to-white text-white dark:bg-brand-dark dark:bg-none">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-brand-teal dark:text-brand-mint">
                  Ready to Create?
                </h2>
                <p className="mx-auto max-w-[700px] md:text-xl text-black dark:text-white">
                  Join our TestFlight to get early access to our creative tools
                  and be part of our community.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-2">
                <Link href="https://testflight.apple.com/join/uJVk52wq" target="_blank" rel="noopener noreferrer">
                  <BrandButton>
                    Join TestFlight
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </BrandButton>
                </Link>
                <Link href="/about">
                  <BrandButtonAlt>Learn About Us</BrandButtonAlt>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
