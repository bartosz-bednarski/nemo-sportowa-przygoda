'use client';
import React from 'react';
import styles from './poolInformations.module.scss';
import {COLORS} from '@/utils/UI/colors';
import StickerH2, {
  StickerH2PropsType,
} from '@/components/Ui/Headers/Stickers/StickerH2/StickerH2';
import PoolIcon from '@/public/assets/ui/Icons/basen.svg';
import MenCloackRoomIcon from '@/public/assets/ui/Icons/szatnia_meska.svg';
import WomenCloackRoomIcon from '@/public/assets/ui/Icons/szatnia_damska.svg';
import FamilyCloackRoomIcon from '@/public/assets/ui/Icons/szatnia_rodzinna.svg';
import StandIcon from '@/public/assets/ui/Icons/trybuny.svg';
import {customColors} from '@/types/UI/colors';

export type PoolInformationsPropsType = {
  color: customColors;
  title: string;
  imageSrc: string;
  stickerH2: StickerH2PropsType;
  mapSrc: string;
  icons: {
    pool1?: {
      exists: boolean;
      title: string;
    };
    pool2?: {
      exists: boolean;
      title: string;
    };
    stand?: {
      exists: boolean;
      title: string;
    };
    cloakroomWomen?: {
      exists: boolean;
      title: 'SZATNIA DAMSKA';
    };
    cloakroomMen?: {
      exists: boolean;
      title: 'SZATNIA M\u0118SKA';
    };
    cloakroomFamily?: {
      exists: boolean;
      title: 'SZATNIA RODZINNA';
    };
    parking?: {
      exists: boolean;
      title: string;
    };
  };
};

const PoolInformations: React.FC<{
  poolInformation: PoolInformationsPropsType;
}> = ({poolInformation}) => {
  return (
    <div
      className={styles.poolInformations}
      style={{background: COLORS[poolInformation.color]}}
    >
      <img
        src={`/assets/swimming/pools/${poolInformation.imageSrc}`}
        className={styles.imageFill}
        alt={poolInformation.title}
      />
      <StickerH2
        title={poolInformation.stickerH2.title}
        titleStrip={poolInformation.stickerH2.titleStrip}
        stripBgColor={poolInformation.stickerH2.stripBgColor}
        stripTextColor={poolInformation.stickerH2.stripTextColor}
      />
      <div className={styles.rowBox}>
        <div className={styles.columnBox}>
          {poolInformation.icons.pool1?.exists && (
            <div className={styles.rowBoxItem}>
              <img src={PoolIcon.src} alt="poolIcon" className={styles.image} />

              <span className={styles.text}>
                {poolInformation.icons.pool1.title}
              </span>
            </div>
          )}
          {poolInformation.icons.pool2?.exists && (
            <div className={styles.rowBoxItem}>
              <img src={PoolIcon.src} alt="poolIcon" className={styles.image} />
              <span className={styles.text}>
                {poolInformation.icons.pool2.title}
              </span>
            </div>
          )}
          {poolInformation.icons.stand?.exists && (
            <div className={styles.rowBoxItem}>
              <img
                src={StandIcon.src}
                alt="standIcon"
                className={styles.image}
              />
              <span className={styles.text}>
                {poolInformation.icons.stand.title}
              </span>
            </div>
          )}
          {poolInformation.icons.cloakroomWomen?.exists && (
            <div className={styles.rowBoxItem}>
              <img
                src={WomenCloackRoomIcon.src}
                alt="cloackroomWomen"
                className={styles.image}
              />
              <span className={styles.text}>
                {poolInformation.icons.cloakroomWomen.title}
              </span>
            </div>
          )}
          {poolInformation.icons.cloakroomMen?.exists && (
            <div className={styles.rowBoxItem}>
              <img
                src={MenCloackRoomIcon.src}
                alt="cloackroomMen"
                className={styles.image}
              />

              <span className={styles.text}>
                {poolInformation.icons.cloakroomMen.title}
              </span>
            </div>
          )}
          {poolInformation.icons.cloakroomFamily?.exists && (
            <div className={styles.rowBoxItem}>
              <img
                src={FamilyCloackRoomIcon.src}
                alt="cloackroomFamily"
                className={styles.image}
              />
              <span className={styles.text}>
                {poolInformation.icons.cloakroomFamily.title}
              </span>
            </div>
          )}
          {poolInformation.icons.parking?.exists && (
            <div className={styles.rowBoxItem}>
              <span className={styles.image}>P</span>
              <span className={styles.text}>
                {poolInformation.icons.parking.title}
              </span>
            </div>
          )}
        </div>
        <iframe
          src={poolInformation.mapSrc}
          width="600"
          height="450"
          style={{border: 0, borderRadius: 30}}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className={styles.map}
        ></iframe>
      </div>
    </div>
  );
};

export default PoolInformations;
