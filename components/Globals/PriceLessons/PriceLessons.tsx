"use client";
import React from "react";
import styles from "./priceLessons.module.scss";
import StickerH4 from "@/components/Ui/StickerH4/StickerH4";
import { priceLessonsType } from "@/types/Globals/globals";
import SingInButton from "@/components/Ui/Buttons/SignInButton";

const PriceLessons: React.FC<priceLessonsType> = ({
  stickerH4,
  oneLesson,
  tenLessons,
  button,
}) => {
  return (
    <div className={styles.priceLessons}>
      <StickerH4
        stripTextColor={stickerH4.stripTextColor}
        stripBgColor={stickerH4.stripBgColor}
        title={stickerH4.title}
        titleStrip={stickerH4.titleStrip}
        scale={stickerH4.scale}
        paddingBottom={stickerH4.paddingBottom}
      />
      <div className={styles["priceLessons__content-box"]}>
        <span className={styles["priceLessons__content-box__orange"]}>
          1 LEKCJA
        </span>
        <span>{oneLesson.price} </span>
        <span>{oneLesson.time} min</span>
      </div>
      <div className={styles["priceLessons__content-box"]}>
        <span className={styles["priceLessons__content-box__orange"]}>
          10 LEKCJI
        </span>
        <span>{tenLessons.price} </span>
        <span>{tenLessons.time} min</span>
      </div>
      <SingInButton
        title={button.title}
        textColor={button.textColor}
        bgColor={button.bgColor}
        href={button.href}
      />
    </div>
  );
};

export default PriceLessons;
