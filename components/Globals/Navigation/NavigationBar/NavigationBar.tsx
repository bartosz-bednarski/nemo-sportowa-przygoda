'use client';
import React from 'react';
import styles from './navigationBar.module.scss';
import NavBtn from '@/components/Ui/Buttons/NavBtn/NavBtn';
import LogoMainWhiteImg from '@/public/assets/logo/Logo-main-white.svg';
import LogoMainDarkBlueImg from '@/public/assets/logo/Logo-main-darkBlue.svg';
import Link from 'next/link';
import {useRouter} from 'next/navigation';
import {usePathname} from 'next/navigation';

interface NavigationBarProps {
  showMenuHandler: () => void;
}

const NavigationBar = ({showMenuHandler}: NavigationBarProps) => {
  const router = useRouter();
  const pathName = usePathname();
  return (
    <>
      <nav className={styles.navBar}>
        <Link href="/" title="Strona Główna" aria-label="Strona Główna">
          <img
            src={
              pathName.includes('ofertazimowa')
                ? LogoMainDarkBlueImg.src
                : LogoMainWhiteImg.src
            }
            alt="logoNemo"
            title="NEMO Sportowa Przygoda"
            loading="eager"
            width={230}
            height={100}
            className={styles.logo}
          />
        </Link>
        <div className={styles.btnsBox}>
          <NavBtn type="menu" onClick={showMenuHandler} />
          <NavBtn
            type="customer-panel"
            onClick={() => {
              router.push('https://app.activenow.io/users/sign_in');
            }}
          />
        </div>
      </nav>
    </>
  );
};

export default NavigationBar;
