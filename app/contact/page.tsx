import Link from "next/link";
import { Button } from "@/components/ui/button";
import { BrandButton, BrandButtonAlt } from "@/components/BrandButton";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ArrowRight, Mail, MessageSquare, Users, Sparkles } from "lucide-react";

export default function Contact() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-brand-mint/20 dark:bg-brand-dark">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-8 text-center">
              <div className="space-y-6">
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl text-[#416165] dark:text-brand-mint">
                  Get In Touch
                </h1>
                <p className="mx-auto max-w-[700px] text-lg text-gray-600 md:text-xl dark:text-white">
                  Have questions about our products? Want to join our Beta
                  Testing community? We'd love to hear from you and help you on
                  your creative journey and we're always looking for new ways to
                  improve our products.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gradient-to-b dark:from-brand-dark dark:to-black">
          <div className="container px-4 md:px-6">
            <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-2">
              {/* Contact Form Box*/}
              <div className="space-y-6">
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-[#416165] dark:text-brand-mint">
                    Send Us a Message
                  </h2>
                  <p className="text-gray-600 dark:text-white">
                    Fill out the form below and we'll get back to you as soon as
                    possible.
                  </p>
                </div>

                <Card className="border-1 border-brand-mint shadow-lg bg-brand-gray/70">
                  <CardContent className="p-6 space-y-4">
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label
                          htmlFor="first-name"
                          className="text-brand-dark font-medium"
                        >
                          First Name
                        </Label>
                        <Input
                          id="first-name"
                          placeholder="Enter your first name"
                          className="border-brand-purple/20 focus:border-brand-purple"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label
                          htmlFor="last-name"
                          className="text-brand-dark font-medium"
                        >
                          Last Name
                        </Label>
                        <Input
                          id="last-name"
                          placeholder="Enter your last name"
                          className="border-brand-purple/20 focus:border-brand-purple"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label
                        htmlFor="email"
                        className="text-brand-dark font-medium"
                      >
                        Email
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        className="border-brand-purple/20 focus:border-brand-purple"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label
                        htmlFor="subject"
                        className="text-brand-dark font-medium"
                      >
                        Subject
                      </Label>
                      <Input
                        id="subject"
                        placeholder="What's this about?"
                        className="border-brand-purple/20 focus:border-brand-purple"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label
                        htmlFor="message"
                        className="text-brand-dark font-medium"
                      >
                        Message
                      </Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us more about your inquiry..."
                        className="min-h-[120px] border-brand-purple/20 focus:border-brand-purple"
                      />
                    </div>
                    <Button className="w-full bg-brand-mint text-brand-dark font-semibold px-6 py-2 rounded-lg shadow hover:text-brand-mint hover:bg-brand-dark transition-all duration-200">
                      Send Message
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Info */}
              <div className="space-y-8">
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-[#416165] dark:text-brand-pink">
                    We're Listening
                  </h2>
                  <p className="text-gray-600 dark:text-white">
                    Whether you have questions about our products or have a
                    great idea for a new feature, we'd love to hear from you.
                  </p>
                </div>

                <div className="space-y-6">
                  <Card className="border-1 bg-brand-gray/60 dark:bg-brand-teal shadow-lg">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <div className="p-3 rounded-xl bg-brand-mint shadow-lg">
                          <Mail className="h-6 w-6 text-black" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-brand-dark dark:text-brand-mint">
                            Email Us
                          </h3>
                          <p className="text-brand-dark hover:text-blue-500 dark:text-brand-gray dark:hover:text-brand-mint">
                            <a href="mailto:support@infinitytrigger.com">
                              support@infinitytrigger.com
                            </a>
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-1 bg-brand-gray/60 dark:bg-brand-teal shadow-lg ">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <div className="p-3 rounded-xl bg-brand-mint shadow-lg">
                          <MessageSquare className="h-6 w-6 text-black" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-brand-dark dark:text-brand-mint">
                            TestFlight / Beta Testing
                          </h3>
                          <p className="text-gray-600 dark:text-white">
                            Help shape our products before they're released
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-1 bg-brand-gray/60 dark:bg-brand-teal shadow-lg">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <div className="p-3 rounded-xl bg-brand-mint shadow-lg">
                          <Users className="h-6 w-6 text-black" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-brand-dark dark:text-brand-mint">
                            Community
                          </h3>
                          <p className="text-gray-600 dark:text-white">
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
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-brand-purple/5 via-white to-brand-neon/5">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-brand-teal dark:text-brand-mint">
                Frequently Asked Questions
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl dark:text-white">
                Quick answers to common questions about our products and
                services.
              </p>
            </div>

            <div className="mx-auto grid max-w-4xl gap-6">
              <Card className="border-2 border-brand-mint dark:border-brand-mint bg-brand-gray/70 dark:bg-brand-teal shadow-lg">
                <CardHeader>
                  <CardTitle className="text-brand-dark dark:text-brand-mint">
                    How do I join the TestFlight for Myriad Worlds?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-brand-dark dark:text-white">
                    Simply send us a message through the contact form above, and
                    we'll add you to our TestFlight waiting list. We'll notify
                    you as soon as spots become available.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-brand-mint bg-brand-gray/70 dark:bg-brand-teal shadow-lg">
                <CardHeader>
                  <CardTitle className="text-brand-dark dark:text-brand-mint">
                    Is Meanwhile available on Android?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-brand-dark dark:text-white">
                    Currently, Meanwhile is only available on iOS and iPadOS.
                    We're working on an Android version and will announce it
                    when it's ready for testing.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-brand-mint bg-brand-gray/70 dark:bg-brand-teal shadow-lg">
                <CardHeader>
                  <CardTitle className="text-brand-dark dark:text-brand-mint">
                    Can I use Myriad Worlds content in my own projects?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-brand-dark dark:text-white">
                    Yes! All content in Myriad Worlds is licensed under Creative
                    Commons, which means you can use it in your own creative
                    projects, including commercial work.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-brand-mint bg-brand-gray/70 dark:bg-brand-teal shadow-lg">
                <CardHeader>
                  <CardTitle className="text-brand-dark dark:text-brand-mint">
                    Do you offer custom software solutions for outside
                    organizations?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-brand-dark dark:text-white">
                    We're always interested in hearing about unique use cases
                    and team needs. Contact us to discuss how we might be able
                    to help with custom digital solutions for Apple platforms,
                    Android, and native web.
                  </p>
                </CardContent>
              </Card>
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
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-2">
                <Link
                  href="https://apps.apple.com/us/app/meanwhile-daily-writing/id6742810856"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BrandButton>
                    Download Meanwhile
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
