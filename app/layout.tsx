import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/nav";
import Footer from "@/components/footer";

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
  title: "TRE Bryanston | Trauma Release Exercises",
  description:
    "The key to releasing stress and taking control of trauma. TRE® sessions in Bryanston, Johannesburg with Sam.",
  keywords: ["TRE", "Trauma Release Exercises", "Bryanston", "Johannesburg", "stress relief", "PTSD", "body stress release"],
  openGraph: {
    title: "TRE Bryanston | Trauma Release Exercises",
    description: "The key to releasing stress and taking control of trauma.",
    url: "https://trebryanston.com",
    siteName: "TRE Bryanston",
    locale: "en_ZA",
    type: "website",
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
      </body>
    </html>
  );
}
