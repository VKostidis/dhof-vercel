import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.digitalhalloffame.com"),
  title: {
    default:
      "Digital Hall of Fame — Not an Agency. A Digital Growth Partner That Actually Delivers.",
    template: "%s | Digital Hall of Fame",
  },
  description:
    "NZ digital marketing agency built for established businesses tired of agencies that over-promise and under-deliver. SEO, Google Ads, Web Dev, AI. Battle-tested since 2015.",
  openGraph: {
    type: "website",
    locale: "en_NZ",
    url: "https://www.digitalhalloffame.com",
    siteName: "Digital Hall of Fame",
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-NZ" className={inter.variable}>
      <body className="font-sans antialiased bg-paper text-ink overflow-x-hidden">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
