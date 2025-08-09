import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function MeanwhilePrivacyPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/logo.png"
              alt="Shinano Labs Logo"
              width={32}
              height={32}
              className="rounded-full object-cover"
            />
            <span className="text-xl font-bold tracking-tight">Shinano Labs</span>
          </Link>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900">
                  Meanwhile - Privacy Policy
                </h1>
                <p className="text-gray-600">Last Updated: 02 April 2025</p>
              </div>
            </div>

            <div className="mx-auto max-w-3xl bg-white rounded-lg shadow-sm p-8 space-y-8">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-gray-900">1. Introduction</h2>
                <p className="text-gray-700 leading-relaxed">
                  Welcome to Meanwhile! This Privacy Policy explains how Trigger Infinity ("we," "us," or "our")
                  collects, uses, stores, and protects your information when you use the Meanwhile mobile application
                  with us. This Privacy Policy explains how we collect, use, store, and protect your information when
                  you use the App.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  By using the App, you consent to the practices described in this Privacy Policy.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-gray-900">2. Information We Collect</h2>
                <p className="text-gray-700 leading-relaxed">
                  We collect two types of information: Personal Information and Non-Personal Information.
                </p>
                <h3 className="text-xl font-semibold text-gray-800">Personal Information</h3>
                <p className="text-gray-700 leading-relaxed">
                  This is information that identifies you as an individual. We collect personal information when you
                  create an account, interact with the App, or contact us. This may include:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2 leading-relaxed">
                  <li>Name</li>
                  <li>Email address</li>
                  <li>Payment information (for subscriptions or in-app purchases)</li>
                  <li>Any other information you provide to us directly (e.g., through customer support requests)</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-800">Non-Personal Information</h3>
                <p className="text-gray-700 leading-relaxed">
                  This is information that does not identify you individually but is collected automatically as you use
                  the App. This may include:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2 leading-relaxed">
                  <li>Device information (e.g., operating system, browser type)</li>
                  <li>Usage data (e.g., how you interact with the App, frequency of use)</li>
                  <li>IP address</li>
                  <li>Cookies and other tracking technologies (see below)</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-gray-900">3. How We Use Your Information</h2>
                <p className="text-gray-700 leading-relaxed">We may use your information for the following purposes:</p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2 leading-relaxed">
                  <li>To provide, maintain, and improve the App's services</li>
                  <li>To communicate with you about your account, updates, and promotions</li>
                  <li>To process payments for any paid features or subscriptions</li>
                  <li>To analyze usage data to enhance the functionality of the App</li>
                  <li>To respond to your inquiries and provide customer support</li>
                  <li>To comply with legal obligations or enforce our Terms and Conditions</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-gray-900">4. How We Share Your Information</h2>
                <p className="text-gray-700 leading-relaxed">
                  We do not sell or rent your personal information to third parties. However, we may share your
                  information in the following circumstances:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2 leading-relaxed">
                  <li>
                    <strong>Service Providers:</strong> We may share your information with third-party service providers
                    who assist us in operating the App, processing payments, or providing customer support.
                  </li>
                  <li>
                    <strong>Legal Compliance:</strong> We may disclose your information to comply with applicable laws,
                    regulations, or legal processes, or to protect the rights, property, and safety of Trigger Infinity,
                    our users, or others.
                  </li>
                  <li>
                    <strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your
                    personal information may be transferred as part of that transaction.
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-gray-900">5. Cookies and Tracking Technologies</h2>
                <p className="text-gray-700 leading-relaxed">
                  We use cookies and similar tracking technologies to enhance your experience with the App. Cookies are
                  small files stored on your device that allow us to track usage patterns, preferences, and provide
                  features like remembering your login information.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  You can control cookie settings through your browser settings, but disabling cookies may affect the
                  functionality of the App.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-gray-900">6. Data Security</h2>
                <p className="text-gray-700 leading-relaxed">
                  We take reasonable steps to protect your personal information from unauthorized access, use, or
                  disclosure. However, please note that no method of transmission over the internet or electronic
                  storage is 100% secure, and we cannot guarantee absolute security.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-gray-900">7. Your Rights and Choices</h2>
                <p className="text-gray-700 leading-relaxed">
                  Depending on your location and applicable laws, you may have the following rights regarding your
                  personal information:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2 leading-relaxed">
                  <li>
                    <strong>Access:</strong> You can request access to the personal information we hold about you.
                  </li>
                  <li>
                    <strong>Correction:</strong> You can request corrections to any inaccurate or incomplete personal
                    information.
                  </li>
                  <li>
                    <strong>Deletion:</strong> You can request the deletion of your personal information, subject to any
                    legal obligations we may have to retain certain data.
                  </li>
                  <li>
                    <strong>Opt-out of Communications:</strong> You can opt out of marketing emails by following the
                    unsubscribe instructions in our emails or by contacting us directly.
                  </li>
                </ul>
                <p className="text-gray-700 leading-relaxed">
                  To exercise any of these rights, please contact us at the information provided below.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-gray-900">8. Children's Privacy</h2>
                <p className="text-gray-700 leading-relaxed">
                  The App is not intended for use by children under the age of 13, and we do not knowingly collect
                  personal information from children. If we learn that we have collected personal information from a
                  child under the applicable age, we will take steps to delete that information.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-gray-900">9. Changes to This Privacy Policy</h2>
                <p className="text-gray-700 leading-relaxed">
                  We may update this Privacy Policy from time to time to reflect changes in our practices or for other
                  operational, legal, or regulatory reasons. Any changes will be posted on this page, and the effective
                  date will be updated accordingly.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-gray-900">10. Contact Us</h2>
                <p className="text-gray-700 leading-relaxed">
                  If you have any questions or concerns about this Privacy Policy or our data practices, please contact
                  us at:
                </p>
                <div className="text-gray-700 leading-relaxed">
                  <p>Trigger Infinity</p>
                  <p>Nagano City, Nagano Prefecture, Japan</p>
                  <p>Email: contact@triggerinfinity.com</p>
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-gray-900">Acknowledgment</h2>
                <p className="text-gray-700 leading-relaxed">
                  By using the App, you acknowledge that you have read, understood, and agree to the practices described
                  in this Privacy Policy.
                </p>
              </div>
            </div>

            <div className="flex justify-center mt-12">
              <Link href="/projects/meanwhile">
                <Button
                  variant="outline"
                  className="gap-1 group transition-all duration-300 hover:bg-background/80 border-primary/20 hover:border-primary/50"
                >
                  <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform duration-300" />
                  <span>Back to Meanwhile</span>
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

