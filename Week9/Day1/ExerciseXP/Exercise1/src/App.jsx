// Objective: Create a theme switcher component that allows users to toggle between light and dark themes using useContext and useState.
//     Set up a new React project using create-react-app or your preferred method.
//     Create a context for managing the theme (light/dark mode).
//     Implement a theme switcher component that toggles between light and dark themes when clicked.
//     Use useContext to access the current theme in other components and apply the theme styles.
// Hints:
//     You can create a context with a default theme value (e.g., light) and a function to toggle the theme.
//     The theme switcher component should have a button that, when clicked, calls the theme toggling function provided by the context.
//     Apply different styles (CSS or inline styles) to your components based on the current theme.

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { useState, createContext } from 'react'
import './App.css'
import Header from "./components/Header";
import Main from "./components/Main";

export const ThemeModeContext = createContext();

function App() {
  const [themeMode, setThemeMode] = useState("light");
  return (
    <>
      <ThemeModeContext.Provider value={{ themeMode, setThemeMode }}>
        <Header />
        <Main />
      </ThemeModeContext.Provider>
    </>
  );
}
export default App;

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)