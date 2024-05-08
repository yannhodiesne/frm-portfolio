import Link from "next/link";
import Logo from "../logo/logo";
import Banner from "../banner/banner";

export default function PageLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="h-36">
        <Link href="/">
          <Logo className="h-full w-auto mx-auto" />
        </Link>
      </header>
      <main className="2xl:container 2xl:mx-auto flex flex-col justify-center grow min-h-[50vh] px-8">
        {children}
      </main>
      <footer className="bg-[rgb(var(--background-rgb))]">
        <Banner className="justify-center py-8" />
      </footer>
    </div>
  );
}
