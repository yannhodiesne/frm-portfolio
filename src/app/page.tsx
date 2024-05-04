import Logo from "@/components/logo/logo";
import Image from "next/image";
import background from "./background.webp";

export default function Home() {
  return (
    <div className="flex flex-col">
      <div className="grow relative">
        <Image
          src={background}
          alt="Animated silly walk"
          className="opacity-60 mx-auto my-auto"
          unoptimized
          priority
        />
        <div className="absolute bottom-0 w-full h-1/2 mx-auto">
          <Logo
            className="w-auto h-full mx-auto"
          />
        </div>
      </div>
      <div className="bg-red-100">
        Menu
      </div>
    </div>
  );
}
