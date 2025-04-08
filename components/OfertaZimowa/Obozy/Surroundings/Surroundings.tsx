'use client';
import React from 'react';
import styles from './surroundings.module.scss';
import SurroundingsImg from '@/public/assets/winter/zakwaterowanie/accommodation-basic.svg';
import StickerH2 from '@/components/Ui/Headers/Stickers/StickerH2/StickerH2';

export interface SurroundingsPropsType {
  about: string;
  about2?: string;
  list?: {
    title: string;
    list: string[];
  };
}

const Surroundings: React.FC<{
  surroundings: SurroundingsPropsType;
}> = ({surroundings}) => {
  return (
    <div className={styles.surroundings}>
      <div className={styles.content}>
        <StickerH2
          titleStrip="OKOLICA"
          title=""
          stripBgColor="darkBlue"
          stripTextColor="white"
        />
        <span className={styles.text}>{surroundings.about}</span>
        {surroundings.list !== undefined && (
          <ul className={styles.list}>
            <span className={styles.text} style={{margin: 0}}>
              {surroundings.list.title}
            </span>
            {surroundings.list?.list.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}

        {surroundings.about2 !== undefined && (
          <span className={styles.text}>{surroundings.about2}</span>
        )}
      </div>
      <img
        src={SurroundingsImg.src}
        alt="housesWithTrees"
        className={styles.image}
      />
    </div>
  );
};

export default Surroundings;
