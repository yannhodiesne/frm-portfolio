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
      <main className="flex flex-col justify-center grow xl:grow-0 min-h-[50vh] py-8">
        {children}
      </main>
      <footer><Banner className="justify-center pb-4 pt-2" /></footer>
    </div>
  );
}
