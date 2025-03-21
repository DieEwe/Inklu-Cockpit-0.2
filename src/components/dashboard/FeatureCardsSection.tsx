
import { FeatureCard } from "@/components/FeatureCard";
import { 
  Briefcase, MessageSquare, BookOpen, 
  Calendar, AccessibilityIcon, GraduationCap 
} from "lucide-react";
import { featureCardsData } from "@/utils/mockData";

export const FeatureCardsSection = () => {
  const firstRow = featureCardsData.slice(0, 3);
  const secondRow = featureCardsData.slice(3, 6);
  
  const getIconForIndex = (index: number) => {
    const icons = [
      <Briefcase key="briefcase" className="h-5 w-5" />,
      <MessageSquare key="message" className="h-5 w-5" />,
      <BookOpen key="book" className="h-5 w-5" />,
      <Calendar key="calendar" className="h-5 w-5" />,
      <AccessibilityIcon key="accessibility" className="h-5 w-5" />,
      <GraduationCap key="graduation" className="h-5 w-5" />
    ];
    
    return icons[index];
  };
  
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {firstRow.map((card, index) => (
          <FeatureCard
            key={`card-1-${index}`}
            title={card.title}
            icon={getIconForIndex(index)}
            description={card.description}
            metric={card.metric}
            metricLabel={card.metricLabel}
          />
        ))}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {secondRow.map((card, index) => (
          <FeatureCard
            key={`card-2-${index}`}
            title={card.title}
            icon={getIconForIndex(index + 3)}
            description={card.description}
            metric={card.metric}
            metricLabel={card.metricLabel}
          />
        ))}
      </div>
    </div>
  );
};
