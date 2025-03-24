
import { CalendarDays, MapPin, Clock, Users, Globe, Video, Hash } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useTheme } from "@/components/ThemeProvider";
import { translations } from "@/utils/mockData";

// Mock events data
const mockEvents = [
  {
    id: 1,
    title: "Inclusion Workshop",
    date: "2023-10-15",
    location: "Berlin HQ",
    type: "local",
    time: "14:00 - 16:00",
    attendees: 28,
    image: "🏢",
    description: "Learn essential strategies for creating an inclusive workplace environment.",
    tags: ["Workshop", "Inclusion", "Team Building"]
  },
  {
    id: 2,
    title: "Digital Accessibility Webinar",
    date: "2023-10-22",
    location: "Zoom",
    type: "online",
    time: "10:00 - 11:30",
    attendees: 64,
    image: "🖥️",
    description: "Discover how to make your digital products accessible to everyone.",
    tags: ["Webinar", "Accessibility", "Digital"]
  },
  {
    id: 3,
    title: "Diversity Hiring Panel",
    date: "2023-11-05",
    location: "Frankfurt Office & Zoom",
    type: "hybrid",
    time: "16:00 - 18:00",
    attendees: 43,
    image: "👥",
    description: "Join our panel discussion on effective and inclusive hiring practices.",
    tags: ["Panel", "Hiring", "Diversity"]
  },
  {
    id: 4,
    title: "Neurodiversity in Tech",
    date: "2023-11-12",
    location: "Virtual Conference",
    type: "online",
    time: "11:00 - 13:00",
    attendees: 92,
    image: "🧠",
    description: "Exploring the benefits and challenges of neurodiversity in tech teams.",
    tags: ["Tech", "Neurodiversity", "Teams"]
  },
  {
    id: 5,
    title: "Inclusive Leadership Training",
    date: "2023-11-20",
    location: "Munich Hub",
    type: "local",
    time: "09:00 - 17:00",
    attendees: 18,
    image: "🚀",
    description: "Full-day training for managers on inclusive leadership practices.",
    tags: ["Training", "Leadership", "Management"]
  },
];

// Type definition for an event
interface Event {
  id: number;
  title: string;
  date: string;
  location: string;
  type: "online" | "local" | "hybrid";
  time: string;
  attendees: number;
  image: string;
  description: string;
  tags: string[];
}

export const EventsFeed = () => {
  const { language } = useTheme();
  const t = translations[language];
  
  // Function to format date according to current language
  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString(language === 'en' ? 'en-US' : 'de-DE', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };
  
  return (
    <div className="space-y-4">
      {mockEvents.map((event) => (
        <div 
          key={event.id} 
          className="p-4 border rounded-xl shadow-sm hover:shadow-md transition-all duration-300 bg-white dark:bg-card"
        >
          <div className="flex flex-col md:flex-row gap-4">
            {/* Event Icon/Image */}
            <div className="flex-shrink-0">
              <div className={`w-16 h-16 flex items-center justify-center text-3xl rounded-xl ${
                event.type === "online" 
                  ? "bg-blue-100 dark:bg-blue-900/20" 
                  : event.type === "hybrid" 
                    ? "bg-purple-100 dark:bg-purple-900/20" 
                    : "bg-gray-100 dark:bg-gray-800/20"
              }`}>
                {event.image}
              </div>
            </div>
            
            {/* Event Content */}
            <div className="flex-grow">
              <div className="flex justify-between items-start">
                <h3 className="text-lg font-medium">{event.title}</h3>
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
                  {event.type === "online" ? (
                    <><Globe className="h-3 w-3 mr-1" />{t.online}</>
                  ) : event.type === "hybrid" ? (
                    <><Video className="h-3 w-3 mr-1" />{t.hybrid}</>
                  ) : (
                    <><MapPin className="h-3 w-3 mr-1" />{t.local}</>
                  )}
                </Badge>
              </div>
              
              <p className="text-sm text-muted-foreground mt-1">{event.description}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-3">
                <div className="text-sm text-muted-foreground flex items-center gap-1">
                  <CalendarDays className="h-3.5 w-3.5" />
                  <span>{formatDate(event.date)}</span>
                </div>
                
                <div className="text-sm text-muted-foreground flex items-center gap-1">
                  <Clock className="h-3.5 w-3.5" />
                  <span>{event.time}</span>
                </div>
                
                <div className="text-sm text-muted-foreground flex items-center gap-1">
                  <MapPin className="h-3.5 w-3.5" />
                  <span>{event.location}</span>
                </div>
                
                <div className="text-sm text-muted-foreground flex items-center gap-1">
                  <Users className="h-3.5 w-3.5" />
                  <span>{event.attendees} {t.attending}</span>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-1 mt-3">
                {event.tags.map((tag, index) => (
                  <div key={index} className="text-xs px-2 py-1 rounded-full bg-muted flex items-center">
                    <Hash className="h-2.5 w-2.5 mr-1" />{tag}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
