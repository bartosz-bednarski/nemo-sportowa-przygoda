"use client";
import React from "react";
import styles from "./naukaPlywaniaMiasto.module.scss";
import { COLORS } from "@/utils/UI/colors";
import AboutTextPoppins from "../Ui/AboutTextPoppins/AboutTextPoppins";
import SwimmingPoolCover from "../Ui/SwimmingPoolCover/SwimmingPoolCover";

const NaukaPlywaniaMiasto: React.FC = () => {
  return (
    <div
      className={styles.naukaPlywaniaMiasto}
      style={{ background: COLORS.lightBlue }}
    >
      <AboutTextPoppins
        titleColor="lightBlue"
        title="Sprawdź naszą ofertę nauki pływania w Krakowie"
        description="Lorem ipsum dolor sit amet consectetur. Nunc vestibulum orci tincidunt sed tristique nullam. Sed placerat turpis habitant nec tristique rhoncus odio quis nisl. Id a pharetra euismod hendrerit. Erat tellus pretium consequat eu eu eu. Sed placerat turpis habitant nec tristique rhoncus odio quis nisl. Id a pharetra euismod hendrerit. Erat tellus pretium consequat eu eu eu."
      />
      <div className={styles["naukaPlywaniaMiasto__swimming-pools"]}>
        <SwimmingPoolCover
          image="eisenberga.jpg"
          title="BASEN EISENBERGA"
          url="/naukaplywania/krakow/eisenberga"
        />
        <SwimmingPoolCover
          image="bronowianka.jpg"
          title="BASEN BRONOWIANKA"
          url="/naukaplywania/krakow/bronowianka"
        />
      </div>
    </div>
  );
};

export default NaukaPlywaniaMiasto;
