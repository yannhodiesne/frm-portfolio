import type { Metadata } from "next";
import { Oswald, Mulish } from "next/font/google";
import "./globals.css";

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
        <div className="2xl:container 2xl:mx-auto bg-yellow-100">
          <div className="flex flex-row flex-wrap py-4">
            <aside className="w-full sm:w-1/3 md:w-1/4 px-2">
              <div className="sticky top-0 p-4 w-full">
                <ul className="flex flex-col overflow-hidden bg-blue-500">
                  Réseaux sociaux
                </ul>
              </div>
            </aside>
            <main role="main" className="h-screen w-full sm:w-2/3 md:w-3/4 pt-1 px-2">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
