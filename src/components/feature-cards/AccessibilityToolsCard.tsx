import { MousePointerClick } from "lucide-react";
import { CategoryBoostIndicator } from "@/components/CategoryBoostIndicator";
import { getCategoryData } from "@/utils/categoryData";
import { useTheme } from "@/components/ThemeProvider";

interface Tool {
  name: string;
  icon: string;
  color: string;
  boostCategories: string[]; // Add this to the interface
}

interface AccessibilityToolsCardProps {
  tools: Tool[];
}

export const AccessibilityToolsCard = ({ tools }: AccessibilityToolsCardProps) => {
  const { language } = useTheme();
  const allCategories = getCategoryData(language);
  
  return (
    <div className="space-y-3 max-h-[600px] overflow-y-auto pr-1">
      <div className="grid grid-cols-3 gap-3">
        {tools.map((tool, index) => {
          // Map category IDs to full category objects
          const boostCategories = tool.boostCategories
            .map(catId => allCategories.find(cat => cat.id === catId))
            .filter(Boolean);
            
          return (
            <button 
              key={index}
              className="flex flex-col items-center justify-center p-3 rounded-xl hover:bg-muted/50 transition-all border border-border/50 group relative"
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
              
              {/* Small dot indicator in bottom right */}
              <div className="absolute bottom-1 right-1">
                {/* If there's only one category, show a single colored dot */}
                {boostCategories.length === 1 ? (
                  <div 
                    className="w-3 h-3 rounded-full border-2 border-background"
                    style={{ backgroundColor: boostCategories[0].color }}
                    title={`Boosts ${boostCategories[0].name}`}
                  />
                ) : (
                  <CategoryBoostIndicator 
                    categories={boostCategories as any}
                    size="sm"
                  />
                )}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};
