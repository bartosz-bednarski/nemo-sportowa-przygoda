"use client";
import React from "react";
import styles from "./stickerH4.module.scss";
import { stickerH4Type } from "@/types/UI/stickerStripStrap";
import StripH4 from "../StripH4/StripH4";
const StickerH4: React.FC<stickerH4Type> = ({
  stripBgColor,
  stripTextColor,
  scale,
  title,
  titleStrip,
  paddingBottom,
}) => {
  return (
    <div className={styles.box} style={{ paddingBottom: `${paddingBottom}%` }}>
      <h4 className={styles["box__title"]}>{title}</h4>
      <StripH4
        scale={scale}
        stripTextColor={stripTextColor}
        stripBgColor={stripBgColor}
        title={titleStrip}
      />
    </div>
  );
};
export default StickerH4;
