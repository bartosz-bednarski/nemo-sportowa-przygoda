import styles from '../../../page.module.scss';
import VideosSection from '@/components/Globals/VideosSection/VideosSection';
import Bubbles from '@/components/Ui/Bubbles/Bubbles';
import Scrap2 from '@/components/Ui/Scrap/Scrap2';
import {Metadata} from 'next';
import {COLORS} from '@/utils/UI/colors';
import PoolNecessaryItems from '@/components/NaukaPlywania/Ui/PoolNecessaryItems/PoolNecessaryItems';
import PoolTutorial from '@/components/NaukaPlywania/Ui/PoolTutorial/PoolTutorial';
import PoolInformations from '@/components/NaukaPlywania/Ui/PoolInformations/PoolInformations';
import GalleryLink from '@/components/Ui/Links/GalleryLink/GalleryLink';
import Image1 from '@/public/assets/videos/pool-mix-2.webp';
import Image2 from '@/public/assets/videos/pool-mix-3.webp';
import Image3 from '@/public/assets/videos/pool-mix-4.webp';
import NaukaPlywaniaAbout from '@/components/NaukaPlywania/Ui/NaukaPlywaniaAbout/NaukaPlywaniaAbout';
import PriceList from '@/components/NaukaPlywania/Ui/PriceList/PriceList';
import GroupsBySkill from '@/components/NaukaPlywania/Ui/GroupsBySkill/GroupsBySkill';
import { BASEN_FABRYCZNA_INFORMATIONS, BASEN_FABRYCZNA_TUTORIAL, NAUKA_PLYWANIA_FABRYCZNA } from '@/utils/NaukaPlywaniaBasen/naukaPlywaniaFabryczna';

export const metadata: Metadata = {
  title: 'Nauka pływania Basen Fabryczna Kraków',
  description:
    'Nasze zajęcia są przeznaczone dla dzieci i młodzieży od lat 3 oraz dorosłych. Zapraszamy wszystkich chętnych na basen Pływaczek w Krakowie!',
  metadataBase: new URL(
    'https://nemosportowaprzygoda.pl/naukaplywania/krakow/fabryczna'
  ),
  alternates: {
    canonical: 'https://nemosportowaprzygoda.pl/naukaplywania/krakow/fabryczna',
    languages: {
      'pl-PL': '/pl-PL',
    },
  },
};

const NaukaPlywaniaFabryczna = () => {
  return (
    <div className={styles.main} style={{background: COLORS['darkBlue']}}>
      <VideosSection
        oneSticker={true}
        oneStickerContent={{
          title: 'NAUKA ',
          title2: 'PŁYWANIA',
          titleStrip: 'FABRYCZNA',
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
       {/* NAUKA PŁYWAANIA NIEMOWLAKI */}
      <div style={{background:COLORS.lightBlue}}>
<NaukaPlywaniaAbout {...NAUKA_PLYWANIA_FABRYCZNA.zRodzicami.about}/>
<PriceList priceList={NAUKA_PLYWANIA_FABRYCZNA.zRodzicami.priceList} />
<GroupsBySkill {...NAUKA_PLYWANIA_FABRYCZNA.zRodzicami.groups} />
</div>
<Bubbles colorTop="lightBlue" colorBottom="mediumBlue" />
 {/* NAUKA PŁYWAANIA DZIECI I MŁODZIEŻ */}
      <div style={{background:COLORS.mediumBlue}}>
<NaukaPlywaniaAbout {...NAUKA_PLYWANIA_FABRYCZNA.dzieciMlodziez.about}/>
<PriceList priceList={NAUKA_PLYWANIA_FABRYCZNA.dzieciMlodziez.priceList} />
<GroupsBySkill {...NAUKA_PLYWANIA_FABRYCZNA.dzieciMlodziez.groups} />
</div>
     
      <Bubbles colorTop="mediumBlue" colorBottom="darkBlue" />
       {/* NAUKA PŁYWAANIA DOROŚLI */}
      {/* <div style={{background:COLORS.mediumBlue}}>
<NaukaPlywaniaAbout {...NAUKA_PLYWANIA_FABRYCZNA.dorosli.about}/>
<PriceList priceList={NAUKA_PLYWANIA_FABRYCZNA.dorosli.priceList} />
<GroupsBySkill {...NAUKA_PLYWANIA_FABRYCZNA.dorosli.groups} />
</div> */}
     
      <PoolNecessaryItems color="darkBlue" />
      <Bubbles colorTop="darkBlue" colorBottom="darkBlue" />
      <PoolTutorial poolTutorial={BASEN_FABRYCZNA_TUTORIAL} />
      <Bubbles colorTop="darkBlue" colorBottom="darkBlue" />
      <PoolInformations poolInformation={BASEN_FABRYCZNA_INFORMATIONS} />
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
export default NaukaPlywaniaFabryczna;
