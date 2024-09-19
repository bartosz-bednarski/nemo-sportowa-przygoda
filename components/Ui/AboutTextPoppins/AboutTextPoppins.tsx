import React from "react";
import styles from "./aboutTextPoppins.module.scss";
import { customColors } from "@/types/UI/colors";
import { COLORS } from "@/utils/UI/colors";
const AboutTextPoppins: React.FC<{
  titleColor: customColors;
  title: string;
  description: string;
}> = ({ titleColor, title, description }) => {
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
