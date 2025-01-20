'use client';
import React from 'react';
import styles from './details.module.scss';
import DetailsBox from './DetailsBox';

export interface DetailsPropsType {
  location: string;
  fullLocationName: string;
  dateRange: string;
  ageRange?: string;
  price: string;
  promotion: boolean;
  promotionPrice?: string;
  promotionInfo?: string;
  rally?: string;
  aboutTitle: string;
  aboutDescription: string;
  about2Title?: string;
  about2Description?: string;
}

const Details: React.FC<{details: DetailsPropsType}> = ({details}) => {
  return (
    <div className={styles.details}>
      <div className={styles.rowBox}>
        <DetailsBox promo={false} label="MIEJSCE" content={details.location} />
        <DetailsBox promo={false} label="TERMIN" content={details.dateRange} />
        {details.ageRange !== undefined && (
          <DetailsBox promo={false} label="WIEK" content={details.ageRange} />
        )}
        {details.rally !== undefined && (
          <DetailsBox promo={false} label="ZBIÓRKA" content={details.rally} />
        )}
        <DetailsBox
          promo={details.promotion}
          label="CENA"
          content={details.price}
          promoPrice={details.promotionPrice}
          promoInfo={details.promotionInfo}
        />
      </div>
      <div className={styles.infoBox}>
        <span className={styles.header}>
          {details.aboutTitle}
        </span>
        <span className={styles.text}>
          {details.aboutDescription}
        </span>
      </div>
      {details.about2Title !== undefined && (
        <div className={styles.infoBox}>
          {details.about2Title !== undefined && (
            <span className={styles.header}>
              {details.about2Title}
            </span>
          )}
          {details.about2Description !== undefined && (
            <span className={styles.text}>
              {details.about2Description}
            </span>
          )}
        </div>
      )}
    </div>
  );
};

export default Details;
