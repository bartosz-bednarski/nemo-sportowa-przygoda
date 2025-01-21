'use client';
import React from 'react';
import styles from './priceLessons.module.scss';
import StickerH4, {
  StickerH4PropsType,
} from '@/components/Ui/Stickers/StickerH4/StickerH4';
import SingInButton from '@/components/Ui/Buttons/SignInButton';
import {signInButtonType} from '@/types/UI/buttons';

export interface PriceLessonsPropsType {
  stickerH4: StickerH4PropsType;
  oneLesson: {
    price: string;
    time: number;
  };
  tenLessons?: {
    price: string;
    time: string;
  };
  button: signInButtonType;
}

const PriceLessons = ({
  stickerH4,
  oneLesson,
  tenLessons,
  button,
}: PriceLessonsPropsType) => {
  return (
    <div className={styles.priceLessons}>
      <StickerH4
        stripTextColor={stickerH4.stripTextColor}
        stripBgColor={stickerH4.stripBgColor}
        title={stickerH4.title}
        titleStrip={stickerH4.titleStrip}
      />
      <div className={styles.contentBox}>
        <span className={styles.orange}>1 LEKCJA</span>
        <span>{oneLesson.price} </span>
        <span>{oneLesson.time} min</span>
      </div>
      {tenLessons && (
        <div className={styles.contentBox}>
          <span className={styles.orange}>10 LEKCJI</span>
          <span>{tenLessons.price} </span>
          <span>{tenLessons.time} min</span>
        </div>
      )}

      <SingInButton
        title={button.title}
        textColor={button.textColor}
        bgColor={button.bgColor}
        href={button.href}
      />
    </div>
  );
};

export default PriceLessons;
