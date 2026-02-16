import { Header } from "@/components/header";

export default function ClientLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="flex flex-col min-h-screen text-sm">
      <div className="max-w-175 w-full mx-auto px-4 grow">
        <Header />
        <main>{children}</main>
      </div>
    </div>
  );
}
