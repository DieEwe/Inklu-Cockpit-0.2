
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

const Index = () => {
  const { language } = useTheme();
  const t = translations[language];
  
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
          
          <Tabs defaultValue="communication" className="w-full animate-fade-in">
            <div className="flex justify-center mb-6">
              <TabsList className="p-1 bg-muted/80 backdrop-blur-sm rounded-full">
                <TabsTrigger value="communication" className="relative rounded-full data-[state=active]:shadow-sm">
                  {t.communication}
                  <ChevronDown className="h-3 w-3 ml-1 opacity-60" />
                </TabsTrigger>
                <TabsTrigger value="process" className="relative rounded-full data-[state=active]:shadow-sm">
                  {t.process}
                  <ChevronDown className="h-3 w-3 ml-1 opacity-60" />
                </TabsTrigger>
                <TabsTrigger value="strategy" className="relative rounded-full data-[state=active]:shadow-sm">
                  {t.strategy}
                  <ChevronDown className="h-3 w-3 ml-1 opacity-60" />
                </TabsTrigger>
                <TabsTrigger value="leadership" className="relative rounded-full data-[state=active]:shadow-sm">
                  {t.leadership}
                  <ChevronDown className="h-3 w-3 ml-1 opacity-60" />
                </TabsTrigger>
                <TabsTrigger value="accessibility" className="relative rounded-full data-[state=active]:shadow-sm">
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
