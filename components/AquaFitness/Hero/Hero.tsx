'use client';
import StickerH1 from '@/components/Ui/Headers/Stickers/StickerH1/StickerH1';
import styles from './hero.module.scss';
import HeroImg from '@/public/assets/aquaFitness/hero.webp';
import VideoThumbail from '@/public/assets/videos/aqua-fitness-mix.webp';
import {useEffect, useState} from 'react';
const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [video, setVideo] = useState('');
  const getVideoAPI = async () => {
    const response = await fetch(`/api/video?id=aqua-fitness-mix.mp4`);
    const blob = await response.blob();
    const url = URL.createObjectURL(blob);
    setVideo(url);
  };
  useEffect(() => {
    const mobile = window.innerWidth <= 900;
    setIsMobile(mobile);
    if (mobile) {
      getVideoAPI();
    }
  }, []);
  if (isMobile) {
    return (
      <div className={styles.container}>
        {video === '' && (
          <img
            className={styles.videoImg}
            src={VideoThumbail.src}
            alt="aquaFitness"
            title="aquaFitness"
            loading="eager"
            width={600}
            height={1920}
          />
        )}
        {video !== '' && (
          <video
            className={styles.videoImg}
            src={video}
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
          ></video>
        )}
        <span className={styles.stickerBox}>
          <StickerH1
            title="ZAJĘCIA"
            title2="AQUA"
            titleStrip="FITNESS"
            stripTextColor="white"
            stripBgColor="darkBlue"
          />
        </span>
      </div>
    );
  }
  return (
    <div className={styles.container}>
      <img
        className={styles.heroImg}
        src={HeroImg.src}
        alt="aquaFitness"
        title="aquaFitness"
        loading="eager"
        width={600}
        height={1920}
      />
      <img
        className={styles.videoImg}
        src={VideoThumbail.src}
        alt="aquaFitness"
        title="aquaFitness"
        loading="eager"
        width={600}
        height={1920}
      />
      <span className={styles.stickerBox}>
        <StickerH1
          title="ZAJĘCIA"
          title2="AQUA"
          titleStrip="FITNESS"
          stripTextColor="white"
          stripBgColor="darkBlue"
        />
      </span>
    </div>
  );
};

export default Hero;
