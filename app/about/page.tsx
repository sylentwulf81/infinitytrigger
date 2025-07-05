import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Heart, Users, Palette, Code, Sparkles, Lightbulb } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        {/* Hero Section with Gradient */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-blue-50 via-white to-green-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-8 text-center">
              <div className="space-y-6">
                <div className="inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-medium bg-white/70 backdrop-blur-sm border-blue-200/50 text-blue-700">
                  <Sparkles className="w-4 h-4 mr-2" />
                  Our Mission
                </div>
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl bg-gradient-to-r from-blue-900 via-green-900 to-gray-900 bg-clip-text text-transparent">
                  Tools for Creatives, Humans First
                </h1>
                <p className="mx-auto max-w-[700px] text-lg text-gray-600 md:text-xl">
                  We make tools that celebrate human creativity and put you in the driver's seat.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Mission Section with Enhanced Design */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-4xl space-y-12">
              <div className="text-center space-y-6">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Our Mission
                </h2>
              </div>
              
              <div className="grid gap-8 md:grid-cols-2 items-center">
                <div className="space-y-6">
                  <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-green-50 border border-blue-100">
                    <p className="text-lg text-gray-700 leading-relaxed">
                      At Infinity Trigger, we believe human creativity should be celebrated, fostered, and encouraged. 
                      While we embrace technology, we always put humans at the center of everything we build.
                    </p>
                  </div>
                  <div className="p-6 rounded-2xl bg-gradient-to-br from-green-50 to-blue-50 border border-green-100">
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Our mission is simple: create tools that amplify your creative potential without replacing your unique voice. 
                      Every piece of creative content we produce is human-generated, and our apps are designed to inspire and support your creative journey.
                    </p>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-200 to-green-200 rounded-2xl transform rotate-3"></div>
                  <div className="relative bg-white p-8 rounded-2xl shadow-xl border">
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <div className="p-2 rounded-lg bg-blue-100">
                          <Heart className="h-6 w-6 text-blue-600" />
                        </div>
                        <h3 className="text-xl font-semibold">Human-Generated</h3>
                      </div>
                      <p className="text-gray-600">
                        Every story, prompt, and piece of content is crafted by real humans who pour their creativity into each work.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Values Section with Enhanced Cards */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-gray-50 to-blue-50/30">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center mb-16">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  What Drives Us
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
                  The principles that guide how we build tools for creatives.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-6xl items-stretch gap-8 md:grid-cols-2 lg:grid-cols-4">
              <Card className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-blue-50 to-blue-100 h-80 flex flex-col">
                <CardHeader className="relative flex-shrink-0">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="p-4 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Users className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl">Humans First</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="relative text-center flex-1 flex items-center">
                  <p className="text-gray-600 leading-relaxed">
                    Technology should serve creativity, not replace it. We put humans in the driver's seat of every tool we build.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-purple-50 to-purple-100 h-80 flex flex-col">
                <CardHeader className="relative flex-shrink-0">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="p-4 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-600 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Palette className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl">Celebrate Creativity</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="relative text-center flex-1 flex items-center">
                  <p className="text-gray-600 leading-relaxed">
                    Every person has a unique creative voice. We build tools that amplify and celebrate that uniqueness.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-red-50 to-red-100 h-80 flex flex-col">
                <CardHeader className="relative flex-shrink-0">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="p-4 rounded-2xl bg-gradient-to-br from-red-500 to-red-600 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Heart className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl">Human-Generated Content</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="relative text-center flex-1 flex items-center">
                  <p className="text-gray-600 leading-relaxed">
                    All of our creative content is made by humans, for humans. We believe in authentic, human-crafted experiences.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-green-50 to-green-100 h-80 flex flex-col">
                <CardHeader className="relative flex-shrink-0">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="p-4 rounded-2xl bg-gradient-to-br from-green-500 to-green-600 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Code className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl">Open & Accessible</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="relative text-center flex-1 flex items-center">
                  <p className="text-gray-600 leading-relaxed">
                    We use Creative Commons licensing so creatives can build upon our work and use it as a starting point for their own stories.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section with Gradient */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-blue-600 to-green-600 text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-6 text-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                  Ready to Create?
                </h2>
                <p className="mx-auto max-w-[700px] text-blue-100 md:text-xl">
                  Discover our tools designed to support and amplify your creative journey.
                </p>
              </div>
              <div className="flex flex-col gap-4 min-[400px]:flex-row">
                <Link href="/products">
                  <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-600 hover:text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                    Explore Our Products
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 backdrop-blur-sm transition-all duration-300">
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
