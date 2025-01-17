'use client';
import React from 'react';
import styles from './hillSides.module.scss';
import StickerH2 from '@/components/Ui/Stickers/StickerH2/StickerH2';
import Image from 'next/image';

export interface HillSidesPropsType {
  title1: string;
  title2: string;
  list: {
    title: string;
    image: string;
    listAbout: string[];
  }[];
}

const HillSides: React.FC<{hillSides: HillSidesPropsType}> = ({hillSides}) => {
  return (
    <div className={styles.hillSides}>
      <span className={styles.header}>
        <StickerH2
          title="OPISY"
          titleStrip="STOKÓW"
          titleColor="darkBlue"
          stripBgColor="darkBlue"
          stripTextColor="white"
        />
      </span>
      <div className={styles.list}>
        {hillSides.list.map((item, index) => (
          <div className={styles.rowBox} key={index}>
            <div className={styles.content}>
              <span className={styles.contentHeader}>{item.title}</span>
              <ul className={styles.contentList}>
                {item.listAbout.map((listItem, index) => (
                  <li key={`listItem-${index}`}>{listItem}</li>
                ))}
              </ul>
            </div>
            <Image
              className={styles.image}
              src={`/assets/winter/stoki/${item.image}.webp`}
              width={960}
              height={366}
              alt={item.image}
              title={item.image}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HillSides;
