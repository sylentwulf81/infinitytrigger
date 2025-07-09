import { Button, ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function BrandButton({ className, ...props }: ButtonProps) {
  return (
    <Button
      className={cn(
        "bg-brand-dark dark:bg-brand-mint text-brand-mint dark:text-brand-dark font-semibold px-8 py-4 rounded-lg hover:bg-brand-mint hover:text-brand-dark dark:hover:text-brand-dark dark:hover:bg-brand-lavender transition-all duration-200",
        className
      )}
      {...props}
    />
  );
}

export function BrandButtonAlt({ className, ...props }: ButtonProps) {
  return (
    <Button
      className={cn(
        "bg-brand-dark dark:bg-brand-mint text-brand-mint dark:text-brand-dark font-semibold px-8 py-4 rounded-lg hover:bg-brand-mint hover:text-brand-dark dark:hover:text-brand-dark dark:hover:bg-brand-lavender transition-all duration-200",
        className
      )}
      {...props}
    />
  );
} 