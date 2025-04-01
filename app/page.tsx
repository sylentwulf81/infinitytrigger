import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Code, Globe, Smartphone, Users } from "lucide-react";
import { ParallaxSection } from "@/components/parallax-section";

export default function Home() {
  return (
    <div className="flex flex-col">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Full-Stack Web Development from Nagano, Japan
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    We build beautiful, functional websites and mobile apps that
                    help businesses grow. From concept to deployment, we handle
                    every aspect of your digital presence.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/contact">
                    <Button
                      size="lg"
                      className="w-full min-[400px]:w-auto group relative overflow-hidden bg-primary text-primary-foreground hover:bg-primary/90"
                    >
                      <span className="relative z-10">Start Your Project</span>
                      <span className="absolute inset-0 bg-primary-foreground/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                      <ArrowRight className="ml-2 h-4 w-4 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
                    </Button>
                  </Link>
                  <Link href="/projects">
                    <Button
                      size="lg"
                      variant="outline"
                      className="w-full min-[400px]:w-auto group border-primary/20 hover:border-primary/50"
                    >
                      <span>View Our Work</span>
                      <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        →
                      </span>
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/images/hero-image.png"
                  width={550}
                  height={550}
                  alt="Hero Image"
                  className="rounded-lg object-cover shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        <div id="services">
          <ParallaxSection
            backgroundImage="/images/services-bg.png"
            className="w-full py-12 md:py-24 lg:py-32"
          >
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                    Our Services
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-white">
                    Comprehensive Web & Mobile Solutions
                  </h2>
                  <p className="max-w-[900px] text-white/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    We offer end-to-end development services to bring your
                    digital vision to life.
                  </p>
                </div>
              </div>
              <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
                <Card className="relative overflow-hidden bg-background/95 backdrop-blur-sm">
                  <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20">
                      <Globe className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold">Web Development</h3>
                    <p className="text-muted-foreground">
                      Custom websites and web applications built with modern
                      frameworks and responsive design.
                    </p>
                  </CardContent>
                </Card>
                <Card className="relative overflow-hidden bg-background/95 backdrop-blur-sm">
                  <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20">
                      <Smartphone className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold">Mobile Apps</h3>
                    <p className="text-muted-foreground">
                      Native and cross-platform mobile applications for iOS and
                      Android devices.
                    </p>
                  </CardContent>
                </Card>
                <Card className="relative overflow-hidden bg-background/95 backdrop-blur-sm">
                  <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20">
                      <Code className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold">Full-Stack Solutions</h3>
                    <p className="text-muted-foreground">
                      End-to-end development with robust backend systems and
                      intuitive frontends.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </ParallaxSection>
        </div>

        <section
          id="featured-projects"
          className="w-full py-12 md:py-24 lg:py-32"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Featured Projects
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Our Recent Work
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Take a look at some of our recent projects that showcase our
                  expertise and creativity.
                </p>
              </div>
            </div>

            <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2">
              <Link href="/projects/meanwhile" className="block group">
                <Card className="overflow-hidden h-full transition-all duration-300 hover:shadow-lg">
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src="/images/meanwhile-preview.png"
                      alt="Meanwhile iOS App - Writing Guides"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300"></div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="font-bold text-xl">Meanwhile</h3>
                      <div className="flex items-center justify-center rounded-full bg-primary/20 p-1">
                        <Smartphone className="h-4 w-4 text-primary" />
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-4">
                      A daily writing companion for iOS that helps users develop
                      a consistent writing practice with guided prompts,
                      progress tracking, and journaling tools.
                    </p>
                    <div className="flex items-center text-primary font-medium group-hover:underline">
                      View Project{" "}
                      <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/projects" className="block group">
                <Card className="overflow-hidden h-full transition-all duration-300 hover:shadow-lg">
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src="/images/project1.png"
                      alt="Web Project"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300"></div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="font-bold text-xl">E-Commerce Platform</h3>
                      <div className="flex items-center justify-center rounded-full bg-primary/20 p-1">
                        <Globe className="h-4 w-4 text-primary" />
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-4">
                      A full-featured online shopping platform with advanced
                      product filtering and secure checkout.
                    </p>
                    <div className="flex items-center text-primary font-medium group-hover:underline">
                      View All Projects{" "}
                      <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </div>

            <div className="flex justify-center">
              <Link href="/projects">
                <Button
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  View All Projects
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <div id="testimonials">
          <ParallaxSection
            backgroundImage="/images/testimonials-bg.png"
            className="w-full py-12 md:py-24 lg:py-32"
          >
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                    Testimonials
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-white">
                    What Our Clients Say
                  </h2>
                  <p className="max-w-[900px] text-white/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Don't just take our word for it. Here's what our clients
                    have to say about working with us.
                  </p>
                </div>
              </div>
              <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2">
                <Card className="relative overflow-hidden bg-background/95 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="flex flex-col space-y-4">
                      <div className="flex items-center space-x-4">
                        <div className="rounded-full bg-primary/20 p-1">
                          <Users className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold">
                            Tokyo Tech Solutions
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            Web Application
                          </p>
                        </div>
                      </div>
                      <p className="text-muted-foreground">
                        "Infinity Trigger delivered our project on time and
                        exceeded our expectations. Their attention to detail and
                        technical expertise made all the difference."
                      </p>
                    </div>
                  </CardContent>
                </Card>
                <Card className="relative overflow-hidden bg-background/95 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="flex flex-col space-y-4">
                      <div className="flex items-center space-x-4">
                        <div className="rounded-full bg-primary/20 p-1">
                          <Users className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold">
                            Osaka Retail Group
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            Mobile Application
                          </p>
                        </div>
                      </div>
                      <p className="text-muted-foreground">
                        "Working with Infinity Trigger was a pleasure. They
                        understood our needs and created a mobile app that has
                        significantly improved our customer engagement."
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </ParallaxSection>
        </div>

        <section id="about" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                    About Us
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                    Based in Nagano, Serving Globally
                  </h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
                    Infinity Trigger is a full-stack web development company
                    founded with a passion for creating exceptional digital
                    experiences. From our base in Nagano, Japan, we work with
                    clients around the world to bring their digital visions to
                    life.
                  </p>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
                    Our team combines technical expertise with creative
                    problem-solving to deliver solutions that not only meet but
                    exceed our clients' expectations.
                  </p>
                </div>
                <div>
                  <Link href="/about">
                    <Button
                      size="lg"
                      className="bg-primary text-primary-foreground hover:bg-primary/90"
                    >
                      Learn More About Us
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/images/about-image.png"
                  width={550}
                  height={550}
                  alt="Nagano, Japan"
                  className="rounded-lg object-cover shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-muted-foreground">
                  Ready to Start Your Project?
                </h2>
                <p className="max-w-[900px] text-muted-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Let's discuss how we can help bring your ideas to life.
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
