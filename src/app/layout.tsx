import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Styleology Unisex Salon",
  description: "Luxury Beauty Beyond Expectations in Jaipur"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
