'use client';
import styles from './logo.module.scss';
import LogoSummerImg from '@/public/assets/logo/Logo-nemo-summer-with-name.svg';

const LogoSummer = () => {
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
};

export default LogoSummer;
