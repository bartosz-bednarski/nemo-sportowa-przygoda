'use client';
import React from 'react';
import styles from './hero.module.scss';
import LogoNemoImg from '@/public/assets/logo/Logo-main.svg'

const Hero = () => {
  return (
    <div className={styles.hero}>
      <h1 className={styles.list}>
        <span className={styles.item}>PORADNIK </span>
        <span className={styles.item}>BASENOWY</span>
      </h1>
     <img src={LogoNemoImg.src} alt='logoNemo' className={styles.logo}/>
     
    </div>
  );
};

export default Hero;
