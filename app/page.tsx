import VideosSection from '@/components/Globals/VideosSection';
import styles from './page.module.scss';
import SwimmingSection from '@/components/HomePage/Swimming/SwimmingSection';
import CampsSection from '@/components/HomePage/Camps/CampsSection';
import SignInPopupSwimming from '@/components/Ui/SignInPopup/SignInPopupSwimming';
import {Metadata} from 'next';
// import TrainersSection from "@/components/HomePage/Trainers/TrainersSection";
// import colors from "../styles/fonts.module.scss";
export const metadata: Metadata = {
  title: 'NEMO Sportowa Przygoda - Nauka pływania | Obozy i Półkolonie',
  description:
    'Rozpocznij swoją sportową przygodę z NEMO! Zajmujemy się nauką pływania od niemowlaków aż po dorosłych. Organizujemy półkolonie i obozy - Kraków | Korzenna | Gorlice.',
  metadataBase: new URL('https://nemosportowaprzygoda.pl/'),
  alternates: {
    canonical: 'https://nemosportowaprzygoda.pl/',
    languages: {
      'pl-PL': '/pl-PL',
      'en-US': '/en-US',
    },
  },
  openGraph: {
    url: 'https://nemosportowaprzygoda.pl/',
    type: 'website',
  },
};
export default function Home() {
  return (
    <main className={styles.main}>
      <SignInPopupSwimming />
      <VideosSection
        oneSticker={false}
        scrapColor="mediumBlue"
        col1={{
          video: {src: 'pool-mix-1.mp4', alt: 'nauka pływania'},
          stickerH2: {
            title: 'NAUKA',
            titleStrip: 'PŁYWANIA',
            stripBgColor: 'mediumBlue',
            stripTextColor: 'white',
            scale: 1.15,
          },
        }}
        col2={{
          video: {
            src: 'winter-mix-1.mp4',
            alt: 'obozy i półkolonie',
          },
          stickerH2: {
            title: 'OBOZY',
            titleStrip: 'PÓŁKOLONIE',
            stripBgColor: 'basicOrange',
            stripTextColor: 'white',
            scale: 1.25,
          },
        }}
        col3={{
          video: {src: 'summer-mix-1.mp4', alt: 'oferty specjalne'},
          stickerH2: {
            title: 'OFERTY',
            titleStrip: 'SPECJALNE',
            stripBgColor: 'basicBrown',
            stripTextColor: 'white',
            scale: 1.15,
          },
        }}
      />
      <SwimmingSection />
      <CampsSection />
      {/* <TrainersSection /> */}
    </main>
  );
}
