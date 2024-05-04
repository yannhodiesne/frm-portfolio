import Logo from "@/components/logo/logo";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative h-full">
      <Image
        src="/assets/home/background.webp"
        alt="Animated silly walk"
        fill
        sizes="100%"
        className="absolute top-0 left-0 object-contain opacity-60"
        priority
      />
      <div className="w-2/3 mx-auto">
        <Logo
          className="w-2/3 h-auto absolute bottom-0 mx-auto"
        />
      </div>
    </div>
  );
}
