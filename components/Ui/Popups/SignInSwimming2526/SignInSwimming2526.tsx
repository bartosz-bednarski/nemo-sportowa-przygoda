'use client';
import {useEffect, useState} from 'react';
import styles from './signInSwimming2526.module.scss';
import {hasCookie, setCookie} from 'cookies-next';
import LocationIcon from '@/public/assets/ui/Icons/location-orange.svg';
import PopupImage from '@/public/assets/popup/kurs_jesien_zima_25_26.webp';
import LinkButton from '../../Buttons/LinkButton';
import Logo from '@/public/assets/logo/Logo-main-white.svg';
import XBtn from '../../Buttons/XBtn/XBtn';

const KRAKOW_POOLS = [
  {
    title: 'BASEN EISENBERGA',
    url: '/naukaplywania/krakow/eisenberga',
  },
  {
    title: 'BASEN BRONOWIANKA',
    url: '/naukaplywania/krakow/bronowianka',
  },
  {
    title: 'BASEN PŁYWACZEK',
    url: '/naukaplywania/krakow/plywaczek',
  },
  {
    title: 'BASEN FABRYCZNA',
    url: '/naukaplywania/krakow/fabryczna',
  },
  {
    title: 'BASEN CCZ NOWA HUTA',
    url: '/naukaplywania/krakow/plywaczek',
  },
  {
    title: 'BASEN CCZ PROKOCIM',
    url: '/naukaplywania/krakow/plywaczek',
  },
  {
    title: 'BASEN DAISY',
    url: '/naukaplywania/krakow/plywaczek',
  },
  {
    title: 'BASEN STRĄKOWA',
    url: '/naukaplywania/krakow/plywaczek',
  },
];
const OTHER_POOLS = [
  {
    title: 'BASEN KORZENNA',
    url: '/naukaplywania/korzenna',
  },
  {
    title: 'BASEN GORLICE',
    url: '/naukaplywania/gorlice',
  },
  {
    title: 'BASEN CHEŁMIEC',
    url: '/naukaplywania/chelmiec',
  },
  {
    title: 'BASEN WYSOWA ZDRÓJ',
    url: '/naukaplywania/harmonogram',
  },
  {
    title: 'BASEN LIMANOWA',
    url: '/naukaplywania/harmonogram',
  },
];

const SignInSwimming2526 = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    if (hasCookie('popup') === false) {
      const timer = setTimeout(() => {
        setCookie('popup', 0);
        setShowPopup(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [showPopup]);

  const closePopupHandler = () => {
    setShowPopup(false);
  };
  return (
    <div
      className={styles.popup}
      style={{display: showPopup ? 'flex' : 'none'}}
    >
      <div className={styles.contentBox}>
        <span className={styles.xBtnBox}>
          <XBtn onClick={closePopupHandler} />
        </span>
        <img
          src={PopupImage.src}
          width={550}
          height={550}
          alt="nauka plywania NEMO"
          title="nauka plywania NEMO"
          className={styles.image}
        />
        <img className={styles.logo} src={Logo.src} />
        <div className={styles.headerBox}>
          <span className={styles.header}>
            Ruszamy z zapisami nauki pływania!
          </span>
          <span className={`${styles.header} ${styles.accent}`}>
            Kurs Jesienno-Zimowy 2025/2026
          </span>
        </div>
        <div className={styles.locContainer}>
          <div className={styles.locBox}>
            {KRAKOW_POOLS.map((pool, index) => (
              <a href={pool.url} className={styles.locItem} key={index}>
                <img
                  className={styles.icon}
                  src={LocationIcon.src}
                  width={32}
                  height={32}
                  alt="lokalizacja"
                  loading="eager"
                />{' '}
                {pool.title}
              </a>
            ))}
            <span className={styles.linkButtonBox}>
              <LinkButton
                bgColor="white"
                textColor="mediumBlue"
                title="Zapisz się"
                href="/naukaplywania/harmonogram-krakow"
              />
            </span>
          </div>
          <div className={styles.locBox}>
            {OTHER_POOLS.map((pool, index) => (
              <a href={pool.url} className={styles.locItem} key={index}>
                <img
                  className={styles.icon}
                  src={LocationIcon.src}
                  width={32}
                  height={32}
                  alt="lokalizacja"
                  loading="eager"
                />{' '}
                {pool.title}
              </a>
            ))}
            <span className={styles.linkButtonBox}>
              <LinkButton
                bgColor="white"
                textColor="mediumBlue"
                title="Zapisz się"
                href="/naukaplywania/harmonogram"
              />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInSwimming2526;
