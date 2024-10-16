"use client";
import React from "react";
import styles from "./campsSection.module.scss";
import Image from "next/image";
import StripH3 from "@/components/Ui/StripH3/StripH3";
import TitleStripDescriptionStrip from "@/components/Ui/TitleStripDescriptionStrip/TitleStripDescriptionStrip";
import LinkButton from "@/components/Ui/Buttons/LinkButton";
import Scrap2 from "@/components/Ui/Scrap/Scrap2";

const WinterOffert: React.FC = () => {
  return (
    <div className={styles["camps__offert"]} style={{ marginTop: "-6rem" }}>
      <Image
        src="/assets/camps/background-img-2.webp"
        fill={true}
        alt="nauka pływania"
        style={{ objectFit: "cover", objectPosition: "top" }}
      />
      <div className={styles["camps__offert__content"]}>
        <StripH3
          stripTextColor="mediumBlue"
          stripBgColor="white"
          scale={1.2}
          title="OFERTA ZIMOWA"
        />
        <div className={styles["camps__offert__content__categories"]}>
          <TitleStripDescriptionStrip
            title="PÓŁKOLONIE"
            titleScale={1.2}
            titleStripBgColor="white"
            titleStripTextColor="mediumBlue"
            description="Udowadniamy, że zima to doskonały czas na aktywność! Dzieci
poznają różnorodne sporty zimowe, takie jak łyżwiarstwo, narty czy zabawy na
śniegu, a także uczą się, jak kreatywnie i zdrowo spędzać czas w chłodniejsze dni.
Nasze półkolonie to nie tylko sport, ale również mnóstwo zabawy i przygód w
zimowej scenerii!"
            descriptionScale={1.2}
            descriptionStripBgColor="mediumBlue"
            descriptionStripTextColor="white"
          />
          <TitleStripDescriptionStrip
            title="OBOZY"
            titleScale={2}
            titleStripBgColor="white"
            titleStripTextColor="mediumBlue"
            description="Uczestnicy będą mieli okazję nauczyć się lub doskonalić
umiejętności jazdy na nartach i snowboardzie pod okiem doświadczonych
instruktorów. Zajęcia odbywają się na świetnie przygotowanych stokach, zapewniając
niezapomniane wrażenia i mnóstwo frajdy."
            descriptionScale={1.2}
            descriptionStripBgColor="mediumBlue"
            descriptionStripTextColor="white"
          />
        </div>
        <LinkButton
          title="Dowiedz się więcej"
          textColor="white"
          bgColor="mediumBlue"
          href="/ofertazimowa"
        />
      </div>
      <Scrap2 color="basicOrange" position="bottom" />
    </div>
  );
};

export default WinterOffert;
