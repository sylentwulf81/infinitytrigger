import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  Calendar,
  Check,
  Edit3,
  Smartphone,
  Star,
  Zap,
} from "lucide-react";

export default function MeanwhileProjectPage() {
  return (
    <div className="flex flex-col">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                    iOS App
                  </div>
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-900">
                    Meanwhile
                  </h1>
                  <p className="max-w-[600px] text-gray-600 md:text-xl/relaxed">
                    A daily writing companion designed to encourage people to
                    develop a consistent writing practice through journaling,
                    guided prompts, and progress tracking.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row items-center">
                  <Link 
                    href="https://apps.apple.com/us/app/meanwhile-daily-writing/id6742810856" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4"
                  >
                    <div className="bg-black text-white px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-gray-800 transition-colors">
                      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                      </svg>
                      <span>Download on App Store</span>
                    </div>
                  </Link>
                  <Link href="/contact">
                    <Button
                      size="lg"
                      className="w-full min-[400px]:w-auto group relative overflow-hidden bg-primary text-primary-foreground hover:bg-primary/90"
                    >
                      <span className="relative z-10">
                        Contact Us
                      </span>
                      <span className="absolute inset-0 bg-primary-foreground/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                      <ArrowRight className="ml-2 h-4 w-4 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative w-[280px] h-[560px] bg-black rounded-[40px] overflow-hidden border-[8px] border-black shadow-xl">
                  <div className="absolute top-0 w-[120px] h-[30px] bg-black left-1/2 transform -translate-x-1/2 rounded-b-[18px] z-10"></div>
                  <Image
                    src="/images/meanwhile-screen1.png"
                    alt="Meanwhile App Screenshot - Journal View"
                    fill
                    className="object-cover rounded-[32px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                  About Meanwhile
                </h2>
                <p className="max-w-[700px] text-gray-600 md:text-xl">
                  Meanwhile is a thoughtfully designed iOS application that
                  helps users establish and maintain a daily writing habit.
                </p>
              </div>
            </div>

            <div className="grid gap-12 lg:grid-cols-2">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900">The Inspiration</h3>
                <p className="text-gray-700 leading-relaxed">
                  Many people want to write more regularly but struggle with
                  consistency and motivation. Traditional journaling apps often
                  lack the specific features needed to build a sustainable
                  writing habit.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  We created Meanwhile with a vision for an app that would
                  specifically focus on helping users develop a daily writing
                  practice through gentle encouragement, thoughtful prompts, and
                  a distraction-free writing environment.
                </p>

                <h3 className="text-2xl font-bold mt-8 text-gray-900">Our Approach</h3>
                <p className="text-gray-700 leading-relaxed">
                  We focused on understanding the psychology behind habit formation 
                  and what makes writing apps effective. Our approach centered on:
                </p>
                <ul className="space-y-2 text-gray-700 leading-relaxed">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>
                      Creating a minimalist, distraction-free writing
                      environment
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>
                      Implementing gentle reminders and streak tracking to build
                      consistency
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>
                      Developing a library of thoughtful writing prompts to
                      inspire users
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>
                      Designing an intuitive interface that gets out of the way
                      of the writing process
                    </span>
                  </li>
                </ul>
              </div>

              <div className="flex items-center justify-center">
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative w-[160px] h-[320px] bg-black rounded-[24px] overflow-hidden border-[6px] border-black shadow-lg">
                    <Image
                      src="/images/meanwhile-screen2.png"
                      alt="Meanwhile App - Writing Guides"
                      fill
                      className="object-cover rounded-[18px]"
                    />
                  </div>
                  <div className="relative w-[160px] h-[320px] bg-black rounded-[24px] overflow-hidden border-[6px] border-black shadow-lg">
                    <Image
                      src="/images/meanwhile-screen3.png"
                      alt="Meanwhile App - Progress Tracking"
                      fill
                      className="object-cover rounded-[18px]"
                    />
                  </div>
                  <div className="relative w-[160px] h-[320px] bg-black rounded-[24px] overflow-hidden border-[6px] border-black shadow-lg">
                    <Image
                      src="/images/meanwhile-screen4.png"
                      alt="Meanwhile App - Collection View"
                      fill
                      className="object-cover rounded-[18px]"
                    />
                  </div>
                  <div className="relative w-[160px] h-[320px] bg-black rounded-[24px] overflow-hidden border-[6px] border-black shadow-lg">
                    <Image
                      src="/images/meanwhile-screen5.png"
                      alt="Meanwhile App - Writing Benefits"
                      fill
                      className="object-cover rounded-[18px]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl text-gray-900">
                  Key Features
                </h2>
                <p className="max-w-[700px] text-gray-600 md:text-xl">
                  Meanwhile combines thoughtful design with practical features
                  to make daily writing effortless.
                </p>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card className="bg-gray-50 border-gray-100">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20">
                    <Calendar className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Daily Prompts</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Thoughtfully curated writing prompts to inspire daily
                    reflection and creativity.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-gray-50 border-gray-100">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20">
                    <Zap className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Streak Tracking</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Visual progress tracking to help maintain consistency and
                    build lasting habits.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-gray-50 border-gray-100">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20">
                    <Edit3 className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Distraction-Free Writing</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Clean, minimalist interface designed to keep you focused on
                    your thoughts.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-gray-50 border-gray-100">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20">
                    <Smartphone className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Mobile Optimized</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Designed specifically for iOS with native performance and
                    intuitive gestures.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-gray-50 border-gray-100">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20">
                    <Star className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Progress Insights</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Track your writing journey with meaningful statistics and
                    achievements.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl text-gray-900">
                  Ready to Start Writing?
                </h2>
                <p className="max-w-[700px] text-gray-600 md:text-xl">
                  Download Meanwhile from the App Store and start your daily writing journey today.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link 
                  href="https://apps.apple.com/us/app/meanwhile-daily-writing/id6742810856" 
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    size="lg"
                    className="w-full min-[400px]:w-auto bg-primary text-primary-foreground hover:bg-primary/90"
                  >
                    Download on App Store
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/products">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full min-[400px]:w-auto hover:bg-gray-100"
                  >
                    Explore Our Other Products
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
