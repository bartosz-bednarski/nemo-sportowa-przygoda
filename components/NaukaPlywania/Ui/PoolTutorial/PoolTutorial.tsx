'use client';
import React from 'react';
import styles from './poolTutorial.module.scss';
import BackgroundText from '@/components/Ui/BackgroundText/BackgroundText';
import {COLORS} from '@/utils/UI/colors';
import {customColors} from '@/types/UI/colors';
import StickerH4, {
  StickerH4PropsType,
} from '@/components/Ui/Headers/Stickers/StickerH4/StickerH4';

export type PoolTutorialPropsType = {
  header: boolean;
  stripH4?: StickerH4PropsType;
  color: customColors;
  firstRule: string;
  rules: string[];
};

const PoolTutorial: React.FC<{poolTutorial: PoolTutorialPropsType}> = ({
  poolTutorial,
}) => {
  return (
    <div
      className={styles.poolTutorial}
      style={{background: COLORS[poolTutorial.color]}}
    >
      {poolTutorial.header && poolTutorial.stripH4 !== undefined && (
        <StickerH4
          title={poolTutorial.stripH4.title}
          titleStrip={poolTutorial.stripH4.titleStrip}
          stripBgColor={poolTutorial.stripH4.stripBgColor}
          stripTextColor={poolTutorial.stripH4.stripTextColor}
        />
      )}

      <div className={styles.rowBox}>
        <BackgroundText title="PORADNIK KROK PO KROKU" />
        <div className={styles.circle}>{poolTutorial.firstRule}</div>

        {poolTutorial.rules.map((rule, index) => (
          <React.Fragment key={index}>
            <svg
              width="124"
              height="58"
              viewBox="0 0 124 58"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={styles.arrow}
            >
              <path
                d="M124.011 29L74.0112 0.132486V57.8675L124.011 29ZM0.929688 34H79.0112V24H0.929688V34Z"
                fill={index % 2 === 0 ? 'white' : COLORS.basicOrange}
              />
            </svg>
            <div className={styles.circle}>{rule}</div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default PoolTutorial;
