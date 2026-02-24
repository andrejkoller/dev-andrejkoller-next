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
      className="fixed top-5 right-5 md:top-12.5 md:right-12.5 flex items-center justify-end text-[12px] leading-3 cursor-pointer select-none"
    >
      <span
        className={`absolute right-5 transition-all duration-200
          ${isLight ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-1.25"}
        `}
      >
        Dark
      </span>

      <span
        className={`absolute right-5 transition-all duration-200
          ${isDark ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1.25"}
        `}
      >
        Light
      </span>

      <button
        aria-label="Toggle Theme"
        className={`ml-2.5 h-3.25 w-3.25 rounded-full border transition-all duration-200 border-(--border)
          ${isDark ? "bg-(--border)" : "bg-transparent"}
        `}
      />
    </div>
  );
};
