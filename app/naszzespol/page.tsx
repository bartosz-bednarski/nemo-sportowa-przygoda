import Boss from '@/components/NaszZespol/Boss/Boss';
import styles from '../page.module.scss';
import HeroTeam from '@/components/NaszZespol/Hero/Hero';
import InstructorsList from '@/components/NaszZespol/InstructorsList/InstructorsList';
import Scrap2 from '@/components/Ui/Scrap/Scrap2';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Poznajcie nasz zespół!',
  description:
    'Nasz zespół to grono doświadczonych instruktorów, którzy od lat z pasją i zaangażowaniem szkolą w zakresie pływania.',
  metadataBase: new URL('https://nemosportowaprzygoda.pl/naszzespol'),
  alternates: {
    canonical: 'https://nemosportowaprzygoda.pl/naszzespol',
    languages: {
      'pl-PL': '/pl-PL',
    },
  },
};

const NaszZespolPage = () => {
  return (
    <main className={styles.main}>
      <HeroTeam />
      <Boss />
      <InstructorsList />
      <Scrap2 position="bottom" color="darkBlue" />
    </main>
  );
};

export default NaszZespolPage;
