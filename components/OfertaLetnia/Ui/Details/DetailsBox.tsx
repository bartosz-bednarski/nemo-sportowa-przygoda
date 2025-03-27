'use client';
import React from 'react';
import styles from './details.module.scss';

export interface DetailsBoxPropsType {
  promo: boolean;
  label: 'MIEJSCE' | 'TERMIN' | 'CENA' | 'ZAKWATEROWANIE' | 'WIEK';
  content: string;
  promoPrice?: string;
  promoInfo?: string;
}

const DetailsBox = ({
  label,
  promo,
  content,
  promoInfo,
  promoPrice,
}: DetailsBoxPropsType) => {
  return (
    <div className={styles.detailsBox}>
      <span className={styles.label}>{label}</span>
      <span className={styles.content}>{content}</span>
      {promo && promoPrice !== undefined && (
        <span className={styles.promoPrice}>{promoPrice}</span>
      )}
      {promo && promoInfo !== undefined && (
        <span className={styles.promoInfo}>{promoInfo} </span>
      )}
    </div>
  );
};

export default DetailsBox;
