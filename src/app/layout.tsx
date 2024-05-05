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
          <div className="flex flex-col md:flex-row gap-4 p-8">
            <aside>
              <Banner className="flex-row px-8 justify-center md:flex-col md:px-0 md:py-8" />
            </aside>
            <main role="main" className="grow">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
