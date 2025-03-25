import { cn } from "@/lib/utils";
import React from "react";

interface FeatureCardProps {
  title: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
}

export const FeatureCard = ({ 
  title, 
  description, 
  children, 
  className 
}: FeatureCardProps) => {
  return (
    <div className={cn("rounded-lg border bg-card p-4 shadow-sm", className)}>
      <div className="mb-4">
        <h3 className="text-lg font-medium">{title}</h3>
        {description && (
          <p className="mt-1 text-sm text-muted-foreground">{description}</p>
        )}
      </div>
      <div>{children}</div>
    </div>
  );
};
