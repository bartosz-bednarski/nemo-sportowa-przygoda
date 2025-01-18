'use client';
import React from 'react';
import styles from './hero.module.scss';
import StickerH1 from '@/components/Ui/Stickers/StickerH1/StickerH1';

const HeroTeam: React.FC = () => {
  return (
    <div className={styles.hero}>
      <img
        src="/assets/instructors/hero.webp"
        width={1920}
        height={1080}
        className={styles.image}
        alt="basen akcesoria"
      />
      <span className={styles['hero__sticker-box']}>
        <StickerH1
          title="POZNAJ"
          title2="NASZ"
          titleStrip="ZESPÓŁ"
          stripBgColor="darkBlue"
          stripTextColor="white"
        />
      </span>
    </div>
  );
};
export default HeroTeam;
