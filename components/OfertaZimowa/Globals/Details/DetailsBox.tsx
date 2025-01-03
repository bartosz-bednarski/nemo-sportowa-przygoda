'use client';
import React from 'react';
import styles from './details.module.scss';
import {detailsBoxComponentType} from '@/types/SummerWinter/Winter';

const DetailsBox: React.FC<detailsBoxComponentType> = ({
  label,
  promo,
  content,
  promoInfo,
  promoPrice,
}) => {
  return (
    <div className={styles.detailsBox}>
      <span className={styles['detailsBox__label']}>{label}</span>
      <span className={styles['detailsBox__content']}>{content}</span>
      {promo && promoPrice !== undefined && (
        <span className={styles['detailsBox__promo-price']}>{promoPrice}</span>
      )}
      {promo && promoInfo !== undefined && (
        <span className={styles['detailsBox__promo-info']}>{promoInfo} </span>
      )}
    </div>
  );
};

export default DetailsBox;
