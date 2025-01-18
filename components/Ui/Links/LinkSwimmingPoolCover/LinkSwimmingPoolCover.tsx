'use client';
import React from 'react';
import styles from './linkSwimmingPoolCover.module.scss';
import {StaticImageData} from 'next/image';
import Link from 'next/link';
import StripLRImg from '@/public/assets/ui/Strips/stripScrapLRBasicOrange.svg';

export interface LinkSwimmingPoolCoverPropsType {
  image: StaticImageData;
  title: string;
  url: string;
}

const LinkSwimmingPoolCover = ({
  image,
  title,
  url,
}: LinkSwimmingPoolCoverPropsType) => {
  return (
    <Link href={url} className={styles.container}>
      <div className={styles.hoverBox}></div>
      <div className={styles.imageBox}>
        <img
          className={styles.image}
          src={image.src}
          alt={title}
          style={{borderTopLeftRadius: 30, borderTopRightRadius: 30}}
        />
      </div>
      <span className={styles.h3Box}>
        <img src={StripLRImg.src} alt="orangeStrip" />

        <h3>{title}</h3>
      </span>
    </Link>
  );
};
export default LinkSwimmingPoolCover;
