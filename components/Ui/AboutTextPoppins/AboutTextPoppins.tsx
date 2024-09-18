import React from "react";
import styles from "./aboutTextPoppins.module.scss";
const AboutTextPoppins: React.FC = () => {
  return (
    <div className={styles.box}>
      <span className={styles["box__title"]}>
        Lorem ipsum dolor sit amet consectetur
      </span>
      <p>
        Lorem ipsum dolor sit amet consectetur. Nunc vestibulum orci tincidunt
        sed tristique nullam. Sed placerat turpis habitant nec tristique rhoncus
        odio quis nisl. Id a pharetra euismod hendrerit. Erat tellus pretium
        consequat eu eu eu. Sed placerat turpis habitant nec tristique rhoncus
        odio quis nisl. Id a pharetra euismod hendrerit. Erat tellus pretium
        consequat eu eu eu.
      </p>
    </div>
  );
};
export default AboutTextPoppins;
