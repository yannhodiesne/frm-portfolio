import Image from "next/image";

export default function StoryboardPage() {
  return (
    <div className="flex flex-col gap-8">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div className="flex justify-center">
          <p className="my-auto text-center">
            <span className="text-2xl">
              Shoot me an email/dm me on LinkedIn if you want to see <br />
              my top secret demoreel !<br />
              <br />
              It includes my work on theses series :<br />
            </span>
            &ldquo;Oggy Oggy&rdquo; (Xilam animation)<br />
            &ldquo;Billy le hamster cowboy&rdquo; (Dandeloo)<br />
            &ldquo;Zig & Sharko&rdquo; (Xilam animation)<br />
            &ldquo;Potobot&rdquo; (Xilam animation)<br />
          </p>
        </div>
        <Image
          src="https://placehold.co/1920x1080/png"
          alt="Demo reel"
          height={1080}
          width={1920}
        />
      </div>
      <div className="grid grid-flow-row gap-8 md:grid-flow-col md:auto-cols-fr">
        <Image
          src="https://placehold.co/1920x1080/png"
          alt="Placeholder"
          height={1080}
          width={1920}
          className="md:h-52 w-auto"
        />
        <Image
          src="https://placehold.co/1920x1080/png"
          alt="Placeholder"
          height={1080}
          width={1920}
          className="md:h-52 w-auto"
        />
        <Image
          src="https://placehold.co/1920x1080/png"
          alt="Placeholder"
          height={1080}
          width={1920}
          className="md:h-52 w-auto"
        />
        <Image
          src="https://placehold.co/1920x1080/png"
          alt="Placeholder"
          height={1080}
          width={1920}
          className="md:h-52 w-auto"
        />
      </div>
    </div>
  );
}
