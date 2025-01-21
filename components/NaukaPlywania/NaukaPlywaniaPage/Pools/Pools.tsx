'use client';
import React from 'react';
import styles from './pools.module.scss';
import StripH3, {
  StripH3PropsType,
} from '@/components/Ui/Strips/StripH3/StripH3';
import BackgroundText from '@/components/Ui/BackgroundText/BackgroundText';
import LinkSwimmingPoolCover, {
  LinkSwimmingPoolCoverPropsType,
} from '@/components/Ui/Links/LinkSwimmingPoolCover/LinkSwimmingPoolCover';

export interface PoolsPropsType {
  stripH3: StripH3PropsType;
  backgroundText: string;
  swimmingPools: LinkSwimmingPoolCoverPropsType[];
}

const Pools = ({stripH3, backgroundText, swimmingPools}: PoolsPropsType) => {
  return (
    <div className={styles.pools}>
      <StripH3
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
