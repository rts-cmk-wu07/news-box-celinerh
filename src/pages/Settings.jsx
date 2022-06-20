/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import { useEffect, useState } from "react";
import { useContext } from "react";
import Switch from "../components/Switch";
import { DarkModeContext, SettingsContext } from "../context/Contexts";

const Settings = () => {
  const { darkMode, setDarkMode } = useContext(DarkModeContext);
  const { settings, setSettings } = useContext(SettingsContext);
  const [sections, setSections] = useState([]);

  useEffect(() => {
    if (!settings.sections) {
      return;
    }

    setSections(
      Object.keys(settings.sections).map((key) => {
        return {
          section: key,
          enabled: settings.sections[key],
        };
      })
    );
  }, [settings]);

  const styles = {
    page: css`
      background-color: #eceff0;

      & h2 {
        color: #87bcbf;
        font-size: 1.7rem;
        line-height: 1;
        padding: 30px 0 50px;
        text-align: center;

        & span {
          color: #7a7a7a;
          font-size: 1.2rem;
          font-weight: 500;
        }
      }

      & p {
        color: #7a7a7a;
        padding-block: 20px;
        font-size: 0.8rem;
        text-align: center;
      }
    `,
    container: css`
      background-color: #fff;
      margin-inline: 20px;
      border-radius: 15px;
    `,
    sectionSetting: css`
      text-transform: uppercase;
      font-weight: 700;
      color: #324755;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 20px;

      &:not(:last-child) {
        border-bottom: 1px solid #f0f3f4;
      }
    `,
    button: css`
      display: block;
      margin-inline: auto;
      cursor: pointer;
      border: 2px solid #7a7a7a;
      border-radius: 25px;
      padding: 10px;
      text-transform: uppercase;
      color: #324755;
      font-size: 1rem;
      font-weight: 500;
      margin-top: 70px;
    `,
  };

  return (
    <div css={styles.page}>
      <h2>
        Manage <br /> <span>Categories</span>
      </h2>
      <div css={styles.container}>
        {sections.map(({ section, enabled }) => (
          <div css={styles.sectionSetting} key={section}>
            {section}
            <Switch
              value={enabled}
              onChange={(checked) => {
                console.log(checked);
                setSettings({
                  ...settings,
                  sections: {
                    ...settings.sections,
                    [section]: checked,
                  },
                });
              }}
            />
          </div>
        ))}
      </div>

      <button
        css={styles.button}
        onClick={() => {
          setDarkMode(!darkMode);
        }}
      >
        Toggle dark mode
      </button>
      <p>Version 4.8.15.16.23.42</p>
    </div>
  );
};

export default Settings;
