
import { CalendarDays, MapPin, Clock, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface Event {
  title: string;
  date: string;
  location: string;
  type: "online" | "local" | "hybrid";
  time: string;
  attendees: number;
}

interface EventsCardProps {
  events: Event[];
}

export const EventsCard = ({ events }: EventsCardProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 max-h-[300px] overflow-y-auto pr-1">
      {events.map((event, index) => (
        <div 
          key={index} 
          className={`p-4 border rounded-lg hover:bg-muted/30 transition-all ${
            event.type === "online" 
              ? "border-blue-200 dark:border-blue-900" 
              : event.type === "hybrid" 
                ? "border-purple-200 dark:border-purple-900" 
                : "border-gray-200 dark:border-gray-800"
          }`}
        >
          <div className="flex justify-between items-start mb-2">
            <h4 className="font-medium text-sm">{event.title}</h4>
            <Badge 
              variant={event.type === "online" ? "secondary" : event.type === "hybrid" ? "default" : "outline"}
              className={
                event.type === "online" 
                  ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100" 
                  : event.type === "hybrid" 
                    ? "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-100"
                    : ""
              }
            >
              {event.type === "online" ? "Online" : event.type === "hybrid" ? "Hybrid" : "Local"}
            </Badge>
          </div>
          
          <div className="grid grid-cols-2 gap-x-2 gap-y-1 mt-2">
            <div className="text-xs text-muted-foreground flex items-center gap-1">
              <CalendarDays className="h-3 w-3" />
              <span>{event.date}</span>
            </div>
            
            <div className="text-xs text-muted-foreground flex items-center gap-1">
              <Clock className="h-3 w-3" />
              <span>{event.time}</span>
            </div>
            
            <div className="text-xs text-muted-foreground flex items-center gap-1">
              <MapPin className="h-3 w-3" />
              <span>{event.location}</span>
            </div>
            
            <div className="text-xs text-muted-foreground flex items-center gap-1">
              <Users className="h-3 w-3" />
              <span>{event.attendees} attending</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
