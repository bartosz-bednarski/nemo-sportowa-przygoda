'use client';
import {customColors} from '@/types/UI/colors';
import React from 'react';
import styles from './scrap.module.scss';
export interface Scrap2PropsType {
  position: 'top' | 'bottom';
  color: customColors;
}

const Scrap2 = ({position, color}: Scrap2PropsType) => {
  const scrapStyle = `${styles[`${position}Scrap${color}`]}`;
  return <div className={scrapStyle}></div>;
};

export default Scrap2;
