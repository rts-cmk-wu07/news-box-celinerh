/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import "./App.css";
import Navigation from "./components/Navigation";
import { DarkModeContext, SettingsContext } from "./context/Contexts";
import { Outlet } from "react-router-dom";
import { useState } from "react";

function App() {
  const [settings, setSettings] = useState({
    sections: null,
  });
  const [darkMode, setDarkMode] = useState(false);

  const styles = {
    app: css`
      &.dark-mode,
      &.dark-mode > div {
        background-color: #7a7a7a;
      }
    `,
  };

  return (
    <div css={styles.app} className={darkMode ? "dark-mode" : ""}>
      <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
        <SettingsContext.Provider value={{ settings, setSettings }}>
          <Navigation />
          <Outlet />
        </SettingsContext.Provider>
      </DarkModeContext.Provider>
    </div>
  );
}

export default App;
