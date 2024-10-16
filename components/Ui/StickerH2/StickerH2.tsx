"use client";
import React from "react";
import styles from "./stickerH2.module.scss";
import StripH2 from "../StripH2/StripH2";
import { stickerH2Type } from "@/types/UI/stickerStripStrap";
import { COLORS } from "@/utils/UI/colors";
const StickerH2: React.FC<stickerH2Type> = ({
  stripBgColor,
  stripTextColor,
  scale,
  title,
  titleStrip,
  paddingBottom,
  titleColor,
}) => {
  return (
    <div className={styles.box} style={{ paddingBottom: `${paddingBottom}%` }}>
      <h2
        className={styles["box__title"]}
        style={{
          color: COLORS[titleColor !== undefined ? titleColor : "white"],
        }}
      >
        {title}
      </h2>
      <StripH2
        scale={scale}
        stripTextColor={stripTextColor}
        stripBgColor={stripBgColor}
        title={titleStrip}
      />
    </div>
  );
};
export default StickerH2;
