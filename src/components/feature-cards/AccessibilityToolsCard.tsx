
import { MousePointerClick } from "lucide-react";

interface Tool {
  name: string;
  icon: string;
  color: string;
}

interface AccessibilityToolsCardProps {
  tools: Tool[];
}

export const AccessibilityToolsCard = ({ tools }: AccessibilityToolsCardProps) => {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-3 gap-3">
        {tools.map((tool, index) => (
          <button 
            key={index}
            className="flex flex-col items-center justify-center p-3 rounded-xl hover:bg-muted/50 transition-all border border-border/50 group"
            onClick={() => console.log(`Tool clicked: ${tool.name}`)}
          >
            <div 
              className="w-12 h-12 rounded-full flex items-center justify-center mb-2 group-hover:scale-110 transition-all"
              style={{ backgroundColor: `${tool.color}20`, color: tool.color }}
            >
              <span className="text-xl font-bold">{tool.icon}</span>
            </div>
            <span className="text-xs font-medium text-center">{tool.name}</span>
            <span className="text-[10px] text-muted-foreground flex items-center mt-1">
              <MousePointerClick className="h-2.5 w-2.5 mr-0.5" />
              Open
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};
