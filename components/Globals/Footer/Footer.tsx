'use client';
import React from 'react';
import styles from './footer.module.scss';
import Link from 'next/link';
import FacebookImg from '@/public/assets/ui/Icons/social/facebook.svg';
import InstagramImg from '@/public/assets/ui/Icons/social/instagram.svg';
import TiktokImg from '@/public/assets/ui/Icons/social/tiktok.svg';
import PhoneImg from '@/public/assets/ui/Icons/social/phone.svg';
import EmailImg from '@/public/assets/ui/Icons/social/email.svg';
import LogoMainWhiteImg from '@/public/assets/logo/Logo-main-white.svg';

const Footer: React.FC = () => {
  return (
    <div className={styles.footer}>
      <img
        src={LogoMainWhiteImg.src}
        alt="logoNemo"
        title="NEMO Sportowa Przygoda"
        width={230}
        height={100}
        loading="lazy"
        className={styles.logo}
      />

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
              title="facebook"
              className={styles.image}
              loading="lazy"
              width={24}
              height={24}
            />
            NEMO Sportowa Przygoda
          </Link>
        </li>
        <li>
          <Link href="https://www.instagram.com/nemo_sportowa_przygoda_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D">
            <img
              src={InstagramImg.src}
              alt="instagramImg"
              title="instagram"
              className={styles.image}
              loading="lazy"
              width={24}
              height={24}
            />
            nemo_sportowa_przygoda_
          </Link>
        </li>
        <li>
          <Link href="https://www.tiktok.com/@nemportowaprzygoda?is_from_webapp=1&sender_device=pc">
            <img
              src={TiktokImg.src}
              alt="tiktokImg"
              title="tiktok"
              className={styles.image}
              loading="lazy"
              width={24}
              height={24}
            />
            nemportowaprzygoda
          </Link>
        </li>
        <li>
          <img
            src={PhoneImg.src}
            alt="phoneImg"
            title="phone"
            className={styles.image}
            loading="lazy"
            width={24}
            height={24}
          />
          +48 519 625 894
        </li>
        <li>
          <img
            src={EmailImg.src}
            alt="emailImg"
            title="email"
            className={styles.image}
            loading="lazy"
            width={24}
            height={24}
          />
          szkolaplywanianemo1@gmail.com
        </li>
      </ul>
    </div>
  );
};

export default Footer;
