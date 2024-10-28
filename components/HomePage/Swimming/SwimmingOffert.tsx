"use client";
import React from "react";
import styles from "./swimmingSection.module.scss";
import Image from "next/image";
import TitleStripDescription from "@/components/Ui/TitleStripDescription/TitleStripDescription";

import SwimmingPoolCover from "@/components/Ui/SwimmingPoolCover/SwimmingPoolCover";
import LinkButton from "@/components/Ui/Buttons/LinkButton";

const SwimmingOffert: React.FC = () => {
  return (
    <div className={styles["swimming__offert"]}>
      <Image
        src="/assets/swimming/background-img-1.webp"
        fill={true}
        alt="nauka pływania"
        style={{ objectFit: "cover", objectPosition: "top" }}
      />
      <span className={styles["swimming__offert__opacity"]}></span>
      <div className={styles["swimming__offert__content"]}>
        <div className={styles["swimming__offert__content__categories"]}>
          <TitleStripDescription
            title="NIEMOWLAKI"
            stripTextColor="white"
            stripBgColor="mediumBlue"
            scale={1.2}
            description=" Maluchy oswajają się z wodą poprzez zabawy z opiekunami. Ćwiczą
podstawowe ruchy, które wspierają rozwój motoryczny i wzmacniają więź z rodzicem."
          />
          <TitleStripDescription
            title="DZIECI I MŁODZIEŻ"
            stripTextColor="white"
            stripBgColor="mediumBlue"
            scale={1.3}
            description="Dzieci uczą się podstaw pływania w formie zabawy. Poprawiają technikę i
koordynację, zdobywając kolejne umiejętności, w kraulu oraz grzbiecie. Młodzież uczy się pływać czterema stylami (styl dowolny, grzbietowy, klasyczny,
motylkowy) oraz technik nawrotów. Zajęcia pomagają doskonalić technikę, poprawiać
wytrzymałość i przygotowują do ewentualnych startów w zawodach pływackich."
          />
          <TitleStripDescription
            title="DOROŚLI"
            stripTextColor="white"
            stripBgColor="mediumBlue"
            scale={2}
            description="Mogą zarówno doskonalić swoje umiejętności, jak i rozpocząć naukę
pływania od zera. Bez względu na poziom zaawansowania, zajęcia pomagają
zbudować pewność siebie w wodzie, poprawić kondycję oraz nauczyć się
prawidłowej techniki pod okiem doświadczonych instruktorów."
          />
        </div>

        <div className={styles["swimming__offert__content__swimming-pools"]}>
          <SwimmingPoolCover
            image="korzenna.webp"
            title="BASEN KORZENNA"
            url="/naukaplywania/korzenna"
          />
          <SwimmingPoolCover
            image="gorlice.webp"
            title="BASEN GORLICE"
            url="/naukaplywania/gorlice"
          />
          <SwimmingPoolCover
            image="eisenberga.webp"
            title="BASEN EISENBERGA"
            url="/naukaplywania/krakow/eisenberga"
          />
          <SwimmingPoolCover
            image="bronowianka.webp"
            title="BASEN BRONOWIANKA"
            url="/naukaplywania/krakow/bronowianka"
          />
          <SwimmingPoolCover
            image="plywaczek.webp"
            title="BASEN PŁYWACZEK"
            url="/naukaplywania/krakow/plywaczek"
          />
        </div>
        <LinkButton
          title="Dowiedz się więcej"
          bgColor="mediumBlue"
          textColor="white"
          href="/naukaplywania"
        />
      </div>
    </div>
  );
};
export default SwimmingOffert;
