'use client';
import React, {useEffect, useState} from 'react';
import styles from './navigation.module.scss';
import XBtn from '@/components/Ui/Buttons/XBtn/XBtn';
import Link from 'next/link';
import LogoMainWhiteImg from '@/public/assets/logo/Logo-main-white.svg';
import InstagramImg from '@/public/assets/ui/Icons/social/instagram.svg';
import FacebookImg from '@/public/assets/ui/Icons/social/facebook.svg';
import TiktokImg from '@/public/assets/ui/Icons/social/tiktok.svg';

interface NavigationPropsType {
  showNavigation: boolean;
  hideNavigation: () => void;
  firstLoad: boolean;
  setFirstLoad: () => void;
}

const Navigation = ({
  showNavigation,
  hideNavigation,
  firstLoad,
  setFirstLoad,
}: NavigationPropsType) => {
  const [height, setHeight] = useState('0vh');

  if (firstLoad === true) {
    setTimeout(() => {
      setFirstLoad();
    }, 100);
  }

  useEffect(() => {
    if (showNavigation) {
      setHeight('100vh');
    } else if (!showNavigation) {
      setTimeout(() => {
        setHeight('0vh');
      }, 1000);
    }
  }, [showNavigation, height]);

  return (
    <div
      className={`${styles.navigation} ${
        !showNavigation && styles.navigationHide
      }`}
      style={{
        opacity: firstLoad ? '0' : '1',
        height: height,
      }}
    >
      <div
        className={`${styles.topBox} ${
          !showNavigation && styles.navigationHideContent
        }`}
      >
        <img
          src={LogoMainWhiteImg.src}
          alt="logoNemo"
          title="NEMO Sportowa Przygoda"
          className={styles.logo}
          width={230}
          height={100}
          loading="eager"
        />

        <XBtn onClick={hideNavigation} />
      </div>
      <div
        className={`${styles.bottomBox} ${
          !showNavigation && styles.navigationHideContent
        }`}
      >
        <div className={styles.box20w}></div>
        <div className={styles.box80w}>
          <ul>
            <li>
              <Link href="/" onClick={hideNavigation}>
                <span className={styles.nav}>Strona główna</span>
              </Link>
            </li>
            <li>
              <Link href="/naukaplywania/krakow" onClick={hideNavigation}>
                <span className={styles.nav}>
                  Nauka pływania
                  <span className={styles.location}>kraków</span>
                </span>
              </Link>
            </li>
            <li>
              <Link href="/naukaplywania/korzenna" onClick={hideNavigation}>
                <span className={styles.nav}>
                  Nauka pływania
                  <span className={styles.location}>korzenna</span>
                </span>
              </Link>
            </li>
            <li>
              <Link href="/naukaplywania/gorlice" onClick={hideNavigation}>
                <span className={styles.nav}>
                  {' '}
                  Nauka pływania
                  <span className={styles.location}>gorlice</span>
                </span>
              </Link>
            </li>
            <li>
              <Link href="/naukaplywania/chelmiec" onClick={hideNavigation}>
                <span className={styles.nav}>
                  {' '}
                  Nauka pływania
                  <span className={styles.location}>chełmiec</span>
                </span>
              </Link>
            </li>
            <li>
              <Link href="/ofertaletnia" onClick={hideNavigation}>
                <span className={styles.nav}>
                  {' '}
                  obozy & półkolonie
                  <span className={styles.location}>LATO</span>
                </span>
              </Link>
            </li>
            <li>
              <Link href="/ofertazimowa" onClick={hideNavigation}>
                <span className={styles.nav}>
                  {' '}
                  obozy & półkolonie
                  <span className={styles.location}>ZIMA</span>
                </span>
              </Link>
            </li>
            <li>
              <Link href="/galeria" onClick={hideNavigation}>
                <span className={styles.nav}>galeria</span>
              </Link>
            </li>
            <li>
              <Link
                href="/naukaplywania/poradnikbasenowy"
                onClick={hideNavigation}
              >
                <span className={styles.nav}>Poradnik basenowy</span>
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles.box20w}>
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
    </div>
  );
};

export default Navigation;
