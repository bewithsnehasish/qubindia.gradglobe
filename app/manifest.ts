import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Queen's University Belfast - GIFT City",
    short_name: "QUB GIFT City",
    description:
      "Apply for Master's programs at Queen's University Belfast, GIFT City Campus.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#D6000D",
    icons: [
      {
        src: "/icon.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
