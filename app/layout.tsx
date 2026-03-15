import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import { Analytics } from "@vercel/analytics/next";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://trebryanston.com"),
  title: {
    default: "TRE Bryanston | Trauma Release Exercises",
    template: "%s | TRE Bryanston",
  },
  description:
    "The key to releasing stress and taking control of trauma. TRE® sessions in Bryanston, Johannesburg with Sam.",
  keywords: [
    "TRE",
    "Trauma Release Exercises",
    "Bryanston",
    "Johannesburg",
    "stress relief",
    "PTSD",
    "body stress release",
    "tremoring",
    "nervous system reset",
    "anxiety relief Johannesburg",
  ],
  authors: [{ name: "Sam", url: "https://trebryanston.com/about" }],
  openGraph: {
    title: "TRE Bryanston | Trauma Release Exercises",
    description: "The key to releasing stress and taking control of trauma. TRE® sessions in Bryanston, Johannesburg with Sam.",
    url: "https://trebryanston.com",
    siteName: "TRE Bryanston",
    locale: "en_ZA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TRE Bryanston | Trauma Release Exercises",
    description: "The key to releasing stress and taking control of trauma. TRE® sessions in Bryanston, Johannesburg.",
  },
  alternates: {
    canonical: "https://trebryanston.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="font-sans antialiased">
        <Nav />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
