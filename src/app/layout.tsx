import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bright Family Dentistry | Chattanooga, TN",
  description:
    "Compassionate dental care for the whole family in Chattanooga, TN. Cosmetic, emergency, family & Medicaid-accepting dentistry with Dr. Robina Habib.",
  keywords: [
    "dentist Chattanooga",
    "family dentistry",
    "cosmetic dentistry",
    "emergency dental",
    "Medicaid dentist",
    "Dr. Robina Habib",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased bg-off-white">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
