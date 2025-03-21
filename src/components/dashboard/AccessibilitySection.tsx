
import { DashboardCard } from "@/components/DashboardCard";
import { PieChart } from "@/components/charts/PieChart";
import { BarChart } from "@/components/charts/BarChart";
import { ScoreChart } from "@/components/charts/ScoreChart";
import { accessibilityData } from "@/utils/mockData";
import { useTheme } from "@/components/ThemeProvider";
import { translations } from "@/utils/mockData";

export const AccessibilitySection = () => {
  const { language } = useTheme();
  const t = translations[language];
  
  const aidsData = accessibilityData.aids.data.map(item => ({
    name: item.type,
    count: item.count
  }));
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <DashboardCard 
        title={t.workplaceInclusive}
        info="Workplace inclusivity assessment results"
      >
        <PieChart 
          data={accessibilityData.workplaceInclusive.data.map(item => ({
            name: item.category,
            value: item.value
          }))}
          colors={["#155E95", "#6A80B9", "#F6C794", "#d1d5db"]}
        />
      </DashboardCard>
      
      <DashboardCard 
        title={t.aids}
        info="Accessibility aids provided"
      >
        <BarChart 
          data={aidsData}
          dataKey="count"
          nameKey="name"
        />
      </DashboardCard>
      
      <DashboardCard 
        title={t.reha}
        info="Rehabilitation and BEM program status"
      >
        <PieChart 
          data={accessibilityData.reha.data.map(item => ({
            name: item.status,
            value: item.value
          }))}
          colors={["#155E95", "#6A80B9", "#F6C794", "#d1d5db"]}
        />
        <div className="mt-4 text-center">
          <div className="text-sm text-muted-foreground">{t.overallScore}</div>
          <div className="flex justify-center items-center mt-2">
            <ScoreChart score={Math.round(accessibilityData.overallScore)} size={80} />
          </div>
        </div>
      </DashboardCard>
    </div>
  );
};
