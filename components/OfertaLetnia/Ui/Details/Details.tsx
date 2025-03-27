'use client';
import React from 'react';
import styles from './details.module.scss';
import DetailsBox from './DetailsBox';

export interface DetailsPropsType {
  location: string;
  dateRange: string;
  ageRange?: string;
  price: {
    price: string;
    promotion: boolean;
    promotionPrice?: string;
    promotionInfo?: string;
  };
  accomodation?: string;
  about: {
    title: string;
    description: string;
  };
  argumentsList: {
    title: string;
    arguments: {title: string; description: string}[];
  };
}

const Details = ({
  location,
  dateRange,
  price,
  about,
  argumentsList,
  accomodation,
  ageRange,
}: DetailsPropsType) => {
  return (
    <div className={styles.details}>
      <div className={styles.rowBox}>
        <DetailsBox promo={false} label="MIEJSCE" content={location} />
        <DetailsBox promo={false} label="TERMIN" content={dateRange} />
        {ageRange && (
          <DetailsBox promo={false} label="WIEK" content={ageRange} />
        )}
        {accomodation && (
          <DetailsBox
            promo={false}
            label="ZAKWATEROWANIE"
            content={accomodation}
          />
        )}
        <DetailsBox
          promo={price.promotion}
          label="CENA"
          content={price.price}
          promoPrice={price.promotionPrice}
          promoInfo={price.promotionInfo}
        />
      </div>
      <div className={styles.infoBox}>
        <span className={styles.header}>{about.title}</span>
        <span className={styles.text}>{about.description}</span>
      </div>
      <div className={styles.infoBox}>
        <span className={styles.header}>{argumentsList.title}</span>
        <ul className={styles.argumentsBox}>
          {argumentsList.arguments.map((argument, index) => (
            <li key={index}>
              <b>{argument.title} </b>
              {argument.description}
            </li>
          ))}{' '}
        </ul>
      </div>
    </div>
  );
};

export default Details;
