"use client";
import React from "react";
import styles from "./about.module.scss";
import StickerH2 from "@/components/Ui/StickerH2/StickerH2";
import AboutTextPoppins from "@/components/Ui/AboutTextPoppins/AboutTextPoppins";
import Image from "next/image";

const About: React.FC = () => {
  return (
    <div className={styles.about}>
      <div className={styles["about__text-box"]}>
        <StickerH2
          title="NAUKA PŁYWANIA"
          titleStrip="NIEMOWLAKI"
          scale={1.2}
          stripTextColor="lightBlue"
          stripBgColor="white"
          paddingBottom={10}
        />
        <AboutTextPoppins
          titleColor="lightBlue"
          title="Dzieci  od  3  miesiąca  do  3 lat  z  rodzicami"
          description="Lorem ipsum dolor sit amet consectetur. Nunc vestibulum orci tincidunt sed tristique nullam. Sed placerat turpis habitant nec tristique rhoncus odio quis nisl. Id a pharetra euismod hendrerit. Erat tellus pretium consequat eu eu eu. Sed placerat turpis habitant nec tristique rhoncus odio quis nisl. Id a pharetra euismod hendrerit. Erat tellus pretium consequat eu eu eu."
        />
      </div>
      <div className={styles["about__image-box"]}>
        <Image
          objectFit="cover"
          objectPosition="left"
          src="/assets/swimming/background-img-scrap-1.png"
          alt="nauka pływania niemowlaki"
          fill={true}
        />
      </div>
    </div>
  );
};

export default About;
