'use client';
import 'react';
import styles from './videosSection.module.scss';
import {StickerH2PropsType} from '../../Ui/Headers/Stickers/StickerH2/StickerH2';
import StickerH1, {
  StickerH1PropsType,
} from '../../Ui/Headers/Stickers/StickerH1/StickerH1';
import Scrap2 from '../../Ui/Scrap/Scrap2';
import {customColors} from '@/types/UI/colors';
import {useEffect, useState} from 'react';
import {StaticImageData} from 'next/image';
import Column1 from './Column1';
import Column23 from './Column23';

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
}

const VideosSection = ({
  scrapColor,
  col1,
  col2,
  col3,
  oneSticker,
  oneStickerContent,
}: VideosSectionPropsType) => {
  const [videos, setVideos] = useState({
    col1: {
      video: '',
    },
    col2: {
      video: '',
    },
    col3: {
      video: '',
    },
  });
  const [isMobile, setIsMobile] = useState(false);

  const getVideo1API = async () => {
    const response = await fetch(`/api/video?id=${col1.video.src}`);
    const blob = await response.blob();
    const url = URL.createObjectURL(blob);
    setVideos((prevState) => ({...prevState, col1: {video: url}}));
  };
  const getVideo2API = async () => {
    const response = await fetch(`/api/video?id=${col2.video.src}`);
    const blob = await response.blob();
    const url = URL.createObjectURL(blob);
    setVideos((prevState) => ({...prevState, col2: {video: url}}));
  };
  const getVideo3API = async () => {
    const response = await fetch(`/api/video?id=${col3.video.src}`);
    const blob = await response.blob();
    const url = URL.createObjectURL(blob);
    setVideos((prevState) => ({...prevState, col3: {video: url}}));
  };
  useEffect(() => {
    const mobile = window.innerWidth <= 900;
    setIsMobile(mobile);
    if (mobile) {
      getVideo1API();
    }
    if (!mobile) {
      getVideo1API();
      getVideo2API();
      getVideo3API();
    }
  }, [col1.video, col2.video, col3.video]);

  if (isMobile) {
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
        <Column1
          id="video1"
          video={videos.col1.video}
          image={col1.video.image}
          alt={col1.video.alt}
          stickerH2={col1.stickerH2}
          oneSticker={oneSticker}
        />
      </div>
    );
  }

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
      <Column1
        id="video1"
        video={videos.col1.video}
        image={col1.video.image}
        alt={col1.video.alt}
        stickerH2={col1.stickerH2}
        oneSticker={oneSticker}
      />
      <Column23
        id="video2"
        video={videos.col2.video}
        image={col2.video.image}
        alt={col2.video.alt}
        stickerH2={col2.stickerH2}
        oneSticker={oneSticker}
      />
      <Column23
        id="video3"
        video={videos.col3.video}
        image={col3.video.image}
        alt={col3.video.alt}
        stickerH2={col3.stickerH2}
        oneSticker={oneSticker}
      />
    </div>
  );
};

export default VideosSection;
