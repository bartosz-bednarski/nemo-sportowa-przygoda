'use client';
import React from 'react';
import styles from './titleStripDescription.module.scss';
import {customColors} from '@/types/UI/colors';
import StripH4 from '../Strips/StripH4/StripH4';

const TitleStripDescription: React.FC<{
  title: string;
  stripTextColor: customColors;
  stripBgColor: customColors;
  description: string;
}> = ({title, stripBgColor, stripTextColor, description}) => {
  return (
    <div className={styles['titleStripDescription']}>
      <StripH4
        type="h4"
        title={title}
        stripTextColor={stripTextColor}
        stripBgColor={stripBgColor}
      />
      <p>{description}</p>
    </div>
  );
};
export default TitleStripDescription;
