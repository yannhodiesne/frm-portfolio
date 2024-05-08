import Banner from "@/components/banner/banner";
import Logo from "@/components/logo/logo";
import Link from "next/link";
import Image from "next/image";

export default function NotFoundPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header>
        <Link href="/">
          <Logo className="w-auto h-36 mx-auto" />
        </Link>
      </header>
      <main className="grow xl:grow-0 min-h-48">
        <Image
          src="https://placehold.co/1920x1080/png"
          height={1080}
          width={1920}
          draggable={false}
          alt="404 : not found"
          className="max-h-[60vh] w-auto mx-auto my-8"
        />
      </main>
      <footer><Banner className="justify-center pb-4 pt-2" /></footer>
    </div>
  );
}
