import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import personalWork from "./personalwork.jpg";
import shortMovie from "./shortmovie.jpg";
import storyboard from "./storyboard.jpg";
import visdevBg from "./visdev_bg.jpg";
import PageLayout from "@/components/pageLayout/pageLayout";

function GalleryButton({
  children,
  path,
  image,
  objectClass
}: Readonly<{
  children: string,
  path: string,
  image: StaticImageData,
  objectClass?: string | undefined
}>) {
  return (
    <Link
      href={path}
      className="aspect-video relative group"
    >
      <h1 className={`
        absolute top-1/2 left-1/2
        text-center uppercase
        -translate-x-1/2 -translate-y-1/2
        text-white text-lg md:text-xl lg:text-2xl
        lg:invisible z-10 group-hover:visible
        transition-[visibility] duration-100
      `}>
        {children}
      </h1>
      <Image
        src={image}
        alt={children}
        draggable={false}
        className={`
          h-full transition duration-300 object-cover brightness-50 lg:brightness-100 group-hover:brightness-50
          ${objectClass ?? "object-center"}`}
      />
    </Link>
  );
}

export default function GalleryPage() {
  return (
    <PageLayout backLink="/">
      <div className="w-2/3 mx-auto grid grid-cols-1 gap-4 md:grid-cols-2">
        <GalleryButton path="/pages/storyboard" image={storyboard}>
          Storyboard
        </GalleryButton>
        <GalleryButton path="/pages/visdevbg" image={visdevBg}>
          Visual development / background
        </GalleryButton>
        <GalleryButton path="/pages/shortmovie" image={shortMovie}>
          Short movie: The origin of world and men
        </GalleryButton>
        <GalleryButton path="/pages/perso" image={personalWork} objectClass="object-[50%_10%]">
          Personal work
        </GalleryButton>
      </div>
    </PageLayout>
  );
}
