import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import personalWork from "./personalwork.jpg";
import shortMovie from "./shortmovie.jpg";
import storyboard from "./storyboard.jpg";
import visdevBg from "./visdev_bg.jpg";

function GalleryButton({
  children,
  path,
  image,
  className
}: Readonly<{
  children: string,
  path: string,
  image: StaticImageData,
  className?: string | undefined
}>) {
  return (
    <Link
      href={path}
      className="aspect-[16/9] relative group"
    >
      <h1 className={`
        absolute top-1/2 left-1/2
        text-center uppercase
        -translate-x-1/2 -translate-y-1/2
        text-white text-2xl
        invisible z-10 group-hover:visible
        transition-[visibility] duration-100
      `}>
        {children}
      </h1>
      <Image
        src={image}
        alt={children}
        draggable={false}
        className={`
          h-full transition duration-300 object-cover object-center group-hover:brightness-50
          ${className ?? ""}`}
      />
    </Link>
  );
}

export default function GalleryPage() {
  return (
    <div className="w-2/3 mx-auto grid grid-cols-1 gap-4 md:grid-cols-2">
      <GalleryButton path="/pages/wip" image={storyboard}>
        Storyboard
      </GalleryButton>
      <GalleryButton path="/pages/wip" image={visdevBg}>
        Visual development / background
      </GalleryButton>
      <GalleryButton path="/pages/wip" image={shortMovie}>
        Short movie: The origin of world and men
      </GalleryButton>
      <GalleryButton path="/pages/wip" image={personalWork} className="object-[50%_10%]">
        Personal work
      </GalleryButton>
    </div>
  );
}
