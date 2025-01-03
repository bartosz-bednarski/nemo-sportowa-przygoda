import Hero from '@/components/OfertaZimowa/Globals/Hero/Hero';
import styles from '../../../../page.module.scss';
import MountainsTrees from '@/components/OfertaZimowa/Globals/MountainsTrees/MountainsTrees';
import Details from '@/components/OfertaZimowa/Globals/Details/Details';
import Localization from '@/components/OfertaZimowa/Polkolonie/Localization/Localization';
import Schedule from '@/components/OfertaZimowa/Globals/Schedule/Schedule';
import {POLKOLONIA_AKTYWNA_ZIMA_KORZENNA} from '@/utils/Winter/Polkolonie';
import Food from '@/components/OfertaZimowa/Globals/Food/Food';
import PriceDetails from '@/components/OfertaZimowa/Globals/PriceDetails/PriceDetails';
import Scrap2 from '@/components/Ui/Scrap/Scrap2';
import Contact from '@/components/OfertaZimowa/Globals/Contact/Contact';
import {Metadata} from 'next';
export const metadata: Metadata = {
  title: 'Półkolonia Aktywna Zima 2025 KORZENNA ',
  description:
    'Sprawdź naszą ofertę półkolonii zimowych dla dzieci i młodzieży w Centrum Sportu i Rekreacji w Korzennej - 20.01-24.01.2025. Zimowe ferie małopolskie z NEMO!',
  metadataBase: new URL(
    'https://nemosportowaprzygoda.pl/ofertazimowa/polkolonie/aktywnazima/korzenna'
  ),
  alternates: {
    canonical:
      'https://nemosportowaprzygoda.pl/ofertazimowa/polkolonie/aktywnazima/korzenna',
    languages: {
      'pl-PL': '/pl-PL',
    },
  },
};
const PolkoloniaAktywnaZimaKorzenna = () => {
  return (
    <main className={styles.main} style={{background: 'white'}}>
      <Hero hero={POLKOLONIA_AKTYWNA_ZIMA_KORZENNA.hero} />
      <Details details={POLKOLONIA_AKTYWNA_ZIMA_KORZENNA.details} />
      <Contact contact={POLKOLONIA_AKTYWNA_ZIMA_KORZENNA.contact} />
      <MountainsTrees />
      <Localization
        localization={POLKOLONIA_AKTYWNA_ZIMA_KORZENNA.localization}
      />
      <Schedule schedule={POLKOLONIA_AKTYWNA_ZIMA_KORZENNA.schedule} />
      <MountainsTrees />
      <Food food={POLKOLONIA_AKTYWNA_ZIMA_KORZENNA.food} />
      <PriceDetails
        priceDetails={POLKOLONIA_AKTYWNA_ZIMA_KORZENNA.priceDetails}
      />
      <Scrap2 position="bottom" color="darkBlue" />
    </main>
  );
};

export default PolkoloniaAktywnaZimaKorzenna;
