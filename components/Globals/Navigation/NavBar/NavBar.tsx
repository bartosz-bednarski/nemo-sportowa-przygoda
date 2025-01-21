'use client';
import React, {useState} from 'react';
import styles from './navBar.module.scss';
import NavBtn from '@/components/Ui/Buttons/NavBtn/NavBtn';
import Navigation from '../Navigation/Navigation';
import LogoMainWhiteImg from '@/public/assets/logo/Logo-main-white.svg';
import LogoMainDarkBlueImg from '@/public/assets/logo/Logo-main-darkBlue.svg';
import Link from 'next/link';
import {useRouter} from 'next/navigation';
import {usePathname} from 'next/navigation';

const NavBar: React.FC = () => {
  const [showNavigation, setShowNavigation] = useState(false);
  const [firstLoad, setFirstLoad] = useState(true);
  const router = useRouter();
  const pathName = usePathname();
  return (
    <>
      <nav className={styles.navBar} style={{zIndex: showNavigation ? 10 : 11}}>
        <Link href="/">
          <img
            src={
              pathName.includes('ofertazimowa')
                ? LogoMainDarkBlueImg.src
                : LogoMainWhiteImg.src
            }
            alt="logoNemo"
            className={styles.logo}
          />
        </Link>
        <div className={styles.btnsBox}>
          <NavBtn type="menu" onClick={() => setShowNavigation(true)} />
          <NavBtn
            type="customer-panel"
            onClick={() => {
              router.push('https://app.activenow.io/users/sign_in');
            }}
          />
        </div>
      </nav>
      <Navigation
        showNavigation={showNavigation}
        hideNavigation={() => setShowNavigation(false)}
        firstLoad={firstLoad}
        setFirstLoad={() => setFirstLoad(false)}
      />
    </>
  );
};

export default NavBar;
