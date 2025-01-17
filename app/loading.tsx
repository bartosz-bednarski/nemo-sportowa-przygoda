import LogoMainWhite from '@/components/Globals/Logo/LogoMainWhite';
import styles from './loading.module.scss';
const Loading = () => {
  return (
    <div className={styles.loading}>
      <div className={styles.loader}></div>
      <LogoMainWhite width="600px" height="600px" />
      <h1>Ładowanie...</h1>
    </div>
  );
};
export default Loading;
