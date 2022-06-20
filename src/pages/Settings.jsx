import { useEffect, useState } from "react";
import { useContext } from "react";
import Switch from "../components/Switch";
import { SettingsContext } from "../context/Contexts";

const Settings = () => {
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

  return (
    <div>
      {sections.map(({ section, enabled }) => (
        <div key={section}>
          {section} {enabled ? "enabled" : "disabled"}
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
  );
};

export default Settings;
