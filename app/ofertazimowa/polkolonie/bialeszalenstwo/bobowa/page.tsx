import Hero from '@/components/OfertaZimowa/Globals/Hero/Hero';
import styles from '../../../../page.module.scss';
import MountainsTrees from '@/components/OfertaZimowa/Globals/MountainsTrees/MountainsTrees';
import Details from '@/components/OfertaZimowa/Globals/Details/Details';
import Localization from '@/components/OfertaZimowa/Polkolonie/Localization/Localization';
import Schedule from '@/components/OfertaZimowa/Globals/Schedule/Schedule';
import {POLKOLONIA_BIALE_SZALENSTWO_BOBOWA} from '@/utils/Winter/Polkolonie';
import Food from '@/components/OfertaZimowa/Globals/Food/Food';
import PriceDetails from '@/components/OfertaZimowa/Globals/PriceDetails/PriceDetails';
import Scrap2 from '@/components/Ui/Scrap/Scrap2';
import Contact from '@/components/OfertaZimowa/Globals/Contact/Contact';
import {Metadata} from 'next';
export const metadata: Metadata = {
  title: 'Półkolonia Białe Szaleństwo 2025 BOBOWA ',
  description:
    'Sprawdź naszą ofertę półkolonii zimowych dla dzieci i młodzieży w Miejskiem Centrum Kultury w Bobowej - 27.01-31.01.2025. Zimowe ferie małopolskie z NEMO!',
  metadataBase: new URL(
    'https://nemosportowaprzygoda.pl/ofertazimowa/polkolonie/bialeszalenstwo/bobowa'
  ),
  alternates: {
    canonical:
      'https://nemosportowaprzygoda.pl/ofertazimowa/polkolonie/bialeszalenstwo/bobowa',
    languages: {
      'pl-PL': '/pl-PL',
    },
  },
};
const PolkoloniaBialeSzalenstwoBobowa = () => {
  return (
    <main className={styles.main} style={{background: 'white'}}>
      <Hero hero={POLKOLONIA_BIALE_SZALENSTWO_BOBOWA.hero} />
      <Details details={POLKOLONIA_BIALE_SZALENSTWO_BOBOWA.details} />
      <Contact contact={POLKOLONIA_BIALE_SZALENSTWO_BOBOWA.contact} />
      <MountainsTrees />
      <Localization
        localization={POLKOLONIA_BIALE_SZALENSTWO_BOBOWA.localization}
      />
      <Schedule schedule={POLKOLONIA_BIALE_SZALENSTWO_BOBOWA.schedule} />
      <MountainsTrees />
      <Food food={POLKOLONIA_BIALE_SZALENSTWO_BOBOWA.food} />
      <PriceDetails
        priceDetails={POLKOLONIA_BIALE_SZALENSTWO_BOBOWA.priceDetails}
      />
      <Scrap2 position="bottom" color="darkBlue" />
    </main>
  );
};

export default PolkoloniaBialeSzalenstwoBobowa;
