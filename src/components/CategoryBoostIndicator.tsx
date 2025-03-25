import React, { useState } from "react";
import { createPortal } from "react-dom";
import { cn } from "@/lib/utils";

export interface CategoryBoost {
  id: string;
  name: string;
  color: string;
}

interface CategoryBoostIndicatorProps {
  categories: CategoryBoost[];
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const CategoryBoostIndicator: React.FC<CategoryBoostIndicatorProps> = ({
  categories,
  size = 'md',
  className
}) => {
  const sizeClasses = {
    sm: 'w-2 h-2',
    md: 'w-3 h-3',
    lg: 'w-4 h-4'
  };

  const [tooltips, setTooltips] = useState<{[key: string]: {visible: boolean, position: {x: number, y: number}}}>(
    Object.fromEntries(categories.map(cat => [cat.id, {visible: false, position: {x: 0, y: 0}}]))
  );

  const handleMouseEnter = (categoryId: string, e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setTooltips(prev => ({
      ...prev,
      [categoryId]: {
        visible: true,
        position: {
          x: rect.left + rect.width / 2,
          y: rect.top
        }
      }
    }));
  };

  const handleMouseLeave = (categoryId: string) => {
    setTooltips(prev => ({
      ...prev,
      [categoryId]: {
        ...prev[categoryId],
        visible: false
      }
    }));
  };

  return (
    <div className={cn("flex gap-1.5 items-center", className)}>
      {categories.map((category) => (
        <div 
          key={category.id}
          onMouseEnter={(e) => handleMouseEnter(category.id, e)}
          onMouseLeave={() => handleMouseLeave(category.id)}
          className="relative"
        >
          <div 
            className={cn("rounded-full", sizeClasses[size])}
            style={{ backgroundColor: category.color }}
          />
          
          {tooltips[category.id]?.visible && createPortal(
            <div 
              className="fixed px-2 py-1 text-xs rounded-md text-white z-[9999] pointer-events-none"
              style={{
                backgroundColor: category.color,
                transform: 'translate(-50%, -100%) translateY(-8px)',
                left: `${tooltips[category.id].position.x}px`,
                top: `${tooltips[category.id].position.y}px`,
              }}
            >
              Boosts {category.name}
              <div 
                className="absolute h-0 w-0"
                style={{
                  left: '50%',
                  top: '100%',
                  transform: 'translateX(-50%)',
                  borderLeft: '5px solid transparent',
                  borderRight: '5px solid transparent',
                  borderTop: `5px solid ${category.color}`
                }}
              />
            </div>,
            document.body
          )}
        </div>
      ))}
    </div>
  );
};