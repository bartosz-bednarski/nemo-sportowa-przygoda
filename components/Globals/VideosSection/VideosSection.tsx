'use client';
import 'react';
import styles from './videosSection.module.scss';
import {StickerH2PropsType} from '../../Ui/Headers/Stickers/StickerH2/StickerH2';
import StickerH1, {
  StickerH1PropsType,
} from '../../Ui/Headers/Stickers/StickerH1/StickerH1';
import Scrap2 from '../../Ui/Scrap/Scrap2';
import {customColors} from '@/types/UI/colors';
import {StaticImageData} from 'next/image';
import dynamic from 'next/dynamic';
import Logo from '@/public/assets/logo/Logo-nemo-bubble-vertical-white.svg';
export interface VideosSectionPropsType {
  scrapColor: customColors;
  col1: {
    video: {
      src: string;
      alt: string;
      image: StaticImageData;
    };
    stickerH2?: StickerH2PropsType;
  };
  col2: {
    video: {
      src: string;
      alt: string;
      image: StaticImageData;
    };
    stickerH2?: StickerH2PropsType;
  };
  col3: {
    video: {
      src: string;
      alt: string;
      image: StaticImageData;
    };
    stickerH2?: StickerH2PropsType;
  };
  oneSticker: boolean;
  oneStickerContent?: StickerH1PropsType;
  isMobile?: boolean;
}

const Column1 = dynamic(() => import('./Column1'), {
  ssr: true,
});

const Column23 = dynamic(() => import('./Column23'), {
  ssr: true,
});

const VideosSection = ({
  scrapColor,
  col1,
  col2,
  col3,
  oneSticker,
  oneStickerContent,
  isMobile,
}: VideosSectionPropsType) => {
  if (isMobile) {
    if (
      !oneSticker &&
      col1.stickerH2 !== undefined &&
      col1.stickerH2.title !== '' &&
      col1.stickerH2.titleStrip !== ''
    ) {
      return (
        <div className={styles.container}>
          <span className={styles.mobileSticker}>
            <img
              src={Logo.src}
              width={220}
              height={300}
              loading="eager"
              fetchPriority="high"
              alt="Nemo Sportowa Przygoda"
            />
            {/* <StickerH1
                title="NEMO"
                title2="SPORTOWA"
                titleStrip="PRZYGODA"
                stripBgColor="basicOrange"
                stripTextColor="white"
              /> */}
          </span>
          <Scrap2 position="bottom" color={scrapColor} />
          <Column1
            id="video1"
            video={col1.video.src}
            image={col1.video.image}
            alt={col1.video.alt}
            stickerH2={col1.stickerH2}
            oneSticker={oneSticker}
          />
        </div>
      );
    }
    if (oneSticker && oneStickerContent !== undefined) {
      return (
        <div className={styles.container}>
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
          <Scrap2 position="bottom" color={scrapColor} />
          <Column1
            id="video1"
            video={col1.video.src}
            image={col1.video.image}
            alt={col1.video.alt}
            stickerH2={col1.stickerH2}
            oneSticker={oneSticker}
          />
        </div>
      );
    }
  } else {
    if (
      !oneSticker &&
      col1.stickerH2 !== undefined &&
      col1.stickerH2.title !== '' &&
      col1.stickerH2.titleStrip !== ''
    ) {
      return (
        <div className={styles.container}>
          <span className={styles.mobileSticker}>
            <img
              src={Logo.src}
              width={220}
              height={300}
              loading="eager"
              fetchPriority="high"
              alt="Nemo Sportowa Przygoda"
            />
            {/* <StickerH1
              title="NEMO"
              title2="SPORTOWA"
              titleStrip="PRZYGODA"
              stripBgColor="basicOrange"
              stripTextColor="white"
            /> */}
          </span>
          <Scrap2 position="bottom" color={scrapColor} />
          <Column1
            id="video1"
            video={col1.video.src}
            image={col1.video.image}
            alt={col1.video.alt}
            stickerH2={col1.stickerH2}
            oneSticker={oneSticker}
          />
          <Column23
            id="video2"
            video={col2.video.src}
            image={col2.video.image}
            alt={col2.video.alt}
            stickerH2={col2.stickerH2}
            oneSticker={oneSticker}
          />
          <Column23
            id="video3"
            video={col3.video.src}
            image={col3.video.image}
            alt={col3.video.alt}
            stickerH2={col3.stickerH2}
            oneSticker={oneSticker}
          />
        </div>
      );
    }
    if (oneSticker && oneStickerContent !== undefined) {
      return (
        <div className={styles.container}>
          <span className={styles.oneStickerBox}>
            <StickerH1
              title={oneStickerContent.title}
              title2={oneStickerContent.title2}
              titleStrip={oneStickerContent.titleStrip}
              stripBgColor={oneStickerContent.stripBgColor}
              stripTextColor={oneStickerContent.stripTextColor}
            />
          </span>
          <Scrap2 position="bottom" color={scrapColor} />
          <Column1
            id="video1"
            video={col1.video.src}
            image={col1.video.image}
            alt={col1.video.alt}
            stickerH2={col1.stickerH2}
            oneSticker={oneSticker}
          />
          <Column23
            id="video2"
            video={col2.video.src}
            image={col2.video.image}
            alt={col2.video.alt}
            stickerH2={col2.stickerH2}
            oneSticker={oneSticker}
          />
          <Column23
            id="video3"
            video={col3.video.src}
            image={col3.video.image}
            alt={col3.video.alt}
            stickerH2={col3.stickerH2}
            oneSticker={oneSticker}
          />
        </div>
      );
    }
    return (
      <div className={styles.container}>
        <Scrap2 position="bottom" color={scrapColor} />
        <Column1
          id="video1"
          video={col1.video.src}
          image={col1.video.image}
          alt={col1.video.alt}
          stickerH2={col1.stickerH2}
          oneSticker={oneSticker}
        />
        <Column23
          id="video2"
          video={col2.video.src}
          image={col2.video.image}
          alt={col2.video.alt}
          stickerH2={col2.stickerH2}
          oneSticker={oneSticker}
        />
        <Column23
          id="video3"
          video={col3.video.src}
          image={col3.video.image}
          alt={col3.video.alt}
          stickerH2={col3.stickerH2}
          oneSticker={oneSticker}
        />
      </div>
    );
  }
};

export default VideosSection;
