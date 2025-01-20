'use client';
import React from 'react';
import styles from './pointSection.module.scss';
import NemoCustomLogo from '@/public/assets/customLogos/nemo-organization.svg'

const PointSection3 = () => {
  return (
    <div className={styles.pointSection} id="3">
      <span className={styles.title}>3. ODRABIANIE ZAJĘĆ</span>
      <div className={styles.rowBox}>
        <img src={NemoCustomLogo.src} alt='nemoLogo' className={styles.image}/>
        
        <div className={styles.text}>
          <span className={styles.textBox}>
            <span
              className={styles.title}
            >
              ZGŁASZANIE NIEOBECNOŚCI
            </span>
            Zgłaszanie nieobecności odbywa się za pomocą aplikacji ACTIVE NOW.
            Uczestnicy Kursu mają możliwość odrobienia zajęć w innym terminie,
            pod warunkiem spełnienia warunków opisanych w punkcie 3.2.
          </span>
          <span className={styles.textBox}>
            <span
              className={styles.title}
            >
              WARUNKI ZGŁASZANIA NIEOBECNOŚCI
            </span>
            <ul>
              <li>
                <b>Kurs Grupowy: </b>Zgłoszenie nieobecności najpóźniej 8 godzin
                przed rozpoczęciem zajęć.
              </li>
              <li>
                <b>Zajęcia Indywidualne oraz dwuosobowe: </b>Zgłoszenie
                nieobecności najpóźniej 12 godzin przed rozpoczęciem zajęć.
              </li>
            </ul>
          </span>{' '}
          <span className={styles.textBox}>
            <span
              className={styles.title}
            >
              FORMA ODRABIANIA ZAJĘĆ
            </span>

            <ul>
              <li style={{listStyleType: 'none'}}>
                {' '}
                <b>
                  Zajęcia należy odrobić w takiej samej formie, w jakiej
                  odbywały się pierwotne zajęcia:
                </b>
              </li>
              <li>Zajęcia grupowe - odrabiane w formie grupowej.</li>
              <li>Zajęcia indywidualne - odrabiane indywidualnie.</li>
              <li>Zajęcia dwuosobowe - odrabiane w formie dwuosobowej.</li>
            </ul>
          </span>
          <span className={styles.textBox}>
            <span
              className={styles.title}
            >
              REZERWACJA TERMINU ODRABIANIA
            </span>
            Odrabianie odbywa się poprzez zapisanie się na wybraną godzinę zajęć
            w aplikacji ACTIVE NOW, w ramach dostępnych miejsc. Bardzo ważne
            jest upewnianie dostępnego terminu oraz lokalizacji na jakim basenie
            odbywają się zajęcia.
            <br />
            <br />
            Jeżeli jest brak wolnych terminów, możliwe jest ustalenie innego
            terminu z Organizatorem, kontaktując się pod numerem: <br />
            +48 519 625 894.
            <br />
            <br />
            Brak możliwości zwrotu opłaty: W przypadku nieobecności na
            zajęciach, opłata za zajęcia nie podlega zwrotowi.
          </span>
          <span className={styles.textBox}>
            <span
              className={styles.title}
            >
              ODRABIANIE KURSY GRUPOWE
            </span>
            Zbyt późne zgłoszenie nieobecności generuje straty finansowe dla
            Organizatora. Miejsce zajęte przez nieobecnego uczestnika mogłoby
            zostać udostępnione innej osobie, która zgłosiła chęć odrobienia
            swoich nieobecnych zajęć w terminie.
          </span>
          <span className={styles.textBox}>
            <span
              className={styles.title}
            >
              ODRABIANIE KURSY INDYWIDUALNE
            </span>
            W przypadku kursów indywidualnych i dwuosobowych opóźnione
            zgłoszenie nieobecności utrudnia organizację zajęć i uniemożliwia
            zapełnienie luki w grafiku. W efekcie Organizator ponosi straty
            finansowe, traci czas oraz napotyka trudności w bieżącym zarządzaniu
            zajęciami.
          </span>
        </div>
      </div>
    </div>
  );
};

export default PointSection3;
