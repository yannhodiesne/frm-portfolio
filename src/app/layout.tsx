import type { Metadata } from "next";
import { Oswald, Mulish } from "next/font/google";
import "./globals.css";
import Banner from "@/components/banner/banner";

const headersFont = Oswald({
  subsets: ["latin"],
  variable: "--font-headers"
});

const bodyFont = Mulish({
  subsets: ["latin"],
  variable: "--font-body"
});

export const metadata: Metadata = {
  title: "Fanny Regeste Mistral",
  description: "Portfolio de Fanny Regeste Mistral (Storyboard, Illustration, Animation)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${headersFont.variable} ${bodyFont.variable}`}>
        <div className="2xl:container 2xl:mx-auto">
          {children}
        </div>
      </body>
    </html>
  );
}
