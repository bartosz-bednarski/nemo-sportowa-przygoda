'use client';
import React from 'react';
import styles from './signInCamps.module.scss';
import {COLORS} from '@/utils/UI/colors';
import NemoSummerIcon from '@/public/assets/customLogos/nemo-podroznik.svg';
import NemoWinterIcon from '@/public/assets/customLogos/nemo-skier.svg';
import ColonyLinkSummer, {
  ColonyLinkPropsType,
} from '@/components/Ui/Links/ColonyLink/Summer/ColonyLinkSummer';
import ColonyLinkWinter from '@/components/Ui/Links/ColonyLink/Winter/ColonyLinkWinter';

export interface SignInCampsPropsType {
  activeCampsCoversList?: ColonyLinkPropsType[];
  waitingTitle?: string;
  waiting: boolean;
  theme: 'summer' | 'winter';
}

const SignInCamps = ({
  theme,
  waiting,
  waitingTitle,
  activeCampsCoversList,
}: SignInCampsPropsType) => {
  const h2Styles =
    theme === 'summer' ? styles.h2StripSummer : styles.h2StripWinter;

  if (theme === 'summer') {
    return (
      <div
        className={styles.signInCamps}
        style={{
          background: COLORS['basicGreen'],
        }}
      >
        <div className={styles.headerBox}>
          <h2 className={h2Styles}>AKTUALNE ZAPISY</h2>

          <img
            src={NemoSummerIcon.src}
            alt="nemoIcon"
            className={styles.logo}
          />
        </div>
        <div className={styles.rowBox}>
          {waiting && (
            <span
              className={styles.waiting}
              style={{
                color: COLORS['white'],
              }}
            >
              {waitingTitle && waitingTitle}
            </span>
          )}
          {!waiting &&
            activeCampsCoversList !== undefined &&
            activeCampsCoversList.map((camp, index) => (
              <ColonyLinkSummer key={index} {...camp} />
            ))}
        </div>
      </div>
    );
  }
  if (theme === 'winter') {
    return (
      <div
        className={styles.signInCamps}
        style={{
          background: COLORS['white'],
        }}
      >
        <div className={styles.headerBox}>
          <h2 className={h2Styles}>AKTUALNE ZAPISY</h2>
          <img
            src={NemoWinterIcon.src}
            alt="nemoIcon"
            className={styles.logo}
          />
        </div>
        <div className={styles.rowBox}>
          {waiting && (
            <span
              className={styles.waiting}
              style={{
                color: COLORS['winterIce'],
              }}
            >
              {waitingTitle && waitingTitle}
            </span>
          )}
          {!waiting &&
            activeCampsCoversList !== undefined &&
            activeCampsCoversList.map((camp, index) => (
              <ColonyLinkWinter key={index} {...camp} />
            ))}
        </div>
      </div>
    );
  }

  return null;
};
export default SignInCamps;
