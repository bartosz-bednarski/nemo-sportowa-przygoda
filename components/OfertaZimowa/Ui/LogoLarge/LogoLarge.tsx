'use client';
import React from 'react';
import styles from './logoLarge.module.scss';
import LogoNemoWinterImg from '@/public/assets/logo/logo-nemo-winter-darkBlue.svg'
import LogoBom4SportsImg from '@/public/assets/logo/bom4sports-winter.svg'

export type LogoLargePropsType='NEMO' | 'BOM4SPORTS'

const LogoLarge: React.FC<{company:LogoLargePropsType}> = ({company}) => {
  return (
    <div className={styles.logoLarge}>
      {company === 'NEMO' && (
      <img src={LogoNemoWinterImg.src} alt='nemoLogo' className={styles.image}/>
      )}
      {company === 'BOM4SPORTS' && (
       <img src={LogoBom4SportsImg.src} alt='bom4sportsLogo' className={styles.image}/>
      )}
    </div>
  );
};

export default LogoLarge;
