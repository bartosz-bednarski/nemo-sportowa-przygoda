'use client';
import React from 'react';
import styles from './pointSection.module.scss';
import NemoMegaphoneLogo from '@/public/assets/customLogos/nemo-megaphone.svg'

const PointSection4 = () => {
  return (
    <div className={styles.pointSection} id="4">
      <span className={styles.title}>
        4. ZA CO ODPOWIADA INSTRUKTOR?
      </span>
      <div className={styles.rowBox}>
        <img src={NemoMegaphoneLogo.src} alt='nemoLogo' className={styles.image}/>
       
        <div className={styles.text}>
          <span className={styles.textBox}>
            <span
              className={styles.title}
            >
              ODPOWIEDZIALNOŚĆ INSTRUKTORA
            </span>
            <ul>
              <li style={{listStyleType: 'none'}}>
                <b>1. Moment przejęcia odpowiedzialności:</b>
              </li>
              <li>
                Instruktor ponosi odpowiedzialność za Uczestnika Kursu od
                momentu sprawdzenia obecności, gdy uczestnik znajduje się przed
                niecką basenową.
              </li>
              <li>
                Instruktor nie ponosi odpowiedzialności za Uczestników
                znajdujących się w szatni.
              </li>
              <li style={{listStyleType: 'none'}}>
                <b>2. Zakończenie zajęć:</b>
              </li>
              <li>
                Po zakończeniu zajęć Instruktor odprowadza uczestników do
                wejścia do szatni, po czym przestaje ponosić odpowiedzialność za
                ich bezpieczeństwo.
              </li>
              <li style={{listStyleType: 'none'}}>
                <b>3. Wymagania względem Uczestników:</b>
              </li>
              <li>
                Uczestnicy zobowiązani są do przestrzegania poleceń Instruktora,
                szczególnie dotyczących bezpieczeństwa i zasad zachowania się na
                basenie.
              </li>
            </ul>
          </span>
          <span className={styles.textBox}>
            <span
              className={styles.title}
            >
              OBOWIĄZKI UCZESTNIKÓW KURSU
            </span>
            <ul>
              <li>
                Stosowanie się do poleceń Instruktora oraz znaków i sygnałów
                dźwiękowych Obsługi basenu.
              </li>
              <li>
                Korzystanie z basenów i urządzeń w sposób dostosowany do swoich
                umiejętności, sprawności i stanu zdrowia.
              </li>
              <li>
                Zachowanie szczególnej ostrożności na schodach, przejściach i
                podestach, zwłaszcza mokrych.
              </li>
              <li>
                Użytkowanie sprzętu basenowego zgodnie z jego przeznaczeniem i
                odnoszenie go na wyznaczone miejsce po użyciu.
              </li>
            </ul>
          </span>{' '}
          <span className={styles.textBox}>
            <span
              className={styles.title}
            >
              ZGŁASZANIE ZDARZEŃ
            </span>
            Bezzwłoczne informowanie Instruktora o wypadkach, urazach lub innych
            zdarzeniach mogących mieć wpływ na bezpieczeństwo własne lub innych
            uczestników.
          </span>{' '}
        </div>
      </div>
    </div>
  );
};

export default PointSection4;
