"use client";

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { ThemeProvider } from "@/components/theme";

export default function ClientLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ThemeProvider>
      <div className="flex flex-col min-h-screen text-sm">
        <Header />
        <ThemeToggle />
        <main className="max-w-175 w-full min-h-screen mx-auto px-4 grow">
          {children}
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
