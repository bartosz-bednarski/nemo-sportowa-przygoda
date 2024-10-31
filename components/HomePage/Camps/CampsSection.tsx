"use client";
import "react";
import styles from "./campsSection.module.scss";
import SummerOffert from "./SummerOffert";
import WinterOffert from "./WinterOffert";
const CampsSection: React.FC = () => {
  return (
    <section className={styles.camps}>
      {/* <div className={styles["camps__about-container"]}>
        <BackgroundText title="PRZYGODA LATEM I ZIMĄ" />
        <StickerH2
          title="OBOZY"
          titleStrip="PÓŁKOLONIE"
          stripBgColor="white"
          stripTextColor="basicOrange"
          scale={1.2}
          paddingBottom={0}
        />
        <AboutTextPoppins
          titleColor="basicOrange"
          title=""
          description="Nasze półkolonie to idealna okazja, by dzieci aktywnie i kreatywnie spędziły
czas w gronie rówieśników. Program obejmuje różnorodne zajęcia sportowe,
gry i zabawy, które rozwijają umiejętności fizyczne i społeczne. Uczestnicy
mają szansę odkryć nowe pasje, poznać ciekawe dyscypliny sportowe oraz
bliżej zapoznać się z lokalną kulturą i przyrodą. Zapewniamy opiekę
doświadczonych instruktorów, którzy dbają o bezpieczeństwo i dobrą zabawę."
        />
      </div> */}
      <SummerOffert />
      <WinterOffert />
    </section>
  );
};
export default CampsSection;
