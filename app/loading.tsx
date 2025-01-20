import LogoMainWhite from '@/public/assets/logo/Logo-main-white.svg';
import styles from './loading.module.scss';
const Loading = () => {
  return (
    <div className={styles.loading}>
      <div className={styles.loader}></div>
     <img src={LogoMainWhite.src} alt='logoNemo' className={styles.logoImg}/>
      <h1>Ładowanie...</h1>
    </div>
  );
};
export default Loading;
