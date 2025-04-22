'use client';
import React from 'react';
import styles from './lessonType.module.scss';
import StickerH4, {
  StickerH4PropsType,
} from '@/components/Ui/Headers/Stickers/StickerH4/StickerH4';
import {COLORS} from '@/utils/UI/colors';
import AboutTextPoppins, {
  AboutTextPoppinsPropsType,
} from '@/components/Ui/AboutTextPoppins/AboutTextPoppins';
import {customColors} from '@/types/UI/colors';

export type LessonType = {
  img: string;
  stickerH4: StickerH4PropsType;
  aboutTextPoppins: AboutTextPoppinsPropsType;
};

export interface LessonTypePropsType {
  bgColor: customColors;
  lessonType: LessonType;
}

const LessonType = ({bgColor, lessonType}: LessonTypePropsType) => {
  return (
    <div className={styles.lessonType} style={{background: COLORS[bgColor]}}>
      <div
        className={styles.opacity}
        style={{background: COLORS[bgColor]}}
      ></div>
      <img
        src={`/assets/swimming/lessonsTypes/${lessonType.img}`}
        className={styles.image}
        alt="lekcja"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      <div className={styles.content}>
        <StickerH4
          title={lessonType.stickerH4.title}
          titleStrip={lessonType.stickerH4.titleStrip}
          stripBgColor={lessonType.stickerH4.stripBgColor}
          stripTextColor={lessonType.stickerH4.stripTextColor}
        />
        <AboutTextPoppins
          title={lessonType.aboutTextPoppins.title}
          titleColor={lessonType.aboutTextPoppins.titleColor}
          description={lessonType.aboutTextPoppins.description}
          textAlign="left"
          alignItems="flex-start"
        />
      </div>
    </div>
  );
};

export default LessonType;
