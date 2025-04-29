'use client';
import StickerH2 from '@/components/Ui/Headers/Stickers/StickerH2/StickerH2';
import styles from './sectionAbout.module.scss';
import AguaFitnessAbout from '@/public/assets/aquaFitness/aquaFitness_about.webp';
import {customColors} from '@/types/UI/colors';
import {COLORS} from '@/utils/UI/colors';

interface SectionAboutAquaFitnessPropsType {
  backgroundColor: customColors;
}

const SectionAbout = ({backgroundColor}: SectionAboutAquaFitnessPropsType) => {
  const background = {backgroundColor: COLORS[backgroundColor]};
  return (
    <div className={styles.container} style={background}>
      <div className={styles.contentBox}>
        <StickerH2
          title=""
          titleStrip="AQUA FITNESS"
          titleColor="white"
          stripBgColor="white"
          stripTextColor={backgroundColor}
        />
        <p>
          <b>Intensywny trening: </b>Aqua Fitness to połączenie intensywnego
          treningu w wodzie z nauką podstawowych technik pływackich, dostosowane
          do osób w każdym wieku i na każdym poziomie zaawansowania.{' '}
        </p>
        <p>
          <b>Różnorodność ćwiczeń: </b>Zajęcia obejmują ćwiczenia wzmacniające,
          poprawiające koordynację i wytrzymałość, a także naukę podstawowych
          stylów pływackich.{' '}
        </p>
        <p>
          <b>Bezpieczeństwo: </b>Dzięki oporowi wody trening jest efektywny, a
          jednocześnie bezpieczny dla stawów i kręgosłupa. To doskonała
          alternatywa dla tradycyjnych form aktywności, zwłaszcza dla osób,
          które chcą uniknąć nadmiernego obciążenia organizmu.{' '}
        </p>
        <p>
          <b>Releks: </b>Dodatkowym atutem zajęć jest relaksujący wpływ wody,
          który pomaga redukować stres i poprawia samopoczucie.
        </p>
      </div>
      <img
        src={AguaFitnessAbout.src}
        alt="aquaFitness"
        title="aquaFitness"
        loading="eager"
        width={600}
        height={1200}
      />
    </div>
  );
};

export default SectionAbout;
