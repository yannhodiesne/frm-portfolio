import "./banner.css";

export default function Banner({
  className
}: Readonly<{
  className?: string | undefined
}>) {
  const hoverAnimation = "transform transition duration-250 hover:scale-125";

  return (
    <div className={`text-2xl flex gap-8 ${className}`}>
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
