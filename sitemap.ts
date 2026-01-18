import { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "about", "contact", "portfolio", "blog"];
  const baseUrl = "https://shifana.vercel.app/";
  return routes?.map((route) => {
    return {
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
    };
  });
}
