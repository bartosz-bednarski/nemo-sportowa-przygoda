import AboutCamps from '@/components/Globals/AboutCamps/AboutCamps';
import styles from '../page.module.scss';
import VideosSection from '@/components/Globals/VideosSection/VideosSection';
import SignInCamps from '@/components/Globals/SignInCamps/SignInCamps';
import Scrap2 from '@/components/Ui/Scrap/Scrap2';
import CollabSummer from '@/components/Summer/CollabSummer';
import {Metadata} from 'next';
import {COLORS} from '@/utils/UI/colors';
import GalleryLink from '@/components/Ui/Links/GalleryLink/GalleryLink';
import {POLKOLONIE_LISTA_2025} from '@/utils/Summer/Polkolonie';
import {OBOZY_LISTA_2025} from '@/utils/Summer/Obozy';
import Image1 from '@/public/assets/videos/summer-mix-1.webp';
import Image2 from '@/public/assets/videos/summer-mix-2.webp';
import Image3 from '@/public/assets/videos/summer-mix-3.webp';
import AboutCampsImage1 from '@/public/assets/summer/summer-bg-1.webp';
import AboutCampsImage2 from '@/public/assets/summer/summer-bg-2.webp';
import AboutCampsImage3 from '@/public/assets/summer/summer-bg-2.webp';
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
const OfertaLetniaPage = () => {
  return (
    <main className={styles.main} style={{background: COLORS['basicGreen']}}>
      <VideosSection
        oneSticker={true}
        scrapColor="basicGreen"
        oneStickerContent={{
          title: 'OFERTA',
          title2: '',
          titleStrip: 'LETNIA',
          stripBgColor: 'basicGreen',
          stripTextColor: 'white',
        }}
        col1={{
          video: {
            src: 'summer-mix-1.mp4',
            alt: 'nauka pływania niemowlaki',
            image: Image1,
          },
          stickerH2: {
            title: 'MAŁE',
            titleStrip: 'BOMBELKI',
            stripBgColor: 'lightBlue',
            stripTextColor: 'white',
          },
        }}
        col2={{
          video: {
            src: 'summer-mix-2.mp4',
            alt: 'nauka pływania dzieci i mlodzież',
            image: Image2,
          },
          stickerH2: {
            title: 'ŚREDNIE',
            titleStrip: 'BOMBELKI',
            stripBgColor: 'mediumBlue',
            stripTextColor: 'white',
          },
        }}
        col3={{
          video: {
            src: 'summer-mix-3.mp4',
            alt: 'nauka pływania dorośli',
            image: Image3,
          },
          stickerH2: {
            title: 'DUŻE',
            titleStrip: 'BOMBELKI',
            stripBgColor: 'darkBlue',
            stripTextColor: 'white',
          },
        }}
      />
      <AboutCamps
        h2="PÓŁKOLONIE LETNIE"
        section1About={[
          'Półkolonie to tygodniowy program pełen atrakcji, podczas którego dzieci mają zapewnioną opiekę od godziny 8:00 do 16:00.',
          'Każdy dzień wypełniony jest aktywnymi zajęciami, które pozwalają na rozwój zarówno fizyczny, jak i kreatywny.',
          'Uczestnicy biorą udział w grach sportowych, warsztatach plastycznych, zajęciach muzycznych, a także zabawach integracyjnych, które sprzyjają nawiązywaniu nowych przyjaźni.',
        ]}
        section2About={[
          'Dzieci spędzają czas na świeżym powietrzu, uczestniczą w różnorodnych aktywnościach dostosowanych do ich wieku, a także odkrywają nowe zainteresowania.',
          'Podczas półkolonii organizowana jest również tematyczna wycieczka, która nawiązuje do przewodniego motywu całego turnusu. To doskonała okazja, by poprzez zabawę i aktywne zwiedzanie zgłębić ciekawe zagadnienia. Może to być np. wizyta w muzeum, parku przyrody lub wycieczka edukacyjna w terenie.',
          'Codziennie dzieci mają również zapewnione zdrowe i pożywne posiłki, które dodają im energii do kolejnych aktywności. Półkolonie to idealna okazja do spędzenia wakacji w sposób pełen przygód, zabawy i rozwoju, pod opieką doświadczonych wychowawców.',
        ]}
        theme="summer"
        section1Img={AboutCampsImage1}
        section2Img={AboutCampsImage2}
      />
      <SignInCamps
        theme="summer"
        waiting={false}
        waitingTitle="STARTUJEMY JUŻ WIOSNĄ"
        activeCampsCoversList={POLKOLONIE_LISTA_2025}
      />
      <AboutCamps
        h2="OBOZY LETNIE"
        section1About={[
          'Nasze obozy organizowane są we współpracy z zaprzyjaźnioną firmą Bom4Sport, która specjalizuje się w aktywnym wypoczynku dla dzieci i młodzieży.',
          'Oferujemy zarówno letnie obozy rowerowe, jak i zimowe obozy narciarskie oraz snowboardowe. Każdy program jest starannie przygotowany, aby uczestnicy nie tylko rozwijali swoje umiejętności sportowe, ale także spędzili czas w przyjaznej atmosferze, pełnej przygód i dobrej zabawy.',
          'Pod okiem doświadczonych instruktorów dzieci mają szansę na bezpieczną naukę oraz doskonalenie swoich umiejętności na rowerze, nartach lub snowboardzie.',
        ]}
        section2About={[]}
        theme="summer"
        section1Img={AboutCampsImage3}
        section2Img={null}
      />

      <CollabSummer />
      <SignInCamps
        theme="summer"
        waiting={false}
        waitingTitle="STARTUJEMY JUŻ WIOSNĄ"
        activeCampsCoversList={OBOZY_LISTA_2025}
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
export default OfertaLetniaPage;
