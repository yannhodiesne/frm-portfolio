import Image from "next/image";
import wip from "./wip.png";

export default function WorkInProgressPage() {
  return (
    <Image
      src={wip}
      alt="Work in progress!"
      draggable={false}
      className="max-h-[60vh] w-auto mx-auto"
    />
  );
}
