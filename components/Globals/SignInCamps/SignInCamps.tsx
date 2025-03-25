'use client';
import React from 'react';
import styles from './signInCamps.module.scss';
import StickerH2 from '@/components/Ui/Stickers/StickerH2/StickerH2';
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
  if (theme === 'summer') {
    return (
      <div
        className={styles.signInCamps}
        style={{
          background: COLORS['basicGreen'],
        }}
      >
        <div className={styles.headerBox}>
          <StickerH2
            title="AKTUALNE"
            titleStrip="ZAPISY"
            stripBgColor={'white'}
            stripTextColor={'basicGreen'}
            titleColor={'white'}
          />
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
          <StickerH2
            title="AKTUALNE"
            titleStrip="ZAPISY"
            stripBgColor={'darkBlue'}
            stripTextColor={'white'}
            titleColor={'darkBlue'}
          />
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
