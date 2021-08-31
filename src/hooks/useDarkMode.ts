import { useCallback, useEffect, useState } from "react";
import { getUserPrefersColorScheme } from "../helpers/getUserPrefersColorScheme";

export function useDarkMode() {
  const {userPrefersDark}= getUserPrefersColorScheme();

  const [darkMode, setDarkMode] = useState(userPrefersDark);

  const toggleUseDarkMode = useCallback((ev: MediaQueryListEvent) => {
    setDarkMode(ev.matches);
  }, []);

  useEffect(() => {
    const matchMedia = window.matchMedia("(prefers-color-scheme: dark)");
    matchMedia.addEventListener("change", toggleUseDarkMode);

    return () => {
      matchMedia.removeEventListener("change", toggleUseDarkMode);
    };
  }, [toggleUseDarkMode]);

  return { darkMode };
}
