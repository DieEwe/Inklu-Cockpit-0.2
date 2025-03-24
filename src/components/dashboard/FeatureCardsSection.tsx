
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
  
  // Get feature card translations
  const featureCardTitles = {
    jobPostings: language === 'en' ? "Job Postings via Inklu-Connect" : "Stellenausschreibungen über Inklu-Connect",
    jobPostingsDesc: language === 'en' ? "Create inclusive job postings and reach diverse talent pools with our specialized platform." : "Erstellen Sie inklusive Stellenausschreibungen und erreichen Sie vielfältige Talentpools mit unserer spezialisierten Plattform.",
    assistant: language === 'en' ? "Digital Assistant (Inklu-Chatbot)" : "Digitaler Assistent (Inklu-Chatbot)",
    assistantDesc: language === 'en' ? "AI-powered assistance for answering inclusion and accessibility questions instantly." : "KI-gestützte Unterstützung zur sofortigen Beantwortung von Inklusions- und Barrierefreiheitsfragen.",
    learningModules: language === 'en' ? "Learning & Content Modules" : "Lern- & Inhaltsmodule",
    learningModulesDesc: language === 'en' ? "Specialized learning resources covering various aspects of inclusion and accessibility." : "Spezialisierte Lernressourcen, die verschiedene Aspekte der Inklusion und Barrierefreiheit abdecken.",
    accessibilityTools: language === 'en' ? "Accessibility & Inclusion Tools" : "Zugänglichkeits- & Inklusionswerkzeuge",
    accessibilityToolsDesc: language === 'en' ? "Discover and implement tools that enhance workplace accessibility for all." : "Entdecken und implementieren Sie Werkzeuge, die die Barrierefreiheit am Arbeitsplatz für alle verbessern.",
    externalTraining: language === 'en' ? "External Training Modules / Courses" : "Externe Schulungsmodule / Kurse",
    externalTrainingDesc: language === 'en' ? "Access specialized external training resources for advanced learning opportunities." : "Greifen Sie auf spezialisierte externe Schulungsressourcen für fortgeschrittene Lernmöglichkeiten zu."
  };
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
      <FeatureCard
        title={featureCardTitles.jobPostings}
        description={featureCardTitles.jobPostingsDesc}
        icon="📋"
      >
        <JobPostingCard />
      </FeatureCard>
      
      <FeatureCard
        title={featureCardTitles.assistant}
        description={featureCardTitles.assistantDesc}
        icon="💬"
      >
        <ChatbotCard />
      </FeatureCard>
      
      <FeatureCard
        title={featureCardTitles.learningModules}
        description={featureCardTitles.learningModulesDesc}
        icon="📚"
      >
        <LearningModulesCard />
      </FeatureCard>
      
      <FeatureCard
        title={featureCardTitles.accessibilityTools}
        description={featureCardTitles.accessibilityToolsDesc}
        icon="♿"
      >
        <AccessibilityToolsCard tools={accessibilityTools} />
      </FeatureCard>
      
      <FeatureCard
        title={featureCardTitles.externalTraining}
        description={featureCardTitles.externalTrainingDesc}
        icon="🎓"
      >
        <ExternalTrainingCard trainings={trainings} />
      </FeatureCard>
    </div>
  );
};
