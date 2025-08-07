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
      <div className={styles.navMap}>
        <ul className={styles.navigation}>
          <li>
            <b>NAUKA PŁYWANIA</b>
          </li>
          <li>
            <Link href="/naukaplywania">Oferta Ogólna</Link>
          </li>
          <li>
            <Link href="/naukaplywania/krakow">Oferta Kraków</Link>
          </li>
          <li>
            <Link href="/naukaplywania/korzenna">Oferta Korzenna</Link>
          </li>
          <li>
            <Link href="/naukaplywania/gorlice">Oferta Gorlice</Link>
          </li>
          <li>
            <Link href="/naukaplywania/chelmiec">Oferta Chełmiec</Link>
          </li>
        </ul>
        <ul className={styles.navigation}>
          <li>
            <b>OBOZY I PÓŁKOLONIE</b>
          </li>
          <li>
            <Link href="/ofertaletnia">Oferta Letnia</Link>
          </li>
          <li>
            <Link href="/ofertazimowa">Oferta Zimowa</Link>
          </li>
        </ul>
        <ul className={styles.navigation}>
          <li>
            <b>INFORMACJE</b>
          </li>
          <li>
            <Link href="/assets/statues/NEMO_polityka-prywatnosci.pdf">
              Polityka prywatności
            </Link>
          </li>
          <li>
            <Link href="/regulamin">Regulamin</Link>
          </li>
          <li>
            <Link href="/galeria">Galeria</Link>
          </li>
          <li>
            <Link href="/naukaplywania/poradnikbasenowy">
              Poradnik basenowy
            </Link>
          </li>
        </ul>
        <ul className={styles.navigation}>
          <li>
            <b>HARMONOGRAMY</b>
          </li>
          <li>
            <Link href="/naukaplywania/harmonogram-krakow">Kraków</Link>
          </li>
          <li>
            <Link href="/naukaplywania/harmonogram">Małopolska</Link>
          </li>
        </ul>
      </div>

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
