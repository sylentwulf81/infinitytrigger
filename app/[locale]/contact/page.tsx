"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { BrandButton, BrandButtonAlt } from "@/components/BrandButton";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowRight, Mail, MessageSquare, Users, Sparkles } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useState } from "react";

export default function Contact() {
  const translateContact = useTranslations("contact");
  const translateCommon = useTranslations("common");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };

    try {
      // For now, we'll use a simple mailto link as a fallback
      // In a real implementation, you'd send this to your backend
      const mailtoLink = `mailto:support@infinitytrigger.com?subject=${encodeURIComponent(
        data.subject as string
      )}&body=${encodeURIComponent(`
Name: ${data.firstName} ${data.lastName}
Email: ${data.email}

Message:
${data.message}
      `)}`;

      window.location.href = mailtoLink;

      // Reset form
      e.currentTarget.reset();
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

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
                  {translateCommon("contactUs")}
                </div>
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl xl:text-6xl text-brand-dark dark:text-brand-mint">
                  {translateCommon("getInTouch")}
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-600 dark:text-brand-lavender/80 md:text-xl/relaxed lg:text-2xl/relaxed">
                  {translateContact("hero.description")}
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
                    {translateContact("form.title")}
                  </h2>
                  <p className="text-gray-600 dark:text-brand-lavender/80">
                    {translateContact("form.description")}
                  </p>
                </div>

                <Card className="bg-white/50 dark:bg-brand-dark/50 border-brand-teal/20 dark:border-brand-mint/20">
                  <CardContent className="p-6 space-y-4">
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid gap-4 md:grid-cols-2">
                        <div className="space-y-2">
                          <Label
                            htmlFor="first-name"
                            className="text-brand-dark dark:text-brand-mint font-medium">
                            {translateContact("form.fields.name.first")}
                          </Label>
                          <Input
                            id="first-name"
                            name="firstName"
                            placeholder={translateContact(
                              "form.fields.name.firstNamePlaceholder"
                            )}
                            required
                            className="bg-white/80 dark:bg-brand-dark/80 border-brand-teal/20 dark:border-brand-mint/20 focus:border-brand-teal dark:focus:border-brand-mint"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label
                            htmlFor="last-name"
                            className="text-brand-dark dark:text-brand-mint font-medium">
                            {translateContact("form.fields.name.last")}
                          </Label>
                          <Input
                            id="last-name"
                            name="lastName"
                            placeholder={translateContact(
                              "form.fields.name.lastNamePlaceholder"
                            )}
                            className="bg-white/80 dark:bg-brand-dark/80 border-brand-teal/20 dark:border-brand-mint/20 focus:border-brand-teal dark:focus:border-brand-mint"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label
                          htmlFor="email"
                          className="text-brand-dark dark:text-brand-mint font-medium">
                          {translateCommon("email.title")}
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder={translateContact(
                            "form.fields.email.placeholder"
                          )}
                          required
                          className="bg-white/80 dark:bg-brand-dark/80 border-brand-teal/20 dark:border-brand-mint/20 focus:border-brand-teal dark:focus:border-brand-mint"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label
                          htmlFor="subject"
                          className="text-brand-dark dark:text-brand-mint font-medium">
                          {translateContact("form.fields.subject.label")}
                        </Label>
                        <Select name="subject" required>
                          <SelectTrigger className="bg-white/80 dark:bg-brand-dark/80 border-brand-teal/20 dark:border-brand-mint/20 focus:border-brand-teal dark:focus:border-brand-mint">
                            <SelectValue
                              placeholder={translateContact(
                                "form.fields.subject.placeholder"
                              )}
                            />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="App Support - Meanwhile">
                              {translateContact(
                                "form.fields.subject.options.appSupportMeanwhile"
                              )}
                            </SelectItem>
                            <SelectItem value="App Support - Myriad Worlds">
                              {translateContact(
                                "form.fields.subject.options.appSupportMyriadWorlds"
                              )}
                            </SelectItem>
                            <SelectItem value="Feature Suggestion">
                              {translateContact(
                                "form.fields.subject.options.featureSuggestion"
                              )}
                            </SelectItem>
                            <SelectItem value="TestFlight Inquiries">
                              {translateContact(
                                "form.fields.subject.options.testFlightInquiry"
                              )}
                            </SelectItem>
                            <SelectItem value="Privacy Concern">
                              {translateContact(
                                "form.fields.subject.options.privacyConcern"
                              )}
                            </SelectItem>
                            <SelectItem value="Other Issue">
                              {translateContact(
                                "form.fields.subject.options.otherIssue"
                              )}
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label
                          htmlFor="message"
                          className="text-brand-dark dark:text-brand-mint font-medium">
                          {translateContact("form.fields.message.label")}
                        </Label>
                        <Textarea
                          id="message"
                          name="message"
                          placeholder={translateContact(
                            "form.fields.message.placeholder"
                          )}
                          required
                          className="min-h-[120px] bg-white/80 dark:bg-brand-dark/80 border-brand-teal/20 dark:border-brand-mint/20 focus:border-brand-teal dark:focus:border-brand-mint"
                        />
                      </div>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-brand-teal text-white font-semibold px-8 py-4 rounded-lg hover:bg-brand-mint hover:text-brand-dark transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2">
                        {isSubmitting ? (
                          <>
                            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                            {translateContact(
                              "form.fields.submitButton.sending"
                            )}
                          </>
                        ) : (
                          <>
                            {translateContact("form.fields.submitButton.label")}
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </>
                        )}
                      </button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Info */}
              <div className="space-y-8">
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-brand-dark dark:text-brand-mint">
                    {translateContact("infoPanel.title")}
                  </h2>
                  <p className="text-gray-600 dark:text-brand-lavender/80">
                    {translateContact("infoPanel.description")}
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
                            {translateContact(
                              "infoPanel.supportCards.emailUs.title"
                            )}
                          </h3>
                          <Link
                            href="mailto:support@infinitytrigger.com"
                            className="text-brand-teal hover:text-brand-dark dark:text-brand-mint/80 dark:hover:text-brand-mint transition-colors">
                            {translateCommon("email.address")}
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
                            {translateContact(
                              "infoPanel.supportCards.testing.title"
                            )}
                          </h3>
                          <p className="text-gray-600 dark:text-brand-lavender/80">
                            {translateContact(
                              "infoPanel.supportCards.testing.description"
                            )}
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
                            {translateContact(
                              "infoPanel.supportCards.community.title"
                            )}
                          </h3>
                          <p className="text-gray-600 dark:text-brand-lavender/80">
                            {translateContact(
                              "infoPanel.supportCards.community.description"
                            )}
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
                  {translateContact("faq.title")}
                </h2>
                <p className="text-gray-600 dark:text-brand-lavender/80">
                  {translateContact("faq.description")}
                </p>
              </div>

              <Accordion
                type="single"
                collapsible
                className="w-full max-w-3xl mx-auto bg-white dark:bg-brand-dark dark:text-brand-mint">
                <AccordionItem
                  value="item-1"
                  className="border-brand-teal/20 dark:border-brand-mint/20">
                  <AccordionTrigger className="text-2xl font-bold text-gray-900 dark:text-brand-mint hover:bg-brand-mint/10 dark:hover:bg-brand-gray dark:hover:text-brand-dark transition-all duration-300 hover:no-underline text-left w-full pl-4">
                    {translateContact("faq.questions.download")}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 leading-relaxed dark:text-white">
                    {translateContact("faq.answers.downloadPart1")}
                    <Link
                      href="https://apps.apple.com/us/app/myriad-worlds/id6748325367"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-brand-teal hover:text-brand-dark dark:text-brand-mint dark:hover:text-brand-mint/80 transition-colors">
                      {translateCommon("appStore")}
                    </Link>
                    {translateContact("faq.answers.downloadPart2")}
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="item-2"
                  className="border-brand-teal/20 dark:border-brand-mint/20">
                  <AccordionTrigger className="text-2xl font-bold text-gray-900 dark:text-brand-mint hover:bg-brand-mint/10 dark:hover:bg-brand-gray dark:hover:text-brand-dark transition-all duration-300 hover:no-underline text-left w-full pl-4">
                    {translateContact("faq.questions.available")}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 leading-relaxed dark:text-white">
                    {translateContact("faq.answers.available")}
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="item-3"
                  className="border-brand-teal/20 dark:border-brand-mint/20">
                  <AccordionTrigger className="text-2xl font-bold text-gray-900 dark:text-brand-mint hover:bg-brand-mint/10 dark:hover:bg-brand-gray dark:hover:text-brand-dark transition-all duration-300 hover:no-underline text-left w-full pl-4">
                    {translateContact("faq.questions.license")}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 leading-relaxed dark:text-white">
                    {translateContact("faq.answers.license")}
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="item-4"
                  className="border-brand-teal/20 dark:border-brand-mint/20">
                  <AccordionTrigger className="text-2xl font-bold text-gray-900 dark:text-brand-mint hover:bg-brand-mint/10 dark:hover:bg-brand-gray dark:hover:text-brand-dark transition-all duration-300 hover:no-underline text-left w-full pl-4">
                    {translateContact("faq.questions.customSoftware")}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 leading-relaxed dark:text-white">
                    {translateContact("faq.answers.customSoftware")}
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
                  {translateContact("cta.title")}
                </h2>
                <p className="mx-auto max-w-[700px] text-white/90 dark:text-white md:text-xl">
                  {translateContact("cta.description")}
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                <Link
                  href="https://apps.apple.com/us/app/myriad-worlds/id6748325367"
                  target="_blank"
                  rel="noopener noreferrer">
                  <BrandButton>
                    {translateCommon("downloadOnAppStore")}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </BrandButton>
                </Link>
                <Link href="/products">
                  <BrandButtonAlt>
                    {translateCommon("exploreProducts")}
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
