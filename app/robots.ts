import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
<<<<<<< HEAD
    sitemap: "https://www.4byte-peru.com/sitemap.xml",
=======
    sitemap: "https://4byte-solutions.com/sitemap.xml",
>>>>>>> f6103e0 (feat agregar init)
  };
}