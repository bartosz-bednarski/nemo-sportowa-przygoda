'use client';
import {StaticImageData} from 'next/image';
import styles from './videosSection.module.scss';
import StickerH2, {
  StickerH2PropsType,
} from '@/components/Ui/Headers/Stickers/StickerH2/StickerH2';

interface Column1PropsType {
  video: string;
  image: StaticImageData;
  alt: string;
  oneSticker: boolean;
  stickerH2?: StickerH2PropsType;
  id: string;
}

const Column1 = ({video, oneSticker, stickerH2, id}: Column1PropsType) => {
  if (oneSticker) {
    return (
      <div className={styles.imageBox}>
        <div className={styles.opacityCover}></div>

        <video
          id={id}
          src={`/assets/videos/${video}`}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
        ></video>
      </div>
    );
  }
  if (!oneSticker && stickerH2) {
    return (
      <div className={styles.imageBox}>
        <div className={styles.opacityCover}></div>

        <video
          id={id}
          src={`/assets/videos/${video}`}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
        ></video>

        {stickerH2.title !== '' && stickerH2.titleStrip !== '' && (
          <span className={styles.stickerBox} style={{bottom: '30%'}}>
            <StickerH2
              title={stickerH2.title}
              titleStrip={stickerH2.titleStrip}
              stripBgColor={stickerH2.stripBgColor}
              stripTextColor={stickerH2.stripTextColor}
            />
          </span>
        )}
      </div>
    );
  }
};

export default Column1;
