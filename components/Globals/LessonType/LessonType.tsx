'use client';
import React from 'react';
import styles from './lessonType.module.scss';
import Image from 'next/image';
import StickerH4 from '@/components/Ui/StickerH4/StickerH4';
import {COLORS} from '@/utils/UI/colors';
import AboutTextPoppins from '@/components/Ui/AboutTextPoppins/AboutTextPoppins';
// import Scrap2 from "@/components/Ui/Scrap/Scrap2";
import {lessonTypeComponent} from '@/types/Globals/globals';

const LessonType: React.FC<lessonTypeComponent> = ({bgColor, lessonType}) => {
  return (
    <div className={styles.lessonType} style={{background: COLORS[bgColor]}}>
      <div
        className={styles['lessonType__opacity']}
        style={{background: COLORS[bgColor]}}
      ></div>
      <Image
        src={`/assets/swimming/lessonsTypes/${lessonType.img}`}
        fill={true}
        alt="lekcja"
        objectFit="cover"
        objectPosition="center"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      <div className={styles['lessonType__content']}>
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
      {/* <Scrap2 position="bottom" color={bgColor} /> */}
    </div>
  );
};

export default LessonType;
