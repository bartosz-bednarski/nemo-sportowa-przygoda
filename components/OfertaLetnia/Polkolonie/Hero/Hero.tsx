'use client';
import {StaticImageData} from 'next/image';
import styles from './hero.module.scss';
export interface HeroPropsType {
  logo: StaticImageData;
  images: {
    landscape: StaticImageData;
    portrait: StaticImageData;
  };
  sticker: {
    firstLine: string;
    secondLine: string;
  };
  location: string;
  dateRange: string;
}

const Hero = ({images, sticker, location, dateRange, logo}: HeroPropsType) => {
  return (
    <div className={styles.container}>
      <div className={styles.sticker}>
        <span className={styles.firstLine}>{sticker.firstLine}</span>
        <span className={styles.secondLine}>{sticker.secondLine}</span>
      </div>
      <div className={styles.columnBox}>
        <img
          className={styles.landscapeImage}
          src={images.landscape.src}
          alt={'polkolonia-' + location}
          title={'polkolonia-' + location}
        />
        <div className={styles.detailsBox}>
          <span className={styles.title}>{sticker.firstLine}</span>
          <span className={styles.subTitle}>{sticker.secondLine}</span>
          <h1>{location}</h1>
          <h2>{dateRange}</h2>
          <img className={styles.logo} src={logo.src} />
        </div>
      </div>
      <img
        className={styles.portraitImage}
        src={images.portrait.src}
        alt={'polkolonia-' + location}
        title={'polkolonia-' + location}
      />
    </div>
  );
};

export default Hero;
