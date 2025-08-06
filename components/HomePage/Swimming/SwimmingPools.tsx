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
import ChelmiecCoverImg from '@/public/assets/swimming/pools/chelmiec.webp';
import FabrycznaCoverImg from '@/public/assets/swimming/pools/fabryczna.webp';
import CCZHutaCoverImg from '@/public/assets/swimming/pools/ccz_huta.webp';
import CCZProkocimCoverImg from '@/public/assets/swimming/pools/ccz_prokocim.webp';
import DaisyCoverImg from '@/public/assets/swimming/pools/daisy.webp';
import StrakowaCoverImg from '@/public/assets/swimming/pools/strakowa.webp';

const SwimmingPools = () => {
  return (
    <div className={styles.poolsContainer}>
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
          <LinkSwimmingPoolCover
            image={FabrycznaCoverImg}
            title="BASEN FABRYCZNA"
            url="/naukaplywania/krakow/fabryczna"
          />
          <LinkSwimmingPoolCover
            image={CCZHutaCoverImg}
            title="BASEN CCZ NOWA HUTA"
            url="/naukaplywania/krakow/ccz-nowa-huta"
          />
          <LinkSwimmingPoolCover
            image={CCZProkocimCoverImg}
            title="BASEN CCZ PROKOCIM"
            url="/naukaplywania/krakow/ccz-prokocim"
          />
          <LinkSwimmingPoolCover
            image={DaisyCoverImg}
            title="BASEN DAISY"
            url="/naukaplywania/krakow/daisy"
          />
          <LinkSwimmingPoolCover
            image={StrakowaCoverImg}
            title="BASEN STRĄKOWA"
            url="/naukaplywania/krakow/strakowa"
          />
          <LinkSwimmingPoolCover
            image={ChelmiecCoverImg}
            title="BASEN CHEŁMIEC"
            url="/naukaplywania/chelmiec"
          />
          {/* <TemporarylinkSwimmingPoolCover
            image={StrozeCoverImg}
            title="BASEN STRÓŻE"
          /> */}
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
