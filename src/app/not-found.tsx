import PageLayout from "@/components/pageLayout/pageLayout";
import Image from "next/image";

export default function NotFoundPage() {
  return (
    <PageLayout>
      <Image
          src="https://placehold.co/1920x1080/png"
          height={1080}
          width={1920}
          draggable={false}
          alt="404 : not found"
          className="max-h-[60vh] w-auto mx-auto"
        />
    </PageLayout>
  );
}
