import "./banner.css";

export default function Banner({
  vertical
}: Readonly<{
  vertical?: boolean | undefined
}>) {
  const hoverAnimation = "transform transition duration-250 hover:scale-125";

  const classes = vertical
    ? "flex-col py-8"
    : "flex-row px-8";

  return (
    <div className={`text-2xl text-[#310404] flex gap-8 ${classes}`}>
      <a className={hoverAnimation} href="#" target="_blank" title="Twitter">
        <i className="w-12 h-12 fi fi-brands-twitter"></i>
      </a>
      <a className={hoverAnimation} href="#" target="_blank" title="LinkedIn">
        <i className="fi fi-brands-linkedin"></i>
      </a>
      <a className={hoverAnimation} href="#" target="_blank" title="Vimeo">
        <i className="fi fi-brands-vimeo"></i>
      </a>
      <a className={hoverAnimation} href="#" target="_blank" title="YouTube">
        <i className="fi fi-brands-youtube"></i>
      </a>
      <a className={hoverAnimation} href="#" target="_blank" title="Email">
        <i className="fi fi-sr-envelope"></i>
      </a>
    </div>
  );
}
