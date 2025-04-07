'use client';
import React from 'react';
import styles from './poolNecessaryItems.module.scss';
import BackgroundText from '@/components/Ui/BackgroundText/BackgroundText';
import {customColors} from '@/types/UI/colors';
import {COLORS} from '@/utils/UI/colors';
import StickerH2 from '@/components/Ui/Headers/Stickers/StickerH2/StickerH2';
import GooglesIcon from '@/public/assets/ui/Icons/czepek_i_gogle.svg';
import SwimSuitIcon from '@/public/assets/ui/Icons/stroj_kapielowy.svg';
import SlippersIcon from '@/public/assets/ui/Icons/klapki.svg';
import TowelIcon from '@/public/assets/ui/Icons/recznik.svg';

const PoolNecessaryItems: React.FC<{color: customColors}> = ({color}) => {
  return (
    <div
      className={styles.poolNecessaryItems}
      style={{background: COLORS[color]}}
    >
      <BackgroundText title="CO ZABRAĆ NA BASEN" />
      <StickerH2
        title="NIEZBĘDNIK"
        titleStrip="BASENOWY"
        stripBgColor="basicOrange"
        stripTextColor={color}
      />
      <div className={styles.rowBox}>
        <div className={styles.itemCol}>
          <img src={GooglesIcon.src} alt="googles" className={styles.image} />

          <span className={styles.title}>CZEPEK I OKULARY</span>
        </div>

        <div className={styles.itemCol}>
          <img src={SwimSuitIcon.src} alt="swimsuit" className={styles.image} />

          <span className={styles.title}>STRÓJ KĄPIELOWY</span>
        </div>
        <div className={styles.itemCol}>
          <img src={SlippersIcon.src} alt="slippers" className={styles.image} />

          <span className={styles.title}>KLAPKI</span>
        </div>
        <div className={styles.itemCol}>
          <img src={TowelIcon.src} alt="towel" className={styles.image} />

          <span className={styles.title}>RĘCZNIK</span>
        </div>
      </div>
    </div>
  );
};

export default PoolNecessaryItems;
