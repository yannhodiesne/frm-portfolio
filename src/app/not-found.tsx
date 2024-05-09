import PageLayout from "@/components/pageLayout/pageLayout";
import Image from "next/image";
import Link from "next/link";
import image from "./404.png";

export default function NotFoundPage() {
  return (
    <PageLayout padding={0}>
      <Link href="/">
        <Image
          src={image}
          draggable={false}
          alt="404 : not found"
          className={`
            min-h-[45vh] w-auto object-cover
            md:max-h-[60vh] md:mx-auto
          `}
        />
      </Link>
    </PageLayout>
  );
}
