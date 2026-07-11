import { Button, ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function BrandButton({ className, ...props }: ButtonProps) {
  return (
    <Button
      className={cn(
        "bg-indian_red text-white_smoke font-semibold px-8 py-4 rounded-lg hover:bg-indian_red-600 transition-all duration-200",
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
        "bg-cerulean text-white_smoke font-semibold px-8 py-4 rounded-lg hover:bg-cerulean-600 transition-all duration-200",
        className
      )}
      {...props}
    />
  );
}
