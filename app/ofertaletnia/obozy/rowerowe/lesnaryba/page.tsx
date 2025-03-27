import styles from '@/app/page.module.scss';
import Hero from '@/components/OfertaLetnia/PolkolonieObozy/Hero/Hero';
import {COLORS} from '@/utils/UI/colors';
import {Metadata} from 'next';
import {OBOZ_LESNA_RYBA_2025} from '@/utils/Summer/Obozy';
import Details from '@/components/OfertaLetnia/Ui/Details/Details';
import LogoSummer from '@/components/OfertaLetnia/Ui/Logo/Logo';
import Contact from '@/components/OfertaLetnia/Ui/Contact/Contact';
import Attractions from '@/components/OfertaLetnia/PolkolonieObozy/Attractions/Attractions';
import PriceDetails from '@/components/OfertaLetnia/Ui/PriceDetails/PriceDetails';
import GalleryLink from '@/components/Ui/Links/GalleryLink/GalleryLink';
import Scrap2 from '@/components/Ui/Scrap/Scrap2';

export const metadata: Metadata = {
  title: 'Obóz rowerowy Leśna Ryba 2025',
  description:
    'Sprawdź naszą ofertę obozu rowerowego dla dzieci i młodzieży w Leśnej Rybie - 29.06-07.07.2025. OBOZY ROWEROWE Z NEMO!',
  metadataBase: new URL(
    'https://nemosportowaprzygoda.pl/ofertaletnia/obozy/rowerowe/lesnaryba'
  ),
  alternates: {
    canonical:
      'https://nemosportowaprzygoda.pl/ofertaletnia/obozy/rowerowe/lesnaryba',
    languages: {
      'pl-PL': '/pl-PL',
    },
  },
};

const ObozLesnaRyba = () => {
  return (
    <main className={styles.main} style={{background: COLORS['basicGreen']}}>
      <Hero {...OBOZ_LESNA_RYBA_2025.hero} />
      <Details {...OBOZ_LESNA_RYBA_2025.details} />
      <LogoSummer collab={false} />
      <Contact contact={OBOZ_LESNA_RYBA_2025.contact} />
      <LogoSummer collab={true} />
      {OBOZ_LESNA_RYBA_2025.collabContact && (
        <Contact contact={OBOZ_LESNA_RYBA_2025.collabContact} />
      )}
      <Attractions {...OBOZ_LESNA_RYBA_2025.attractions} />
      <PriceDetails
        priceDetailsList={OBOZ_LESNA_RYBA_2025.priceDetails.priceDetailsList}
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

export default ObozLesnaRyba;
