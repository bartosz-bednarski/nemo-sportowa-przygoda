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
  alignItems: 'flex-start' | 'flex-end' | 'center';
  textAlign: 'left' | 'right' | 'center';
}

const AboutTextPoppins = ({
  titleColor,
  title,
  description,
  descriptionColor,
  alignItems,
  textAlign,
}: AboutTextPoppinsPropsType) => {
  return (
    <div className={styles.box} style={{alignItems: alignItems}}>
      <span className={styles.title} style={{color: COLORS[titleColor]}}>
        {title}
      </span>
      <p
        className={styles.paragraph}
        style={{
          textAlign: textAlign,
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
