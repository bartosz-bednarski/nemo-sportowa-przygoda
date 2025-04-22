import styles from '../../page.module.scss';
import VideosSection from '@/components/Globals/VideosSection/VideosSection';
import Scrap2 from '@/components/Ui/Scrap/Scrap2';
import {Metadata} from 'next';
import {COLORS} from '@/utils/UI/colors';
import NaukaPlywaniaMiasto from '@/components/NaukaPlywania/NaukaPlywaniaMiasto/NaukaPlywaniaMiasto';
import GalleryLink from '@/components/Ui/Links/GalleryLink/GalleryLink';
import Image1 from '@/public/assets/videos/pool-mix-1.webp';
import Image2 from '@/public/assets/videos/pool-mix-3.webp';
import Image3 from '@/public/assets/videos/pool-mix-5.webp';

export const metadata: Metadata = {
  title: 'Nauka pływania KRAKÓW',
  description:
    'Zapraszamy na zajęcia pływania wszystkie niemowlaki, dzieci i młodzież oraz dorosłych w Krakowie! - Przystań Eisenberga | Bronowianka | Pływaczek.',
  metadataBase: new URL('https://nemosportowaprzygoda.pl/naukaplywania/krakow'),
  alternates: {
    canonical: 'https://nemosportowaprzygoda.pl/naukaplywania/krakow',
    languages: {
      'pl-PL': '/pl-PL',
    },
  },
};

const NaukaPlywaniaKrakow = () => {
  return (
    <div
      className={styles.main}
      style={{paddingBottom: '0rem', background: COLORS['lightBlue']}}
    >
      <VideosSection
        oneSticker={true}
        scrapColor="lightBlue"
        oneStickerContent={{
          title: 'NAUKA ',
          title2: 'PŁYWANIA',
          titleStrip: 'KRAKÓW',
          stripBgColor: 'mediumBlue',
          stripTextColor: 'white',
        }}
        col1={{
          video: {
            src: 'pool-mix-1.mp4',
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
      <NaukaPlywaniaMiasto />
      <GalleryLink
        href="/galeria"
        img="/gallery/galleryLinks/swimming.webp"
        bgColor="lightBlue"
        textColor="white"
      />
      <Scrap2 position="bottom" color="darkBlue" />
    </div>
  );
};
export default NaukaPlywaniaKrakow;
