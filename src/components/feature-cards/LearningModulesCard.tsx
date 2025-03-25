import { BookOpen, Clock, Award, Users } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { useTheme } from "@/components/ThemeProvider";
import { translations } from "@/utils/mockData";
import { CategoryBoostIndicator } from "@/components/CategoryBoostIndicator";
import { getCategoryData } from "@/utils/categoryData";

export const LearningModulesCard = () => {
  const { language } = useTheme();
  const t = translations[language];
  const allCategories = getCategoryData(language);

  // Virtual Trainings
  const virtualTrainings = [
    {
      id: 1,
      title: language === 'en' ? "Accessibility" : "Barrierefreiheit",
      duration: language === 'en' ? "60 mins" : "60 Min",
      completed: true,
      participants: 42, // Added participant count
      boostCategories: ["accessibility"] 
    },
    {
      id: 2,
      title: language === 'en' ? "Job Posting" : "Stellenausschreibung",
      duration: language === 'en' ? "120 mins" : "120 Min",
      completed: false,
      participants: 24, // Added participant count
      boostCategories: ["process", "strategy"]
    },
    {
      id: 3,
      title: language === 'en' ? "Accessible Website" : "Barrierefreie Website",
      duration: language === 'en' ? "120 mins" : "120 Min",
      completed: false,
      participants: 37, // Added participant count
      boostCategories: ["accessibility", "process"]
    },
    {
      id: 4,
      title: language === 'en' ? "Job Interviews" : "Vorstellungsgespräche",
      duration: language === 'en' ? "120 mins" : "120 Min",
      completed: false,
      participants: 19, // Added participant count
      boostCategories: ["communication", "process"]
    },
    {
      id: 5,
      title: language === 'en' ? "Awareness Impulse" : "Awareness-Impuls",
      duration: language === 'en' ? "90 mins" : "90 Min",
      completed: false,
      participants: 31, // Added participant count
      boostCategories: ["leadership", "communication"]
    }
  ];

  // Live Trainings
  const liveTrainings = [
    {
      id: 6,
      title: language === 'en' ? "Awareness Workshop" : "Awareness-Workshop",
      duration: language === 'en' ? "3 hours" : "3 Stunden",
      completed: false,
      participants: 15, // Added participant count
      boostCategories: ["leadership", "communication"],
      isLive: true
    },
    {
      id: 7,
      title: language === 'en' ? "StarterCamp" : "StarterCamp",
      duration: language === 'en' ? "1 day" : "1 Tag",
      completed: false,
      participants: 27, // Added participant count
      boostCategories: ["strategy", "leadership", "process"],
      isLive: true
    }
  ];

  // Combine both types of trainings
  const modules = [...virtualTrainings, ...liveTrainings];

  return (
    <div className="space-y-3 max-h-[600px] overflow-y-auto pr-1">
      {/* Virtual Trainings Section */}
      <div className="mb-2">
        <h3 className="text-sm font-semibold text-muted-foreground mb-2">
          {language === 'en' ? "Virtual Trainings" : "Virtuelle Trainings"}
        </h3>
        <div className="space-y-3">
          {virtualTrainings.map((module) => {
            const boostCategories = module.boostCategories
              .map(catId => allCategories.find(cat => cat.id === catId))
              .filter(Boolean);
              
            return (
              <div 
                key={module.id} 
                className={`p-3 border rounded-lg ${
                  module.completed 
                    ? "bg-muted/30" 
                    : ""
                } transition-colors relative`}
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
                        : (language === 'en' ? "Available" : "Verfügbar")}
                    </span>
                  </div>
                </div>
                
                {/* Participant count instead of progress bar */}
                <div className="text-xs flex items-center gap-1.5 text-muted-foreground mt-2">
                  <Users className="h-3 w-3" />
                  <span>
                    {language === 'en' 
                      ? `Employees successfully participated: ${module.participants}` 
                      : `Mitarbeiter erfolgreich teilgenommen: ${module.participants}`}
                  </span>
                </div>
                
                {/* Category boost indicator */}
                <div className="absolute bottom-1 right-1">
                  {boostCategories.length === 1 ? (
                    <div 
                      className="w-3 h-3 rounded-full border-2 border-background"
                      style={{ backgroundColor: boostCategories[0].color }}
                      title={`Boosts ${boostCategories[0].name}`}
                    />
                  ) : (
                    <CategoryBoostIndicator 
                      categories={boostCategories as any}
                      size="sm"
                    />
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      
      {/* Live Trainings Section */}
      <div>
        <h3 className="text-sm font-semibold text-muted-foreground mb-2">
          {language === 'en' ? "Live Trainings" : "Live-Trainings"}
        </h3>
        <div className="space-y-3">
          {liveTrainings.map((module) => {
            const boostCategories = module.boostCategories
              .map(catId => allCategories.find(cat => cat.id === catId))
              .filter(Boolean);
              
            return (
              <div 
                key={module.id} 
                className="p-3 border border-primary/30 rounded-lg hover:bg-primary/5 transition-colors relative"
              >
                <div className="flex justify-between items-start mb-1">
                  <h4 className="font-medium text-sm">{module.title}</h4>
                  <span className="text-xs px-1.5 py-0.5 bg-primary/10 text-primary rounded-full">
                    {language === 'en' ? "Live" : "Live"}
                  </span>
                </div>
                
                <div className="flex items-center text-xs text-muted-foreground gap-4 mb-2">
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    <span>{module.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <BookOpen className="h-3 w-3" />
                    <span>{language === 'en' ? "In-person" : "Präsenz"}</span>
                  </div>
                </div>
                
                {/* Participant count for live trainings too */}
                <div className="text-xs flex items-center gap-1.5 text-muted-foreground mt-2">
                  <Users className="h-3 w-3" />
                  <span>
                    {language === 'en' 
                      ? `Employees successfully participated: ${module.participants}` 
                      : `Mitarbeiter erfolgreich teilgenommen: ${module.participants}`}
                  </span>
                </div>
                
                <button className="mt-3 text-xs text-primary hover:underline">
                  {language === 'en' ? "Schedule Session" : "Termin vereinbaren"}
                </button>
                
                {/* Category boost indicator */}
                <div className="absolute bottom-1 right-1">
                  {boostCategories.length === 1 ? (
                    <div 
                      className="w-3 h-3 rounded-full border-2 border-background"
                      style={{ backgroundColor: boostCategories[0].color }}
                      title={`Boosts ${boostCategories[0].name}`}
                    />
                  ) : (
                    <CategoryBoostIndicator 
                      categories={boostCategories as any}
                      size="sm"
                    />
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      
      <button 
        className="w-full py-1.5 px-3 text-xs font-medium text-primary hover:text-primary-foreground hover:bg-primary rounded-md transition-colors"
      >
        {language === 'en' ? "View All Trainings" : "Alle Trainings anzeigen"}
      </button>
    </div>
  );
};
