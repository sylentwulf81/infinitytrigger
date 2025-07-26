import React from 'react';
import { useMouseGlow } from '@/hooks/use-mouse-glow';
import { cn } from '@/lib/utils';

interface GlowButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
}

export const GlowButton: React.FC<GlowButtonProps> = ({
  children,
  variant = 'primary',
  className,
  ...props
}) => {
  const { entryPosition, isHovering, elementRef, handleMouseEnter, handleMouseLeave } = useMouseGlow();

  const glowColor = variant === 'primary' 
    ? 'rgba(177, 230, 155, 0.8)' // brand-mint - much more visible
    : 'rgba(65, 97, 101, 0.8)';   // brand-teal - much more visible

  return (
    <button
      ref={elementRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={cn(
        'relative overflow-hidden transition-all duration-200',
        variant === 'primary' 
          ? 'bg-brand-teal text-white hover:bg-brand-mint hover:text-brand-dark' 
          : 'bg-transparent border border-brand-mint text-brand-dark dark:text-brand-mint hover:bg-brand-mint hover:text-brand-dark',
        'px-6 py-3 rounded-lg font-semibold',
        className
      )}
      style={{
        '--entry-x': `${entryPosition.x}px`,
        '--entry-y': `${entryPosition.y}px`,
        '--glow-color': glowColor,
      } as React.CSSProperties}
      {...props}
    >
      {children}
      {isHovering && (
        <div
          className="absolute pointer-events-none transition-all duration-300 ease-out z-10 animate-in fade-in"
          style={{
            left: 'var(--entry-x)',
            top: 'var(--entry-y)',
            transform: 'translate(-50%, -50%)',
            width: '120px',
            height: '120px',
            background: `radial-gradient(circle, var(--glow-color) 0%, rgba(177, 230, 155, 0.3) 40%, transparent 70%)`,
            borderRadius: '50%',
            filter: 'blur(3px)',
          }}
        />
      )}
    </button>
  );
}; 