/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import "./App.css";
import Navigation from "./components/Navigation";
import {
  ArchiveContext,
  DarkModeContext,
  SectionsContext,
  SettingsContext,
} from "./context/Contexts";
import { Outlet } from "react-router-dom";
import { useState } from "react";

function App() {
  const [sections, setSections] = useState([]);

  const [settings, setSettings] = useState({
    sections: null,
  });

  const [archive, setArchive] = useState({
    articles: [],
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
      <SectionsContext.Provider value={{ sections, setSections }}>
        <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
          <SettingsContext.Provider value={{ settings, setSettings }}>
            <ArchiveContext.Provider value={{ archive, setArchive }}>
              <Navigation />
              <Outlet />
            </ArchiveContext.Provider>
          </SettingsContext.Provider>
        </DarkModeContext.Provider>
      </SectionsContext.Provider>
    </div>
  );
}

export default App;
