import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Globe2, Accessibility, Users } from "lucide-react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"

export default function ValuesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gradient-to-b dark:from-brand-dark dark:to-brand-dark">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-16 bg-brand-mint/20 dark:bg-transparent">
          <div className="container px-4 md:px-6 flex flex-col items-center text-center gap-8">
            <h1 className="text-5xl md:text-6xl font-extrabold text-brand-dark dark:text-brand-mint leading-tight">
              Our Values
            </h1>
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-brand-dark/80 dark:text-white font-medium">
              At Infinity Trigger, we believe in creating a positive impact through our work. Our values guide everything we do.
            </p>
          </div>
        </section>

        {/* Values Cards Section */}
        <section className="w-full py-12 bg-transparent">
          <div className="container px-4 md:px-6">
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="bg-brand-dark/50 dark:bg-brand-dark/60 border-brand-lavender dark:border-brand-mint border-2">
                <CardHeader className="space-y-1">
                  <div className="w-12 h-12 rounded-lg bg-brand-lavender flex items-center justify-center mb-2">
                    <Globe2 className="w-6 h-6 text-brand-teal" />
                  </div>
                  <CardTitle className="text-xl text-white dark:text-brand-mint">Sustainable Development Goals</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-white dark:text-brand-lavender">
                    We are committed to supporting the UN&apos;s Sustainable Development Goals through our products and operations. 
                    Our focus areas include quality education, sustainable cities, and climate action.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-brand-dark/50 dark:bg-brand-dark/60 border-brand-lavender dark:border-brand-mint border-2">
                <CardHeader className="space-y-1">
                  <div className="w-12 h-12 rounded-lg bg-brand-lavender flex items-center justify-center mb-2">
                    <Accessibility className="w-6 h-6 text-brand-teal" />
                  </div>
                  <CardTitle className="text-xl text-white dark:text-brand-mint">Accessibility</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-white dark:text-brand-lavender">
                    We believe technology should be accessible to everyone. Our products are designed with WCAG guidelines in mind, 
                    ensuring that all users can engage with our content regardless of their abilities.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-brand-dark/50 dark:bg-brand-dark/60 border-brand-lavender dark:border-brand-mint border-2">
                <CardHeader className="space-y-1">
                  <div className="w-12 h-12 rounded-lg bg-brand-lavender flex items-center justify-center mb-2">
                    <Users className="w-6 h-6 text-brand-teal" />
                  </div>
                  <CardTitle className="text-xl text-white dark:text-brand-mint">Diversity & Inclusion</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-white dark:text-brand-lavender">
                    We celebrate diversity in all its forms. Our team and products reflect our commitment to creating inclusive 
                    spaces where everyone feels welcome and represented.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Our Commitment Section */}
        <section className="w-full py-8 bg-transparent">
          <div className="container px-4 md:px-6">
            <Card className="bg-brand-dark/50 dark:bg-brand-dark/60 border-brand-lavender dark:border-brand-mint border-2 max-w-2xl mx-auto">
              <CardContent className="pt-6">
                <div className="text-center space-y-4">
                  <h2 className="text-2xl font-bold text-white dark:text-brand-mint">Our Commitment</h2>
                  <p className="text-base text-white dark:text-brand-lavender">
                    These values aren&apos;t just words on a page – they&apos;re the principles that guide our decision-making, 
                    product development, and company culture. We continuously strive to improve and make a positive impact in 
                    everything we do.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
    </div>
  );
} 