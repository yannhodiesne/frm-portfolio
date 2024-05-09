import ClickableImage from "@/components/clickableImage/clickableImage";

import tootwam2 from "./tootwam/2.jpg";
import tootwam3 from "./tootwam/3.jpg";
import tootwam4 from "./tootwam/4.jpg";
import tootwam5 from "./tootwam/5.jpg";
import tootwam6 from "./tootwam/6.jpg";
import tootwam7 from "./tootwam/7.jpg";
import tootwam8 from "./tootwam/8.jpg";
import tootwam9 from "./tootwam/9.jpg";
import tootwam10 from "./tootwam/10.jpg";
import tootwam11 from "./tootwam/11.jpg";
import tootwam12 from "./tootwam/12.jpg";
import tootwam13 from "./tootwam/13.jpg";
import tootwam14 from "./tootwam/14.jpg";
import tootwam15 from "./tootwam/15.jpg";
import tootwam16 from "./tootwam/16.jpg";
import tootwam17 from "./tootwam/17.jpg";
import tootwam19 from "./tootwam/19.jpg";
import tootwam20 from "./tootwam/20.jpg";
import tootwam21 from "./tootwam/21.jpg";
import tootwam22 from "./tootwam/22.jpg";
import tootwam23 from "./tootwam/23.jpg";
import tootwam24 from "./tootwam/24.jpg";
import tootwam25 from "./tootwam/25.jpg";

export default function ShortMoviePage() {
  return (
    <div className="gap-8 flex flex-col">
      <h1 className="text-2xl uppercase text-center">
        Short Movie Animation: The Origin of World and Men
      </h1>
      <div className="relative aspect-[16/9]">
        <iframe
          src="https://player.vimeo.com/video/392172838?h=e5eb79b8ce"
          className="absolute top-0 left-0 w-full h-full border-0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen>
        </iframe>
      </div>
      <div className="flex flex-col gap-4 text-justify w-1/2 mx-auto">
        <p className="text-xl indent-8">
          A long time ago, when nothing existed yet, three spirits decide to have a competition to determine which one of them is the strongest, and therefore deserves to be king.
        </p>
        <p className="text-xl italic">
          Produced during my formation at Emile Cohl&apos;s art school (Lyon, France). Production went from june 2018 to june 2019.
        </p>
      </div>
      <div className="gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
        {[
          { img: tootwam9, class: ""},
          { img: tootwam5, class: ""},
          { img: tootwam4, class: ""},
          { img: tootwam3, class: ""},
          { img: tootwam21, class: ""},
          { img: tootwam22, class: ""},
          { img: tootwam24, class: ""},
          { img: tootwam25, class: ""},
          { img: tootwam23, class: ""},
          { img: tootwam17, class: ""},
          { img: tootwam16, class: ""},
          { img: tootwam11, class: ""},
          { img: tootwam15, class: ""},
          { img: tootwam14, class: ""},
          { img: tootwam10, class: ""},
          { img: tootwam13, class: ""},
          { img: tootwam2, class: ""},
          { img: tootwam6, class: ""},
          { img: tootwam7, class: ""},
          { img: tootwam8, class: ""},
        ].map(image => (
          <ClickableImage
            key={image.img.src}
            src={image.img}
            className={image.class}
          />
        ))}
      </div>
      <div className="gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {[
          { img: tootwam12, class: ""},
          { img: tootwam19, class: ""},
          { img: tootwam20, class: ""},
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
