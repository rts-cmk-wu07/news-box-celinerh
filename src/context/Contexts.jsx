import { createContext } from "react";

export const SectionsContext = createContext([]);

export const SettingsContext = createContext({
  sections: null,
});

export const ArchiveContext = createContext({
  articles: [],
});

export const DarkModeContext = createContext(false);
