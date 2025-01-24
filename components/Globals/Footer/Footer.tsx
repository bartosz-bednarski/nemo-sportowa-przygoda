'use client';
import React from 'react';
import styles from './footer.module.scss';
import Link from 'next/link';
import FacebookImg from '@/public/assets/ui/Icons/social/facebook.svg';
import InstagramImg from '@/public/assets/ui/Icons/social/instagram.svg';
import PhoneImg from '@/public/assets/ui/Icons/social/phone.svg';
import EmailImg from '@/public/assets/ui/Icons/social/email.svg';
import LogoMainWhiteImg from '@/public/assets/logo/Logo-main-white.svg';

const Footer: React.FC = () => {
  return (
    <div className={styles.footer}>
      <img src={LogoMainWhiteImg.src} alt="logoNemo" className={styles.logo} />

      <ul className={styles.navigation}>
        <li>
          <Link href="/assets/statues/NEMO_polityka-prywatnosci.pdf">
            POLITYKA PRYWATNOŚCI
          </Link>
        </li>
        <li>
          <Link href="/regulamin">REGULAMIN</Link>
        </li>
        <li>
          <Link href="/galeria">GALERIA</Link>
        </li>
      </ul>
      <ul className={styles.socjal}>
        <li>
          <Link href="https://www.facebook.com/profile.php?id=61550793572137">
            <img
              src={FacebookImg.src}
              alt="facebookImg"
              className={styles.image}
            />
            NEMO Sportowa Przygoda
          </Link>
        </li>
        <li>
          <Link href="https://www.instagram.com/nemo_sportowa_przygoda_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D">
            <img
              src={InstagramImg.src}
              alt="instagramImg"
              className={styles.image}
            />{' '}
            nemo_sportowa_przygoda_
          </Link>
        </li>
        <li>
          <img src={PhoneImg.src} alt="phoneImg" className={styles.image} />
          +48 519 625 894
        </li>
        <li>
          <img src={EmailImg.src} alt="emailImg" className={styles.image} />
          szkolaplywanianemo1@gmail.com
        </li>
      </ul>
    </div>
  );
};

export default Footer;
