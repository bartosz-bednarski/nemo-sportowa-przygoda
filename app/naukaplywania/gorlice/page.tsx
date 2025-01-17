import styles from '../../page.module.scss';
import VideosSection from '@/components/Globals/VideosSection';
import {
  BASEN_GORLICE_INFORMATIONS,
  BASEN_GORLICE_TUTORIAL,
  NAUKA_PLYWANIA_GORLICE,
} from '@/utils/NaukaPlywaniaBasen/naukaPlywaniaGorlice';
import {RODZAJE_LEKCJI} from '@/utils/NaukaPlywaniaBasen/rodzajeLekcji';
import Bubbles from '@/components/Ui/Bubbles/Bubbles';
import Scrap2 from '@/components/Ui/Scrap/Scrap2';
import {Metadata} from 'next';
import Schedule from '@/components/Schedule/Schedule';
import {COLORS} from '@/utils/UI/colors';
import NaukaPlywaniaBasen from '@/components/NaukaPlywania/NaukaPlywaniaBasen/NaukaPlywaniaBasen';
import PoolNecessaryItems from '@/components/NaukaPlywania/Ui/PoolNecessaryItems/PoolNecessaryItems';
import PoolTutorial from '@/components/NaukaPlywania/Ui/PoolTutorial/PoolTutorial';
import PoolInformations from '@/components/NaukaPlywania/Ui/PoolInformations/PoolInformations';
import LessonType from '@/components/NaukaPlywania/Ui/LessonType/LessonType';
import GalleryLink from '@/components/Ui/Links/GalleryLink/GalleryLink';

export const metadata: Metadata = {
  title: 'Nauka pływania GORLICE',
  description:
    'Nasze zajęcia są przeznaczone dla dzieci od 3. miesiąca życia, które uczestniczą w nich razem z rodzicem. Zapraszamy wszystkich chętnych na basen w Gorlicach!',
  metadataBase: new URL(
    'https://nemosportowaprzygoda.pl/naukaplywania/gorlice'
  ),
  alternates: {
    canonical: 'https://nemosportowaprzygoda.pl/naukaplywania/gorlice',
    languages: {
      'pl-PL': '/pl-PL',
    },
  },
};

const NaukaPlywaniaGorlice = () => {
  return (
    <div className={styles.main} style={{background: COLORS['darkBlue']}}>
      <VideosSection
        oneSticker={true}
        oneStickerContent={{
          title: 'NAUKA ',
          title2: 'PŁYWANIA',
          titleStrip: 'GORLICE',
          stripBgColor: 'mediumBlue',
          stripTextColor: 'white',
          scale: 1.5,
        }}
        scrapColor="lightBlue"
        col1={{
          video: {
            src: 'toddler-mix-1.mp4',
            alt: 'nauka pływania niemowlaki',
          },
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
            src: 'toddler-mix-2.mp4',
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
          video: {src: 'toddler-mix-3.mp4', alt: 'nauka pływania dorośli'},
          stickerH2: {
            title: 'DUŻE',
            titleStrip: 'BOMBELKI',
            stripBgColor: 'darkBlue',
            stripTextColor: 'white',
            scale: 1.15,
          },
        }}
      />
      <Schedule src="https://app.activenow.io/external/signup_table/load_by_js?city_id=&code=wdiOmW2rUoDYznOz&proficiency_id=&school_id=10290&signup_table_id=3906&venue_id=74801&zz=" />

      <NaukaPlywaniaBasen
        about={NAUKA_PLYWANIA_GORLICE.zRodzicami.about}
        backgroundColor={NAUKA_PLYWANIA_GORLICE.zRodzicami.backgroundColor}
        instructors={NAUKA_PLYWANIA_GORLICE.zRodzicami.instructors}
        groups={NAUKA_PLYWANIA_GORLICE.zRodzicami.groups}
        priceList={NAUKA_PLYWANIA_GORLICE.zRodzicami.priceList}
      />

      <LessonType bgColor="lightBlue" lessonType={RODZAJE_LEKCJI.grupowe} />
      <PoolNecessaryItems color="lightBlue" />
      <Bubbles colorTop="lightBlue" colorBottom="mediumBlue" />
      <PoolTutorial poolTutorial={BASEN_GORLICE_TUTORIAL} />
      <Bubbles colorTop="mediumBlue" colorBottom="darkBlue" />
      <PoolInformations poolInformation={BASEN_GORLICE_INFORMATIONS} />
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
export default NaukaPlywaniaGorlice;
