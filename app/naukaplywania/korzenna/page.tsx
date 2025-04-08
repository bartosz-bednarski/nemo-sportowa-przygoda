import styles from '../../page.module.scss';
import VideosSection from '@/components/Globals/VideosSection/VideosSection';
import {
  BASEN_KORZENNA_INFORMATIONS,
  BASEN_KORZENNA_TUTORIAL,
  NAUKA_PLYWANIA_KORZENNA,
} from '@/utils/NaukaPlywaniaBasen/naukaPlywaniaKorzenna';
import Bubbles from '@/components/Ui/Bubbles/Bubbles';
import {RODZAJE_LEKCJI} from '@/utils/NaukaPlywaniaBasen/rodzajeLekcji';
import Scrap2 from '@/components/Ui/Scrap/Scrap2';
import {Metadata} from 'next';
import Schedule from '@/components/Schedule/Schedule';
import {COLORS} from '@/utils/UI/colors';
import NaukaPlywaniaBasen from '@/components/NaukaPlywania/NaukaPlywaniaBasen/NaukaPlywaniaBasen';
import PoolNecessaryItems from '@/components/NaukaPlywania/Ui/PoolNecessaryItems/PoolNecessaryItems';
import PoolTutorial from '@/components/NaukaPlywania/Ui/PoolTutorial/PoolTutorial';
import PoolInformations from '@/components/NaukaPlywania/Ui/PoolInformations/PoolInformations';
import LessonTypeWrapBox from '@/components/NaukaPlywania/Ui/LessonTypeWrapBox/LessonTypeWrapBox';
import GalleryLink from '@/components/Ui/Links/GalleryLink/GalleryLink';
import Image1 from '@/public/assets/videos/pool-mix-4.webp';
import Image2 from '@/public/assets/videos/pool-mix-2.webp';
import Image3 from '@/public/assets/videos/pool-mix-5.webp';

export const metadata: Metadata = {
  title: 'Nauka pływania KORZENNA',
  description:
    'Nasze zajęcia są przeznaczone zarówno dla dzieci i młodzieży jak i dorosłych. Zapraszamy wszystkich chętnych na basen w Korzennej!',
  metadataBase: new URL(
    'https://nemosportowaprzygoda.pl/naukaplywania/korzenna'
  ),
  alternates: {
    canonical: 'https://nemosportowaprzygoda.pl/naukaplywania/korzenna',
    languages: {
      'pl-PL': '/pl-PL',
    },
  },
};

const NaukaPlywaniaKorzenna = () => {
  return (
    <div className={styles.main} style={{background: COLORS['darkBlue']}}>
      <VideosSection
        oneSticker={true}
        oneStickerContent={{
          title: 'NAUKA ',
          title2: 'PŁYWANIA',
          titleStrip: 'KORZENNA',
          stripBgColor: 'mediumBlue',
          stripTextColor: 'white',
        }}
        scrapColor="lightBlue"
        col1={{
          video: {
            src: 'pool-mix-4.mp4',
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
            src: 'pool-mix-2.mp4',
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
            src: 'pool-mix-5.mp4',
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
      <Schedule src="https://app.activenow.io/external/signup_table/load_by_js?city_id=&code=wdiOmW2rUoDYznOz&proficiency_id=&school_id=10290&signup_table_id=3906&venue_id=68866&zz=" />

      <NaukaPlywaniaBasen
        about={NAUKA_PLYWANIA_KORZENNA.dzieciMlodziez.about}
        backgroundColor={NAUKA_PLYWANIA_KORZENNA.dzieciMlodziez.backgroundColor}
        groups={NAUKA_PLYWANIA_KORZENNA.dzieciMlodziez.groups}
        priceList={NAUKA_PLYWANIA_KORZENNA.dzieciMlodziez.priceList}
      />
      <Bubbles colorTop="lightBlue" colorBottom="mediumBlue" />
      <NaukaPlywaniaBasen
        about={NAUKA_PLYWANIA_KORZENNA.dorosli.about}
        backgroundColor={NAUKA_PLYWANIA_KORZENNA.dorosli.backgroundColor}
        groups={NAUKA_PLYWANIA_KORZENNA.dorosli.groups}
        priceList={NAUKA_PLYWANIA_KORZENNA.dorosli.priceList}
      />
      <Bubbles colorTop="mediumBlue" colorBottom="darkBlue" />
      <LessonTypeWrapBox
        bgImage="grupowe.png"
        bgColor="darkBlue"
        lessonTypes={[
          RODZAJE_LEKCJI.grupowe,
          RODZAJE_LEKCJI.indywidualne,
          RODZAJE_LEKCJI.dwuosobowe,
          RODZAJE_LEKCJI.trzyosobowe,
        ]}
      />
      <Bubbles colorTop="darkBlue" colorBottom="darkBlue" />
      <PoolNecessaryItems color="darkBlue" />
      <Bubbles colorTop="darkBlue" colorBottom="darkBlue" />
      <PoolTutorial poolTutorial={BASEN_KORZENNA_TUTORIAL} />
      <Bubbles colorTop="darkBlue" colorBottom="darkBlue" />
      <PoolInformations poolInformation={BASEN_KORZENNA_INFORMATIONS} />
      <Scrap2 position="bottom" color="darkBlue" />
      <GalleryLink
        href="/galeria"
        img="/gallery/galleryLinks/swimming.webp"
        bgColor="darkBlue"
        textColor="white"
      />
    </div>
  );
};
export default NaukaPlywaniaKorzenna;
