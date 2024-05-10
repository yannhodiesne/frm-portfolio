import { MetadataRoute } from "next"

const base = "https://www.fannyregestemistral.fr/";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: base,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${base}/gallery`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${base}/pages/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${base}/pages/perso`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${base}/pages/shortmovie`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${base}/pages/storyboard`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${base}/pages/visdevbg`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ]
}
