import type { Metadata } from "next";
import "./globals.scss";

export const metadata: Metadata = {
  title: "Qoves – Frontend Task",
  description: "Pixel-precise UI component implementation",
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
