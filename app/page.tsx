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
        <section className="w-full py-12 md:py-24 lg:py-32 bg-rosequartz">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-8 text-center">
              <div className="space-y-6">
                {/* Hero Badge */}
                <div className="inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-medium bg-lime/70 backdrop-blur-sm border-cordovan/50 text-chinarose">
                  <Sparkles className="w-4 h-4 mr-2" />
                  Tools for Creatives
                </div>
                
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl bg-gradient-to-r from-russianviolet via-chinarose to-cordovan bg-clip-text text-transparent">
                  Creatives First, Always
                </h1>
                <p className="mx-auto max-w-[700px] text-lg text-cordovan md:text-xl">
                  We build creative tools that celebrate and foster creativity and put you in the driver's seat. 
                  Every piece of content is human-generated, designed to inspire your creative journey.
                </p>
              </div>
              <div className="flex flex-col gap-4 min-[400px]:flex-row">
                <Link href="/products">
                  <Button size="lg" className="bg-chinarose text-lime border-0 shadow-lg hover:bg-russianviolet hover:text-lime transition-all duration-300">
                    Explore Our Products
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg" variant="outline" className="border-2 border-cordovan text-chinarose hover:bg-lime hover:text-russianviolet backdrop-blur-sm transition-all duration-300">
                    Get In Touch
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Products Section with Enhanced Cards */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center mb-12">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-russianviolet">
                  Our Products
                </h2>
                <p className="mx-auto max-w-[700px] text-cordovan md:text-xl">
                  Creative tools designed to inspire and support your creative process.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-8 lg:grid-cols-2">
              {/* Meanwhile Card */}
              <Card className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 bg-rosequartz">
                <CardHeader className="relative">
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="p-2 rounded-lg bg-lime/30 group-hover:bg-lime/50 transition-colors duration-300">
                      <Heart className="h-6 w-6 text-chinarose" />
                    </div>
                    <CardTitle className="text-xl text-chinarose">Meanwhile</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="relative">
                  <p className="text-cordovan mb-6 leading-relaxed">
                    A daily writing companion that helps you develop a consistent writing practice with human-crafted prompts and privacy-focused design.
                  </p>
                  <div className="flex gap-3">
                    <Link href="/products/meanwhile">
                      <Button className="bg-chinarose text-lime hover:bg-russianviolet hover:text-lime transition-colors duration-300">
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                    <Link href="https://apps.apple.com/us/app/meanwhile-daily-writing/id6742810856" target="_blank">
                      <Button variant="outline" className="border-cordovan text-chinarose hover:bg-lime hover:text-russianviolet">
                        App Store
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>

              {/* Myriad Worlds Card */}
              <Card className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 bg-rosequartz">
                <CardHeader className="relative">
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="p-2 rounded-lg bg-lime/30 group-hover:bg-lime/50 transition-colors duration-300">
                      <Palette className="h-6 w-6 text-chinarose" />
                    </div>
                    <CardTitle className="text-xl text-chinarose">Myriad Worlds</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="relative">
                  <Image
                    src="/assets/myriadworlds_mockup.png"
                    alt="Myriad Worlds creative storytelling app interface preview"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <p className="text-cordovan mb-6 leading-relaxed">
                    A creative storytelling app with Creative Commons licensed content. Use our human-generated stories as starting points for your own adventures.
                  </p>
                  <div className="flex gap-3">
                    <Link href="/products/myriad-worlds">
                      <Button className="bg-chinarose text-lime hover:bg-russianviolet hover:text-lime transition-colors duration-300">
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                    <Link href="/contact">
                      <Button variant="outline" className="border-cordovan text-chinarose hover:bg-lime hover:text-russianviolet">
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
        <section className="w-full py-12 md:py-24 lg:py-32 bg-rosequartz">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center mb-12">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-russianviolet">
                  Human-Driven Creativity
                </h2>
                <p className="mx-auto max-w-[700px] text-cordovan md:text-xl">
                  At Infinity Trigger, we believe human creativity should be celebrated, fostered, and encouraged.
                </p>
              </div>
            </div>
            
            {/* Values Grid */}
            <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3 mb-12">
              <div className="flex flex-col items-center text-center space-y-4 p-6">
                <div className="p-4 rounded-full bg-lime/30">
                  <Users className="h-8 w-8 text-chinarose" />
                </div>
                <h3 className="text-xl font-semibold text-chinarose">Human-Centered</h3>
                <p className="text-cordovan">Technology should serve creativity, not replace it. We put humans in control.</p>
              </div>
              <div className="flex flex-col items-center text-center space-y-4 p-6">
                <div className="p-4 rounded-full bg-lime/30">
                  <Lightbulb className="h-8 w-8 text-chinarose" />
                </div>
                <h3 className="text-xl font-semibold text-chinarose">Celebrate Creativity</h3>
                <p className="text-cordovan">Every person has a unique creative voice. We build tools that amplify it.</p>
              </div>
              <div className="flex flex-col items-center text-center space-y-4 p-6">
                <div className="p-4 rounded-full bg-lime/30">
                  <Heart className="h-8 w-8 text-chinarose" />
                </div>
                <h3 className="text-xl font-semibold text-chinarose">Authentic Content</h3>
                <p className="text-cordovan">All our creative content is made by humans, for humans.</p>
              </div>
            </div>

            <div className="flex justify-center">
              <Link href="/about">
                <Button size="lg" variant="outline" className="border-2 border-cordovan text-chinarose hover:bg-lime hover:text-russianviolet">
                  Learn More About Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Contact Section with Gradient */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-chinarose to-russianviolet text-lime">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-lime">
                  Ready to Create?
                </h2>
                <p className="mx-auto max-w-[700px] text-chinarose md:text-xl">
                  Join our TestFlight to get early access to our creative tools and be part of our community.
                </p>
              </div>
              <div className="flex flex-col gap-4 min-[400px]:flex-row">
                <Link href="/contact">
                  <Button size="lg" className="bg-lime text-russianviolet hover:bg-chinarose hover:text-lime border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                    Join TestFlight
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/products">
                  <Button size="lg" variant="outline" className="border-2 border-lime text-lime hover:bg-chinarose hover:text-lime shadow-lg hover:shadow-xl transition-all duration-300">
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
