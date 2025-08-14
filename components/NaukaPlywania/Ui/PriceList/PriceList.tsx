'use client';
import React, {useState} from 'react';
import styles from './priceList.module.scss';
import PriceLessons, {PriceLessonsPropsType} from './PriceLessons/PriceLessons';

export type PriceListPropsType = PriceLessonsPropsType[];

const PriceList: React.FC<{priceList: PriceListPropsType}> = ({priceList}) => {
  const [showLessonDescription, setShowLessonDescription] = useState<
    null | string
  >(null);

  const showDescriptionHandler = (id: string | null) => {
    setShowLessonDescription(id);
  };
  return (
    <div className={styles.priceList}>
      {priceList.map((listItem) => (
        <PriceLessons
          stickerH4={listItem.stickerH4}
          oneLesson={listItem.oneLesson}
          tenLessons={listItem.tenLessons}
          id={listItem.stickerH4.titleStrip}
          key={listItem.stickerH4.titleStrip}
          button={listItem.button}
          onShowDescription={showDescriptionHandler}
          showLessonId={showLessonDescription}
        />
      ))}
    </div>
  );
};

export default PriceList;
