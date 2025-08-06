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
import Schedule from '@/components/Schedule/Schedule';
import {
  BASEN_STRAKOWA_INFORMATIONS,
  BASEN_STRAKOWA_TUTORIAL,
  NAUKA_PLYWANIA_STRAKOWA,
} from '@/utils/NaukaPlywaniaBasen/naukaPlywaniaStrakowa';

export const metadata: Metadata = {
  title: 'Nauka Pływania Basen Strąkowa Kraków',
  description:
    'Zajęcia nauki pływania dla dzieci i młodzieży. Szkoła pływania Nemo Sportowa Przygoda zaprasza na basen Strąkowa przy SP 158 w Krakowie.',
  metadataBase: new URL(
    'https://nemosportowaprzygoda.pl/naukaplywania/krakow/strakowa'
  ),
  alternates: {
    canonical: 'https://nemosportowaprzygoda.pl/naukaplywania/krakow/strakowa',
    languages: {
      'pl-PL': '/pl-PL',
    },
  },
};

const NaukaPlywaniaStrakowaPage = () => {
  return (
    <div className={styles.main} style={{background: COLORS['darkBlue']}}>
      <VideosSection
        oneSticker={true}
        oneStickerContent={{
          title: 'NAUKA ',
          title2: 'PŁYWANIA',
          titleStrip: 'STRĄKOWA',
          stripBgColor: 'mediumBlue',
          stripTextColor: 'white',
        }}
        scrapColor="lightBlue"
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
            src: 'pool-mix-4.mp4',
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
      <Schedule src="https://app.activenow.io/external/signup_table/load_by_js?city_id=&code=FGdlZsihY3izeZNC&proficiency_id=&school_id=15974&signup_table_id=14598&venue_id=98465&zz=" />
      {/* NAUKA PŁYWAANIA DZIECI I MŁODZIEŻ */}
      <div style={{background: COLORS.lightBlue}}>
        <NaukaPlywaniaAbout {...NAUKA_PLYWANIA_STRAKOWA.dzieciMlodziez.about} />
        <PriceList
          priceList={NAUKA_PLYWANIA_STRAKOWA.dzieciMlodziez.priceList}
        />
        <GroupsBySkill {...NAUKA_PLYWANIA_STRAKOWA.dzieciMlodziez.groups} />
      </div>

      <Bubbles colorTop="lightBlue" colorBottom="mediumBlue" />
      {/* NAUKA PŁYWAANIA DOROŚLI */}
      {/* <div style={{background:COLORS.mediumBlue}}>
<NaukaPlywaniaAbout {...NAUKA_PLYWANIA_STRAKOWA.dorosli.about}/>
<PriceList priceList={NAUKA_PLYWANIA_STRAKOWA.dorosli.priceList} />
<GroupsBySkill {...NAUKA_PLYWANIA_STRAKOWA.dorosli.groups} />
</div> */}
      <PoolNecessaryItems color="mediumBlue" />
      <Bubbles colorTop="mediumBlue" colorBottom="darkBlue" />
      <PoolTutorial poolTutorial={BASEN_STRAKOWA_TUTORIAL} />
      <Bubbles colorTop="darkBlue" colorBottom="darkBlue" />
      <PoolInformations poolInformation={BASEN_STRAKOWA_INFORMATIONS} />
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
export default NaukaPlywaniaStrakowaPage;
