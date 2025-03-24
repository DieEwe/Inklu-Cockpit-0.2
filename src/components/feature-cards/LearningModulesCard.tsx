
import { BookOpen, Clock, Award } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { useTheme } from "@/components/ThemeProvider";
import { translations } from "@/utils/mockData";

export const LearningModulesCard = () => {
  const { language } = useTheme();
  const t = translations[language];

  // Mock learning modules
  const modules = [
    {
      id: 1,
      title: language === 'en' ? "Introduction to Inclusion" : "Einführung in Inklusion",
      duration: language === 'en' ? "15 mins" : "15 Min",
      progress: 100,
      completed: true
    },
    {
      id: 2,
      title: language === 'en' ? "Inclusive Communication" : "Inklusive Kommunikation",
      duration: language === 'en' ? "25 mins" : "25 Min",
      progress: 65,
      completed: false
    },
    {
      id: 3,
      title: language === 'en' ? "Accessible Design Principles" : "Prinzipien des barrierefreien Designs",
      duration: language === 'en' ? "20 mins" : "20 Min",
      progress: 0,
      completed: false
    }
  ];

  return (
    <div className="space-y-4">
      {modules.map((module) => (
        <div 
          key={module.id} 
          className={`p-3 border rounded-lg ${
            module.completed 
              ? "bg-muted/30 hover:bg-muted/50" 
              : "hover:bg-muted/30"
          } transition-colors`}
        >
          <div className="flex justify-between items-start mb-1">
            <h4 className="font-medium text-sm">{module.title}</h4>
            {module.completed && (
              <Award className="h-4 w-4 text-primary" />
            )}
          </div>
          
          <div className="flex items-center text-xs text-muted-foreground gap-4 mb-2">
            <div className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              <span>{module.duration}</span>
            </div>
            <div className="flex items-center gap-1">
              <BookOpen className="h-3 w-3" />
              <span>
                {module.completed 
                  ? (language === 'en' ? "Completed" : "Abgeschlossen") 
                  : module.progress > 0 
                    ? (language === 'en' ? "In progress" : "In Bearbeitung") 
                    : (language === 'en' ? "Not started" : "Nicht begonnen")}
              </span>
            </div>
          </div>
          
          <Progress value={module.progress} className="h-1.5" />
        </div>
      ))}
      
      <button 
        className="w-full py-1.5 px-3 text-xs font-medium text-primary hover:text-primary-foreground hover:bg-primary rounded-md transition-colors"
      >
        {language === 'en' ? "View All Modules" : "Alle Module anzeigen"}
      </button>
    </div>
  );
};
