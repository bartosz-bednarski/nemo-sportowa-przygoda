import Hero from '@/components/OfertaZimowa/Ui/Hero/Hero';
import styles from '../../../../page.module.scss';
import MountainsTrees from '@/components/OfertaZimowa/Ui/MountainsTrees/MountainsTrees';
import Localization from '@/components/OfertaZimowa/Polkolonie/Localization/Localization';
import {POLKOLONIA_AKTYWNA_ZIMA_BOBOWA} from '@/utils/Winter/Polkolonie';
import Scrap2 from '@/components/Ui/Scrap/Scrap2';
import Contact from '@/components/OfertaZimowa/Ui/Contact/Contact';
import Schedule from '@/components/OfertaZimowa/Ui/Schedule/Schedule';
import Food from '@/components/OfertaZimowa/Ui/Food/Food';
import PriceDetails from '@/components/OfertaZimowa/Ui/PriceDetails/PriceDetails';
import Details from '@/components/OfertaZimowa/Ui/Details/Details';
import {Metadata} from 'next';

export const metadata: Metadata = {
  title: 'Półkolonia Aktywna Zima 2025 BOBOWA ',
  description:
    'Sprawdź naszą ofertę półkolonii zimowych dla dzieci i młodzieży w Miejskim Centrum Kultury w Bobowej - 20.01-24.01.2025. Zimowe ferie małopolskie z NEMO!',
  metadataBase: new URL(
    'https://nemosportowaprzygoda.pl/ofertazimowa/polkolonie/aktywnazima/bobowa'
  ),
  alternates: {
    canonical:
      'https://nemosportowaprzygoda.pl/ofertazimowa/polkolonie/aktywnazima/bobowa',
    languages: {
      'pl-PL': '/pl-PL',
    },
  },
};
const PolkoloniaAktywnaZimaBobowa = () => {
  return (
    <main className={styles.main} style={{background: 'white'}}>
      <Hero hero={POLKOLONIA_AKTYWNA_ZIMA_BOBOWA.hero} />
      <Details details={POLKOLONIA_AKTYWNA_ZIMA_BOBOWA.details} />
      <Contact contact={POLKOLONIA_AKTYWNA_ZIMA_BOBOWA.contact} />
      <MountainsTrees />
      <Localization
        localization={POLKOLONIA_AKTYWNA_ZIMA_BOBOWA.localization}
      />
      <Schedule schedule={POLKOLONIA_AKTYWNA_ZIMA_BOBOWA.schedule} />
      <MountainsTrees />
      <Food food={POLKOLONIA_AKTYWNA_ZIMA_BOBOWA.food} />
      <PriceDetails
        priceDetails={POLKOLONIA_AKTYWNA_ZIMA_BOBOWA.priceDetails}
      />
      <Scrap2 position="bottom" color="darkBlue" />
    </main>
  );
};

export default PolkoloniaAktywnaZimaBobowa;
