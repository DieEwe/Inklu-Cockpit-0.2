
import { ReactNode } from "react";

interface FeatureCardProps {
  title: string;
  icon: ReactNode;
  description: string;
  metric?: string;
  metricLabel?: string;
}

export const FeatureCard = ({ 
  title, 
  icon, 
  description, 
  metric, 
  metricLabel 
}: FeatureCardProps) => {
  return (
    <div className="inklu-card group">
      <div className="flex items-start justify-between">
        <div className="rounded-full p-2 bg-primary/10 text-primary">
          {icon}
        </div>
        {metric && (
          <div className="text-right">
            <p className="text-2xl font-bold">{metric}</p>
            <p className="text-xs text-muted-foreground">{metricLabel}</p>
          </div>
        )}
      </div>
      <h3 className="mt-4 text-lg font-medium">{title}</h3>
      <p className="mt-2 text-sm text-muted-foreground">{description}</p>
    </div>
  );
};
