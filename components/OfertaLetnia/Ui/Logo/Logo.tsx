'use client';
import styles from './logo.module.scss';
import LogoSummerImg from '@/public/assets/logo/Logo-nemo-summer-with-name.svg';
import LogoBom4Sports from '@/public/assets/logo/bom4sports_logo.svg';
interface LogoSummerPropsType {
  collab: boolean;
}

const LogoSummer = ({collab}: LogoSummerPropsType) => {
  if (!collab) {
    return (
      <div className={styles.box}>
        <img
          className={styles.logo}
          src={LogoSummerImg.src}
          alt="NEMO Sportowa Przygoda"
          title="NEMO Sportowa Przygoda"
          width={870}
          height={270}
          loading="lazy"
        />
      </div>
    );
  }
  if (collab) {
    return (
      <div className={styles.box}>
        <img
          className={styles.logo}
          src={LogoBom4Sports.src}
          alt="BOM 4 SPORTS"
          title="BOM 4 SPORTS"
          width={670}
          height={220}
          loading="lazy"
        />
      </div>
    );
  }
};

export default LogoSummer;
