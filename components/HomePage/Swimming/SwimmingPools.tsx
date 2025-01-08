'use client';
import React from 'react';
import styles from './swimmingSection.module.scss';
import Image from 'next/image';
import LinkSwimmingPoolCover from '@/components/Ui/SwimmingPoolCover/LinkSwimmingPoolCover';
import LinkButton from '@/components/Ui/Buttons/LinkButton';

const SwimmingPools: React.FC = () => {
  return (
    <div className={styles.poolsContainer}>
      <Image
        src="/assets/swimming/background-img-1.webp"
        fill={true}
        alt="nauka pływania"
        style={{objectFit: 'cover', objectPosition: 'top'}}
      />
      <div className={styles.poolsBoxCol}>
        <div className={styles.poolsBoxRow}>
          <LinkSwimmingPoolCover
            image="korzenna.webp"
            title="BASEN KORZENNA"
            url="/naukaplywania/korzenna"
          />
          <LinkSwimmingPoolCover
            image="gorlice.webp"
            title="BASEN GORLICE"
            url="/naukaplywania/gorlice"
          />
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
