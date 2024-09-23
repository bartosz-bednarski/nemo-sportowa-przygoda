"use client";
import React from "react";
import styles from "./swimmingSection.module.scss";
import Image from "next/image";
import TitleStripDescription from "@/components/Ui/TitleStripDescription/TitleStripDescription";
import StripH3 from "@/components/Ui/StripH3/StripH3";
import SwimmingPoolCover from "@/components/Ui/SwimmingPoolCover/SwimmingPoolCover";
import MainButton from "@/components/Ui/Buttons/MainButton";

const SwimmingOffert: React.FC = () => {
  return (
    <div className={styles["swimming__offert"]}>
      <Image
        src="/assets/swimming/background-img-1.png"
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
            description=" Dzieci od 3 miesiąca życia do 3 lat razem z rodzicami.Lorem
            ipsum dolor sit amet consectetur. Nunc vestibulum orci tincidunt
            sed tristique nullam. Lorem ipsum dolor sit amet consectetur.
            Nunc vestibulum orci tincidunt sed tristique nullam."
          />
          <TitleStripDescription
            title="DZIECI I MŁODZIEŻ"
            stripTextColor="white"
            stripBgColor="mediumBlue"
            scale={1.3}
            description=" Dzieci od 3 miesiąca życia do 3 lat razem z rodzicami.Lorem
            ipsum dolor sit amet consectetur. Nunc vestibulum orci tincidunt
            sed tristique nullam. Lorem ipsum dolor sit amet consectetur.
            Nunc vestibulum orci tincidunt sed tristique nullam."
          />
          <TitleStripDescription
            title="DOROŚLI"
            stripTextColor="white"
            stripBgColor="mediumBlue"
            scale={2}
            description=" Dzieci od 3 miesiąca życia do 3 lat razem z rodzicami.Lorem
            ipsum dolor sit amet consectetur. Nunc vestibulum orci tincidunt
            sed tristique nullam. Lorem ipsum dolor sit amet consectetur.
            Nunc vestibulum orci tincidunt sed tristique nullam."
          />
        </div>
        <StripH3
          title="NASZE LOKALIZACJE"
          stripBgColor="white"
          stripTextColor="mediumBlue"
          scale={1.5}
        />
        <div className={styles["swimming__offert__content__swimming-pools"]}>
          <SwimmingPoolCover image="korzenna.jpg" title="BASEN KORZENNA" />
          <SwimmingPoolCover image="gorlice.webp" title="BASEN GORLICE" />
          <SwimmingPoolCover image="eisenberga.jpg" title="BASEN EISENBERGA" />
        </div>
        <MainButton
          title="Dowiedz się więcej"
          bgColor="mediumBlue"
          textColor="white"
        />
      </div>
    </div>
  );
};
export default SwimmingOffert;
