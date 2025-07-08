import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ArrowRight,
  Heart,
  Palette,
  Brain,
  BookOpen,
  Earth,
} from "lucide-react";

export default function Products() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-8 text-center">
              <div className="space-y-6">
                {/* Hero Badge */}
                <div className="bg-brand-dark/60 inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-medium backdrop-blur-sm border-brand-dark/30 text-brand-mint">
                  <Brain className="w-4 h-4 mr-2 text-brand-mint" />
                  Our Products
                </div>

                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-brand-dark">
                  Apps For Creatives
                </h1>
                <p className="mx-auto max-w-[700px] text-lg text-gray-600 md:text-xl">
                  Discover our collection of human-crafted creative tools
                  designed to inspire, support, and amplify your creative
                  journey.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="mx-auto grid max-w-5xl items-start gap-8 lg:grid-cols-2">
              {/* Meanwhile Card */}
              <Card className="bg-brand-dark/60 group relative overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-brand-coral/20 via-white to-brand-red/20">
                <div className="absolute top-4 right-4 z-10">
                  <div className="inline-flex items-center rounded-full bg-brand-mint/80 px-3 py-1 text-xs font-medium text-brand-neon border border-brand-neon/30">
                    Available Now
                  </div>
                </div>

                <CardHeader className="relative pb-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="p-3 rounded-xl bg-brand-dark shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                      <BookOpen className="h-8 w-8 text-brand-mint" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl text-brand-mint">
                        Meanwhile
                      </CardTitle>
                      <p className="text-sm text-white mt-1">
                        Daily Writing Companion
                      </p>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="relative space-y-6">
                  <div className="aspect-video relative rounded-lg overflow-hidden bg-gradient-to-br from-brand-coral/20 to-brand-red/20">
                    <Image
                      src="/images/meanwhile-preview.png"
                      alt="Meanwhile daily writing app interface showing clean, minimalist design"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <div className="space-y-4">
                    <p className="text-white leading-relaxed">
                      A thoughtfully designed daily writing companion that helps
                      you develop a consistent writing practice through
                      human-crafted prompts, streak tracking, and
                      privacy-focused design.
                    </p>

                    <div className="space-y-3">
                      <h4 className="font-semibold text-brand-mint">
                        Key Features:
                      </h4>
                      <ul className="text-sm text-white space-y-1">
                        <li>• Human-crafted daily writing prompts</li>
                        <li>• Privacy-focused, distraction-free writing</li>
                        <li>• Streak tracking and progress insights</li>
                        <li>• Beautiful, minimalist iOS design</li>
                      </ul>
                    </div>

                    <div className="flex gap-3 pt-4">
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
                          className="border-2 border-[#416165] text-[#416165] bg-white font-semibold px-6 py-2 rounded-lg hover:bg-[#416165] hover:text-white transition-all duration-200"
                        >
                          App Store
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Myriad Worlds Card */}
              <Card className="bg-brand-dark/60 group relative overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 ">
                <div className="absolute top-4 right-4 z-10">
                  <div className="inline-flex items-center rounded-full bg-brand-pink px-3 py-1 text-xs font-medium text-brand-purple border border-brand-purple/30">
                    Coming Soon
                  </div>
                </div>

                <CardHeader className="relative pb-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="p-3 rounded-xl bg-brand-dark shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                      <Earth className="h-8 w-8 text-brand-mint" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl text-brand-mint">
                        Myriad Worlds
                      </CardTitle>
                      <p className="text-sm text-white mt-1">
                        Creative Storytelling
                      </p>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="relative space-y-6">
                  <div className="aspect-video relative rounded-lg overflow-hidden bg-gradient-to-br from-brand-purple/20 to-brand-neon/10">
                    <Image
                      src="/assets/myriadworlds_mockup.png"
                      alt="Myriad Worlds creative storytelling app interface preview"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <div className="space-y-4">
                    <p className="text-white leading-relaxed">
                      A creative storytelling app featuring Creative Commons
                      licensed content. Use our human-generated stories as
                      starting points for your own creative adventures.
                    </p>

                    <div className="space-y-3">
                      <h4 className="font-semibold text-brand-mint">
                        Key Features:
                      </h4>
                      <ul className="text-sm text-white space-y-1">
                        <li>• Human-crafted stories and characters</li>
                        <li>• Creative Commons commercial licensing</li>
                        <li>• Rich storytelling worlds to explore</li>
                        <li>
                          • Tools to build your own characters, narratives, and
                          worlds
                        </li>
                      </ul>
                    </div>

                    <div className="flex gap-3 pt-4">
                      <Link href="/products/myriad-worlds">
                        <Button className="bg-gradient-to-r from-[#416165] to-[#b1e69b] text-white font-semibold px-6 py-2 rounded-lg shadow hover:from-[#416165]/90 hover:to-[#b1e69b]/90 transition-all duration-200">
                          Learn More
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                      <Link href="/contact">
                        <Button
                          variant="outline"
                          className="border-2 border-[#416165] text-[#416165] bg-white font-semibold px-6 py-2 rounded-lg hover:bg-[#416165] hover:text-white transition-all duration-200"
                        >
                          TestFlight
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-brand-dark via-brand-purple to-brand-neon text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                  Ready to Create?
                </h2>
                <p className="mx-auto max-w-[700px] text-white/90 md:text-xl">
                  Join our TestFlight to get early access to our creative tools
                  and be part of our community.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-2">
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="bg-brand-teal text-white font-semibold px-8 py-4 rounded-lg hover:bg-brand-mint hover:text-brand-dark transition-all duration-200"
                  >
                    Join TestFlight
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/about">
                  <Button
                    size="lg"
                    className="border-1 border-brand-mint text-white font-semibold px-8 py-4 rounded-lg hover:bg-brand-mint hover:text-[#416165] transition-all duration-200"
                  >
                    Learn About Us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
