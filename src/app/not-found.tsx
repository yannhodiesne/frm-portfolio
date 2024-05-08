import PageLayout from "@/components/pageLayout/pageLayout";
import Image from "next/image";
import Link from "next/link";
import image from "./404.png";

export default function NotFoundPage() {
  return (
    <PageLayout>
      <Link href="/">
        <Image
          src={image}
          draggable={false}
          alt="404 : not found"
          className="max-h-[60vh] w-auto mx-auto"
        />
      </Link>
    </PageLayout>
  );
}
