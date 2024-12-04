export type detailsBoxComponentType = {
  promo: boolean;
  label: "MIEJSCE" | "TERMIN" | "CENA" | "WIEK" | "ZBIÓRKA";
  content: string;
  promoPrice?: string;
  promoInfo?: string;
};

export type polkoloniaType = {
  title: string;
  hero: heroComponentType;
  details: detailsComponentType;
  contact: contactComponentType;
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
  foodAbout: string;
  foodList?: string[];
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
  ageRange?: string;
  price: string;
  promotion: boolean;
  promotionPrice?: string;
  promotionInfo?: string;
  rally?: string;
  aboutTitle: string;
  aboutDescription: string;
  about2Title?: string;
  about2Description?: string;
};
export type scheduleComponentType = {
  title: string;
  scheduleAbout: string;
  scheduleList: { title: string; text: string }[];
};
export type contactComponentType = {
  title: string;
  phone: string;
  email: string;
  website?: string;
};
