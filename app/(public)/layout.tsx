export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <header className="border-b p-4">
        <p className="font-bold">Public Navbar</p>
      </header>

      <main className="min-h-screen">{children}</main>

      <footer className="border-t p-4 text-sm text-center">
        Public Footer
      </footer>
    </>
  );
}
