
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

interface ScoreChartProps {
  score: number;
  size?: number;
}

export const ScoreChart = ({ score, size = 100 }: ScoreChartProps) => {
  const data = [
    { name: "Score", value: score },
    { name: "Remaining", value: 100 - score }
  ];
  
  const colors = ["#155E95", "#f3f4f6"];
  
  const gradientId = `scoreGradient-${Math.random().toString(36).substr(2, 9)}`;
  
  return (
    <div style={{ width: size, height: size }} className="mx-auto relative">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <defs>
            <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#155E95" />
              <stop offset="100%" stopColor="#6A80B9" />
            </linearGradient>
          </defs>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={size * 0.35}
            outerRadius={size * 0.45}
            startAngle={90}
            endAngle={-270}
            paddingAngle={0}
            dataKey="value"
            strokeWidth={0}
          >
            {data.map((entry, index) => (
              <Cell 
                key={`cell-${index}`} 
                fill={index === 0 ? `url(#${gradientId})` : colors[index]}
                className={index === 0 ? "animate-pulse" : ""}
              />
            ))}
          </Pie>
          <Tooltip 
            content={({ active, payload }) => {
              if (active && payload && payload.length) {
                return (
                  <div className="bg-background p-2 border rounded shadow-sm text-sm">
                    <p>{`${payload[0].name}: ${payload[0].value}`}</p>
                  </div>
                );
              }
              return null;
            }}
          />
        </PieChart>
      </ResponsiveContainer>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-2xl font-bold">{score}</span>
      </div>
    </div>
  );
};
