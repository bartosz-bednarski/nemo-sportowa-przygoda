'use client';
import React from 'react';
import styles from './localization.module.scss';
import StripH2 from '@/components/Ui/Strips/StripH2/StripH2';
import LocalizationImg from '@/public/assets/winter/surroundings.svg'
import Image from 'next/image';
export interface LocalizationPropsType{
  localizationDescription: string[];
}

const Localization: React.FC<{localization: LocalizationPropsType}> = ({
  localization,
}) => {
  return (
    <div className={styles.localization}>
      <div className={styles.content}>
        <StripH2
          type="h2"
          title="LOKALIZACJA"
          stripTextColor="white"
          stripBgColor="darkBlue"
        />
        {localization.localizationDescription.map((text, index) => (
          <span className={styles.text} key={index}>
            {text}
          </span>
        ))}
      </div>
      <Image src={LocalizationImg} alt='localization' className={styles.image}/>
      
    </div>
  );
};

export default Localization;
