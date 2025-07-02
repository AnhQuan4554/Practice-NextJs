export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <h1>Header</h1>
      {children}
      <h1>Footer</h1>
    </section>
  );
}
