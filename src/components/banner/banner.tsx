import "./banner.css";

export default function Banner({
  className
}: Readonly<{
  className?: string | undefined
}>) {
  const hoverAnimation = "transform transition duration-250 hover:scale-125 hover:text-[#8F040B]";

  return (
    <div className={`text-2xl flex gap-8 ${className}`}>
      <a className={hoverAnimation} href="https://twitter.com/MimosaFRM" target="_blank" title="Twitter">
        <i className="w-12 h-12 fi fi-brands-twitter"></i>
      </a>
      <a className={hoverAnimation} href="https://www.linkedin.com/in/fanny-regeste/" target="_blank" title="LinkedIn">
        <i className="fi fi-brands-linkedin"></i>
      </a>
      <a className={hoverAnimation} href="https://vimeo.com/user56630178" target="_blank" title="Vimeo">
        <i className="fi fi-brands-vimeo"></i>
      </a>
      <a className={hoverAnimation} href="https://www.youtube.com/channel/UCWHwmpa-9TS6wykRSbSzXtA" target="_blank" title="YouTube">
        <i className="fi fi-brands-youtube"></i>
      </a>
      <a className={hoverAnimation} href="mailto:f.regestemistral@hotmail.com" target="_blank" title="Email">
        <i className="fi fi-sr-envelope"></i>
      </a>
    </div>
  );
}
