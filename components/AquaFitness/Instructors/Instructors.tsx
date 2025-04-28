'use client';
import StickerH3 from '@/components/Ui/Headers/Stickers/StickerH3/StickerH3';
import styles from './instructors.module.scss';

const Instructors = () => {
  return (
    <div className={styles.container}>
      <StickerH3
        title=""
        titleStrip="AGATA HOJOŁ"
        stripBgColor="basicOrange"
        stripTextColor="white"
      />
      <span className={styles.insctructorBubble}></span>
      <div className={styles.contentBox}>
        <p>
          <b>Zajęcia Aqua Fitness poprowadzi nasza instruktorka Agata.</b>
        </p>
        <p>
          Doświadczona instruktorka pływania, która przez 12 lat trenowała
          pływanie zawodowo. Specjalizuje się w stylu motylkowym i zmiennym.{' '}
        </p>
        <p>
          Posiada kwalifikacje instruktora pływania, a także ratownika wodnego
          oraz ukończyła kurs pierwszej pomocy, co gwarantuje, że zajęcia
          prowadzone są w bezpiecznej i profesjonalnej atmosferze.
        </p>
      </div>
    </div>
  );
};

export default Instructors;
