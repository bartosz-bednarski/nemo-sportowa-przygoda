'use client';
import React from 'react';
import styles from './lessonTypeWrapBox.module.scss';
import StickerH4 from '@/components/Ui/StickerH4/StickerH4';
import {COLORS} from '@/utils/UI/colors';
import AboutTextPoppins from '@/components/Ui/AboutTextPoppins/AboutTextPoppins';
import Scrap2 from '@/components/Ui/Scrap/Scrap2';
import {lessonTypeWrapBoxType} from '@/types/Globals/globals';

const LessonTypeWrapBox: React.FC<lessonTypeWrapBoxType> = ({
  bgColor,
  lessonTypes,
}) => {
  return (
    <div className={styles.lessonType} style={{background: COLORS[bgColor]}}>
      <div
        className={styles['lessonType__opacity']}
        style={{background: COLORS[bgColor]}}
      ></div>
      {lessonTypes.map((lessonType, index) => (
        <div className={styles['lessonType__content']} key={index}>
          <StickerH4
            title={lessonType.stickerH4.title}
            titleStrip={lessonType.stickerH4.titleStrip}
            stripBgColor={lessonType.stickerH4.stripBgColor}
            stripTextColor={lessonType.stickerH4.stripTextColor}
            scale={lessonType.stickerH4.scale}
            paddingBottom={lessonType.stickerH4.paddingBottom}
          />
          <AboutTextPoppins
            title={lessonType.aboutTextPoppins.title}
            titleColor={lessonType.aboutTextPoppins.titleColor}
            description={lessonType.aboutTextPoppins.description}
          />
        </div>
      ))}

      <Scrap2 position="bottom" color={bgColor} />
    </div>
  );
};

export default LessonTypeWrapBox;
