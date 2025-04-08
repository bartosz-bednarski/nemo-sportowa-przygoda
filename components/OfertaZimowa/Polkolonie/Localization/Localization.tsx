'use client';
import React from 'react';
import styles from './localization.module.scss';
import LocalizationImg from '@/public/assets/winter/zakwaterowanie/accommodation-basic.svg';
import StickerH2 from '@/components/Ui/Headers/Stickers/StickerH2/StickerH2';

export interface LocalizationPropsType {
  localizationDescription: string[];
}

const Localization: React.FC<{localization: LocalizationPropsType}> = ({
  localization,
}) => {
  return (
    <div className={styles.localization}>
      <div className={styles.content}>
        <StickerH2
          titleStrip="LOKALIZACJA"
          title=""
          stripTextColor="white"
          stripBgColor="darkBlue"
        />
        {localization.localizationDescription.map((text, index) => (
          <span className={styles.text} key={index}>
            {text}
          </span>
        ))}
      </div>
      <img
        src={LocalizationImg.src}
        alt="housesWithTrees"
        className={styles.image}
      />
    </div>
  );
};
export default Localization;
