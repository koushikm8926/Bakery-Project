import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sandton Bakery | Freshly Baked with Love",
  description: "Artisanal breads, signature cakes, and handcrafted pastries made fresh daily.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
