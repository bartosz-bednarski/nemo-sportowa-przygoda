'use client';
import StickerH4 from '@/components/Ui/Headers/Stickers/StickerH4/StickerH4';
import styles from './signInSliderHero.module.scss';
import Link from 'next/link';

const SignInSliderHero = () => {
  return (
    <div className={styles.layoutBox}>
      <div className={styles.registrationContainer}>
        <h2 className={styles.headerMobile}>
          Zapisz się na zajęcia nauki pływania
        </h2>
        <h2 className={styles.headerPc}>
          Zapisz się na zajęcia nauki pływania <br />
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
    </div>
  );
};

export default SignInSliderHero;
