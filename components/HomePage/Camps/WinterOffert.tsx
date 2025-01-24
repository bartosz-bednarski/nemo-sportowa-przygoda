'use client';
import React from 'react';
import styles from './campsSection.module.scss';
import StripH3 from '@/components/Ui/Strips/StripH3/StripH3';
import TitleStripDescriptionStrip from '@/components/Ui/TitleStripDescriptionStrip/TitleStripDescriptionBox';
import LinkButton from '@/components/Ui/Buttons/LinkButton';
import Scrap2 from '@/components/Ui/Scrap/Scrap2';
import BackgroundImage from '@/public/assets/camps/background-img-2.webp';

const WinterOffert = () => {
  return (
    <div className={styles.campLayout} style={{marginTop: '-6rem'}}>
      <img
        src={BackgroundImage.src}
        className={styles.imageFill}
        alt="nauka pływania"
        style={{objectFit: 'cover', objectPosition: 'top'}}
      />
      <div className={styles.content}>
        <StripH3
          stripTextColor="mediumBlue"
          stripBgColor="white"
          title="OFERTA ZIMOWA"
        />
        <div className={styles.rowBox}>
          <TitleStripDescriptionStrip
            title="PÓŁKOLONIE"
            titleStripBgColor="white"
            titleStripTextColor="mediumBlue"
            description="Udowadniamy, że zima to doskonały czas na aktywność! Dzieci
poznają różnorodne sporty zimowe, takie jak łyżwiarstwo, narty czy zabawy na
śniegu, a także uczą się, jak kreatywnie i zdrowo spędzać czas w chłodniejsze dni.
Nasze półkolonie to nie tylko sport, ale również mnóstwo zabawy i przygód w
zimowej scenerii!"
          />
          <TitleStripDescriptionStrip
            title="OBOZY"
            titleStripBgColor="white"
            titleStripTextColor="mediumBlue"
            description="Uczestnicy będą mieli okazję nauczyć się lub doskonalić
umiejętności jazdy na nartach i snowboardzie pod okiem doświadczonych
instruktorów. Zajęcia odbywają się na świetnie przygotowanych stokach, zapewniając
niezapomniane wrażenia i mnóstwo frajdy."
          />
        </div>
        <LinkButton
          title="Dowiedz się więcej"
          textColor="white"
          bgColor="mediumBlue"
          href="/ofertazimowa"
        />
      </div>
      <Scrap2 color="darkBlue" position="bottom" />
    </div>
  );
};

export default WinterOffert;
