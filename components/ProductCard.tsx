import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ReactNode } from "react";

interface ProductCardProps {
  imageSrc: string;
  imageAlt: string;
  badge: ReactNode;
  icon: ReactNode;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  actions: ReactNode;
  className?: string;
}

export function ProductCard({
  imageSrc,
  imageAlt,
  badge,
  icon,
  title,
  subtitle,
  description,
  features,
  actions,
  className = "",
}: ProductCardProps) {
  return (
    <Card className={`bg-brand-dark/60 border-2 border-brand-mint dark:border-2 dark:border-brand-mint dark:bg-brand-dark/80 group relative overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-brand-coral/20 via-white to-brand-red/20 dark:bg-none ${className}`}>
      <div className="absolute top-4 right-4 z-10">{badge}</div>
      <CardHeader className="relative pb-6">
        <div className="flex items-center space-x-4 mb-4">
          <div className="p-3 rounded-xl bg-brand-dark shadow-lg group-hover:shadow-xl transition-shadow duration-300">
            {icon}
          </div>
          <div>
            <CardTitle className="text-2xl text-brand-mint">{title}</CardTitle>
            <p className="text-sm text-white mt-1 dark:text-brand-mint/80">{subtitle}</p>
          </div>
        </div>
      </CardHeader>
      <CardContent className="relative space-y-6">
        <div className="aspect-video relative rounded-lg overflow-hidden bg-gradient-to-br from-brand-coral/20 to-brand-red/20 dark:bg-brand-dark/60">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="space-y-4">
          <p className="text-white leading-relaxed dark:text-brand-lavender/90">{description}</p>
          <div className="space-y-3">
            <h4 className="font-semibold text-brand-mint">Key Features:</h4>
            <ul className="text-sm text-white space-y-1 dark:text-brand-lavender/80">
              {features.map((feature, i) => (
                <li key={i}>• {feature}</li>
              ))}
            </ul>
          </div>
          <div className="flex gap-3 pt-4">{actions}</div>
        </div>
      </CardContent>
    </Card>
  );
} 