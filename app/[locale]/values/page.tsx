import { useTranslations } from "next-intl";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Globe2, Accessibility, Users } from "lucide-react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

export default function ValuesPage() {
  const translateValues = useTranslations("valuesPage");

  return (
    <div className="flex flex-col min-h-screen bg-transparent dark:bg-transparent">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-16 bg-transparent dark:bg-transparent">
          <div className="container px-4 md:px-6 flex flex-col items-center text-center gap-8">
            <h1 className="text-5xl md:text-6xl font-extrabold text-brand-dark dark:text-brand-mint leading-tight">
              {translateValues("title")}
            </h1>
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-brand-dark/80 dark:text-white font-medium">
              {translateValues("description")}
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
                  <CardTitle className="text-xl text-white dark:text-brand-mint">
                    {translateValues("sustainableGoals.title")}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-white dark:text-brand-lavender">
                    {translateValues("sustainableGoals.description")}
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-brand-dark/50 dark:bg-brand-dark/60 border-brand-lavender dark:border-brand-mint border-2">
                <CardHeader className="space-y-1">
                  <div className="w-12 h-12 rounded-lg bg-brand-lavender flex items-center justify-center mb-2">
                    <Accessibility className="w-6 h-6 text-brand-teal" />
                  </div>
                  <CardTitle className="text-xl text-white dark:text-brand-mint">
                    {translateValues("accessibility.title")}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-white dark:text-brand-lavender">
                    {translateValues("accessibility.description")}
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-brand-dark/50 dark:bg-brand-dark/60 border-brand-lavender dark:border-brand-mint border-2">
                <CardHeader className="space-y-1">
                  <div className="w-12 h-12 rounded-lg bg-brand-lavender flex items-center justify-center mb-2">
                    <Users className="w-6 h-6 text-brand-teal" />
                  </div>
                  <CardTitle className="text-xl text-white dark:text-brand-mint">
                    {translateValues("diversity&Inclusion.title")}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-white dark:text-brand-lavender">
                    {translateValues("diversity&Inclusion.description")}
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
                  <h2 className="text-2xl font-bold text-white dark:text-brand-mint">
                    {translateValues("commitment.title")}
                  </h2>
                  <p className="text-base text-white dark:text-brand-lavender">
                    {translateValues("commitment.description")}
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
