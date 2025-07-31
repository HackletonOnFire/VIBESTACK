import type { Metadata } from "next";
import "./globals.css";

// Using system fonts instead of Google Fonts to avoid SSL issues
const inter = {
  className: "font-sans",
};

export const metadata: Metadata = {
  title: "Casgo - Sustainability Application",
  description:
    "Casgo: AI-powered platform to help businesses reduce costs and carbon footprints",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
