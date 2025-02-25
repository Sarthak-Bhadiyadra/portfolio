export const metadata = {
  title: "Sarthak Bhadiyadra",
  description: "Sarthak Bhadiyadra - Full Stack Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
