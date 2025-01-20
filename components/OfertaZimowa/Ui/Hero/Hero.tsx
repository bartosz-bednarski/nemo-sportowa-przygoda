'use client';
import React from 'react';
import styles from './hero.module.scss';
import Scrap2 from '@/components/Ui/Scrap/Scrap2';

export interface HeroPropsType{
  pc: string;
  mobile: string;
}

const Hero: React.FC<{hero: HeroPropsType}> = ({hero}) => {
  return (
    <div className={styles.hero}>
      <img
        className={styles.image}
        src={`/assets/winter/${hero.pc}.webp`}
        width={1920}
        height={1080}
        alt="aktywna zima bobowa"
      />
      <img
        className={styles.imageMobile}
        src={`/assets/winter/${hero.mobile}.webp`}
        width={1242}
        height={2208}
        alt="aktywna zima bobowa"
      />
      <Scrap2 position="bottom" color="white" />
    </div>
  );
};

export default Hero;
