import { createContext } from "react";

export const SettingsContext = createContext({
  sections: null,
});

export const DarkModeContext = createContext(false);
