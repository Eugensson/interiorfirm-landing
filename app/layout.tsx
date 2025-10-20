import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Inter, Playfair_Display } from "next/font/google";

import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default:
      "InteriorFirm — Interior Design Studio for Homes and Commercial Spaces",
    template: "%s | InteriorFirm — Interior Design Experts",
  },
  description:
    "InteriorFirm is a professional interior design studio creating modern, functional, and aesthetic spaces. We design apartments, private homes, and commercial interiors with a full turnkey approach.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} antialiased`}>
        <main className="w-full max-w-360 mx-auto bg-page">{children}</main>
        <Analytics />
      </body>
    </html>
  );
}
