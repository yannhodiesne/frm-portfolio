import Banner from "@/components/banner/banner";
import Logo from "@/components/logo/logo";
import Link from "next/link";

export default function PagesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col min-h-screen">
      <header>
        <Link href="/">
          <Logo className="w-auto h-36 mx-auto" />
        </Link>
      </header>
      <main className="grow min-h-48">{children}</main>
      <footer><Banner className="justify-center pb-4 pt-2" /></footer>
    </div>
  );
}
