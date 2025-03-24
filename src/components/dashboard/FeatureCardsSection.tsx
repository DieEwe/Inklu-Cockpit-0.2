
import { FeatureCard } from "@/components/FeatureCard";
import { ChatbotCard } from "@/components/feature-cards/ChatbotCard";
import { JobPostingCard } from "@/components/feature-cards/JobPostingCard";
import { LearningModulesCard } from "@/components/feature-cards/LearningModulesCard";
import { AccessibilityToolsCard } from "@/components/feature-cards/AccessibilityToolsCard";
import { ExternalTrainingCard } from "@/components/feature-cards/ExternalTrainingCard";
import { useTheme } from "@/components/ThemeProvider";
import { translations } from "@/utils/mockData";

export const FeatureCardsSection = () => {
  const { language } = useTheme();
  const t = translations[language];
  
  // Mock data for accessibility tools
  const accessibilityTools = [
    { name: language === 'en' ? "Screen Reader" : "Screenreader", icon: "👁️", color: "#0EA5E9" },
    { name: language === 'en' ? "Color Contrast" : "Farbkontrast", icon: "🎨", color: "#F97316" },
    { name: language === 'en' ? "Text-to-Speech" : "Text-zu-Sprache", icon: "🔊", color: "#10B981" },
    { name: language === 'en' ? "Speech-to-Text" : "Sprache-zu-Text", icon: "🎤", color: "#8B5CF6" },
    { name: language === 'en' ? "Keyboard Nav" : "Tastaturnavigation", icon: "⌨️", color: "#EC4899" },
    { name: language === 'en' ? "Font Adjustments" : "Schriftanpassungen", icon: "Aa", color: "#F59E0B" }
  ];
  
  // Mock data for external training
  const trainings = [
    {
      title: language === 'en' ? "Inclusive Leadership" : "Inklusive Führung",
      provider: language === 'en' ? "Inklu Academy" : "Inklu Akademie",
      duration: language === 'en' ? "2 hours" : "2 Stunden",
      level: "beginner" as const,
      link: "#"
    },
    {
      title: language === 'en' ? "Digital Accessibility" : "Digitale Barrierefreiheit",
      provider: language === 'en' ? "Web Standards" : "Web Standards",
      duration: language === 'en' ? "4 hours" : "4 Stunden",
      level: "intermediate" as const,
      link: "#"
    },
    {
      title: language === 'en' ? "Neurodiversity at Work" : "Neurodiversität am Arbeitsplatz",
      provider: language === 'en' ? "Diversity Institute" : "Diversity Institut",
      duration: language === 'en' ? "3 hours" : "3 Stunden",
      level: "advanced" as const,
      link: "#"
    }
  ];
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
      <FeatureCard
        title={t.inclusiveJobPostings}
        description={t.inclusiveJobPostingsDesc}
        icon="📋"
      >
        <JobPostingCard />
      </FeatureCard>
      
      <FeatureCard
        title={t.inkluAssistant}
        description={t.inkluAssistantDesc}
        icon="💬"
      >
        <ChatbotCard />
      </FeatureCard>
      
      <FeatureCard
        title={t.learningModules}
        description={t.learningModulesDesc}
        icon="📚"
      >
        <LearningModulesCard />
      </FeatureCard>
      
      <FeatureCard
        title={t.accessibilityTools}
        description={t.accessibilityToolsDesc}
        icon="♿"
      >
        <AccessibilityToolsCard tools={accessibilityTools} />
      </FeatureCard>
      
      <FeatureCard
        title={t.externalTraining}
        description={t.externalTrainingDesc}
        icon="🎓"
      >
        <ExternalTrainingCard trainings={trainings} />
      </FeatureCard>
    </div>
  );
};
