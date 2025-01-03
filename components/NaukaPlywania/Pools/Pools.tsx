'use client';
import React from 'react';
import styles from './pools.module.scss';
import StripH3 from '@/components/Ui/StripH3/StripH3';
import SwimmingPoolCover from '@/components/Ui/SwimmingPoolCover/SwimmingPoolCover';
import BackgroundText from '@/components/Ui/BackgroundText/BackgroundText';
import {poolsType} from '@/types/NaukaPlywania/naukaPlywania';

const Pools: React.FC<poolsType> = ({
  stripH3,
  backgroundText,
  swimmingPools,
}) => {
  return (
    <div className={styles.pools}>
      <StripH3
        title={stripH3.title}
        stripTextColor={stripH3.stripTextColor}
        stripBgColor={stripH3.stripBgColor}
        scale={stripH3.scale}
      />
      <div className={styles['pools__row-box']}>
        <BackgroundText title={backgroundText} />
        {swimmingPools.map((pool) => (
          <SwimmingPoolCover
            title={pool.title}
            image={pool.image}
            url={pool.url}
            key={pool.image}
          />
        ))}
      </div>
    </div>
  );
};
export default Pools;
