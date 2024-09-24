"use client";
import React from "react";
import styles from "./campsSection.module.scss";
import Image from "next/image";
import StripH3 from "@/components/Ui/StripH3/StripH3";
import TitleStripDescriptionStrip from "@/components/Ui/TitleStripDescriptionStrip/TitleStripDescriptionStrip";
import LinkButton from "@/components/Ui/Buttons/LinkButton";

const SummerOffert: React.FC = () => {
  return (
    <div className={styles["camps__offert"]}>
      <Image
        src="/assets/camps/background-img-1.png"
        fill={true}
        alt="nauka pływania"
        style={{ objectFit: "cover", objectPosition: "top" }}
      />
      <div className={styles["camps__offert__content"]}>
        <StripH3
          stripTextColor="white"
          stripBgColor="basicGreen"
          scale={1.2}
          title="OFERTA LETNIA"
        />
        <div className={styles["camps__offert__content__categories"]}>
          <TitleStripDescriptionStrip
            title="PÓŁKOLONIE"
            titleScale={1.2}
            titleStripBgColor="white"
            titleStripTextColor="basicGreen"
            description="Dzieci od 3 miesiąca życia do 3 lat razem z rodzicami.Lorem ipsum dolor sit amet consectetur. Nunc vestibulum orci tincidunt sed tristique nullam. Lorem ipsum dolor sit amet consectetur. Nunc vestibulum orci tincidunt sed tristique nullam."
            descriptionScale={1.2}
            descriptionStripBgColor="basicGreen"
            descriptionStripTextColor="white"
          />
          <TitleStripDescriptionStrip
            title="OBOZY"
            titleScale={2}
            titleStripBgColor="white"
            titleStripTextColor="basicGreen"
            description="Dzieci od 3 miesiąca życia do 3 lat razem z rodzicami.Lorem ipsum dolor sit amet consectetur. Nunc vestibulum orci tincidunt sed tristique nullam. Lorem ipsum dolor sit amet consectetur. Nunc vestibulum orci tincidunt sed tristique nullam."
            descriptionScale={1.2}
            descriptionStripBgColor="basicGreen"
            descriptionStripTextColor="white"
          />
        </div>
        <LinkButton
          title="Dowiedz się więcej"
          textColor="white"
          bgColor="basicGreen"
          href="/"
        />
      </div>
    </div>
  );
};

export default SummerOffert;
