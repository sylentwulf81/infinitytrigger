import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function TermsOfServicePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Terms of Service
                </h1>
                <p className="text-muted-foreground">
                  Last updated:{" "}
                  {new Date().toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </p>
              </div>
            </div>

            <div className="mx-auto max-w-3xl space-y-8">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">1. Agreement to Terms</h2>
                <p className="text-muted-foreground">
                  These Terms of Service ("Terms") constitute a legally binding
                  agreement between you and Infinity Trigger ("we," "our," or
                  "us") regarding your access to and use of our website and
                  services (collectively, the "Services").
                </p>
                <p className="text-muted-foreground">
                  By accessing or using our Services, you agree to be bound by
                  these Terms. If you do not agree to these Terms, you may not
                  access or use the Services.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold">2. Services Description</h2>
                <p className="text-muted-foreground">
                  Infinity Trigger provides web and mobile application
                  development services, including but not limited to website
                  design, application development, maintenance, and related
                  consulting services.
                </p>
                <p className="text-muted-foreground">
                  We reserve the right to modify, suspend, or discontinue any
                  aspect of our Services at any time, with or without notice.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold">3. User Accounts</h2>
                <p className="text-muted-foreground">
                  Some of our Services may require you to create an account. You
                  agree to provide accurate, current, and complete information
                  during the registration process and to update such information
                  to keep it accurate, current, and complete.
                </p>
                <p className="text-muted-foreground">
                  You are responsible for safeguarding your account credentials
                  and for all activities that occur under your account. You
                  agree to notify us immediately of any unauthorized use of your
                  account.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold">
                  4. Client Responsibilities
                </h2>
                <p className="text-muted-foreground">
                  If you engage our development services, you agree to:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>
                    Provide accurate and complete information necessary for the
                    completion of the project
                  </li>
                  <li>
                    Review and provide feedback on deliverables in a timely
                    manner
                  </li>
                  <li>
                    Pay all fees as agreed upon in the project proposal or
                    contract
                  </li>
                  <li>
                    Obtain all necessary permissions and rights for materials
                    provided to us
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold">5. Intellectual Property</h2>
                <h3 className="text-xl font-semibold">
                  5.1 Our Intellectual Property
                </h3>
                <p className="text-muted-foreground">
                  The Services, including all content, features, and
                  functionality, are owned by Infinity Trigger or our licensors
                  and are protected by copyright, trademark, and other
                  intellectual property laws.
                </p>

                <h3 className="text-xl font-semibold">5.2 Client Materials</h3>
                <p className="text-muted-foreground">
                  You retain ownership of all materials you provide to us. By
                  providing materials to us, you grant us a non-exclusive,
                  worldwide, royalty-free license to use, reproduce, modify, and
                  display such materials solely for the purpose of providing the
                  Services to you.
                </p>

                <h3 className="text-xl font-semibold">5.3 Deliverables</h3>
                <p className="text-muted-foreground">
                  Upon full payment of all applicable fees, we will assign to
                  you all rights, title, and interest in the deliverables
                  specifically created for you, except for:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>
                    Third-party materials incorporated into the deliverables
                  </li>
                  <li>Our pre-existing intellectual property</li>
                  <li>
                    General programming techniques, algorithms, methods, or
                    processes
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold">6. Payment Terms</h2>
                <p className="text-muted-foreground">
                  Payment terms will be specified in the project proposal or
                  contract. Unless otherwise agreed upon:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>A deposit may be required before work begins</li>
                  <li>Invoices are due upon receipt</li>
                  <li>Late payments may incur additional fees</li>
                  <li>
                    We reserve the right to suspend work on projects with
                    outstanding payments
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold">
                  7. Limitation of Liability
                </h2>
                <p className="text-muted-foreground">
                  To the maximum extent permitted by law, in no event shall
                  Infinity Trigger be liable for any indirect, incidental,
                  special, consequential, or punitive damages, including without
                  limitation, loss of profits, data, use, goodwill, or other
                  intangible losses, resulting from:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>
                    Your access to or use of or inability to access or use the
                    Services
                  </li>
                  <li>
                    Any conduct or content of any third party on the Services
                  </li>
                  <li>Any content obtained from the Services</li>
                  <li>
                    Unauthorized access, use, or alteration of your
                    transmissions or content
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold">8. Indemnification</h2>
                <p className="text-muted-foreground">
                  You agree to defend, indemnify, and hold harmless Infinity
                  Trigger and our officers, directors, employees, and agents
                  from and against any claims, liabilities, damages, judgments,
                  awards, losses, costs, expenses, or fees (including reasonable
                  attorneys' fees) arising out of or relating to your violation
                  of these Terms or your use of the Services.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold">9. Termination</h2>
                <p className="text-muted-foreground">
                  We may terminate or suspend your access to the Services
                  immediately, without prior notice or liability, for any reason
                  whatsoever, including without limitation if you breach these
                  Terms.
                </p>
                <p className="text-muted-foreground">
                  Upon termination, your right to use the Services will
                  immediately cease. All provisions of these Terms which by
                  their nature should survive termination shall survive
                  termination.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold">10. Changes to Terms</h2>
                <p className="text-muted-foreground">
                  We reserve the right to modify or replace these Terms at any
                  time. If a revision is material, we will provide at least 30
                  days' notice prior to any new terms taking effect. What
                  constitutes a material change will be determined at our sole
                  discretion.
                </p>
                <p className="text-muted-foreground">
                  By continuing to access or use our Services after any
                  revisions become effective, you agree to be bound by the
                  revised terms.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold">11. Governing Law</h2>
                <p className="text-muted-foreground">
                  These Terms shall be governed by and construed in accordance
                  with the laws of Japan, without regard to its conflict of law
                  provisions.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold">12. Contact Us</h2>
                <p className="text-muted-foreground">
                  If you have any questions about these Terms, please contact us
                  at:
                </p>
                <div className="text-muted-foreground">
                  <p>Infinity Trigger</p>
                  <p>Nagano City, Nagano Prefecture, Japan</p>
                  <p>Email: legal@infinitytrigger.com</p>
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
