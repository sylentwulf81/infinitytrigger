import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, ArrowRight, Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-900">
                  Get In Touch
                </h1>
                <p className="max-w-[700px] text-gray-600 md:text-xl">
                  Get early access to our upcoming app Myriad Worlds through TestFlight, or reach out with questions about our creative tools. 
                  Meanwhile is now available on the App Store!
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-6xl gap-6 py-12 lg:grid-cols-2">
              <Card className="bg-white shadow-sm">
                <CardHeader>
                  <CardTitle className="text-gray-900">Contact Information</CardTitle>
                  <CardDescription className="text-gray-600">
                    Reach out to us with questions about our apps or to join TestFlight.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <MapPin className="h-6 w-6 text-primary" />
                    <div>
                      <h3 className="font-medium text-gray-900">Address</h3>
                      <p className="text-sm text-gray-600">
                        Nagano City, Nagano Prefecture, Japan
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Mail className="h-6 w-6 text-primary" />
                    <div>
                      <h3 className="font-medium text-gray-900">Email</h3>
                      <p className="text-sm text-gray-600">
                        support@infinitytrigger.com
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Phone className="h-6 w-6 text-primary" />
                    <div>
                      <h3 className="font-medium text-gray-900">Phone</h3>
                      <p className="text-sm text-gray-600">
                        // Phone: +81 (0) 123-456-789
                      </p>
                    </div>
                  </div>
                  <div className="pt-4">
                    <Image
                      src="/images/nagano-landscape.png"
                      width={500}
                      height={300}
                      alt="Nagano Landscape"
                      className="rounded-lg object-cover w-full shadow-md"
                    />
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-white shadow-sm">
                <CardHeader>
                  <CardTitle className="text-gray-900">Get in Touch</CardTitle>
                  <CardDescription className="text-gray-600">
                    Join our TestFlight or ask questions about Meanwhile and Myriad Worlds.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="first-name" className="text-gray-900">First name</Label>
                        <Input
                          id="first-name"
                          placeholder="Enter your first name"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="last-name" className="text-gray-900">Last name</Label>
                        <Input
                          id="last-name"
                          placeholder="Enter your last name"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-gray-900">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="interest" className="text-gray-900">What are you interested in?</Label>
                      <select
                        id="interest"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      >
                        <option value="">Select your interest</option>
                        <option value="testflight">Join TestFlight</option>
                        <option value="meanwhile">Meanwhile Feedback</option>
                        <option value="myriad-worlds">Myriad Worlds Feedback</option>
                        <option value="general">General Questions</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-gray-900">Message</Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us about your interest in our creative tools or ask any questions"
                        className="min-h-[120px]"
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full group relative overflow-hidden bg-primary text-primary-foreground hover:bg-primary/90"
                    >
                      <span className="relative z-10">Send Message</span>
                      <span className="absolute inset-0 bg-primary-foreground/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                      <ArrowRight className="ml-2 h-4 w-4 relative z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
            <div className="flex justify-center">
              <Link href="/">
                <Button
                  variant="outline"
                  className="gap-1 group transition-all duration-300 border-gray-300 hover:bg-gray-900 hover:text-white"
                >
                  <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform duration-300" />
                  <span>Back to Home</span>
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
