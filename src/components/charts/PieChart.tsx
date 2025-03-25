
import { PieChart as RechartsPieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from "recharts";

interface PieChartProps {
  data: Array<{name: string; value: number}>;
  colors?: string[];
  height?: number;
}

export const PieChart = ({ 
  data, 
  colors = ["#155E95", "#6A80B9", "#98D2C0", "#b3c1d1"],
  height = 200
}: PieChartProps) => {
  return (
    <div style={{ width: "100%", height }}>
      <ResponsiveContainer width="100%" height="100%">
        <RechartsPieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={40}
            outerRadius={70}
            paddingAngle={3}
            dataKey="value"
            labelLine={false}
            animationDuration={1500}
          >
            {data.map((entry, index) => (
              <Cell 
                key={`cell-${index}`} 
                fill={colors[index % colors.length]} 
                className="transition-opacity hover:opacity-80"
              />
            ))}
          </Pie>
          <Tooltip
            content={({ active, payload }) => {
              if (active && payload && payload.length) {
                return (
                  <div className="bg-background p-2 border rounded shadow-sm text-sm">
                    <p className="font-medium">{payload[0].name}</p>
                    <p>{`Value: ${payload[0].value}`}</p>
                  </div>
                );
              }
              return null;
            }}
          />
          <Legend 
            layout="horizontal" 
            verticalAlign="bottom" 
            align="center"
            formatter={(value) => <span className="text-xs">{value}</span>}
          />
        </RechartsPieChart>
      </ResponsiveContainer>
    </div>
  );
};
