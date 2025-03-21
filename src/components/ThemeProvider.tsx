
import { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark";
type Language = "en" | "de";

type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: Theme;
  defaultLanguage?: Language;
};

type ThemeProviderState = {
  theme: Theme;
  language: Language;
  setTheme: (theme: Theme) => void;
  setLanguage: (language: Language) => void;
  toggleTheme: () => void;
  toggleLanguage: () => void;
};

const initialState: ThemeProviderState = {
  theme: "light",
  language: "en",
  setTheme: () => null,
  setLanguage: () => null,
  toggleTheme: () => null,
  toggleLanguage: () => null,
};

const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

export function ThemeProvider({
  children,
  defaultTheme = "light",
  defaultLanguage = "en",
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(defaultTheme);
  const [language, setLanguage] = useState<Language>(defaultLanguage);

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "de" : "en");
  };

  const value = {
    theme,
    language,
    setTheme,
    setLanguage,
    toggleTheme,
    toggleLanguage,
  };

  return (
    <ThemeProviderContext.Provider value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);

  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider");

  return context;
};
