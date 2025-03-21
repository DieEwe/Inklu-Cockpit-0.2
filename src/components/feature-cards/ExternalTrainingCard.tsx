
import { ExternalLink, BookOpen, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface Training {
  title: string;
  provider: string;
  duration: string;
  level: "beginner" | "intermediate" | "advanced";
  link: string;
}

interface ExternalTrainingCardProps {
  trainings: Training[];
}

export const ExternalTrainingCard = ({ trainings }: ExternalTrainingCardProps) => {
  return (
    <div className="space-y-3 max-h-[300px] overflow-y-auto pr-1">
      {trainings.map((training, index) => (
        <div key={index} className="p-3 border rounded-lg hover:bg-muted/30 transition-all group">
          <div className="flex justify-between items-start mb-2">
            <h4 className="font-medium text-sm">{training.title}</h4>
            <Badge variant={
              training.level === "beginner" 
                ? "outline" 
                : training.level === "intermediate" 
                  ? "secondary" 
                  : "default"
            }>
              {training.level}
            </Badge>
          </div>
          
          <div className="grid grid-cols-2 gap-x-2 gap-y-1 mt-2">
            <div className="text-xs text-muted-foreground flex items-center gap-1">
              <BookOpen className="h-3 w-3" />
              <span>{training.provider}</span>
            </div>
            
            <div className="text-xs text-muted-foreground flex items-center gap-1">
              <Clock className="h-3 w-3" />
              <span>{training.duration}</span>
            </div>
          </div>
          
          <div className="mt-2 pt-2 border-t border-border/30 hidden group-hover:flex justify-end">
            <button 
              className="text-xs flex items-center gap-1 text-primary hover:underline"
              onClick={() => window.open(training.link, '_blank')}
            >
              View course <ExternalLink className="h-3 w-3" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
