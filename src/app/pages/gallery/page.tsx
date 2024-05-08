import Image from "next/image";
import Link from "next/link";

function GalleryButton({
  children,
  path,
  imageUrl
}: Readonly<{
  children: string,
  path: string,
  imageUrl: string
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
        src={imageUrl}
        height={1920}
        width={1080}
        alt={children}
        draggable={false}
        className="transition duration-300 object-cover object-center group-hover:brightness-50"
      />
    </Link>
  );
}

export default function GalleryPage() {
  return (
    <div className="w-2/3 mx-auto grid grid-cols-1 gap-4 md:grid-cols-2">
      <GalleryButton path="/pages/wip" imageUrl="https://placehold.co/1920x1080/png">
        Storyboard
      </GalleryButton>
      <GalleryButton path="/pages/wip" imageUrl="https://placehold.co/1920x1080/png">
        Vis dev/bg
      </GalleryButton>
      <GalleryButton path="/pages/wip" imageUrl="https://placehold.co/1920x1080/png">
        Short movie: The origin of world and men
      </GalleryButton>
      <GalleryButton path="/pages/wip" imageUrl="https://placehold.co/1920x1080/png">
        Personal work
      </GalleryButton>
    </div>
  );
}
