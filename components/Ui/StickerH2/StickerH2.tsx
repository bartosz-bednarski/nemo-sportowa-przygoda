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
    <h2 className={styles.box} style={{ paddingBottom: `${paddingBottom}%` }}>
      <span
        className={styles["box__title"]}
        style={{
          color: COLORS[titleColor !== undefined ? titleColor : "white"],
        }}
      >
        {title}
      </span>
      <StripH2
        type="span"
        scale={scale}
        stripTextColor={stripTextColor}
        stripBgColor={stripBgColor}
        title={titleStrip}
      />
    </h2>
  );
};
export default StickerH2;
