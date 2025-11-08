'use client';
import React, {useEffect, useState} from 'react';
import styles from './priceLessons.module.scss';
import StickerH4, {
  StickerH4PropsType,
} from '@/components/Ui/Headers/Stickers/StickerH4/StickerH4';
import SingInButton from '@/components/Ui/Buttons/SignInButton';
import {signInButtonType} from '@/types/UI/buttons';
import BubbleIcon from '@/public/assets/ui/Icons/zarowka.svg';
import NemoIcon from '@/public/assets/logo/Logo-nemo-bubble-only.svg';
import CloseIcon from '@/public/assets/ui/Icons/x.svg';

export interface PriceLessonsPropsType {
  stickerH4: StickerH4PropsType;
  oneLesson: {
    price: string;
    time: number;
  };
  tenLessons?: {
    price: string;
    time: string;
  };

  button: signInButtonType;
}
interface PriceLessonsType extends PriceLessonsPropsType {
  showLessonId: string | null;
  id: string;
  onShowDescription: (id: string | null) => void;
}
type GroupType = 'GRUPOWE' | 'INDYWIDUALNE' | 'DWUOSOBOWE' | 'TRZYOSOBOWE';

const GROUP_DESCRIPTION: Record<GroupType, string> = {
  GRUPOWE:
    'Lekcje grupowe to zajęcia w kilkuosobowej grupie o zbliżonym poziomie umiejętności. Tego typu zajęcia sprzyjają integracji oraz rozwijają umiejętność współpracy i rywalizacji w przyjaznej atmosferze. Instruktor prowadzi różnorodne ćwiczenia, angażując całą grupę i dostosowując tempo do jej poziomu. Zajęcia grupowe są idealne dla osób, które lubią uczyć się w towarzystwie innych i cenią sobie dynamikę grupy. Jest to również najbardziej przystępna cenowo opcja, oferująca przy tym bogaty program ćwiczeń i technik pływackich.',
  INDYWIDUALNE:
    'Lekcje indywidualne to zajęcia dostosowane w pełni do indywidualnych potrzeb ucznia. Instruktor pracuje wyłącznie z jednym uczestnikiem, co pozwala na szybkie postępy i maksymalne skupienie na rozwijaniu umiejętności. Jest to idealny wybór dla osób, które mają konkretne cele, potrzebują intensywnego wsparcia lub chcą przełamać barierę lęku przed wodą. Trener na bieżąco koryguje technikę i dostosowuje ćwiczenia do poziomu oraz tempa ucznia, dzięki czemu nauka jest efektywna i precyzyjnie ukierunkowana.',
  DWUOSOBOWE:
    'Lekcje dwuosobowe pozwalają dwóm uczestnikom uczyć się razem, co sprzyja wzajemnej motywacji i wprowadza element współpracy. To świetna opcja dla par, przyjaciół czy rodzeństw, którzy chcą wspólnie doskonalić umiejętności pływackie. Instruktor dostosowuje ćwiczenia i techniki do potrzeb obu uczestników, dzięki czemu każdy z nich osiąga postępy w przyjaznej atmosferze. Taka forma jest bardziej ekonomiczna niż lekcje indywidualne, a jednocześnie zapewnia dużo uwagi instruktora.',
  TRZYOSOBOWE:
    'Nasze zajęcia na basenie dla trzyosobowych grup to doskonała okazja do nauki i doskonalenia pływania w kameralnej atmosferze. Dzięki małej liczbie uczestników, każdy otrzymuje indywidualne wsparcie instruktora, który dopasowuje program do poziomu grupy. To idealne rozwiązanie dla osób, które chcą uczyć się w przyjaznym, bezpiecznym środowisku i w pełni korzystać z czasu spędzonego na basenie.',
};

const PriceLessons = ({
  stickerH4,
  oneLesson,
  button,
  onShowDescription,
  showLessonId,
  id,
}: PriceLessonsType) => {
  const [showAboutContainer, setShowAboutContainer] = useState(false);
  useEffect(() => {
    if (showLessonId !== id) {
      setShowAboutContainer(false);
    }
  }, [showLessonId]);

  const toggleAboutContainerHandler = () => {
    if (showLessonId === id) {
      onShowDescription(null);
      setShowAboutContainer(false);
    }
    if (showLessonId !== id && !showAboutContainer) {
      onShowDescription(id);
      setShowAboutContainer(true);
    }
  };
  return (
    <div className={styles.priceLessons}>
      {id.replace(/\s/g, '') !== 'AQUAFITNESS' && (
        <button
          className={styles.bubbleButton}
          onClick={toggleAboutContainerHandler}
        >
          <img
            src={showAboutContainer ? CloseIcon.src : BubbleIcon.src}
            className={styles.bubbleIcon}
            alt="Dowiedz się więcej"
            loading="eager"
            width={40}
            height={40}
          />
        </button>
      )}
      <div
        className={styles.aboutContainer}
        style={{display: showAboutContainer ? 'flex' : 'none'}}
      >
        <img
          src={NemoIcon.src}
          className={styles.nemoIcon}
          alt="Nemo Sportowa Przygoda"
          width={48}
          height={48}
          loading="lazy"
        />
        <p className={styles.textBox}>
          {
            GROUP_DESCRIPTION[
              stickerH4.titleStrip
                .replace(/\s/g, '')
                .replace(/^2/, 'DWU')
                .replace(/^3/, 'TRZY') as GroupType
            ]
          }
        </p>
      </div>
      <StickerH4
        stripTextColor={stickerH4.stripTextColor}
        stripBgColor={stickerH4.stripBgColor}
        title={stickerH4.title}
        titleStrip={stickerH4.titleStrip}
      />
      <div className={styles.contentBox}>
        <span className={styles.orange}>1 LEKCJA</span>
        <span>{oneLesson.price} </span>
        <span>{oneLesson.time} min</span>
      </div>
      {/* {tenLessons && (
        <div className={styles.contentBox}>
          <span className={styles.orange}>10 LEKCJI</span>
          <span>{tenLessons.price} </span>
          <span>{tenLessons.time} min</span>
        </div>
      )} */}

      <SingInButton
        title={button.title}
        textColor={button.textColor}
        bgColor={button.bgColor}
        href={button.href}
      />
    </div>
  );
};

export default PriceLessons;
