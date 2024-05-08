import Script from "next/script";

export default function StoryboardPage() {
  return (
    <div className="flex flex-col gap-8">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 pt-8 md:pt-0">
        <div className="flex justify-center">
          <p className="my-auto text-center">
            <span className="text-2xl">
              Shoot me an email/dm me on LinkedIn if you want to see <br />
              my top secret demoreel !<br />
              <br />
              It includes my work on theses series :<br />
            </span>
            &ldquo;Oggy Oggy&rdquo; (Xilam animation)<br />
            &ldquo;Billy le hamster cowboy&rdquo; (Dandeloo)<br />
            &ldquo;Zig & Sharko&rdquo; (Xilam animation)<br />
            &ldquo;Potobot&rdquo; (Xilam animation)<br />
          </p>
        </div>
        <div className="relative aspect-[16/9]">
          <iframe
            src="https://player.vimeo.com/video/901255300?h=0752843f64"
            className="absolute top-0 left-0 w-full h-full border-0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen>
          </iframe>
        </div>
        <Script src="https://player.vimeo.com/api/player.js"></Script>
      </div>
      <p className="text-2xl">
        Below you&apos;ll find some personal work and projects.
      </p>
      <div className="grid grid-flow-row gap-8 md:grid-flow-col md:auto-cols-fr">
        {[
          "https://www.youtube-nocookie.com/embed/LajeXC2ahjw?si=1HZzAjcrw_Ek015v",
          "https://www.youtube-nocookie.com/embed/KKCoz-hnEnQ?si=Pu_FtpbP0NjvarZE",
          "https://www.youtube-nocookie.com/embed/a6CH9KwJP8M?si=KphZqZRAOtECunSW",
          "https://www.youtube-nocookie.com/embed/7QGnh8BMWrA?si=Gp7roDI_Fi9mxzC_"
        ].map(url => (
          <div key={url} className="relative aspect-[16/9]">
            <iframe
              src={url}
              className="absolute top-0 left-0 w-full h-full border-0"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen>
            </iframe>
          </div>
        ))}
      </div>
    </div>
  );
}
