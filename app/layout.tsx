import type { Metadata } from "next";
// This next line imports the global CSS file your config points to
import "./globals.css"; 

export const metadata: Metadata = {
  title: "My Vercel App",
  description: "My project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
