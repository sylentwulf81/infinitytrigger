import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function TermsOfServicePage() {
  return (
    <section className="w-full py-12 md:py-24 bg-gray-50 dark:bg-brand-dark dark:text-brand-mint">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900 dark:text-brand-mint">
              Terms of Service
            </h1>
            <p className="text-gray-600 dark:text-white">
              Last updated:{" "}
              {new Date().toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </p>
          </div>
        </div>

        <Accordion
          type="single"
          collapsible
          className="w-full max-w-3xl mx-auto bg-white dark:bg-brand-dark dark:text-brand-mint"
        >
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-2xl font-bold text-gray-900 dark:text-brand-mint hover:bg-brand-mint/10 dark:hover:bg-brand-gray dark:hover:text-brand-dark transition-all duration-300 hover:no-underline">
              Agreement to Terms
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-gray-700 leading-relaxed dark:text-white">
                These Terms of Service ("Terms") constitute a legally binding
                agreement between you and Infinity Trigger ("we," "our," or
                "us", "the Company") regarding your access to and use of our
                website, applications, communication channels, and services
                (collectively, the "Services"). By accessing or using our
                Services, you agree to be bound by these Terms. If you do not
                agree to these Terms, you may not access or use the Services.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger className="text-2xl font-bold text-gray-900 dark:text-brand-mint hover:bg-brand-mint/10 dark:hover:bg-brand-gray dark:hover:text-brand-dark transition-all duration-300 hover:no-underline">
              Services and Accounts
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-gray-700 leading-relaxed dark:text-white">
                Infinity Trigger provides web applications, native mobile
                applications, and digital application development services. We
                reserve the right to modify, suspend, or discontinue any aspect
                of our Services at any time. Some Services may require you to
                create an account, and you are responsible for providing
                accurate information and safeguarding your account credentials.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger className="text-2xl font-bold text-gray-900 dark:text-brand-mint hover:bg-brand-mint/10 dark:hover:bg-brand-gray dark:hover:text-brand-dark transition-all duration-300 hover:no-underline">
              Intellectual Property
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-gray-700 leading-relaxed dark:text-white">
                The Services and their original content are owned by Infinity
                Trigger and are protected by intellectual property laws. Content
                within specific Services may be covered under Creative Commons
                licenses. Please refer to the specific Service's terms of
                service for more information. You retain ownership of materials
                you provide to us or create using our Services, but you grant us
                a license to use them to provide, advertise, or improve our
                Services. In the case of application or web development
                services, in which payment is rendered in exchange for design
                and development services, upon full payment to the Company for
                the aforementioned services rendered, we assign to you all
                applicable rights to the deliverables created for you, with some
                exceptions.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger className="text-2xl font-bold text-gray-900 dark:text-brand-mint hover:bg-brand-mint/10 dark:hover:bg-brand-gray dark:hover:text-brand-dark transition-all duration-300 hover:no-underline">
              Payment, Liability, and Termination
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-gray-700 leading-relaxed dark:text-white">
                In the case of application or web development services, payment
                terms will be specified in your project proposal. We are not
                liable for any indirect or consequential damages arising from
                your use of the Services. We may terminate or suspend your
                access to the Services at any time for any reason, including if
                you breach these Terms. In the case of our mobile applications
                or native web applications, usage, payment, and other terms will
                be specified in that product's terms of service and each product
                may have additional terms as required.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5">
            <AccordionTrigger className="text-2xl font-bold text-gray-900 dark:text-brand-mint hover:bg-brand-mint/10 dark:hover:bg-brand-gray dark:hover:text-brand-dark transition-all duration-300 hover:no-underline">
              Governing Law and Changes
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-gray-700 leading-relaxed dark:text-white">
                These Terms are governed by the laws of the United States and
                Japan. We reserve the right to modify these Terms at any time.
                right to modify these Terms at any time. If a revision is
                material, we will provide at least 30 days' notice to all users of the Services.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-6">
            <AccordionTrigger className="text-2xl font-bold text-gray-900 dark:text-brand-mint hover:bg-brand-mint/10 dark:hover:bg-brand-gray dark:hover:text-brand-dark transition-all duration-300 hover:no-underline">
              Contact Us
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-gray-700 leading-relaxed dark:text-white">
                If you have any questions about these Terms, please contact us
                at:
              </p>
              <div className="text-gray-700 leading-relaxed mt-4 dark:text-white">
                <p>Infinity Trigger</p>
                <p>
                  Email:{" "}
                  <a
                    href="mailto:support@infinitytrigger.com"
                    className="text-brand-gray hover:text-brand-mint dark:text-brand-mint dark:hover:text-white transition-colors underline underline-offset-2"
                  >
                    support@infinitytrigger.com
                  </a>
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

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
  );
}
