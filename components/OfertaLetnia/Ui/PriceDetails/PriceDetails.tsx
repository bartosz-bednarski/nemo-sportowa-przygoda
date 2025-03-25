'use client';
import React from 'react';
import styles from './priceDetails.module.scss';
import StickerH2 from '@/components/Ui/Stickers/StickerH2/StickerH2';
import NemoHeisenbergLogo from '@/public/assets/customLogos/nemo-heisenberg.svg';

export interface PriceDetailsPropsType {
  priceDetailsList: string[];
}

const PriceDetails = ({priceDetailsList}: PriceDetailsPropsType) => {
  return (
    <div className={styles.priceDetails}>
      <div className={styles.contentBox}>
        <StickerH2
          title="CO ZAWIERA"
          titleStrip="CENA ?"
          titleColor="white"
          stripBgColor="basicOrange"
          stripTextColor="white"
        />
        <div className={styles.listBox}>
          {priceDetailsList.map((listItem, index) => (
            <span className={styles.item} key={index}>
              {listItem}
            </span>
          ))}
        </div>
      </div>
      <img
        src={NemoHeisenbergLogo.src}
        alt="nemoLogo"
        className={styles.image}
      />
    </div>
  );
};

export default PriceDetails;
