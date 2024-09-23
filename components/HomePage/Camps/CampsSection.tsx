"use client";
import "react";
import styles from "./campsSection.module.scss";
import BackgroundText from "@/components/Ui/BackgroundText/BackgroundText";
import StickerH2 from "@/components/Ui/StickerH2/StickerH2";
import AboutTextPoppins from "@/components/Ui/AboutTextPoppins/AboutTextPoppins";
import SummerOffert from "./SummerOffert";
import WinterOffert from "./WinterOffert";
const CampsSection: React.FC = () => {
  return (
    <section className={styles.camps}>
      <div className={styles["camps__about-container"]}>
        <BackgroundText title="PRZYGODA LATEM I ZIMĄ" />
        <StickerH2
          title="OBOZY"
          titleStrip="PÓŁKOLONIE"
          stripBgColor="white"
          stripTextColor="basicOrange"
          scale={1.2}
          paddingBottom={0}
        />
        <AboutTextPoppins
          titleColor="basicOrange"
          title="Lorem ipsum dolor sit amet consectetur"
          description="Lorem ipsum dolor sit amet consectetur. Nunc vestibulum orci tincidunt sed tristique nullam. Sed placerat turpis habitant nec tristique rhoncus odio quis nisl. Id a pharetra euismod hendrerit. Erat tellus pretium consequat eu eu eu. Sed placerat turpis habitant nec tristique rhoncus odio quis nisl. Id a pharetra euismod hendrerit. Erat tellus pretium consequat eu eu eu."
        />
      </div>
      <SummerOffert />
      <WinterOffert />
    </section>
  );
};
export default CampsSection;
