
import { DashboardCard } from "@/components/DashboardCard";
import { PieChart } from "@/components/charts/PieChart";
import { ProgressChart } from "@/components/charts/ProgressChart";
import { ScoreChart } from "@/components/charts/ScoreChart";
import { strategyData } from "@/utils/mockData";
import { useTheme } from "@/components/ThemeProvider";
import { translations } from "@/utils/mockData";

export const StrategySection = () => {
  const { language } = useTheme();
  const t = translations[language];
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <DashboardCard 
        title={t.motivation}
        info="Employee motivation levels"
      >
        <PieChart 
          data={strategyData.motivation.data.map(item => ({
            name: item.category,
            value: item.value
          }))}
          colors={["#155E95", "#6A80B9", "#98D2C0", "#d1d5db"]}
        />
      </DashboardCard>
      
      <DashboardCard 
        title={t.yearlyGoals}
        info="Progress towards annual objectives"
      >
        <ProgressChart 
          data={strategyData.yearlyGoals.data}
        />
      </DashboardCard>
      
      <DashboardCard 
        title={t.personalGoals}
        info="Alignment with personal development objectives"
      >
        <PieChart 
          data={strategyData.personalGoals.data}
          colors={["#155E95", "#6A80B9", "#98D2C0"]}
        />
        <div className="mt-4 text-center">
          <div className="text-sm text-muted-foreground">{t.overallScore}</div>
          <div className="flex justify-center items-center mt-2">
            <ScoreChart score={Math.round(strategyData.overallScore)} size={80} />
          </div>
        </div>
      </DashboardCard>
    </div>
  );
};
