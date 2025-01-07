'use client';
import 'react';
import styles from './swimmingSection.module.scss';
import StickerH2 from '../../Ui/Stickers/StickerH2/StickerH2';
import AboutTextPoppins from '../../Ui/AboutTextPoppins/AboutTextPoppins';
import BackgroundText from '../../Ui/BackgroundText/BackgroundText';
import SwimmingOffert from './SwimmingOffert';
const SwimmingSection: React.FC = () => {
  return (
    <section className={styles.swimming}>
      <div className={styles['swimming__about-container']}>
        <BackgroundText title="BOMBELKI MAŁE I DUŻE" />
        <StickerH2
          title="NAUKA"
          titleStrip="PŁYWANIA"
          stripBgColor="white"
          stripTextColor="mediumBlue"
        />
        <AboutTextPoppins
          title="Zacznij swoją przygodę z pływaniem!"
          description="Nauka pływania to doskonały sposób na wzmocnienie kondycji, poprawę zdrowia i
pokonanie lęku przed wodą. Oferujemy zajęcia dla dzieci, młodzieży i dorosłych na
różnych poziomach zaawansowania. Nasi doświadczeni instruktorzy zadbają o Twoje
bezpieczeństwo i indywidualne postępy. Zapisz się już dziś i odkryj radość z pływania!"
          titleColor="mediumBlue"
        />
      </div>
      <SwimmingOffert />
    </section>
  );
};
export default SwimmingSection;
