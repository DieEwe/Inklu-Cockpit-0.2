
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Info } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ReactNode } from "react";

interface DashboardCardProps {
  title: string;
  info?: string;
  children: ReactNode;
  className?: string;
}

export const DashboardCard = ({ title, info, children, className }: DashboardCardProps) => {
  return (
    <Card className={`dashboard-card ${className || ""}`}>
      <CardHeader className="pb-2 pt-4 px-4 flex flex-row items-center justify-between space-y-0">
        <CardTitle className="text-sm font-medium text-muted-foreground flex items-center">
          {title}
          {info && (
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Info className="h-4 w-4 ml-2 text-muted-foreground cursor-help" />
                </TooltipTrigger>
                <TooltipContent>
                  <p className="max-w-xs">{info}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          )}
        </CardTitle>
      </CardHeader>
      <CardContent className="p-4">{children}</CardContent>
    </Card>
  );
};
