"use client";

import { useTheme } from "@/components/theme";

export const ThemeToggle = () => {
  const { theme, toggleTheme, mounted } = useTheme();

  const isLight = theme === "light";
  const isDark = theme === "dark";

  if (!mounted) return null;

  return (
    <div
      onClick={toggleTheme}
      className="flex items-center justify-end text-sm leading-3 cursor-pointer select-none gap-2"
    >
      <div className="relative w-8 h-3 flex items-center justify-end">
        <span
          className={`transition-all duration-200
            ${isLight ? "opacity-100" : "opacity-0"}
          `}
        >
          Dark
        </span>

        <span
          className={`absolute transition-all duration-200
            ${isDark ? "opacity-100" : "opacity-0"}
          `}
        >
          Light
        </span>
      </div>
    </div>
  );
};
