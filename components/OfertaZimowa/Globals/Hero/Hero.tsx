"use client";
import React from "react";
import styles from "./hero.module.scss";
import Image from "next/image";

const Hero: React.FC = () => {
  return (
    <div className={styles.hero}>
      <Image
        className={styles["hero__image"]}
        src="/assets/winter/polkolonie/polkolonia_aktywnazima_bobowa_2025.webp"
        width={1920}
        height={1080}
        alt="aktywna zima bobowa"
      />
    </div>
  );
};
export default Hero;
