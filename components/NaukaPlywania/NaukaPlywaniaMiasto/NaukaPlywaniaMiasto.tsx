'use client';
import React from 'react';
import styles from './naukaPlywaniaMiasto.module.scss';
import {COLORS} from '@/utils/UI/colors';
import LinkSwimmingPoolCover from '@/components/Ui/Links/LinkSwimmingPoolCover/LinkSwimmingPoolCover';

const NaukaPlywaniaMiasto: React.FC = () => {
  return (
    <div
      className={styles.naukaPlywaniaMiasto}
      style={{background: COLORS.lightBlue}}
    >
      <div className={styles['naukaPlywaniaMiasto__swimming-pools']}>
        <LinkSwimmingPoolCover
          image="eisenberga.webp"
          title="BASEN EISENBERGA"
          url="/naukaplywania/krakow/eisenberga"
        />
        <LinkSwimmingPoolCover
          image="bronowianka.webp"
          title="BASEN BRONOWIANKA"
          url="/naukaplywania/krakow/bronowianka"
        />
        <LinkSwimmingPoolCover
          image="plywaczek.webp"
          title="BASEN PŁYWACZEK"
          url="/naukaplywania/krakow/plywaczek"
        />
      </div>
    </div>
  );
};

export default NaukaPlywaniaMiasto;
