
import { ReactNode } from "react";

interface FeatureCardProps {
  title: string;
  icon: ReactNode;
  description: string;
  metric?: string;
  metricLabel?: string;
  children?: ReactNode;
  className?: string;
  fullWidth?: boolean;
}

export const FeatureCard = ({ 
  title, 
  icon, 
  description, 
  metric, 
  metricLabel,
  children,
  className = "",
  fullWidth = false
}: FeatureCardProps) => {
  return (
    <div className={`inklu-card group min-h-[420px] ${fullWidth ? 'col-span-full' : ''} ${className}`}>
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
      {children && <div className="mt-4 flex-grow">{children}</div>}
    </div>
  );
};
