
import { BookOpen, Clock, Award } from "lucide-react";
import { Progress } from "@/components/ui/progress";

interface Module {
  title: string;
  category: string;
  progress: number;
  duration: string;
}

interface LearningModulesCardProps {
  modules: Module[];
}

export const LearningModulesCard = ({ modules }: LearningModulesCardProps) => {
  return (
    <div className="space-y-4 max-h-60 overflow-y-auto pr-1">
      {modules.map((module, index) => (
        <div key={index} className="p-3 border rounded-lg hover:bg-muted/30 transition-all">
          <div className="flex justify-between items-start mb-2">
            <h4 className="font-medium text-sm">{module.title}</h4>
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <Clock className="h-3 w-3" />
              <span>{module.duration}</span>
            </div>
          </div>
          
          <div className="text-xs text-muted-foreground mb-2 flex items-center gap-1">
            <BookOpen className="h-3 w-3" />
            <span>{module.category}</span>
          </div>
          
          <div className="flex items-center gap-2">
            <Progress value={module.progress} className="h-2" />
            <span className="text-xs font-medium">{module.progress}%</span>
          </div>
          
          {module.progress === 100 && (
            <div className="flex justify-end mt-1">
              <div className="flex items-center gap-1 text-xs text-green-600">
                <Award className="h-3 w-3" />
                <span>Completed</span>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
