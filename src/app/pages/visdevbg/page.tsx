import Image from "next/image";

export default function VisDevBgPage() {
  return (
    <div className="flex flex-col gap-8 pt-8 px-8">
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
        <div className="flex flex-col justify-center">
          <p className="text-2xl text-center">
            Texte
          </p>
        </div>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
          <Image
            src="https://placehold.co/1920x1080/png"
            height={1080}
            width={1920}
            alt="Placeholder"
          />
          <Image
            src="https://placehold.co/1920x1080/png"
            height={1080}
            width={1920}
            alt="Placeholder"
          />
          <Image
            src="https://placehold.co/1920x1080/png"
            height={1080}
            width={1920}
            alt="Placeholder"
          />
          <Image
            src="https://placehold.co/1920x1080/png"
            height={1080}
            width={1920}
            alt="Placeholder"
          />
        </div>
      </div>
      <p className="text-2xl text-center">
        Texte.
      </p>
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <Image
          src="https://placehold.co/1920x1080/png"
          height={1080}
          width={1920}
          alt="Placeholder"
        />
        <Image
          src="https://placehold.co/1920x1080/png"
          height={1080}
          width={1920}
          alt="Placeholder"
        />
        <Image
          src="https://placehold.co/1920x1080/png"
          height={1080}
          width={1920}
          alt="Placeholder"
        />
        <Image
          src="https://placehold.co/1920x1080/png"
          height={1080}
          width={1920}
          alt="Placeholder"
        />
      </div>
    </div>
  );
}
