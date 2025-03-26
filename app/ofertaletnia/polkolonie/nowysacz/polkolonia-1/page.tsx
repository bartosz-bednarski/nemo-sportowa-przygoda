import styles from '@/app/page.module.scss';
import Hero from '@/components/OfertaLetnia/Polkolonie/Hero/Hero';
import {COLORS} from '@/utils/UI/colors';
import {Metadata} from 'next';
import {POLKOLONIA_EKSTREMALNE_LATO_NOWY_SACZ} from '@/utils/Summer/Polkolonie';
import Details from '@/components/OfertaLetnia/Ui/Details/Details';
import LogoSummer from '@/components/OfertaLetnia/Ui/Logo/Logo';
import Contact from '@/components/OfertaLetnia/Ui/Contact/Contact';
import Attractions from '@/components/OfertaLetnia/Polkolonie/Attractions/Attractions';
import PriceDetails from '@/components/OfertaLetnia/Ui/PriceDetails/PriceDetails';
import GalleryLink from '@/components/Ui/Links/GalleryLink/GalleryLink';
import Scrap2 from '@/components/Ui/Scrap/Scrap2';
import Schedule from '@/components/OfertaLetnia/Polkolonie/Schedule/Schedule';

export const metadata: Metadata = {
  title: 'Półkolonia Ekstremalne Lato 2025 NOWY SĄCZ',
  description:
    'Sprawdź naszą ofertę półkolonii letnich dla dzieci i młodzieży w SP 21 w Nowym Sączu - 14.07-18.07.2025. EKSTREMALNE LATO Z NEMO!',
  metadataBase: new URL(
    'https://nemosportowaprzygoda.pl/ofertaletnia/polkolonie/nowysacz/polkolonia-1'
  ),
  alternates: {
    canonical:
      'https://nemosportowaprzygoda.pl/ofertaletnia/polkolonie/nowysacz/polkolonia-1',
    languages: {
      'pl-PL': '/pl-PL',
    },
  },
};

const PolkoloniaNowySacz = () => {
  return (
    <main className={styles.main} style={{background: COLORS['basicGreen']}}>
      <Hero {...POLKOLONIA_EKSTREMALNE_LATO_NOWY_SACZ.hero} />
      <Details {...POLKOLONIA_EKSTREMALNE_LATO_NOWY_SACZ.details} />
      <LogoSummer />
      <Contact contact={POLKOLONIA_EKSTREMALNE_LATO_NOWY_SACZ.contact} />
      <Attractions {...POLKOLONIA_EKSTREMALNE_LATO_NOWY_SACZ.attractions} />
      <Schedule schedule={POLKOLONIA_EKSTREMALNE_LATO_NOWY_SACZ.schedule} />
      <PriceDetails
        priceDetailsList={
          POLKOLONIA_EKSTREMALNE_LATO_NOWY_SACZ.priceDetails.priceDetailsList
        }
      />
      <GalleryLink
        href="/galeria"
        img="/gallery/galleryLinks/summer.webp"
        bgColor="basicGreen"
        textColor="white"
      />
      <Scrap2 position="bottom" color="darkBlue" />
    </main>
  );
};

export default PolkoloniaNowySacz;
