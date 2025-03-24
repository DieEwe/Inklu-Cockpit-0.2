
import { useTheme } from "@/components/ThemeProvider";
import { Header } from "@/components/Header";
import { translations } from "@/utils/mockData";
import { CommunicationSection } from "@/components/dashboard/CommunicationSection";
import { ProcessSection } from "@/components/dashboard/ProcessSection";
import { StrategySection } from "@/components/dashboard/StrategySection";
import { LeadershipSection } from "@/components/dashboard/LeadershipSection";
import { AccessibilitySection } from "@/components/dashboard/AccessibilitySection";
import { FeatureCardsSection } from "@/components/dashboard/FeatureCardsSection";
import { CircularProgress } from "@/components/CircularProgress";
import { InkluScore } from "@/components/InkluScore";
import { useState, useEffect, useRef } from "react";
import { 
  communicationData, 
  processData, 
  strategyData, 
  leadershipData, 
  accessibilityData 
} from "@/utils/mockData";
import { EventsFeed } from "@/components/EventsFeed";

const Index = () => {
  const { language } = useTheme();
  const t = translations[language];
  
  // State to track the active tab
  const [activeTab, setActiveTab] = useState("communication");
  
  // State to track scroll position
  const [scrolled, setScrolled] = useState(false);
  
  // Ref for the header
  const headerRef = useRef<HTMLDivElement>(null);
  
  // Progress indicators data
  const categoryScores = [
    { id: "communication", score: Math.round(communicationData.overallScore), color: "#D946EF", name: t.communication }, // Pink
    { id: "process", score: Math.round(processData.overallScore), color: "#9b87f5", name: t.process }, // Purple
    { id: "strategy", score: Math.round(strategyData.overallScore), color: "#0EA5E9", name: t.strategy }, // Blue
    { id: "leadership", score: Math.round(leadershipData.overallScore), color: "#10B981", name: t.leadership }, // Green
    { id: "accessibility", score: Math.round(accessibilityData.overallScore), color: "#F97316", name: t.accessibility }, // Orange
  ];
  
  // Extract scores and colors for InkluScore
  const scores = categoryScores.map(category => category.score);
  const colors = categoryScores.map(category => category.color);
  
  // Handle scroll events to show/hide floating controls
  useEffect(() => {
    const handleScroll = () => {
      if (headerRef.current) {
        const offset = headerRef.current.offsetHeight;
        setScrolled(window.scrollY > offset);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col bg-background overflow-x-hidden">
      <div ref={headerRef} className="container mx-auto px-4 sm:px-6 pt-4">
        <Header />
        
        <main className="flex-1 space-y-8 pb-12">
          <div className="text-center my-8 animate-fade-in">
            <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-inklu-blue via-inklu-purple to-inklu-peach bg-clip-text text-transparent">
              {t.dashboardTitle}
            </h1>
            <div className="flex justify-center mt-2">
              <div className="h-1 w-24 bg-gradient-to-r from-inklu-blue via-inklu-purple to-inklu-peach rounded-full"></div>
            </div>
          </div>
          
          {/* Inklu Score */}
          <InkluScore scores={scores} colors={colors} />
          
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
                {t.inkluConnectTools}
              </span>
            </h2>
            <FeatureCardsSection />
          </div>
          
          {/* Events Feed */}
          <div className="mt-12 space-y-6 animate-fade-in">
            <h2 className="text-2xl font-semibold text-center mb-6">
              <span className="bg-gradient-to-r from-inklu-blue to-inklu-purple bg-clip-text text-transparent">
                {t.events}
              </span>
            </h2>
            <EventsFeed />
          </div>
        </main>
      </div>
      
      {/* Floating language/theme toggle */}
      {scrolled && (
        <div className="fixed right-4 top-1/2 transform -translate-y-1/2 z-50 animate-fade-in">
          <div className="bg-background/80 backdrop-blur-md shadow-lg rounded-full p-2 border border-border">
            <Header floating={true} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;
