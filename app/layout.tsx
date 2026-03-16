import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
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
        className={`${playfair.variable} ${dmSans.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
