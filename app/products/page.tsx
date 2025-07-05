import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Heart, Palette } from "lucide-react";

export default function ProductsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  Our Products
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                  Creative tools designed to inspire and support your creative journey.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              
              {/* Meanwhile */}
              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <Heart className="h-5 w-5 text-red-500" />
                    <CardTitle className="text-2xl">Meanwhile</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="aspect-video relative overflow-hidden rounded-lg">
                    <Image
                      src="/images/meanwhile-preview.png"
                      alt="Meanwhile - Daily Writing Companion"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p className="text-gray-500 leading-relaxed">
                    A daily writing companion for iOS that helps you develop a consistent writing practice. 
                    With guided prompts, progress tracking, and journaling tools, Meanwhile puts your creativity first.
                  </p>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <Heart className="h-4 w-4" />
                      <span>Human-crafted prompts</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span>•</span>
                      <span>Privacy-focused</span>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Link href="/products/meanwhile">
                      <Button>
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                    <Link 
                      href="https://apps.apple.com/us/app/meanwhile-daily-writing/id6742810856" 
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button variant="outline">
                        Download on App Store
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>

              {/* Myriad Worlds */}
              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <Palette className="h-5 w-5 text-purple-500" />
                    <CardTitle className="text-2xl">Myriad Worlds</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="aspect-video relative overflow-hidden rounded-lg">
                    <Image
                      src="/images/project2.png"
                      alt="Myriad Worlds - Creative Commons Content"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p className="text-gray-500 leading-relaxed">
                    A creative storytelling app featuring Creative Commons licensed content. 
                    Use our human-generated stories, characters, and worlds as starting points for your own creative adventures.
                  </p>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <Heart className="h-4 w-4" />
                      <span>Creative Commons</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span>•</span>
                      <span>Human-generated</span>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Link href="/products/myriad-worlds">
                      <Button>
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                    <Link href="/contact">
                      <Button variant="outline">
                        Join TestFlight
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to Get Started?
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                  Download Meanwhile from the App Store or join our TestFlight to try Myriad Worlds.
                </p>
              </div>
              <div className="space-x-4">
                <Link 
                  href="https://apps.apple.com/us/app/meanwhile-daily-writing/id6742810856" 
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="lg">
                    Download Meanwhile
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
      <footer className="w-full border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <div className="flex items-center gap-2">
            <Image
              src="/images/logo.png"
              alt="Infinity Trigger Logo"
              width={24}
              height={24}
              className="rounded-full object-cover"
            />
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Infinity Trigger. All rights
              reserved.
            </p>
          </div>
          <nav className="flex gap-4 sm:gap-6">
            <Link
              href="/privacy-policy"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-service"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Terms of Service
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}
