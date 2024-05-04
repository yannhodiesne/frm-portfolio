import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Image from "next/image";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={inter.className}>
        <Image
          src="/logo.png"
          alt="Fanny Regeste Mistral"
          width={100}
          height={100}
          priority
        />
        {children}
      </body>
    </html>
  );
}
