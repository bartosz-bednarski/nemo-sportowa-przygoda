'use client';
import React from 'react';
import styles from './titleStripDescriptionBox.module.scss';
import {customColors} from '@/types/UI/colors';
import {COLORS} from '@/utils/UI/colors';
import StripH4 from '../Strips/StripH4/StripH4';

export interface TitleStripDescriptionBoxPropsType {
  title: string;
  titleStripTextColor: customColors;
  titleStripBgColor: customColors;
  description: string;
}

const TitleStripDescriptionBox = ({
  title,
  titleStripTextColor,
  titleStripBgColor,
  description,
}: TitleStripDescriptionBoxPropsType) => {
  return (
    <div className={styles.titleStripDescription}>
      <StripH4
        type="h4"
        title={title}
        stripTextColor={titleStripTextColor}
        stripBgColor={titleStripBgColor}
      />
      <p
        style={{
          color: COLORS[titleStripTextColor],
          backgroundColor: COLORS[titleStripBgColor],
          border: `1px solid ${COLORS[titleStripTextColor]}`,
          boxShadow: `1px 1px 1px 1px ${COLORS[titleStripTextColor]}`,
        }}
        className={styles.paragraphBox}
      >
        {description}
      </p>
    </div>
  );
};
export default TitleStripDescriptionBox;
