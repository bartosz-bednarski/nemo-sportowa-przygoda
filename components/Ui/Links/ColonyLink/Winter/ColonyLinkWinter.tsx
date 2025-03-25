'use client';
import React from 'react';
import styles from './colonyLink.module.scss';
import Link from 'next/link';
import {StaticImageData} from 'next/image';

export interface ColonyLinkPropsType {
  active: boolean;
  title: string;
  price: string;
  localization: string;
  date: string;
  coverImage: StaticImageData;
  href: string;
}

const ColonyLinkWinter = ({
  active,
  title,
  price,
  localization,
  date,
  coverImage,
  href,
}: ColonyLinkPropsType) => {
  return (
    <Link
      className={styles.colonyLink}
      href={href}
      style={{pointerEvents: active ? 'all' : 'none'}}
    >
      {!active && (
        <div className={styles.soldOut}>
          <span className={styles['soldOut__info']}>WYPRZEDANE</span>
        </div>
      )}

      <img
        className={styles['colonyLink__image']}
        src={coverImage.src}
        width={400}
        height={200}
        alt="polkolonie zimowe"
      />
      <div className={styles['colonyLink__content']}>
        <h3>{title}</h3>
        <span className={styles['colonyLink__content__date']}>{date}</span>
        <span className={styles['colonyLink__content__localization']}>
          {localization}
        </span>
        <span className={styles['colonyLink__content__price']}>{price}</span>
        <span className={styles['colonyLink__content__button-fake']}>
          Dowiedz się więcej
        </span>
      </div>
    </Link>
  );
};
export default ColonyLinkWinter;
