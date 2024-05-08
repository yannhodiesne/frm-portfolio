import Image from "next/image";
import evaBg1 from "./backgrounds/EVA/1.jpg";
import evaBg2 from "./backgrounds/EVA/2.jpg";
import evaBg3 from "./backgrounds/EVA/3.jpg";
import evaBg4 from "./backgrounds/EVA/4.jpg";
import evaBg5 from "./backgrounds/EVA/5.jpg";
import evaBg6 from "./backgrounds/EVA/6.jpg";

export default function VisDevBgPage() {
  return (
    <div className="flex flex-col gap-8 pt-8 md:pt-0 px-8">
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 md:grid-cols-[33%_1fr]">
        <div className="flex flex-col justify-center">
          <p className="text-2xl text-center">
            On the opposite you&apos;ll find backgrounds <br className="hidden 2xl:block" />
            I made for the french serie &ldquo;Jésus, les traits d’une parole&rdquo; which is an adaptation <br className="hidden 2xl:block" />
            of Serge Bloch graphic novel telling about the life of Jesus Christ.<br />
            <br />
            Making the backgrounds was less <br className="hidden 2xl:block" />
            about drawing than to paste textures <br className="hidden 2xl:block" />
            and elements, and make a nice composition out of it.<br />
            <br />
            I worked straight from the animatic, <br className="hidden 2xl:block" />
            there weren&apos;t layouts.<br />
            <br />
            It was quite an interesting experience <br className="hidden 2xl:block" />
            for me because I never worked <br className="hidden 2xl:block" />
            on my backgrounds with this technique.
          </p>
        </div>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
          {[
            { img: evaBg3, class: "col-span-2"},
            { img: evaBg4, class: ""},
            { img: evaBg6, class: ""},
          ].map(image => (
            <Image
              key={image.img.src}
              src={image.img}
              alt=""
              draggable={false}
              className={`h-auto w-full object-center ${image.class}`}
            />
          ))}
        </div>
      </div>
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
        {[
            { img: evaBg1, class: "col-span-2"},
            { img: evaBg5, class: ""},
            { img: evaBg2, class: ""},
          ].map(image => (
          <Image
            key={image.img.src}
            src={image.img}
            alt=""
            draggable={false}
            className={`h-auto w-full object-cover object-center ${image.class}`}
          />
        ))}
      </div>
      <p className="text-2xl text-center">
        Below you&apos;ll find a bunch of visuals I made during my internship at Caribara animation in Paris, 2019.<br />
        <br />
        These are visual development for the series &ldquo;Billie and the Rockets&rdquo; (an original project), and &ldquo;Chooks&rdquo;,<br />
        adapted from Kerascoët&apos;s comic.
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
