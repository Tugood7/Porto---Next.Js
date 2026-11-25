"use client";

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useSyncExternalStore,
} from "react";
import { Language } from "@/interfaces/post";

type Theme = "light" | "dark";

interface AppContextValue {
  theme: Theme;
  toggleTheme: () => void;
  lang: Language;
  setLang: (lang: Language) => void;
  toggleLang: () => void;
  mounted: boolean;
}

const AppContext = createContext<AppContextValue | null>(null);

const listeners = new Set<() => void>();

function emitChange() {
  listeners.forEach((listener) => listener());
}

function subscribe(callback: () => void) {
  listeners.add(callback);
  const handleStorage = () => callback();
  window.addEventListener("storage", handleStorage);
  return () => {
    listeners.delete(callback);
    window.removeEventListener("storage", handleStorage);
  };
}

function getThemeSnapshot(): Theme {
  const saved = window.localStorage.getItem("theme");
  if (saved === "light" || saved === "dark") return saved;
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function getServerThemeSnapshot(): Theme {
  return "light";
}

function getLangSnapshot(): Language {
  const saved = window.localStorage.getItem("lang");
  return saved === "en" || saved === "id" ? saved : "id";
}

function getServerLangSnapshot(): Language {
  return "id";
}

const emptySubscribe = () => () => {};

export function AppProviders({ children }: { children: React.ReactNode }) {
  const theme = useSyncExternalStore(
    subscribe,
    getThemeSnapshot,
    getServerThemeSnapshot
  );
  const lang = useSyncExternalStore(
    subscribe,
    getLangSnapshot,
    getServerLangSnapshot
  );
  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const toggleTheme = useCallback(() => {
    const next: Theme = getThemeSnapshot() === "dark" ? "light" : "dark";
    window.localStorage.setItem("theme", next);
    document.documentElement.classList.toggle("dark", next === "dark");
    emitChange();
  }, []);

  const setLang = useCallback((next: Language) => {
    window.localStorage.setItem("lang", next);
    document.documentElement.lang = next;
    emitChange();
  }, []);

  const toggleLang = useCallback(() => {
    const next: Language = getLangSnapshot() === "id" ? "en" : "id";
    setLang(next);
  }, [setLang]);

  return (
    <AppContext.Provider
      value={{ theme, toggleTheme, lang, setLang, toggleLang, mounted }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) {
    throw new Error("useApp must be used within AppProviders");
  }
  return ctx;
}
