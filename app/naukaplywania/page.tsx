import styles from '../page.module.scss';
import VideosSection from '@/components/Globals/VideosSection/VideosSection';
import {NAUKA_PLYWANIA} from '@/utils/NaukaPlywania/NaukaPlywania';
import Bubbles from '@/components/Ui/Bubbles/Bubbles';
import {Metadata} from 'next';
import {COLORS} from '@/utils/UI/colors';
import NaukaPlywania from '@/components/NaukaPlywania/NaukaPlywaniaPage/NaukaPlywania';
import GalleryLink from '@/components/Ui/Links/GalleryLink/GalleryLink';
import Image1 from '@/public/assets/videos/pool-mix-5.webp';
import Image2 from '@/public/assets/videos/pool-mix-3.webp';
import Image3 from '@/public/assets/videos/pool-mix-1.webp';
import FabContact from '@/components/Ui/Buttons/FabContact/FabContact';

export const metadata: Metadata = {
  title: 'Nauka pływania - KRAKÓW|KORZENNA|GORLICE',
  description:
    'Zapraszamy na zajęcia pływania wszystkie niemowlaki, dzieci i młodzież oraz dorosłych! - Lokalizacje: Kraków | Korzenna | Gorlice.',
  metadataBase: new URL('https://nemosportowaprzygoda.pl/naukaplywania'),
  alternates: {
    canonical: 'https://nemosportowaprzygoda.pl/naukaplywania',
    languages: {
      'pl-PL': '/pl-PL',
    },
  },
};

const NaukaPlywaniaPage = () => {
  return (
    <main className={styles.main} style={{background: COLORS['darkBlue']}}>
      <FabContact contactKrakow={true} contactMalopolska={true} />
      <VideosSection
        oneSticker={false}
        scrapColor="lightBlue"
        col1={{
          video: {
            src: 'pool-mix-5.mp4',
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
            src: 'pool-mix-1.mp4',
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
      <NaukaPlywania
        about={NAUKA_PLYWANIA.zRodzicami.about}
        pools={NAUKA_PLYWANIA.zRodzicami.pools}
        backgroundColor={NAUKA_PLYWANIA.zRodzicami.backgroundColor}
        groups={NAUKA_PLYWANIA.zRodzicami.groups}
      />
      <Bubbles colorTop="lightBlue" colorBottom="mediumBlue" />
      <NaukaPlywania
        about={NAUKA_PLYWANIA.dzieciMlodziez.about}
        pools={NAUKA_PLYWANIA.dzieciMlodziez.pools}
        backgroundColor={NAUKA_PLYWANIA.dzieciMlodziez.backgroundColor}
        groups={NAUKA_PLYWANIA.dzieciMlodziez.groups}
      />
      <Bubbles colorTop="mediumBlue" colorBottom="darkBlue" />
      <NaukaPlywania
        about={NAUKA_PLYWANIA.dorosli.about}
        pools={NAUKA_PLYWANIA.dorosli.pools}
        backgroundColor={NAUKA_PLYWANIA.dorosli.backgroundColor}
        groups={NAUKA_PLYWANIA.dorosli.groups}
      />
      <GalleryLink
        href="/galeria"
        img="/gallery/galleryLinks/swimming.webp"
        bgColor="darkBlue"
        textColor="white"
      />
    </main>
  );
};
export default NaukaPlywaniaPage;
