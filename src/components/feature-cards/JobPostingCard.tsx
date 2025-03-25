import { Building, Briefcase, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useTheme } from "@/components/ThemeProvider";
import { CategoryBoostIndicator } from "@/components/CategoryBoostIndicator";
import { getCategoryData } from "@/utils/categoryData";

interface JobPosting {
  title: string;
  company: string;
  location: string;
  type: string;
  posted: string;
  boostCategories?: string[]; // Optional category boosts
}

interface JobPostingCardProps {
  jobs?: JobPosting[];
}

export const JobPostingCard = ({ jobs = [] }: JobPostingCardProps) => {
  const { language } = useTheme();
  const allCategories = getCategoryData(language);
  
  // Default job postings if none are provided
  const defaultJobs: JobPosting[] = [
    {
      title: language === 'en' ? "Inclusive Workplace Consultant" : "Inklusionsberater für Arbeitsplätze",
      company: language === 'en' ? "Diversity Tech" : "Diversity Tech",
      location: language === 'en' ? "Remote" : "Remote",
      type: language === 'en' ? "Full-time" : "Vollzeit",
      posted: language === 'en' ? "2 days ago" : "Vor 2 Tagen",
      boostCategories: ["strategy", "leadership"]
    },
    {
      title: language === 'en' ? "Accessibility Specialist" : "Spezialist für Barrierefreiheit",
      company: language === 'en' ? "Inklu Solutions" : "Inklu Solutions",
      location: language === 'en' ? "Berlin" : "Berlin",
      type: language === 'en' ? "Part-time" : "Teilzeit",
      posted: language === 'en' ? "1 week ago" : "Vor 1 Woche",
      boostCategories: ["accessibility", "process"]
    },
    {
      title: language === 'en' ? "Diversity Program Manager" : "Manager für Diversitätsprogramme",
      company: language === 'en' ? "Global Inclusion" : "Global Inklusion",
      location: language === 'en' ? "Hamburg" : "Hamburg",
      type: language === 'en' ? "Contract" : "Vertrag",
      posted: language === 'en' ? "3 days ago" : "Vor 3 Tagen",
      boostCategories: ["leadership", "strategy"]
    },
    // 5 new job postings
    {
      title: language === 'en' ? "Inclusive UX Designer" : "Inklusiver UX-Designer",
      company: language === 'en' ? "Accessible Future" : "Accessible Future",
      location: language === 'en' ? "Munich" : "München",
      type: language === 'en' ? "Full-time" : "Vollzeit",
      posted: language === 'en' ? "Just now" : "Gerade eben",
      boostCategories: ["accessibility", "process", "communication"]
    },
    {
      title: language === 'en' ? "Disability Rights Advocate" : "Fürsprecher für Behindertenrechte",
      company: language === 'en' ? "Equal Access Initiative" : "Initiative für gleichberechtigten Zugang",
      location: language === 'en' ? "Frankfurt" : "Frankfurt",
      type: language === 'en' ? "Part-time" : "Teilzeit",
      posted: language === 'en' ? "5 days ago" : "Vor 5 Tagen",
      boostCategories: ["communication", "leadership"]
    },
    {
      title: language === 'en' ? "Inclusive Learning Developer" : "Entwickler für inklusives Lernen",
      company: language === 'en' ? "EdTech Innovations" : "EdTech Innovations",
      location: language === 'en' ? "Remote" : "Remote",
      type: language === 'en' ? "Freelance" : "Freiberuflich",
      posted: language === 'en' ? "1 day ago" : "Vor 1 Tag",
      boostCategories: ["accessibility", "strategy"]
    },
    {
      title: language === 'en' ? "DEI Strategy Consultant" : "DEI-Strategieberater",
      company: language === 'en' ? "Inclusive Workplace" : "Inklusive Arbeitsplatz GmbH",
      location: language === 'en' ? "Cologne" : "Köln",
      type: language === 'en' ? "Internship" : "Praktikum",
      posted: language === 'en' ? "2 weeks ago" : "Vor 2 Wochen",
      boostCategories: ["strategy", "leadership", "process"]
    },
    {
      title: language === 'en' ? "Inclusive Communications Manager" : "Manager für inklusive Kommunikation",
      company: language === 'en' ? "Universal Access Media" : "Universal Access Media",
      location: language === 'en' ? "Stuttgart" : "Stuttgart",
      type: language === 'en' ? "Full-time" : "Vollzeit",
      posted: language === 'en' ? "4 days ago" : "Vor 4 Tagen",
      boostCategories: ["communication", "leadership"]
    }
  ];
  
  // Use provided jobs or default to mock data
  const displayJobs = jobs.length > 0 ? jobs : defaultJobs;

  return (
    <div className="space-y-3 max-h-[600px] overflow-y-auto pr-1">
      {displayJobs.map((job, index) => {
        // Map category IDs to full category objects if present
        const boostCategories = job.boostCategories 
          ? job.boostCategories.map(catId => allCategories.find(cat => cat.id === catId)).filter(Boolean)
          : [];
          
        return (
          <Card key={index} className="p-3 hover:bg-muted/50 transition-colors cursor-pointer relative">
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

                </div>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};
