
import { useTheme } from "@/components/ThemeProvider";
import { Header } from "@/components/Header";
import { translations } from "@/utils/mockData";
import { CommunicationSection } from "@/components/dashboard/CommunicationSection";
import { ProcessSection } from "@/components/dashboard/ProcessSection";
import { StrategySection } from "@/components/dashboard/StrategySection";
import { LeadershipSection } from "@/components/dashboard/LeadershipSection";
import { AccessibilitySection } from "@/components/dashboard/AccessibilitySection";
import { FeatureCardsSection } from "@/components/dashboard/FeatureCardsSection";
import { TabsContent } from "@/components/ui/tabs";
import { CircularProgress } from "@/components/CircularProgress";
import { useState } from "react";
import { 
  communicationData, 
  processData, 
  strategyData, 
  leadershipData, 
  accessibilityData 
} from "@/utils/mockData";

const Index = () => {
  const { language } = useTheme();
  const t = translations[language];
  
  // State to track the active tab
  const [activeTab, setActiveTab] = useState("communication");
  
  // Progress indicators data
  const categoryScores = [
    { id: "communication", score: Math.round(communicationData.overallScore), color: "#D946EF", name: t.communication }, // Pink
    { id: "process", score: Math.round(processData.overallScore), color: "#9b87f5", name: t.process }, // Purple
    { id: "strategy", score: Math.round(strategyData.overallScore), color: "#0EA5E9", name: t.strategy }, // Blue
    { id: "leadership", score: Math.round(leadershipData.overallScore), color: "#10B981", name: t.leadership }, // Green
    { id: "accessibility", score: Math.round(accessibilityData.overallScore), color: "#F97316", name: t.accessibility }, // Orange
  ];
  
  return (
    <div className="min-h-screen flex flex-col bg-background overflow-x-hidden">
      <div className="container mx-auto px-4 sm:px-6 pb-12">
        <Header />
        
        <main className="flex-1 space-y-8">
          <div className="text-center my-8 animate-fade-in">
            <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-inklu-blue via-inklu-purple to-inklu-peach bg-clip-text text-transparent">
              {t.dashboardTitle}
            </h1>
            <div className="flex justify-center mt-2">
              <div className="h-1 w-24 bg-gradient-to-r from-inklu-blue via-inklu-purple to-inklu-peach rounded-full"></div>
            </div>
          </div>
          
          {/* Clickable Category Progress Indicators */}
          <div className="flex justify-center mb-8 gap-4 md:gap-6 py-4 animate-fade-in">
            {categoryScores.map((category) => (
              <CircularProgress 
                key={category.id} 
                percentage={category.score} 
                color={category.color} 
                label={category.name}
                size={100}
                onClick={() => setActiveTab(category.id)}
                active={activeTab === category.id}
              />
            ))}
          </div>
          
          {/* Content based on selected tab */}
          <div className="animate-fade-in">
            <div className={activeTab === "communication" ? "block" : "hidden"}>
              <CommunicationSection />
            </div>
            
            <div className={activeTab === "process" ? "block" : "hidden"}>
              <ProcessSection />
            </div>
            
            <div className={activeTab === "strategy" ? "block" : "hidden"}>
              <StrategySection />
            </div>
            
            <div className={activeTab === "leadership" ? "block" : "hidden"}>
              <LeadershipSection />
            </div>
            
            <div className={activeTab === "accessibility" ? "block" : "hidden"}>
              <AccessibilitySection />
            </div>
          </div>
          
          <div className="mt-12 space-y-6 animate-fade-in">
            <h2 className="text-2xl font-semibold text-center mb-6">
              <span className="bg-gradient-to-r from-inklu-blue to-inklu-purple bg-clip-text text-transparent">
                Inklu-Connect Tools
              </span>
            </h2>
            <FeatureCardsSection />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
