
import { useTheme } from "@/components/ThemeProvider";
import { translations } from "@/utils/mockData";
import { calculateAverageScore } from "@/utils/scoreUtils";

interface InkluScoreProps {
  scores: number[];
  colors: string[];
}

export const InkluScore = ({ scores, colors }: InkluScoreProps) => {
  const { language } = useTheme();
  const t = translations[language];
  
  const averageScore = calculateAverageScore(scores);
  
  return (
    <div className="flex flex-col items-center justify-center mb-8 animate-fade-in">
      <div className="relative w-36 h-36">
        <div className="absolute inset-0 flex items-center justify-center">
          <svg className="w-full h-full" viewBox="0 0 100 100">
            {/* Background circle */}
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              strokeWidth="2"
              stroke="rgba(0,0,0,0.1)"
              className="dark:stroke-white/5"
            />
            
            {/* Score segments - create 5 arcs with different colors */}
            {scores.map((score, index) => {
              const segmentAngle = (2 * Math.PI) / scores.length;
              const startAngle = index * segmentAngle - Math.PI / 2;
              const endAngle = startAngle + segmentAngle;
              
              const startX = 50 + 45 * Math.cos(startAngle);
              const startY = 50 + 45 * Math.sin(startAngle);
              const endX = 50 + 45 * Math.cos(endAngle);
              const endY = 50 + 45 * Math.sin(endAngle);
              
              // Arc flag - always use the minor arc (0)
              const arcSweep = 0;
              
              // Create path for the arc
              const path = [
                `M 50 50`,
                `L ${startX} ${startY}`,
                `A 45 45 0 ${arcSweep} 1 ${endX} ${endY}`,
                `L 50 50`
              ].join(' ');
              
              return (
                <path
                  key={index}
                  d={path}
                  fill={colors[index]}
                  opacity="0.7"
                  className="transition-opacity hover:opacity-90"
                />
              );
            })}
            
            {/* Central circle */}
            <circle
              cx="50"
              cy="50"
              r="35"
              className="fill-background"
              stroke="rgba(0,0,0,0.05)"
              strokeWidth="1"
            />
          </svg>
        </div>
        
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-4xl font-bold">{averageScore}</span>
          <span className="text-xs text-muted-foreground mt-1">{t.inkluScore}</span>
        </div>
      </div>
      
      <div className="mt-4 text-center">
        <h2 className="text-xl font-bold bg-gradient-to-r from-inklu-blue via-inklu-purple to-inklu-peach bg-clip-text text-transparent">
          {t.inkluScoreTitle}
        </h2>
        <p className="text-sm text-muted-foreground max-w-md mt-1">{t.inkluScoreDescription}</p>
      </div>
    </div>
  );
};
