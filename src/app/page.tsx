import Logo from "@/components/logo/logo";
import Banner from "@/components/banner/banner";
import Image from "next/image";
import Link from "next/link";
import background from "./background.webp";

export default function Home() {
  const menuHoverAnimation = "transform transition duration-250 hover:scale-[1.17] hover:text-[#8F040B]";

  return (
    <div className="flex flex-col md:flex-row gap-4 p-8 justify-center items-center min-h-screen">
      <aside>
        <Banner className="flex-row px-8 justify-center md:flex-col md:px-0 md:py-8" />
      </aside>
      <main>
        <div className="mx-auto">
          <div className="relative">
            <Image
              src={background}
              alt="Animated silly walk"
              className="opacity-60 max-h-[80svh] w-auto mx-auto"
              draggable={false}
              unoptimized
              priority
            />
            <div className="absolute bottom-0 w-full h-1/2">
              <Logo
                className="w-auto h-full mx-auto"
              />
            </div>
          </div>

          <nav className="mx-auto w-auto pt-6 grid md:grid-flow-col md:auto-cols-fr md:gap-16 gap-12 text-4xl md:text-5xl lg:text-6xl justify-items-center">
            <h1 className={menuHoverAnimation}>
              <Link href="/pages/storyboard">DEMOREEL</Link>
            </h1>
            <h1 className={menuHoverAnimation}>
              <Link href="/gallery">GALLERY</Link>
            </h1>
            <h1 className={menuHoverAnimation}>
              <Link href="/pages/about">ABOUT</Link>
            </h1>
          </nav>

          <footer className="mx-auto w-fit pt-6">
            Made by Yann Hodiesne. © {new Date().getFullYear()} Fanny Regeste Mistral. All rights reserved.
          </footer>
        </div>
      </main>
    </div>
  );
}
