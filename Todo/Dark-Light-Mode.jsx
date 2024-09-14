import React, { useState, useEffect } from "react";

function App() {
  const [theme, setTheme] = useState("light"); // default to light

  // Detect the system theme on initial load
  useEffect(() => {
    const userPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    setTheme(userPrefersDark ? "dark" : "light");
    console.log(theme);
  }, []);

  // Store theme in localStorage to persist user preference

  // Load theme from localStorage if it exists
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  // Toggle between dark and light themes
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  // Define styles for dark and light modes
  const themeStyles = {
    light: {
      backgroundColor: "#ffffff",
      color: "#000000",
    },
    dark: {
      backgroundColor: "#181818",
      color: "#ffffff",
    },
  };

  return (
    <div style={themeStyles[theme]}>
      <h1>My Day - {theme.charAt(0).toUpperCase() + theme.slice(1)} Mode</h1>
      <button onClick={toggleTheme}>
        Switch to {theme === "light" ? "Dark" : "Light"} Mode
      </button>

      <ul>
        <li>Todo 1</li>
        <li>Todo 2</li>
        <li>Todo 3</li>
      </ul>
    </div>
  );
}

export default App;
