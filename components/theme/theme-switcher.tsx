"use client";

import { useTheme } from "./use-theme";

export const ThemeSwitcher = () => {
  const { theme, switchTheme, mounted } = useTheme();

  if (!mounted) return null;

  const nextTheme = theme === "dark" ? "☀︎" : "☾";

  return (
    <p className="text-sm text-color-text-muted select-none">
      <button
        onClick={switchTheme}
        className="cursor-pointer text-text-primary transition-colors"
      >
        {nextTheme}
      </button>
    </p>
  );
};
