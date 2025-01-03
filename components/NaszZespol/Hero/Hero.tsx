'use client';
import React from 'react';
import styles from './hero.module.scss';
import Image from 'next/image';
import StickerH1 from '@/components/Ui/StickerH1/StickerH1';

const HeroTeam: React.FC = () => {
  return (
    <div className={styles.hero}>
      <Image
        src="/assets/instructors/hero.webp"
        width={1920}
        height={1080}
        objectFit="cover"
        objectPosition="bottom"
        alt="basen akcesoria"
      />
      <span className={styles['hero__sticker-box']}>
        <StickerH1
          title="POZNAJ"
          title2="NASZ"
          titleStrip="ZESPÓŁ"
          stripBgColor="darkBlue"
          stripTextColor="white"
          scale={1.4}
        />
      </span>
    </div>
  );
};
export default HeroTeam;
