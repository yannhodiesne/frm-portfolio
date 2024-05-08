import Image from "next/image";
import wip from "./wip.png";
import Link from "next/link";

export default function WorkInProgressPage() {
  return (
    <Link href="/">
      <Image
        src={wip}
        alt="Work in progress!"
        draggable={false}
        className="max-h-[60vh] w-auto mx-auto"
      />
    </Link>
  );
}
