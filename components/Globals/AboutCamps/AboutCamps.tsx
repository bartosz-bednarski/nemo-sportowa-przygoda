'use client';
import React from 'react';
import styles from './about.module.scss';
import StickerH2, {
  StickerH2PropsType,
} from '@/components/Ui/Headers/Stickers/StickerH2/StickerH2';
import AboutTextPoppins from '@/components/Ui/AboutTextPoppins/AboutTextPoppins';
import {COLORS} from '@/utils/UI/colors';

export interface AboutCampsPropsType {
  stickerH2: StickerH2PropsType;
  aboutLeft: string;
  right: boolean;
  aboutRight1?: string;
  aboutRight2?: string;
  theme: 'summer' | 'winter';
  imgRight: string;
  imgLeft?: string;
}

const AboutCamps = ({
  stickerH2,
  aboutLeft,
  right,
  aboutRight1,
  aboutRight2,
  theme,
  imgRight,
  imgLeft,
}: AboutCampsPropsType) => {
  return (
    <div
      className={styles.about}
      style={{
        background: theme === 'summer' ? COLORS.basicGreen : COLORS.white,
      }}
    >
      <div className={styles.rowBoxLeft}>
        <div className={styles.columnBox}>
          <StickerH2
            title={stickerH2.title}
            titleStrip={stickerH2.titleStrip}
            stripBgColor={stickerH2.stripBgColor}
            stripTextColor={stickerH2.stripTextColor}
            titleColor={stickerH2.titleColor}
          />
          <AboutTextPoppins
            title=""
            titleColor={theme === 'summer' ? 'basicGreen' : 'darkBlue'}
            description={aboutLeft}
            descriptionColor={theme === 'summer' ? 'white' : 'darkBlue'}
            alignItems="flex-start"
            textAlign="left"
          />
        </div>
        <img
          className={styles.image}
          src={`/assets/${theme}/${imgRight}`}
          width={960}
          height={500}
          alt="polkolonie letnie"
        />
      </div>
      {right && (
        <div className={styles.rowBoxRight}>
          <img
            className={styles.image}
            src={`/assets/${theme}/${imgLeft}`}
            width={960}
            height={500}
            alt="polkolonie letnie"
          />
          <div className={styles.columnBox}>
            {aboutRight1 && (
              <AboutTextPoppins
                title=""
                titleColor={theme === 'summer' ? 'basicGreen' : 'darkBlue'}
                description={aboutRight1}
                descriptionColor={theme === 'summer' ? 'white' : 'darkBlue'}
                alignItems="flex-start"
                textAlign="left"
              />
            )}

            {aboutRight2 && (
              <AboutTextPoppins
                title=""
                titleColor={theme === 'summer' ? 'basicGreen' : 'darkBlue'}
                description={aboutRight2}
                descriptionColor={theme === 'summer' ? 'white' : 'darkBlue'}
                alignItems="flex-start"
                textAlign="left"
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default AboutCamps;
