'use client';
import React from 'react';
import styles from './accommodation.module.scss';
import Link from 'next/link';
import AccommodationImg from '@/public/assets/winter/zakwaterowanie/accommodation-basic.svg';
import StickerH2 from '@/components/Ui/Headers/Stickers/StickerH2/StickerH2';

export interface AccommodationPropsType {
  about: string;
  list: string[];
  image: string;
  href: string;
}

const Accommodation: React.FC<{
  accommodation: AccommodationPropsType;
}> = ({accommodation}) => {
  return (
    <div className={styles.accommodation}>
      <div className={styles.rowBox}>
        <div className={styles.content}>
          <StickerH2
            titleStrip="ZAKWATEROWANIE"
            title=""
            stripTextColor="white"
            stripBgColor="darkBlue"
          />
          <span className={styles.text}>{accommodation.about}</span>

          <ul className={styles.list}>
            <span className={styles.text}>Ośrodek w pigułce:</span>
            {accommodation.list.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <img
          src={AccommodationImg.src}
          alt="housesAndTrees"
          className={styles.svgImage}
        />
      </div>
      <Link className={styles.imageBox} href={accommodation.href}>
        <img
          className={styles.image}
          src={`/assets/winter/zakwaterowanie/${accommodation.image}.webp`}
          width={1920}
          height={300}
          alt={accommodation.image}
          title={accommodation.image}
        />
        <span className={styles.button}>Sprawdź stronę ośrodka</span>
      </Link>
    </div>
  );
};

export default Accommodation;
