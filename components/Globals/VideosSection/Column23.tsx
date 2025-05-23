'use client';
import {StaticImageData} from 'next/image';
import styles from './videosSection.module.scss';
import StickerH2, {
  StickerH2PropsType,
} from '@/components/Ui/Headers/Stickers/StickerH2/StickerH2';

interface Column23PropsType {
  video: string;
  image: StaticImageData;
  alt: string;
  oneSticker: boolean;
  stickerH2?: StickerH2PropsType;
  id: string;
}

const Column23 = ({
  video,
  image,
  alt,
  oneSticker,
  stickerH2,
  id,
}: Column23PropsType) => {
  if (oneSticker) {
    return (
      <div className={styles.imageBoxCol23}>
        <div className={styles.opacityCover}></div>
        {video === '' && (
          <img
            src={image.src}
            alt={alt}
            loading="eager"
            width={600}
            height={1920}
          />
        )}
        {video !== '' && (
          <video
            id={id}
            src={video}
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
          ></video>
        )}
      </div>
    );
  }
  if (!oneSticker && stickerH2) {
    return (
      <div className={styles.imageBoxCol23}>
        <div className={styles.opacityCover}></div>
        {video === '' && (
          <img
            src={image.src}
            alt={alt}
            loading="eager"
            width={600}
            height={1920}
          />
        )}
        {video !== '' && (
          <video
            id={id}
            src={video}
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
          ></video>
        )}

        <span className={styles.stickerBox} style={{bottom: '30%'}}>
          <StickerH2
            title={stickerH2.title}
            titleStrip={stickerH2.titleStrip}
            stripBgColor={stickerH2.stripBgColor}
            stripTextColor={stickerH2.stripTextColor}
          />
        </span>
      </div>
    );
  }
};

export default Column23;
