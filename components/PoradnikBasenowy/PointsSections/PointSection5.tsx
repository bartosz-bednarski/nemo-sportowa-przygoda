'use client';
import React from 'react';
import styles from './pointSection.module.scss';
import NemoSwimmerLogo from '@/public/assets/customLogos/nemo-swimming-outfit.svg';
import SwimCapIcon from '@/public/assets/ui/Icons/czepek_i_gogle.svg';
import SwimSuitIcon from '@/public/assets/ui/Icons/stroj_kapielowy.svg';
import FlipFlopsIcon from '@/public/assets/ui/Icons/klapki.svg';
import TowelIcon from '@/public/assets/ui/Icons/recznik.svg';

const PointSection5 = () => {
  return (
    <div className={styles.pointSection} id="5">
      <span className={styles.title}>5.CO ZABRAĆ NA BASEN?</span>
      <div className={styles.rowBox}>
        <img
          src={NemoSwimmerLogo.src}
          alt="nemoLogo"
          className={styles.image}
        />

        <div className={styles.text}>
          <div className={styles.poolNecessaryItemsrowBox}>
            <div className={styles.poolNecessaryItemsitem}>
              <img
                src={SwimCapIcon.src}
                alt="swimCap"
                className={styles.poolNecessaryItemsimage}
              />

              <span className={styles.poolNecessaryItemstitle}>
                CZEPEK I OKULARY
              </span>
            </div>

            <div className={styles.poolNecessaryItemsitem}>
              <img
                src={SwimSuitIcon.src}
                alt="swimSuit"
                className={styles.poolNecessaryItemsimage}
              />

              <span className={styles.poolNecessaryItemstitle}>
                STRÓJ KĄPIELOWY
              </span>
            </div>
            <div className={styles.poolNecessaryItemsitem}>
              <img
                src={FlipFlopsIcon.src}
                alt="flipFlops"
                className={styles.poolNecessaryItemsimage}
              />

              <span className={styles.poolNecessaryItemstitle}>KLAPKI</span>
            </div>
            <div className={styles.poolNecessaryItemsitem}>
              <img
                src={TowelIcon.src}
                alt="towel"
                className={styles.poolNecessaryItemsimage}
              />

              <span className={styles.poolNecessaryItemstitle}>RĘCZNIK</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PointSection5;
