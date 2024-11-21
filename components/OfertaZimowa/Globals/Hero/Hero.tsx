"use client";
import React from "react";
import styles from "./hero.module.scss";
import Image from "next/image";
import { heroComponentType } from "@/types/SummerWinter/Winter";
import Scrap2 from "@/components/Ui/Scrap/Scrap2";

const Hero: React.FC<{ hero: heroComponentType }> = ({ hero }) => {
  return (
    <div className={styles.hero}>
      <Image
        className={styles["hero__image"]}
        src={`/assets/winter/polkolonie/${hero.pc}.webp`}
        width={1920}
        height={1080}
        alt="aktywna zima bobowa"
      />
      <Image
        className={styles["hero__image-mobile"]}
        src={`/assets/winter/polkolonie/${hero.mobile}.webp`}
        width={1242}
        height={2208}
        alt="aktywna zima bobowa"
      />
      <Scrap2 position="bottom" color="white" />
    </div>
  );
};
export default Hero;
