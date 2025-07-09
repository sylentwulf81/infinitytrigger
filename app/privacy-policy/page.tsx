import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function PrivacyPolicyPage() {
  return (
    <section className="w-full py-12 md:py-24 bg-gray-50 dark:bg-brand-dark dark:text-brand-mint">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900 dark:text-brand-mint">
              Privacy Policy
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

        <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto bg-white dark:bg-brand-dark dark:text-brand-mint">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-2xl font-bold text-gray-900 dark:text-brand-mint hover:bg-brand-mint/10 dark:hover:bg-brand-gray dark:hover:text-brand-dark transition-all duration-300 hover:no-underline">
              Introduction
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-gray-700 leading-relaxed dark:text-white">
                At Infinity Trigger, we believe in that privacy is a
                fundamental right. We consider any data that personally
                identifies you - such as name, address, and phone number,
                among other data - as personal data.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4 dark:text-white">
                This Privacy Policy covers how Infinity Trigger ("the
                Company", "we," "our," or "us") handles personal data
                whether you interact with us on our websites, through our
                apps (such as Myriad Worlds or Meanwhile), via email
                through our support channels, via phone, or through any
                other means of communication or interaction with the
                Company.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4 dark:text-white">
                Aggregated data is considered non‑personal data for the
                purposes of this Privacy Policy. Our Privacy Policy does
                not cover how external third parties define "personal
                data", how they collect, store, use, or share it. We
                encourage you to read their privacy policies and know your
                privacy rights.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4 dark:text-white">
                Please read this Privacy Policy carefully. By accessing or
                using our Services, you acknowledge that you have read,
                understood, and agree to be bound by the terms of this
                Privacy Policy.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-2xl font-bold text-gray-900 dark:text-brand-mint hover:bg-brand-mint/10 dark:hover:bg-brand-gray dark:hover:text-brand-dark transition-all duration-300 hover:no-underline">
              Personal Data We Collect
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-gray-700 leading-relaxed dark:text-white">
                We may collect personal information that you voluntarily
                provide to us when you:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 leading-relaxed mt-4 dark:text-white">
                <li>Fill out forms on our website</li>
                <li>Create an account</li>
                <li>
                  Contact us via email, phone, or other communication
                  channels
                </li>
                <li>Subscribe to our newsletter</li>
                <li>Request customer support</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4 dark:text-white">
                The personal information we collect may include: name, email
                address, phone number, company name, job title, and billing
                information.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-2xl font-bold text-gray-900 dark:text-brand-mint hover:bg-brand-mint/10 dark:hover:bg-brand-gray dark:hover:text-brand-dark transition-all duration-300 hover:no-underline">
              Children and Personal Data
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-gray-700 leading-relaxed dark:text-white">
                Our Services are not intended for individuals under the age
                of 13 in the United States or under the age of 15 in Japan,
                unless parental consent has been provided. We do not
                knowingly collect personal information from children under
                these ages without such consent. If you are a parent or
                guardian and believe that your child has provided us with
                personal information without your consent, please contact us
                at support@infinitytrigger.com.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="text-2xl font-bold text-gray-900 dark:text-brand-mint hover:bg-brand-mint/10 dark:hover:bg-brand-gray dark:hover:text-brand-dark transition-all duration-300 hover:no-underline">
              Our Technologies
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-gray-700 leading-relaxed dark:text-white">
                When you access our Services, we may use technologies like
                cookies and other identifiers to automatically collect
                certain information, including:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 leading-relaxed mt-4 dark:text-white">
                <li>
                  Device information (e.g., device type, operating system)
                </li>
                <li>IP address</li>
                <li>Browser type and version</li>
                <li>Pages visited and time spent on those pages</li>
                <li>Referring website addresses</li>
                <li>Geographic location</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4 dark:text-white">
                This information helps us to improve our services, analyze
                trends, and administer the site.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger className="text-2xl font-bold text-gray-900 dark:text-brand-mint hover:bg-brand-mint/10 dark:hover:bg-brand-gray dark:hover:text-brand-dark transition-all duration-300 hover:no-underline">
              Our Commitment to Your Privacy
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-gray-700 leading-relaxed dark:text-white">
                We are committed to protecting your privacy. We implement
                appropriate technical and organizational measures to protect
                the security of your personal information. We may update our
                Privacy Policy from time to time, and we will notify you of
                any changes by posting the new Privacy Policy on this page
                and updating the "Last updated" date.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4 dark:text-white">
                You have rights regarding your personal information,
                including the right to access, rectify, or delete your data.
                To exercise these rights, or if you have any questions about
                this Privacy Policy, please contact us at:
              </p>
              <div className="text-gray-700 leading-relaxed mt-4 dark:text-white">
                <p>Infinity Trigger</p>
                <p>Email: support@infinitytrigger.com</p>
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
