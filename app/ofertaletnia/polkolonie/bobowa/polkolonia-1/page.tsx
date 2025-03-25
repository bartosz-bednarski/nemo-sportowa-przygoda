import styles from '@/app/page.module.scss';
import Hero from '@/components/OfertaLetnia/Polkolonie/Hero/Hero';
import {COLORS} from '@/utils/UI/colors';
import {Metadata} from 'next';
import {POLKOLONIA_EKSTREMALNE_LATO_BOBOWA} from '@/utils/Summer/Polkolonie';
import Details from '@/components/OfertaLetnia/Ui/Details/Details';
import LogoSummer from '@/components/OfertaLetnia/Ui/Logo/Logo';
import Contact from '@/components/OfertaLetnia/Ui/Contact/Contact';
import Attractions from '@/components/OfertaLetnia/Polkolonie/Attractions/Attractions';
import PriceDetails from '@/components/OfertaLetnia/Ui/PriceDetails/PriceDetails';
import GalleryLink from '@/components/Ui/Links/GalleryLink/GalleryLink';
import Scrap2 from '@/components/Ui/Scrap/Scrap2';

export const metadata: Metadata = {
  title: 'Oferta LETNIA',
  description:
    'Zapraszamy do sprawdzenia naszej oferty letniej. Organizujemy półkolonie letnie dla dzieci oraz obozy młodzieżowe na terenie Małopolski - KRAKÓW | BOBOWA | KORZENNA.',
  metadataBase: new URL('https://nemosportowaprzygoda.pl/ofertaletnia'),
  alternates: {
    canonical: 'https://nemosportowaprzygoda.pl/ofertaletnia',
    languages: {
      'pl-PL': '/pl-PL',
    },
  },
};

const PolkoloniaBobowa = () => {
  return (
    <main className={styles.main} style={{background: COLORS['basicGreen']}}>
      <Hero {...POLKOLONIA_EKSTREMALNE_LATO_BOBOWA.hero} />
      <Details {...POLKOLONIA_EKSTREMALNE_LATO_BOBOWA.details} />
      <LogoSummer />
      <Contact contact={POLKOLONIA_EKSTREMALNE_LATO_BOBOWA.contact} />
      <Attractions {...POLKOLONIA_EKSTREMALNE_LATO_BOBOWA.attractions} />
      <PriceDetails
        priceDetailsList={
          POLKOLONIA_EKSTREMALNE_LATO_BOBOWA.priceDetails.priceDetailsList
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

export default PolkoloniaBobowa;
