import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Heart, BookOpen, Share2 } from "lucide-react";
import { BrandButton, BrandButtonAlt } from "@/components/BrandButton";
import { ArrowRight } from "lucide-react";

export default function MyriadWorldsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  Myriad Worlds
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                  A creative storytelling app featuring Creative Commons licensed content. 
                  Use our human-generated stories as starting points for your own creative adventures.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="https://testflight.apple.com/join/uJVk52wq" target="_blank" rel="noopener noreferrer">
                  <BrandButton>
                    Join TestFlight
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </BrandButton>
                </Link>
                <Link href="/products">
                  <Button size="lg" variant="outline" className="hover:bg-gray-100">
                    View All Products
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-2">
              <div className="flex flex-col justify-center space-y-6">
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    Stories by Humans, for Humans
                  </h2>
                  <p className="text-lg text-gray-500">
                    Every story, character, and world in Myriad Worlds is crafted by human writers. 
                    We believe in the power of human imagination and creativity.
                  </p>
                  <p className="text-lg text-gray-500">
                    All content is released under Creative Commons licensing, so you can use our stories 
                    as inspiration, adapt them, or build upon them for your own creative projects.
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="aspect-square relative overflow-hidden rounded-lg max-w-md">
                  <Image
                    src="/Assets/myriadworlds_mockup.png"
                    alt="Myriad Worlds Creative Commons"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Built for Creative Freedom
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                  Myriad Worlds is designed to inspire and support your creative journey.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-3">
              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <Heart className="h-5 w-5 text-red-500" />
                    <CardTitle>Human-Crafted Content</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500">
                    Every story is written by human authors who pour their creativity and passion into each piece.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <Share2 className="h-5 w-5 text-blue-500" />
                    <CardTitle>Creative Commons</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500">
                    Use our stories as starting points for your own creative works under Creative Commons licensing.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <BookOpen className="h-5 w-5 text-green-500" />
                    <CardTitle>Rich Storytelling</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500">
                    Explore diverse worlds, characters, and narratives that spark your imagination.
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
                  Ready to Explore?
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                  Join our TestFlight to get early access to Myriad Worlds and start exploring human-crafted stories.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-2">
                <Link href="https://testflight.apple.com/join/uJVk52wq" target="_blank" rel="noopener noreferrer">
                  <BrandButton>
                    Join TestFlight
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </BrandButton>
                </Link>
                <Link href="/products">
                  <Button size="lg" variant="outline" className="hover:bg-gray-100">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Products
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