'use client';
import React from 'react';
import styles from './campsSection.module.scss';
import Image from 'next/image';
import StripH3 from '@/components/Ui/Strips/StripH3/StripH3';
import TitleStripDescriptionStrip from '@/components/Ui/TitleStripDescriptionStrip/TitleStripDescriptionStrip';
import LinkButton from '@/components/Ui/Buttons/LinkButton';

const SummerOffert: React.FC = () => {
  return (
    <div className={styles['camps__offert']}>
      <Image
        src="/assets/camps/background-img-1.webp"
        fill={true}
        alt="nauka pływania"
        style={{objectFit: 'cover', objectPosition: 'top'}}
      />
      <div className={styles['camps__offert__content']}>
        <StripH3
          stripTextColor="white"
          stripBgColor="basicGreen"
          title="OFERTA LETNIA"
        />
        <div className={styles['camps__offert__content__categories']}>
          <TitleStripDescriptionStrip
            title="PÓŁKOLONIE"
            titleScale={1.2}
            titleStripBgColor="white"
            titleStripTextColor="basicGreen"
            description="Zachęcamy dzieci do aktywnego trybu życia i nauki spędzania
czasu w ruchu! Podczas półkolonii będą miały okazję poznać wiele ciekawych
sportów i aktywności, a także odkrywać lokalną kulturę poprzez zabawy i wycieczki.
To doskonała okazja do rozwoju fizycznego i zdobycia nowych, wartościowych
doświadczeń."
            descriptionScale={1.2}
            descriptionStripBgColor="basicGreen"
            descriptionStripTextColor="white"
          />
          <TitleStripDescriptionStrip
            title="OBOZY"
            titleScale={2}
            titleStripBgColor="white"
            titleStripTextColor="basicGreen"
            description="Nasze obozy mają na celu pokazanie, jak ważne i przyjemne może
być pływanie oraz jak wspaniale można spędzić czas, korzystając z jeziora.
Dodatkowo, uczestnicy odkryją radość z jazdy na rowerze, pokonując
kilkunastokilometrowe trasy, co pozwoli im poczuć satysfakcję z aktywnego
spędzania czasu na świeżym powietrzu."
            descriptionScale={1.2}
            descriptionStripBgColor="basicGreen"
            descriptionStripTextColor="white"
          />
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
