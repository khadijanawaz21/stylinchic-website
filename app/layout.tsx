import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

const outfit = Outfit({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Stylin'Chic — Premier Hair Salon in Pickering, Ontario",
  description:
    "Pickering's premier destination for Nanoplastia, Keratin treatments, Balayage coloring, and hair restoration. Experience salon excellence in the GTA.",
  keywords: [
    "hair salon Pickering",
    "Nanoplastia",
    "Keratin treatment",
    "Balayage",
    "hair salon GTA",
    "Stylin Chic",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${cormorant.variable} ${outfit.variable} font-body antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
