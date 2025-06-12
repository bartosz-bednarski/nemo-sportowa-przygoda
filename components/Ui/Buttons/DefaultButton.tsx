'use client';
import React from 'react';
import styles from './buttons.module.scss';

const DefaultButton: React.FC<{
  title: string;
  onClick?: () => void;
}> = ({title, onClick}) => {
  return (
    <button className={styles.linkButton} onClick={onClick}>
      <span>{title}</span>
    </button>
  );
};
export default DefaultButton;
