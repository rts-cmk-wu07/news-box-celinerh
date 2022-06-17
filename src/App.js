import "./App.css";
import Navigation from "./components/Navigation";
import { SettingsContext } from "./context/Contexts";
import { Outlet } from "react-router-dom";
import { useState } from "react";

function App() {
  const [categorySettings, setCategorySettings] = useState({});

  return (
    <div className="App">
      <SettingsContext.Provider
        value={{ categorySettings, setCategorySettings }}
      >
        <Navigation />
        <Outlet />
      </SettingsContext.Provider>
    </div>
  );
}

export default App;
