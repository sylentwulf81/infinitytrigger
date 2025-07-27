import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ArrowRight,
  Heart,
  Users,
  Lightbulb,
  Sparkles,
  Target,
  MapPin,
  Mail,
  Github,
  Linkedin,
} from "lucide-react";
import { useTranslations } from "next-intl";

export default function Team() {
  const translateTeam = useTranslations("team");
  const translateCommon = useTranslations("common");
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-16 bg-gradient-to-b from-brand-mint/20 to-brand-lavender dark:bg-gradient-to-b dark:from-brand-dark dark:to-brand-dark">
          <div className="max-w-7xl mx-auto px-4 md:px-6 flex flex-col items-center text-center gap-8">
            <h1 className="text-5xl md:text-6xl font-extrabold text-brand-dark dark:text-brand-mint leading-tight">
              {translateTeam("hero.title")}
            </h1>
            <p className="max-w-3xl mx-auto text-lg md:text-xl text-brand-dark/80 dark:text-white font-medium">
              {translateTeam("hero.description1")}
            </p>
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-brand-dark/80 dark:text-white font-medium">
              {translateTeam("hero.description2")}
            </p>
          </div>
        </section>

        {/* Team Members Section */}
        <section className="w-full py-16 bg-gradient-to-b from-brand-lavender to-brand-teal dark:bg-gradient-to-b dark:from-brand-dark dark:to-brand-teal">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-dark dark:text-brand-mint mb-2">
                {translateTeam("teamMembers.title")}
              </h2>
              <p className="max-w-xl mx-auto text-brand-dark/80 dark:text-white/80 text-lg">
                {translateTeam("teamMembers.subtitle")}
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
              {/* Team Member 1 */}
              <Card className="bg-brand-dark/60 rounded-2xl shadow-lg p-8 border-2 border-brand-gray dark:border-brand-mint">
                <CardHeader className="text-center">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden bg-brand-mint/20 flex items-center justify-center">
                    <Image
                      src="/Assets/team_images/headshot_anthony_lavizzo.png"
                      alt="Anthony Lavizzo - Founder & Lead Developer"
                      width={128}
                      height={128}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardTitle className="text-2xl font-bold text-brand-mint">
                    {translateTeam("teamMembers.anthony.name")}
                  </CardTitle>
                  <p className="text-brand-mint/80 text-lg">{translateTeam("teamMembers.anthony.role")}</p>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-white/80 leading-relaxed mb-4">
                    {translateTeam("teamMembers.anthony.description")}
                  </p>
                  <div className="flex items-center justify-center gap-2 text-sm text-brand-mint/60 mb-4">
                    <MapPin className="h-4 w-4" />
                    <span>{translateTeam("teamMembers.anthony.location")}</span>
                  </div>
                  <div className="flex justify-center gap-3">
                    <Button variant="ghost" size="sm" className="text-brand-mint hover:text-white">
                      <Mail className="h-4 w-4" />
                    </Button>
                    <a href="https://github.com/sylentwulf81" target="_blank" rel="noopener noreferrer">
                      <Button variant="ghost" size="sm" className="text-brand-mint hover:text-white">
                        <Github className="h-4 w-4" />
                      </Button>
                    </a>
                    <a href="https://www.linkedin.com/in/damienlavizzo/" target="_blank" rel="noopener noreferrer">
                      <Button variant="ghost" size="sm" className="text-brand-mint hover:text-white">
                        <Linkedin className="h-4 w-4" />
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>

              {/* Team Member 2 */}
              <Card className="bg-brand-dark/60 rounded-2xl shadow-lg p-8 border-2 border-brand-gray dark:border-brand-mint">
                <CardHeader className="text-center">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden bg-brand-mint/20 flex items-center justify-center">
                    <Image
                      src="/Assets/team_images/headshot_tanner_galloway.png"
                      alt="Tanner Galloway - Full Stack Developer"
                      width={128}
                      height={128}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardTitle className="text-2xl font-bold text-brand-mint">
                    {translateTeam("teamMembers.tanner.name")}
                  </CardTitle>
                  <p className="text-brand-mint/80 text-lg">{translateTeam("teamMembers.tanner.role")}</p>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-white/80 leading-relaxed mb-4">
                    {translateTeam("teamMembers.tanner.description")}
                  </p>
                  <div className="flex items-center justify-center gap-2 text-sm text-brand-mint/60 mb-4">
                    <MapPin className="h-4 w-4" />
                    <span>{translateTeam("teamMembers.tanner.location")}</span>
                  </div>
                  <div className="flex justify-center gap-3">
                    <Button variant="ghost" size="sm" className="text-brand-mint hover:text-white">
                      <Mail className="h-4 w-4" />
                    </Button>
                    <a href="https://github.com/orgs/TeamTandamett/people/TannerGalloway" target="_blank" rel="noopener noreferrer">
                      <Button variant="ghost" size="sm" className="text-brand-mint hover:text-white">
                        <Github className="h-4 w-4" />
                      </Button>
                    </a>
                    <a href="https://www.linkedin.com/in/tanner-galloway/" target="_blank" rel="noopener noreferrer">
                      <Button variant="ghost" size="sm" className="text-brand-mint hover:text-white">
                        <Linkedin className="h-4 w-4" />
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>

              {/* Team Member 3 */}
              <Card className="bg-brand-dark/60 rounded-2xl shadow-lg p-8 border-2 border-brand-gray dark:border-brand-mint">
                <CardHeader className="text-center">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden bg-brand-mint/20 flex items-center justify-center">
                    <Sparkles className="h-12 w-12 text-brand-mint" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-brand-mint">
                    {translateTeam("teamMembers.john.name")}
                  </CardTitle>
                  <p className="text-brand-mint/80 text-lg">{translateTeam("teamMembers.john.role")}</p>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-white/80 leading-relaxed mb-4">
                    {translateTeam("teamMembers.john.description")}
                  </p>
                  <div className="flex items-center justify-center gap-2 text-sm text-brand-mint/60 mb-4">
                    <MapPin className="h-4 w-4" />
                    <span>{translateTeam("teamMembers.john.location")}</span>
                  </div>
                  <div className="flex justify-center gap-3">
                    <Button variant="ghost" size="sm" className="text-brand-mint hover:text-white">
                      <Mail className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="text-brand-mint hover:text-white">
                      <Github className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="text-brand-mint hover:text-white">
                      <Linkedin className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Our Approach Section */}
        <section className="w-full py-16 bg-gradient-to-b from-brand-teal to-brand-mint/20 dark:bg-gradient-to-b dark:from-brand-teal dark:to-brand-dark/50">
          <div className="container px-4 md:px-6">
            <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-2 items-center">
              <Card className="bg-brand-dark/60 rounded-2xl shadow-lg p-8 border-2 border-brand-gray dark:border-brand-mint">
                <CardHeader>
                  <CardTitle className="text-3xl md:text-4xl font-bold text-brand-mint">
                    {translateTeam("approach.title")}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-white/80 leading-relaxed">
                    {translateTeam("approach.description1")}
                  </p>
                  <p className="text-lg text-white/80 leading-relaxed mt-4">
                    {translateTeam("approach.description2")}
                  </p>
                </CardContent>
              </Card>
              <Image
                src="/images/office.png"
                alt="Our office in Nagano City, where creativity meets technology."
                width={600}
                height={400}
                className="rounded-2xl shadow-lg object-cover w-full h-full"
              />
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="w-full py-16 bg-gradient-to-b from-brand-mint/20 to-brand-lavender dark:bg-gradient-to-b dark:from-brand-dark/50 dark:to-brand-dark">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-dark dark:text-brand-mint mb-2">
                {translateTeam("values.title")}
              </h2>
              <p className="max-w-xl mx-auto text-brand-dark/80 dark:text-white/80 text-lg">
                {translateTeam("values.subtitle")}
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
              <div className="bg-brand-dark/60 rounded-2xl shadow-lg p-8 flex flex-col gap-4 items-start border-2 border-brand-gray dark:border-brand-mint">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-3 rounded-full bg-brand-dark/60">
                    <Users className="h-7 w-7 text-brand-mint" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-brand-mint">
                      {translateTeam("values.collaboration.title")}
                    </h3>
                  </div>
                </div>
                <p className="text-white">
                  {translateTeam("values.collaboration.description")}
                </p>
              </div>

              <div className="bg-brand-dark/60 rounded-2xl shadow-lg p-8 flex flex-col gap-4 items-start border-2 border-brand-gray dark:border-brand-mint">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-3 rounded-full bg-brand-dark/60">
                    <Lightbulb className="h-7 w-7 text-brand-mint" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-brand-mint">
                      {translateTeam("values.innovation.title")}
                    </h3>
                  </div>
                </div>
                <p className="text-white">
                  {translateTeam("values.innovation.description")}
                </p>
              </div>

              <div className="bg-brand-dark/60 rounded-2xl shadow-lg p-8 flex flex-col gap-4 items-start border-2 border-brand-gray dark:border-brand-mint">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-3 rounded-full bg-brand-dark/60">
                    <Heart className="h-7 w-7 text-brand-mint" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-brand-mint">
                      {translateTeam("values.authenticity.title")}
                    </h3>
                  </div>
                </div>
                <p className="text-white">
                  {translateTeam("values.authenticity.description")}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-16 bg-brand-lavender dark:bg-brand-dark text-brand-dark dark:text-brand-mint">
          <div className="container px-4 md:px-6 flex flex-col items-center text-center gap-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              {translateTeam("cta.title")}
            </h2>
            <p className="max-w-xl mx-auto text-lg text-brand-dark/90 dark:text-white/90">
              {translateTeam("cta.description")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-2">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-brand-teal text-white font-semibold px-8 py-4 rounded-lg hover:bg-brand-mint hover:text-brand-dark transition-all duration-200"
                >
                  {translateTeam("cta.getInTouch")}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/products">
                <Button
                  size="lg"
                  className="border-1 border-brand-mint text-brand-dark font-semibold px-8 py-4 rounded-lg hover:bg-brand-mint hover:text-[#416165] transition-all duration-200"
                >
                  {translateTeam("cta.exploreProducts")}
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
} 