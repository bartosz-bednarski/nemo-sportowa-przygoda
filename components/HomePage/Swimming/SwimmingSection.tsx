'use client';
import 'react';
import styles from './swimmingSection.module.scss';
import AboutTextPoppins from '../../Ui/AboutTextPoppins/AboutTextPoppins';
import BackgroundText from '../../Ui/BackgroundText/BackgroundText';
import SwimmingPools from './SwimmingPools';
import TitleStripDescriptionStrip from '@/components/Ui/TitleStripDescriptionStrip/TitleStripDescriptionBox';
import StripH3 from '@/components/Ui/Strips/StripH3/StripH3';

const SwimmingSection = () => {
  return (
    <section className={styles.swimmingLayout}>
      <div className={styles.about}>
        <BackgroundText title="BOMBELKI MAŁE I DUŻE" />
        <StripH3
          stripTextColor="basicOrange"
          stripBgColor="white"
          title="NAUKA PŁYWANIA"
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
          {' '}
          <TitleStripDescriptionStrip
            title="NIEMOWLAKI"
            titleStripBgColor="white"
            titleStripTextColor="mediumBlue"
            description="Maluchy oswajają się z wodą poprzez zabawy z opiekunami. Ćwiczą
podstawowe ruchy, które wspierają rozwój motoryczny i wzmacniają więź z rodzicem."
          />
          <TitleStripDescriptionStrip
            title="DZIECI I MŁODZIEŻ"
            titleStripBgColor="white"
            titleStripTextColor="mediumBlue"
            description="Dzieci uczą się podstaw pływania w formie zabawy. Poprawiają technikę i
koordynację, zdobywając kolejne umiejętności, w kraulu oraz grzbiecie. Młodzież uczy się pływać czterema stylami (styl dowolny, grzbietowy, klasyczny,
motylkowy) oraz technik nawrotów. Zajęcia pomagają doskonalić technikę, poprawiać
wytrzymałość i przygotowują do ewentualnych startów w zawodach pływackich."
          />
          <TitleStripDescriptionStrip
            title="DOROŚLI"
            titleStripBgColor="white"
            titleStripTextColor="mediumBlue"
            description="Mogą zarówno doskonalić swoje umiejętności, jak i rozpocząć naukę
pływania od zera. Bez względu na poziom zaawansowania, zajęcia pomagają
zbudować pewność siebie w wodzie, poprawić kondycję oraz nauczyć się
prawidłowej techniki pod okiem doświadczonych instruktorów."
          />
        </div>
      </div>

      <SwimmingPools />
    </section>
  );
};

export default SwimmingSection;
