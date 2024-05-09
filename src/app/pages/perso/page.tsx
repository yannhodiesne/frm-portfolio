import ClickableImage from "@/components/clickableImage/clickableImage";

import arles1 from "./arlesiennes/1.jpg";
import arles2 from "./arlesiennes/2.jpg";
import arles3 from "./arlesiennes/3.jpg";
import arles4 from "./arlesiennes/4.jpg";
import arles5 from "./arlesiennes/5.jpg";

import dnd1 from "./dnd/1.jpg";
import dnd2 from "./dnd/2.jpg";
import dnd3 from "./dnd/3.jpg";
import dnd4 from "./dnd/4.jpg";
import dnd5 from "./dnd/5.jpg";
import dnd6 from "./dnd/6.jpg";
import dnd7 from "./dnd/7.jpg";
import dnd8 from "./dnd/8.jpg";
import dnd9 from "./dnd/9.jpg";
import dnd10 from "./dnd/10.jpg";
import dnd11 from "./dnd/11.jpg";
import dnd12 from "./dnd/12.jpg";
import dnd13 from "./dnd/13.jpg";
import dnd14 from "./dnd/14.jpg";
import dnd15 from "./dnd/15.jpg";
import dnd16 from "./dnd/16.jpg";
import dnd17 from "./dnd/17.jpg";

import others1 from "./others/1.jpg";
import others2 from "./others/2.jpg";
import others3 from "./others/3.jpg";
import others5 from "./others/5.jpg";
import others6 from "./others/6.jpg";
import others7 from "./others/7.jpg";
import others8 from "./others/8.jpg";
import others9 from "./others/9.jpg";

import tcopb1 from "./tcopb/1.jpg";
import tcopb2 from "./tcopb/2.jpg";
import tcopb3 from "./tcopb/3.jpg";
import tcopb4 from "./tcopb/4.jpg";
import tcopb5 from "./tcopb/5.jpg";
import tcopb6 from "./tcopb/6.jpg";
import tcopb7 from "./tcopb/7.jpg";
import tcopb8 from "./tcopb/8.jpg";
import tcopb9 from "./tcopb/9.jpg";
import tcopb10 from "./tcopb/10.jpg";
import tcopb11 from "./tcopb/11.jpg";
import tcopb12 from "./tcopb/12.jpg";
import tcopb13 from "./tcopb/13.jpg";
import tcopb14 from "./tcopb/14.jpg";
import tcopb15 from "./tcopb/15.jpg";
import tcopb16 from "./tcopb/16.jpg";
import tcopb17 from "./tcopb/17.jpg";

export default function PersonalWorkPage() {
  return (
    <div className="flex flex-col gap-8">
      <p className="text-3xl text-center">
        On this page you&apos;ll find various work on personal projects, such as webcomics, illustrations and other shenanigans.
      </p>
      <p className="text-xl pt-16">
        I was born in Arles in the south of France. These are arlesian girls, wearing the traditional costume.
      </p>
      <div className="gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
        {[
          { img: arles2, class: "col-span-full lg:col-span-2"},
          { img: arles1, class: "lg:order-first"},
          { img: arles3, class: ""},
          { img: arles4, class: "2xl:col-start-2"},
          { img: arles5, class: ""},
        ].map(image => (
          <ClickableImage
            key={image.img.src}
            src={image.img}
            className={image.class}
          />
        ))}
      </div>
      <p className="text-xl pt-16">
        Obsessed with D&D (especially Baldur&apos;s Gate 3), here are several posings of a Tiefling.<br />
        I also made my friends take a &ldquo;Which D&D character are you?&rdquo; test and I drew them based on their answers!
      </p>
      <div className="gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
        {[
          { img: dnd1, class: "col-span-full 2xl:col-span-2 2xl:col-start-2"},
          { img: dnd2, class: "col-span-full 2xl:col-start-1"},
          { img: dnd5, class: "mb-0"},
          { img: dnd3, class: "mb-0"},
          { img: dnd10, class: "mb-0"},
          { img: dnd14, class: "mb-0"},
          { img: dnd11, class: "mb-0"},
          { img: dnd8, class: "mb-0"},
          { img: dnd9, class: "mb-0"},
          { img: dnd13, class: "mb-0"},
          { img: dnd16, class: "mb-0"},
          { img: dnd17, class: "mb-0"},
          { img: dnd12, class: "mb-0"},
          { img: dnd7, class: "mb-0"},
          { img: dnd15, class: "mb-0"},
          { img: dnd4, class: "mb-0"},
          { img: dnd6, class: "mb-0"},
        ].map(image => (
          <ClickableImage
            key={image.img.src}
            src={image.img}
            className={image.class}
          />
        ))}
      </div>
      <p className="text-xl pt-16">
        The Curse Of Pirate&apos;s Bay is a webcomic I started to publish in June, 2021. <br />
        It&apos;s a story about Eva, a young girl, who accidentally finds herself stuck on a pirate boat. <br />
        She has to hide who she really is to survive, in the hopes of coming back home someday.<br />
        &gt;&gt; <a className="text-blue-500 underline" draggable={false} href="https://www.webtoons.com/en/canvas/the-curse-of-pirates-bay/list?title_no=383228" target="_blank">You can read it here!</a> &lt;&lt;
      </p>
      <div className="gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
        {[
          { img: tcopb7, class: "col-span-full 2xl:col-span-2"},
          { img: tcopb8, class: ""},
          { img: tcopb9, class: ""},
          { img: tcopb17, class: "col-span-full 2xl:col-span-2"},
          { img: tcopb16, class: "col-span-full 2xl:col-span-2"},
          { img: tcopb4, class: "col-span-full 2xl:col-span-2"},
          { img: tcopb5, class: "col-span-full 2xl:col-span-2"},
          { img: tcopb3, class: ""},
          { img: tcopb2, class: ""},
          { img: tcopb6, class: ""},
          { img: tcopb1, class: ""},
          { img: tcopb10, class: ""},
          { img: tcopb11, class: ""},
          { img: tcopb12, class: ""},
          { img: tcopb13, class: ""},
          { img: tcopb14, class: "2xl:col-span-2"},
          { img: tcopb15, class: "2xl:col-span-2"},
        ].map(image => (
          <ClickableImage
            key={image.img.src}
            src={image.img}
            className={image.class}
          />
        ))}
      </div>
      <p className="text-xl pt-16">
        Those are participations to the Character Design Challenge, and fanarts.
      </p>
      <div className="gap-4 grid grid-cols-1 lg:grid-cols-3">
        {[
          { img: others2, class: ""},
          { img: others1, class: ""},
          { img: others6, class: ""},
        ].map(image => (
          <ClickableImage
            key={image.img.src}
            src={image.img}
            className={image.class}
          />
        ))}
      </div>
      <div className="gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
        {[
          { img: others7, class: ""},
          { img: others8, class: "2xl:col-span-2"},
          { img: others9, class: ""},
          { img: others3, class: "xl:col-span-2 2xl:col-span-3"},
          { img: others5, class: ""},
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
