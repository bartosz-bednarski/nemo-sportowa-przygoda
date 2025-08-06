'use client';
import 'react';
import styles from './swimmingSection.module.scss';
import AboutTextPoppins from '../../Ui/AboutTextPoppins/AboutTextPoppins';
import BackgroundText from '../../Ui/BackgroundText/BackgroundText';
import SwimmingPools from './SwimmingPools';
import StickerH3 from '@/components/Ui/Headers/Stickers/StickerH3/StickerH3';
import Link from 'next/link';
import StickerH4 from '@/components/Ui/Headers/Stickers/StickerH4/StickerH4';

const SwimmingSection = () => {
  return (
    <section className={styles.swimmingLayout} id="zapisz-sie">
      <div className={styles.registrationContainer}>
        <h2>
          <span className={styles.accent}>
            w semestrze jesienno-zimowym 25/26
          </span>
        </h2>
        <div className={styles.rowBox}>
          <div className={styles.columnBox}>
            <StickerH4
              stripBgColor="basicOrange"
              stripTextColor="white"
              title=""
              titleStrip="BASENY KRAKÓW"
            />
            <Link
              href="/naukaplywania/harmonogram-krakow"
              className={styles.signUpButton}
            >
              Zapisz się
            </Link>
          </div>
          <div className={styles.columnBox}>
            <StickerH4
              stripBgColor="basicOrange"
              stripTextColor="white"
              title=""
              titleStrip="KORZENNA | GORLICE | WYSOWA | LIMANOWA"
            />
            <Link
              href="/naukaplywania/harmonogram"
              className={styles.signUpButton}
            >
              Zapisz się
            </Link>
          </div>
        </div>
        <p className={styles.paragraph}>
          BABY SWIM | DZIECI OD 3 LAT | MŁODZIEŻ | DOROŚLI
        </p>
      </div>
      <div className={styles.about}>
        <BackgroundText title="BOMBELKI MAŁE I DUŻE" />
        <StickerH3
          stripTextColor="basicOrange"
          stripBgColor="white"
          titleStrip="NAUKA PŁYWANIA"
          title=""
        />
        <AboutTextPoppins
          title="Zacznij swoją przygodę z pływaniem!"
          description="Nauka pływania to doskonały sposób na wzmocnienie kondycji, poprawę zdrowia i
pokonanie lęku przed wodą. Oferujemy zajęcia dla dzieci, młodzieży i dorosłych na
różnych poziomach zaawansowania. Nasi doświadczeni instruktorzy zadbają o Twoje
bezpieczeństwo i indywidualne postępy. Zapisz się już dziś i odkryj radość z pływania!"
          titleColor="mediumBlue"
          textAlign="center"
          alignItems="center"
        />
        <div className={styles.categoriesBoxRow}>
          <div className={styles.cardBox}>
            <h4>NIEMOWLAKI</h4>
            <p>
              Maluchy oswajają się z wodą poprzez zabawy z opiekunami. Ćwiczą
              podstawowe ruchy, które wspierają rozwój motoryczny i wzmacniają
              więź z rodzicem.
            </p>
          </div>
          <div className={styles.cardBox}>
            <h4>DZIECI I MŁODZIEŻ</h4>
            <p>
              Dzieci uczą się podstaw pływania w formie zabawy. Poprawiają
              technikę i koordynację, zdobywając kolejne umiejętności, w kraulu
              oraz grzbiecie. Młodzież uczy się pływać czterema stylami (styl
              dowolny, grzbietowy, klasyczny, motylkowy) oraz technik nawrotów.
              Zajęcia pomagają doskonalić technikę, poprawiać wytrzymałość i
              przygotowują do ewentualnych startów w zawodach pływackich.
            </p>
          </div>
          <div className={styles.cardBox}>
            <h4>DOROŚLI</h4>
            <p>
              Mogą zarówno doskonalić swoje umiejętności, jak i rozpocząć naukę
              pływania od zera. Bez względu na poziom zaawansowania, zajęcia
              pomagają zbudować pewność siebie w wodzie, poprawić kondycję oraz
              nauczyć się prawidłowej techniki pod okiem doświadczonych
              instruktorów.
            </p>
          </div>
        </div>
      </div>

      <SwimmingPools />
    </section>
  );
};

export default SwimmingSection;
