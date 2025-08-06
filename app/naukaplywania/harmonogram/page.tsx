import {Metadata} from 'next';
import styles from './harmonogram.module.scss';
import Schedule from '@/components/Schedule/Schedule';
export const metadata: Metadata = {
  title: 'Harmonogram zajęć nauki pływania 2025/2026',
  description: 'Harmonogram zajęć nauki pływania 2025/2026.',
  metadataBase: new URL(
    'https://nemosportowaprzygoda.pl/naukaplywania/harmonogram'
  ),
  alternates: {
    canonical: 'https://nemosportowaprzygoda.pl/naukaplywania/harmonogram',
    languages: {
      'pl-PL': '/pl-PL',
    },
  },
  robots: {
    follow: false,
  },
};

const Harmonogram = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textBox}>
        <h1>
          Zapisz się na zajęcia nauki pływania w semestrze Jesień-Zima 2025/2026
        </h1>
        <h2 className={styles.accent}>
          KORZENNA | GORLICE | CHEŁMIEC | WYSOWA ZDRÓJ | LIMANOWA
        </h2>
        <h2>
          Wybierz swój basen, poziom grupy, dogodny termin zajęć i{' '}
          <span className={styles.underline}>ZAPISZ SIĘ!</span>
        </h2>
      </div>
      <Schedule
        paddingTop="2rem"
        width="100%"
        src="https://app.activenow.io/external/signup_table/load_by_js?city_id=&code=wdiOmW2rUoDYznOz&proficiency_id=&school_id=10290&signup_table_id=3906&venue_id=&zz="
      />
    </div>
  );
};

export default Harmonogram;
