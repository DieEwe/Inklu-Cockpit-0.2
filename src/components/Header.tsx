
import { Moon, Sun, Languages } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "./ThemeProvider";

export const Header = () => {
  const { theme, language, toggleTheme, toggleLanguage } = useTheme();
  
  return (
    <header className="py-4 px-6 flex items-center justify-between mb-4 animate-fade-in">
      <div className="flex items-center space-x-2">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-inklu-blue via-inklu-purple to-inklu-peach bg-clip-text text-transparent">
          Inklu-Cockpit
        </h1>
        <div className="flex h-6 items-center space-x-1 rounded-full bg-muted px-2 text-xs font-medium">
          <span>{new Date().toLocaleDateString()}</span>
        </div>
      </div>
      
      <div className="flex items-center space-x-2">
        <Button 
          variant="outline" 
          size="icon" 
          onClick={toggleLanguage}
          className="rounded-full"
          aria-label="Toggle language"
        >
          <Languages className="h-4 w-4" />
          <span className="ml-2 hidden sm:inline-block">
            {language === 'en' ? 'EN' : 'DE'}
          </span>
        </Button>
        
        <Button 
          variant="outline" 
          size="icon" 
          onClick={toggleTheme}
          className="rounded-full"
          aria-label="Toggle theme"
        >
          {theme === 'light' ? (
            <Moon className="h-4 w-4" />
          ) : (
            <Sun className="h-4 w-4" />
          )}
        </Button>
      </div>
    </header>
  );
};
