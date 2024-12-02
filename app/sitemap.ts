import { GALLERY_MAIN } from "@/utils/Gallery/Gallery";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const gallery = GALLERY_MAIN.map((item) => ({
    url: `https://nemosportowaprzygoda.pl/galeria/${item.href}`,
  }));
  return [
    {
      url: "https://nemosportowaprzygoda.pl/",
    },
    {
      url: "https://nemosportowaprzygoda.pl/galeria",
    },
    {
      url: "https://nemosportowaprzygoda.pl/naukaplywania",
    },
    {
      url: "https://nemosportowaprzygoda.pl/naukaplywania/krakow",
    },
    {
      url: "https://nemosportowaprzygoda.pl/naukaplywania/korzenna",
    },
    {
      url: "https://nemosportowaprzygoda.pl/naukaplywania/gorlice",
    },
    {
      url: "https://nemosportowaprzygoda.pl/naukaplywania/krakow/eisenberga",
    },
    {
      url: "https://nemosportowaprzygoda.pl/naukaplywania/krakow/bronowianka",
    },
    {
      url: "https://nemosportowaprzygoda.pl/naukaplywania/krakow/plywaczek",
    },
    {
      url: "https://nemosportowaprzygoda.pl/naukaplywania/poradnikbasenowy",
    },
    {
      url: "https://nemosportowaprzygoda.pl/ofertaletnia",
    },
    {
      url: "https://nemosportowaprzygoda.pl/ofertazimowa",
    },
    {
      url: "https://nemosportowaprzygoda.pl/ofertazimowa/obozy/narciarskie/muszyna",
    },
    {
      url: "https://nemosportowaprzygoda.pl/ofertazimowa/polkolonie/aktywnazima/bobowa",
    },
    {
      url: "https://nemosportowaprzygoda.pl/ofertazimowa/polkolonie/aktywnazima/luzna",
    },
    {
      url: "https://nemosportowaprzygoda.pl/ofertazimowa/polkolonie/aktywnazima/korzenna",
    },
    {
      url: "https://nemosportowaprzygoda.pl/ofertazimowa/polkolonie/bialeszalenstwo/bobowa",
    },
    {
      url: "https://nemosportowaprzygoda.pl/ofertazimowa/polkolonie/bialeszalenstwo/korzenna",
    },
    {
      url: "https://nemosportowaprzygoda.pl/naszzespol",
    },
    {
      url: "https://nemosportowaprzygoda.pl/regulamin",
    },
    ...gallery,
  ];
}
