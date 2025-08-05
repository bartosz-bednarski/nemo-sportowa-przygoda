'use client';
import React from 'react';
import styles from './priceList.module.scss';
import PriceLessons, {
  PriceLessonsPropsType,
} from './PriceLessons/PriceLessons';

export type PriceListPropsType = PriceLessonsPropsType[];

const PriceList: React.FC<{priceList: PriceListPropsType}> = ({priceList}) => {
  return (
    <div className={styles.priceList}>
      {priceList.map((listItem) => (
        <PriceLessons
          stickerH4={listItem.stickerH4}
          oneLesson={listItem.oneLesson}
          tenLessons={listItem.tenLessons}
          key={listItem.stickerH4.titleStrip}
          button={listItem.button}
        />
      ))}
    </div>
  );
};

export default PriceList;
