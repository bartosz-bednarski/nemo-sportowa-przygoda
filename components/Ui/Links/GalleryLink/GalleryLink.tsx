'use client';
import React from 'react';
import styles from './galleryLink.module.scss';
import Link from 'next/link';
import {customColors} from '@/types/UI/colors';
import {COLORS} from '@/utils/UI/colors';
import ScrapLeft from '@/public/assets/ui/ScrapLeft/scrapLeftBasicOrange.svg';

export interface GalleryLinkPropsType {
  href: string;
  img: string;
  bgColor: customColors;
  textColor: customColors;
}

const GalleryLink = ({href, img, bgColor}: GalleryLinkPropsType) => {
  return (
    <div className={styles.galleryLink} style={{background: COLORS[bgColor]}}>
      <Link href={href}>
        <img
          className={styles.image}
          src={img}
          width={1920}
          height={300}
          alt="galeria"
          title="galeria"
          loading="lazy"
        />
        <div className={styles.textContainer}>
          <span className={styles.textBox}>
            <span className={styles.text}>SPRAWDŹ NASZĄ GALERIĘ</span>
          </span>
          <img
            src={ScrapLeft.src}
            alt="scrapOrange"
            width={20}
            height={101}
            className={styles.scrapRight}
            loading="lazy"
          />
        </div>
      </Link>
    </div>
  );
};

export default GalleryLink;
