import "react";
import styles from "./videosSection.module.scss";
import Image from "next/image";
import StickerH2 from "../Ui/StickerH2/StickerH2";
import Scrap from "../Ui/Scrap/Scrap";
import { VideosSectionType } from "@/types/Globals/globals";
const VideosSection: React.FC<VideosSectionType> = ({
  scrapColor,
  col1,
  col2,
  col3,
}) => {
  return (
    <div className={styles.container}>
      <Scrap position="bottom" color={scrapColor} />
      <div className={styles["container__image-box"]}>
        <div className={styles["container__image-box__opacity-cover"]}></div>
        <Image
          className={styles["container__image-box__image"]}
          src={`/assets/videos/${col1.image.src}`}
          loading="eager"
          alt={col1.image.alt}
          fill={true}
        />
        <span className={styles["container__image-box__sticker-box"]}>
          {" "}
          <StickerH2
            title={col1.stickerH2.title}
            titleStrip={col1.stickerH2.titleStrip}
            stripBgColor={col1.stickerH2.stripBgColor}
            stripTextColor={col1.stickerH2.stripTextColor}
            scale={col1.stickerH2.scale}
            paddingBottom={30}
          />
        </span>
      </div>
      <div className={styles["container__image-box"]}>
        <div className={styles["container__image-box__opacity-cover"]}></div>
        <Image
          className={styles["container__image-box__image"]}
          src={`/assets/videos/${col2.image.src}`}
          loading="eager"
          alt={col2.image.alt}
          fill={true}
        />
        <span className={styles["container__image-box__sticker-box"]}>
          {" "}
          <StickerH2
            title={col2.stickerH2.title}
            titleStrip={col2.stickerH2.titleStrip}
            stripBgColor={col2.stickerH2.stripBgColor}
            stripTextColor={col2.stickerH2.stripTextColor}
            scale={col2.stickerH2.scale}
            paddingBottom={50}
          />
        </span>
      </div>
      <div className={styles["container__image-box"]}>
        <div className={styles["container__image-box__opacity-cover"]}></div>
        <Image
          className={styles["container__image-box__image"]}
          src={`/assets/videos/${col3.image.src}`}
          loading="eager"
          alt={col3.image.alt}
          fill={true}
        />
        <span className={styles["container__image-box__sticker-box"]}>
          {" "}
          <StickerH2
            title={col3.stickerH2.title}
            titleStrip={col3.stickerH2.titleStrip}
            stripBgColor={col3.stickerH2.stripBgColor}
            stripTextColor={col3.stickerH2.stripTextColor}
            scale={col3.stickerH2.scale}
            paddingBottom={40}
          />
        </span>
      </div>
    </div>
  );
};
export default VideosSection;
