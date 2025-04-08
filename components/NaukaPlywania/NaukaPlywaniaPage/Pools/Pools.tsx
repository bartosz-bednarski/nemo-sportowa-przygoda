'use client';
import React from 'react';
import styles from './pools.module.scss';
import BackgroundText from '@/components/Ui/BackgroundText/BackgroundText';
import LinkSwimmingPoolCover, {
  LinkSwimmingPoolCoverPropsType,
} from '@/components/Ui/Links/LinkSwimmingPoolCover/LinkSwimmingPoolCover';
import StickerH3, {
  StickerH3PropsType,
} from '@/components/Ui/Headers/Stickers/StickerH3/StickerH3';

export interface PoolsPropsType {
  stripH3: StickerH3PropsType;
  backgroundText: string;
  swimmingPools: LinkSwimmingPoolCoverPropsType[];
}

const Pools = ({stripH3, backgroundText, swimmingPools}: PoolsPropsType) => {
  return (
    <div className={styles.pools}>
      <StickerH3
        titleStrip={stripH3.titleStrip}
        title={stripH3.title}
        stripTextColor={stripH3.stripTextColor}
        stripBgColor={stripH3.stripBgColor}
      />
      <div className={styles.rowBox}>
        <BackgroundText title={backgroundText} />
        {swimmingPools.map((pool, index) => (
          <LinkSwimmingPoolCover
            title={pool.title}
            image={pool.image}
            url={pool.url}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Pools;
