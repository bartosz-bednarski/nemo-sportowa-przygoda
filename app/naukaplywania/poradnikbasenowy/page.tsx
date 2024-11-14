import styles from "../../page.module.scss";
import Hero from "@/components/PoradnikBasenowy/Hero/Hero";
import List from "@/components/PoradnikBasenowy/List/List";
import Bubbles from "@/components/Ui/Bubbles/Bubbles";
import PointSection1 from "@/components/PoradnikBasenowy/PointsSections/PointSection1";
import PointSection2 from "@/components/PoradnikBasenowy/PointsSections/PointSection2";
import PointSection4 from "@/components/PoradnikBasenowy/PointsSections/PointSection4";
import PointSection5 from "@/components/PoradnikBasenowy/PointsSections/PointSection5";
import PointSection6 from "@/components/PoradnikBasenowy/PointsSections/PointSection6";
import Scrap2 from "@/components/Ui/Scrap/Scrap2";
import PointSection3 from "@/components/PoradnikBasenowy/PointsSections/PointSection3";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Poradnik basenowy",
  description:
    "Co zabrać na basen? | Zasady korzystania z basenu | Odrabianie zajęć | Cennik i opłaty - Sprawdź nasz uniwersalny poradnik basenowy.",
  metadataBase: new URL(
    "https://nemosportowaprzygoda.pl/naukaplywania/poradnikbasenowy"
  ),
  alternates: {
    canonical: "https://nemosportowaprzygoda.pl/naukaplywania/poradnikbasenowy",
    languages: {
      "pl-PL": "/pl-PL",
      "en-US": "/en-US",
    },
  },
};

const PoradnikBasenowyPage = () => {
  return (
    <main className={styles.main}>
      <Hero />
      <List />
      <Bubbles colorTop="lightBlue" colorBottom="lightBlue" />
      <PointSection1 />
      <Bubbles colorTop="lightBlue" colorBottom="lightBlue" />
      <PointSection2 />
      <Bubbles colorTop="lightBlue" colorBottom="lightBlue" />
      <PointSection3 />
      <Bubbles colorTop="lightBlue" colorBottom="lightBlue" />
      <PointSection4 />
      <Bubbles colorTop="lightBlue" colorBottom="lightBlue" />
      <PointSection5 />
      <Bubbles colorTop="lightBlue" colorBottom="lightBlue" />
      <PointSection6 />
      <Scrap2 position="bottom" color="darkBlue" />
    </main>
  );
};

export default PoradnikBasenowyPage;
