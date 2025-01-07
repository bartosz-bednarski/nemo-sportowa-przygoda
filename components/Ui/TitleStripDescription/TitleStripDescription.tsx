'use client';
import React from 'react';
import styles from './titleStripDescription.module.scss';
import StripH3 from '../Strips/StripH3/StripH3';
import {customColors} from '@/types/UI/colors';

const TitleStripDescription: React.FC<{
  title: string;
  stripTextColor: customColors;
  stripBgColor: customColors;
  description: string;
}> = ({title, stripBgColor, stripTextColor, description}) => {
  return (
    <div className={styles['titleStripDescription']}>
      <StripH3
        title={title}
        stripTextColor={stripTextColor}
        stripBgColor={stripBgColor}
      />
      <p>{description}</p>
    </div>
  );
};
export default TitleStripDescription;
