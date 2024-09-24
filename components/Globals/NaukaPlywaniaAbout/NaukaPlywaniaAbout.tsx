"use client";
import React from "react";
import styles from "./naukaPlywaniaAbout.module.scss";
import StickerH2 from "@/components/Ui/StickerH2/StickerH2";
import AboutTextPoppins from "@/components/Ui/AboutTextPoppins/AboutTextPoppins";
import Image from "next/image";
import { aboutType } from "@/types/NaukaPlywania/naukaPlywania";

const NaukaPlywaniaAbout: React.FC<aboutType> = ({
  stickerH2,
  aboutTextPoppins,
  image,
}) => {
  return (
    <div className={styles.about}>
      <div className={styles["about__text-box"]}>
        <StickerH2
          title={stickerH2.title}
          titleStrip={stickerH2.titleStrip}
          scale={stickerH2.scale}
          stripTextColor={stickerH2.stripTextColor}
          stripBgColor={stickerH2.stripBgColor}
          paddingBottom={stickerH2.paddingBottom}
        />
        <AboutTextPoppins
          titleColor={aboutTextPoppins.titleColor}
          title={aboutTextPoppins.title}
          description={aboutTextPoppins.description}
        />
      </div>
      <div className={styles["about__image-box"]}>
        <Image
          objectFit="cover"
          objectPosition="left"
          src={`/assets/swimming/${image.src}`}
          alt={image.alt}
          fill={true}
        />
      </div>
    </div>
  );
};

export default NaukaPlywaniaAbout;
