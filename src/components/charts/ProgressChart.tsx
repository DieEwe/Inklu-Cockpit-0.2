
import { BarChart as RechartsBarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, ReferenceLine } from "recharts";
import { useTheme } from "@/components/ThemeProvider";

interface ProgressChartProps {
  data: Array<{name: string; target: number; current: number}>;
  height?: number;
}

export const ProgressChart = ({ 
  data, 
  height = 200
}: ProgressChartProps) => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  
  const currentGradientId = `currentGradient-${Math.random().toString(36).substr(2, 9)}`;
  
  return (
    <div style={{ width: "100%", height }}>
      <ResponsiveContainer width="100%" height="100%">
        <RechartsBarChart 
          data={data} 
          margin={{ top: 10, right: 10, left: 0, bottom: 20 }}
          barGap={4}
        >
          <defs>
            <linearGradient id={currentGradientId} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#155E95" />
              <stop offset="100%" stopColor="#6A80B9" />
            </linearGradient>
          </defs>
          <CartesianGrid vertical={false} stroke={isDark ? "#374151" : "#e5e7eb"} strokeDasharray="3 3" />
          <XAxis 
            dataKey="name" 
            tick={{ fontSize: 12 }} 
            tickLine={false}
            axisLine={{ stroke: isDark ? "#374151" : "#e5e7eb" }}
            stroke={isDark ? "#9ca3af" : "#6b7280"}
          />
          <YAxis 
            domain={[0, 100]}
            tick={{ fontSize: 12 }} 
            tickLine={false}
            axisLine={false}
            stroke={isDark ? "#9ca3af" : "#6b7280"}
          />
          <Tooltip
            content={({ active, payload, label }) => {
              if (active && payload && payload.length) {
                return (
                  <div className="bg-background p-2 border rounded shadow-sm text-sm">
                    <p className="font-medium">{label}</p>
                    <p>{`Current: ${payload[0].value}%`}</p>
                    <p>{`Target: ${payload[1].value}%`}</p>
                  </div>
                );
              }
              return null;
            }}
          />
          <Bar 
            dataKey="current" 
            fill={`url(#${currentGradientId})`}
            radius={[4, 4, 0, 0]}
            animationDuration={1500}
            name="Current"
          />
          <ReferenceLine y={100} stroke={isDark ? "#6b7280" : "#9ca3af"} strokeDasharray="3 3" />
        </RechartsBarChart>
      </ResponsiveContainer>
    </div>
  );
};
