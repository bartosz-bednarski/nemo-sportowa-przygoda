'use client';
import React from 'react';
import styles from './pointSection.module.scss';
import NemoPhotographerLogo from '@/public/assets/customLogos/nemo-photographer.svg'

const PointSection6: React.FC = () => {
  return (
    <div className={styles.pointSection} style={{paddingBottom: '9rem'}} id="6">
      <span className={styles.title}>
        6. ZGODA NA PUBLIKACJĘ WIZERUNKU
      </span>
      <div className={styles.rowBox}>
        <img src={NemoPhotographerLogo.src} alt='nemoLogo' className={styles.image}/>
       
        <div className={styles.text}>
          <span className={styles.textBox}>
            <span
              className={styles.title}
            >
              ZGODA NA PUBLIKACJĘ
            </span>
            Organizator może gromadzić zgody uczestników na publikację ich
            wizerunku w celach promocyjnych. Uczestnicy Kursu lub ich
            Rodzice/Opiekunowie prawni wyrażają zgodę na udostępnienie wizerunku
            uczestnika w formie zdjęć lub nagrań promujących działalność Szkoły
            Pływania „NEMO SPORTOWA PRZYGODA” prowadzonej przez Wiktorię
            Fryczek.
            <br />
            <br />
            Zgoda może być udzielona w formie pisemnej lub za pośrednictwem
            elektronicznego formularza zgłoszeniowego w aplikacji ACTIVE NOW.
          </span>
          <span className={styles.textBox}>
            <span
              className={styles.title}
            >
              BRAK ZGODY NA PUBLIKACJĘ
            </span>

            <ul>
              <li style={{listStyleType: 'none'}}>
                {' '}
                Uczestnik Kursu lub jego Rodzic/Opiekun prawny ma prawo nie
                wyrazić zgody na publikację wizerunku w celach promocyjnych
                Szkoły Pływania „NEMO SPORTOWA PRZYGODA” prowadzonej przez
                Wiktorię Fryczek.
                <br />
                <br />
              </li>
              <li style={{listStyleType: 'none'}}>
                <b>Sposób zgłoszenia braku zgody:</b>
              </li>
              <li>
                Nieakceptowanie regulaminu w aplikacji ACTIVE NOW podczas
                rejestracji.
              </li>
              <li>
                Przesłanie wiadomości e-mail z informacją o braku zgody na
                adres: szkolaplywanianemo1
                <br />
                @gmail.com.
              </li>
            </ul>
          </span>
        </div>
      </div>
    </div>
  );
};

export default PointSection6;
