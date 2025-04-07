'use client';
import React from 'react';
import styles from './campsSection.module.scss';
import TitleStripDescriptionStrip from '@/components/Ui/TitleStripDescriptionStrip/TitleStripDescriptionBox';
import LinkButton from '@/components/Ui/Buttons/LinkButton';
import BackgroundImage from '@/public/assets/camps/background-img-1.webp';
import StickerH3 from '@/components/Ui/Headers/Stickers/StickerH3/StickerH3';

const SummerOffert = () => {
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
          stripTextColor="white"
          stripBgColor="basicGreen"
          title=""
          titleStrip='OFERTA LETNIA'
        />
        <div className={styles.rowBox}>
        <div className={styles.cardBoxSummer}>
            <h4>PÓŁKOLONIE</h4>
            <p>Zachęcamy dzieci do aktywnego trybu życia i nauki spędzania
czasu w ruchu! Podczas półkolonii będą miały okazję poznać wiele ciekawych
sportów i aktywności, a także odkrywać lokalną kulturę poprzez zabawy i wycieczki.
To doskonała okazja do rozwoju fizycznego i zdobycia nowych, wartościowych
doświadczeń.</p>
          </div>
          <div className={styles.cardBoxSummer}>
            <h4>OBOZY</h4>
            <p>Nasze obozy mają na celu pokazanie, jak ważne i przyjemne może
być pływanie oraz jak wspaniale można spędzić czas, korzystając z jeziora.
Dodatkowo, uczestnicy odkryją radość z jazdy na rowerze, pokonując
kilkunastokilometrowe trasy, co pozwoli im poczuć satysfakcję z aktywnego
spędzania czasu na świeżym powietrzu.</p>
          </div>
          
        </div>
        <LinkButton
          title="Dowiedz się więcej"
          textColor="white"
          bgColor="basicGreen"
          href="/ofertaletnia"
        />
      </div>
    </div>
  );
};

export default SummerOffert;
