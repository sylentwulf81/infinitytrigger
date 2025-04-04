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
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                    iOS App
                  </div>
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-muted-foreground">
                    Meanwhile
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground/80 md:text-xl/relaxed">
                    A daily writing companion designed to encourage people to
                    develop a consistent writing practice through journaling,
                    guided prompts, and progress tracking.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row items-center">
                  <Link href="#" className="inline-block mt-4">
                    <Image
                      src="/images/app-store-badge.svg"
                      alt="Download on the App Store"
                      width={150}
                      height={50}
                    />
                  </Link>
                  <Link href="/contact">
                    <Button
                      size="lg"
                      className="w-full min-[400px]:w-auto group relative overflow-hidden bg-primary text-primary-foreground hover:bg-primary/90"
                    >
                      <span className="relative z-10">
                        Discuss a Similar Project
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
                  About the Project
                </h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  Meanwhile is a thoughtfully designed iOS application that
                  helps users establish and maintain a daily writing habit.
                </p>
              </div>
            </div>

            <div className="grid gap-12 lg:grid-cols-2">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold">The Challenge</h3>
                <p className="text-muted-foreground">
                  Many people want to write more regularly but struggle with
                  consistency and motivation. Traditional journaling apps often
                  lack the specific features needed to build a sustainable
                  writing habit.
                </p>
                <p className="text-muted-foreground">
                  Our client approached us with a vision for an app that would
                  specifically focus on helping users develop a daily writing
                  practice through gentle encouragement, thoughtful prompts, and
                  a distraction-free writing environment.
                </p>

                <h3 className="text-2xl font-bold mt-8">Our Approach</h3>
                <p className="text-muted-foreground">
                  We worked closely with the client to understand the psychology
                  behind habit formation and what makes writing apps effective.
                  Our approach focused on:
                </p>
                <ul className="space-y-2 text-muted-foreground">
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

        <section className="w-full py-12 md:py-24 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl text-muted-foreground">
                  Key Features
                </h2>
                <p className="max-w-[700px] text-muted-foreground/80 md:text-xl">
                  Meanwhile combines thoughtful design with practical features
                  to make daily writing effortless.
                </p>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card className="bg-background">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20">
                    <Calendar className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Daily Reminders</h3>
                  <p className="text-muted-foreground">
                    Customizable notifications to help users maintain their
                    writing streak and build a consistent habit.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-background">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20">
                    <Edit3 className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Distraction-Free Editor</h3>
                  <p className="text-muted-foreground">
                    A clean, minimalist writing environment that helps users
                    focus solely on their thoughts and words.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-background">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20">
                    <Zap className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Writing Prompts</h3>
                  <p className="text-muted-foreground">
                    A curated library of thought-provoking prompts and writing
                    guides covering fiction fundamentals, creativity techniques,
                    and personal growth.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-background">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20">
                    <Star className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Streak Tracking</h3>
                  <p className="text-muted-foreground">
                    Visual representation of writing consistency with current
                    streaks, lifetime counts, and personal bests to motivate
                    users to maintain their daily practice.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-background">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20">
                    <Smartphone className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">iOS Integration</h3>
                  <p className="text-muted-foreground">
                    Seamless integration with iOS features including iCloud
                    sync, dark mode, and accessibility options.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-background">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20">
                    <ArrowRight className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Export Options</h3>
                  <p className="text-muted-foreground">
                    Multiple ways to export writings, including text files,
                    PDFs, and direct sharing to other applications.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                  Technical Details
                </h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  Meanwhile was built using modern iOS development technologies
                  to ensure performance and reliability.
                </p>
              </div>
            </div>

            <div className="grid gap-12 lg:grid-cols-2">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold">Technologies Used</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Swift</strong> - For native iOS development with
                      optimal performance
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>SwiftUI</strong> - For building the modern,
                      responsive user interface
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Core Data</strong> - For efficient local data
                      storage and management
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>CloudKit</strong> - For seamless data
                      synchronization across devices
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>UserNotifications</strong> - For implementing the
                      reminder system
                    </span>
                  </li>
                </ul>

                <h3 className="text-2xl font-bold mt-8">Development Process</h3>
                <p className="text-muted-foreground">
                  We followed an agile development methodology, working closely
                  with the client through each iteration. The process included:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Initial discovery and requirements gathering</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>UX/UI design with multiple rounds of feedback</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Iterative development with bi-weekly demos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>
                      Comprehensive testing across multiple iOS devices
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>App Store submission and launch support</span>
                  </li>
                </ul>
              </div>

              <div className="flex items-center justify-center">
                <div className="relative w-[280px] h-[560px] bg-black rounded-[40px] overflow-hidden border-[8px] border-black shadow-xl">
                  <div className="absolute top-0 w-[120px] h-[30px] bg-black left-1/2 transform -translate-x-1/2 rounded-b-[18px] z-10"></div>
                  <Image
                    src="/images/meanwhile-screen6.png"
                    alt="Meanwhile App - Journal Interface"
                    fill
                    className="object-cover rounded-[32px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl text-muted-foreground">
                  Start Your Writing Journey
                </h2>
                <p className="max-w-[700px] text-muted-foreground/80 md:text-xl">
                  Ready to build a consistent writing habit? Download Meanwhile
                  and discover the benefits of daily journaling.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                  Interested in a Similar Project?
                </h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  Let's discuss how we can help bring your mobile app idea to
                  life with the same attention to detail and user-focused
                  approach.
                </p>
              </div>
              <div className="mx-auto w-full max-w-sm space-y-2">
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                  >
                    Contact Us Today
                    <ArrowRight className="ml-2 h-4 w-4" />
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
