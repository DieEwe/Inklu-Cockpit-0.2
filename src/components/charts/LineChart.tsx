
import { LineChart as RechartsLineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";
import { useTheme } from "@/components/ThemeProvider";

interface LineChartProps {
  data: Array<{[key: string]: any}>;
  dataKey: string;
  nameKey: string;
  colors?: string[];
  height?: number;
}

export const LineChart = ({ 
  data, 
  dataKey, 
  nameKey,
  colors = ["#155E95", "#6A80B9"],
  height = 200
}: LineChartProps) => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  
  const gradientId = `lineGradient-${Math.random().toString(36).substr(2, 9)}`;
  
  return (
    <div style={{ width: "100%", height }}>
      <ResponsiveContainer width="100%" height="100%">
        <RechartsLineChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 20 }}>
          <defs>
            <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor={colors[0]} />
              <stop offset="100%" stopColor={colors[1]} />
            </linearGradient>
          </defs>
          <CartesianGrid vertical={false} stroke={isDark ? "#374151" : "#e5e7eb"} strokeDasharray="3 3" />
          <XAxis 
            dataKey={nameKey} 
            tick={{ fontSize: 12 }} 
            tickLine={false}
            axisLine={{ stroke: isDark ? "#374151" : "#e5e7eb" }}
            stroke={isDark ? "#9ca3af" : "#6b7280"}
          />
          <YAxis 
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
                    <p>{`${payload[0].name}: ${payload[0].value}`}</p>
                  </div>
                );
              }
              return null;
            }}
          />
          <Line 
            type="monotone" 
            dataKey={dataKey} 
            stroke={`url(#${gradientId})`}
            strokeWidth={2.5}
            dot={{ fill: colors[0], strokeWidth: 2, r: 4 }}
            activeDot={{ r: 6, fill: colors[1] }}
            animationDuration={1500}
          />
        </RechartsLineChart>
      </ResponsiveContainer>
    </div>
  );
};
