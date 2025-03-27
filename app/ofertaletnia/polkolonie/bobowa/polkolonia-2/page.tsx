import styles from '@/app/page.module.scss';
import Hero from '@/components/OfertaLetnia/PolkolonieObozy/Hero/Hero';
import {COLORS} from '@/utils/UI/colors';
import {Metadata} from 'next';
import {POLKOLONIA_LETNIA_MISJA_BOBOWA} from '@/utils/Summer/Polkolonie';
import Details from '@/components/OfertaLetnia/Ui/Details/Details';
import LogoSummer from '@/components/OfertaLetnia/Ui/Logo/Logo';
import Contact from '@/components/OfertaLetnia/Ui/Contact/Contact';
import Attractions from '@/components/OfertaLetnia/PolkolonieObozy/Attractions/Attractions';
import PriceDetails from '@/components/OfertaLetnia/Ui/PriceDetails/PriceDetails';
import GalleryLink from '@/components/Ui/Links/GalleryLink/GalleryLink';
import Scrap2 from '@/components/Ui/Scrap/Scrap2';
import Schedule from '@/components/OfertaLetnia/PolkolonieObozy/Schedule/Schedule';

export const metadata: Metadata = {
  title: 'Półkolonia Letnia Misja 2025 BOBOWA',
  description:
    'Sprawdź naszą ofertę półkolonii letnich dla dzieci i młodzieży w SP w Bobowej - 04.08-08.08.2025. LETNIA MISJA Z NEMO!',
  metadataBase: new URL(
    'https://nemosportowaprzygoda.pl/ofertaletnia/polkolonie/bobowa/polkolonia-2'
  ),
  alternates: {
    canonical:
      'https://nemosportowaprzygoda.pl/ofertaletnia/polkolonie/bobowa/polkolonia-2',
    languages: {
      'pl-PL': '/pl-PL',
    },
  },
};

const PolkoloniaBobowa2 = () => {
  return (
    <main className={styles.main} style={{background: COLORS['basicGreen']}}>
      <Hero {...POLKOLONIA_LETNIA_MISJA_BOBOWA.hero} />
      <Details {...POLKOLONIA_LETNIA_MISJA_BOBOWA.details} />
      <LogoSummer collab={false} />
      <Contact contact={POLKOLONIA_LETNIA_MISJA_BOBOWA.contact} />
      <Attractions {...POLKOLONIA_LETNIA_MISJA_BOBOWA.attractions} />
      <Schedule schedule={POLKOLONIA_LETNIA_MISJA_BOBOWA.schedule} />
      <PriceDetails
        priceDetailsList={
          POLKOLONIA_LETNIA_MISJA_BOBOWA.priceDetails.priceDetailsList
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

export default PolkoloniaBobowa2;
