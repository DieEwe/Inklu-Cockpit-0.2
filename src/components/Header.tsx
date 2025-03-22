
import { Moon, Sun, Languages } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "./ThemeProvider";
import { translations } from "@/utils/mockData";

interface HeaderProps {
  floating?: boolean;
}

export const Header = ({ floating = false }: HeaderProps) => {
  const { theme, language, toggleTheme, toggleLanguage } = useTheme();
  const t = translations[language];
  
  return (
    <header className={`flex items-center justify-between ${floating ? 'px-2 py-2' : 'py-4 px-6 mb-4 animate-fade-in'}`}>
      {!floating && (
        <div className="flex items-center space-x-2">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-inklu-blue via-inklu-purple to-inklu-peach bg-clip-text text-transparent">
            Inklu-Cockpit
          </h1>
          <div className="flex h-6 items-center space-x-1 rounded-full bg-muted px-2 text-xs font-medium">
            <span>{new Date().toLocaleDateString()}</span>
          </div>
        </div>
      )}
      
      <div className={`flex items-center ${floating ? 'space-x-1 flex-col space-y-2' : 'space-x-2'}`}>
        <Button 
          variant={floating ? "outline" : "outline"}
          size={floating ? "sm" : "icon"} 
          onClick={toggleLanguage}
          className={`${floating ? 'w-8 h-8 p-0' : 'rounded-full'}`}
          aria-label={t.toggleLanguage}
        >
          <Languages className="h-4 w-4" />
          {!floating && (
            <span className="ml-2 hidden sm:inline-block">
              {language === 'en' ? 'EN' : 'DE'}
            </span>
          )}
        </Button>
        
        <Button 
          variant={floating ? "outline" : "outline"}
          size={floating ? "sm" : "icon"} 
          onClick={toggleTheme}
          className={`${floating ? 'w-8 h-8 p-0' : 'rounded-full'}`}
          aria-label={t.toggleTheme}
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
