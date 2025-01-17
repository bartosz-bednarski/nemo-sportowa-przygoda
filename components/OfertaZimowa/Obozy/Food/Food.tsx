'use client';
import React from 'react';
import styles from './food.module.scss';
import StripH2 from '@/components/Ui/Strips/StripH2/StripH2';
import NemoCookImg from '@/public/assets/customLogos/nemo-cook.svg'
import Image from 'next/image';

export interface FoodPropsType {
  foodAbout: string;
  foodList?: string[];
}

const Food: React.FC<{food: FoodPropsType}> = ({food}) => {
  return (
    <div className={styles.food}>
      <div className={styles.content}>
        <StripH2
          type="h2"
          title="WYŻYWIENIE"
          stripTextColor="white"
          stripBgColor="darkBlue"
        />

        <span className={styles.text}>{food.foodAbout}</span>
      </div>
      <Image src={NemoCookImg} alt='nemo cook' className={styles.image}/>
      
    </div>
  );
};
export default Food;
