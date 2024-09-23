"use client";
import React from "react";
import styles from "./aboutTextPoppins.module.scss";
import { COLORS } from "@/utils/UI/colors";
import { aboutTextPoppinsType } from "@/types/UI/aboutTextPoppins";
const AboutTextPoppins: React.FC<aboutTextPoppinsType> = ({
  titleColor,
  title,
  description,
}) => {
  return (
    <div className={styles.box}>
      <span
        className={styles["box__title"]}
        style={{ color: COLORS[titleColor] }}
      >
        {title}
      </span>
      <p>{description}</p>
    </div>
  );
};
export default AboutTextPoppins;
