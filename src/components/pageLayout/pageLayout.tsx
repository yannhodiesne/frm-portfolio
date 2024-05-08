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
      <header>
        <Link href="/">
          <Logo className="w-auto h-36 mx-auto" />
        </Link>
      </header>
      <main className="grow xl:grow-0 min-h-48 py-8">
        {children}
      </main>
      <footer><Banner className="justify-center pb-4 pt-2" /></footer>
    </div>
  );
}
