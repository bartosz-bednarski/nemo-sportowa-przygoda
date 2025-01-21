'use client';
import React from 'react';
import styles from './pointSection.module.scss';
import NemoCustomLogo from '@/public/assets/customLogos/nemo-registration.svg';
const PointSection1 = () => {
  return (
    <div className={styles.pointSection}>
      <span className={styles.title} id="1">
        1. ZAPISY NA ZAJĘCIA
      </span>
      <div className={styles.rowBox}>
        <img src={NemoCustomLogo.src} alt="nemoLogo" className={styles.image} />

        <div className={styles.text}>
          <span className={styles.textBox}>
            <span className={styles.title}>WYBÓR RODZAJU ZAJĘĆ</span>
            Szkoła oferuje kursy grupowe oraz zajęcia indywidualne i grupowe w
            różnych kategoriach wiekowych (niemowlaki, dzieci, młodzież,
            dorośli). Wybierz odpowiednią opcję w zależności od swoich potrzeb.
          </span>
          <span className={styles.textBox}>
            <span className={styles.title}>REZERWACJA MIEJSCA</span>

            <ul>
              <li style={{listStyleType: 'none'}}>
                <b>
                  Zarezerwuj miejsce na wybrane zajęcia poprzez jeden z
                  poniższych kanałów:
                </b>
              </li>
              <li>Formularz ACTIVE NOW - szkolaplywanianemo1</li>
              <li>Strona internetowa</li>
              <li>Facebook: Szkoła Pływania NEMO</li>
              <li>Instagram: szkola.plywania.nemo</li>
              <li>Telefonicznie: Zadzwoń pod numer +48 519 625 894</li>
            </ul>
          </span>{' '}
          <span className={styles.textBox}>
            <span className={styles.title}>POTWIERDZENIE REZERWACJI</span>
            Po wypełnieniu formularza zgłoszeniowego, Organizator wyśle
            potwierdzenie rezerwacji na podany adres e-mail w ciągu 3 dni.
          </span>{' '}
          <span className={styles.textBox}>
            <span className={styles.title}>PIERWSZA LEKCJA PRÓBNA</span>
            Nowi klienci mogą skorzystać z lekcji próbnej. Po jej odbyciu
            zdecydujesz, czy chcesz kontynuować kurs. W przypadku kontynuacji,
            opłata za pierwszą lekcję zostanie wliczona w cenę kursu.
          </span>
          <span className={styles.textBox}>
            <span className={styles.title}>OPŁATA ZA KURS</span>
            Po potwierdzeniu chęci udziału, należy uiścić opłatę zgodnie z
            obowiązującym cennikiem, dostępnym na stronie
            www.nemosportowaprzygoda.pl.
          </span>
        </div>
      </div>
    </div>
  );
};
export default PointSection1;
