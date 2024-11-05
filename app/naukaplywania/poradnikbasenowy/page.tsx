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
