'use client';
import 'react';
import styles from './videosSection.module.scss';
import StickerH2, { StickerH2PropsType } from '../Ui/Stickers/StickerH2/StickerH2';
import StickerH1, { StickerH1PropsType } from '../Ui/Stickers/StickerH1/StickerH1';
import Scrap2 from '../Ui/Scrap/Scrap2';
import { customColors } from '@/types/UI/colors';

export interface VideosSectionPropsType{
  scrapColor: customColors;
    col1: {
        video: {
            src: string;
            alt: string;
        };
        stickerH2?: StickerH2PropsType;
    };
    col2: {
        video: {
            src: string;
            alt: string;
        };
        stickerH2?: StickerH2PropsType;
    };
    col3: {
        video: {
            src: string;
            alt: string;
        };
        stickerH2?: StickerH2PropsType;
    };
    oneSticker: boolean;
    oneStickerContent?: StickerH1PropsType;
}

const VideosSection= ({
  scrapColor,
  col1,
  col2,
  col3,
  oneSticker,
  oneStickerContent,
}:VideosSectionPropsType) => {

  return (
    <div className={styles.container}>
      {!oneSticker && col1.stickerH2 !== undefined && (
        <span className={styles.mobileSticker}>
          <StickerH1
            title="NEMO"
            title2="SPORTOWA"
            titleStrip="PRZYGODA"
            stripBgColor="basicOrange"
            stripTextColor="white"
          />
        </span>
      )}
      {oneSticker && oneStickerContent !== undefined && (
        <span className={styles.oneStickerBox}>
          {' '}
          <StickerH1
            title={oneStickerContent.title}
            title2={oneStickerContent.title2}
            titleStrip={oneStickerContent.titleStrip}
            stripBgColor={oneStickerContent.stripBgColor}
            stripTextColor={oneStickerContent.stripTextColor}
          />
        </span>
      )}

      <Scrap2 position="bottom" color={scrapColor} />
      <div className={styles.imageBox}>
        <div className={styles.opacityCover}></div>

        <video
          src={`/assets/videos/${col1.video.src}`}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
        ></video>

        {!oneSticker && col1.stickerH2 !== undefined && (
          <span
            className={styles.stickerBox}
            style={{bottom: '30%'}}
          >
            <StickerH2
              title={col1.stickerH2.title}
              titleStrip={col1.stickerH2.titleStrip}
              stripBgColor={col1.stickerH2.stripBgColor}
              stripTextColor={col1.stickerH2.stripTextColor}
            />
          </span>
        )}
      </div>
      <div className={styles.imageBox}>
        <div className={styles.opacityCover}></div>
       
        <video
          src={`/assets/videos/${col2.video.src}`}
          autoPlay
          loop
          muted
          playsInline
        ></video>
        {!oneSticker && col2.stickerH2 !== undefined && (
          <span
            className={styles.stickerBox}
            style={{bottom: '25%'}}
          >
            <StickerH2
              title={col2.stickerH2.title}
              titleStrip={col2.stickerH2.titleStrip}
              stripBgColor={col2.stickerH2.stripBgColor}
              stripTextColor={col2.stickerH2.stripTextColor}
            />
          </span>
        )}
      </div>
      <div className={styles.imageBox}>
        <div className={styles.opacityCover}></div>
     
        <video
          src={`/assets/videos/${col3.video.src}`}
          autoPlay
          loop
          muted
          playsInline
        ></video>
        {!oneSticker && col3.stickerH2 !== undefined && (
          <span
            className={styles.stickerBox}
            style={{bottom: '35%'}}
          >
            <StickerH2
              title={col3.stickerH2.title}
              titleStrip={col3.stickerH2.titleStrip}
              stripBgColor={col3.stickerH2.stripBgColor}
              stripTextColor={col3.stickerH2.stripTextColor}
            />
          </span>
        )}
      </div>
    </div>
  );
};

export default VideosSection;
