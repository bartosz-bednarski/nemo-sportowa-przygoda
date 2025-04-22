'use client';
import React from 'react';
import styles from './lessonTypeWrapBox.module.scss';
import StickerH4 from '@/components/Ui/Headers/Stickers/StickerH4/StickerH4';
import {COLORS} from '@/utils/UI/colors';
import AboutTextPoppins from '@/components/Ui/AboutTextPoppins/AboutTextPoppins';
import Scrap2 from '@/components/Ui/Scrap/Scrap2';
import {LessonType} from '../LessonType/LessonType';
import {customColors} from '@/types/UI/colors';

export interface LessonTypeWrapBoxPropsType {
  bgImage: string;
  bgColor: customColors;
  lessonTypes: LessonType[];
}

const LessonTypeWrapBox = ({
  bgColor,
  lessonTypes,
}: LessonTypeWrapBoxPropsType) => {
  return (
    <div className={styles.lessonType} style={{background: COLORS[bgColor]}}>
      <div
        className={styles.opacity}
        style={{background: COLORS[bgColor]}}
      ></div>
      {lessonTypes.map((lessonType, index) => (
        <div className={styles.content} key={index}>
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
            textAlign="center"
            alignItems="center"
          />
        </div>
      ))}

      <Scrap2 position="bottom" color={bgColor} />
    </div>
  );
};

export default LessonTypeWrapBox;
