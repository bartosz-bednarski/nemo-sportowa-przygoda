import Hero from '@/components/OfertaZimowa/Ui/Hero/Hero';
import styles from '../../../page.module.scss';
import {WEEKEND_NA_STOKU_26_01_2025} from '@/utils/Winter/WeekendoweNarty';
import Details from '@/components/OfertaZimowa/Ui/Details/Details';
import Contact from '@/components/OfertaZimowa/Ui/Contact/Contact';
import MountainsTrees from '@/components/OfertaZimowa/Ui/MountainsTrees/MountainsTrees';
import WhatsWaiting4You from '@/components/OfertaZimowa/Obozy/WhatsWaiting4You/WhatsWaiting4You';
import HillSides from '@/components/OfertaZimowa/Obozy/HillSides/HillSides';
import PriceDetails from '@/components/OfertaZimowa/Ui/PriceDetails/PriceDetails';
import Scrap2 from '@/components/Ui/Scrap/Scrap2';
import Schedule from '@/components/OfertaZimowa/WeekendoweNarty/Schedule';
import {Metadata} from 'next';
export const metadata: Metadata = {
  title: 'Weekend na stoku TYLICZ',
  description:
    'Zimowa przygoda w Tyliczu - nauka jazdy na nartach i snowboardzie! - 26.01.2025. Zimowe ferie małopolskie z NEMO!',
  metadataBase: new URL(
    'https://nemosportowaprzygoda.pl/ofertazimowa/weekend-na-stoku/termin-3'
  ),
  alternates: {
    canonical:
      'https://nemosportowaprzygoda.pl/ofertazimowa/weekend-na-stoku/termin-3',
    languages: {
      'pl-PL': '/pl-PL',
    },
  },
};
const WeekendNaStoku = () => {
  return (
    <main className={styles.main} style={{background: 'white'}}>
      <Hero hero={WEEKEND_NA_STOKU_26_01_2025.hero} />
      <Details details={WEEKEND_NA_STOKU_26_01_2025.details} />

      <Contact contact={WEEKEND_NA_STOKU_26_01_2025.contactNemo} />

      <MountainsTrees />
      <Schedule schedule={WEEKEND_NA_STOKU_26_01_2025.schedule} />
      <WhatsWaiting4You
        details={WEEKEND_NA_STOKU_26_01_2025.whatsWaiting4You}
      />

      <MountainsTrees />
      <HillSides hillSides={WEEKEND_NA_STOKU_26_01_2025.hillSides} />
      <PriceDetails priceDetails={WEEKEND_NA_STOKU_26_01_2025.priceDetails} />
      <Scrap2 color="darkBlue" position="bottom" />
    </main>
  );
};
export default WeekendNaStoku;
