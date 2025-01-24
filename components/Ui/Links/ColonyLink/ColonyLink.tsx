'use client';
import React from 'react';
import styles from './colonyLink.module.scss';
import Link from 'next/link';
import {CampCoverType} from '@/utils/Winter/Obozy';

export type ColonyLinkPropsType = {
  data: CampCoverType;
};

const ColonyLink: React.FC<ColonyLinkPropsType> = ({data}) => {
  return (
    <Link
      className={styles.colonyLink}
      href={data.href}
      style={{pointerEvents: data.active ? 'all' : 'none'}}
    >
      {!data.active && (
        <div className={styles.soldOut}>
          <span className={styles['soldOut__info']}>WYPRZEDANE</span>
        </div>
      )}

      <img
        className={styles['colonyLink__image']}
        src={`/assets/${data.coverImage}`}
        width={400}
        height={200}
        alt="polkolonie zimowe"
      />
      <div className={styles['colonyLink__content']}>
        <h3>{data.title}</h3>
        <span className={styles['colonyLink__content__date']}>{data.date}</span>
        <span className={styles['colonyLink__content__localization']}>
          {data.localization}
        </span>
        <span className={styles['colonyLink__content__price']}>
          {data.price}
        </span>
        <span className={styles['colonyLink__content__button-fake']}>
          Dowiedz się więcej
        </span>
      </div>
    </Link>
  );
};
export default ColonyLink;
