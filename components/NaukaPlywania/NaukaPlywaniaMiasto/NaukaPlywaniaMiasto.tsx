'use client';
import React from 'react';
import styles from './naukaPlywaniaMiasto.module.scss';
import {COLORS} from '@/utils/UI/colors';
import LinkSwimmingPoolCover from '@/components/Ui/Links/LinkSwimmingPoolCover/LinkSwimmingPoolCover';
import EisenbergaCoverImg from '@/public/assets/swimming/pools/korzenna.webp';
import BronowiankaCoverImg from '@/public/assets/swimming/pools/korzenna.webp';
import PlywaczekCoverImg from '@/public/assets/swimming/pools/korzenna.webp';

const NaukaPlywaniaMiasto: React.FC = () => {
  return (
    <div
      className={styles.naukaPlywaniaMiasto}
      style={{background: COLORS.lightBlue}}
    >
      <div className={styles['naukaPlywaniaMiasto__swimming-pools']}>
        <LinkSwimmingPoolCover
          image={EisenbergaCoverImg}
          title="BASEN EISENBERGA"
          url="/naukaplywania/krakow/eisenberga"
        />
        <LinkSwimmingPoolCover
          image={BronowiankaCoverImg}
          title="BASEN BRONOWIANKA"
          url="/naukaplywania/krakow/bronowianka"
        />
        <LinkSwimmingPoolCover
          image={PlywaczekCoverImg}
          title="BASEN PŁYWACZEK"
          url="/naukaplywania/krakow/plywaczek"
        />
      </div>
    </div>
  );
};

export default NaukaPlywaniaMiasto;
