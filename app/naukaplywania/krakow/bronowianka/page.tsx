import styles from '../../../page.module.scss';
import VideosSection from '@/components/Globals/VideosSection';
import Bubbles from '@/components/Ui/Bubbles/Bubbles';
import {RODZAJE_LEKCJI} from '@/utils/NaukaPlywaniaBasen/rodzajeLekcji';
import Scrap2 from '@/components/Ui/Scrap/Scrap2';
import {
  BASEN_BRONOWIANKA_INFORMATIONS,
  BASEN_BRONOWIANKA_TUTORIAL,
  NAUKA_PLYWANIA_BRONOWIANKA,
} from '@/utils/NaukaPlywaniaBasen/naukaPlywaniaBronowianka';
import {Metadata} from 'next';
import {COLORS} from '@/utils/UI/colors';
import NaukaPlywaniaBasen from '@/components/NaukaPlywania/NaukaPlywaniaBasen/NaukaPlywaniaBasen';
import PoolNecessaryItems from '@/components/NaukaPlywania/Ui/PoolNecessaryItems/PoolNecessaryItems';
import PoolTutorial from '@/components/NaukaPlywania/Ui/PoolTutorial/PoolTutorial';
import PoolInformations from '@/components/NaukaPlywania/Ui/PoolInformations/PoolInformations';
import LessonType from '@/components/NaukaPlywania/Ui/LessonType/LessonType';
import GalleryLink from '@/components/Ui/Links/GalleryLink/GalleryLink';

export const metadata: Metadata = {
  title: 'Nauka pływania Kraków BRONOWIANKA',
  description:
    'Nasze zajęcia są przeznaczone dla dzieci od 3. miesiąca życia, które uczestniczą w nich razem z rodzicem. Zapraszamy wszystkich chętnych na basen Bronowianka w Krakowie!',
  metadataBase: new URL(
    'https://nemosportowaprzygoda.pl/naukaplywania/krakow/bronowianka'
  ),
  alternates: {
    canonical:
      'https://nemosportowaprzygoda.pl/naukaplywania/krakow/bronowianka',
    languages: {
      'pl-PL': '/pl-PL',
    },
  },
};
const NaukaPlywaniaBronowianka = () => {
  return (
    <div className={styles.main} style={{background: COLORS['darkBlue']}}>
      <VideosSection
        oneSticker={true}
        oneStickerContent={{
          title: 'NAUKA ',
          title2: 'PŁYWANIA',
          titleStrip: 'BRONOWIANKA',
          stripBgColor: 'mediumBlue',
          stripTextColor: 'white',
          scale: 2.5,
        }}
        scrapColor="lightBlue"
        col1={{
          video: {src: 'toddler-mix-2.mp4', alt: 'nauka pływania niemowlaki'},
          stickerH2: {
            title: 'MAŁE',
            titleStrip: 'BOMBELKI',
            stripBgColor: 'lightBlue',
            stripTextColor: 'white',
            scale: 1.15,
          },
        }}
        col2={{
          video: {
            src: 'toddler-mix-3.mp4',
            alt: 'nauka pływania dzieci i mlodzież',
          },
          stickerH2: {
            title: 'ŚREDNIE',
            titleStrip: 'BOMBELKI',
            stripBgColor: 'mediumBlue',
            stripTextColor: 'white',
            scale: 1.15,
          },
        }}
        col3={{
          video: {src: 'toddler-mix-1.mp4', alt: 'nauka pływania dorośli'},
          stickerH2: {
            title: 'DUŻE',
            titleStrip: 'BOMBELKI',
            stripBgColor: 'darkBlue',
            stripTextColor: 'white',
            scale: 1.15,
          },
        }}
      />
      <NaukaPlywaniaBasen
        about={NAUKA_PLYWANIA_BRONOWIANKA.zRodzicami.about}
        backgroundColor={NAUKA_PLYWANIA_BRONOWIANKA.zRodzicami.backgroundColor}
        instructors={NAUKA_PLYWANIA_BRONOWIANKA.zRodzicami.instructors}
        groups={NAUKA_PLYWANIA_BRONOWIANKA.zRodzicami.groups}
        priceList={NAUKA_PLYWANIA_BRONOWIANKA.zRodzicami.priceList}
      />
      <Bubbles colorTop="lightBlue" colorBottom="mediumBlue" />
      <LessonType bgColor="mediumBlue" lessonType={RODZAJE_LEKCJI.grupowe} />
      <Bubbles colorTop="mediumBlue" colorBottom="darkBlue" />
      <PoolNecessaryItems color="darkBlue" />
      <Bubbles colorTop="darkBlue" colorBottom="darkBlue" />
      <PoolTutorial poolTutorial={BASEN_BRONOWIANKA_TUTORIAL} />
      <Bubbles colorTop="darkBlue" colorBottom="darkBlue" />
      <PoolInformations poolInformation={BASEN_BRONOWIANKA_INFORMATIONS} />
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
export default NaukaPlywaniaBronowianka;
