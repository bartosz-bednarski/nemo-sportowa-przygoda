'use client';
import React from 'react';
import styles from './about.module.scss';
import StickerH2 from '@/components/Ui/Stickers/StickerH2/StickerH2';
import AboutTextPoppins from '@/components/Ui/AboutTextPoppins/AboutTextPoppins';
import {aboutCampsComponentType} from '@/types/Globals/globals';
import {COLORS} from '@/utils/UI/colors';

const AboutCamps: React.FC<aboutCampsComponentType> = ({
  stickerH2,
  aboutLeft,
  right,
  aboutRight1,
  aboutRight2,
  theme,
  imgRight,
  imgLeft,
}) => {
  return (
    <div
      className={styles.about}
      style={{
        background: theme === 'summer' ? COLORS.basicGreen : COLORS.white,
      }}
    >
      <div className={styles['about__row-box-left']}>
        <div className={styles['about__row-box-left__column']}>
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
          className={styles['about__row-box-left__picture']}
          src={`/assets/${theme}/${imgRight}`}
          width={960}
          height={500}
          alt="polkolonie letnie"
        />
      </div>
      {right && (
        <div className={styles['about__row-box-right']}>
          <img
            className={styles['about__row-box-right__picture']}
            src={`/assets/${theme}/${imgLeft}`}
            width={960}
            height={500}
            alt="polkolonie letnie"
          />
          <div className={styles['about__row-box-right__column']}>
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
