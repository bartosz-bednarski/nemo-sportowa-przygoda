'use client';
import React from 'react';
import styles from './about.module.scss';
import {COLORS} from '@/utils/UI/colors';
import {StaticImageData} from 'next/image';

export interface AboutCampsPropsType {
  h2: string;
  section1About: string[];
  section2About: string[];
  theme: 'summer' | 'winter';
  section1Img: StaticImageData;
  section2Img: StaticImageData | null;
}

const AboutCamps = ({
  h2,
  section1About,
  section2About,
  theme,
  section1Img,
  section2Img,
}: AboutCampsPropsType) => {
  const h2Styles =
    theme === 'summer' ? styles.h2StripSummer : styles.h2StripWinter;
  const paragraphStyles =
    theme === 'summer'
      ? `${styles.paragraphStrip} ${styles.paragraphStripWhite}`
      : `${styles.paragraphStrip} ${styles.paragraphStripBlue}`;
  const paragraphOrangeStyles = `${styles.paragraphStrip} ${styles.paragraphStripOrange}`;
  return (
    <div
      className={styles.container}
      style={{
        background: theme === 'summer' ? COLORS.basicGreen : COLORS.white,
      }}
    >
      <h2 className={h2Styles}>{h2}</h2>
      <div className={styles.rowContainer}>
        <div className={styles.columnBox}>
          {section1About.map((paragraph, index) => (
            <p
              key={index}
              className={index === 0 ? paragraphOrangeStyles : paragraphStyles}
            >
              {paragraph}
            </p>
          ))}
        </div>
        <img
          src={section1Img.src}
          className={styles.image}
          alt="oferta letnia 1"
        />
      </div>
      <div className={styles.rowContainer}>
        <div className={styles.columnBox}>
          {section2About.map((paragraph, index) => (
            <p
              key={index}
              className={index === 0 ? paragraphOrangeStyles : paragraphStyles}
            >
              {paragraph}
            </p>
          ))}
        </div>
        {section2Img && (
          <img
            src={section2Img.src}
            className={styles.image}
            alt="oferta letnia 2"
          />
        )}
      </div>
    </div>
  );
};

export default AboutCamps;
