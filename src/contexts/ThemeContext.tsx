import { useState } from "react";
import { useEffect } from "react";
import { createContext } from "react";
import { useDarkMode } from "../hooks/useDarkMode";

export enum Theme {
  theme1 = "theme1",
  theme2 = "theme2",
  theme3 = "theme3",
}

interface ThemeContextProps {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

export const ThemeContext = createContext<ThemeContextProps>(
  {} as ThemeContextProps
);

export const ThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(Theme.theme1);

  const { darkMode } = useDarkMode();

  useEffect(() => {
    if (darkMode) {
      setTheme(Theme.theme1);
    } else {
      setTheme(Theme.theme2);
    }
  }, [darkMode]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={theme.toString()}>{children}</div>
    </ThemeContext.Provider>
  );
};
