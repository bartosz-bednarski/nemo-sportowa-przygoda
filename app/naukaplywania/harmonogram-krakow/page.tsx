import {Metadata} from 'next';
import styles from './harmonogram.module.scss';
import Schedule from '@/components/Schedule/Schedule';
export const metadata: Metadata = {
  title: 'Harmonogram zajęć nauki pływania 2025/2026 Kraków',
  description: 'Harmonogram zajęć nauki pływania 2025/2026 Kraków.',
  metadataBase: new URL(
    'https://nemosportowaprzygoda.pl/naukaplywania/harmonogram-krakow'
  ),
  alternates: {
    canonical:
      'https://nemosportowaprzygoda.pl/naukaplywania/harmonogram-krakow',
    languages: {
      'pl-PL': '/pl-PL',
    },
  },
  robots: {
    follow: false,
  },
};

const HarmonogramKrakow = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textBox}>
        <h1>
          Zapisz się na zajęcia nauki pływania w semestrze Jesień-Zima 2025/2026
          <br />
          <span className={styles.accent}>KRAKÓW</span>
        </h1>

        <h2>
          Wybierz swój basen, poziom grupy, dogodny termin zajęć i{' '}
          <span className={styles.underline}>ZAPISZ SIĘ!</span>
        </h2>
      </div>
      <Schedule
        paddingTop="2rem"
        width="100%"
        src="https://app.activenow.io/external/signup_table/load_by_js?city_id=&code=FGdlZsihY3izeZNC&proficiency_id=&school_id=15974&signup_table_id=14598&venue_id=&zz="
      />
    </div>
  );
};

export default HarmonogramKrakow;
