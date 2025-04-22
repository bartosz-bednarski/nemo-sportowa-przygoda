'use client';
import React from 'react';
import styles from './food.module.scss';
import NemoCookImg from '@/public/assets/customLogos/nemo-cook.svg';
import StickerH2 from '@/components/Ui/Headers/Stickers/StickerH2/StickerH2';

export interface FoodPropsType {
  foodAbout: string;
  foodList?: string[];
}

const Food: React.FC<{food: FoodPropsType}> = ({food}) => {
  return (
    <div className={styles.food}>
      <div className={styles.content}>
        <StickerH2
          titleStrip="WYŻYWIENIE"
          title=""
          stripTextColor="white"
          stripBgColor="darkBlue"
        />

        <span className={styles.text}>{food.foodAbout}</span>
      </div>
      <img src={NemoCookImg.src} alt="nemoLogo" className={styles.logo} />
    </div>
  );
};

export default Food;
