import styles from '../page.module.scss';
import Gallery from '../../components/Gallery/Gallery';
import Scrap2 from '../../components/Ui/Scrap/Scrap2';
import {Metadata} from 'next';

export const metadata: Metadata = {
  title: 'Galeria zdjęć',
  description:
    'Sprawdź nasze zdjęcia! - Nauka pływania | Bobowska Przygoda | Wakacyjna Frajda | Wyjazd na Narty | Kreatywne Laboratorium.',
  metadataBase: new URL('https://nemosportowaprzygoda.pl/galeria'),
  alternates: {
    canonical: 'https://nemosportowaprzygoda.pl/galeria',
    languages: {
      'pl-PL': '/pl-PL',
      'en-US': '/en-US',
    },
  },
};

const GaleriaPage = () => {
  return (
    <main className={styles.main}>
      <Gallery />
      <Scrap2 color="darkBlue" position="bottom" />
    </main>
  );
};
export default GaleriaPage;
