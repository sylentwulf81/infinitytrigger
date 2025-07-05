import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Heart, Users, Palette, Code } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
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
                  We make tools that celebrate human creativity and put you in the driver's seat.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Mission Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl space-y-8 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Our Mission
              </h2>
              <div className="space-y-6">
                <p className="text-lg text-gray-500">
                  At Infinity Trigger, we believe human creativity should be celebrated, fostered, and encouraged. 
                  While we embrace technology, we always put humans at the center of everything we build.
                </p>
                <p className="text-lg text-gray-500">
                  Our mission is simple: create tools that amplify your creative potential without replacing your unique voice. 
                  Every piece of creative content we produce is human-generated, and our apps are designed to inspire and support your creative journey.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Values Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  What Drives Us
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                  The principles that guide how we build tools for creatives.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <Users className="h-5 w-5 text-blue-500" />
                    <CardTitle>Humans First</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500">
                    Technology should serve creativity, not replace it. We put humans in the driver's seat of every tool we build.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <Palette className="h-5 w-5 text-purple-500" />
                    <CardTitle>Celebrate Creativity</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500">
                    Every person has a unique creative voice. We build tools that amplify and celebrate that uniqueness.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <Heart className="h-5 w-5 text-red-500" />
                    <CardTitle>Human-Generated Content</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500">
                    All of our creative content is made by humans, for humans. We believe in authentic, human-crafted experiences.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <Code className="h-5 w-5 text-green-500" />
                    <CardTitle>Open & Accessible</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500">
                    We use Creative Commons licensing so creatives can build upon our work and use it as a starting point for their own stories.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to Create?
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                  Discover our tools designed to support and amplify your creative journey.
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
      </main>
    </div>
  );
}
