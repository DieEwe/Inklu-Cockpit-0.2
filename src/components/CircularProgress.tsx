import { ReactNode } from "react";
import { PlusIcon } from "lucide-react"; // You'll need to install lucide-react if not already using it

interface CircularProgressProps {
  percentage: number;
  color: string;
  size?: number;
  label?: ReactNode;
  onClick?: () => void;
  active?: boolean;
}

export const CircularProgress = ({ 
  percentage, 
  color, 
  size = 80, 
  label,
  onClick,
  active = false
}: CircularProgressProps) => {
  // Calculate SVG parameters
  const radius = 35;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;
  
  return (
    <div 
      className={`flex flex-col items-center justify-center ${onClick ? 'cursor-pointer transition-transform' : ''} ${active ? 'scale-110' : onClick ? 'hover:scale-105' : ''}`} 
      onClick={onClick}
    >
      <div className="relative" style={{ width: size, height: size }}>
        <svg width={size} height={size} viewBox="0 0 100 100" className="rotate-[-90deg]">
          {/* Background circle */}
          <circle
            cx="50"
            cy="50"
            r={radius}
            className="fill-none stroke-muted"
            strokeWidth="8"
          />
          {/* Progress circle */}
          <circle
            cx="50"
            cy="50"
            r={radius}
            className={`fill-none transition-all duration-1000 ease-in-out ${active ? 'stroke-width-10' : ''}`}
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            style={{ stroke: color }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center rotate-0">
          <span className={`text-lg font-bold ${active ? 'text-primary' : ''}`}>{percentage}%</span>
          {onClick && (
            <div className="absolute bottom-0 right-0 text-primary/90 text-xs">
              <PlusIcon size={12} />
            </div>
          )}
        </div>
      </div>
      {label && <div className={`mt-2 text-sm font-medium text-center ${active ? 'text-primary font-bold' : ''}`}>{label}</div>}
    </div>
  );
};
