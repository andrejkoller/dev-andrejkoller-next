import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

export default function ClientLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="flex flex-col min-h-screen text-sm">
      <Header />
      <main className="max-w-175 w-full min-h-screen mx-auto px-4 grow">
        {children}
      </main>
      <Footer />
    </div>
  );
}
