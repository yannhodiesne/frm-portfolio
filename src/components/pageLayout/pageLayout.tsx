import Link from "next/link";
import Logo from "../logo/logo";
import Banner from "../banner/banner";

export default function PageLayout({
  children,
  padding,
  backLink
}: Readonly<{
  children: React.ReactNode,
  padding?: number | undefined,
  backLink?: string | undefined
}>) {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="h-36 grid grid-cols-[auto_1fr] md:grid-cols-3">
        <div id="back" className="justify-self-start pl-4 md:pl-16 flex items-center text-gray-500">
          <Link href={backLink ? backLink : "/gallery"}>
            &#706; Back
          </Link>
        </div>
        <Link href="/">
          <Logo className="h-36 w-auto mx-auto" />
        </Link>
      </header>
      <main className={`
        2xl:container 2xl:mx-auto flex flex-col justify-center grow min-h-[50vh]
        pt-4 ${padding ? `px-${padding}` : "px-8"}
      `}>
        {children}
      </main>
      <footer>
        <Banner className="justify-center py-8" />
      </footer>
    </div>
  );
}
