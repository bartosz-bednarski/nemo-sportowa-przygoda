import React from "react";
import styles from "./stickerH2.module.scss";
import Strip from "../Strip/Strip";
import { customColors } from "@/types/UI/colors";
const StickerH2: React.FC<{
  stripTextColor: customColors;
  stripBgColor: customColors;
  scale: number;
  title: string;
  titleStrip: string;
  paddingBottom?: number;
}> = ({
  stripBgColor,
  stripTextColor,
  scale,
  title,
  titleStrip,
  paddingBottom,
}) => {
  return (
    <div className={styles.box} style={{ paddingBottom: `${paddingBottom}%` }}>
      <h2 className={styles["box__title"]}>{title}</h2>
      <Strip
        scale={scale}
        stripTextColor={stripTextColor}
        stripBgColor={stripBgColor}
        title={titleStrip}
      />
    </div>
  );
};
export default StickerH2;
