import Link from "next/link";
import { Button } from "@/components/ui/button";
import { BrandButton, BrandButtonAlt } from "@/components/BrandButton";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ArrowRight, Mail, MessageSquare, Users, Sparkles } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function Contact() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-brand-mint/10 to-transparent dark:from-brand-teal/20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-8 text-center">
              <div className="space-y-6">
                <div className="inline-flex items-center rounded-full bg-brand-mint/20 border border-brand-teal/20 px-3 py-1 text-sm text-brand-teal dark:text-brand-mint">
                  <Mail className="w-4 h-4 mr-2" />
                  Contact Us
                </div>
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl xl:text-6xl text-brand-dark dark:text-brand-mint">
                  Get In Touch
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-600 dark:text-brand-lavender/80 md:text-xl/relaxed lg:text-2xl/relaxed">
                  Have questions about our products? Want to join our Beta Testing community? We'd love to hear from you.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="w-full py-12 md:py-24 bg-white dark:bg-transparent">
          <div className="container px-4 md:px-6">
            <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-2">
              {/* Contact Form Box*/}
              <div className="space-y-6">
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-brand-dark dark:text-brand-mint">
                    Send Us a Message
                  </h2>
                  <p className="text-gray-600 dark:text-brand-lavender/80">
                    Fill out the form below and we'll get back to you as soon as possible.
                  </p>
                </div>

                <Card className="bg-white/50 dark:bg-brand-dark/50 border-brand-teal/20 dark:border-brand-mint/20">
                  <CardContent className="p-6 space-y-4">
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label
                          htmlFor="first-name"
                          className="text-brand-dark dark:text-brand-mint font-medium"
                        >
                          First Name
                        </Label>
                        <Input
                          id="first-name"
                          placeholder="Enter your first name"
                          className="bg-white/80 dark:bg-brand-dark/80 border-brand-teal/20 dark:border-brand-mint/20 focus:border-brand-teal dark:focus:border-brand-mint"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label
                          htmlFor="last-name"
                          className="text-brand-dark dark:text-brand-mint font-medium"
                        >
                          Last Name
                        </Label>
                        <Input
                          id="last-name"
                          placeholder="Enter your last name"
                          className="bg-white/80 dark:bg-brand-dark/80 border-brand-teal/20 dark:border-brand-mint/20 focus:border-brand-teal dark:focus:border-brand-mint"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label
                        htmlFor="email"
                        className="text-brand-dark dark:text-brand-mint font-medium"
                      >
                        Email
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        className="bg-white/80 dark:bg-brand-dark/80 border-brand-teal/20 dark:border-brand-mint/20 focus:border-brand-teal dark:focus:border-brand-mint"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label
                        htmlFor="subject"
                        className="text-brand-dark dark:text-brand-mint font-medium"
                      >
                        Subject
                      </Label>
                      <Input
                        id="subject"
                        placeholder="What's this about?"
                        className="bg-white/80 dark:bg-brand-dark/80 border-brand-teal/20 dark:border-brand-mint/20 focus:border-brand-teal dark:focus:border-brand-mint"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label
                        htmlFor="message"
                        className="text-brand-dark dark:text-brand-mint font-medium"
                      >
                        Message
                      </Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us more about your inquiry..."
                        className="min-h-[120px] bg-white/80 dark:bg-brand-dark/80 border-brand-teal/20 dark:border-brand-mint/20 focus:border-brand-teal dark:focus:border-brand-mint"
                      />
                    </div>
                    <BrandButton className="w-full">
                      Send Message
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </BrandButton>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Info */}
              <div className="space-y-8">
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-brand-dark dark:text-brand-mint">
                    We're Listening
                  </h2>
                  <p className="text-gray-600 dark:text-brand-lavender/80">
                    Whether you have questions about our products or have a great idea for a new feature, we'd love to hear from you.
                  </p>
                </div>

                <div className="space-y-6">
                  <Card className="bg-white/50 dark:bg-brand-dark/50 border-brand-teal/20 dark:border-brand-mint/20">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <div className="p-3 rounded-xl bg-brand-mint/20 dark:bg-brand-mint/10">
                          <Mail className="h-6 w-6 text-brand-teal dark:text-brand-mint" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-brand-dark dark:text-brand-mint">
                            Email Us
                          </h3>
                          <Link 
                            href="mailto:support@infinitytrigger.com"
                            className="text-brand-teal hover:text-brand-dark dark:text-brand-mint/80 dark:hover:text-brand-mint transition-colors"
                          >
                            support@infinitytrigger.com
                          </Link>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-white/50 dark:bg-brand-dark/50 border-brand-teal/20 dark:border-brand-mint/20">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <div className="p-3 rounded-xl bg-brand-mint/20 dark:bg-brand-mint/10">
                          <MessageSquare className="h-6 w-6 text-brand-teal dark:text-brand-mint" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-brand-dark dark:text-brand-mint">
                            TestFlight / Beta Testing
                          </h3>
                          <p className="text-gray-600 dark:text-brand-lavender/80">
                            Help shape our products before they're released
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-white/50 dark:bg-brand-dark/50 border-brand-teal/20 dark:border-brand-mint/20">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <div className="p-3 rounded-xl bg-brand-mint/20 dark:bg-brand-mint/10">
                          <Users className="h-6 w-6 text-brand-teal dark:text-brand-mint" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-brand-dark dark:text-brand-mint">
                            Community
                          </h3>
                          <p className="text-gray-600 dark:text-brand-lavender/80">
                            Connect with fellow creatives
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="w-full py-12 md:py-24 bg-gradient-to-b from-transparent to-brand-mint/10 dark:to-brand-teal/20">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl space-y-8">
              <div className="space-y-4 text-center">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-brand-dark dark:text-brand-mint">
                  Frequently Asked Questions
                </h2>
                <p className="text-gray-600 dark:text-brand-lavender/80">
                  Quick answers to common questions about our products and services.
                </p>
              </div>

              <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto bg-white dark:bg-brand-dark dark:text-brand-mint">
                <AccordionItem value="item-1" className="border-brand-teal/20 dark:border-brand-mint/20">
                  <AccordionTrigger className="text-2xl font-bold text-gray-900 dark:text-brand-mint hover:bg-brand-mint/10 dark:hover:bg-brand-gray dark:hover:text-brand-dark transition-all duration-300 hover:no-underline text-left w-full pl-4">
                    How do I join the TestFlight for Myriad Worlds?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 leading-relaxed dark:text-white">
                    You can join the Myriad Worlds TestFlight by clicking the TestFlight link on our products page or by visiting{" "}
                    <Link 
                      href="https://testflight.apple.com/join/uJVk52wq"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-brand-teal hover:text-brand-dark dark:text-brand-mint dark:hover:text-brand-mint/80 transition-colors"
                    >
                      this direct link
                    </Link>
                    . TestFlight is Apple's beta testing platform and requires the TestFlight app to be installed on your iOS device.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="border-brand-teal/20 dark:border-brand-mint/20">
                  <AccordionTrigger className="text-2xl font-bold text-gray-900 dark:text-brand-mint hover:bg-brand-mint/10 dark:hover:bg-brand-gray dark:hover:text-brand-dark transition-all duration-300 hover:no-underline text-left w-full pl-4">
                    Is Meanwhile available on Android?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 leading-relaxed dark:text-white">
                    Currently, Meanwhile is only available on iOS. We're focusing on providing the best possible experience for iOS users before considering other platforms.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="border-brand-teal/20 dark:border-brand-mint/20">
                  <AccordionTrigger className="text-2xl font-bold text-gray-900 dark:text-brand-mint hover:bg-brand-mint/10 dark:hover:bg-brand-gray dark:hover:text-brand-dark transition-all duration-300 hover:no-underline text-left w-full pl-4">
                    Can I use Myriad Worlds content in my own projects?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 leading-relaxed dark:text-white">
                    Yes! All content in Myriad Worlds is released under Creative Commons licensing, which means you can use it as inspiration, adapt it, or build upon it for your own creative projects.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4" className="border-brand-teal/20 dark:border-brand-mint/20">
                  <AccordionTrigger className="text-2xl font-bold text-gray-900 dark:text-brand-mint hover:bg-brand-mint/10 dark:hover:bg-brand-gray dark:hover:text-brand-dark transition-all duration-300 hover:no-underline text-left w-full pl-4">
                    Do you offer custom software solutions for outside organizations?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 leading-relaxed dark:text-white">
                    While we primarily focus on our own products, we're always open to discussing potential collaborations. Contact us with your requirements, and we'll be happy to explore possibilities.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-brand-teal dark:bg-brand-dark">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white dark:text-brand-mint">
                  Ready To Jump In?
                </h2>
                <p className="mx-auto max-w-[700px] text-white/90 dark:text-white md:text-xl">
                  Download Meanwhile from the App Store or join our upcoming
                  TestFlight for Myriad Worlds to be among the first to try the
                  new app.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                <Link href="https://testflight.apple.com/join/uJVk52wq" target="_blank" rel="noopener noreferrer">
                  <BrandButton>
                    Join TestFlight
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </BrandButton>
                </Link>
                <Link href="/products">
                  <BrandButtonAlt>
                    Explore Our Products
                  </BrandButtonAlt>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
