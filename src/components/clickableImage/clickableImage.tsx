'use client';

import useKeypress from "@/utils/useKeypress/useKeypress";
import Image, { StaticImageData } from "next/image";
import { useCallback, useState } from "react";

export type ClickableImageProps = {
  src: StaticImageData,
  className?: string
}

export default function ClickableImage({
  src,
  className
}: Readonly<ClickableImageProps>) {
  const [isOpen, setIsOpen] = useState(false);

  const open = useCallback(() => {
    setIsOpen(true);
  }, []);

  const close = useCallback(() => {
    setIsOpen(false);
  }, []);

  useKeypress('Escape', close);

  return (
    <>
      <div className={`my-auto ${className}`}>
        <Image
          src={src}
          alt=""
          className="h-auto w-full cursor-pointer"
          draggable={false}
          onClick={open}
        />
      </div>
      {isOpen && (
        <div onClick={close} className={`
          fixed top-0 left-0 w-full h-full
          flex justify-center items-center
          bg-black/50 z-50
        `}>
          <style global jsx>{`
            body {
              overflow: hidden;
            }
          `}</style>
          <Image
            src={src}
            alt=""
            className="h-auto w-auto max-w-[90vw] max-h-[90vh] cursor-pointer"
            draggable={false}
            onClick={close}
          />
        </div>
      )}
    </>
  );
}
