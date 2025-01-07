'use client';
import React from 'react';
import styles from './aboutTextPoppins.module.scss';
import {COLORS} from '@/utils/UI/colors';
import {customColors} from '@/types/UI/colors';

export interface AboutTextPoppinsPropsType {
  titleColor: customColors;
  title: string;
  description: string;
  descriptionColor?: customColors;
}

const AboutTextPoppins = ({
  titleColor,
  title,
  description,
  descriptionColor,
}: AboutTextPoppinsPropsType) => {
  return (
    <div className={styles.box}>
      <span className={styles.title} style={{color: COLORS[titleColor]}}>
        {title}
      </span>
      <p
        className={styles.paragraph}
        style={{
          color:
            COLORS[descriptionColor !== undefined ? descriptionColor : 'white'],
        }}
      >
        {description}
      </p>
    </div>
  );
};
export default AboutTextPoppins;
