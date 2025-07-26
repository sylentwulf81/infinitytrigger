import { useState, useRef } from 'react';

export const useMouseGlow = () => {
  const [entryPosition, setEntryPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const elementRef = useRef<HTMLButtonElement>(null);

  const handleMouseEnter = (e: React.MouseEvent) => {
    if (!elementRef.current) return;
    
    const rect = elementRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    setEntryPosition({ x, y });
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return {
    entryPosition,
    isHovering,
    elementRef,
    handleMouseEnter,
    handleMouseLeave,
  };
}; 