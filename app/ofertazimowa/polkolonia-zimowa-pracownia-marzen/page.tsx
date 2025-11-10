import Hero from '@/components/OfertaZimowa/Ui/Hero/Hero';
import styles from '../../page.module.scss';
import MountainsTrees from '@/components/OfertaZimowa/Ui/MountainsTrees/MountainsTrees';
import {POLKOLONIA_ZIMOWA_PRACOWNIA_MARZEN} from '@/utils/Winter/Polkolonie';
import Scrap2 from '@/components/Ui/Scrap/Scrap2';
import Contact from '@/components/OfertaZimowa/Ui/Contact/Contact';
import Schedule from '@/components/OfertaZimowa/Ui/Schedule/Schedule';
import PriceDetails from '@/components/OfertaZimowa/Ui/PriceDetails/PriceDetails';
import Details from '@/components/OfertaZimowa/Ui/Details/Details';
import {Metadata} from 'next';
import ActiveNowForm from '@/components/ActiveNowForm/ActiveNowForm';

export const metadata: Metadata = {
  title: 'Półkolonia Zimowa Pracownia Marzeń 2026',
  description:
    'Sprawdź naszą ofertę półkolonii zimowych dla dzieci i młodzieży. Zimowa Pracownia Marzeń - 09-13.02.2025 | BOBOWA | GORLICE | KORZENNA - Zimowe ferie małopolskie z NEMO!',
  metadataBase: new URL(
    'https://nemosportowaprzygoda.pl/ofertazimowa/polkolonia-zimowa-pracownia-marzen'
  ),
  alternates: {
    canonical:
      'https://nemosportowaprzygoda.pl/ofertazimowa/polkolonia-zimowa-pracownia-marzen',
    languages: {
      'pl-PL': '/pl-PL',
    },
  },
};
const PolkoloniaZimowa = () => {
  return (
    <main className={styles.main} style={{backgroundImage:'url("/assets/winter/winter_background.webp")'}}>
      <Hero hero={POLKOLONIA_ZIMOWA_PRACOWNIA_MARZEN.hero} />
      <Details details={POLKOLONIA_ZIMOWA_PRACOWNIA_MARZEN.details} />
      <ActiveNowForm src="https://app.activenow.io/external/signup_form/load_by_js?city_id=&code=wdiOmW2rUoDYznOz&proficiency_id=&school_id=10290&signup_form_id=90766&venue_id=&zz=" />
      <Contact contact={POLKOLONIA_ZIMOWA_PRACOWNIA_MARZEN.contact} />
      <MountainsTrees />
      {/* <Localization
        localization={POLKOLONIA_ZIMOWA_PRACOWNIA_MARZEN.localization}
      /> */}
      <Schedule schedule={POLKOLONIA_ZIMOWA_PRACOWNIA_MARZEN.schedule} />
      <MountainsTrees />
      {/* <Food food={POLKOLONIA_ZIMOWA_PRACOWNIA_MARZEN.food} /> */}
      <PriceDetails
        priceDetails={POLKOLONIA_ZIMOWA_PRACOWNIA_MARZEN.priceDetails}
      />
      <Scrap2 position="bottom" color="darkBlue" />
    </main>
  );
};

export default PolkoloniaZimowa;
