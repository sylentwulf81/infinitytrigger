import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, Globe, Smartphone } from "lucide-react";

export default function ProjectsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Our Projects
                </h1>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  Explore our portfolio of web and mobile applications that
                  showcase our expertise and creativity.
                </p>
              </div>
            </div>

            <Tabs defaultValue="all" className="mt-8 w-full max-w-4xl mx-auto">
              <TabsList className="grid w-full grid-cols-3 bg-muted text-muted-foreground">
                <TabsTrigger
                  value="all"
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  All Projects
                </TabsTrigger>
                <TabsTrigger
                  value="web"
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  Web
                </TabsTrigger>
                <TabsTrigger
                  value="mobile"
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  Mobile
                </TabsTrigger>
              </TabsList>

              <TabsContent value="all" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <Link href="/projects/meanwhile" className="block">
                    <Card className="overflow-hidden group transition-all duration-300 hover:shadow-lg h-full">
                      <div className="relative overflow-hidden">
                        <Image
                          src="/images/meanwhile-preview.png"
                          width={400}
                          height={300}
                          alt="Meanwhile iOS App"
                          className="object-cover w-full h-48 transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300"></div>
                      </div>
                      <CardContent className="p-4">
                        <div className="flex justify-between items-center mb-2">
                          <h3 className="font-bold text-lg">Meanwhile</h3>
                          <div className="flex items-center justify-center rounded-full bg-primary/20 p-1">
                            <Smartphone className="h-4 w-4 text-primary" />
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          A daily writing companion for iOS that encourages
                          users to develop a consistent writing practice.
                        </p>
                      </CardContent>
                    </Card>
                  </Link>

                  {[1, 2, 3, 4, 5].map((item) => (
                    <Card
                      key={item}
                      className="overflow-hidden group transition-all duration-300 hover:shadow-lg h-full"
                    >
                      <div className="relative overflow-hidden">
                        <Image
                          src={`/images/project${item}.png`}
                          width={400}
                          height={300}
                          alt={`Project ${item}`}
                          className="object-cover w-full h-48 transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300"></div>
                      </div>
                      <CardContent className="p-4">
                        <div className="flex justify-between items-center mb-2">
                          <h3 className="font-bold text-lg">Project {item}</h3>
                          <div className="flex items-center justify-center rounded-full bg-primary/20 p-1">
                            {item % 2 === 0 ? (
                              <Smartphone className="h-4 w-4 text-primary" />
                            ) : (
                              <Globe className="h-4 w-4 text-primary" />
                            )}
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {item % 2 === 0
                            ? "Mobile application with advanced features and intuitive design."
                            : "Web platform providing seamless user experience and robust functionality."}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="web" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[1, 3, 5].map((item) => (
                    <Card
                      key={item}
                      className="overflow-hidden group transition-all duration-300 hover:shadow-lg h-full"
                    >
                      <div className="relative overflow-hidden">
                        <Image
                          src={`/images/project${item}.png`}
                          width={400}
                          height={300}
                          alt={`Web Project ${item}`}
                          className="object-cover w-full h-48 transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300"></div>
                      </div>
                      <CardContent className="p-4">
                        <div className="flex justify-between items-center mb-2">
                          <h3 className="font-bold text-lg">
                            Web Project {item}
                          </h3>
                          <div className="flex items-center justify-center rounded-full bg-primary/20 p-1">
                            <Globe className="h-4 w-4 text-primary" />
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Web platform providing seamless user experience and
                          robust functionality.
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="mobile" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <Link href="/projects/meanwhile" className="block">
                    <Card className="overflow-hidden group transition-all duration-300 hover:shadow-lg h-full">
                      <div className="relative overflow-hidden">
                        <Image
                          src="/images/meanwhile-preview.png"
                          width={400}
                          height={300}
                          alt="Meanwhile iOS App"
                          className="object-cover w-full h-48 transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300"></div>
                      </div>
                      <CardContent className="p-4">
                        <div className="flex justify-between items-center mb-2">
                          <h3 className="font-bold text-lg">Meanwhile</h3>
                          <div className="flex items-center justify-center rounded-full bg-primary/20 p-1">
                            <Smartphone className="h-4 w-4 text-primary" />
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          A daily writing companion for iOS that encourages
                          users to develop a consistent writing practice.
                        </p>
                      </CardContent>
                    </Card>
                  </Link>

                  {[2, 4].map((item) => (
                    <Card
                      key={item}
                      className="overflow-hidden group transition-all duration-300 hover:shadow-lg h-full"
                    >
                      <div className="relative overflow-hidden">
                        <Image
                          src={`/images/project${item}.png`}
                          width={400}
                          height={300}
                          alt={`Mobile Project ${item}`}
                          className="object-cover w-full h-48 transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300"></div>
                      </div>
                      <CardContent className="p-4">
                        <div className="flex justify-between items-center mb-2">
                          <h3 className="font-bold text-lg">
                            Mobile Project {item}
                          </h3>
                          <div className="flex items-center justify-center rounded-full bg-primary/20 p-1">
                            <Smartphone className="h-4 w-4 text-primary" />
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Mobile application with advanced features and
                          intuitive design.
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>

            <div className="flex justify-center mt-12">
              <Link href="/">
                <Button
                  variant="outline"
                  className="gap-1 group transition-all duration-300 hover:bg-background/80 border-primary/20 hover:border-primary/50"
                >
                  <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform duration-300" />
                  <span>Back to Home</span>
                </Button>
              </Link>
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
