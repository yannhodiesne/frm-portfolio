import Logo from "@/components/logo/logo";
import Image from "next/image";
import background from "./background.webp";

export default function Home() {
  const menuHoverAnimation = "transform transition duration-250 hover:scale-[1.17] hover:text-[#8F040B]";

  return (
    <div className="mx-auto my-auto">
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

      <div className="mx-auto w-auto pt-6 grid md:grid-flow-col md:auto-cols-fr md:gap-16 gap-12 text-4xl md:text-5xl lg:text-6xl justify-items-center">
        <h1 className={menuHoverAnimation}>
          <a href="">DEMOREEL</a>
        </h1>
        <h1 className={menuHoverAnimation}>
          <a href="">GALLERY</a>
        </h1>
        <h1 className={menuHoverAnimation}>
          <a href="">ABOUT</a>
        </h1>
      </div>
    </div>
  );
}
