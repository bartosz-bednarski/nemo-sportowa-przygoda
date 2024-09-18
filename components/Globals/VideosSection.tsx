import "react";
import styles from "./videosSection.module.scss";
import Image from "next/image";
import StickerH2 from "../Ui/StickerH2/StickerH2";
import Scrap from "../Ui/Scrap/Scrap";
const VideosSection: React.FC = () => {
  return (
    <div className={styles.container}>
      <Scrap position="bottom" color="mediumBlue" />
      <div className={styles["container__image-box"]}>
        <div className={styles["container__image-box__opacity-cover"]}></div>
        <Image
          className={styles["container__image-box__image"]}
          src="/assets/videos/image 80.png"
          loading="eager"
          alt="nauka pływania"
          fill={true}
        />
        <StickerH2
          title="NAUKA"
          titleStrip="PŁYWANIA"
          stripBgColor="mediumBlue"
          stripTextColor="white"
          scale={1.15}
        />
      </div>
      <div className={styles["container__image-box"]}>
        <div className={styles["container__image-box__opacity-cover"]}></div>
        <Image
          className={styles["container__image-box__image"]}
          src="/assets/videos/image 81.png"
          loading="eager"
          alt="obozy półkolonie"
          fill={true}
        />
        <StickerH2
          title="OBOZY"
          titleStrip="PÓŁKOLONIE"
          stripBgColor="basicOrange"
          stripTextColor="white"
          scale={1.15}
          paddingBottom={70}
        />
      </div>
      <div className={styles["container__image-box"]}>
        <div className={styles["container__image-box__opacity-cover"]}></div>
        <Image
          className={styles["container__image-box__image"]}
          src="/assets/videos/image 82.png"
          loading="eager"
          alt="oferty specjalne"
          fill={true}
        />
        <StickerH2
          title="OFERTY"
          titleStrip="SPECJALNE"
          stripBgColor="basicBrown"
          stripTextColor="white"
          scale={1.15}
          paddingBottom={40}
        />
      </div>
    </div>
  );
};
export default VideosSection;
