
import { DashboardCard } from "@/components/DashboardCard";
import { BarChart } from "@/components/charts/BarChart";
import { PieChart } from "@/components/charts/PieChart";
import { ScoreChart } from "@/components/charts/ScoreChart";
import { communicationData } from "@/utils/mockData";
import { useTheme } from "@/components/ThemeProvider";
import { translations } from "@/utils/mockData";

export const CommunicationSection = () => {
  const { language } = useTheme();
  const t = translations[language];
  
  const formattedSessionsData = communicationData.sessions.data.map((value, index) => ({
    day: communicationData.sessions.labels[index],
    sessions: value
  }));
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <DashboardCard 
        title={t.sessions}
        info="Daily sessions and events tracking"
      >
        <BarChart 
          data={formattedSessionsData}
          dataKey="sessions"
          nameKey="day"
        />
      </DashboardCard>
      
      <DashboardCard 
        title={t.intranet}
        info="Intranet user engagement statistics"
      >
        <PieChart 
          data={communicationData.intranet.data}
          colors={["#155E95", "#6A80B9", "#F6C794"]}
        />
      </DashboardCard>
      
      <DashboardCard 
        title={t.certifications}
        info="Certification program progress"
      >
        <PieChart 
          data={communicationData.certifications.data}
          colors={["#155E95", "#6A80B9", "#F6C794"]}
        />
        <div className="mt-4 text-center">
          <div className="text-sm text-muted-foreground">{t.overallScore}</div>
          <div className="flex justify-center items-center mt-2">
            <ScoreChart score={Math.round(communicationData.overallScore)} size={80} />
          </div>
        </div>
      </DashboardCard>
    </div>
  );
};
