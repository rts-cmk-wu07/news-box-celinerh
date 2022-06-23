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
import { useEffect, useState } from "react";

function App() {
  const [sections, setSections] = useState([]);

  const [settings, setSettings] = useState({
    sections: null,
  });

  const [archive, setArchive] = useState({
    articles: [],
  });

  const [darkMode, setDarkMode] = useState();

  /* dark mode*/
  useEffect(() => {
    setDarkMode(JSON.parse(localStorage.getItem("dark-mode")));
  }, []);

  useEffect(() => {
    localStorage.setItem("dark-mode", JSON.stringify(darkMode));
  }, [darkMode]);

  /* archive */
  useEffect(() => {
    setArchive(
      localStorage.getItem("archive")
        ? JSON.parse(localStorage.getItem("archive"))
        : { articles: [] }
    );
  }, []);

  useEffect(() => {
    localStorage.setItem("archive", JSON.stringify(archive));
  }, [archive]);

  const styles = {
    app: css`
      height: 100vh;

      &.dark-mode,
      &.dark-mode > div {
        background-color: #7a7a7a;
      }

      &.dark-mode h1,
      &.dark-mode h2,
      &.dark-mode h2 span,
      &.dark-mode h3,
      &.dark-mode svg {
        color: #fff;
      }

      &.dark-mode p {
        color: #e2e8f0;
      }

      &.dark-mode svg path {
        stroke: #fff;
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
