import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { ArrowRight, Code, Globe, Heart, Lightbulb, Users } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/logo.png"
              alt="Infinity Trigger Logo"
              width={32}
              height={32}
              className="rounded-full object-cover"
            />
            <span className="text-xl font-bold tracking-tight">Infinity Trigger</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="/#services" className="text-sm font-medium relative group">
              <span className="block">Services</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="/#clients" className="text-sm font-medium relative group">
              <span className="block">Clients</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="/about" className="text-sm font-medium relative group">
              <span className="block">About</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="/contact" className="text-sm font-medium relative group">
              <span className="block">Contact</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/contact" className="hidden md:block">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Get in Touch</Button>
            </Link>
            <Button variant="outline" size="icon" className="md:hidden">
              <span className="sr-only">Toggle menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  About Us
                </div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Story</h1>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  Founded in 2018, Infinity Trigger has grown from a small team of passionate developers to a
                  full-service web development company.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-3xl space-y-8 py-12">
              <p className="text-lg text-muted-foreground">
                Infinity Trigger was born out of a shared passion for creating exceptional digital experiences. Our
                founders, having worked in various tech companies across Japan, saw an opportunity to build a
                development studio that combined technical excellence with a deep understanding of user experience and
                business goals.
              </p>
              <p className="text-lg text-muted-foreground">
                Starting with just three developers in a small office in Nagano, we've grown to a team of talented
                designers, developers, and project managers who share our commitment to quality and innovation. Today,
                we work with clients from around the world, helping them transform their ideas into powerful digital
                solutions.
              </p>
              <p className="text-lg text-muted-foreground">
                Our name, "Infinity Trigger," represents our belief that technology can trigger infinite possibilities.
                We're committed to pushing boundaries and exploring new frontiers in web and mobile development, always
                with an eye toward creating solutions that make a real difference for our clients and their users.
              </p>
              <div className="relative h-64 w-full overflow-hidden rounded-lg">
                <Image src="/images/office.png" alt="Infinity Trigger Office" fill className="object-cover" />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Our Values
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-muted-foreground">
                  What Drives Us
                </h2>
                <p className="max-w-[900px] text-muted-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our core values guide everything we do, from how we work with clients to how we build our team.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <Card className="relative overflow-hidden bg-background">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20">
                    <Code className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Technical Excellence</h3>
                  <p className="text-muted-foreground">
                    We're committed to writing clean, efficient code and staying at the forefront of technology trends.
                  </p>
                </CardContent>
              </Card>
              <Card className="relative overflow-hidden bg-background">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Client Partnership</h3>
                  <p className="text-muted-foreground">
                    We view our clients as partners, working collaboratively to achieve their business goals.
                  </p>
                </CardContent>
              </Card>
              <Card className="relative overflow-hidden bg-background">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20">
                    <Lightbulb className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Innovation</h3>
                  <p className="text-muted-foreground">
                    We embrace new ideas and approaches, constantly seeking better ways to solve problems.
                  </p>
                </CardContent>
              </Card>
              <Card className="relative overflow-hidden bg-background md:col-span-2 lg:col-span-1">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20">
                    <Heart className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Passion</h3>
                  <p className="text-muted-foreground">
                    We love what we do, and that passion shows in the quality of our work and client relationships.
                  </p>
                </CardContent>
              </Card>
              <Card className="relative overflow-hidden bg-background md:col-span-2 lg:col-span-2">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20">
                    <Globe className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Global Perspective, Local Roots</h3>
                  <p className="text-muted-foreground">
                    Based in Nagano, Japan, we bring a unique blend of Japanese craftsmanship and global tech expertise
                    to every project.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Our Team
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Meet the Experts</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our talented team brings together diverse skills and experiences to deliver exceptional results.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-3">
              <Card className="overflow-hidden">
                <div className="aspect-square relative">
                  <Image src="/images/team-member1.png" alt="Team Member" fill className="object-cover" />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-bold text-lg">Hiroshi Tanaka</h3>
                  <p className="text-sm text-muted-foreground">Founder & Lead Developer</p>
                  <Separator className="my-3" />
                  <p className="text-sm text-muted-foreground">
                    With over 15 years of experience in web development, Hiroshi leads our technical team with expertise
                    in React, Node.js, and cloud architecture.
                  </p>
                </CardContent>
              </Card>
              <Card className="overflow-hidden">
                <div className="aspect-square relative">
                  <Image src="/images/team-member2.png" alt="Team Member" fill className="object-cover" />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-bold text-lg">Yuki Sato</h3>
                  <p className="text-sm text-muted-foreground">Creative Director</p>
                  <Separator className="my-3" />
                  <p className="text-sm text-muted-foreground">
                    Yuki brings a unique blend of design thinking and technical knowledge, ensuring our projects are
                    both beautiful and functional.
                  </p>
                </CardContent>
              </Card>
              <Card className="overflow-hidden">
                <div className="aspect-square relative">
                  <Image src="/images/team-member3.png" alt="Team Member" fill className="object-cover" />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-bold text-lg">Akiko Yamamoto</h3>
                  <p className="text-sm text-muted-foreground">Project Manager</p>
                  <Separator className="my-3" />
                  <p className="text-sm text-muted-foreground">
                    Akiko ensures our projects run smoothly from start to finish, with a keen eye for detail and a
                    talent for client communication.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-muted-foreground">
                  Ready to Work With Us?
                </h2>
                <p className="max-w-[900px] text-muted-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Let's discuss how we can help bring your ideas to life.
                </p>
              </div>
              <div className="mx-auto w-full max-w-sm space-y-2">
                <Link href="/contact">
                  <Button size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                    Contact Us Today
                    <ArrowRight className="ml-2 h-4 w-4" />
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
              © {new Date().getFullYear()} Infinity Trigger. All rights reserved.
            </p>
          </div>
          <nav className="flex gap-4 sm:gap-6">
            <Link href="/privacy-policy" className="text-sm font-medium hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-sm font-medium hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}

