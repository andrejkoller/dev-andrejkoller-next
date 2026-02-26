"use client";

import { useTheme } from "@/components/theme";

export const ThemeToggle = () => {
  const { theme, toggleTheme, mounted } = useTheme();

  const isLight = theme === "light";
  const isDark = theme === "dark";

  if (!mounted) return null;

  return (
    <div className="flex items-center text-sm text-(--secondary-foreground) select-none w-fit">
      <p className="transition-all duration-200">
        Switch to{" "}
        <button onClick={toggleTheme} className="cursor-pointer">
          <span
            className={`text-(--foreground) ${isLight ? "opacity-100" : "opacity-0"}`}
          >
            Dark
          </span>
        </button>
      </p>

      <p className="absolute transition-all duration-200">
        Switch to{" "}
        <button onClick={toggleTheme} className="cursor-pointer">
          <span
            className={`text-(--foreground) ${isDark ? "opacity-100" : "opacity-0"}`}
          >
            Light
          </span>
        </button>
      </p>
    </div>
  );
};
