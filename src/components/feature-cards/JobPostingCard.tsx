
import { Building, Briefcase, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface JobPosting {
  title: string;
  company: string;
  location: string;
  type: string;
  posted: string;
}

interface JobPostingCardProps {
  jobs: JobPosting[];
}

export const JobPostingCard = ({ jobs }: JobPostingCardProps) => {
  return (
    <div className="space-y-3 max-h-60 overflow-y-auto pr-1">
      {jobs.map((job, index) => (
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
                <span className="text-muted-foreground">Posted: {job.posted}</span>
                <Badge variant="secondary" className="text-xs px-2 py-0">Apply</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
