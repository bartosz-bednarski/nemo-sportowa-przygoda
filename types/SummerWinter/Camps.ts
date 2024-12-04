import { contactComponentType, detailsComponentType } from "./Winter";

export type campTypeCover = {
  active: boolean;
  title: string;
  price: string;
  localization: string;
  date: string;
  coverImage: string;
  href: string;
};
export type campsCoversType = campTypeCover[];
export type detailsBoxCampComponentType = {
  promo: boolean;
  label: "MIEJSCE" | "TERMIN" | "CENA" | "WIEK" | "ZBIÓRKA";
  content: string;
  promoPrice?: string;
  promoInfo?: string;
};
export type obozType = {
  title: string;
  hero: heroCampComponentType;
  details: detailsComponentType;
  contactNemo: contactComponentType;
  contactCollab?: contactComponentType;
  whatsWaiting4You: whatsWaiting4YouComponentType;
  accommodation: accommodationCampComponentType;
  surroundings: surroundingsCampComponentType;
  hillSides: hillSidesCampComponentType;
  schedule: scheduleCampComponentType;
  food: foodCampComponentType;
  priceDetails: priceDetailsCampComponentType;
};
export type weekendNaStokuType = {
  title: string;
  hero: heroCampComponentType;
  details: detailsComponentType;
  contactNemo: contactComponentType;
  contactCollab?: contactComponentType;
  whatsWaiting4You: whatsWaiting4YouComponentType;
  hillSides: hillSidesCampComponentType;
  schedule: weekendNaStokuScheduleComponentType;
  priceDetails: priceDetailsCampComponentType;
};
export type weekendNaStokuScheduleComponentType = {
  title: string;
  list: {
    time: string;
    info: string;
    subList?: { title: string; about: string }[];
  }[];
};
export type hillSidesCampComponentType = {
  title1: string;
  title2: string;
  list: { title: string; image: string; listAbout: string[] }[];
};
export type heroCampComponentType = {
  pc: string;
  mobile: string;
};
export type foodCampComponentType = {
  foodAbout: string;
  foodList: string[];
};
export type accommodationCampComponentType = {
  about: string;
  list: string[];
  image: string;
  href: string;
};
export type surroundingsCampComponentType = {
  about: string;
  about2?: string;
  list?: {
    title: string;
    list: string[];
  };
};
export type priceDetailsCampComponentType = {
  priceDetailsList: string[];
};
export type whatsWaiting4YouComponentType = {
  list: string[];
  summary: string;
};

export type scheduleCampComponentType = {
  title: string;
  scheduleAbout: string;
  scheduleList: { title: string; text: string }[];
};
