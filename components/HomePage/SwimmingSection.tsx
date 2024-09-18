import "react";
import styles from "./swimmingSection.module.scss";
import StickerH2 from "../Ui/StickerH2/StickerH2";
import AboutTextPoppins from "../Ui/AboutTextPoppins/AboutTextPoppins";
import BackgroundText from "../Ui/BackgroundText/BackgroundText";
import Image from "next/image";
const SwimmingSection: React.FC = () => {
  return (
    <section className={styles.swimming}>
      <div className={styles["swimming__about-container"]}>
        <BackgroundText />
        <StickerH2
          title="NAUKA"
          titleStrip="PŁYWANIA"
          stripBgColor="white"
          stripTextColor="mediumBlue"
          scale={1.2}
          paddingBottom={0}
        />
        <AboutTextPoppins />
      </div>
      <div className={styles["swimming__offert"]}>
        <Image
          src="/assets/swimming/background-img-1.png"
          fill={true}
          alt="nauka pływania"
          style={{ objectFit: "cover", objectPosition: "top" }}
        />
        <div className={styles["swimming__offert__opacity"]}>123</div>
      </div>
    </section>
  );
};
export default SwimmingSection;
