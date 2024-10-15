import { campsCoversType, campTypeCover } from "@/types/SummerWinter/Camps";

export const BOBOWSKA_PRZYGODA: campTypeCover = {
  active: true,
  title: "BOBOWSKA PRZYGODA",
  cityStart: "KORZENNA",
  coverImage: "bobowska-przygoda-2.webp",
  href: "/galeria",
};
export const KREATYWNE_LABORATORIUM: campTypeCover = {
  active: true,
  title: "KREATYWNE LABORATORIUM",
  cityStart: "KRAKÓW",
  coverImage: "kreatywne-laboratorium.webp",
  href: "/galeria",
};
export const POLKOLONIE_LATO_COVERS: campsCoversType = [
  BOBOWSKA_PRZYGODA,
  KREATYWNE_LABORATORIUM,
  BOBOWSKA_PRZYGODA,
  KREATYWNE_LABORATORIUM,
  KREATYWNE_LABORATORIUM,
];
