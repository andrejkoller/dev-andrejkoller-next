export default function ClientLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="flex flex-col min-h-screen text-sm">
      <div className="max-w-175 w-full mx-auto px-4 grow">{children}</div>
    </main>
  );
}
