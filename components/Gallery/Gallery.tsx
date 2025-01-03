'use client';
import React from 'react';
import styles from './gallery.module.scss';
import {GALLERY_MAIN} from '@/utils/Gallery/Gallery';
import GalleryHero from './GalleryHero/GalleryHero';
import GalleryLinkPhoto from './GalleryLinkPhoto/GalleryLinkPhoto';

const Gallery = () => {
  return (
    <div className={styles.gallery}>
      <GalleryHero />
      <div className={styles['gallery__row-box']}>
        {GALLERY_MAIN.map((item) => (
          <GalleryLinkPhoto item={item} key={item.title}/>
        ))}
      </div>
    </div>
  );
};
export default Gallery;
