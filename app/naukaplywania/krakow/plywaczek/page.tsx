import styles from '../../../page.module.scss';
import VideosSection from '@/components/Globals/VideosSection/VideosSection';
import Bubbles from '@/components/Ui/Bubbles/Bubbles';
import {RODZAJE_LEKCJI} from '@/utils/NaukaPlywaniaBasen/rodzajeLekcji';
import Scrap2 from '@/components/Ui/Scrap/Scrap2';
import {
  BASEN_PLYWACZEK_INFORMATIONS,
  BASEN_PLYWACZEK_TUTORIAL,
  NAUKA_PLYWANIA_PLYWACZEK,
} from '@/utils/NaukaPlywaniaBasen/naukaPlywaniaPlywaczek';
import {Metadata} from 'next';
import {COLORS} from '@/utils/UI/colors';
import NaukaPlywaniaBasen from '@/components/NaukaPlywania/NaukaPlywaniaBasen/NaukaPlywaniaBasen';
import PoolNecessaryItems from '@/components/NaukaPlywania/Ui/PoolNecessaryItems/PoolNecessaryItems';
import PoolTutorial from '@/components/NaukaPlywania/Ui/PoolTutorial/PoolTutorial';
import PoolInformations from '@/components/NaukaPlywania/Ui/PoolInformations/PoolInformations';
import LessonTypeWrapBox from '@/components/NaukaPlywania/Ui/LessonTypeWrapBox/LessonTypeWrapBox';
import GalleryLink from '@/components/Ui/Links/GalleryLink/GalleryLink';
import Image1 from '@/public/assets/videos/pool-mix-2.webp';
import Image2 from '@/public/assets/videos/pool-mix-3.webp';
import Image3 from '@/public/assets/videos/pool-mix-4.webp';

export const metadata: Metadata = {
  title: 'Nauka pływania Kraków PŁYWACZEK',
  description:
    'Nasze zajęcia są przeznaczone dla dzieci i młodzieży od lat 3 oraz dorosłych. Zapraszamy wszystkich chętnych na basen Pływaczek w Krakowie!',
  metadataBase: new URL(
    'https://nemosportowaprzygoda.pl/naukaplywania/krakow/plywaczek'
  ),
  alternates: {
    canonical: 'https://nemosportowaprzygoda.pl/naukaplywania/krakow/plywaczek',
    languages: {
      'pl-PL': '/pl-PL',
    },
  },
};

const NaukaPlywaniaPlywaczek = () => {
  return (
    <div className={styles.main} style={{background: COLORS['darkBlue']}}>
      <VideosSection
        oneSticker={true}
        oneStickerContent={{
          title: 'NAUKA ',
          title2: 'PŁYWANIA',
          titleStrip: 'PŁYWACZEK',
          stripBgColor: 'mediumBlue',
          stripTextColor: 'white',
        }}
        scrapColor="lightBlue"
        col1={{
          video: {
            src: 'pool-mix-2.mp4',
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
            src: 'pool-mix-3.mp4',
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
            src: 'pool-mix-4.mp4',
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

      <NaukaPlywaniaBasen
        about={NAUKA_PLYWANIA_PLYWACZEK.dzieciMlodziez.about}
        backgroundColor={
          NAUKA_PLYWANIA_PLYWACZEK.dzieciMlodziez.backgroundColor
        }
        groups={NAUKA_PLYWANIA_PLYWACZEK.dzieciMlodziez.groups}
        priceList={[]}
      />
      <Bubbles colorTop="lightBlue" colorBottom="mediumBlue" />
      <NaukaPlywaniaBasen
        about={NAUKA_PLYWANIA_PLYWACZEK.dorosli.about}
        backgroundColor={NAUKA_PLYWANIA_PLYWACZEK.dorosli.backgroundColor}
        groups={NAUKA_PLYWANIA_PLYWACZEK.dorosli.groups}
        priceList={[]}
      />
      <Bubbles colorTop="mediumBlue" colorBottom="darkBlue" />
      <LessonTypeWrapBox
        bgColor="darkBlue"
        bgImage="lessons-types-bg.webp"
        lessonTypes={[
          RODZAJE_LEKCJI.grupowe,
          RODZAJE_LEKCJI.indywidualne,
          RODZAJE_LEKCJI.dwuosobowe,
        ]}
      />
      <Bubbles colorTop="darkBlue" colorBottom="darkBlue" />
      <PoolNecessaryItems color="darkBlue" />
      <Bubbles colorTop="darkBlue" colorBottom="darkBlue" />
      <PoolTutorial poolTutorial={BASEN_PLYWACZEK_TUTORIAL} />
      <Bubbles colorTop="darkBlue" colorBottom="darkBlue" />
      <PoolInformations poolInformation={BASEN_PLYWACZEK_INFORMATIONS} />
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
export default NaukaPlywaniaPlywaczek;
