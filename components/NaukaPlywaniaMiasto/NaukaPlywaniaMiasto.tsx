'use client';
import React from 'react';
import styles from './naukaPlywaniaMiasto.module.scss';
import {COLORS} from '@/utils/UI/colors';
import SwimmingPoolCover from '../Ui/SwimmingPoolCover/SwimmingPoolCover';

const NaukaPlywaniaMiasto: React.FC = () => {
  return (
    <div
      className={styles.naukaPlywaniaMiasto}
      style={{background: COLORS.lightBlue}}
    >
      {/* <AboutTextPoppins
        titleColor="lightBlue"
        title="Sprawdź naszą ofertę nauki pływania w Krakowie"
        description="Nauka pływania to doskonały sposób na wzmocnienie kondycji, poprawę zdrowia i pokonanie lęku przed wodą. Oferujemy zajęcia dla dzieci, młodzieży i dorosłych na różnych poziomach zaawansowania. Nasi doświadczeni instruktorzy zadbają o Twoje bezpieczeństwo i indywidualne postępy. Zapisz się już dziś i odkryj radość z pływania!"
      /> */}

      <div className={styles['naukaPlywaniaMiasto__swimming-pools']}>
        <SwimmingPoolCover
          image="eisenberga.webp"
          title="BASEN EISENBERGA"
          url="/naukaplywania/krakow/eisenberga"
        />
        <SwimmingPoolCover
          image="bronowianka.webp"
          title="BASEN BRONOWIANKA"
          url="/naukaplywania/krakow/bronowianka"
        />
        <SwimmingPoolCover
          image="plywaczek.webp"
          title="BASEN PŁYWACZEK"
          url="/naukaplywania/krakow/plywaczek"
        />
      </div>
    </div>
  );
};

export default NaukaPlywaniaMiasto;
