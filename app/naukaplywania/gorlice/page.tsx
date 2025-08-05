import styles from '../../page.module.scss';
import VideosSection from '@/components/Globals/VideosSection/VideosSection';
import {
  BASEN_GORLICE_INFORMATIONS,
  BASEN_GORLICE_TUTORIAL,
  NAUKA_PLYWANIA_GORLICE,
  PRICE_LIST_AQUA_FITNESS_GORLICE,
} from '@/utils/NaukaPlywaniaBasen/naukaPlywaniaGorlice';
import {RODZAJE_LEKCJI} from '@/utils/NaukaPlywaniaBasen/rodzajeLekcji';
import Bubbles from '@/components/Ui/Bubbles/Bubbles';
import Scrap2 from '@/components/Ui/Scrap/Scrap2';
import {Metadata} from 'next';
// import Schedule from '@/components/Schedule/Schedule';
import {COLORS} from '@/utils/UI/colors';
import PoolNecessaryItems from '@/components/NaukaPlywania/Ui/PoolNecessaryItems/PoolNecessaryItems';
import PoolTutorial from '@/components/NaukaPlywania/Ui/PoolTutorial/PoolTutorial';
import PoolInformations from '@/components/NaukaPlywania/Ui/PoolInformations/PoolInformations';
import GalleryLink from '@/components/Ui/Links/GalleryLink/GalleryLink';
import Image1 from '@/public/assets/videos/toddler-mix-1.webp';
import Image2 from '@/public/assets/videos/toddler-mix-2.webp';
import Image3 from '@/public/assets/videos/toddler-mix-3.webp';
import SectionAbout from '@/components/AquaFitness/SectionAbout/SectionAbout';
import PriceList from '@/components/NaukaPlywania/Ui/PriceList/PriceList';
import NaukaPlywaniaAbout from '@/components/NaukaPlywania/Ui/NaukaPlywaniaAbout/NaukaPlywaniaAbout';
import LessonsByMembersAmount from '@/components/NaukaPlywania/Ui/LessonsByMembersAmount/LessonsByMembersAmount';
import GroupsBySkill from '@/components/NaukaPlywania/Ui/GroupsBySkill/GroupsBySkill';

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
        }}
        scrapColor="lightBlue"
        col1={{
          video: {
            src: 'toddler-mix-1.mp4',
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
            src: 'toddler-mix-2.mp4',
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
            src: 'toddler-mix-3.mp4',
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
      {/* <Schedule src="https://app.activenow.io/external/signup_table/load_by_js?city_id=&code=wdiOmW2rUoDYznOz&proficiency_id=&school_id=10290&signup_table_id=3906&venue_id=74801&zz=" /> */}
{/* NAUKA PŁYWAANIA BOBASY */}
<div style={{background:COLORS.lightBlue}}>
<NaukaPlywaniaAbout {...NAUKA_PLYWANIA_GORLICE.zRodzicami.about}/>
<PriceList priceList={NAUKA_PLYWANIA_GORLICE.zRodzicami.priceList} />
<GroupsBySkill {...NAUKA_PLYWANIA_GORLICE.zRodzicami.groups} />
</div>
     
      <Bubbles colorTop="lightBlue" colorBottom="mediumBlue" />
      {/* NAUKA PŁYWAANIA DZIECI I MŁODZIEŻ */}
      <div style={{background:COLORS.mediumBlue}}>
<NaukaPlywaniaAbout {...NAUKA_PLYWANIA_GORLICE.dzieciMlodziez.about}/>
<PriceList priceList={NAUKA_PLYWANIA_GORLICE.dzieciMlodziez.priceList} />
<GroupsBySkill {...NAUKA_PLYWANIA_GORLICE.dzieciMlodziez.groups} />
</div>
     
      <Bubbles colorTop="mediumBlue" colorBottom="darkBlue" />
       {/* NAUKA PŁYWAANIA DOROŚLI */}
       <div style={{background:COLORS.darkBlue}}>
<NaukaPlywaniaAbout {...NAUKA_PLYWANIA_GORLICE.dorosli.about}/>
<PriceList priceList={NAUKA_PLYWANIA_GORLICE.dorosli.priceList} />
<GroupsBySkill {...NAUKA_PLYWANIA_GORLICE.dorosli.groups} />
</div>
     
      <Bubbles colorTop="darkBlue" colorBottom="darkBlue" />
      <LessonsByMembersAmount
        bgImage="grupowe.png"
        bgColor="darkBlue"
        lessonTypes={[
          RODZAJE_LEKCJI.grupowe,
          RODZAJE_LEKCJI.indywidualne,
          RODZAJE_LEKCJI.dwuosobowe,
          RODZAJE_LEKCJI.trzyosobowe,
        ]}
      />
      <PoolNecessaryItems color="darkBlue" />
      <Bubbles colorTop="darkBlue" colorBottom="darkBlue" />
      <PoolTutorial poolTutorial={BASEN_GORLICE_TUTORIAL} />
      <Bubbles colorTop="darkBlue" colorBottom="darkBlue" />
      <SectionAbout backgroundColor="darkBlue" />
      <PriceList priceList={PRICE_LIST_AQUA_FITNESS_GORLICE} />
      <Bubbles colorTop="darkBlue" colorBottom="darkBlue" />
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
