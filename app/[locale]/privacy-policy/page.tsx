import { getLocale, getTranslations } from "next-intl/server";
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

export default async function PrivacyPolicyPage() {
  const locale = await getLocale();
  const translatePrivacyPolicy = await getTranslations({
    locale,
    namespace: "privacyPolicy",
  });
  const translateCommon = await getTranslations({
    locale,
    namespace: "common",
  });

  return (
    <section className="w-full py-12 md:py-24 bg-gray-50 dark:bg-brand-dark dark:text-brand-mint">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900 dark:text-brand-mint">
              {translatePrivacyPolicy("title")}
            </h1>
            <p className="text-gray-600 dark:text-white">
              {translateCommon("updatedDate")}
              {new Date().toLocaleDateString(locale, {
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
          className="w-full max-w-3xl mx-auto bg-white dark:bg-brand-dark dark:text-brand-mint">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-2xl font-bold text-gray-900 dark:text-brand-mint hover:bg-brand-mint/10 dark:hover:bg-brand-gray dark:hover:text-brand-dark transition-all duration-300 hover:no-underline">
              {translatePrivacyPolicy("accordionOptions.introduction.title")}
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-gray-700 leading-relaxed dark:text-white">
                {translatePrivacyPolicy(
                  "accordionOptions.introduction.descriptionParagraph1"
                )}
              </p>
              <p className="text-gray-700 leading-relaxed mt-4 dark:text-white">
                {translatePrivacyPolicy(
                  "accordionOptions.introduction.descriptionParagraph2"
                )}
              </p>
              <p className="text-gray-700 leading-relaxed mt-4 dark:text-white">
                {translatePrivacyPolicy(
                  "accordionOptions.introduction.descriptionParagraph3"
                )}
              </p>
              <p className="text-gray-700 leading-relaxed mt-4 dark:text-white">
                {translatePrivacyPolicy(
                  "accordionOptions.introduction.descriptionParagraph4"
                )}
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-2xl font-bold text-gray-900 dark:text-brand-mint hover:bg-brand-mint/10 dark:hover:bg-brand-gray dark:hover:text-brand-dark transition-all duration-300 hover:no-underline">
              {translatePrivacyPolicy("accordionOptions.collectedData.title")}
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-gray-700 leading-relaxed dark:text-white">
                {translatePrivacyPolicy(
                  "accordionOptions.collectedData.descriptionParagraph1"
                )}
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 leading-relaxed mt-4 dark:text-white">
                <li>
                  {translatePrivacyPolicy(
                    "accordionOptions.collectedData.bulletPoints.forms"
                  )}
                </li>
                <li>
                  {translatePrivacyPolicy(
                    "accordionOptions.collectedData.bulletPoints.account"
                  )}
                </li>
                <li>
                  {translatePrivacyPolicy(
                    "accordionOptions.collectedData.bulletPoints.communication"
                  )}
                </li>
                <li>
                  {translatePrivacyPolicy(
                    "accordionOptions.collectedData.bulletPoints.subscribe"
                  )}
                </li>
                <li>
                  {translatePrivacyPolicy(
                    "accordionOptions.collectedData.bulletPoints.support"
                  )}
                </li>
                <li>
                  {translatePrivacyPolicy(
                    "accordionOptions.collectedData.bulletPoints.participate"
                  )}
                </li>
                <li>
                  {translatePrivacyPolicy(
                    "accordionOptions.collectedData.bulletPoints.access"
                  )}
                </li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4 dark:text-white">
                {translatePrivacyPolicy(
                  "accordionOptions.collectedData.descriptionParagraph2"
                )}
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-2xl font-bold text-gray-900 dark:text-brand-mint hover:bg-brand-mint/10 dark:hover:bg-brand-gray dark:hover:text-brand-dark transition-all duration-300 hover:no-underline">
              {translatePrivacyPolicy("accordionOptions.children&Data.title")}
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-gray-700 leading-relaxed dark:text-white">
                {translatePrivacyPolicy(
                  "accordionOptions.children&Data.description"
                )}
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="text-2xl font-bold text-gray-900 dark:text-brand-mint hover:bg-brand-mint/10 dark:hover:bg-brand-gray dark:hover:text-brand-dark transition-all duration-300 hover:no-underline">
              {translatePrivacyPolicy("accordionOptions.ourTechnologies.title")}
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-gray-700 leading-relaxed dark:text-white">
                {translatePrivacyPolicy(
                  "accordionOptions.ourTechnologies.descriptionParagraph1"
                )}
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 leading-relaxed mt-4 dark:text-white">
                <li>
                  {translatePrivacyPolicy(
                    "accordionOptions.ourTechnologies.bulletPoints.deviceInfo"
                  )}
                </li>
                <li>
                  {translatePrivacyPolicy(
                    "accordionOptions.ourTechnologies.bulletPoints.ip"
                  )}
                </li>
                <li>
                  {translatePrivacyPolicy(
                    "accordionOptions.ourTechnologies.bulletPoints.browser"
                  )}
                </li>
                <li>
                  {translatePrivacyPolicy(
                    "accordionOptions.ourTechnologies.bulletPoints.pages"
                  )}
                </li>
                <li>
                  {translatePrivacyPolicy(
                    "accordionOptions.ourTechnologies.bulletPoints.referring"
                  )}
                </li>
                <li>
                  {translatePrivacyPolicy(
                    "accordionOptions.ourTechnologies.bulletPoints.location"
                  )}
                </li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4 dark:text-white">
                {translatePrivacyPolicy(
                  "accordionOptions.ourTechnologies.descriptionParagraph2"
                )}
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger className="text-2xl font-bold text-gray-900 dark:text-brand-mint hover:bg-brand-mint/10 dark:hover:bg-brand-gray dark:hover:text-brand-dark transition-all duration-300 hover:no-underline">
              {translatePrivacyPolicy("accordionOptions.yourPrivacy.title")}
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-gray-700 leading-relaxed dark:text-white">
                {translatePrivacyPolicy(
                  "accordionOptions.yourPrivacy.descriptionParagraph1"
                )}
              </p>
              <p className="text-gray-700 leading-relaxed mt-4 dark:text-white">
                {translatePrivacyPolicy(
                  "accordionOptions.yourPrivacy.descriptionParagraph2"
                )}
              </p>
              <div className="text-gray-700 leading-relaxed mt-4 dark:text-white">
                <p>{translateCommon("title")}</p>
                <p>
                  {`${translateCommon("email.title")}: `}
                  <a
                    href="mailto:support@infinitytrigger.com"
                    className="text-brand-gray hover:text-brand-mint dark:text-brand-mint dark:hover:text-white transition-colors underline underline-offset-2">
                    {translateCommon("email.address")}
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
              className="gap-1 group transition-all duration-300 hover:bg-background/80 border-primary/20 hover:border-primary/50">
              <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform duration-300" />
              <span>{translateCommon("backtoHome")}</span>
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
