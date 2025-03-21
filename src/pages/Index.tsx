
import { useTheme } from "@/components/ThemeProvider";
import { Header } from "@/components/Header";
import { translations } from "@/utils/mockData";
import { CommunicationSection } from "@/components/dashboard/CommunicationSection";
import { ProcessSection } from "@/components/dashboard/ProcessSection";
import { StrategySection } from "@/components/dashboard/StrategySection";
import { LeadershipSection } from "@/components/dashboard/LeadershipSection";
import { AccessibilitySection } from "@/components/dashboard/AccessibilitySection";
import { FeatureCardsSection } from "@/components/dashboard/FeatureCardsSection";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChevronDown } from "lucide-react";
import { CircularProgress } from "@/components/CircularProgress";
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
  
  // Progress indicators data
  const categoryScores = [
    { score: Math.round(communicationData.overallScore), color: "#D946EF", name: t.communication }, // Pink
    { score: Math.round(processData.overallScore), color: "#9b87f5", name: t.process }, // Purple
    { score: Math.round(strategyData.overallScore), color: "#0EA5E9", name: t.strategy }, // Blue
    { score: Math.round(leadershipData.overallScore), color: "#10B981", name: t.leadership }, // Green
    { score: Math.round(accessibilityData.overallScore), color: "#F97316", name: t.accessibility }, // Orange
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
          
          {/* Category Progress Indicators */}
          <div className="flex justify-center mb-6 gap-4 md:gap-6 overflow-x-auto py-4 animate-fade-in">
            {categoryScores.map((category, index) => (
              <CircularProgress 
                key={index} 
                percentage={category.score} 
                color={category.color} 
                label={category.name}
                size={90}
              />
            ))}
          </div>
          
          <Tabs defaultValue="communication" className="w-full animate-fade-in">
            <div className="flex justify-center mb-6">
              <TabsList className="p-1 bg-muted/80 backdrop-blur-sm rounded-full text-base">
                <TabsTrigger value="communication" className="relative rounded-full py-2.5 px-4 data-[state=active]:shadow-sm">
                  {t.communication}
                  <ChevronDown className="h-3 w-3 ml-1 opacity-60" />
                </TabsTrigger>
                <TabsTrigger value="process" className="relative rounded-full py-2.5 px-4 data-[state=active]:shadow-sm">
                  {t.process}
                  <ChevronDown className="h-3 w-3 ml-1 opacity-60" />
                </TabsTrigger>
                <TabsTrigger value="strategy" className="relative rounded-full py-2.5 px-4 data-[state=active]:shadow-sm">
                  {t.strategy}
                  <ChevronDown className="h-3 w-3 ml-1 opacity-60" />
                </TabsTrigger>
                <TabsTrigger value="leadership" className="relative rounded-full py-2.5 px-4 data-[state=active]:shadow-sm">
                  {t.leadership}
                  <ChevronDown className="h-3 w-3 ml-1 opacity-60" />
                </TabsTrigger>
                <TabsTrigger value="accessibility" className="relative rounded-full py-2.5 px-4 data-[state=active]:shadow-sm">
                  {t.accessibility}
                  <ChevronDown className="h-3 w-3 ml-1 opacity-60" />
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="communication" className="animate-slide-up">
              <CommunicationSection />
            </TabsContent>
            
            <TabsContent value="process" className="animate-slide-up">
              <ProcessSection />
            </TabsContent>
            
            <TabsContent value="strategy" className="animate-slide-up">
              <StrategySection />
            </TabsContent>
            
            <TabsContent value="leadership" className="animate-slide-up">
              <LeadershipSection />
            </TabsContent>
            
            <TabsContent value="accessibility" className="animate-slide-up">
              <AccessibilitySection />
            </TabsContent>
          </Tabs>
          
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
