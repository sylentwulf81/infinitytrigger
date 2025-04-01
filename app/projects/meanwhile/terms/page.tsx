import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function MeanwhileTermsPage() {
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
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Terms and Conditions</h1>
                <p className="text-muted-foreground">Last updated: August 09, 2021</p>
              </div>
            </div>

            <div className="mx-auto max-w-3xl space-y-8">
              <p className="text-muted-foreground">
                Please read these terms and conditions carefully before using Our Service.
              </p>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Interpretation and Definitions</h2>
                <h3 className="text-xl font-semibold">Interpretation</h3>
                <p className="text-muted-foreground">
                  The words of which the initial letter is capitalized have meanings defined under the following
                  conditions. The following definitions shall have the same meaning regardless of whether they appear in
                  singular or in plural.
                </p>

                <h3 className="text-xl font-semibold">Definitions</h3>
                <p className="text-muted-foreground">For the purposes of these Terms and Conditions:</p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>
                    <strong>Application</strong> means the software program provided by the Company downloaded by You on
                    any electronic device, named Meanwhile.
                  </li>
                  <li>
                    <strong>Application Store</strong> means the digital distribution service operated and developed by
                    Apple Inc. (Apple App Store) or Google Inc. (Google Play Store) in which the Application has been
                    downloaded.
                  </li>
                  <li>
                    <strong>Affiliate</strong> means an entity that controls, is controlled by or is under common
                    control with a party, where "control" means ownership of 50% or more of the shares, equity interest
                    or other securities entitled to vote for election of directors or other managing authority.
                  </li>
                  <li>
                    <strong>Account</strong> means a unique account created for You to access our Service or parts of
                    our Service.
                  </li>
                  <li>
                    <strong>Country</strong> refers to: Japan
                  </li>
                  <li>
                    <strong>Company</strong> (referred to as either "the Company", "We", "Us" or "Our" in this
                    Agreement) refers to Infinity Trigger, Nagano, Nagano, Japan.
                  </li>
                  <li>
                    <strong>Device</strong> means any device that can access the Service such as a computer, a cellphone
                    or a digital tablet.
                  </li>
                  <li>
                    <strong>Feedback</strong> means feedback, innovations or suggestions sent by You regarding the
                    attributes, performance or features of our Service.
                  </li>
                  <li>
                    <strong>Free Trial</strong> refers to a limited period of time that may be free when purchasing a
                    Subscription.
                  </li>
                  <li>
                    <strong>In-app Purchase</strong> refers to the purchase of a product, item, service or Subscription
                    made through the Application and subject to these Terms and Conditions and/or the Application
                    Store's own terms and conditions.
                  </li>
                  <li>
                    <strong>Service</strong> refers to the Application.
                  </li>
                  <li>
                    <strong>Subscriptions</strong> refer to the services or access to the Service offered on a
                    subscription basis by the Company to You.
                  </li>
                  <li>
                    <strong>Terms and Conditions</strong> (also referred as "Terms") mean these Terms and Conditions
                    that form the entire agreement between You and the Company regarding the use of the Service.
                  </li>
                  <li>
                    <strong>Third-party Social Media Service</strong> means any services or content (including data,
                    information, products or services) provided by a third- party that may be displayed, included or
                    made available by the Service.
                  </li>
                  <li>
                    <strong>You</strong> means the individual accessing or using the Service, or the company, or other
                    legal entity on behalf of which such individual is accessing or using the Service, as applicable.
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Acknowledgment</h2>
                <p className="text-muted-foreground">
                  These are the Terms and Conditions governing the use of this Service and the agreement that operates
                  between You and the Company. These Terms and Conditions set out the rights and obligations of all
                  users regarding the use of the Service.
                </p>
                <p className="text-muted-foreground">
                  Your access to and use of the Service is conditioned on Your acceptance of and compliance with these
                  Terms and Conditions. These Terms and Conditions apply to all visitors, users and others who access or
                  use the Service.
                </p>
                <p className="text-muted-foreground">
                  By accessing or using the Service You agree to be bound by these Terms and Conditions. If You disagree
                  with any part of these Terms and Conditions then You may not access the Service.
                </p>
                <p className="text-muted-foreground">
                  You represent that you are over the age of 18. The Company does not permit those under 18 to use the
                  Service.
                </p>
                <p className="text-muted-foreground">
                  Your access to and use of the Service is also conditioned on Your acceptance of and compliance with
                  the Privacy Policy of the Company. Our Privacy Policy describes Our policies and procedures on the
                  collection, use and disclosure of Your personal information when You use the Application or the
                  Website and tells You about Your privacy rights and how the law protects You. Please read Our Privacy
                  Policy carefully before using Our Service.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Subscriptions</h2>
                <h3 className="text-xl font-semibold">Subscription period</h3>
                <p className="text-muted-foreground">
                  The Service or some parts of the Service are available only with a paid Subscription. You will be
                  billed in advance on a recurring and periodic basis (such as daily, weekly, monthly or annually),
                  depending on the type of Subscription plan you select when purchasing the Subscription.
                </p>
                <p className="text-muted-foreground">
                  At the end of each period, Your Subscription will automatically renew under the exact same conditions
                  unless You cancel it or the Company cancels it.
                </p>

                <h3 className="text-xl font-semibold">Subscription cancellations</h3>
                <p className="text-muted-foreground">
                  You may cancel Your Subscription renewal either through Your Account settings page or by contacting
                  the Company. You will not receive a refund for the fees You already paid for Your current Subscription
                  period and You will be able to access the Service until the end of Your current Subscription period.
                </p>
                <p className="text-muted-foreground">
                  If the Subscription has been made through an In-app Purchase, You can cancel the renewal of Your
                  Subscription with the Application Store.
                </p>

                <h3 className="text-xl font-semibold">Billing</h3>
                <p className="text-muted-foreground">
                  You shall provide the Company with accurate and complete billing information including full name,
                  address, state, zip code, telephone number, and a valid payment method information.
                </p>
                <p className="text-muted-foreground">
                  Should automatic billing fail to occur for any reason, the Company will issue an electronic invoice
                  indicating that you must proceed manually, within a certain deadline date, with the full payment
                  corresponding to the billing period as indicated on the invoice.
                </p>
                <p className="text-muted-foreground">
                  If the Subscription has been made through an In-app Purchase, all billing is handled by the
                  Application Store and is governed by the Application Store's own terms and conditions.
                </p>

                <h3 className="text-xl font-semibold">Fee Changes</h3>
                <p className="text-muted-foreground">
                  The Company, in its sole discretion and at any time, may modify the Subscription fees. Any
                  Subscription fee change will become effective at the end of the then- current Subscription period.
                </p>
                <p className="text-muted-foreground">
                  The Company will provide You with reasonable prior notice of any change in Subscription fees to give
                  You an opportunity to terminate Your Subscription before such change becomes effective.
                </p>
                <p className="text-muted-foreground">
                  Your continued use of the Service after the Subscription fee change comes into effect constitutes Your
                  agreement to pay the modified Subscription fee amount.
                </p>

                <h3 className="text-xl font-semibold">Refunds</h3>
                <p className="text-muted-foreground">
                  Except when required by law, paid Subscription fees are non-refundable.
                </p>
                <p className="text-muted-foreground">
                  Certain refund requests for Subscriptions may be considered by the Company on a case-by-case basis and
                  granted at the sole discretion of the Company.
                </p>
                <p className="text-muted-foreground">
                  If the Subscription has been made through an In-app Purchase, the Application Store's refund policy
                  will apply. If you wish to request a refund, you may do so by contacting the Application Store
                  directly.
                </p>

                <h3 className="text-xl font-semibold">Free Trial</h3>
                <p className="text-muted-foreground">
                  The Company may, at its sole discretion, offer a Subscription with a Free Trial for a limited period
                  of time.
                </p>
                <p className="text-muted-foreground">
                  You may be required to enter Your billing information in order to sign up for the Free Trial.
                </p>
                <p className="text-muted-foreground">
                  If You do enter Your billing information when signing up for a Free Trial, You will not be charged by
                  the Company until the Free Trial has expired. On the last day of the Free Trial period, unless You
                  cancelled Your Subscription, You will be automatically charged the applicable Subscription fees for
                  the type of Subscription You have selected.
                </p>
                <p className="text-muted-foreground">
                  At any time and without notice, the Company reserves the right to (i) modify the Terms and Conditions
                  of the Free Trial offer, or (ii) cancel such Free Trial offer.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold">In-app Purchases</h2>
                <p className="text-muted-foreground">
                  The Application may include In-app Purchases that allow you to buy products, services or
                  Subscriptions.
                </p>
                <p className="text-muted-foreground">
                  More information about how you may be able to manage In-app Purchases using your Device may be set out
                  in the Application Store's own terms and conditions or in Your Device's Help settings.
                </p>
                <p className="text-muted-foreground">
                  In-app Purchases can only be consumed within the Application. If You make an In- app Purchase, that
                  In-app Purchase cannot be cancelled after You have initiated its download. In-app Purchases cannot be
                  redeemed for cash or other consideration or otherwise transferred.
                </p>
                <p className="text-muted-foreground">
                  If any In-app Purchase is not successfully downloaded or does not work once it has been successfully
                  downloaded, we will, after becoming aware of the fault or being notified of the fault by You,
                  investigate the reason for the fault. We will act reasonably in deciding whether to provide You with a
                  replacement In-app Purchase or to issue You with a patch to repair the fault. In no event will we
                  charge You to replace or repair the In-app Purchase. In the unlikely event that we are unable to
                  replace or repair the relevant In-app Purchase or are unable to do so within a reasonable period of
                  time and without significant inconvenience to You, we will authorize the Application Store to refund
                  You an amount up to the cost of the relevant In-app Purchase. Alternatively, if You wish to request a
                  refund, you may do so by contacting the Application Store directly.
                </p>
                <p className="text-muted-foreground">
                  You acknowledge and agree that all billing and transaction processes are handled by the Application
                  Store from where you downloaded the Application and are governed by that Application Store's own terms
                  and conditions.
                </p>
                <p className="text-muted-foreground">
                  If you have any payment related issues with In-app Purchases, you need to contact the Application
                  Store directly.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold">User Accounts</h2>
                <p className="text-muted-foreground">
                  When You create an account with Us, You must provide Us information that is accurate, complete, and
                  current at all times. Failure to do so constitutes a breach of the Terms, which may result in
                  immediate termination of Your account on Our Service.
                </p>
                <p className="text-muted-foreground">
                  You are responsible for safeguarding the password that You use to access the Service and for any
                  activities or actions under Your password, whether Your password is with Our Service or a Third-Party
                  Social Media Service.
                </p>
                <p className="text-muted-foreground">
                  You agree not to disclose Your password to any third party. You must notify Us immediately upon
                  becoming aware of any breach of security or unauthorized use of Your account.
                </p>
                <p className="text-muted-foreground">
                  You may not use as a username the name of another person or entity or that is not lawfully available
                  for use, a name or trademark that is subject to any rights of another person or entity other than You
                  without appropriate authorization, or a name that is otherwise offensive, vulgar or obscene.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Intellectual Property</h2>
                <p className="text-muted-foreground">
                  The Service and its original content (excluding Content provided by You or other users), features and
                  functionality are and will remain the exclusive property of the Company and its licensors.
                </p>
                <p className="text-muted-foreground">
                  The Service is protected by copyright, trademark, and other laws of both the Country and foreign
                  countries.
                </p>
                <p className="text-muted-foreground">
                  Our trademarks and trade dress may not be used in connection with any product or service without the
                  prior written consent of the Company.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Your Feedback to Us</h2>
                <p className="text-muted-foreground">
                  You assign all rights, title and interest in any Feedback You provide the Company. If for any reason
                  such assignment is ineffective, You agree to grant the Company a non-exclusive, perpetual,
                  irrevocable, royalty free, worldwide right and license to use, reproduce, disclose, sub-license,
                  distribute, modify and exploit such Feedback without restriction.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Links to Other Websites</h2>
                <p className="text-muted-foreground">
                  Our Service may contain links to third-party web sites or services that are not owned or controlled by
                  the Company.
                </p>
                <p className="text-muted-foreground">
                  The Company has no control over, and assumes no responsibility for, the content, privacy policies, or
                  practices of any third party web sites or services. You further acknowledge and agree that the Company
                  shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged
                  to be caused by or in connection with the use of or reliance on any such content, goods or services
                  available on or through any such web sites or services.
                </p>
                <p className="text-muted-foreground">
                  We strongly advise You to read the terms and conditions and privacy policies of any third-party web
                  sites or services that You visit.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Termination</h2>
                <p className="text-muted-foreground">
                  We may terminate or suspend Your Account immediately, without prior notice or liability, for any
                  reason whatsoever, including without limitation if You breach these Terms and Conditions.
                </p>
                <p className="text-muted-foreground">
                  Upon termination, Your right to use the Service will cease immediately. If You wish to terminate Your
                  Account, You may simply discontinue using the Service.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Limitation of Liability</h2>
                <p className="text-muted-foreground">
                  Notwithstanding any damages that You might incur, the entire liability of the Company and any of its
                  suppliers under any provision of this Terms and Your exclusive remedy for all of the foregoing shall
                  be limited to the amount actually paid by You through the Service or 100 USD if You haven't purchased
                  anything through the Service.
                </p>
                <p className="text-muted-foreground">
                  To the maximum extent permitted by applicable law, in no event shall the Company or its suppliers be
                  liable for any special, incidental, indirect, or consequential damages whatsoever (including, but not
                  limited to, damages for loss of profits, loss of data or other information, for business interruption,
                  for personal injury, loss of privacy arising out of or in any way related to the use of or inability
                  to use the Service, third-party software and/or third-party hardware used with the Service, or
                  otherwise in connection with any provision of this Terms), even if the Company or any supplier has
                  been advised of the possibility of such damages and even if the remedy fails of its essential purpose.
                </p>
                <p className="text-muted-foreground">
                  Some states do not allow the exclusion of implied warranties or limitation of liability for incidental
                  or consequential damages, which means that some of the above limitations may not apply. In these
                  states, each party's liability will be limited to the greatest extent permitted by law.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold">"AS IS" and "AS AVAILABLE" Disclaimer</h2>
                <p className="text-muted-foreground">
                  The Service is provided to You "AS IS" and "AS AVAILABLE" and with all faults and defects without
                  warranty of any kind. To the maximum extent permitted under applicable law, the Company, on its own
                  behalf and on behalf of its Affiliates and its and their respective licensors and service providers,
                  expressly disclaims all warranties, whether express, implied, statutory or otherwise, with respect to
                  the Service, including all implied warranties of merchantability, fitness for a particular purpose,
                  title and non-infringement, and warranties that may arise out of course of dealing, course of
                  performance, usage or trade practice. Without limitation to the foregoing, the Company provides no
                  warranty or undertaking, and makes no representation of any kind that the Service will meet Your
                  requirements, achieve any intended results, be compatible or work with any other software,
                  applications, systems or services, operate without interruption, meet any performance or reliability
                  standards or be error free or that any errors or defects can or will be corrected.
                </p>
                <p className="text-muted-foreground">
                  Without limiting the foregoing, neither the Company nor any of the company's provider makes any
                  representation or warranty of any kind, express or implied: (i) as to the operation or availability of
                  the Service, or the information, content, and materials or products included thereon; (ii) that the
                  Service will be uninterrupted or error-free; (iii) as to the accuracy, reliability, or currency of any
                  information or content provided through the Service; or (iv) that the Service, its servers, the
                  content, or e-mails sent from or on behalf of the Company are free of viruses, scripts, trojan horses,
                  worms, malware, timebombs or other harmful components.
                </p>
                <p className="text-muted-foreground">
                  Some jurisdictions do not allow the exclusion of certain types of warranties or limitations on
                  applicable statutory rights of a consumer, so some or all of the above exclusions and limitations may
                  not apply to You. But in such a case the exclusions and limitations set forth in this section shall be
                  applied to the greatest extent enforceable under applicable law.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Governing Law</h2>
                <p className="text-muted-foreground">
                  The laws of the Country, excluding its conflicts of law rules, shall govern this Terms and Your use of
                  the Service. Your use of the Application may also be subject to other local, state, national, or
                  international laws.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Disputes Resolution</h2>
                <p className="text-muted-foreground">
                  If You have any concern or dispute about the Service, You agree to first try to resolve the dispute
                  informally by contacting the Company.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold">For European Union (EU) Users</h2>
                <p className="text-muted-foreground">
                  If You are a European Union consumer, you will benefit from any mandatory provisions of the law of the
                  country in which you are resident in.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold">United States Federal Government End Use Provisions</h2>
                <p className="text-muted-foreground">
                  If You are a U.S. federal government end user, our Service is a "Commercial Item" as that term is
                  defined at 48 C.F.R. §2.101.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold">United States Legal Compliance</h2>
                <p className="text-muted-foreground">
                  You represent and warrant that (i) You are not located in a country that is subject to the United
                  States government embargo, or that has been designated by the United States government as a "terrorist
                  supporting" country, and (ii) You are not listed on any United States government list of prohibited or
                  restricted parties.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Severability and Waiver</h2>
                <h3 className="text-xl font-semibold">Severability</h3>
                <p className="text-muted-foreground">
                  If any provision of these Terms is held to be unenforceable or invalid, such provision will be changed
                  and interpreted to accomplish the objectives of such provision to the greatest extent possible under
                  applicable law and the remaining provisions will continue in full force and effect.
                </p>

                <h3 className="text-xl font-semibold">Waiver</h3>
                <p className="text-muted-foreground">
                  Except as provided herein, the failure to exercise a right or to require performance of an obligation
                  under this Terms shall not effect a party's ability to exercise such right or require such performance
                  at any time thereafter nor shall be the waiver of a breach constitute a waiver of any subsequent
                  breach.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Translation Interpretation</h2>
                <p className="text-muted-foreground">
                  These Terms and Conditions may have been translated if We have made them available to You on our
                  Service. You agree that the original English text shall prevail in the case of a dispute.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Changes to These Terms and Conditions</h2>
                <p className="text-muted-foreground">
                  We reserve the right, at Our sole discretion, to modify or replace these Terms at any time. If a
                  revision is material We will make reasonable efforts to provide at least 30 days' notice prior to any
                  new terms taking effect. What constitutes a material change will be determined at Our sole discretion.
                </p>
                <p className="text-muted-foreground">
                  By continuing to access or use Our Service after those revisions become effective, You agree to be
                  bound by the revised terms. If You do not agree to the new terms, in whole or in part, please stop
                  using the website and the Service.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Contact Us</h2>
                <p className="text-muted-foreground">
                  If you have any questions about these Terms and Conditions, You can contact us:
                </p>
                <p className="text-muted-foreground">By email: meanwhile@infinitytrigger.com</p>
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
        </div>
      </footer>
    </div>
  )
}

