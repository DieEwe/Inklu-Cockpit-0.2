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
          <div className="flex items-center">
            <img 
              src="public\InkluConnectLogoText.png" 
              alt="Inklu-Connect Logo" 
              className="h-10 w-auto" // Adjust size as needed
            />
            {/* Optional: Keep text next to logo */}
          </div>
        </div>
      )}
      
      <div className={`flex items-center ${floating ? 'space-x-1 flex-col space-y-2' : 'space-x-3'}`}>
        <Button 
          variant="ghost"
          size="sm"
          onClick={toggleLanguage}
          className={`
            ${floating ? 'w-8 h-8 p-0' : 'px-3 h-9'} 
            rounded-full 
            hover:bg-custom-wine/10 
            hover:text-custom-wine 
            dark:hover:bg-custom-peach/10 
            dark:hover:text-custom-peach
            transition-colors
          `}
          aria-label={t.toggleLanguage}
        >
          <Languages className="h-4 w-4" />
          {!floating && (
            <span className="ml-1 text-sm font-medium">
              {language === 'en' ? 'EN' : 'DE'}
            </span>
          )}
        </Button>
        
        <Button 
          variant="ghost"
          size="sm"
          onClick={toggleTheme}
          className={`
            ${floating ? 'w-8 h-8 p-0' : 'px-3 h-9'} 
            rounded-full 
            hover:bg-custom-wine/10 
            hover:text-custom-wine 
            dark:hover:bg-custom-peach/10 
            dark:hover:text-custom-peach
            transition-colors
          `}
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
