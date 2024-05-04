import { MetadataRoute } from "next";
import { metadata } from "./layout";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: metadata.title?.toString(),
    description: metadata.description?.toString(),
    icons: [
      { src: "/favicon.ico", sizes: "any", type: "image/x-icon" }
    ]
  };
}
