import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Heart, Palette } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  Tools for Creatives, Humans First
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                  We build creative tools that celebrate human creativity and put you in the driver's seat. 
                  Every piece of content is human-generated, designed to inspire your creative journey.
                </p>
              </div>
              <div className="space-x-4">
                <Link href="/products">
                  <Button size="lg">
                    Explore Our Products
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg" variant="outline">
                    Join TestFlight
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Our Products
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                  Creative tools designed to inspire and support your creative process.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2">
              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <Heart className="h-5 w-5 text-red-500" />
                    <CardTitle>Meanwhile</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500 mb-4">
                    A daily writing companion that helps you develop a consistent writing practice with human-crafted prompts and privacy-focused design.
                  </p>
                  <Link href="/products/meanwhile">
                    <Button variant="outline" size="sm">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <Palette className="h-5 w-5 text-purple-500" />
                    <CardTitle>Myriad Worlds</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500 mb-4">
                    A creative storytelling app with Creative Commons licensed content. Use our human-generated stories as starting points for your own adventures.
                  </p>
                  <Link href="/products/myriad-worlds">
                    <Button variant="outline" size="sm">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Humans First, Always
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                  At Infinity Trigger, we believe human creativity should be celebrated, fostered, and encouraged. 
                  We embrace technology but always put humans at the center of everything we build.
                </p>
              </div>
              <div className="space-x-4">
                <Link href="/about">
                  <Button size="lg">
                    Learn More About Us
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to Create?
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                  Join our TestFlight to get early access to our creative tools and be part of our community.
                </p>
              </div>
              <div className="space-x-4">
                <Link href="/contact">
                  <Button size="lg">
                    Join TestFlight
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/products">
                  <Button size="lg" variant="outline">
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
