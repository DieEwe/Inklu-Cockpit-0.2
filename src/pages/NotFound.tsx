
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useTheme } from "@/components/ThemeProvider";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();
  const { theme } = useTheme();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center glass-card p-10 max-w-md animate-scale-in">
        <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted">
          <span className="text-2xl font-bold">404</span>
        </div>
        <h1 className="text-3xl font-bold mb-4 bg-gradient-to-r from-inklu-blue to-inklu-purple bg-clip-text text-transparent">
          Page Not Found
        </h1>
        <p className="text-muted-foreground mb-6">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <Button asChild className="group">
          <a href="/" className="inline-flex items-center gap-2">
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Return to Dashboard
          </a>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
