'use client';
import React from 'react';
import styles from './temporaryLinkSwimmingPoolCover.module.scss';
import {StaticImageData} from 'next/image';
import StripLRImg from '@/public/assets/ui/Strips/stripScrapLRBasicOrange.svg';

export interface TemporarylinkSwimmingPoolCoverPropsType {
  image: StaticImageData;
  title: string;
}

const TemporarylinkSwimmingPoolCover = ({
  image,
  title,
}: TemporarylinkSwimmingPoolCoverPropsType) => {
  return (
    <div className={styles.container}>
      <div className={styles.hoverBox}>
        <span className={styles.text}>
          Skontaktuj się z naszym biurem:
          <br />
          +48 519 625 894
        </span>
      </div>
      <div className={styles.imageBox}>
        <img
          className={styles.image}
          src={image.src}
          alt={title}
        />
      </div>
      <span className={styles.h4Box}>
        <img src={StripLRImg.src} alt="orangeStrip" />

        <h4>{title}</h4>
      </span>
    </div>
  );
};

export default TemporarylinkSwimmingPoolCover;
