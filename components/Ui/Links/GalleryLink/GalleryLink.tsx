'use client';
import React from 'react';
import styles from './galleryLink.module.scss';
import Link from 'next/link';
import {customColors} from '@/types/UI/colors';
import {COLORS} from '@/utils/UI/colors';

export interface GalleryLinkPropsType {
  href: string;
  img: string;
  bgColor: customColors;
  textColor: customColors;
}

const GalleryLink = ({href, img, bgColor, textColor}: GalleryLinkPropsType) => {
  return (
    <Link
      href={href}
      className={styles.galleryLink}
      style={{background: `${COLORS[bgColor]} !important`}}
    >
      <img
        className={styles.image}
        src={img}
        width={1920}
        height={300}
        alt="galeria"
        title="galeria"
        loading="lazy"
      />
      <span className={styles.text} style={{color: COLORS[textColor]}}>
        SPRAWDŹ NASZĄ
        <br /> GALERIĘ
      </span>
    </Link>
  );
};

export default GalleryLink;
