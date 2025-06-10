import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Arogya Saram - South India's Heritage of Health",
  description: "Discover authentic wellness products rooted in South Indian tradition. Pure A2 Bilona Ghee, Himalayan Shilajit, and Natural Stevia - crafted with ancient wisdom for modern wellness.",
  keywords: "A2 ghee, bilona ghee, shilajit, stevia, ayurveda, wellness, south indian, traditional, organic",
  authors: [{ name: "Arogya Saram" }],
  openGraph: {
    title: "Arogya Saram - South India's Heritage of Health",
    description: "Authentic wellness products rooted in tradition",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${playfair.variable} font-sans antialiased bg-neutral-50 text-neutral-800`}
      >
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
