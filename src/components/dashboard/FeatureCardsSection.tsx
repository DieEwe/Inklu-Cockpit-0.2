
import { FeatureCard } from "@/components/FeatureCard";
import { featureCardsData } from "@/utils/mockData";
import { JobPostingCard } from "@/components/feature-cards/JobPostingCard";
import { ChatbotCard } from "@/components/feature-cards/ChatbotCard";
import { LearningModulesCard } from "@/components/feature-cards/LearningModulesCard";
import { 
  BriefcaseBusiness, 
  MessageSquareText, 
  Lightbulb, 
  CalendarCheck, 
  Accessibility, 
  GraduationCap 
} from "lucide-react";

// Mock data for the enhanced feature cards
const mockJobPostings = [
  {
    title: "Diversity & Inclusion Manager",
    company: "TechCorp Inc.",
    location: "Remote",
    type: "Full-time",
    posted: "2 days ago"
  },
  {
    title: "Accessibility Specialist",
    company: "Healthcare Solutions",
    location: "Berlin",
    type: "Part-time",
    posted: "1 week ago"
  },
  {
    title: "Inclusive Design Researcher",
    company: "Creative Agency",
    location: "Hamburg",
    type: "Contract",
    posted: "3 days ago"
  }
];

const mockLearningModules = [
  {
    title: "Building Inclusive Teams",
    category: "Leadership & Management",
    progress: 100,
    duration: "2.5 hours"
  },
  {
    title: "Accessibility in Digital Products",
    category: "Design & Development",
    progress: 65,
    duration: "4 hours"
  },
  {
    title: "Unconscious Bias in the Workplace",
    category: "Personal Development",
    progress: 30,
    duration: "1.5 hours"
  }
];

export const FeatureCardsSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
      {/* First Row */}
      <FeatureCard
        title={featureCardsData[0].title}
        description={featureCardsData[0].description}
        metric={featureCardsData[0].metric}
        metricLabel={featureCardsData[0].metricLabel}
        icon={<BriefcaseBusiness className="h-5 w-5" />}
      >
        <JobPostingCard jobs={mockJobPostings} />
      </FeatureCard>
      
      <FeatureCard
        title={featureCardsData[1].title}
        description={featureCardsData[1].description}
        metric={featureCardsData[1].metric}
        metricLabel={featureCardsData[1].metricLabel}
        icon={<MessageSquareText className="h-5 w-5" />}
      >
        <ChatbotCard />
      </FeatureCard>
      
      <FeatureCard
        title={featureCardsData[2].title}
        description={featureCardsData[2].description}
        metric={featureCardsData[2].metric}
        metricLabel={featureCardsData[2].metricLabel}
        icon={<Lightbulb className="h-5 w-5" />}
      >
        <LearningModulesCard modules={mockLearningModules} />
      </FeatureCard>
      
      {/* Second Row */}
      <FeatureCard
        title={featureCardsData[3].title}
        description={featureCardsData[3].description}
        metric={featureCardsData[3].metric}
        metricLabel={featureCardsData[3].metricLabel}
        icon={<CalendarCheck className="h-5 w-5" />}
      />
      
      <FeatureCard
        title={featureCardsData[4].title}
        description={featureCardsData[4].description}
        metric={featureCardsData[4].metric}
        metricLabel={featureCardsData[4].metricLabel}
        icon={<Accessibility className="h-5 w-5" />}
      />
      
      <FeatureCard
        title={featureCardsData[5].title}
        description={featureCardsData[5].description}
        metric={featureCardsData[5].metric}
        metricLabel={featureCardsData[5].metricLabel}
        icon={<GraduationCap className="h-5 w-5" />}
      />
    </div>
  );
};
