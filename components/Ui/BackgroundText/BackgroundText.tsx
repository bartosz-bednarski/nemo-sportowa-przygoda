'use client';
import React from 'react';
import styles from './backgroundText.module.scss';

export interface BackgroundTextPropsType {
  title: string;
}

const BackgroundText = ({title}: BackgroundTextPropsType) => {
  return <span className={styles.text}>{title}</span>;
};
export default BackgroundText;
