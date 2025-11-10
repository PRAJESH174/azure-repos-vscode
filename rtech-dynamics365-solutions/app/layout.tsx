import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rtech Dynamics 365 Solutions",
  description: "Expert insights and solutions for Microsoft Dynamics 365",
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
