import { useState, useEffect, createContext, useContext } from "react";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    // Load from localStorage on initial load
    return localStorage.getItem("theme") || "light";
  });

  useEffect(() => {
    // Save theme to localStorage
    localStorage.setItem("theme", theme);

    // Apply theme as a class on the <body> for global styling
    document.body.className = theme;
  }, [theme]);

  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to use the theme
const useTheme = () => useContext(ThemeContext);

export { useTheme, ThemeProvider };
