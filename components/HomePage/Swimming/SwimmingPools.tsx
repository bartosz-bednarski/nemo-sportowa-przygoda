'use client';
import React from 'react';
import styles from './swimmingSection.module.scss';
import LinkButton from '@/components/Ui/Buttons/LinkButton';
import LinkSwimmingPoolCover from '@/components/Ui/Links/LinkSwimmingPoolCover/LinkSwimmingPoolCover';
import KorzennaCoverImg from '@/public/assets/swimming/pools/korzenna.webp';
import GorliceCoverImg from '@/public/assets/swimming/pools/gorlice.webp';
import EisenbergaCoverImg from '@/public/assets/swimming/pools/eisenberga.webp';
import BronowiankaCoverImg from '@/public/assets/swimming/pools/bronowianka.webp';
import PlywaczekCoverImg from '@/public/assets/swimming/pools/plywaczek.webp';
const SwimmingPools: React.FC = () => {
  return (
    <div className={styles.poolsContainer}>
      <img
        src="/assets/swimming/background-img-1.webp"
        className={styles.imageFill}
        alt="nauka pływania"
        style={{objectFit: 'cover', objectPosition: 'top'}}
      />
      <div className={styles.poolsBoxCol}>
        <div className={styles.poolsBoxRow}>
          <LinkSwimmingPoolCover
            image={KorzennaCoverImg}
            title="BASEN KORZENNA"
            url="/naukaplywania/korzenna"
          />
          <LinkSwimmingPoolCover
            image={GorliceCoverImg}
            title="BASEN GORLICE"
            url="/naukaplywania/gorlice"
          />
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
        <LinkButton
          title="Dowiedz się więcej"
          bgColor="mediumBlue"
          textColor="white"
          href="/naukaplywania"
        />
      </div>
    </div>
  );
};
export default SwimmingPools;
