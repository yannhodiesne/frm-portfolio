import Image from "next/image";
import logo from "./logo.png";

export default function Logo({
  className
}: Readonly<{
  className: string | undefined
}>) {
  return (
    <Image
      src={logo}
      alt="Fanny Regeste Mistral"
      className={className}
      priority
    />
  );
}
