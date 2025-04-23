import VideosSection from '@/components/Globals/VideosSection/VideosSection';
import styles from '../page.module.scss';
import AboutCamps from '@/components/Globals/AboutCamps/AboutCamps';
import ScrapWinter from '@/components/Ui/Scrap/ScrapWinter';
import SignInCamps from '@/components/Globals/SignInCamps/SignInCamps';
import CollabWinter from '@/components/Winter/CollabWinter';
import Scrap2 from '@/components/Ui/Scrap/Scrap2';
import {Metadata} from 'next';
import {POLKOLONIE_LISTA_2025} from '@/utils/Winter/Polkolonie';
import {OBOZY_LISTA_2025} from '@/utils/Winter/Obozy';
import {WEEKEND_NA_STOKU_LISTA_2025} from '@/utils/Winter/WeekendoweNarty';
import GalleryLink from '@/components/Ui/Links/GalleryLink/GalleryLink';
import Image1 from '@/public/assets/videos/winter-mix-1.webp';
import Image2 from '@/public/assets/videos/winter-mix-2.webp';
import Image3 from '@/public/assets/videos/winter-mix-3.webp';
import AboutCampsImage1 from '@/public/assets/winter/winter-bg-1.webp';
import AboutCampsImage2 from '@/public/assets/winter/winter-bg-1.webp';
import AboutCampsImage3 from '@/public/assets/winter/winter-bg-3.webp';

export const metadata: Metadata = {
  title: 'Oferta ZIMOWA',
  description:
    'Sprawdź naszą ofertę na zimowe ferie małopolskie. Organizujemy półkolonie i obozy zimowe oraz weekendowe narty dla dzieci i młodzieży. KRAKÓW | BOBOWA | KORZENNA ',
  metadataBase: new URL('https://nemosportowaprzygoda.pl/ofertazimowa'),
  alternates: {
    canonical: 'https://nemosportowaprzygoda.pl/ofertazimowa',
    languages: {
      'pl-PL': '/pl-PL',
    },
  },
};

const OfertaZimowaPage = () => {
  return (
    <main className={styles.main} style={{background: 'white'}}>
      <VideosSection
        oneSticker={false}
        scrapColor="white"
        oneStickerContent={{
          title: 'OFERTA',
          title2: '',
          titleStrip: 'ZIMOWA',
          stripBgColor: 'white',
          stripTextColor: 'darkBlue',
        }}
        col1={{
          video: {
            src: 'winter-mix-1.mp4',
            alt: 'weekendowe narty',
            image: Image1,
          },
          stickerH2: {
            title: 'WYJAZDY',
            titleStrip: 'NARCIARSKIE',
            stripBgColor: 'white',
            stripTextColor: 'darkBlue',
          },
        }}
        col2={{
          video: {
            src: 'winter-mix-2.mp4',
            alt: 'polkolonie zimowe',
            image: Image2,
          },
          stickerH2: {
            title: 'PÓŁKOLONIE',
            titleStrip: 'ZIMOWE',
            stripBgColor: 'white',
            stripTextColor: 'darkBlue',
          },
        }}
        col3={{
          video: {
            src: 'winter-mix-3.mp4',
            alt: 'obozy narciarskie',
            image: Image3,
          },
          stickerH2: {
            title: 'OBOZY',
            titleStrip: 'NARCIARSKIE',
            stripBgColor: 'white',
            stripTextColor: 'darkBlue',
          },
        }}
      />
      <AboutCamps
        h2="PÓŁKOLONIE ZIMOWE"
        section1About={[
          'Udowadniamy, że zima to doskonały czas na aktywność! Dzieci poznają różnorodne sporty zimowe, takie jak łyżwiarstwo, narty czy zabawy na śniegu, a także uczą się, jak kreatywnie i zdrowo spędzać czas w chłodniejsze dni.',
          'Codziennie dzieci mają również zapewnione zdrowe i pożywne posiłki, które dodają im energii do kolejnych aktywności. Półkolonie to idealna okazja do spędzenia wakacji w sposób pełen przygód, zabawy i rozwoju, pod opieką doświadczonych wychowawców.',
          'Nasze półkolonie to nie tylko sport, ale również mnóstwo zabawy i przygód w zimowej scenerii!',
        ]}
        section2About={[]}
        theme="winter"
        section1Img={AboutCampsImage1}
        section2Img={null}
      />

      <SignInCamps
        theme="winter"
        waiting={false}
        waitingTitle="ZAPISY PRZEZ TELEFON"
        activeCampsCoversList={POLKOLONIE_LISTA_2025}
      />
      <ScrapWinter bgColor="white" />
      <AboutCamps
        h2="OBOZY ZIMOWE"
        section1About={[
          'Zapraszamy na zimowe obozy pełne adrenaliny!',
          'Uczestnicy będą mieli okazję nauczyć się lub doskonalić umiejętności jazdy na nartach i snowboardzie pod okiem doświadczonych instruktorów.',
          'Zajęcia odbywają się na świetnie przygotowanych stokach, zapewniając niezapomniane wrażenia i mnóstwo frajdy.',
          'Oprócz sportu, nie zabraknie gier integracyjnych i zabaw na śniegu, a także wieczornych spotkań przy ognisku. Idealny sposób na aktywne ferie!',
        ]}
        section2About={[]}
        theme="winter"
        section1Img={AboutCampsImage2}
        section2Img={null}
      />

      <SignInCamps
        theme="winter"
        waiting={false}
        waitingTitle="ZAPISY PRZEZ TELEFON"
        activeCampsCoversList={OBOZY_LISTA_2025}
      />
      <CollabWinter />
      <AboutCamps
        h2="WEEKENDOWE NARTY"
        section1About={[
          'Udowadniamy, że zima to doskonały czas na aktywność! Dzieci poznają różnorodne sporty zimowe, takie jak łyżwiarstwo, narty czy zabawy na śniegu, a także uczą się, jak kreatywnie i zdrowo spędzać czas w chłodniejsze dni.',
          'Codziennie dzieci mają również zapewnione zdrowe i pożywne posiłki, które dodają im energii do kolejnych aktywności. Półkolonie to idealna okazja do spędzenia wakacji w sposób pełen przygód, zabawy i rozwoju, pod opieką doświadczonych wychowawców.',
          'Nasze półkolonie to nie tylko sport, ale również mnóstwo zabawy i przygód w zimowej scenerii!',
        ]}
        section2About={[]}
        theme="winter"
        section1Img={AboutCampsImage3}
        section2Img={null}
      />

      <SignInCamps
        theme="winter"
        waiting={false}
        waitingTitle="ZAPISY PRZEZ TELEFON"
        activeCampsCoversList={WEEKEND_NA_STOKU_LISTA_2025}
      />
      <GalleryLink
        href="/galeria"
        img="/gallery/galleryLinks/winter.webp"
        textColor="darkBlue"
        bgColor="white"
      />
      <Scrap2 position="bottom" color="darkBlue" />
    </main>
  );
};
export default OfertaZimowaPage;
