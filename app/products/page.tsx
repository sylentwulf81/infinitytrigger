import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Heart, Palette, Download, TestTube, Sparkles } from "lucide-react";

export default function ProductsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        {/* Hero Section with Gradient */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-purple-50 via-white to-blue-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-8 text-center">
              <div className="space-y-6">
                <div className="inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-medium bg-white/70 backdrop-blur-sm border-purple-200/50 text-purple-700">
                  <Sparkles className="w-4 h-4 mr-2" />
                  Creative Tools
                </div>
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl bg-gradient-to-r from-purple-900 via-blue-900 to-gray-900 bg-clip-text text-transparent">
                  Our Products
                </h1>
                <p className="mx-auto max-w-[700px] text-lg text-gray-600 md:text-xl">
                  Tools designed to inspire and support your creative process. Each product puts your creativity first, 
                  and helps you express your unique creative voice.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">
              {/* Meanwhile Card - Enhanced */}
              <Card className="group relative overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-red-50 via-pink-50 to-red-50">
                <div className="absolute top-4 right-4 z-10">
                  <div className="inline-flex items-center rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
                    Available Now
                  </div>
                </div>
                
                <CardHeader className="relative pb-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-red-500 to-pink-500 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                      <Heart className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl">Meanwhile</CardTitle>
                      <p className="text-sm text-gray-500 mt-1">Daily Writing Companion</p>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="relative space-y-6">
                  <div className="aspect-video relative rounded-lg overflow-hidden bg-gradient-to-br from-red-100 to-pink-100">
                    <Image
                      src="/images/meanwhile-preview.png"
                      alt="Meanwhile daily writing app interface showing clean, minimalist design"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  
                  <div className="space-y-4">
                    <p className="text-gray-600 leading-relaxed">
                      A thoughtfully designed daily writing companion that helps you develop a consistent 
                      writing practice through human-crafted prompts, streak tracking, and privacy-focused design.
                    </p>
                    
                    <div className="space-y-3">
                      <h4 className="font-semibold text-gray-900">Key Features:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Human-crafted daily writing prompts</li>
                        <li>• Privacy-focused, distraction-free writing</li>
                        <li>• Streak tracking and progress insights</li>
                        <li>• Beautiful, minimalist iOS design</li>
                      </ul>
                    </div>
                    
                    <div className="flex gap-3 pt-4">
                      <Link href="/products/meanwhile">
                        <Button className="bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white shadow-lg hover:shadow-xl transition-all duration-300">
                          Learn More
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                      <Link 
                        href="https://apps.apple.com/us/app/meanwhile-daily-writing/id6742810856" 
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button variant="outline" className="border-2 border-red-200 text-red-600 hover:bg-red-600 hover:text-white transition-all duration-300">
                          <Download className="mr-2 h-4 w-4" />
                          App Store
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Myriad Worlds Card - Enhanced */}
              <Card className="group relative overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-purple-50 via-blue-50 to-purple-50">
                <div className="absolute top-4 right-4 z-10">
                  <div className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700">
                    Coming Soon
                  </div>
                </div>
                
                <CardHeader className="relative pb-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500 to-blue-500 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                      <Palette className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl">Myriad Worlds</CardTitle>
                      <p className="text-sm text-gray-500 mt-1">Creative Storytelling</p>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="relative space-y-6">
                  <div className="aspect-video relative rounded-lg overflow-hidden bg-gradient-to-br from-purple-100 to-blue-100">
                    <Image
                      src="/assets/myriadworlds_mockup.png"
                      alt="Myriad Worlds creative storytelling app with colorful interface"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  
                  <div className="space-y-4">
                    <p className="text-gray-600 leading-relaxed">
                      A creative storytelling app featuring Creative Commons licensed content. 
                      Use our human-generated stories as starting points for your own creative adventures.
                    </p>
                    
                    <div className="space-y-3">
                      <h4 className="font-semibold text-gray-900">Key Features:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Human-crafted stories and characters</li>
                        <li>• Creative Commons commercial licensing</li>
                        <li>• Rich storytelling worlds to explore</li>
                        <li>• Tools to build your own characters, narratives, and worlds</li>
                      </ul>
                    </div>
                    
                    <div className="flex gap-3 pt-4">
                      <Link href="/products/myriad-worlds">
                        <Button className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white shadow-lg hover:shadow-xl transition-all duration-300">
                          Learn More
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                      <Link href="/contact">
                        <Button variant="outline" className="border-2 border-purple-200 text-purple-600 hover:bg-purple-600 hover:text-white transition-all duration-300">
                          <TestTube className="mr-2 h-4 w-4" />
                          Join Our Community
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section with Gradient */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-6 text-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                  Ready to Get Started?
                </h2>
                <p className="mx-auto max-w-[700px] text-blue-100 md:text-xl">
                  Download Meanwhile from the App Store or join our TestFLight waiting list to try Myriad Worlds.
                </p>
              </div>
              <div className="flex flex-col gap-4 min-[400px]:flex-row">
                <Link 
                  href="https://apps.apple.com/us/app/meanwhile-daily-writing/id6742810856" 
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100 border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                    <Download className="mr-2 h-4 w-4" />
                    Download Meanwhile
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-gray-900 backdrop-blur-sm transition-all duration-300">
                    <TestTube className="mr-2 h-4 w-4" />
                    Join Waiting List
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
