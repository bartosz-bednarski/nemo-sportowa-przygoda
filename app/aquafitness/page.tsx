import styles from '../page.module.scss';
import Bubbles from '@/components/Ui/Bubbles/Bubbles';
import {Metadata} from 'next';
import {COLORS} from '@/utils/UI/colors';
import GalleryLink from '@/components/Ui/Links/GalleryLink/GalleryLink';
import SectionAbout from '@/components/AquaFitness/SectionAbout/SectionAbout';
import Hero from '@/components/AquaFitness/Hero/Hero';
import Schedule from '@/components/Schedule/Schedule';
import Instructors from '@/components/AquaFitness/Instructors/Instructors';
import PriceList, {
  PriceListPropsType,
} from '@/components/NaukaPlywania/Ui/PriceList/PriceList';
import Locations from '@/components/AquaFitness/Locations/Locations';

export const metadata: Metadata = {
  title: 'Zajęcia AquaFitness - KORZENNA|GORLICE',
  description:
    'Zapraszamy na zajęcia Aqua Fitness wszystkich dorosłych! - Lokalizacje: Korzenna | Gorlice.',
  metadataBase: new URL('https://nemosportowaprzygoda.pl/aquafitness'),
  alternates: {
    canonical: 'https://nemosportowaprzygoda.pl/aquafitness',
    languages: {
      'pl-PL': '/pl-PL',
    },
  },
};

const PRICE_LIST_AQUA: PriceListPropsType = [
  {
    stickerH4: {
      title: 'AQUA FITNESS',
      titleStrip: 'GORLICE',
      stripTextColor: 'basicOrange',
      stripBgColor: 'white',
    },
    oneLesson: {
      price: '15 zł + 13 zł bilet',
      time: 45,
    },
    button: {
      title: 'Zapisz się na zajęcia',
      textColor: 'lightBlue',
      bgColor: 'white',
      href: 'https://zapisy.activenow.pl/szkola-plywania-nemo1/',
    },
  },
  {
    stickerH4: {
      title: 'AQUA FITNESS',
      titleStrip: 'KORZENNA',
      stripTextColor: 'basicOrange',
      stripBgColor: 'white',
    },
    oneLesson: {
      price: '15 zł + 16 zł bilet',
      time: 45,
    },
    button: {
      title: 'Zapisz się na zajęcia',
      textColor: 'lightBlue',
      bgColor: 'white',
      href: 'https://zapisy.activenow.pl/szkola-plywania-nemo1/',
    },
  },
];

const AquaFitnessPage = () => {
  return (
    <main className={styles.main} style={{background: COLORS['mediumBlue']}}>
      <Hero />
      <Schedule src="https://app.activenow.io/external/signup_table/load_by_js?city_id=&code=wdiOmW2rUoDYznOz&proficiency_id=91183&school_id=10290&signup_table_id=3906&venue_id=&zz=" />
      <SectionAbout backgroundColor="lightBlue" />
      <Bubbles colorTop="lightBlue" colorBottom="mediumBlue" />
      <Instructors />

      <PriceList priceList={PRICE_LIST_AQUA} />
      <Locations />
      <Bubbles colorTop="mediumBlue" colorBottom="darkBlue" />
      <GalleryLink
        href="/galeria"
        img="/gallery/galleryLinks/swimming.webp"
        bgColor="darkBlue"
        textColor="white"
      />
    </main>
  );
};
export default AquaFitnessPage;
