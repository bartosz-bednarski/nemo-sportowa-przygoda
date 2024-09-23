"use client";
import "react";
import styles from "./swimmingSection.module.scss";
import StickerH2 from "../../Ui/StickerH2/StickerH2";
import AboutTextPoppins from "../../Ui/AboutTextPoppins/AboutTextPoppins";
import BackgroundText from "../../Ui/BackgroundText/BackgroundText";
import SwimmingOffert from "./SwimmingOffert";
import Scrap2 from "@/components/Ui/Scrap/Scrap2";
const SwimmingSection: React.FC = () => {
  return (
    <section className={styles.swimming}>
      <div className={styles["swimming__about-container"]}>
        <BackgroundText title="BOMBELKI MAŁE I DUŻE" />
        <StickerH2
          title="NAUKA"
          titleStrip="PŁYWANIA"
          stripBgColor="white"
          stripTextColor="mediumBlue"
          scale={1.2}
          paddingBottom={0}
        />
        <AboutTextPoppins
          title="Lorem ipsum dolor sit amet consectetur"
          description="Lorem ipsum dolor sit amet consectetur. Nunc vestibulum orci tincidunt sed tristique nullam. Sed placerat turpis habitant nec tristique rhoncus odio quis nisl. Id a pharetra euismod hendrerit. Erat tellus pretium consequat eu eu eu. Sed placerat turpis habitant nec tristique rhoncus odio quis nisl. Id a pharetra euismod hendrerit. Erat tellus pretium consequat eu eu eu."
          titleColor="mediumBlue"
        />
      </div>
      <SwimmingOffert />
      <Scrap2 color="basicOrange" position="bottom" />
    </section>
  );
};
export default SwimmingSection;
