'use client';
import React from 'react';
import styles from './navigationMenu.module.scss';
import XBtn from '@/components/Ui/Buttons/XBtn/XBtn';
import Link from 'next/link';
import LogoMainWhiteImg from '@/public/assets/logo/Logo-main-white.svg';
import InstagramImg from '@/public/assets/ui/Icons/social/instagram.svg';
import FacebookImg from '@/public/assets/ui/Icons/social/facebook.svg';
import TiktokImg from '@/public/assets/ui/Icons/social/tiktok.svg';

interface LinkItemType {
  url: string;
  title: string;
  location: string;
}

const LINKS_LIST: LinkItemType[] = [
  {
    url: '/',
    title: 'Strona główna',
    location: '',
  },
  {
    url: '/naukaplywania/krakow',
    title: 'Nauka pływania',
    location: 'kraków',
  },
  {
    url: '/naukaplywania/korzenna',
    title: 'Nauka pływania',
    location: 'korzenna',
  },
  {
    url: '/naukaplywania/gorlice',
    title: 'Nauka pływania',
    location: 'gorlice',
  },
  {
    url: '/naukaplywania/chelmiec',
    title: 'Nauka pływania',
    location: 'chełmiec',
  },
  {
    url: '/aquafitness',
    title: 'Aqua Fitness',
    location: 'korzenna & gorlice',
  },
  {
    url: '/ofertaletnia',
    title: 'obozy & półkolonie',
    location: 'LATO',
  },
  {
    url: '/ofertazimowa',
    title: 'obozy & półkolonie',
    location: 'ZIMA',
  },
  {
    url: '/naszzespol',
    title: 'NASZ ZESPÓŁ',
    location: '',
  },
  {
    url: '/galeria',
    title: 'galeria',
    location: '',
  },
  {
    url: '/naukaplywania/poradnikbasenowy',
    title: 'Poradnik basenowy',
    location: '',
  },
];

interface NavigationMenuPropsType {
  hideMenuHandler: () => void;
  showMenu: boolean;
}

const NavigationMenu = ({
  hideMenuHandler,
  showMenu,
}: NavigationMenuPropsType) => {
  const containerStyles = `${styles.container} ${showMenu && styles.containerActive}`;
  const waveStyles = `${styles.wave} ${showMenu && styles.waveActive}`;
  const headerStyles = `${styles.header} ${showMenu && styles.active}`;
  const menuBoxStyles = `${styles.menuBox} ${showMenu && styles.active}`;
  const contactContainerStyles = `${styles.contactContainer} ${showMenu && styles.active}`;

  return (
    <>
      <div className={waveStyles}></div>

      <div className={containerStyles}>
        <div className={headerStyles}>
          <img
            src={LogoMainWhiteImg.src}
            alt="logoNemo"
            title="NEMO Sportowa Przygoda"
            className={styles.logo}
            width={230}
            height={100}
            loading="eager"
          />

          <XBtn onClick={hideMenuHandler} />
        </div>
        <div className={menuBoxStyles}>
          <ul>
            {LINKS_LIST.map((link, index) => (
              <li key={index}>
                <Link href={link.url} onClick={hideMenuHandler}>
                  <span className={styles.nav}>
                    {link.title}
                    <span className={styles.location}>{link.location}</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className={contactContainerStyles}>
          <span className={styles.contactBox} style={{color: '#669AD7'}}>
            Skontaktuj się z nami
          </span>
          <span className={styles.contactBox}>+48 519 625 894</span>
          <span className={styles.contactBox}>
            szkolaplywanianemo1@gmail.com
          </span>
          <span className={styles.contactBox}>
            <Link href="https://www.facebook.com/profile.php?id=61550793572137">
              <img
                src={FacebookImg.src}
                alt="facebook"
                title="facebook"
                className={styles.icon}
                width={30}
                height={30}
                loading="eager"
              />
            </Link>

            <Link href="https://www.instagram.com/nemo_sportowa_przygoda_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D">
              <img
                src={InstagramImg.src}
                alt="instagram"
                title="instagram"
                className={styles.icon}
                width={30}
                height={30}
                loading="eager"
              />
            </Link>
            <Link href="https://www.tiktok.com/@nemportowaprzygoda?is_from_webapp=1&sender_device=pc">
              <img
                src={TiktokImg.src}
                alt="tiktok"
                title="tiktok"
                className={styles.icon}
                width={30}
                height={30}
                loading="eager"
              />
            </Link>
          </span>
        </div>
      </div>
    </>
  );
};

export default NavigationMenu;
