import { useContext } from "react";
import { SettingsContext } from "../context/Contexts";

const Settings = () => {
  const { categorySettings, setCategorySettings } = useContext(SettingsContext);
  console.log(categorySettings);

  return <div></div>;
};

export default Settings;
