
import { DashboardCard } from "@/components/DashboardCard";
import { LineChart } from "@/components/charts/LineChart";
import { BarChart } from "@/components/charts/BarChart";
import { ScoreChart } from "@/components/charts/ScoreChart";
import { leadershipData } from "@/utils/mockData";
import { useTheme } from "@/components/ThemeProvider";
import { translations } from "@/utils/mockData";

export const LeadershipSection = () => {
  const { language } = useTheme();
  const t = translations[language];
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <DashboardCard 
        title={t.training}
        info="Training hours completed monthly"
      >
        <LineChart 
          data={leadershipData.training.data}
          dataKey="hours"
          nameKey="month"
        />
      </DashboardCard>
      
      <DashboardCard 
        title={t.mentoring}
        info="Mentoring and coaching program statistics"
      >
        <BarChart 
          data={leadershipData.mentoring.data}
          dataKey="value"
          nameKey="name"
        />
      </DashboardCard>
      
      <DashboardCard 
        title={t.network}
        info="Growth of professional network over time"
      >
        <LineChart 
          data={leadershipData.network.data}
          dataKey="size"
          nameKey="year"
          colors={["#6A80B9", "#F6C794"]}
        />
        <div className="mt-4 text-center">
          <div className="text-sm text-muted-foreground">{t.overallScore}</div>
          <div className="flex justify-center items-center mt-2">
            <ScoreChart score={Math.round(leadershipData.overallScore)} size={80} />
          </div>
        </div>
      </DashboardCard>
    </div>
  );
};
