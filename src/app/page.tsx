import Logo from "@/components/logo/logo";
import Image from "next/image";
import background from "./background.webp";

export default function Home() {
  return (
    <div className="mx-auto my-auto">
      <div className="relative">
        <Image
          src={background}
          alt="Animated silly walk"
          className="opacity-60 max-h-[80vh] w-auto mx-auto"
          unoptimized
          priority
        />
        <div className="absolute bottom-0 w-full h-1/2 mx-auto">
          <Logo
            className="w-auto h-full mx-auto"
          />
        </div>
      </div>

      <div className="mx-auto w-auto pt-6 grid md:grid-flow-col md:auto-cols-auto md:gap-16 gap-12 text-4xl md:text-5xl lg:text-6xl justify-items-center">
        <h1>DEMOREEL</h1>
        <h1>GALLERY</h1>
        <h1>ABOUT</h1>
      </div>
    </div>
  );
}
