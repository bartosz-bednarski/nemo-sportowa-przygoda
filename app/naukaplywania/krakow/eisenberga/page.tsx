import styles from '../../../page.module.scss';
import VideosSection from '@/components/Globals/VideosSection';
import NaukaPlywaniaBasen from '@/components/NaukaPlywaniaBasen/NaukaPlywaniaBasen';
import Bubbles from '@/components/Ui/Bubbles/Bubbles';
import {RODZAJE_LEKCJI} from '@/utils/NaukaPlywaniaBasen/rodzajeLekcji';
import PoolNecessaryItems from '@/components/Globals/PoolNecessaryItems/PoolNecessaryItems';
import PoolTutorial from '@/components/Globals/PoolTutorial/PoolTutorial';
import PoolInformations from '@/components/Globals/PoolInformations/PoolInformations';
import Scrap2 from '@/components/Ui/Scrap/Scrap2';
import {
  BASEN_EISENBERGA_INFORMATIONS,
  BASEN_EISENBERGA_TUTORIAL_DZIECI_MLODZIEZ,
  BASEN_EISENBERGA_TUTORIAL_Z_RODZICAMI,
  NAUKA_PLYWANIA_EISENBERGA,
} from '@/utils/NaukaPlywaniaBasen/naukaPlywaniaEisenberga';
import LessonTypeWrapBox from '@/components/Globals/LessonTypeWrapBox/LessonTypeWrapBox';
import GalleryLink from '@/components/Globals/GalleryLink/GalleryLink';
import {Metadata} from 'next';
import {COLORS} from '@/utils/UI/colors';

export const metadata: Metadata = {
  title: 'Nauka pływania Kraków EISENBERGA',
  description:
    'Zajęcia dla niemowlaków z rodzicami, dzieci i młodzieży od lat 3 oraz dorosłych. Zapraszamy wszystkich chętnych na basen Przystań Eisenberga w Krakowie!',
  metadataBase: new URL(
    'https://nemosportowaprzygoda.pl/naukaplywania/krakow/eisenberga'
  ),
  alternates: {
    canonical:
      'https://nemosportowaprzygoda.pl/naukaplywania/krakow/eisenberga',
    languages: {
      'pl-PL': '/pl-PL',
    },
  },
};

const NaukaPlywaniaEisenberga = () => {
  return (
    <div className={styles.main} style={{background: COLORS['darkBlue']}}>
      <VideosSection
        oneSticker={true}
        oneStickerContent={{
          title: 'NAUKA ',
          title2: 'PŁYWANIA',
          titleStrip: 'EISENBERGA',
          stripBgColor: 'mediumBlue',
          stripTextColor: 'white',
          scale: 2.1,
        }}
        scrapColor="lightBlue"
        col1={{
          video: {src: 'pool-mix-2.mp4', alt: 'nauka pływania niemowlaki'},
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
            src: 'pool-mix-3.mp4',
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
          video: {src: 'pool-mix-4.mp4', alt: 'nauka pływania dorośli'},
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
        about={NAUKA_PLYWANIA_EISENBERGA.zRodzicami.about}
        backgroundColor={NAUKA_PLYWANIA_EISENBERGA.zRodzicami.backgroundColor}
        instructors={NAUKA_PLYWANIA_EISENBERGA.zRodzicami.instructors}
        groups={NAUKA_PLYWANIA_EISENBERGA.zRodzicami.groups}
        priceList={NAUKA_PLYWANIA_EISENBERGA.zRodzicami.priceList}
      />
      <Bubbles colorTop="lightBlue" colorBottom="mediumBlue" />
      <NaukaPlywaniaBasen
        about={NAUKA_PLYWANIA_EISENBERGA.dzieciMlodziez.about}
        backgroundColor={
          NAUKA_PLYWANIA_EISENBERGA.dzieciMlodziez.backgroundColor
        }
        instructors={NAUKA_PLYWANIA_EISENBERGA.dzieciMlodziez.instructors}
        groups={NAUKA_PLYWANIA_EISENBERGA.dzieciMlodziez.groups}
        priceList={NAUKA_PLYWANIA_EISENBERGA.dzieciMlodziez.priceList}
      />
      <Bubbles colorTop="mediumBlue" colorBottom="darkBlue" />
      <NaukaPlywaniaBasen
        about={NAUKA_PLYWANIA_EISENBERGA.dorosli.about}
        backgroundColor={NAUKA_PLYWANIA_EISENBERGA.dorosli.backgroundColor}
        instructors={NAUKA_PLYWANIA_EISENBERGA.dorosli.instructors}
        groups={NAUKA_PLYWANIA_EISENBERGA.dorosli.groups}
        priceList={NAUKA_PLYWANIA_EISENBERGA.dorosli.priceList}
      />
      <Bubbles colorTop="darkBlue" colorBottom="darkBlue" />
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
      <PoolTutorial poolTutorial={BASEN_EISENBERGA_TUTORIAL_Z_RODZICAMI} />
      <Bubbles colorTop="darkBlue" colorBottom="darkBlue" />
      <PoolTutorial poolTutorial={BASEN_EISENBERGA_TUTORIAL_DZIECI_MLODZIEZ} />
      <Bubbles colorTop="darkBlue" colorBottom="darkBlue" />
      <PoolInformations poolInformation={BASEN_EISENBERGA_INFORMATIONS} />
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
export default NaukaPlywaniaEisenberga;
