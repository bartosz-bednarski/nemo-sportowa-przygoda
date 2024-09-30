import "react";
import styles from "./videosSection.module.scss";
import Image from "next/image";
import StickerH2 from "../Ui/StickerH2/StickerH2";
import { VideosSectionType } from "@/types/Globals/globals";
import StickerH1 from "../Ui/StickerH1/StickerH1";
import Scrap2 from "../Ui/Scrap/Scrap2";
const VideosSection: React.FC<VideosSectionType> = ({
  scrapColor,
  col1,
  col2,
  col3,
  oneSticker,
  oneStickerContent,
}) => {
  return (
    <div className={styles.container}>
      {oneSticker && oneStickerContent !== undefined && (
        <span className={styles["container__image-box__oneSticker-box"]}>
          {" "}
          <StickerH1
            title={oneStickerContent.title}
            title2={oneStickerContent.title2}
            titleStrip={oneStickerContent.titleStrip}
            stripBgColor={oneStickerContent.stripBgColor}
            stripTextColor={oneStickerContent.stripTextColor}
            scale={oneStickerContent.scale}
            paddingBottom={30}
          />
        </span>
      )}

      <Scrap2 position="bottom" color={scrapColor} />
      <div className={styles["container__image-box"]}>
        <div className={styles["container__image-box__opacity-cover"]}></div>
        <Image
          className={styles["container__image-box__image"]}
          src={`/assets/videos/${col1.image.src}`}
          loading="eager"
          alt={col1.image.alt}
          fill={true}
        />
        {!oneSticker && col1.stickerH2 !== undefined && (
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
        )}
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
        {!oneSticker && col2.stickerH2 !== undefined && (
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
        )}
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
        {!oneSticker && col3.stickerH2 !== undefined && (
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
        )}
      </div>
    </div>
  );
};
export default VideosSection;
