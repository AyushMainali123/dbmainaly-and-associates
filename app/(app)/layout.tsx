import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
});

const DEFAULT_TITLE = "DB Mainaly & Associates | Professional Financial Excellence";
const DEFAULT_DESCRIPTION = "Leading chartered accountancy firm providing elite audit, tax, and legal advisory across Nepal and South Asia.";

export const metadata: Metadata = {
  title: DEFAULT_TITLE,
  description: DEFAULT_DESCRIPTION,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={manrope.className}>
      <body className="bg-surface text-on-surface font-sans antialiased">{children}</body>
    </html>
  );
}
