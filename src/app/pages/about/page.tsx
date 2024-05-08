import Image from "next/image";
import Link from "next/link";
import foni from "./foni.png";
import BackgroundColor from "@/components/backgroundColor/backgroundColor";

export default function AboutPage() {
  return (
    <div className="px-8">
      <BackgroundColor color="#9F675A" />
      <Image
        src={foni}
        alt="Fanny Regeste Mistral"
        className="-z-10 invisible 2xl:visible absolute h-1/2 w-auto top-1/3 right-0 absolute"
      />
      <p className="2xl:w-4/5 text-justify text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl ">
        Hi !<br />
        I am Fanny, an artist from Lyon, France.<br />
        <br />
        I mostly work as a storyboard artist on kids shows, for several studios (Xilam Animation, Dandeloo, Je Suis Bien Content...).<br />
        <br />
        When I have time, I work on various personal projects and stories, such as short comics or illustrations.<br />
        <br />
        Shoot me an email/dm me on LinkedIn if you want to get in contact!<br />
        <Link href="mailto:f.regestemistral@hotmail.com">
          f.regestemistral@hotmail.com
        </Link>
      </p>
    </div>
  );
}
