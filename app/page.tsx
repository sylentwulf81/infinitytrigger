import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Heart, Palette, Sparkles, Users, Lightbulb } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section with Gradient */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-blue-50 via-white to-purple-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-8 text-center">
              <div className="space-y-6">
                {/* Hero Badge */}
                <div className="inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-medium bg-white/70 backdrop-blur-sm border-blue-200/50 text-blue-700">
                  <Sparkles className="w-4 h-4 mr-2" />
                  Tools for Creatives
                </div>
                
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent">
                  Humans First, Always
                </h1>
                <p className="mx-auto max-w-[700px] text-lg text-gray-600 md:text-xl">
                  We build creative tools that celebrate human creativity and put you in the driver's seat. 
                  Every piece of content is human-generated, designed to inspire your creative journey.
                </p>
              </div>
              <div className="flex flex-col gap-4 min-[400px]:flex-row">
                <Link href="/products">
                  <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                    Explore Our Products
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg" variant="outline" className="border-2 border-gray-300 bg-white text-gray-900 hover:bg-gray-900 hover:text-white backdrop-blur-sm transition-all duration-300">
                    Join TestFlight
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Products Section with Enhanced Cards */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center mb-12">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Our Products
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
                  Creative tools designed to inspire and support your creative process.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-8 lg:grid-cols-2">
              {/* Meanwhile Card */}
              <Card className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-red-50 to-pink-50">
                <CardHeader className="relative">
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="p-2 rounded-lg bg-red-100 group-hover:bg-red-200 transition-colors duration-300">
                      <Heart className="h-6 w-6 text-red-600" />
                    </div>
                    <CardTitle className="text-xl">Meanwhile</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="relative">
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    A daily writing companion that helps you develop a consistent writing practice with human-crafted prompts and privacy-focused design.
                  </p>
                  <div className="flex gap-3">
                    <Link href="/products/meanwhile">
                      <Button className="bg-red-600 hover:bg-red-700 transition-colors duration-300">
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                    <Link href="https://apps.apple.com/us/app/meanwhile-daily-writing/id6742810856" target="_blank">
                      <Button variant="outline" className="border-red-200 hover:bg-red-600 hover:text-white">
                        App Store
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>

              {/* Myriad Worlds Card */}
              <Card className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-purple-50 to-blue-50">
                <CardHeader className="relative">
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="p-2 rounded-lg bg-purple-100 group-hover:bg-purple-200 transition-colors duration-300">
                      <Palette className="h-6 w-6 text-purple-600" />
                    </div>
                    <CardTitle className="text-xl">Myriad Worlds</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="relative">
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    A creative storytelling app with Creative Commons licensed content. Use our human-generated stories as starting points for your own adventures.
                  </p>
                  <div className="flex gap-3">
                    <Link href="/products/myriad-worlds">
                      <Button className="bg-purple-600 hover:bg-purple-700 transition-colors duration-300">
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                    <Link href="/contact">
                      <Button variant="outline" className="border-purple-200 hover:bg-purple-600 hover:text-white">
                        TestFlight
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Values Section with Icons */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-gray-50 to-blue-50/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center mb-12">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Humans First, Always
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
                  At Infinity Trigger, we believe human creativity should be celebrated, fostered, and encouraged.
                </p>
              </div>
            </div>
            
            {/* Values Grid */}
            <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3 mb-12">
              <div className="flex flex-col items-center text-center space-y-4 p-6">
                <div className="p-4 rounded-full bg-blue-100">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold">Human-Centered</h3>
                <p className="text-gray-600">Technology should serve creativity, not replace it. We put humans in control.</p>
              </div>
              <div className="flex flex-col items-center text-center space-y-4 p-6">
                <div className="p-4 rounded-full bg-purple-100">
                  <Lightbulb className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold">Celebrate Creativity</h3>
                <p className="text-gray-600">Every person has a unique creative voice. We build tools that amplify it.</p>
              </div>
              <div className="flex flex-col items-center text-center space-y-4 p-6">
                <div className="p-4 rounded-full bg-green-100">
                  <Heart className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold">Authentic Content</h3>
                <p className="text-gray-600">All our creative content is made by humans, for humans.</p>
              </div>
            </div>

            <div className="flex justify-center">
              <Link href="/about">
                <Button size="lg" variant="outline" className="border-2 border-gray-300 hover:bg-gray-900 hover:text-white">
                  Learn More About Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Contact Section with Gradient */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-blue-600 to-purple-700 text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                  Ready to Create?
                </h2>
                <p className="mx-auto max-w-[700px] text-blue-100 md:text-xl">
                  Join our TestFlight to get early access to our creative tools and be part of our community.
                </p>
              </div>
              <div className="flex flex-col gap-4 min-[400px]:flex-row">
                <Link href="/contact">
                  <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-600 hover:text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                    Join TestFlight
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/products">
                  <Button size="lg" variant="outline" className="border-2 border-white bg-white text-blue-600 hover:bg-blue-600 hover:text-white shadow-lg hover:shadow-xl transition-all duration-300">
                    Explore Our Products
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
