import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function PrivacyPolicyPage() {
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
        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Privacy Policy</h1>
                <p className="text-muted-foreground">
                  Last updated:{" "}
                  {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
                </p>
              </div>
            </div>

            <div className="mx-auto max-w-3xl space-y-8">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">1. Introduction</h2>
                <p className="text-muted-foreground">
                  Infinity Trigger ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy
                  explains how we collect, use, disclose, and safeguard your information when you visit our website or
                  use our web and mobile applications (collectively, the "Services").
                </p>
                <p className="text-muted-foreground">
                  Please read this Privacy Policy carefully. By accessing or using our Services, you acknowledge that
                  you have read, understood, and agree to be bound by all the terms of this Privacy Policy.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold">2. Information We Collect</h2>
                <h3 className="text-xl font-semibold">2.1 Personal Information</h3>
                <p className="text-muted-foreground">
                  We may collect personal information that you voluntarily provide to us when you:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Fill out forms on our website</li>
                  <li>Create an account</li>
                  <li>Contact us via email, phone, or other communication channels</li>
                  <li>Subscribe to our newsletter</li>
                  <li>Request customer support</li>
                </ul>
                <p className="text-muted-foreground">The personal information we collect may include:</p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Name</li>
                  <li>Email address</li>
                  <li>Phone number</li>
                  <li>Company name</li>
                  <li>Job title</li>
                  <li>Billing information</li>
                </ul>

                <h3 className="text-xl font-semibold">2.2 Automatically Collected Information</h3>
                <p className="text-muted-foreground">
                  When you access our Services, we may automatically collect certain information, including:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Device information (e.g., device type, operating system)</li>
                  <li>IP address</li>
                  <li>Browser type and version</li>
                  <li>Pages visited and time spent on those pages</li>
                  <li>Referring website addresses</li>
                  <li>Geographic location</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold">3. How We Use Your Information</h2>
                <p className="text-muted-foreground">
                  We may use the information we collect for various purposes, including to:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Provide, maintain, and improve our Services</li>
                  <li>Process transactions and send related information</li>
                  <li>Respond to your comments, questions, and requests</li>
                  <li>Send you technical notices, updates, security alerts, and support messages</li>
                  <li>Communicate with you about products, services, offers, and events</li>
                  <li>Monitor and analyze trends, usage, and activities in connection with our Services</li>
                  <li>Detect, investigate, and prevent fraudulent transactions and other illegal activities</li>
                  <li>Personalize and improve your experience with our Services</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold">4. Disclosure of Your Information</h2>
                <p className="text-muted-foreground">We may share your information in the following situations:</p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>
                    <strong>Service Providers:</strong> We may share your information with third-party vendors, service
                    providers, contractors, or agents who perform services for us.
                  </li>
                  <li>
                    <strong>Business Transfers:</strong> We may share or transfer your information in connection with,
                    or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a
                    portion of our business.
                  </li>
                  <li>
                    <strong>Legal Obligations:</strong> We may disclose your information where required to do so by law
                    or in response to valid requests by public authorities.
                  </li>
                  <li>
                    <strong>With Your Consent:</strong> We may disclose your information for any other purpose with your
                    consent.
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold">5. Data Security</h2>
                <p className="text-muted-foreground">
                  We implement appropriate technical and organizational measures to protect the security of your
                  personal information. However, please be aware that no method of transmission over the Internet or
                  method of electronic storage is 100% secure.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold">6. Third-Party Services</h2>
                <p className="text-muted-foreground">
                  Our Services may contain links to third-party websites and services that are not owned or controlled
                  by us. We have no control over, and assume no responsibility for, the content, privacy policies, or
                  practices of any third-party websites or services.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold">7. Your Rights</h2>
                <p className="text-muted-foreground">
                  Depending on your location, you may have certain rights regarding your personal information,
                  including:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>The right to access your personal information</li>
                  <li>The right to rectify inaccurate personal information</li>
                  <li>The right to request the deletion of your personal information</li>
                  <li>The right to restrict the processing of your personal information</li>
                  <li>The right to data portability</li>
                  <li>The right to object to the processing of your personal information</li>
                </ul>
                <p className="text-muted-foreground">
                  To exercise these rights, please contact us using the information provided in the "Contact Us" section
                  below.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold">8. Children's Privacy</h2>
                <p className="text-muted-foreground">
                  Our Services are not intended for individuals under the age of 16. We do not knowingly collect
                  personal information from children under 16. If you are a parent or guardian and believe that your
                  child has provided us with personal information, please contact us.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold">9. Changes to This Privacy Policy</h2>
                <p className="text-muted-foreground">
                  We may update our Privacy Policy from time to time. We will notify you of any changes by posting the
                  new Privacy Policy on this page and updating the "Last updated" date at the top of this Privacy
                  Policy.
                </p>
                <p className="text-muted-foreground">
                  You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy
                  Policy are effective when they are posted on this page.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold">10. Contact Us</h2>
                <p className="text-muted-foreground">
                  If you have any questions about this Privacy Policy, please contact us at:
                </p>
                <div className="text-muted-foreground">
                  <p>Infinity Trigger</p>
                  <p>Nagano City, Nagano Prefecture, Japan</p>
                  <p>Email: privacy@infinitytrigger.com</p>
                  <p>Phone: +81 (0) 123-456-789</p>
                </div>
              </div>
            </div>

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

