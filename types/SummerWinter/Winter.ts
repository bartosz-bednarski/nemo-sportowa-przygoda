export type detailsBoxComponentType = {
  promo: boolean;
  label: "MIEJSCE" | "TERMIN" | "CENA" | "WIEK";
  content: string;
  promoPrice?: string;
  promoInfo?: string;
};
export type polkoloniaType = {
  title: string;
  hero: heroComponentType;
  details: detailsComponentType;
  localization: localizationComponentType;
  schedule: scheduleComponentType;
  food: foodComponentType;
  priceDetails: priceDetailsComponentType;
};
export type heroComponentType = {
  pc: string;
  mobile: string;
};
export type foodComponentType = {
  foodAbout: string[];
};
export type localizationComponentType = {
  localizationDescription: string[];
};
export type priceDetailsComponentType = {
  priceDetailsList: string[];
};
export type detailsComponentType = {
  location: string;
  fullLocationName: string;
  dateRange: string;
  ageRange: string;
  price: string;
  promotion: boolean;
  promotionPrice?: string;
  promotionInfo?: string;
  aboutTitle: string;
  aboutDescription: string;
};
export type scheduleComponentType = {
  scheduleAbout: string;
  scheduleList: { title: string; text: string }[];
};
