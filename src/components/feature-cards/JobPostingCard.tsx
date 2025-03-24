
import { Building, Briefcase, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useTheme } from "@/components/ThemeProvider";

interface JobPosting {
  title: string;
  company: string;
  location: string;
  type: string;
  posted: string;
}

interface JobPostingCardProps {
  jobs?: JobPosting[];
}

export const JobPostingCard = ({ jobs = [] }: JobPostingCardProps) => {
  const { language } = useTheme();
  
  // Default job postings if none are provided
  const defaultJobs: JobPosting[] = [
    {
      title: language === 'en' ? "Inclusive Workplace Consultant" : "Inklusionsberater für Arbeitsplätze",
      company: language === 'en' ? "Diversity Tech" : "Diversity Tech",
      location: language === 'en' ? "Remote" : "Remote",
      type: language === 'en' ? "Full-time" : "Vollzeit",
      posted: language === 'en' ? "2 days ago" : "Vor 2 Tagen"
    },
    {
      title: language === 'en' ? "Accessibility Specialist" : "Spezialist für Barrierefreiheit",
      company: language === 'en' ? "Inklu Solutions" : "Inklu Lösungen",
      location: language === 'en' ? "Berlin" : "Berlin",
      type: language === 'en' ? "Part-time" : "Teilzeit",
      posted: language === 'en' ? "1 week ago" : "Vor 1 Woche"
    },
    {
      title: language === 'en' ? "Diversity Program Manager" : "Manager für Diversitätsprogramme",
      company: language === 'en' ? "Global Inclusion" : "Global Inklusion",
      location: language === 'en' ? "Hamburg" : "Hamburg",
      type: language === 'en' ? "Contract" : "Vertrag",
      posted: language === 'en' ? "3 days ago" : "Vor 3 Tagen"
    }
  ];
  
  // Use provided jobs or default to mock data
  const displayJobs = jobs.length > 0 ? jobs : defaultJobs;

  return (
    <div className="space-y-3 max-h-60 overflow-y-auto pr-1">
      {displayJobs.map((job, index) => (
        <Card key={index} className="p-3 hover:bg-muted/50 transition-colors cursor-pointer">
          <CardContent className="p-0">
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-start">
                <h4 className="font-medium">{job.title}</h4>
                <Badge variant="outline" className="text-xs">{job.type}</Badge>
              </div>
              <div className="flex items-center gap-4 text-xs text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Building className="h-3 w-3" />
                  <span>{job.company}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Briefcase className="h-3 w-3" />
                  <span>{job.location}</span>
                </div>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-muted-foreground">{language === 'en' ? "Posted" : "Veröffentlicht"}: {job.posted}</span>
                <Badge variant="secondary" className="text-xs px-2 py-0">
                  {language === 'en' ? "Apply" : "Bewerben"}
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
