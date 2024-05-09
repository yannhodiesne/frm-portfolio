import ClickableImage from "@/components/clickableImage/clickableImage";

import evaBg1 from "./backgrounds/EVA/1.jpg";
import evaBg2 from "./backgrounds/EVA/2.jpg";
import evaBg3 from "./backgrounds/EVA/3.jpg";
import evaBg4 from "./backgrounds/EVA/4.jpg";
import evaBg5 from "./backgrounds/EVA/5.jpg";
import evaBg6 from "./backgrounds/EVA/6.jpg";

import brVd1 from "./visdev/billierocks/1.jpg";
import brVd2 from "./visdev/billierocks/2.jpg";
import brVd3 from "./visdev/billierocks/3.jpg";
import brVd4 from "./visdev/billierocks/4.jpg";
import brVd5 from "./visdev/billierocks/5.jpg";
import brVd6 from "./visdev/billierocks/6.jpg";
import brVd7 from "./visdev/billierocks/7.jpg";
import brVd8 from "./visdev/billierocks/8.jpg";
import brVd9 from "./visdev/billierocks/9.jpg";
import brVd10 from "./visdev/billierocks/10.jpg";
import brVd11 from "./visdev/billierocks/11.jpg";
import brVd12 from "./visdev/billierocks/12.jpg";
import brVd13 from "./visdev/billierocks/13.jpg";
import brVd14 from "./visdev/billierocks/14.jpg";
import brVd15 from "./visdev/billierocks/15.jpg";

import tcVd1 from "./visdev/tchouk/1.jpg";
import tcVd2 from "./visdev/tchouk/2.jpg";
import tcVd3 from "./visdev/tchouk/3.jpg";
import tcVd4 from "./visdev/tchouk/4.jpg";
import tcVd5 from "./visdev/tchouk/5.jpg";

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
            <ClickableImage
              key={image.img.src}
              src={image.img}
              className={image.class}
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
            <ClickableImage
              key={image.img.src}
              src={image.img}
              className={image.class}
            />
        ))}
      </div>
      <p className="text-2xl text-center">
        Below you&apos;ll find a bunch of visuals I made during my internship at Caribara animation in Paris, 2019.<br />
        <br />
        These are visual development for the series &ldquo;Billie and the Rockets&rdquo; (an original project), and &ldquo;Chooks&rdquo;,<br />
        adapted from Kerascoët&apos;s comic.
      </p>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {[
          { img: brVd1, class: ""},
          { img: brVd2, class: ""},
          { img: brVd3, class: ""},
          { img: brVd4, class: ""},
          { img: brVd5, class: ""},
          { img: brVd6, class: ""},
          { img: brVd7, class: ""},
          { img: brVd8, class: ""},
          { img: brVd9, class: ""},
          { img: brVd10, class: ""},
          { img: brVd11, class: ""},
          { img: brVd12, class: ""},
          { img: brVd13, class: ""},
          { img: brVd15, class: "col-span-2"},
          { img: brVd14, class: "col-span-3"},
          { img: tcVd1, class: ""},
          { img: tcVd2, class: ""},
          { img: tcVd3, class: ""},
          { img: tcVd4, class: ""},
          { img: tcVd5, class: ""},
        ].map(image => (
          <ClickableImage
            key={image.img.src}
            src={image.img}
            className={image.class}
          />
        ))}
      </div>
    </div>
  );
}
