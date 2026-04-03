import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
<<<<<<< HEAD
      url: "https://www.4byte-peru.com",
=======
      url: "https://4byte-solutions.com",
>>>>>>> f6103e0 (feat agregar init)
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}