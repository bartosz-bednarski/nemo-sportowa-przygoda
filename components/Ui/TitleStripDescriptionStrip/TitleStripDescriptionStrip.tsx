"use client";
import React from "react";
import styles from "./titleStripDescriptionStrip.module.scss";
import StripH3 from "../StripH3/StripH3";
import { customColors } from "@/types/UI/colors";
import StripParagraph from "../StripParagraph/StripParagraph";

const TitleStripDescriptionStrip: React.FC<{
  title: string;
  titleStripTextColor: customColors;
  titleStripBgColor: customColors;
  titleScale: number;
  description: string;
  descriptionStripTextColor: customColors;
  descriptionStripBgColor: customColors;
  descriptionScale: number;
}> = ({
  title,
  titleStripTextColor,
  titleStripBgColor,
  titleScale,
  description,
  descriptionStripTextColor,
  descriptionStripBgColor,
  descriptionScale,
}) => {
  return (
    <div className={styles["titleStripDescription"]}>
      <StripH3
        title={title}
        stripTextColor={titleStripTextColor}
        stripBgColor={titleStripBgColor}
        scale={titleScale}
      />
      <StripParagraph
        title={description}
        stripTextColor={descriptionStripTextColor}
        stripBgColor={descriptionStripBgColor}
        scale={descriptionScale}
      />
    </div>
  );
};
export default TitleStripDescriptionStrip;
