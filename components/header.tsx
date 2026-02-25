"use client";

import { ThemeToggle } from "@/components/theme/theme-toggle";

export const Header = () => {
  return (
    <header className="h-50 max-w-175 w-full mx-auto px-4 flex items-center justify-between fade-in">
      <div className="flex flex-col items-start">
        {/* SVG Logo coming soon */}
      </div>
      <div className="flex flex-col items-start">
        <ThemeToggle />
      </div>
    </header>
  );
};
