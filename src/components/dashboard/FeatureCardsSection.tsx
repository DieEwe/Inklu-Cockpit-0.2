
import { FeatureCard } from "@/components/FeatureCard";
import { featureCardsData } from "@/utils/mockData";
import { JobPostingCard } from "@/components/feature-cards/JobPostingCard";
import { ChatbotCard } from "@/components/feature-cards/ChatbotCard";
import { LearningModulesCard } from "@/components/feature-cards/LearningModulesCard";
import { EventsCard } from "@/components/feature-cards/EventsCard";
import { AccessibilityToolsCard } from "@/components/feature-cards/AccessibilityToolsCard";
import { ExternalTrainingCard } from "@/components/feature-cards/ExternalTrainingCard";
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

// Learning Modules with the specified topics
const mockLearningModules = [
  {
    title: "Barrierefreiheit",
    category: "Grundlagen & Basics",
    progress: 100,
    duration: "1.5 hours"
  },
  {
    title: "Stellenausschreibung",
    category: "Recruiting & HR",
    progress: 75,
    duration: "2 hours"
  },
  {
    title: "Barrierefreie Webseite",
    category: "Digital & Tech",
    progress: 60,
    duration: "3 hours"
  },
  {
    title: "Bewerbungsgespräche",
    category: "Recruiting & HR",
    progress: 30,
    duration: "1 hour"
  },
  {
    title: "Awareness-Impulse",
    category: "Culture & Leadership",
    progress: 100,
    duration: "45 min"
  },
  {
    title: "Awareness-Workshops",
    category: "Culture & Leadership",
    progress: 50,
    duration: "4 hours"
  },
  {
    title: "StarterCamp",
    category: "Onboarding",
    progress: 25,
    duration: "2 days"
  }
];

// Mock events for the Local & Online Events card
const mockEvents = [
  {
    title: "Inklusion im digitalen Arbeitsplatz",
    date: "15. Mai 2023",
    location: "München",
    type: "local" as const,
    time: "14:00 - 17:00",
    attendees: 45
  },
  {
    title: "Digital Accessibility Summit",
    date: "20. Mai 2023",
    location: "Online",
    type: "online" as const,
    time: "10:00 - 16:00",
    attendees: 120
  },
  {
    title: "Diversity & Inclusion Workshop",
    date: "1. Juni 2023",
    location: "Berlin + Online",
    type: "hybrid" as const,
    time: "09:00 - 17:00",
    attendees: 78
  },
  {
    title: "Barrierefreie Kommunikation",
    date: "10. Juni 2023",
    location: "Hamburg",
    type: "local" as const,
    time: "13:00 - 18:00",
    attendees: 35
  },
  {
    title: "Inklusive Führungskultur",
    date: "15. Juni 2023",
    location: "Online",
    type: "online" as const,
    time: "14:00 - 16:30",
    attendees: 65
  },
  {
    title: "Inklu-Connect Netzwerktreffen",
    date: "25. Juni 2023",
    location: "Frankfurt + Online",
    type: "hybrid" as const,
    time: "18:00 - 20:00",
    attendees: 50
  },
  {
    title: "Barrierefreie Dokumente erstellen",
    date: "5. Juli 2023",
    location: "Online",
    type: "online" as const,
    time: "10:00 - 12:00",
    attendees: 90
  },
  {
    title: "Inklusion und KI",
    date: "12. Juli 2023",
    location: "Berlin",
    type: "local" as const,
    time: "15:00 - 18:00",
    attendees: 42
  },
  {
    title: "Diversität im Recruiting",
    date: "20. Juli 2023",
    location: "München + Online",
    type: "hybrid" as const,
    time: "09:30 - 16:30",
    attendees: 65
  },
  {
    title: "Inklusion in der Kommunikation",
    date: "28. Juli 2023",
    location: "Online",
    type: "online" as const,
    time: "14:00 - 16:00",
    attendees: 110
  }
];

// Mock accessibility tools
const mockAccessibilityTools = [
  { name: "Eye-Able", icon: "👁️", color: "#6A80B9" },
  { name: "ReadSpeaker", icon: "🔊", color: "#F97316" },
  { name: "JAWS", icon: "⌨️", color: "#155E95" },
  { name: "Color Blind", icon: "🎨", color: "#D946EF" },
  { name: "Sign Lang", icon: "👋", color: "#10B981" },
  { name: "Easy Read", icon: "📖", color: "#9b87f5" }
];

// Mock external training modules
const mockExternalTrainings = [
  {
    title: "Digital Accessibility Fundamentals",
    provider: "W3C",
    duration: "6 weeks",
    level: "beginner" as const,
    link: "https://example.com/course1"
  },
  {
    title: "Advanced Inclusion Strategies",
    provider: "Harvard University",
    duration: "8 weeks",
    level: "advanced" as const,
    link: "https://example.com/course2"
  },
  {
    title: "Inclusive Design Principles",
    provider: "Microsoft Learn",
    duration: "4 weeks",
    level: "intermediate" as const,
    link: "https://example.com/course3"
  },
  {
    title: "Disability Inclusion in the Workplace",
    provider: "LinkedIn Learning",
    duration: "3 weeks",
    level: "beginner" as const,
    link: "https://example.com/course4"
  },
  {
    title: "Creating Accessible Web Content",
    provider: "Google Digital Academy",
    duration: "5 weeks",
    level: "intermediate" as const,
    link: "https://example.com/course5"
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
      >
        <EventsCard events={mockEvents} />
      </FeatureCard>
      
      <FeatureCard
        title={featureCardsData[4].title}
        description={featureCardsData[4].description}
        metric={featureCardsData[4].metric}
        metricLabel={featureCardsData[4].metricLabel}
        icon={<Accessibility className="h-5 w-5" />}
      >
        <AccessibilityToolsCard tools={mockAccessibilityTools} />
      </FeatureCard>
      
      <FeatureCard
        title={featureCardsData[5].title}
        description={featureCardsData[5].description}
        metric={featureCardsData[5].metric}
        metricLabel={featureCardsData[5].metricLabel}
        icon={<GraduationCap className="h-5 w-5" />}
      >
        <ExternalTrainingCard trainings={mockExternalTrainings} />
      </FeatureCard>
    </div>
  );
};
