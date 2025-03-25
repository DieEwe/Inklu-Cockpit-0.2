
import { DashboardCard } from "@/components/DashboardCard";
import { LineChart } from "@/components/charts/LineChart";
import { BarChart } from "@/components/charts/BarChart";
import { ScoreChart } from "@/components/charts/ScoreChart";
import { processData } from "@/utils/mockData";
import { useTheme } from "@/components/ThemeProvider";
import { translations } from "@/utils/mockData";

export const ProcessSection = () => {
  const { language } = useTheme();
  const t = translations[language];
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <DashboardCard 
        title={t.applicantJourney}
        info="Progress through application stages"
      >
        <LineChart 
          data={processData.applicantJourney.data}
          dataKey="value"
          nameKey="name"
        />
      </DashboardCard>
      
      <DashboardCard 
        title={t.onboarding}
        info="Onboarding process completion rates"
      >
        <BarChart 
          data={processData.onboarding.data}
          dataKey="value"
          nameKey="name"
        />
      </DashboardCard>
      
      <DashboardCard 
        title={t.funding}
        info="Monthly funding allocation in Euros"
      >
        <LineChart 
          data={processData.funding.data}
          dataKey="amount"
          nameKey="month"
          colors={["#6A80B9", "#98D2C0"]}
        />
        <div className="mt-4 text-center">
          <div className="text-sm text-muted-foreground">{t.overallScore}</div>
          <div className="flex justify-center items-center mt-2">
            <ScoreChart score={Math.round(processData.overallScore)} size={80} />
          </div>
        </div>
      </DashboardCard>
    </div>
  );
};
