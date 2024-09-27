"use client";
import React from "react";
import styles from "./stickerH1.module.scss";
import StripH1 from "../StripH1/StripH1";
import { stickerH1Type } from "@/types/UI/stickerStripStrap";
const StickerH1: React.FC<stickerH1Type> = ({
  stripBgColor,
  stripTextColor,
  scale,
  title,
  title2,
  titleStrip,
  paddingBottom,
}) => {
  return (
    <div className={styles.box} style={{ paddingBottom: `${paddingBottom}%` }}>
      <h1 className={styles["box__title"]}>{title}</h1>
      <h1 className={styles["box__title-2"]}>{title2}</h1>
      <StripH1
        scale={scale}
        stripTextColor={stripTextColor}
        stripBgColor={stripBgColor}
        title={titleStrip}
      />
    </div>
  );
};
export default StickerH1;
