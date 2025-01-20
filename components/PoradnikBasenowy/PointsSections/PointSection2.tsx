'use client';
import React from 'react';
import styles from './pointSection.module.scss';
import NemoHeisenbergLogo from '@/public/assets/customLogos/nemo-heisenberg.svg'

const PointSection2 = () => {
  return (
    <div className={styles.pointSection} id="2">
      <span className={styles.title}>2. CENNIK I OPŁATY</span>
      <div className={styles.rowBox}>
        <img src={NemoHeisenbergLogo.src} alt='nemoLogo' className={styles.image}/>
        

        <div className={styles.text}>
          <span className={styles.textBox}>
            <span
              className={styles.title}
            >
              CENNIK{' '}
            </span>
            Cennik zajęć w Nemo Sportowa Przygoda może się różnić w zależności
            od lokalizacji i rodzaju zajęć. Dlatego zalecamy sprawdzenie
            aktualnych cen bezpośrednio dla wybranej lokalizacji na stronie
            internetowej szkoły lub kontaktując się z wybranym ośrodkiem. Ceny
            mogą się różnić także w zależności od pory roku czy dostępnych
            promocji.
          </span>
          <span className={styles.textBox}>
            <span
              className={styles.title}
            >
              JAK DOKONAĆ PŁATNOŚCI?
            </span>
            <ul>
              <li>
                <b>Płatność przez aplikacje Active Now w panelu klienta</b>
              </li>
              <li>
                <b>Przelew bankowy:</b> W przypadku wyboru metody płatności
                przelewem bankowym, przelewu dokonuje się na następujący numer
                rachunku bankowego:
                <br />
                <b>53 1140 2004 0000 3202 8407 3123</b>
                <br />W tytule przelewu należy wpisać: oznaczenie basenu, imię i
                nazwisko Uczestnika Kursu.
                <br />
                <b>Przykład: tytuł przelewu: KS Bronowianka, Jan Kowalski</b>
              </li>
              <li>
                <b>Płatność gotówką z góry:</b> Płatności można dokonać gotówką
                bezpośrednio u Organizatora – Wiktorii Fryczek lub u instruktora
                za zgodą organizatora.
              </li>
            </ul>
          </span>{' '}
          <span className={styles.textBox}>
            <span
              className={styles.title}
            >
              OPŁATY ZA KURSY GRUPOWE
            </span>
            Powinny zostać opłacone z góry za dany semestr w terminie 14 dni od
            daty pierwszych zajęć cyklu Kursu. Jedynie w szczególnie
            uzasadnionych przypadkach Organizator może wyrazić zgodę na
            rozłożenie płatności na raty.
          </span>
          <span className={styles.textBox}>
            <span
              className={styles.title}
            >
              OPŁATY ZA KURSY INDYWIDUALNE
            </span>
            Powinny zostać opłacone z góry za dany miesiąc, w terminie do 10
            dnia danego miesiąca.
          </span>
          <span className={styles.textBox}>
            <span
              className={styles.title}
            >
              PŁATNOŚCI RATALNE
            </span>
            W celu uzgodnienia płatności ratalnych prosimy o kontakt pod numerem
            telefonu 519 625 894 lub mailowo na adres szkolaplywanianemo1
            <br />
            @gmail.com.
            <br />
            Chętnie odpowiemy na wszystkie pytania!
          </span>
        </div>
      </div>
    </div>
  );
};

export default PointSection2;
