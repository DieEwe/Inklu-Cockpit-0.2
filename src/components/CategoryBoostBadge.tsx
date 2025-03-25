import React from "react";
import { cn } from "@/lib/utils";

export interface CategoryBoost {
  id: string;
  name: string;
  color: string;
}

interface CategoryBoostBadgeProps {
  categories: CategoryBoost[];
  className?: string;
  showLabel?: boolean;
}

export const CategoryBoostBadge: React.FC<CategoryBoostBadgeProps> = ({
  categories,
  className,
  showLabel = false
}) => {
  return (
    <div className={cn("flex flex-wrap gap-1.5", className)}>
      {categories.map((category) => (
        <div 
          key={category.id}
          className="px-2 py-0.5 rounded-full text-xs flex items-center gap-1.5"
          style={{ 
            backgroundColor: `${category.color}15`, 
            color: category.color,
            border: `1px solid ${category.color}30`
          }}
        >
          <span 
            className="w-2 h-2 rounded-full" 
            style={{ backgroundColor: category.color }} 
          />
          {showLabel && <span>{category.name}</span>}
        </div>
      ))}
    </div>
  );
};