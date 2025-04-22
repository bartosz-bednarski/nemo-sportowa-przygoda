'use client';
import React from 'react';
import styles from './campsSection.module.scss';
import LinkButton from '@/components/Ui/Buttons/LinkButton';
import Scrap2 from '@/components/Ui/Scrap/Scrap2';
import BackgroundImage from '@/public/assets/camps/background-img-2.webp';
import StickerH3 from '@/components/Ui/Headers/Stickers/StickerH3/StickerH3';

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
        <StickerH3
          stripTextColor="mediumBlue"
          stripBgColor="white"
          title=""
          titleStrip="OFERTA ZIMOWA"
        />
        <div className={styles.rowBox}>
          <div className={styles.cardBoxWinter}>
            <h4>PÓŁKOLONIE</h4>
            <p>
              Udowadniamy, że zima to doskonały czas na aktywność! Dzieci
              poznają różnorodne sporty zimowe, takie jak łyżwiarstwo, narty czy
              zabawy na śniegu, a także uczą się, jak kreatywnie i zdrowo
              spędzać czas w chłodniejsze dni. Nasze półkolonie to nie tylko
              sport, ale również mnóstwo zabawy i przygód w zimowej scenerii!
            </p>
          </div>
          <div className={styles.cardBoxWinter}>
            <h4>OBOZY</h4>
            <p>
              Uczestnicy będą mieli okazję nauczyć się lub doskonalić
              umiejętności jazdy na nartach i snowboardzie pod okiem
              doświadczonych instruktorów. Zajęcia odbywają się na świetnie
              przygotowanych stokach, zapewniając niezapomniane wrażenia i
              mnóstwo frajdy.
            </p>
          </div>
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
